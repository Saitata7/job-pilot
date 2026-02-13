import type { JobDetector } from './index';
import type { ExtractedJob } from '@shared/types/job.types';

export class GreenhouseDetector implements JobDetector {
  platform = 'greenhouse' as const;

  getMainSelector(): string {
    return '#app_body, .job-post, #content';
  }

  isJobPage(): boolean {
    return (
      document.querySelector('#app_body') !== null ||
      document.querySelector('.job-post') !== null ||
      window.location.hostname.includes('greenhouse.io')
    );
  }

  getJobId(): string | null {
    const match = window.location.href.match(/jobs\/(\d+)/);
    if (match) {
      const company = this.getCompanyFromUrl();
      return `greenhouse-${company}-${match[1]}`;
    }
    return null;
  }

  private getCompanyFromUrl(): string {
    // boards.greenhouse.io/company/jobs/123
    const boardsMatch = window.location.href.match(/boards\.greenhouse\.io\/([\w-]+)/);
    if (boardsMatch) return boardsMatch[1];

    // company.greenhouse.io
    const subdomainMatch = window.location.hostname.match(/([\w-]+)\.greenhouse\.io/);
    if (subdomainMatch && subdomainMatch[1] !== 'boards') {
      return subdomainMatch[1];
    }

    return 'unknown';
  }

  async extract(): Promise<ExtractedJob> {
    // Try API first (Greenhouse has a public API for job boards)
    const apiJob = await this.fetchFromApi();
    if (apiJob) return apiJob;

    // Fall back to DOM scraping
    return this.extractFromDOM();
  }

  private async fetchFromApi(): Promise<ExtractedJob | null> {
    const match = window.location.href.match(/boards\.greenhouse\.io\/([\w-]+)\/jobs\/(\d+)/);
    if (!match) return null;

    const [, boardToken, jobId] = match;

    try {
      const response = await fetch(
        `https://boards-api.greenhouse.io/v1/boards/${boardToken}/jobs/${jobId}`
      );

      if (!response.ok) return null;

      const data = await response.json();

      return {
        title: data.title || '',
        company: data.company?.name || boardToken,
        location: data.location?.name || '',
        description: this.stripHtml(data.content || ''),
        descriptionHtml: data.content,
      };
    } catch {
      return null;
    }
  }

  private extractFromDOM(): ExtractedJob {
    const title = this.getText([
      '.job-title',
      '.app-title',
      'h1.heading',
      '#header h1',
      'h1',
    ]);

    const company = this.getText([
      '.company-name',
      '.company',
      '#logo img',
    ]) || this.getCompanyFromUrl();

    const location = this.getText([
      '.location',
      '.job-location',
      '.location-name',
    ]);

    const description = this.getText([
      '#content',
      '.job-description',
      '.job__description',
      '.content',
    ]);

    const descriptionHtml = this.getHtml([
      '#content',
      '.job-description',
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
