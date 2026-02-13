export type ApplicationStatus =
  | 'saved'
  | 'in_progress'
  | 'submitted'
  | 'under_review'
  | 'interview'
  | 'offer'
  | 'rejected'
  | 'withdrawn'
  | 'expired';

export interface Application {
  id: string;
  jobId: string;
  profileId: string;

  status: ApplicationStatus;
  statusHistory: StatusChange[];

  coverLetter?: GeneratedContent;
  tailoredResume?: GeneratedContent;
  customAnswers?: CustomAnswer[];

  autofillUsed: boolean;
  autofillFields?: AutofilledField[];

  appliedAt?: Date;
  submittedVia: 'manual' | 'autofill' | 'quick_apply';

  outcome?: ApplicationOutcome;
  userNotes?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface StatusChange {
  from: ApplicationStatus;
  to: ApplicationStatus;
  changedAt: Date;
  note?: string;
}

export interface GeneratedContent {
  content: string;
  generatedAt: Date;
  aiProvider: string;
  model: string;
  promptVersion: string;
  wasEdited: boolean;
  editedContent?: string;
}

export interface CustomAnswer {
  question: string;
  answer: string;
  wasEdited: boolean;
}

export interface AutofilledField {
  fieldName: string;
  fieldSelector: string;
  value: string;
  wasApproved: boolean;
  wasEdited: boolean;
}

export interface ApplicationOutcome {
  result: 'success' | 'rejection' | 'no_response';
  responseTime?: number;
  interviewStages?: number;
  feedbackReceived?: string;
  recordedAt: Date;
}
