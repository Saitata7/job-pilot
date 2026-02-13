/**
 * Other Backgrounds - Basic Keywords
 * Healthcare, Finance, Legal, Education
 *
 * These are placeholder keywords - not full implementations
 */

import type { KeywordEntry } from '@shared/types/background.types';

// Healthcare Keywords
export const HEALTHCARE_KEYWORDS: KeywordEntry[] = [
  // Clinical
  { name: 'Patient Care', variations: ['patient-centered', 'patient safety'], weight: 2.0, isCore: true },
  { name: 'Clinical', variations: ['clinical experience', 'clinical skills'], weight: 1.9, isCore: true },
  { name: 'Nursing', variations: ['nurse', 'rn', 'lpn', 'registered nurse'], weight: 1.8, isCore: false },
  { name: 'Medical', variations: ['medical care', 'medical knowledge'], weight: 1.8, isCore: true },
  { name: 'Healthcare', variations: ['health care', 'healthcare industry'], weight: 1.7, isCore: true },
  { name: 'HIPAA', variations: ['hipaa compliance', 'patient privacy'], weight: 1.6, isCore: false },
  { name: 'EMR', variations: ['ehr', 'electronic medical records', 'electronic health records'], weight: 1.6, isCore: false },
  { name: 'Epic', variations: ['epic systems', 'epic ehr'], weight: 1.5, isCore: false },
  { name: 'Cerner', variations: ['cerner ehr'], weight: 1.4, isCore: false },
  { name: 'Vital Signs', variations: ['vitals', 'patient vitals'], weight: 1.4, isCore: false },
  { name: 'Medication Administration', variations: ['med admin', 'dispensing medication'], weight: 1.5, isCore: false },
  { name: 'CPR', variations: ['cpr certified', 'bls', 'basic life support'], weight: 1.4, isCore: false },
  { name: 'ACLS', variations: ['advanced cardiac life support'], weight: 1.3, isCore: false },
  { name: 'Phlebotomy', variations: ['blood draw', 'venipuncture'], weight: 1.3, isCore: false },
  { name: 'Triage', variations: ['patient triage'], weight: 1.4, isCore: false },
  { name: 'Charting', variations: ['documentation', 'medical documentation'], weight: 1.4, isCore: false },
  { name: 'Care Plan', variations: ['care planning', 'treatment plan'], weight: 1.5, isCore: false },
  { name: 'Patient Assessment', variations: ['patient evaluation'], weight: 1.5, isCore: false },
  { name: 'Infection Control', variations: ['infection prevention'], weight: 1.4, isCore: false },
  { name: 'Bedside Manner', variations: ['compassionate care', 'empathy'], weight: 1.3, isCore: false },
  // Administration
  { name: 'Healthcare Administration', variations: ['health administration', 'hospital administration'], weight: 1.6, isCore: false },
  { name: 'Medical Billing', variations: ['billing', 'medical coding', 'icd-10'], weight: 1.5, isCore: false },
  { name: 'Insurance', variations: ['health insurance', 'insurance verification'], weight: 1.4, isCore: false },
  { name: 'Scheduling', variations: ['patient scheduling', 'appointment scheduling'], weight: 1.3, isCore: false },
  { name: 'JCAHO', variations: ['joint commission', 'accreditation'], weight: 1.3, isCore: false },
];

// Finance & Accounting Keywords
export const FINANCE_KEYWORDS: KeywordEntry[] = [
  // Core Finance
  { name: 'Financial Analysis', variations: ['financial analyst', 'finance analysis'], weight: 2.0, isCore: true },
  { name: 'Accounting', variations: ['accountant', 'accounting principles'], weight: 1.9, isCore: true },
  { name: 'Finance', variations: ['financial', 'financial services'], weight: 1.9, isCore: true },
  { name: 'GAAP', variations: ['generally accepted accounting principles', 'us gaap'], weight: 1.7, isCore: false },
  { name: 'IFRS', variations: ['international financial reporting standards'], weight: 1.5, isCore: false },
  { name: 'Financial Reporting', variations: ['financial statements', 'financial reports'], weight: 1.7, isCore: true },
  { name: 'Budgeting', variations: ['budget', 'budget management'], weight: 1.7, isCore: false },
  { name: 'Forecasting', variations: ['financial forecasting', 'forecast'], weight: 1.6, isCore: false },
  { name: 'Audit', variations: ['auditing', 'internal audit', 'external audit'], weight: 1.6, isCore: false },
  { name: 'Tax', variations: ['taxation', 'tax preparation', 'tax planning'], weight: 1.6, isCore: false },
  { name: 'CPA', variations: ['certified public accountant'], weight: 1.7, isCore: false },
  { name: 'CFA', variations: ['chartered financial analyst'], weight: 1.6, isCore: false },
  // Tools & Systems
  { name: 'QuickBooks', variations: ['quickbooks online', 'qbo'], weight: 1.5, isCore: false },
  { name: 'SAP', variations: ['sap erp', 'sap fico'], weight: 1.6, isCore: false },
  { name: 'Oracle Financials', variations: ['oracle finance'], weight: 1.5, isCore: false },
  { name: 'NetSuite', variations: ['netsuite erp'], weight: 1.4, isCore: false },
  { name: 'Excel', variations: ['advanced excel', 'financial modeling excel'], weight: 1.7, isCore: true },
  // Banking & Investment
  { name: 'Banking', variations: ['bank', 'banking industry'], weight: 1.6, isCore: false },
  { name: 'Investment', variations: ['investments', 'investment analysis'], weight: 1.6, isCore: false },
  { name: 'Portfolio Management', variations: ['portfolio', 'asset management'], weight: 1.5, isCore: false },
  { name: 'Risk Management', variations: ['financial risk', 'risk assessment'], weight: 1.5, isCore: false },
  { name: 'Compliance', variations: ['regulatory compliance', 'financial compliance'], weight: 1.5, isCore: false },
  { name: 'Accounts Payable', variations: ['ap', 'a/p'], weight: 1.4, isCore: false },
  { name: 'Accounts Receivable', variations: ['ar', 'a/r'], weight: 1.4, isCore: false },
  { name: 'Reconciliation', variations: ['account reconciliation', 'bank reconciliation'], weight: 1.4, isCore: false },
  { name: 'General Ledger', variations: ['gl', 'ledger'], weight: 1.4, isCore: false },
  { name: 'P&L', variations: ['profit and loss', 'income statement'], weight: 1.5, isCore: false },
  { name: 'Balance Sheet', variations: ['financial position'], weight: 1.4, isCore: false },
  { name: 'Cash Flow', variations: ['cash flow management', 'cash management'], weight: 1.5, isCore: false },
];

// Legal Keywords
export const LEGAL_KEYWORDS: KeywordEntry[] = [
  // Core Legal
  { name: 'Legal', variations: ['legal services', 'legal industry'], weight: 2.0, isCore: true },
  { name: 'Attorney', variations: ['lawyer', 'counsel'], weight: 1.9, isCore: true },
  { name: 'Paralegal', variations: ['legal assistant'], weight: 1.7, isCore: false },
  { name: 'JD', variations: ['juris doctor', 'law degree'], weight: 1.6, isCore: false },
  { name: 'Bar Admission', variations: ['bar certified', 'licensed attorney'], weight: 1.6, isCore: false },
  { name: 'Litigation', variations: ['litigator', 'trial'], weight: 1.7, isCore: false },
  { name: 'Contract', variations: ['contracts', 'contract law', 'contract drafting'], weight: 1.8, isCore: true },
  { name: 'Legal Research', variations: ['legal analysis', 'case research'], weight: 1.7, isCore: true },
  { name: 'Legal Writing', variations: ['legal drafting', 'briefs'], weight: 1.6, isCore: false },
  { name: 'Compliance', variations: ['regulatory compliance', 'legal compliance'], weight: 1.7, isCore: false },
  { name: 'Corporate Law', variations: ['corporate legal', 'business law'], weight: 1.5, isCore: false },
  { name: 'Intellectual Property', variations: ['ip', 'patents', 'trademarks', 'copyright'], weight: 1.5, isCore: false },
  { name: 'Employment Law', variations: ['labor law', 'hr law'], weight: 1.4, isCore: false },
  { name: 'Real Estate Law', variations: ['property law'], weight: 1.4, isCore: false },
  { name: 'Due Diligence', variations: ['dd', 'legal due diligence'], weight: 1.5, isCore: false },
  // Tools & Skills
  { name: 'Westlaw', variations: ['westlaw edge'], weight: 1.5, isCore: false },
  { name: 'LexisNexis', variations: ['lexis', 'lexis nexis'], weight: 1.5, isCore: false },
  { name: 'Document Review', variations: ['doc review', 'e-discovery'], weight: 1.4, isCore: false },
  { name: 'Case Management', variations: ['matter management'], weight: 1.4, isCore: false },
  { name: 'Negotiation', variations: ['negotiating', 'settlement'], weight: 1.5, isCore: false },
  { name: 'Client Relations', variations: ['client management', 'client service'], weight: 1.4, isCore: false },
];

// Education Keywords
export const EDUCATION_KEYWORDS: KeywordEntry[] = [
  // Teaching
  { name: 'Teaching', variations: ['teacher', 'educator', 'instruction'], weight: 2.0, isCore: true },
  { name: 'Curriculum', variations: ['curriculum development', 'curriculum design'], weight: 1.8, isCore: true },
  { name: 'Lesson Planning', variations: ['lesson plans', 'instructional planning'], weight: 1.7, isCore: true },
  { name: 'Classroom Management', variations: ['classroom', 'behavior management'], weight: 1.7, isCore: false },
  { name: 'Student Assessment', variations: ['assessment', 'grading', 'evaluation'], weight: 1.6, isCore: false },
  { name: 'Differentiated Instruction', variations: ['differentiation', 'individualized learning'], weight: 1.5, isCore: false },
  { name: 'Special Education', variations: ['sped', 'special needs', 'iep'], weight: 1.5, isCore: false },
  { name: 'K-12', variations: ['k12', 'elementary', 'secondary', 'high school'], weight: 1.5, isCore: false },
  { name: 'Higher Education', variations: ['university', 'college', 'professor'], weight: 1.5, isCore: false },
  // Skills & Methods
  { name: 'Instructional Design', variations: ['instructional designer', 'learning design'], weight: 1.7, isCore: false },
  { name: 'E-Learning', variations: ['elearning', 'online learning', 'lms'], weight: 1.6, isCore: false },
  { name: 'Training', variations: ['trainer', 'corporate training', 'employee training'], weight: 1.7, isCore: false },
  { name: 'Professional Development', variations: ['pd', 'teacher training'], weight: 1.4, isCore: false },
  { name: 'Student Engagement', variations: ['engagement', 'active learning'], weight: 1.5, isCore: false },
  { name: 'Educational Technology', variations: ['edtech', 'ed tech'], weight: 1.5, isCore: false },
  // Tools
  { name: 'Google Classroom', variations: ['google classroom'], weight: 1.4, isCore: false },
  { name: 'Canvas', variations: ['canvas lms'], weight: 1.4, isCore: false },
  { name: 'Blackboard', variations: ['blackboard learn'], weight: 1.3, isCore: false },
  { name: 'Moodle', variations: [], weight: 1.2, isCore: false },
  { name: 'Zoom', variations: ['virtual classroom'], weight: 1.3, isCore: false },
  // Certifications
  { name: 'Teaching Credential', variations: ['teaching certificate', 'teaching license'], weight: 1.5, isCore: false },
  { name: 'State Certification', variations: ['certified teacher'], weight: 1.4, isCore: false },
];

/**
 * Get all other background patterns
 */
export function getHealthcarePatterns(): [RegExp, string][] {
  return HEALTHCARE_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}

export function getFinancePatterns(): [RegExp, string][] {
  return FINANCE_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}

export function getLegalPatterns(): [RegExp, string][] {
  return LEGAL_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}

export function getEducationPatterns(): [RegExp, string][] {
  return EDUCATION_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
