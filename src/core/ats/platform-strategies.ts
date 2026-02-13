/**
 * Platform-Specific ATS Optimization Strategies
 * Based on research from Jobscan, HR Agent Labs, and industry best practices
 *
 * Key insights:
 * - Greenhouse: Uses keyword frequency for search rankings (more mentions = higher rank)
 * - Lever: Recognizes keyword variations, plurals, and tenses (more flexible)
 * - Workday: Requires EXACT matches (strictest - must match job description exactly)
 * - Taleo: Uses semantic matching + keyword density
 * - iCIMS: Focuses on skills extraction
 */

// Platform type is used for type reference in the strategy functions

export interface PlatformStrategy {
  name: string;
  matchingType: 'exact' | 'semantic' | 'frequency' | 'hybrid';
  keywordFlexibility: 'strict' | 'moderate' | 'flexible';
  recommendations: string[];
  keywordRules: KeywordRule[];
  formatRules: FormatRule[];
  priorityKeywordPlacement: string[];
}

export interface KeywordRule {
  rule: string;
  importance: 'critical' | 'high' | 'medium' | 'low';
  example?: string;
}

export interface FormatRule {
  rule: string;
  reason: string;
}

export const PLATFORM_STRATEGIES: Record<string, PlatformStrategy> = {
  greenhouse: {
    name: 'Greenhouse',
    matchingType: 'frequency',
    keywordFlexibility: 'moderate',
    recommendations: [
      'Include keywords 2-3 times naturally throughout resume',
      'Higher keyword frequency = higher search ranking',
      'Use both full terms and acronyms (e.g., "Machine Learning" and "ML")',
      'Focus on human readability - recruiters still read the full resume',
      'Greenhouse understands synonyms (managed = led)',
    ],
    keywordRules: [
      { rule: 'Repeat important keywords 2-3 times', importance: 'critical' },
      { rule: 'Include both acronyms and full terms', importance: 'high', example: '"AWS" and "Amazon Web Services"' },
      { rule: 'Use natural variations (manage, managed, managing)', importance: 'medium' },
      { rule: 'Place top keywords in Skills section AND experience bullets', importance: 'high' },
    ],
    formatRules: [
      { rule: 'Use standard section headers', reason: 'Greenhouse extracts specific sections' },
      { rule: 'Keep formatting simple', reason: 'Complex formatting can break parsing' },
      { rule: 'Include a clear Skills section', reason: 'Skills are indexed separately' },
    ],
    priorityKeywordPlacement: ['Skills', 'Professional Summary', 'Experience bullets', 'Job titles'],
  },

  lever: {
    name: 'Lever',
    matchingType: 'semantic',
    keywordFlexibility: 'flexible',
    recommendations: [
      'Lever recognizes plurals and tenses automatically',
      'Use natural language - semantic matching understands context',
      'Synonyms are treated as equivalent (managed = led)',
      'Focus on demonstrating skills through achievements',
      'Less need for exact keyword matching',
    ],
    keywordRules: [
      { rule: 'Write naturally - Lever understands context', importance: 'high' },
      { rule: 'Include related terms and synonyms', importance: 'medium' },
      { rule: 'Focus on achievements with measurable results', importance: 'critical' },
      { rule: 'Don\'t worry about exact tense matching', importance: 'low' },
    ],
    formatRules: [
      { rule: 'Clean, standard formatting', reason: 'Lever has good parsing' },
      { rule: 'Use bullet points for achievements', reason: 'Improves readability for both ATS and humans' },
    ],
    priorityKeywordPlacement: ['Experience achievements', 'Skills', 'Summary'],
  },

  workday: {
    name: 'Workday',
    matchingType: 'exact',
    keywordFlexibility: 'strict',
    recommendations: [
      'EXACT keyword matches required - copy from job description',
      'Include multiple variations of each keyword',
      'Workday does NOT recognize tenses, abbreviations, or acronyms automatically',
      'If JD says "project management" - use that exact phrase',
      'Add both singular and plural forms',
    ],
    keywordRules: [
      { rule: 'Use EXACT phrases from job description', importance: 'critical', example: 'If JD says "data-driven", use "data-driven" not "data driven"' },
      { rule: 'Include both acronyms AND full terms', importance: 'critical', example: '"ML" and "Machine Learning" separately' },
      { rule: 'Add singular AND plural forms', importance: 'high', example: '"developer" and "developers"' },
      { rule: 'Match capitalization patterns from JD', importance: 'medium' },
      { rule: 'Include different tenses if mentioned in JD', importance: 'high', example: '"managed", "manage", "managing"' },
    ],
    formatRules: [
      { rule: 'Use .docx format when possible', reason: 'Better parsing than PDF' },
      { rule: 'Avoid tables and columns', reason: 'Workday struggles with complex layouts' },
      { rule: 'No headers/footers for contact info', reason: '25% of contact info in headers gets lost' },
      { rule: 'Standard section names only', reason: '"Work Experience" not "My Journey"' },
    ],
    priorityKeywordPlacement: ['Skills section', 'Experience section', 'Summary'],
  },

  taleo: {
    name: 'Taleo (Oracle)',
    matchingType: 'hybrid',
    keywordFlexibility: 'moderate',
    recommendations: [
      'Uses both keyword matching and semantic analysis',
      'Knockout questions are common - answer honestly',
      'Include keywords in context, not just lists',
      'Focus on recent experience (last 10 years)',
    ],
    keywordRules: [
      { rule: 'Include keywords in context (sentences)', importance: 'high' },
      { rule: 'Match job title keywords exactly', importance: 'critical' },
      { rule: 'Include industry-specific terminology', importance: 'high' },
    ],
    formatRules: [
      { rule: 'Use standard fonts (Arial, Calibri, Times)', reason: 'Better parsing' },
      { rule: 'Avoid graphics and images', reason: 'Cannot be parsed' },
    ],
    priorityKeywordPlacement: ['Job titles', 'Skills', 'Experience descriptions'],
  },

  icims: {
    name: 'iCIMS',
    matchingType: 'semantic',
    keywordFlexibility: 'moderate',
    recommendations: [
      'Strong skills extraction capabilities',
      'Focus on technical skills with clear proficiency',
      'Certifications are weighted highly',
      'Include years of experience with each skill',
    ],
    keywordRules: [
      { rule: 'List skills with years of experience', importance: 'high', example: '"Python (5 years)"' },
      { rule: 'Include certification names exactly', importance: 'critical' },
      { rule: 'Use skill categories', importance: 'medium' },
    ],
    formatRules: [
      { rule: 'Create detailed Skills section', reason: 'iCIMS focuses on skills extraction' },
      { rule: 'List certifications with dates', reason: 'Certifications are weighted highly' },
    ],
    priorityKeywordPlacement: ['Skills', 'Certifications', 'Experience'],
  },

  linkedin: {
    name: 'LinkedIn',
    matchingType: 'semantic',
    keywordFlexibility: 'flexible',
    recommendations: [
      'LinkedIn uses AI-powered semantic matching',
      'Skills section is heavily weighted',
      'Endorsements and recommendations matter',
      'Use industry-standard job titles',
    ],
    keywordRules: [
      { rule: 'Match job titles to industry standards', importance: 'critical' },
      { rule: 'Include all relevant skills in Skills section', importance: 'high' },
      { rule: 'Use hashtag-style keywords in posts', importance: 'medium' },
    ],
    formatRules: [
      { rule: 'Complete all profile sections', reason: 'Completeness affects visibility' },
      { rule: 'Use bullet points in experience', reason: 'Improves readability' },
    ],
    priorityKeywordPlacement: ['Headline', 'About', 'Skills', 'Experience'],
  },

  indeed: {
    name: 'Indeed',
    matchingType: 'hybrid',
    keywordFlexibility: 'moderate',
    recommendations: [
      'Uses both keyword matching and AI analysis',
      'Job title matching is important',
      'Location and salary expectations matter',
      'Quick apply resumes need strong keywords',
    ],
    keywordRules: [
      { rule: 'Match job title keywords', importance: 'critical' },
      { rule: 'Include location preferences', importance: 'high' },
      { rule: 'List salary expectations if comfortable', importance: 'medium' },
    ],
    formatRules: [
      { rule: 'Keep resume concise (1-2 pages)', reason: 'Indeed parsing works best with shorter resumes' },
    ],
    priorityKeywordPlacement: ['Job title', 'Skills', 'Summary'],
  },

  // Default strategy for unknown platforms
  generic: {
    name: 'Generic ATS',
    matchingType: 'hybrid',
    keywordFlexibility: 'moderate',
    recommendations: [
      'Use keywords from job description 2-3 times',
      'Include both acronyms and full terms',
      'Use standard section headers',
      'Simple formatting - no tables, columns, or graphics',
      'Save as .docx or simple PDF',
    ],
    keywordRules: [
      { rule: 'Match keywords from job description exactly', importance: 'critical' },
      { rule: 'Include variations (acronyms, plurals)', importance: 'high' },
      { rule: 'Place keywords in Skills and Experience', importance: 'high' },
      { rule: 'Use industry terminology', importance: 'medium' },
    ],
    formatRules: [
      { rule: 'Use standard fonts', reason: 'Better compatibility' },
      { rule: 'Avoid headers/footers', reason: 'Often not parsed' },
      { rule: 'Use simple bullet points', reason: 'Better parsing' },
      { rule: 'No images or graphics', reason: 'Cannot be read' },
    ],
    priorityKeywordPlacement: ['Skills', 'Summary', 'Experience', 'Job titles'],
  },
};

/**
 * Get strategy for a specific platform
 */
export function getPlatformStrategy(platform: string): PlatformStrategy {
  const normalized = platform.toLowerCase();

  // Map common variations
  const platformMap: Record<string, string> = {
    'greenhouse': 'greenhouse',
    'lever': 'lever',
    'workday': 'workday',
    'myworkdayjobs': 'workday',
    'taleo': 'taleo',
    'oracle': 'taleo',
    'icims': 'icims',
    'linkedin': 'linkedin',
    'indeed': 'indeed',
  };

  const key = platformMap[normalized] || 'generic';
  return PLATFORM_STRATEGIES[key];
}

/**
 * High-value keywords that matter across all platforms
 * Based on 2024-2025 job market research
 */
export const HIGH_VALUE_KEYWORDS = {
  // Technical skills with high demand
  programming: [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'Go', 'Rust', 'C++', 'C#',
    'SQL', 'GraphQL', 'REST API', 'Microservices',
  ],

  frontend: [
    'React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'HTML5', 'CSS3',
    'Tailwind CSS', 'Redux', 'Webpack', 'Responsive Design',
  ],

  backend: [
    'Node.js', 'Python', 'Django', 'FastAPI', 'Spring Boot', '.NET',
    'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ',
  ],

  cloud: [
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform',
    'CI/CD', 'Jenkins', 'GitHub Actions', 'CloudFormation',
  ],

  ai_ml: [
    'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch',
    'LLM', 'GPT', 'NLP', 'Computer Vision', 'Data Science',
    'Prompt Engineering', 'RAG', 'Vector Databases',
  ],

  data: [
    'Data Analysis', 'SQL', 'Python', 'Pandas', 'NumPy',
    'Data Visualization', 'Tableau', 'Power BI', 'ETL',
    'Data Pipeline', 'Spark', 'Airflow',
  ],

  // 2025 emerging skills (high value)
  emerging_2025: [
    'AI Literacy', 'Generative AI', 'Prompt Engineering',
    'LLM Integration', 'Vector Databases', 'RAG Architecture',
    'AI Ethics', 'Responsible AI',
  ],

  // Soft skills that ATS systems look for
  soft_skills: [
    'Leadership', 'Communication', 'Problem Solving', 'Collaboration',
    'Project Management', 'Agile', 'Scrum', 'Team Leadership',
    'Cross-functional', 'Stakeholder Management', 'Mentoring',
  ],

  // Remote work skills (post-2020 essential)
  remote_work: [
    'Remote Work', 'Distributed Teams', 'Asynchronous Communication',
    'Slack', 'Zoom', 'Confluence', 'Jira', 'Time Management',
  ],
};

/**
 * Get keyword variations for better ATS matching
 */
export function getKeywordVariations(keyword: string): string[] {
  const variations: Record<string, string[]> = {
    'javascript': ['JavaScript', 'JS', 'ECMAScript', 'ES6', 'ES2020'],
    'typescript': ['TypeScript', 'TS'],
    'python': ['Python', 'Python3', 'Python 3'],
    'react': ['React', 'ReactJS', 'React.js', 'React JS'],
    'vue': ['Vue', 'Vue.js', 'VueJS', 'Vue 3'],
    'angular': ['Angular', 'AngularJS', 'Angular 2+'],
    'node': ['Node.js', 'NodeJS', 'Node'],
    'aws': ['AWS', 'Amazon Web Services'],
    'gcp': ['GCP', 'Google Cloud', 'Google Cloud Platform'],
    'azure': ['Azure', 'Microsoft Azure'],
    'docker': ['Docker', 'Containerization'],
    'kubernetes': ['Kubernetes', 'K8s', 'K8'],
    'postgresql': ['PostgreSQL', 'Postgres', 'PSQL'],
    'mongodb': ['MongoDB', 'Mongo'],
    'machine learning': ['Machine Learning', 'ML'],
    'deep learning': ['Deep Learning', 'DL'],
    'artificial intelligence': ['Artificial Intelligence', 'AI'],
    'natural language processing': ['Natural Language Processing', 'NLP'],
    'ci/cd': ['CI/CD', 'CICD', 'Continuous Integration', 'Continuous Deployment'],
    'project management': ['Project Management', 'PM', 'Project Manager'],
    'data science': ['Data Science', 'DS'],
    'data analysis': ['Data Analysis', 'Data Analytics'],
  };

  const lower = keyword.toLowerCase();
  return variations[lower] || [keyword];
}

/**
 * Optimize keywords for a specific platform
 */
export function optimizeKeywordsForPlatform(
  keywords: string[],
  platform: string
): { optimized: string[]; recommendations: string[] } {
  const strategy = getPlatformStrategy(platform);
  const optimized = new Set<string>();
  const recommendations: string[] = [];

  for (const keyword of keywords) {
    optimized.add(keyword);

    // For strict platforms (Workday), add all variations
    if (strategy.keywordFlexibility === 'strict') {
      const variations = getKeywordVariations(keyword);
      variations.forEach(v => optimized.add(v));

      if (variations.length > 1) {
        recommendations.push(`Include both "${variations[0]}" and "${variations.slice(1).join('", "')}" for Workday`);
      }
    }
  }

  // Add platform-specific recommendations
  recommendations.push(...strategy.recommendations.slice(0, 3));

  return {
    optimized: Array.from(optimized),
    recommendations,
  };
}

/**
 * Calculate platform-specific ATS score adjustment
 */
export function getPlatformScoreAdjustment(
  baseScore: number,
  platform: string,
  keywordMatches: { exact: number; partial: number; synonym: number }
): number {
  const strategy = getPlatformStrategy(platform);

  let adjustment = 0;

  switch (strategy.matchingType) {
    case 'exact':
      // Workday-style: exact matches matter most
      adjustment = (keywordMatches.exact * 2) - (keywordMatches.partial * 0.5);
      break;

    case 'frequency':
      // Greenhouse-style: frequency matters
      adjustment = keywordMatches.exact * 1.5;
      break;

    case 'semantic':
      // Lever-style: synonyms count fully
      adjustment = keywordMatches.exact + keywordMatches.synonym;
      break;

    case 'hybrid':
    default:
      adjustment = keywordMatches.exact + (keywordMatches.partial * 0.5) + (keywordMatches.synonym * 0.75);
      break;
  }

  return Math.min(100, Math.max(0, baseScore + adjustment));
}
