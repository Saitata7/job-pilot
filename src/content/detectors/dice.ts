import type { JobDetector } from './index';
import type { ExtractedJob } from '@shared/types/job.types';

export class DiceDetector implements JobDetector {
  platform = 'dice' as const;

  getMainSelector(): string {
    return '[data-cy="jobDescription"], .job-description, #jobDescription, .jobDesc';
  }

  isJobPage(): boolean {
    return (
      window.location.hostname.includes('dice.com') &&
      (window.location.pathname.includes('/job-detail/') ||
       window.location.pathname.includes('/jobs/') ||
       document.querySelector('[data-cy="jobDescription"]') !== null ||
       document.querySelector('.job-description') !== null)
    );
  }

  getJobId(): string | null {
    // Extract from URL: /job-detail/xxx or /jobs/xxx
    const match = window.location.pathname.match(/\/(?:job-detail|jobs)\/([^\/\?]+)/);
    if (match) return `dice-${match[1]}`;

    // From data attribute
    const jobEl = document.querySelector('[data-job-id]');
    if (jobEl) {
      const id = jobEl.getAttribute('data-job-id');
      if (id) return `dice-${id}`;
    }

    return null;
  }

  async extract(): Promise<ExtractedJob> {
    // Try JSON-LD first
    const jsonLdJob = this.extractFromJsonLd();
    if (jsonLdJob) return jsonLdJob;

    // Fall back to DOM scraping
    return this.extractFromDOM();
  }

  private extractFromJsonLd(): ExtractedJob | null {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');

    for (const script of scripts) {
      try {
        const data = JSON.parse(script.textContent || '');

        if (data['@type'] === 'JobPosting') {
          return {
            title: data.title || '',
            company: data.hiringOrganization?.name || '',
            location: this.extractLocation(data.jobLocation),
            description: this.stripHtml(data.description || ''),
            descriptionHtml: data.description,
            employmentType: this.parseEmploymentType(data.employmentType),
            salary: this.parseSalary(data.baseSalary),
            postedDate: data.datePosted ? new Date(data.datePosted) : undefined,
          };
        }
      } catch (error) {
        console.debug('[Dice] JSON-LD parse failed:', (error as Error).message);
      }
    }

    return null;
  }

  private extractFromDOM(): ExtractedJob {
    const title = this.getText([
      '[data-cy="jobTitle"]',
      '.job-title',
      'h1[class*="title"]',
      '.jobTitle',
      'h1',
    ]);

    const company = this.getText([
      '[data-cy="companyName"]',
      '.company-name',
      '[class*="employer"]',
      '.companyName',
      'a[href*="/company/"]',
    ]);

    const location = this.getText([
      '[data-cy="location"]',
      '.job-location',
      '[class*="location"]',
      '.location',
    ]);

    const description = this.getText([
      '[data-cy="jobDescription"]',
      '.job-description',
      '#jobDescription',
      '.jobDesc',
      '[class*="description"]',
    ]);

    const descriptionHtml = this.getHtml([
      '[data-cy="jobDescription"]',
      '.job-description',
      '#jobDescription',
    ]);

    // Extract employment type
    const employmentTypeText = this.getText([
      '[data-cy="employmentType"]',
      '.employment-type',
      '[class*="jobType"]',
    ]);

    // Extract salary
    const salaryText = this.getText([
      '[data-cy="salary"]',
      '.salary',
      '[class*="compensation"]',
      '[class*="salary"]',
    ]);

    return {
      title: title || 'Unknown Title',
      company: company || 'Unknown Company',
      location,
      description: description || '',
      descriptionHtml,
      employmentType: this.parseEmploymentType(employmentTypeText),
      salary: this.parseSalaryFromText(salaryText),
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

  private extractLocation(jobLocation: unknown): string {
    if (!jobLocation) return '';

    if (typeof jobLocation === 'string') return jobLocation;

    if (Array.isArray(jobLocation)) {
      return jobLocation.map(loc => this.extractLocation(loc)).filter(Boolean).join(', ');
    }

    if (typeof jobLocation === 'object') {
      const loc = jobLocation as Record<string, unknown>;
      const address = loc.address as Record<string, string> | undefined;

      if (address) {
        const parts = [
          address.addressLocality,
          address.addressRegion,
        ].filter(Boolean);
        return parts.join(', ');
      }

      if (loc.name) return String(loc.name);
    }

    return '';
  }

  private parseEmploymentType(type: string | string[] | undefined): ExtractedJob['employmentType'] {
    if (!type) return undefined;
    const typeStr = Array.isArray(type) ? type[0] : type;
    const lower = typeStr.toLowerCase();

    if (lower.includes('full')) return 'full-time';
    if (lower.includes('part')) return 'part-time';
    if (lower.includes('contract') || lower.includes('c2c') || lower.includes('w2')) return 'contract';
    if (lower.includes('intern')) return 'internship';
    return undefined;
  }

  private parseSalary(baseSalary: unknown): ExtractedJob['salary'] {
    if (!baseSalary || typeof baseSalary !== 'object') return undefined;

    const salary = baseSalary as Record<string, unknown>;
    const value = salary.value as Record<string, unknown> | undefined;

    if (!value) return undefined;

    return {
      min: typeof value.minValue === 'number' ? value.minValue : undefined,
      max: typeof value.maxValue === 'number' ? value.maxValue : undefined,
      currency: (salary.currency as string) || 'USD',
      period: 'annual',
    };
  }

  private parseSalaryFromText(text: string): ExtractedJob['salary'] {
    if (!text) return undefined;

    // Match patterns like "$100,000 - $150,000" or "$50/hr - $75/hr"
    const rangeMatch = text.match(/\$?([\d,]+)\s*[-–]\s*\$?([\d,]+)/);
    if (rangeMatch) {
      const min = parseInt(rangeMatch[1].replace(/,/g, ''), 10);
      const max = parseInt(rangeMatch[2].replace(/,/g, ''), 10);
      const isHourly = /hour|hr/i.test(text);

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
