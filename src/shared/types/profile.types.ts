export interface ResumeProfile {
  id: string;
  name: string;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;

  personal: PersonalInfo;
  summary: string;
  skills: Skills;
  experience: WorkExperience[];
  education: Education[];
  projects?: Project[];

  targetRoles: string[];
  targetCompanies?: string[];
  salaryRange?: SalaryRange;

  autofillData: AutofillData;
  rawResumeText?: string;
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedInUrl?: string;
  portfolioUrl?: string;
  githubUrl?: string;
}

export interface Skills {
  technical: string[];
  soft: string[];
  tools: string[];
  certifications: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: number;
  honors?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  highlights: string[];
}

export interface SalaryRange {
  min: number;
  max: number;
  currency: string;
}

export interface AutofillData {
  workAuthorization: 'citizen' | 'permanent_resident' | 'visa' | 'other';
  visaType?: string; // H-1B, L-1, TN, etc.
  requiresSponsorship: boolean;
  availableStartDate?: string;
  noticePeriod?: string;
  willingToRelocate: boolean;
  relocationPreferences?: string[];
  remotePreference: 'remote' | 'hybrid' | 'onsite' | 'flexible';
  workPreference?: 'hybrid' | 'onsite' | 'remote' | 'road_warrior'; // More specific
  travelWillingness?: string;
  certifications?: string[]; // Security clearances, certs like PMP, AWS, etc.
  demographics?: Demographics;
  customAnswers: Record<string, string>;
  // Address fields for autofill
  streetAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  // Security & Background
  securityClearance?: 'none' | 'public_trust' | 'secret' | 'top_secret' | 'ts_sci';
  canPassBackgroundCheck?: boolean;
  canPassDrugTest?: boolean;
  // Languages
  languages?: string[];
}

export interface Demographics {
  gender?: string; // Male, Female, Non-binary, Prefer not to say
  pronouns?: string; // he/him, she/her, they/them, etc.
  sexualOrientation?: string; // Prefer not to say, etc.
  ethnicity?: string; // Hispanic/Latino or Not Hispanic/Latino
  race?: string; // White, Black, Asian, etc.
  veteranStatus?: string; // Veteran, Not a Veteran, Prefer not to say
  disabilityStatus?: string; // Yes, No, Prefer not to say
}
