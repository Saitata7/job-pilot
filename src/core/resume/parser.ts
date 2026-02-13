/**
 * Resume Parser
 * Parses DOCX files and extracts structured resume data
 */

import type { ResumeProfile, WorkExperience, Education, Skills } from '@shared/types/profile.types';

export interface ParsedResume {
  rawText: string;
  sections: ResumeSection[];
  extractedData: Partial<ResumeProfile>;
}

export interface ResumeSection {
  type: 'contact' | 'summary' | 'experience' | 'education' | 'skills' | 'projects' | 'unknown';
  title: string;
  content: string;
  items?: string[];
}

// Common section header patterns
const SECTION_PATTERNS: Record<ResumeSection['type'], RegExp[]> = {
  contact: [/^contact/i, /^personal\s*info/i],
  summary: [/^summary/i, /^profile/i, /^objective/i, /^about/i, /^professional\s*summary/i],
  experience: [/^experience/i, /^work\s*history/i, /^employment/i, /^professional\s*experience/i, /^work\s*experience/i],
  education: [/^education/i, /^academic/i, /^qualifications/i],
  skills: [/^skills/i, /^technical\s*skills/i, /^competencies/i, /^expertise/i, /^technologies/i],
  projects: [/^projects/i, /^portfolio/i, /^personal\s*projects/i],
  unknown: [],
};

/**
 * Parse DOCX file to text using browser's built-in capabilities
 * Falls back to mammoth.js if available
 */
export async function parseDocx(file: File): Promise<ParsedResume> {
  const arrayBuffer = await file.arrayBuffer();

  // Try to use mammoth if loaded, otherwise use basic ZIP extraction
  let rawText = '';

  try {
    // Dynamic import for mammoth (will be bundled)
    const mammoth = await import('mammoth');
    const result = await mammoth.extractRawText({ arrayBuffer });
    rawText = result.value;
  } catch {
    // Fallback: Basic DOCX parsing (DOCX is a ZIP file)
    rawText = await extractTextFromDocx(arrayBuffer);
  }

  const sections = identifySections(rawText);
  const extractedData = extractStructuredData(sections, rawText);

  return {
    rawText,
    sections,
    extractedData,
  };
}

/**
 * Basic DOCX text extraction without mammoth
 */
async function extractTextFromDocx(arrayBuffer: ArrayBuffer): Promise<string> {
  try {
    // DOCX is a ZIP file, we need to extract document.xml
    const zip = await import('jszip').then(m => m.default || m);
    const zipFile = await zip.loadAsync(arrayBuffer);

    const documentXml = await zipFile.file('word/document.xml')?.async('text');
    if (!documentXml) {
      throw new Error('No document.xml found in DOCX');
    }

    // Extract text from XML
    const parser = new DOMParser();
    const doc = parser.parseFromString(documentXml, 'application/xml');

    // Get all text elements
    const textElements = doc.getElementsByTagName('w:t');
    const texts: string[] = [];

    for (let i = 0; i < textElements.length; i++) {
      const text = textElements[i].textContent;
      if (text) texts.push(text);
    }

    return texts.join(' ').replace(/\s+/g, ' ').trim();
  } catch (error) {
    console.error('DOCX extraction failed:', error);
    throw new Error('Failed to parse DOCX file');
  }
}

/**
 * Parse plain text resume
 */
export function parseText(text: string): ParsedResume {
  const sections = identifySections(text);
  const extractedData = extractStructuredData(sections, text);

  return {
    rawText: text,
    sections,
    extractedData,
  };
}

/**
 * Identify sections in resume text
 */
function identifySections(text: string): ResumeSection[] {
  const lines = text.split(/\n+/);
  const sections: ResumeSection[] = [];
  let currentSection: ResumeSection | null = null;
  let contentLines: string[] = [];

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;

    // Check if this line is a section header
    const sectionType = detectSectionType(trimmedLine);

    if (sectionType !== 'unknown' && trimmedLine.length < 50) {
      // Save previous section
      if (currentSection) {
        currentSection.content = contentLines.join('\n').trim();
        sections.push(currentSection);
      }

      // Start new section
      currentSection = {
        type: sectionType,
        title: trimmedLine,
        content: '',
      };
      contentLines = [];
    } else {
      contentLines.push(trimmedLine);
    }
  }

  // Save last section
  if (currentSection) {
    currentSection.content = contentLines.join('\n').trim();
    sections.push(currentSection);
  } else if (contentLines.length > 0) {
    // No sections found, treat as single unknown section
    sections.push({
      type: 'unknown',
      title: '',
      content: contentLines.join('\n').trim(),
    });
  }

  return sections;
}

/**
 * Detect section type from header text
 */
function detectSectionType(headerText: string): ResumeSection['type'] {
  const cleanHeader = headerText.toLowerCase().replace(/[^a-z\s]/g, '').trim();

  for (const [type, patterns] of Object.entries(SECTION_PATTERNS)) {
    if (type === 'unknown') continue;

    for (const pattern of patterns) {
      if (pattern.test(cleanHeader)) {
        return type as ResumeSection['type'];
      }
    }
  }

  return 'unknown';
}

/**
 * Extract structured data from sections
 */
function extractStructuredData(sections: ResumeSection[], rawText: string): Partial<ResumeProfile> {
  const data: Partial<ResumeProfile> = {
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
    },
    summary: '',
    skills: {
      technical: [],
      soft: [],
      tools: [],
      certifications: [],
    },
    experience: [],
    education: [],
    rawResumeText: rawText,
  };

  // Extract contact info from entire text
  data.personal = extractContactInfo(rawText);

  for (const section of sections) {
    switch (section.type) {
      case 'summary':
        data.summary = section.content;
        break;

      case 'skills':
        data.skills = extractSkills(section.content);
        break;

      case 'experience':
        data.experience = extractExperience(section.content);
        break;

      case 'education':
        data.education = extractEducation(section.content);
        break;
    }
  }

  return data;
}

/**
 * Extract contact information
 */
function extractContactInfo(text: string): ResumeProfile['personal'] {
  const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
  const phoneMatch = text.match(/(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
  const linkedInMatch = text.match(/linkedin\.com\/in\/[\w-]+/i);
  const githubMatch = text.match(/github\.com\/[\w-]+/i);

  // Try to extract name (usually first line or before email)
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  let fullName = '';

  for (const line of lines.slice(0, 5)) {
    // Skip lines that look like headers or contain special chars
    if (line.length < 50 && !line.includes('@') && !line.match(/^\d/) &&
        !line.toLowerCase().includes('resume') && line.split(' ').length <= 4) {
      fullName = line;
      break;
    }
  }

  return {
    fullName,
    email: emailMatch?.[0] || '',
    phone: phoneMatch?.[0] || '',
    location: '', // Hard to extract reliably
    linkedInUrl: linkedInMatch ? `https://${linkedInMatch[0]}` : '',
    githubUrl: githubMatch ? `https://${githubMatch[0]}` : '',
  };
}

/**
 * Extract skills from skills section
 */
function extractSkills(content: string): Skills {
  const skills: Skills = {
    technical: [],
    soft: [],
    tools: [],
    certifications: [],
  };

  // Common technical skills to identify
  const techKeywords = [
    'javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'go', 'rust', 'ruby', 'php',
    'react', 'angular', 'vue', 'node', 'express', 'django', 'flask', 'spring', 'rails',
    'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'terraform', 'jenkins', 'ci/cd',
    'sql', 'postgresql', 'mysql', 'mongodb', 'redis', 'elasticsearch',
    'html', 'css', 'sass', 'tailwind', 'bootstrap',
    'git', 'linux', 'bash', 'rest', 'graphql', 'api',
    'machine learning', 'ml', 'ai', 'deep learning', 'tensorflow', 'pytorch',
    'agile', 'scrum', 'jira', 'confluence',
  ];

  const toolKeywords = [
    'vs code', 'visual studio', 'intellij', 'eclipse', 'xcode',
    'figma', 'sketch', 'photoshop', 'illustrator',
    'postman', 'insomnia', 'swagger',
    'slack', 'teams', 'zoom',
  ];

  // Split by common delimiters
  const items = content.split(/[,;•·|\n]/).map(s => s.trim()).filter(Boolean);

  for (const item of items) {
    const lowerItem = item.toLowerCase();

    if (techKeywords.some(kw => lowerItem.includes(kw))) {
      skills.technical.push(item);
    } else if (toolKeywords.some(kw => lowerItem.includes(kw))) {
      skills.tools.push(item);
    } else if (item.length > 2 && item.length < 50) {
      // Assume it's a technical skill if short
      skills.technical.push(item);
    }
  }

  // Deduplicate
  skills.technical = [...new Set(skills.technical)];
  skills.tools = [...new Set(skills.tools)];

  return skills;
}

/**
 * Extract work experience
 */
function extractExperience(content: string): WorkExperience[] {
  const experiences: WorkExperience[] = [];

  // Split by common patterns (company names usually have dates nearby)
  const blocks = content.split(/(?=\d{4}\s*[-–]\s*(?:\d{4}|present|current))/i);

  for (const block of blocks) {
    if (block.trim().length < 20) continue;

    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    // Try to extract date range
    const dateMatch = block.match(/(\d{4})\s*[-–]\s*(\d{4}|present|current)/i);

    const exp: WorkExperience = {
      id: crypto.randomUUID(),
      company: '',
      title: '',
      location: '',
      startDate: dateMatch?.[1] || '',
      endDate: dateMatch?.[2]?.toLowerCase() === 'present' ? undefined : dateMatch?.[2],
      isCurrent: /present|current/i.test(block),
      description: '',
      achievements: [],
      technologies: [],
    };

    // First non-date line is likely title or company
    for (const line of lines) {
      if (!line.match(/^\d{4}/) && line.length < 100) {
        if (!exp.title) {
          exp.title = line;
        } else if (!exp.company) {
          exp.company = line;
        }
        if (exp.title && exp.company) break;
      }
    }

    // Extract bullet points as achievements
    const bullets = block.match(/[•·\-\*]\s*.+/g) || [];
    exp.achievements = bullets.map(b => b.replace(/^[•·\-\*]\s*/, '').trim());
    exp.description = exp.achievements.slice(0, 2).join(' ');

    if (exp.title || exp.company) {
      experiences.push(exp);
    }
  }

  return experiences;
}

/**
 * Extract education
 */
function extractEducation(content: string): Education[] {
  const education: Education[] = [];

  const blocks = content.split(/\n{2,}/).filter(b => b.trim());

  for (const block of blocks) {
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    const edu: Education = {
      id: crypto.randomUUID(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
    };

    // Look for degree keywords
    const degreeKeywords = ['bachelor', 'master', 'phd', 'doctorate', 'associate', 'b.s.', 'm.s.', 'b.a.', 'm.a.', 'mba'];

    for (const line of lines) {
      const lowerLine = line.toLowerCase();

      if (degreeKeywords.some(kw => lowerLine.includes(kw))) {
        edu.degree = line;
      } else if (lowerLine.includes('university') || lowerLine.includes('college') || lowerLine.includes('institute')) {
        edu.institution = line;
      }
    }

    // Extract year
    const yearMatch = block.match(/\d{4}/);
    if (yearMatch) {
      edu.endDate = yearMatch[0];
    }

    if (edu.degree || edu.institution) {
      education.push(edu);
    }
  }

  return education;
}

/**
 * Extract keywords from resume for ATS matching
 */
export function extractKeywords(text: string): string[] {
  const words = text.toLowerCase()
    .replace(/[^a-z0-9\s\-\.\/\+\#]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2);

  // Common tech terms and skills
  const techTerms = new Set<string>();

  // Single words
  const singleWordSkills = [
    'javascript', 'typescript', 'python', 'java', 'golang', 'rust', 'ruby', 'php', 'swift', 'kotlin',
    'react', 'angular', 'vue', 'svelte', 'nextjs', 'nuxt', 'gatsby',
    'nodejs', 'express', 'fastapi', 'django', 'flask', 'spring', 'rails',
    'aws', 'azure', 'gcp', 'heroku', 'vercel', 'netlify',
    'docker', 'kubernetes', 'terraform', 'ansible', 'jenkins', 'circleci', 'github',
    'postgresql', 'mysql', 'mongodb', 'redis', 'elasticsearch', 'dynamodb', 'cassandra',
    'graphql', 'rest', 'grpc', 'websocket',
    'linux', 'unix', 'bash', 'powershell',
    'git', 'jira', 'confluence', 'slack',
    'agile', 'scrum', 'kanban',
    'tensorflow', 'pytorch', 'pandas', 'numpy', 'scikit',
    'html', 'css', 'sass', 'tailwind', 'bootstrap',
  ];

  for (const word of words) {
    if (singleWordSkills.includes(word)) {
      techTerms.add(word);
    }
  }

  // Multi-word terms
  const lowerText = text.toLowerCase();
  const multiWordTerms = [
    'machine learning', 'deep learning', 'natural language processing', 'nlp',
    'ci/cd', 'ci cd', 'continuous integration', 'continuous deployment',
    'test driven development', 'tdd', 'behavior driven development', 'bdd',
    'amazon web services', 'google cloud', 'microsoft azure',
    'node.js', 'react.js', 'vue.js', 'next.js',
    'rest api', 'restful api', 'graphql api',
    'sql server', 'oracle database',
    'data structures', 'algorithms', 'system design',
    'microservices', 'serverless', 'event driven',
    'unit testing', 'integration testing', 'e2e testing',
    'project management', 'product management', 'team leadership',
  ];

  for (const term of multiWordTerms) {
    if (lowerText.includes(term)) {
      techTerms.add(term);
    }
  }

  return [...techTerms].sort();
}
