/**
 * 4-Layer ATS Matching Architecture
 *
 * Layer 0: BACKGROUND - Educational/Professional Background (first filter)
 * Layer 1: ROLE - Specific job role within the background
 * Layer 2: SKILL AREAS - Domains with strength percentages
 * Layer 3: KEYWORDS - Specific technologies/skills within each area
 *
 * Example:
 * Background: Computer Science
 * └── Role: Full Stack Developer
 *     ├── Frontend (80%)
 *     │   └── React, TypeScript, CSS, HTML, Redux...
 *     ├── Backend (90%)
 *     │   └── Node.js, Python, PostgreSQL, REST APIs...
 *     ├── Cloud (75%)
 *     │   └── AWS, Docker, Kubernetes, CI/CD...
 *     └── QA (15%)
 *         └── Jest, Cypress, Unit Testing...
 */

// ============================================
// LAYER 0: BACKGROUND TYPES
// ============================================

export type BackgroundType =
  | 'computer-science'
  | 'data-analytics'
  | 'mba-business'
  | 'healthcare'
  | 'finance'
  | 'engineering'
  | 'design'
  | 'marketing'
  | 'legal'
  | 'education'
  | 'other';

export interface BackgroundConfig {
  id: BackgroundType;
  name: string;
  description: string;
  icon?: string;
  /** Roles available under this background */
  roles: RoleConfig[];
  /** Keywords that indicate this background in a JD */
  indicators: string[];
}

// ============================================
// LAYER 1: ROLE TYPES
// ============================================

export interface RoleConfig {
  id: string;
  name: string;
  description: string;
  /** Skill areas relevant to this role */
  skillAreas: SkillAreaTemplate[];
  /** Seniority levels this role supports */
  seniorityLevels: ('entry' | 'mid' | 'senior' | 'lead' | 'principal')[];
  /** Keywords that indicate this role in a JD */
  indicators: string[];
}

// ============================================
// LAYER 2: SKILL AREAS
// ============================================

export interface SkillAreaTemplate {
  id: string;
  name: string;
  description: string;
  /** Default weight for this skill area in the role (0-100) */
  defaultWeight: number;
  /** Is this skill area required for the role? */
  isRequired: boolean;
  /** Keywords that belong to this skill area */
  keywords: KeywordEntry[];
}

export interface UserSkillArea {
  id: string;
  name: string;
  /** User's strength in this area (0-100) */
  strength: number;
  /** Calculated from resume/experience */
  calculatedStrength?: number;
  /** User override of calculated strength */
  userOverride?: boolean;
  /** Specific skills/keywords within this area */
  keywords: UserKeyword[];
  /** Years of experience in this area */
  yearsOfExperience?: number;
}

// ============================================
// LAYER 3: KEYWORDS
// ============================================

export interface KeywordEntry {
  name: string;
  /** Alternative names/spellings */
  variations: string[];
  /** Regex pattern for complex matching */
  pattern?: string;
  /** Weight multiplier (1.0 = normal, 2.0 = critical) */
  weight: number;
  /** Is this a common/required keyword for the skill area? */
  isCore: boolean;
}

export interface UserKeyword {
  name: string;
  /** User's proficiency level */
  proficiency: 'basic' | 'intermediate' | 'advanced' | 'expert';
  /** Years of experience with this skill */
  yearsOfExperience: number;
  /** Last used (date or "current") */
  lastUsed: string;
  /** Evidence from experience/projects */
  evidence: string[];
}

// ============================================
// USER PROFILE ADDITIONS
// ============================================

/**
 * Background and skill configuration for a user's profile
 * This extends the MasterProfile with the 4-layer architecture
 */
export interface UserBackgroundConfig {
  /** Primary educational/professional background */
  background: BackgroundType;

  /** Current/target role */
  primaryRole: string;

  /** Secondary roles if applicable (e.g., "DevOps" for a Full Stack Dev) */
  secondaryRoles?: string[];

  /** Skill areas with user-specific strengths */
  skillAreas: UserSkillArea[];

  /** Auto-detected vs user-configured */
  isAutoDetected: boolean;

  /** Last time skills were recalculated */
  lastCalculated?: Date;
}

// ============================================
// ATS MATCHING RESULT
// ============================================

export interface LayeredATSResult {
  /** Overall match score (0-100) */
  overallScore: number;

  /** Background match (quick filter) */
  backgroundMatch: {
    isMatch: boolean;
    detected: BackgroundType | null;
    confidence: number;
  };

  /** Role match */
  roleMatch: {
    detectedRole: string | null;
    matchScore: number;
    seniorityMatch: boolean;
    detectedSeniority: string | null;
  };

  /** Per-skill-area breakdown */
  skillAreaScores: SkillAreaScore[];

  /** Detailed keyword matches */
  keywordMatches: KeywordMatch[];

  /** Missing critical keywords */
  criticalMissing: string[];

  /** Recommendations */
  recommendations: string[];

  /** Scoring tier */
  tier: 'excellent' | 'good' | 'moderate' | 'poor';
}

export interface SkillAreaScore {
  areaId: string;
  areaName: string;
  /** JD's weight for this area (detected from JD) */
  jdWeight: number;
  /** User's strength in this area */
  userStrength: number;
  /** Match score = min(jdWeight, userStrength) with bonus for exceeding */
  matchScore: number;
  /** Keywords matched in this area */
  matchedKeywords: string[];
  /** Keywords missing in this area */
  missingKeywords: string[];
}

export interface KeywordMatch {
  keyword: string;
  skillArea: string;
  found: boolean;
  jdMentions: number;
  userProficiency?: 'basic' | 'intermediate' | 'advanced' | 'expert';
  importance: 'critical' | 'important' | 'nice-to-have';
}

// ============================================
// BACKGROUND DEFINITIONS (Pre-configured)
// ============================================

/**
 * Computer Science Background Configuration
 */
export const CS_SKILL_AREAS: SkillAreaTemplate[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Client-side web development, UI/UX implementation',
    defaultWeight: 25,
    isRequired: false,
    keywords: [], // Populated from keyword files
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Server-side development, APIs, business logic',
    defaultWeight: 30,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'database',
    name: 'Database & Data Storage',
    description: 'SQL, NoSQL, data modeling, query optimization',
    defaultWeight: 15,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'devops',
    name: 'DevOps & Infrastructure',
    description: 'CI/CD, cloud platforms, containerization',
    defaultWeight: 15,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'testing',
    name: 'Testing & QA',
    description: 'Unit testing, integration testing, test automation',
    defaultWeight: 10,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'architecture',
    name: 'System Architecture',
    description: 'System design, scalability, distributed systems',
    defaultWeight: 10,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'iOS, Android, React Native, Flutter',
    defaultWeight: 0,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'ml-ai',
    name: 'Machine Learning & AI',
    description: 'ML frameworks, data science, NLP, computer vision',
    defaultWeight: 0,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'security',
    name: 'Security',
    description: 'Application security, authentication, encryption',
    defaultWeight: 5,
    isRequired: false,
    keywords: [],
  },
];

/**
 * MBA / Business Background Configuration
 */
export const MBA_SKILL_AREAS: SkillAreaTemplate[] = [
  {
    id: 'management-leadership',
    name: 'Management & Leadership',
    description: 'Team management, coaching, performance management',
    defaultWeight: 25,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'operations',
    name: 'Operations',
    description: 'Process improvement, workflow optimization, logistics',
    defaultWeight: 20,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'strategy',
    name: 'Strategy & Planning',
    description: 'Strategic planning, market analysis, business development',
    defaultWeight: 20,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'finance-accounting',
    name: 'Finance & Budgeting',
    description: 'Budgeting, P&L, financial analysis, forecasting',
    defaultWeight: 15,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'Project planning, Agile, Scrum, stakeholder management',
    defaultWeight: 15,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'communication',
    name: 'Communication & Presentation',
    description: 'Presentations, stakeholder communication, reporting',
    defaultWeight: 10,
    isRequired: false,
    keywords: [],
  },
];

export const MBA_ROLES: RoleConfig[] = [
  {
    id: 'operations-manager',
    name: 'Operations Manager',
    description: 'Oversee daily operations, process improvement, team management',
    skillAreas: MBA_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'operations' ? 40 :
                     area.id === 'management-leadership' ? 30 :
                     area.id === 'finance-accounting' ? 15 :
                     area.id === 'project-management' ? 15 :
                     5,
    })),
    seniorityLevels: ['mid', 'senior', 'lead', 'principal'],
    indicators: ['operations manager', 'operations director', 'ops manager', 'business operations'],
  },
  {
    id: 'project-manager',
    name: 'Project Manager',
    description: 'Plan and execute projects, coordinate teams, manage timelines',
    skillAreas: MBA_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'project-management' ? 50 :
                     area.id === 'communication' ? 20 :
                     area.id === 'management-leadership' ? 20 :
                     area.id === 'operations' ? 10 :
                     5,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead'],
    indicators: ['project manager', 'program manager', 'pmp', 'scrum master', 'agile'],
  },
  {
    id: 'business-analyst',
    name: 'Business Analyst',
    description: 'Analyze business needs, requirements gathering, process documentation',
    skillAreas: MBA_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'operations' ? 30 :
                     area.id === 'communication' ? 25 :
                     area.id === 'strategy' ? 20 :
                     area.id === 'project-management' ? 15 :
                     10,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead'],
    indicators: ['business analyst', 'ba', 'requirements analyst', 'systems analyst'],
  },
  {
    id: 'product-manager',
    name: 'Product Manager',
    description: 'Product strategy, roadmap planning, cross-functional leadership',
    skillAreas: MBA_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'strategy' ? 35 :
                     area.id === 'communication' ? 25 :
                     area.id === 'project-management' ? 20 :
                     area.id === 'management-leadership' ? 15 :
                     5,
    })),
    seniorityLevels: ['mid', 'senior', 'lead', 'principal'],
    indicators: ['product manager', 'product owner', 'pm', 'product lead'],
  },
  {
    id: 'management-consultant',
    name: 'Management Consultant',
    description: 'Strategic consulting, business transformation, client advisory',
    skillAreas: MBA_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'strategy' ? 40 :
                     area.id === 'communication' ? 25 :
                     area.id === 'operations' ? 20 :
                     area.id === 'finance-accounting' ? 15 :
                     5,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead', 'principal'],
    indicators: ['consultant', 'management consultant', 'strategy consultant', 'advisory'],
  },
];

/**
 * Engineering (Non-Software) Background Configuration
 */
export const ENGINEERING_SKILL_AREAS: SkillAreaTemplate[] = [
  {
    id: 'technical-design',
    name: 'Technical Design',
    description: 'CAD, technical drawings, design specifications',
    defaultWeight: 25,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'project-engineering',
    name: 'Project Engineering',
    description: 'Project planning, scheduling, resource management',
    defaultWeight: 20,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'quality-compliance',
    name: 'Quality & Compliance',
    description: 'QA/QC, standards compliance, inspection, testing',
    defaultWeight: 20,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Production',
    description: 'Production processes, lean manufacturing, assembly',
    defaultWeight: 15,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'safety',
    name: 'Safety & Environmental',
    description: 'OSHA, safety protocols, environmental compliance',
    defaultWeight: 10,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'technical-analysis',
    name: 'Technical Analysis',
    description: 'Calculations, simulations, problem solving',
    defaultWeight: 15,
    isRequired: false,
    keywords: [],
  },
];

export const ENGINEERING_ROLES: RoleConfig[] = [
  {
    id: 'mechanical-engineer',
    name: 'Mechanical Engineer',
    description: 'Design mechanical systems, product development, analysis',
    skillAreas: ENGINEERING_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'technical-design' ? 40 :
                     area.id === 'technical-analysis' ? 25 :
                     area.id === 'manufacturing' ? 20 :
                     area.id === 'quality-compliance' ? 15 :
                     5,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead', 'principal'],
    indicators: ['mechanical engineer', 'mechanical design', 'product engineer', 'cad', 'solidworks'],
  },
  {
    id: 'electrical-engineer',
    name: 'Electrical Engineer',
    description: 'Design electrical systems, circuits, power systems',
    skillAreas: ENGINEERING_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'technical-design' ? 40 :
                     area.id === 'technical-analysis' ? 30 :
                     area.id === 'quality-compliance' ? 15 :
                     area.id === 'safety' ? 15 :
                     5,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead', 'principal'],
    indicators: ['electrical engineer', 'ee', 'power systems', 'circuits', 'plc', 'controls'],
  },
  {
    id: 'civil-engineer',
    name: 'Civil Engineer',
    description: 'Infrastructure design, construction, site development',
    skillAreas: ENGINEERING_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'technical-design' ? 35 :
                     area.id === 'project-engineering' ? 30 :
                     area.id === 'quality-compliance' ? 20 :
                     area.id === 'safety' ? 15 :
                     5,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead', 'principal'],
    indicators: ['civil engineer', 'structural engineer', 'construction', 'autocad', 'pe license'],
  },
  {
    id: 'manufacturing-engineer',
    name: 'Manufacturing Engineer',
    description: 'Production processes, lean manufacturing, continuous improvement',
    skillAreas: ENGINEERING_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'manufacturing' ? 40 :
                     area.id === 'quality-compliance' ? 25 :
                     area.id === 'technical-design' ? 20 :
                     area.id === 'safety' ? 15 :
                     5,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead'],
    indicators: ['manufacturing engineer', 'process engineer', 'industrial engineer', 'lean', 'six sigma'],
  },
  {
    id: 'quality-engineer',
    name: 'Quality Engineer',
    description: 'Quality assurance, testing, compliance, root cause analysis',
    skillAreas: ENGINEERING_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'quality-compliance' ? 50 :
                     area.id === 'technical-analysis' ? 25 :
                     area.id === 'manufacturing' ? 15 :
                     area.id === 'safety' ? 10 :
                     5,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead'],
    indicators: ['quality engineer', 'qa engineer', 'qc engineer', 'iso', 'root cause', 'fmea'],
  },
];

/**
 * Design / Creative Background Configuration
 */
export const DESIGN_SKILL_AREAS: SkillAreaTemplate[] = [
  {
    id: 'ux-design',
    name: 'UX Design',
    description: 'User research, wireframes, user flows, usability testing',
    defaultWeight: 30,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'ui-design',
    name: 'UI Design',
    description: 'Visual design, design systems, prototyping',
    defaultWeight: 30,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    description: 'Visual identity, branding, print, digital assets',
    defaultWeight: 20,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'design-tools',
    name: 'Design Tools',
    description: 'Figma, Sketch, Adobe Creative Suite, prototyping tools',
    defaultWeight: 15,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'motion-design',
    name: 'Motion & Animation',
    description: 'Animation, motion graphics, video editing',
    defaultWeight: 10,
    isRequired: false,
    keywords: [],
  },
];

export const DESIGN_ROLES: RoleConfig[] = [
  {
    id: 'ux-designer',
    name: 'UX Designer',
    description: 'User experience design, research, information architecture',
    skillAreas: DESIGN_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'ux-design' ? 50 :
                     area.id === 'ui-design' ? 25 :
                     area.id === 'design-tools' ? 20 :
                     5,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead', 'principal'],
    indicators: ['ux designer', 'user experience', 'ux research', 'interaction design'],
  },
  {
    id: 'ui-designer',
    name: 'UI Designer',
    description: 'Visual interface design, design systems, prototypes',
    skillAreas: DESIGN_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'ui-design' ? 50 :
                     area.id === 'ux-design' ? 20 :
                     area.id === 'design-tools' ? 20 :
                     area.id === 'graphic-design' ? 10 :
                     5,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead'],
    indicators: ['ui designer', 'visual designer', 'interface design', 'design system'],
  },
  {
    id: 'product-designer',
    name: 'Product Designer',
    description: 'End-to-end product design, UX + UI, user-centered design',
    skillAreas: DESIGN_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'ux-design' ? 40 :
                     area.id === 'ui-design' ? 40 :
                     area.id === 'design-tools' ? 15 :
                     5,
    })),
    seniorityLevels: ['mid', 'senior', 'lead', 'principal'],
    indicators: ['product designer', 'digital product', 'end-to-end design'],
  },
  {
    id: 'graphic-designer',
    name: 'Graphic Designer',
    description: 'Visual design, branding, marketing materials',
    skillAreas: DESIGN_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'graphic-design' ? 50 :
                     area.id === 'design-tools' ? 25 :
                     area.id === 'motion-design' ? 15 :
                     area.id === 'ui-design' ? 10 :
                     5,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead'],
    indicators: ['graphic designer', 'visual designer', 'brand designer', 'creative designer'],
  },
];

/**
 * Marketing / Communications Background Configuration
 */
export const MARKETING_SKILL_AREAS: SkillAreaTemplate[] = [
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'SEO, SEM, paid ads, email marketing, analytics',
    defaultWeight: 25,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    description: 'Content strategy, copywriting, blogging, storytelling',
    defaultWeight: 20,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'social-media',
    name: 'Social Media',
    description: 'Social strategy, community management, influencer marketing',
    defaultWeight: 20,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'brand-marketing',
    name: 'Brand & Communications',
    description: 'Brand strategy, PR, corporate communications',
    defaultWeight: 15,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'marketing-analytics',
    name: 'Marketing Analytics',
    description: 'Campaign analysis, attribution, reporting, A/B testing',
    defaultWeight: 15,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'marketing-tools',
    name: 'Marketing Tools',
    description: 'HubSpot, Salesforce, Google Analytics, marketing automation',
    defaultWeight: 10,
    isRequired: false,
    keywords: [],
  },
];

export const MARKETING_ROLES: RoleConfig[] = [
  {
    id: 'digital-marketing-manager',
    name: 'Digital Marketing Manager',
    description: 'Digital campaigns, paid media, SEO/SEM strategy',
    skillAreas: MARKETING_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'digital-marketing' ? 45 :
                     area.id === 'marketing-analytics' ? 25 :
                     area.id === 'marketing-tools' ? 15 :
                     area.id === 'content-marketing' ? 15 :
                     5,
    })),
    seniorityLevels: ['mid', 'senior', 'lead'],
    indicators: ['digital marketing', 'performance marketing', 'growth marketing', 'seo', 'sem', 'ppc'],
  },
  {
    id: 'content-marketing-manager',
    name: 'Content Marketing Manager',
    description: 'Content strategy, editorial calendar, copywriting',
    skillAreas: MARKETING_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'content-marketing' ? 50 :
                     area.id === 'social-media' ? 20 :
                     area.id === 'brand-marketing' ? 15 :
                     area.id === 'digital-marketing' ? 15 :
                     5,
    })),
    seniorityLevels: ['mid', 'senior', 'lead'],
    indicators: ['content marketing', 'content strategist', 'copywriter', 'editorial', 'content manager'],
  },
  {
    id: 'social-media-manager',
    name: 'Social Media Manager',
    description: 'Social strategy, community management, content creation',
    skillAreas: MARKETING_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'social-media' ? 50 :
                     area.id === 'content-marketing' ? 25 :
                     area.id === 'marketing-analytics' ? 15 :
                     area.id === 'brand-marketing' ? 10 :
                     5,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead'],
    indicators: ['social media', 'community manager', 'social strategist', 'instagram', 'tiktok', 'linkedin'],
  },
  {
    id: 'marketing-manager',
    name: 'Marketing Manager',
    description: 'Marketing strategy, campaign management, team leadership',
    skillAreas: MARKETING_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'brand-marketing' ? 30 :
                     area.id === 'digital-marketing' ? 25 :
                     area.id === 'marketing-analytics' ? 20 :
                     area.id === 'content-marketing' ? 15 :
                     10,
    })),
    seniorityLevels: ['mid', 'senior', 'lead', 'principal'],
    indicators: ['marketing manager', 'marketing director', 'head of marketing', 'vp marketing'],
  },
  {
    id: 'brand-manager',
    name: 'Brand Manager',
    description: 'Brand strategy, positioning, brand guidelines',
    skillAreas: MARKETING_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'brand-marketing' ? 50 :
                     area.id === 'content-marketing' ? 20 :
                     area.id === 'marketing-analytics' ? 15 :
                     area.id === 'social-media' ? 15 :
                     5,
    })),
    seniorityLevels: ['mid', 'senior', 'lead'],
    indicators: ['brand manager', 'brand marketing', 'brand strategist', 'communications manager'],
  },
];

/**
 * Data Analytics Background Configuration
 */
export const DATA_SKILL_AREAS: SkillAreaTemplate[] = [
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    description: 'Statistical analysis, data exploration, insights',
    defaultWeight: 30,
    isRequired: true,
    keywords: [],
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    description: 'Charts, dashboards, storytelling with data',
    defaultWeight: 20,
    isRequired: true,
    keywords: [],
  },
  {
    id: 'sql-databases',
    name: 'SQL & Databases',
    description: 'SQL queries, database management, data extraction',
    defaultWeight: 20,
    isRequired: true,
    keywords: [],
  },
  {
    id: 'bi-tools',
    name: 'BI Tools',
    description: 'Tableau, Power BI, Looker, reporting tools',
    defaultWeight: 15,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'programming',
    name: 'Programming',
    description: 'Python, R, scripting for data analysis',
    defaultWeight: 15,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'ml-statistics',
    name: 'ML & Statistics',
    description: 'Predictive modeling, statistical methods, ML basics',
    defaultWeight: 10,
    isRequired: false,
    keywords: [],
  },
  {
    id: 'data-engineering',
    name: 'Data Engineering',
    description: 'ETL, data pipelines, big data tools',
    defaultWeight: 10,
    isRequired: false,
    keywords: [],
  },
];

/**
 * Role templates for Computer Science background
 */
export const CS_ROLES: RoleConfig[] = [
  {
    id: 'fullstack-developer',
    name: 'Full Stack Developer',
    description: 'End-to-end web development, frontend and backend',
    skillAreas: CS_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'frontend' ? 40 :
                     area.id === 'backend' ? 40 :
                     area.id === 'database' ? 20 :
                     area.id === 'devops' ? 15 :
                     area.id === 'testing' ? 10 :
                     area.defaultWeight,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead', 'principal'],
    indicators: ['full stack', 'fullstack', 'full-stack', 'frontend and backend'],
  },
  {
    id: 'frontend-developer',
    name: 'Frontend Developer',
    description: 'Client-side development, UI/UX implementation',
    skillAreas: CS_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'frontend' ? 70 :
                     area.id === 'testing' ? 15 :
                     area.id === 'devops' ? 10 :
                     0,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead', 'principal'],
    indicators: ['frontend', 'front-end', 'front end', 'ui developer', 'react developer', 'vue developer'],
  },
  {
    id: 'backend-developer',
    name: 'Backend Developer',
    description: 'Server-side development, APIs, microservices',
    skillAreas: CS_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'backend' ? 60 :
                     area.id === 'database' ? 25 :
                     area.id === 'devops' ? 20 :
                     area.id === 'architecture' ? 15 :
                     area.id === 'testing' ? 10 :
                     0,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead', 'principal'],
    indicators: ['backend', 'back-end', 'back end', 'api developer', 'server-side'],
  },
  {
    id: 'devops-engineer',
    name: 'DevOps Engineer',
    description: 'CI/CD, infrastructure, cloud platforms',
    skillAreas: CS_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'devops' ? 70 :
                     area.id === 'security' ? 20 :
                     area.id === 'backend' ? 15 :
                     area.id === 'architecture' ? 15 :
                     0,
    })),
    seniorityLevels: ['mid', 'senior', 'lead', 'principal'],
    indicators: ['devops', 'dev ops', 'site reliability', 'sre', 'platform engineer', 'infrastructure'],
  },
  {
    id: 'data-engineer',
    name: 'Data Engineer',
    description: 'Data pipelines, ETL, big data infrastructure',
    skillAreas: [
      ...CS_SKILL_AREAS.filter(a => ['database', 'backend', 'devops', 'architecture'].includes(a.id)),
      ...DATA_SKILL_AREAS.filter(a => ['data-engineering', 'sql-databases'].includes(a.id)),
    ].map(area => ({
      ...area,
      defaultWeight: area.id === 'data-engineering' ? 50 :
                     area.id === 'sql-databases' || area.id === 'database' ? 30 :
                     area.id === 'devops' ? 20 :
                     area.id === 'backend' ? 15 :
                     10,
    })),
    seniorityLevels: ['mid', 'senior', 'lead', 'principal'],
    indicators: ['data engineer', 'data infrastructure', 'etl developer', 'big data'],
  },
  {
    id: 'ml-engineer',
    name: 'Machine Learning Engineer',
    description: 'ML systems, model deployment, MLOps',
    skillAreas: CS_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'ml-ai' ? 60 :
                     area.id === 'backend' ? 25 :
                     area.id === 'devops' ? 20 :
                     area.id === 'database' ? 15 :
                     0,
    })),
    seniorityLevels: ['mid', 'senior', 'lead', 'principal'],
    indicators: ['machine learning', 'ml engineer', 'ai engineer', 'deep learning', 'mlops'],
  },
  {
    id: 'mobile-developer',
    name: 'Mobile Developer',
    description: 'iOS, Android, cross-platform mobile apps',
    skillAreas: CS_SKILL_AREAS.map(area => ({
      ...area,
      defaultWeight: area.id === 'mobile' ? 70 :
                     area.id === 'backend' ? 20 :
                     area.id === 'testing' ? 15 :
                     0,
    })),
    seniorityLevels: ['entry', 'mid', 'senior', 'lead'],
    indicators: ['mobile developer', 'ios developer', 'android developer', 'react native', 'flutter'],
  },
  {
    id: 'software-engineer',
    name: 'Software Engineer',
    description: 'General software development',
    skillAreas: CS_SKILL_AREAS,
    seniorityLevels: ['entry', 'mid', 'senior', 'lead', 'principal'],
    indicators: ['software engineer', 'software developer', 'sde', 'swe'],
  },
];

/**
 * All background configurations
 */
export const BACKGROUND_CONFIGS: BackgroundConfig[] = [
  {
    id: 'computer-science',
    name: 'Computer Science / Software Engineering',
    description: 'Software development, programming, technical roles',
    roles: CS_ROLES,
    indicators: [
      'software', 'developer', 'engineer', 'programming', 'coding',
      'frontend', 'backend', 'fullstack', 'devops', 'data engineer',
      'machine learning', 'web development', 'mobile development',
    ],
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics / Business Intelligence',
    description: 'Data analysis, visualization, business insights',
    roles: [
      {
        id: 'data-analyst',
        name: 'Data Analyst',
        description: 'Data analysis, reporting, insights',
        skillAreas: DATA_SKILL_AREAS,
        seniorityLevels: ['entry', 'mid', 'senior', 'lead'],
        indicators: ['data analyst', 'business analyst', 'analytics'],
      },
      {
        id: 'bi-analyst',
        name: 'BI Analyst',
        description: 'Business intelligence, dashboards, reporting',
        skillAreas: DATA_SKILL_AREAS.map(area => ({
          ...area,
          defaultWeight: area.id === 'bi-tools' ? 50 :
                         area.id === 'data-visualization' ? 30 :
                         area.id === 'sql-databases' ? 20 :
                         10,
        })),
        seniorityLevels: ['entry', 'mid', 'senior', 'lead'],
        indicators: ['bi analyst', 'business intelligence', 'power bi', 'tableau'],
      },
      {
        id: 'data-scientist',
        name: 'Data Scientist',
        description: 'Statistical modeling, ML, predictive analytics',
        skillAreas: DATA_SKILL_AREAS.map(area => ({
          ...area,
          defaultWeight: area.id === 'ml-statistics' ? 40 :
                         area.id === 'programming' ? 30 :
                         area.id === 'data-analysis' ? 25 :
                         10,
        })),
        seniorityLevels: ['mid', 'senior', 'lead', 'principal'],
        indicators: ['data scientist', 'data science', 'predictive analytics', 'ml scientist'],
      },
    ],
    indicators: [
      'data analyst', 'data scientist', 'business intelligence', 'bi analyst',
      'analytics', 'insights', 'visualization', 'tableau', 'power bi',
    ],
  },
  // MBA / Business - IMPLEMENTED
  {
    id: 'mba-business',
    name: 'MBA / Business',
    description: 'Business management, strategy, operations',
    roles: MBA_ROLES,
    indicators: ['mba', 'business', 'management', 'strategy', 'operations', 'consulting', 'project manager', 'product manager'],
  },
  // Engineering (Non-Software) - IMPLEMENTED
  {
    id: 'engineering',
    name: 'Engineering (Non-Software)',
    description: 'Mechanical, electrical, civil, chemical engineering',
    roles: ENGINEERING_ROLES,
    indicators: ['mechanical', 'electrical', 'civil', 'chemical', 'structural', 'pe license', 'cad', 'manufacturing', 'quality engineer'],
  },
  // Design / Creative - IMPLEMENTED
  {
    id: 'design',
    name: 'Design / Creative',
    description: 'UI/UX, graphic design, product design',
    roles: DESIGN_ROLES,
    indicators: ['designer', 'ux', 'ui', 'graphic', 'product design', 'figma', 'creative', 'visual design'],
  },
  // Marketing / Communications - IMPLEMENTED
  {
    id: 'marketing',
    name: 'Marketing / Communications',
    description: 'Digital marketing, content, communications',
    roles: MARKETING_ROLES,
    indicators: ['marketing', 'seo', 'content', 'social media', 'brand', 'communications', 'digital marketing', 'growth'],
  },
  // Placeholder configs for remaining backgrounds
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Medical, clinical, health administration',
    roles: [],
    indicators: ['healthcare', 'medical', 'clinical', 'hospital', 'patient', 'nursing'],
  },
  {
    id: 'finance',
    name: 'Finance / Accounting',
    description: 'Financial analysis, accounting, investment',
    roles: [],
    indicators: ['finance', 'accounting', 'investment', 'banking', 'financial', 'cpa'],
  },
  {
    id: 'legal',
    name: 'Legal',
    description: 'Law, compliance, legal operations',
    roles: [],
    indicators: ['lawyer', 'attorney', 'legal', 'compliance', 'paralegal', 'jd degree'],
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Teaching, training, instructional design',
    roles: [],
    indicators: ['teacher', 'instructor', 'professor', 'education', 'training', 'curriculum'],
  },
  {
    id: 'other',
    name: 'Other',
    description: 'Custom background',
    roles: [],
    indicators: [],
  },
];

/**
 * Helper: Get background config by ID
 */
export function getBackgroundConfig(backgroundId: BackgroundType): BackgroundConfig | undefined {
  return BACKGROUND_CONFIGS.find(b => b.id === backgroundId);
}

/**
 * Helper: Get role config by ID within a background
 */
export function getRoleConfig(backgroundId: BackgroundType, roleId: string): RoleConfig | undefined {
  const background = getBackgroundConfig(backgroundId);
  return background?.roles.find(r => r.id === roleId);
}

/**
 * Helper: Detect background from job description
 */
export function detectBackgroundFromJD(jobDescription: string): BackgroundType | null {
  const jdLower = jobDescription.toLowerCase();

  let bestMatch: { background: BackgroundType; score: number } | null = null;

  for (const config of BACKGROUND_CONFIGS) {
    let score = 0;
    for (const indicator of config.indicators) {
      if (jdLower.includes(indicator.toLowerCase())) {
        score++;
      }
    }

    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { background: config.id, score };
    }
  }

  return bestMatch?.background ?? null;
}

/**
 * Helper: Detect role from job description within a background
 */
export function detectRoleFromJD(backgroundId: BackgroundType, jobDescription: string): string | null {
  const background = getBackgroundConfig(backgroundId);
  if (!background) return null;

  const jdLower = jobDescription.toLowerCase();

  let bestMatch: { roleId: string; score: number } | null = null;

  for (const role of background.roles) {
    let score = 0;
    for (const indicator of role.indicators) {
      if (jdLower.includes(indicator.toLowerCase())) {
        score++;
      }
    }

    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { roleId: role.id, score };
    }
  }

  return bestMatch?.roleId ?? null;
}
