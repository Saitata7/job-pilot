/**
 * Common / Universal Keywords
 * These apply across ALL backgrounds and roles
 *
 * Categories:
 * - Soft Skills (communication, leadership, teamwork, etc.)
 * - Work Styles (remote work, collaboration tools)
 * - General Professional Skills
 * - Common Tools (Microsoft Office, Google Workspace)
 */

import type { KeywordEntry } from '@shared/types/background.types';

// Communication Skills
export const COMMUNICATION_SKILLS_KEYWORDS: KeywordEntry[] = [
  { name: 'Communication Skills', variations: ['communication', 'strong communication', 'excellent communication'], weight: 1.8, isCore: true },
  { name: 'Written Communication', variations: ['writing skills', 'written skills', 'business writing'], weight: 1.6, isCore: false },
  { name: 'Verbal Communication', variations: ['oral communication', 'speaking skills'], weight: 1.5, isCore: false },
  { name: 'Presentation Skills', variations: ['presenting', 'public speaking', 'presentations'], weight: 1.6, isCore: false },
  { name: 'Active Listening', variations: ['listening skills', 'listening'], weight: 1.4, isCore: false },
  { name: 'Interpersonal Skills', variations: ['interpersonal', 'people skills'], weight: 1.5, isCore: false },
  { name: 'Stakeholder Communication', variations: ['stakeholder management', 'stakeholder engagement'], weight: 1.5, isCore: false },
  { name: 'Client Communication', variations: ['client facing', 'client relations', 'customer communication'], weight: 1.5, isCore: false },
  { name: 'Cross-functional Communication', variations: ['cross-team', 'cross-departmental'], weight: 1.4, isCore: false },
  { name: 'Email Communication', variations: ['email etiquette', 'professional email'], weight: 1.2, isCore: false },
  { name: 'Negotiation', variations: ['negotiating', 'negotiate', 'negotiation skills'], weight: 1.5, isCore: false },
  { name: 'Conflict Resolution', variations: ['conflict management', 'resolving conflicts'], weight: 1.4, isCore: false },
  { name: 'Feedback', variations: ['giving feedback', 'receiving feedback', 'constructive feedback'], weight: 1.3, isCore: false },
];

// Leadership & Management Skills
export const LEADERSHIP_SKILLS_KEYWORDS: KeywordEntry[] = [
  { name: 'Leadership', variations: ['leader', 'leading', 'leadership skills'], weight: 1.9, isCore: true },
  { name: 'Team Leadership', variations: ['team lead', 'leading teams', 'team leader'], weight: 1.8, isCore: true },
  { name: 'People Management', variations: ['managing people', 'staff management'], weight: 1.7, isCore: false },
  { name: 'Mentoring', variations: ['mentor', 'mentorship'], weight: 1.5, isCore: false },
  { name: 'Coaching', variations: ['coach', 'coaching skills'], weight: 1.5, isCore: false },
  { name: 'Delegation', variations: ['delegating', 'delegating tasks'], weight: 1.4, isCore: false },
  { name: 'Decision Making', variations: ['decision-making', 'making decisions'], weight: 1.6, isCore: false },
  { name: 'Strategic Thinking', variations: ['strategic', 'think strategically'], weight: 1.5, isCore: false },
  { name: 'Initiative', variations: ['self-starter', 'taking initiative', 'proactive'], weight: 1.5, isCore: false },
  { name: 'Accountability', variations: ['accountable', 'taking ownership', 'ownership'], weight: 1.5, isCore: false },
  { name: 'Influence', variations: ['influencing', 'influencing others'], weight: 1.4, isCore: false },
  { name: 'Motivation', variations: ['motivating', 'motivating others', 'self-motivated'], weight: 1.4, isCore: false },
  { name: 'Vision', variations: ['visionary', 'setting vision'], weight: 1.3, isCore: false },
];

// Teamwork & Collaboration
export const TEAMWORK_SKILLS_KEYWORDS: KeywordEntry[] = [
  { name: 'Teamwork', variations: ['team work', 'working in teams', 'team-oriented'], weight: 1.8, isCore: true },
  { name: 'Collaboration', variations: ['collaborative', 'collaborating', 'team collaboration'], weight: 1.8, isCore: true },
  { name: 'Cross-functional', variations: ['cross-functional teams', 'cross functional', 'multidisciplinary'], weight: 1.6, isCore: false },
  { name: 'Team Player', variations: ['team-player', 'works well in teams'], weight: 1.5, isCore: false },
  { name: 'Partnership', variations: ['partnering', 'building partnerships'], weight: 1.4, isCore: false },
  { name: 'Cooperative', variations: ['cooperation', 'cooperating'], weight: 1.3, isCore: false },
  { name: 'Relationship Building', variations: ['building relationships', 'relationship management'], weight: 1.5, isCore: false },
  { name: 'Networking', variations: ['professional networking', 'network'], weight: 1.3, isCore: false },
];

// Problem Solving & Analytical
export const PROBLEM_SOLVING_KEYWORDS: KeywordEntry[] = [
  { name: 'Problem Solving', variations: ['problem-solving', 'solving problems', 'problem solver'], weight: 1.9, isCore: true },
  { name: 'Critical Thinking', variations: ['critical-thinking', 'think critically'], weight: 1.7, isCore: true },
  { name: 'Analytical Skills', variations: ['analytical', 'analysis', 'analytical thinking'], weight: 1.7, isCore: true },
  { name: 'Troubleshooting', variations: ['troubleshoot', 'debugging'], weight: 1.5, isCore: false },
  { name: 'Root Cause Analysis', variations: ['root cause', 'rca'], weight: 1.4, isCore: false },
  { name: 'Research', variations: ['researching', 'research skills'], weight: 1.5, isCore: false },
  { name: 'Data-Driven', variations: ['data driven', 'evidence-based'], weight: 1.5, isCore: false },
  { name: 'Logical Thinking', variations: ['logical', 'logic'], weight: 1.4, isCore: false },
  { name: 'Creative Problem Solving', variations: ['creative solutions', 'innovative solutions'], weight: 1.4, isCore: false },
  { name: 'Decision Analysis', variations: ['analyzing decisions'], weight: 1.3, isCore: false },
];

// Organization & Time Management
export const ORGANIZATION_SKILLS_KEYWORDS: KeywordEntry[] = [
  { name: 'Time Management', variations: ['time-management', 'managing time', 'time management skills'], weight: 1.7, isCore: true },
  { name: 'Organization', variations: ['organizational skills', 'organized', 'well-organized'], weight: 1.7, isCore: true },
  { name: 'Prioritization', variations: ['prioritizing', 'priority management', 'prioritize'], weight: 1.6, isCore: false },
  { name: 'Multitasking', variations: ['multi-tasking', 'multitask', 'juggling priorities'], weight: 1.5, isCore: false },
  { name: 'Planning', variations: ['planning skills', 'plan'], weight: 1.5, isCore: false },
  { name: 'Deadline Management', variations: ['meeting deadlines', 'deadline-driven'], weight: 1.5, isCore: false },
  { name: 'Attention to Detail', variations: ['detail-oriented', 'detail oriented', 'meticulous'], weight: 1.7, isCore: true },
  { name: 'Accuracy', variations: ['accurate', 'precision'], weight: 1.4, isCore: false },
  { name: 'Task Management', variations: ['managing tasks', 'task prioritization'], weight: 1.4, isCore: false },
  { name: 'Goal Setting', variations: ['setting goals', 'goal-oriented'], weight: 1.4, isCore: false },
  { name: 'Efficiency', variations: ['efficient', 'work efficiently'], weight: 1.4, isCore: false },
];

// Adaptability & Learning
export const ADAPTABILITY_KEYWORDS: KeywordEntry[] = [
  { name: 'Adaptability', variations: ['adaptable', 'adapting', 'flexible'], weight: 1.7, isCore: true },
  { name: 'Flexibility', variations: ['flexible', 'versatile'], weight: 1.6, isCore: false },
  { name: 'Fast Learner', variations: ['quick learner', 'fast-learner', 'learns quickly'], weight: 1.6, isCore: false },
  { name: 'Continuous Learning', variations: ['continuous learner', 'lifelong learner', 'eager to learn'], weight: 1.5, isCore: false },
  { name: 'Growth Mindset', variations: ['growth-mindset'], weight: 1.4, isCore: false },
  { name: 'Open to Feedback', variations: ['receptive to feedback', 'accepts feedback'], weight: 1.4, isCore: false },
  { name: 'Change Management', variations: ['managing change', 'embracing change'], weight: 1.5, isCore: false },
  { name: 'Resilience', variations: ['resilient', 'perseverance'], weight: 1.4, isCore: false },
  { name: 'Self-Development', variations: ['self-improvement', 'professional development'], weight: 1.3, isCore: false },
  { name: 'Curiosity', variations: ['curious', 'intellectual curiosity'], weight: 1.3, isCore: false },
];

// Work Ethic & Professionalism
export const WORK_ETHIC_KEYWORDS: KeywordEntry[] = [
  { name: 'Work Ethic', variations: ['strong work ethic', 'hard working', 'hardworking'], weight: 1.6, isCore: true },
  { name: 'Reliability', variations: ['reliable', 'dependable'], weight: 1.6, isCore: false },
  { name: 'Professionalism', variations: ['professional', 'professional demeanor'], weight: 1.5, isCore: false },
  { name: 'Integrity', variations: ['honest', 'ethical', 'honesty'], weight: 1.5, isCore: false },
  { name: 'Self-Motivated', variations: ['self motivated', 'motivated', 'driven'], weight: 1.6, isCore: false },
  { name: 'Independent', variations: ['work independently', 'self-directed', 'autonomous'], weight: 1.5, isCore: false },
  { name: 'Punctual', variations: ['punctuality', 'on time'], weight: 1.2, isCore: false },
  { name: 'Committed', variations: ['commitment', 'dedicated', 'dedication'], weight: 1.4, isCore: false },
  { name: 'Results-Oriented', variations: ['results oriented', 'results-driven', 'outcome-focused'], weight: 1.5, isCore: false },
  { name: 'Quality Focus', variations: ['quality-focused', 'quality conscious'], weight: 1.4, isCore: false },
];

// Remote Work & Digital Collaboration
export const REMOTE_WORK_KEYWORDS: KeywordEntry[] = [
  { name: 'Remote Work', variations: ['remote', 'work from home', 'wfh', 'telecommute'], weight: 1.5, isCore: false },
  { name: 'Hybrid Work', variations: ['hybrid', 'hybrid environment'], weight: 1.4, isCore: false },
  { name: 'Distributed Teams', variations: ['distributed team', 'geographically distributed'], weight: 1.4, isCore: false },
  { name: 'Virtual Collaboration', variations: ['virtual teams', 'online collaboration'], weight: 1.4, isCore: false },
  { name: 'Asynchronous Communication', variations: ['async communication', 'async'], weight: 1.3, isCore: false },
  { name: 'Video Conferencing', variations: ['video calls', 'virtual meetings'], weight: 1.3, isCore: false },
  { name: 'Zoom', variations: ['zoom meetings'], weight: 1.3, isCore: false },
  { name: 'Microsoft Teams', variations: ['ms teams', 'teams'], weight: 1.4, isCore: false },
  { name: 'Slack', variations: ['slack communication'], weight: 1.4, isCore: false },
  { name: 'Google Meet', variations: ['google hangouts'], weight: 1.2, isCore: false },
];

// Common Office Tools
export const OFFICE_TOOLS_KEYWORDS: KeywordEntry[] = [
  { name: 'Microsoft Office', variations: ['ms office', 'office suite', 'microsoft office suite'], weight: 1.6, isCore: true },
  { name: 'Microsoft Excel', variations: ['excel', 'ms excel', 'spreadsheets'], weight: 1.7, isCore: true },
  { name: 'Microsoft Word', variations: ['word', 'ms word'], weight: 1.4, isCore: false },
  { name: 'Microsoft PowerPoint', variations: ['powerpoint', 'ppt', 'presentations'], weight: 1.5, isCore: false },
  { name: 'Microsoft Outlook', variations: ['outlook', 'email'], weight: 1.3, isCore: false },
  { name: 'Google Workspace', variations: ['g suite', 'google suite', 'gsuite'], weight: 1.5, isCore: false },
  { name: 'Google Docs', variations: ['gdocs', 'google documents'], weight: 1.3, isCore: false },
  { name: 'Google Sheets', variations: ['gsheets', 'google spreadsheets'], weight: 1.4, isCore: false },
  { name: 'Google Slides', variations: ['gslides'], weight: 1.3, isCore: false },
  { name: 'PDF', variations: ['adobe pdf', 'pdf documents'], weight: 1.1, isCore: false },
];

// Customer & Service Skills
export const CUSTOMER_SERVICE_KEYWORDS: KeywordEntry[] = [
  { name: 'Customer Service', variations: ['customer support', 'client service', 'customer care'], weight: 1.7, isCore: true },
  { name: 'Customer Focus', variations: ['customer-focused', 'customer centric', 'customer-centric'], weight: 1.6, isCore: false },
  { name: 'Client Relations', variations: ['client relationship', 'customer relations'], weight: 1.5, isCore: false },
  { name: 'Customer Satisfaction', variations: ['csat', 'customer experience', 'cx'], weight: 1.5, isCore: false },
  { name: 'Empathy', variations: ['empathetic', 'understanding'], weight: 1.4, isCore: false },
  { name: 'Patience', variations: ['patient'], weight: 1.3, isCore: false },
  { name: 'Service Orientation', variations: ['service-oriented', 'service minded'], weight: 1.4, isCore: false },
  { name: 'Complaint Handling', variations: ['handling complaints', 'issue resolution'], weight: 1.3, isCore: false },
];

// Education & Certifications (common terms)
export const EDUCATION_KEYWORDS: KeywordEntry[] = [
  { name: 'Bachelor\'s Degree', variations: ['bachelors', 'ba', 'bs', 'undergraduate'], weight: 1.4, isCore: false },
  { name: 'Master\'s Degree', variations: ['masters', 'ma', 'ms', 'mba', 'graduate degree'], weight: 1.5, isCore: false },
  { name: 'PhD', variations: ['doctorate', 'doctoral', 'phd'], weight: 1.3, isCore: false },
  { name: 'Certification', variations: ['certified', 'certificate', 'professional certification'], weight: 1.5, isCore: false },
  { name: 'Training', variations: ['trained', 'professional training'], weight: 1.3, isCore: false },
  { name: 'Continuing Education', variations: ['professional development', 'ongoing education'], weight: 1.2, isCore: false },
];

// Combined Common Keywords
export const COMMON_KEYWORDS: KeywordEntry[] = [
  ...COMMUNICATION_SKILLS_KEYWORDS,
  ...LEADERSHIP_SKILLS_KEYWORDS,
  ...TEAMWORK_SKILLS_KEYWORDS,
  ...PROBLEM_SOLVING_KEYWORDS,
  ...ORGANIZATION_SKILLS_KEYWORDS,
  ...ADAPTABILITY_KEYWORDS,
  ...WORK_ETHIC_KEYWORDS,
  ...REMOTE_WORK_KEYWORDS,
  ...OFFICE_TOOLS_KEYWORDS,
  ...CUSTOMER_SERVICE_KEYWORDS,
  ...EDUCATION_KEYWORDS,
];

/**
 * Get patterns for ATS matching
 */
export function getCommonPatterns(): [RegExp, string][] {
  return COMMON_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}

/**
 * Get patterns by category
 */
export function getCommonPatternsByCategory(category: string): [RegExp, string][] {
  let keywords: KeywordEntry[];

  switch (category) {
    case 'communication':
      keywords = COMMUNICATION_SKILLS_KEYWORDS;
      break;
    case 'leadership':
      keywords = LEADERSHIP_SKILLS_KEYWORDS;
      break;
    case 'teamwork':
      keywords = TEAMWORK_SKILLS_KEYWORDS;
      break;
    case 'problem-solving':
      keywords = PROBLEM_SOLVING_KEYWORDS;
      break;
    case 'organization':
      keywords = ORGANIZATION_SKILLS_KEYWORDS;
      break;
    case 'adaptability':
      keywords = ADAPTABILITY_KEYWORDS;
      break;
    case 'work-ethic':
      keywords = WORK_ETHIC_KEYWORDS;
      break;
    case 'remote-work':
      keywords = REMOTE_WORK_KEYWORDS;
      break;
    case 'office-tools':
      keywords = OFFICE_TOOLS_KEYWORDS;
      break;
    case 'customer-service':
      keywords = CUSTOMER_SERVICE_KEYWORDS;
      break;
    case 'education':
      keywords = EDUCATION_KEYWORDS;
      break;
    default:
      return [];
  }

  return keywords.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
