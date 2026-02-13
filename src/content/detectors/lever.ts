import type { JobDetector } from './index';
import type { ExtractedJob } from '@shared/types/job.types';

export class LeverDetector implements JobDetector {
  platform = 'lever' as const;

  getMainSelector(): string {
    return '.posting-headline, [data-qa="job-title"], .posting';
  }

  isJobPage(): boolean {
    return (
      document.querySelector('.posting-headline') !== null ||
      document.querySelector('[data-qa="job-title"]') !== null ||
      document.querySelector('.posting') !== null
    );
  }

  getJobId(): string | null {
    const match = window.location.href.match(/jobs\.lever\.co\/([\w-]+)\/([\w-]+)/);
    if (match) {
      return `lever-${match[1]}-${match[2]}`;
    }
    return null;
  }

  private getCompanyFromUrl(): string {
    const match = window.location.href.match(/jobs\.lever\.co\/([\w-]+)/);
    return match ? match[1] : 'unknown';
  }

  async extract(): Promise<ExtractedJob> {
    // Try API first
    const apiJob = await this.fetchFromApi();
    if (apiJob) return apiJob;

    // Fall back to DOM scraping
    return this.extractFromDOM();
  }

  private async fetchFromApi(): Promise<ExtractedJob | null> {
    const match = window.location.href.match(/jobs\.lever\.co\/([\w-]+)\/([\w-]+)/);
    if (!match) return null;

    const [, company, postingId] = match;

    try {
      const response = await fetch(
        `https://api.lever.co/v0/postings/${company}/${postingId}`
      );

      if (!response.ok) return null;

      const data = await response.json();

      return {
        title: data.text || '',
        company: data.categories?.team || company,
        location: data.categories?.location || '',
        description: this.stripHtml(data.description || '') + '\n\n' +
          (data.lists || []).map((list: { text: string; content: string }) =>
            `${list.text}\n${this.stripHtml(list.content)}`
          ).join('\n\n'),
        descriptionHtml: data.descriptionPlain ? undefined : data.description,
      };
    } catch (error) {
      console.debug('[Lever] API fetch failed:', (error as Error).message);
      return null;
    }
  }

  private extractFromDOM(): ExtractedJob {
    const title = this.getText([
      '.posting-headline h2',
      '[data-qa="job-title"]',
      '.posting-title',
      'h1',
    ]);

    const company = this.getCompanyFromUrl();

    const location = this.getText([
      '.posting-categories .location',
      '[data-qa="location"]',
      '.posting-category.location',
    ]);

    // Lever structures content in sections
    const sections: string[] = [];
    const sectionEls = document.querySelectorAll('.posting-section, .section');

    sectionEls.forEach((section) => {
      const header = section.querySelector('h3, .posting-section-header');
      const content = section.querySelector('.content, .posting-section-body');

      if (header && content) {
        sections.push(`${header.textContent?.trim()}\n${content.textContent?.trim()}`);
      } else if (content) {
        sections.push(content.textContent?.trim() || '');
      }
    });

    const description = sections.join('\n\n') || this.getText([
      '.posting-page-body',
      '.content',
      'main',
    ]);

    const descriptionHtml = this.getHtml([
      '.posting-page-body',
    ]);

    return {
      title: title || 'Unknown Title',
      company: company || 'Unknown Company',
      location,
      description: description || '',
      descriptionHtml,
    };
  }

  private getText(selectors: string[]): string {
    for (const selector of selectors) {
      const el = document.querySelector(selector);
      if (el?.textContent) {
        return el.textContent.trim();
      }
    }
    return '';
  }

  private getHtml(selectors: string[]): string | undefined {
    for (const selector of selectors) {
      const el = document.querySelector(selector);
      if (el?.innerHTML) {
        return el.innerHTML;
      }
    }
    return undefined;
  }

  private stripHtml(html: string): string {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
}
