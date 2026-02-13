import type { JobDetector } from './index';
import type { ExtractedJob } from '@shared/types/job.types';

export class IndeedDetector implements JobDetector {
  platform = 'indeed' as const;

  getMainSelector(): string {
    return '#jobDescriptionText, [data-testid="jobsearch-ViewJobPage"], .jobsearch-JobComponent';
  }

  isJobPage(): boolean {
    return (
      document.querySelector('[data-testid="jobsearch-ViewJobPage"]') !== null ||
      document.querySelector('#jobDescriptionText') !== null ||
      document.querySelector('.jobsearch-JobComponent') !== null
    );
  }

  getJobId(): string | null {
    // From URL param
    const url = new URL(window.location.href);
    const jk = url.searchParams.get('jk') || url.searchParams.get('vjk');
    if (jk) return `indeed-${jk}`;

    // From data attribute
    const jobCard = document.querySelector('[data-jk]');
    if (jobCard) {
      const id = jobCard.getAttribute('data-jk');
      if (id) return `indeed-${id}`;
    }

    return null;
  }

  async extract(): Promise<ExtractedJob> {
    const title = this.getText([
      '[data-testid="jobsearch-JobInfoHeader-title"]',
      '.jobsearch-JobInfoHeader-title',
      'h1.icl-u-xs-mb--xs',
      '.jobTitle',
    ]);

    const company = this.getText([
      '[data-testid="inlineHeader-companyName"]',
      '.jobsearch-InlineCompanyRating-companyHeader',
      '[data-company-name="true"]',
      '.icl-u-lg-mr--sm',
    ]);

    const location = this.getText([
      '[data-testid="job-location"]',
      '[data-testid="inlineHeader-companyLocation"]',
      '.jobsearch-JobInfoHeader-subtitle > div:last-child',
      '.icl-u-xs-mt--xs',
    ]);

    const description = this.getText([
      '#jobDescriptionText',
      '[data-testid="jobDescriptionText"]',
      '.jobsearch-jobDescriptionText',
    ]);

    const descriptionHtml = this.getHtml([
      '#jobDescriptionText',
      '[data-testid="jobDescriptionText"]',
    ]);

    // Try to extract salary
    const salaryText = this.getText([
      '[data-testid="attribute_snippet_testid"]',
      '.jobsearch-JobMetadataHeader-item',
      '.salary-snippet-container',
    ]);

    const salary = this.parseSalary(salaryText);

    return {
      title: title || 'Unknown Title',
      company: company || 'Unknown Company',
      location,
      description: description || '',
      descriptionHtml,
      salary,
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

  private parseSalary(text: string): ExtractedJob['salary'] {
    if (!text) return undefined;

    // Match patterns like "$50,000 - $70,000 a year" or "$25 - $35 an hour"
    const match = text.match(/\$?([\d,]+)\s*[-–]\s*\$?([\d,]+)\s*(an?\s*(hour|year))?/i);

    if (match) {
      const min = parseInt(match[1].replace(/,/g, ''), 10);
      const max = parseInt(match[2].replace(/,/g, ''), 10);
      const isHourly = match[4]?.toLowerCase() === 'hour';

      return {
        min,
        max,
        currency: 'USD',
        period: isHourly ? 'hourly' : 'annual',
      };
    }

    return undefined;
  }
}
