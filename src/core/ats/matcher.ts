/**
 * ATS Keyword Matcher
 * Compares resume keywords with job description keywords
 */

import { extractKeywords } from '../resume/text-utils';

export interface ATSScore {
  overallScore: number;
  keywordScore: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  suggestions: string[];
}

export interface KeywordAnalysis {
  jobKeywords: string[];
  resumeKeywords: string[];
  matched: string[];
  missing: string[];
  extra: string[];
}

/**
 * Calculate ATS score by comparing resume and job description
 */
export function calculateATSScore(resumeText: string, jobDescription: string): ATSScore {
  const analysis = analyzeKeywords(resumeText, jobDescription);

  // Calculate keyword match percentage
  const totalJobKeywords = analysis.jobKeywords.length;
  const matchedCount = analysis.matched.length;

  const keywordScore = totalJobKeywords > 0
    ? Math.round((matchedCount / totalJobKeywords) * 100)
    : 0;

  // Overall score (weighted)
  const overallScore = Math.min(100, keywordScore + (analysis.extra.length > 0 ? 5 : 0));

  // Generate suggestions
  const suggestions = generateSuggestions(analysis);

  return {
    overallScore,
    keywordScore,
    matchedKeywords: analysis.matched,
    missingKeywords: analysis.missing,
    suggestions,
  };
}

/**
 * Analyze keywords between resume and job description
 */
export function analyzeKeywords(resumeText: string, jobDescription: string): KeywordAnalysis {
  const resumeKeywords = extractKeywords(resumeText);
  const jobKeywords = extractJobKeywords(jobDescription);

  const resumeSet = new Set(resumeKeywords.map(k => k.toLowerCase()));
  const jobSet = new Set(jobKeywords.map(k => k.toLowerCase()));

  const matched: string[] = [];
  const missing: string[] = [];
  const extra: string[] = [];

  // Find matched and missing
  for (const keyword of jobKeywords) {
    const lower = keyword.toLowerCase();
    if (resumeSet.has(lower) || hasPartialMatch(lower, resumeKeywords)) {
      matched.push(keyword);
    } else {
      missing.push(keyword);
    }
  }

  // Find extra skills in resume not in JD
  for (const keyword of resumeKeywords) {
    const lower = keyword.toLowerCase();
    if (!jobSet.has(lower) && !hasPartialMatch(lower, jobKeywords)) {
      extra.push(keyword);
    }
  }

  return {
    jobKeywords,
    resumeKeywords,
    matched,
    missing,
    extra,
  };
}

/**
 * Extract keywords specifically from job descriptions
 */
function extractJobKeywords(jobDescription: string): string[] {
  const keywords = new Set<string>();
  const text = jobDescription.toLowerCase();

  // Technical skills - common in job postings
  const techPatterns: [RegExp, string][] = [
    // Languages
    [/\b(javascript|js)\b/gi, 'JavaScript'],
    [/\b(typescript|ts)\b/gi, 'TypeScript'],
    [/\bpython\b/gi, 'Python'],
    [/\bjava\b(?!\s*script)/gi, 'Java'],
    [/\bc\+\+\b/gi, 'C++'],
    [/\bc#\b/gi, 'C#'],
    [/\bgolang\b|\bgo\b(?=\s+(?:programming|language|developer))/gi, 'Go'],
    [/\brust\b/gi, 'Rust'],
    [/\bruby\b/gi, 'Ruby'],
    [/\bphp\b/gi, 'PHP'],
    [/\bswift\b/gi, 'Swift'],
    [/\bkotlin\b/gi, 'Kotlin'],
    [/\bscala\b/gi, 'Scala'],

    // Frontend
    [/\breact(?:\.?js)?\b/gi, 'React'],
    [/\bangular\b/gi, 'Angular'],
    [/\bvue(?:\.?js)?\b/gi, 'Vue.js'],
    [/\bnext\.?js\b/gi, 'Next.js'],
    [/\bsvelte\b/gi, 'Svelte'],
    [/\bredux\b/gi, 'Redux'],
    [/\bgraphql\b/gi, 'GraphQL'],
    [/\bhtml5?\b/gi, 'HTML'],
    [/\bcss3?\b/gi, 'CSS'],
    [/\bsass\b|\bscss\b/gi, 'SASS'],
    [/\btailwind\b/gi, 'Tailwind CSS'],

    // Backend
    [/\bnode\.?js\b/gi, 'Node.js'],
    [/\bexpress\.?js\b/gi, 'Express.js'],
    [/\bdjango\b/gi, 'Django'],
    [/\bflask\b/gi, 'Flask'],
    [/\bfastapi\b/gi, 'FastAPI'],
    [/\bspring\b(?:\s*boot)?\b/gi, 'Spring'],
    [/\brails\b/gi, 'Rails'],
    [/\b\.net\b/gi, '.NET'],

    // Cloud & DevOps
    [/\baws\b|\bamazon\s*web\s*services\b/gi, 'AWS'],
    [/\bazure\b/gi, 'Azure'],
    [/\bgcp\b|\bgoogle\s*cloud\b/gi, 'GCP'],
    [/\bdocker\b/gi, 'Docker'],
    [/\bkubernetes\b|\bk8s\b/gi, 'Kubernetes'],
    [/\bterraform\b/gi, 'Terraform'],
    [/\bjenkins\b/gi, 'Jenkins'],
    [/\bci\s*\/?\s*cd\b/gi, 'CI/CD'],
    [/\bgithub\s*actions\b/gi, 'GitHub Actions'],
    [/\blinux\b/gi, 'Linux'],

    // Databases
    [/\bpostgresql\b|\bpostgres\b/gi, 'PostgreSQL'],
    [/\bmysql\b/gi, 'MySQL'],
    [/\bmongodb\b/gi, 'MongoDB'],
    [/\bredis\b/gi, 'Redis'],
    [/\belasticsearch\b/gi, 'Elasticsearch'],
    [/\bdynamodb\b/gi, 'DynamoDB'],
    [/\bsql\b/gi, 'SQL'],
    [/\bnosql\b/gi, 'NoSQL'],

    // AI/ML
    [/\bmachine\s*learning\b/gi, 'Machine Learning'],
    [/\bdeep\s*learning\b/gi, 'Deep Learning'],
    [/\btensorflow\b/gi, 'TensorFlow'],
    [/\bpytorch\b/gi, 'PyTorch'],
    [/\bllm\b|\blarge\s*language\s*model/gi, 'LLM'],
    [/\bnlp\b|\bnatural\s*language\s*processing\b/gi, 'NLP'],

    // Tools & Others
    [/\bgit\b/gi, 'Git'],
    [/\bjira\b/gi, 'Jira'],
    [/\bagile\b/gi, 'Agile'],
    [/\bscrum\b/gi, 'Scrum'],
    [/\brest\s*(?:api|ful)?\b/gi, 'REST API'],
    [/\bmicroservices\b/gi, 'Microservices'],
    [/\bunit\s*test/gi, 'Unit Testing'],
    [/\btdd\b/gi, 'TDD'],
  ];

  for (const [pattern, keyword] of techPatterns) {
    if (pattern.test(text)) {
      keywords.add(keyword);
    }
  }

  // Extract years of experience requirements
  const expMatch = text.match(/(\d+)\+?\s*(?:years?|yrs?)(?:\s+of)?\s+(?:experience|exp)/gi);
  if (expMatch) {
    keywords.add(`${expMatch[0].match(/\d+/)?.[0]}+ years experience`);
  }

  return [...keywords].sort();
}

/**
 * Check for partial/fuzzy match
 */
function hasPartialMatch(keyword: string, list: string[]): boolean {
  const lowerKeyword = keyword.toLowerCase();

  for (const item of list) {
    const lowerItem = item.toLowerCase();

    // Direct substring match
    if (lowerItem.includes(lowerKeyword) || lowerKeyword.includes(lowerItem)) {
      return true;
    }

    // Common variations
    const variations: Record<string, string[]> = {
      'javascript': ['js', 'es6', 'ecmascript'],
      'typescript': ['ts'],
      'react': ['reactjs', 'react.js'],
      'vue': ['vuejs', 'vue.js'],
      'node': ['nodejs', 'node.js'],
      'postgres': ['postgresql', 'psql'],
      'kubernetes': ['k8s'],
      'amazon web services': ['aws'],
      'google cloud': ['gcp'],
    };

    for (const [main, alts] of Object.entries(variations)) {
      if (lowerKeyword === main || alts.includes(lowerKeyword)) {
        if (lowerItem === main || alts.includes(lowerItem)) {
          return true;
        }
      }
    }
  }

  return false;
}

/**
 * Generate actionable suggestions
 */
function generateSuggestions(analysis: KeywordAnalysis): string[] {
  const suggestions: string[] = [];

  // Prioritize missing keywords by importance
  const highPriority = ['python', 'javascript', 'typescript', 'react', 'aws', 'docker', 'kubernetes', 'sql'];
  const mediumPriority = analysis.missing.filter(k =>
    highPriority.some(hp => k.toLowerCase().includes(hp))
  );

  if (mediumPriority.length > 0) {
    suggestions.push(`Add these high-impact keywords: ${mediumPriority.slice(0, 3).join(', ')}`);
  }

  if (analysis.missing.length > 5) {
    suggestions.push(`Consider adding ${analysis.missing.length} missing keywords to improve match`);
  }

  if (analysis.matched.length < 5) {
    suggestions.push('Your resume may need more relevant technical skills for this role');
  }

  if (analysis.missing.length === 0) {
    suggestions.push('Great match! Your resume covers all key requirements');
  }

  return suggestions;
}

/**
 * Get keywords to add to resume for better ATS score
 */
export function getKeywordsToAdd(resumeText: string, jobDescription: string, maxKeywords = 10): string[] {
  const analysis = analyzeKeywords(resumeText, jobDescription);

  // Prioritize missing keywords
  const prioritized = analysis.missing.sort((a, b) => {
    // Prioritize shorter, more specific keywords
    const aScore = a.length < 15 ? 2 : 1;
    const bScore = b.length < 15 ? 2 : 1;
    return bScore - aScore;
  });

  return prioritized.slice(0, maxKeywords);
}
