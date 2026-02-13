/**
 * MBA / Business Keywords
 * Skill Areas: management-leadership, operations, strategy, finance-accounting, project-management, communication
 */

import type { KeywordEntry } from '@shared/types/background.types';

// Management & Leadership
export const MANAGEMENT_LEADERSHIP_KEYWORDS: KeywordEntry[] = [
  { name: 'Leadership', variations: ['leader', 'leading', 'lead'], weight: 2.0, isCore: true },
  { name: 'Management', variations: ['manager', 'managing', 'manage'], weight: 2.0, isCore: true },
  { name: 'Team Management', variations: ['team lead', 'team leader', 'managing teams'], weight: 1.8, isCore: true },
  { name: 'People Management', variations: ['people leader', 'staff management'], weight: 1.8, isCore: true },
  { name: 'Direct Reports', variations: ['direct report', 'reporting to'], weight: 1.6, isCore: false },
  { name: 'Supervision', variations: ['supervisor', 'supervising', 'supervise'], weight: 1.6, isCore: false },
  { name: 'Coaching', variations: ['coach', 'mentoring', 'mentor'], weight: 1.5, isCore: false },
  { name: 'Performance Management', variations: ['performance reviews', 'performance evaluation'], weight: 1.6, isCore: false },
  { name: 'Talent Development', variations: ['employee development', 'career development'], weight: 1.4, isCore: false },
  { name: 'Hiring', variations: ['recruiting', 'interviewing', 'talent acquisition'], weight: 1.5, isCore: false },
  { name: 'Onboarding', variations: ['new hire training', 'employee onboarding'], weight: 1.3, isCore: false },
  { name: 'Delegation', variations: ['delegating', 'task assignment'], weight: 1.4, isCore: false },
  { name: 'Motivation', variations: ['motivating', 'employee engagement'], weight: 1.4, isCore: false },
  { name: 'Conflict Resolution', variations: ['conflict management', 'dispute resolution'], weight: 1.4, isCore: false },
  { name: 'Decision Making', variations: ['decision-making', 'strategic decisions'], weight: 1.5, isCore: false },
  { name: 'Change Management', variations: ['organizational change', 'change leadership'], weight: 1.6, isCore: false },
  { name: 'Executive Leadership', variations: ['c-level', 'c-suite', 'senior leadership'], weight: 1.7, isCore: false },
  { name: 'Cross-functional Leadership', variations: ['cross-functional teams', 'matrix management'], weight: 1.5, isCore: false },
  { name: 'Accountability', variations: ['accountable', 'ownership'], weight: 1.4, isCore: false },
  { name: 'Team Building', variations: ['team development', 'building teams'], weight: 1.4, isCore: false },
];

// Operations
export const OPERATIONS_KEYWORDS: KeywordEntry[] = [
  { name: 'Operations', variations: ['ops', 'operational'], weight: 2.0, isCore: true },
  { name: 'Process Improvement', variations: ['process optimization', 'process enhancement'], weight: 1.8, isCore: true },
  { name: 'Workflow', variations: ['workflow management', 'workflow optimization'], weight: 1.6, isCore: false },
  { name: 'Efficiency', variations: ['operational efficiency', 'process efficiency'], weight: 1.6, isCore: false },
  { name: 'Productivity', variations: ['productivity improvement', 'performance improvement'], weight: 1.5, isCore: false },
  { name: 'Lean', variations: ['lean management', 'lean principles', 'lean methodology'], weight: 1.7, isCore: false },
  { name: 'Six Sigma', variations: ['6 sigma', 'lean six sigma', 'dmaic'], weight: 1.7, isCore: false },
  { name: 'Continuous Improvement', variations: ['kaizen', 'ci'], weight: 1.6, isCore: false },
  { name: 'SOP', variations: ['standard operating procedures', 'sops', 'procedures'], weight: 1.5, isCore: false },
  { name: 'KPI', variations: ['kpis', 'key performance indicators', 'metrics'], weight: 1.7, isCore: true },
  { name: 'OKR', variations: ['okrs', 'objectives and key results'], weight: 1.5, isCore: false },
  { name: 'Supply Chain', variations: ['supply chain management', 'scm'], weight: 1.6, isCore: false },
  { name: 'Logistics', variations: ['logistics management', 'distribution'], weight: 1.5, isCore: false },
  { name: 'Vendor Management', variations: ['supplier management', 'vendor relations'], weight: 1.5, isCore: false },
  { name: 'Procurement', variations: ['purchasing', 'sourcing'], weight: 1.4, isCore: false },
  { name: 'Inventory Management', variations: ['inventory control', 'stock management'], weight: 1.4, isCore: false },
  { name: 'Quality Control', variations: ['qc', 'quality assurance', 'qa'], weight: 1.5, isCore: false },
  { name: 'Compliance', variations: ['regulatory compliance', 'policy compliance'], weight: 1.5, isCore: false },
  { name: 'Audit', variations: ['auditing', 'internal audit'], weight: 1.4, isCore: false },
  { name: 'Risk Management', variations: ['risk assessment', 'risk mitigation'], weight: 1.5, isCore: false },
  { name: 'Business Operations', variations: ['biz ops', 'operational management'], weight: 1.6, isCore: false },
  { name: 'Operational Excellence', variations: ['opex'], weight: 1.5, isCore: false },
  { name: 'Capacity Planning', variations: ['resource planning', 'workforce planning'], weight: 1.4, isCore: false },
  { name: 'Scalability', variations: ['scaling operations', 'scale'], weight: 1.4, isCore: false },
];

// Strategy & Planning
export const STRATEGY_KEYWORDS: KeywordEntry[] = [
  { name: 'Strategy', variations: ['strategic', 'strategies'], weight: 2.0, isCore: true },
  { name: 'Strategic Planning', variations: ['strategic plan', 'long-term planning'], weight: 1.9, isCore: true },
  { name: 'Business Strategy', variations: ['corporate strategy', 'company strategy'], weight: 1.8, isCore: true },
  { name: 'Business Development', variations: ['biz dev', 'bd', 'business growth'], weight: 1.7, isCore: false },
  { name: 'Market Analysis', variations: ['market research', 'market assessment'], weight: 1.6, isCore: false },
  { name: 'Competitive Analysis', variations: ['competitor analysis', 'competitive intelligence'], weight: 1.5, isCore: false },
  { name: 'SWOT Analysis', variations: ['swot'], weight: 1.4, isCore: false },
  { name: 'Go-to-Market', variations: ['gtm', 'go to market strategy', 'gtm strategy'], weight: 1.6, isCore: false },
  { name: 'Growth Strategy', variations: ['growth initiatives', 'growth planning'], weight: 1.6, isCore: false },
  { name: 'Market Expansion', variations: ['market entry', 'new markets'], weight: 1.5, isCore: false },
  { name: 'Partnership', variations: ['partnerships', 'strategic partnerships', 'alliances'], weight: 1.5, isCore: false },
  { name: 'M&A', variations: ['mergers and acquisitions', 'mergers', 'acquisitions'], weight: 1.4, isCore: false },
  { name: 'Due Diligence', variations: ['dd'], weight: 1.3, isCore: false },
  { name: 'Business Model', variations: ['business modeling', 'revenue model'], weight: 1.5, isCore: false },
  { name: 'Value Proposition', variations: ['value prop'], weight: 1.4, isCore: false },
  { name: 'Roadmap', variations: ['strategic roadmap', 'planning roadmap'], weight: 1.5, isCore: false },
  { name: 'Vision', variations: ['company vision', 'strategic vision'], weight: 1.4, isCore: false },
  { name: 'Mission', variations: ['company mission', 'mission statement'], weight: 1.3, isCore: false },
  { name: 'Goal Setting', variations: ['goal-setting', 'objectives'], weight: 1.4, isCore: false },
  { name: 'Business Case', variations: ['business justification'], weight: 1.4, isCore: false },
  { name: 'Executive Summary', variations: ['exec summary'], weight: 1.3, isCore: false },
  { name: 'Thought Leadership', variations: ['thought leader'], weight: 1.3, isCore: false },
];

// Finance & Budgeting
export const FINANCE_ACCOUNTING_KEYWORDS: KeywordEntry[] = [
  { name: 'Budget', variations: ['budgeting', 'budget management', 'budgets'], weight: 1.9, isCore: true },
  { name: 'P&L', variations: ['profit and loss', 'p&l management', 'profit & loss'], weight: 1.8, isCore: true },
  { name: 'Financial Analysis', variations: ['financial analytics', 'finance analysis'], weight: 1.7, isCore: true },
  { name: 'Forecasting', variations: ['financial forecasting', 'forecast'], weight: 1.7, isCore: false },
  { name: 'Revenue', variations: ['revenue management', 'revenue growth'], weight: 1.6, isCore: false },
  { name: 'Cost Control', variations: ['cost management', 'cost reduction'], weight: 1.6, isCore: false },
  { name: 'Expense Management', variations: ['expense tracking', 'expenses'], weight: 1.4, isCore: false },
  { name: 'Financial Reporting', variations: ['financial reports', 'finance reporting'], weight: 1.6, isCore: false },
  { name: 'ROI', variations: ['return on investment', 'roi analysis'], weight: 1.6, isCore: false },
  { name: 'Financial Modeling', variations: ['financial models'], weight: 1.5, isCore: false },
  { name: 'Variance Analysis', variations: ['variance reporting'], weight: 1.4, isCore: false },
  { name: 'Cash Flow', variations: ['cash flow management', 'cash management'], weight: 1.5, isCore: false },
  { name: 'Capital Expenditure', variations: ['capex', 'cap ex'], weight: 1.3, isCore: false },
  { name: 'Operating Expenditure', variations: ['opex', 'op ex'], weight: 1.3, isCore: false },
  { name: 'EBITDA', variations: ['earnings'], weight: 1.4, isCore: false },
  { name: 'Gross Margin', variations: ['margin', 'profit margin'], weight: 1.4, isCore: false },
  { name: 'Financial Planning', variations: ['fp&a', 'financial planning and analysis'], weight: 1.6, isCore: false },
  { name: 'Accounting', variations: ['accountant', 'bookkeeping'], weight: 1.5, isCore: false },
  { name: 'GAAP', variations: ['generally accepted accounting principles'], weight: 1.3, isCore: false },
  { name: 'Accounts Payable', variations: ['ap', 'a/p'], weight: 1.3, isCore: false },
  { name: 'Accounts Receivable', variations: ['ar', 'a/r'], weight: 1.3, isCore: false },
  { name: 'Reconciliation', variations: ['account reconciliation'], weight: 1.3, isCore: false },
  { name: 'Invoice', variations: ['invoicing', 'billing'], weight: 1.2, isCore: false },
  { name: 'QuickBooks', variations: ['quickbooks online', 'qbo'], weight: 1.3, isCore: false },
  { name: 'SAP', variations: ['sap erp', 'sap finance'], weight: 1.4, isCore: false },
  { name: 'Oracle Financials', variations: ['oracle finance'], weight: 1.3, isCore: false },
  { name: 'NetSuite', variations: ['netsuite erp'], weight: 1.3, isCore: false },
];

// Project Management
export const PROJECT_MANAGEMENT_KEYWORDS: KeywordEntry[] = [
  { name: 'Project Management', variations: ['project manager', 'pm', 'managing projects'], weight: 2.0, isCore: true },
  { name: 'Program Management', variations: ['program manager', 'pgm'], weight: 1.9, isCore: true },
  { name: 'Agile', variations: ['agile methodology', 'agile framework'], weight: 1.8, isCore: true },
  { name: 'Scrum', variations: ['scrum master', 'scrum framework'], weight: 1.8, isCore: true },
  { name: 'Kanban', variations: ['kanban board'], weight: 1.5, isCore: false },
  { name: 'Waterfall', variations: ['waterfall methodology'], weight: 1.4, isCore: false },
  { name: 'Sprint', variations: ['sprint planning', 'sprint review', 'sprints'], weight: 1.6, isCore: false },
  { name: 'Backlog', variations: ['backlog management', 'product backlog'], weight: 1.5, isCore: false },
  { name: 'User Stories', variations: ['user story', 'story points'], weight: 1.4, isCore: false },
  { name: 'Stakeholder Management', variations: ['stakeholder engagement', 'stakeholders'], weight: 1.7, isCore: true },
  { name: 'Timeline', variations: ['timelines', 'project timeline'], weight: 1.5, isCore: false },
  { name: 'Milestones', variations: ['milestone', 'project milestones'], weight: 1.5, isCore: false },
  { name: 'Deliverables', variations: ['deliverable', 'project deliverables'], weight: 1.5, isCore: false },
  { name: 'Scope Management', variations: ['project scope', 'scope creep'], weight: 1.5, isCore: false },
  { name: 'Resource Allocation', variations: ['resource management', 'resourcing'], weight: 1.5, isCore: false },
  { name: 'Risk Assessment', variations: ['project risk', 'risk identification'], weight: 1.4, isCore: false },
  { name: 'PMP', variations: ['project management professional'], weight: 1.7, isCore: false },
  { name: 'PRINCE2', variations: ['prince 2'], weight: 1.3, isCore: false },
  { name: 'PMI', variations: ['project management institute'], weight: 1.3, isCore: false },
  { name: 'Gantt Chart', variations: ['gantt', 'project schedule'], weight: 1.3, isCore: false },
  { name: 'Jira', variations: ['jira software', 'atlassian jira'], weight: 1.6, isCore: false },
  { name: 'Asana', variations: [], weight: 1.4, isCore: false },
  { name: 'Monday.com', variations: ['monday'], weight: 1.3, isCore: false },
  { name: 'Trello', variations: [], weight: 1.3, isCore: false },
  { name: 'Microsoft Project', variations: ['ms project', 'msp'], weight: 1.4, isCore: false },
  { name: 'Smartsheet', variations: ['smart sheet'], weight: 1.3, isCore: false },
  { name: 'Confluence', variations: ['atlassian confluence'], weight: 1.4, isCore: false },
  { name: 'Product Owner', variations: ['po'], weight: 1.6, isCore: false },
  { name: 'Sprint Retrospective', variations: ['retro', 'retrospective'], weight: 1.3, isCore: false },
  { name: 'Stand-up', variations: ['daily standup', 'daily scrum', 'stand up'], weight: 1.3, isCore: false },
];

// Communication & Presentation
export const COMMUNICATION_KEYWORDS: KeywordEntry[] = [
  { name: 'Communication', variations: ['communicating', 'communicate'], weight: 1.8, isCore: true },
  { name: 'Presentation', variations: ['presenting', 'presentations', 'present'], weight: 1.8, isCore: true },
  { name: 'Written Communication', variations: ['writing skills', 'written skills'], weight: 1.5, isCore: false },
  { name: 'Verbal Communication', variations: ['oral communication', 'speaking'], weight: 1.5, isCore: false },
  { name: 'Executive Presentation', variations: ['executive communication', 'c-level presentation'], weight: 1.6, isCore: false },
  { name: 'Stakeholder Communication', variations: ['stakeholder updates', 'stakeholder reporting'], weight: 1.6, isCore: false },
  { name: 'Public Speaking', variations: ['speaking', 'speaker'], weight: 1.4, isCore: false },
  { name: 'Storytelling', variations: ['narrative', 'story telling'], weight: 1.4, isCore: false },
  { name: 'Negotiation', variations: ['negotiating', 'negotiate'], weight: 1.6, isCore: false },
  { name: 'Persuasion', variations: ['influence', 'influencing', 'persuasive'], weight: 1.5, isCore: false },
  { name: 'Facilitation', variations: ['facilitating', 'facilitator', 'workshop facilitation'], weight: 1.5, isCore: false },
  { name: 'Reporting', variations: ['reports', 'status reporting'], weight: 1.5, isCore: false },
  { name: 'Documentation', variations: ['documenting', 'technical writing'], weight: 1.4, isCore: false },
  { name: 'PowerPoint', variations: ['ppt', 'pptx', 'slide decks'], weight: 1.4, isCore: false },
  { name: 'Google Slides', variations: ['slides'], weight: 1.2, isCore: false },
  { name: 'Keynote', variations: ['apple keynote'], weight: 1.1, isCore: false },
  { name: 'Email Communication', variations: ['email', 'professional emails'], weight: 1.3, isCore: false },
  { name: 'Client Communication', variations: ['client relations', 'client facing'], weight: 1.5, isCore: false },
  { name: 'Cross-functional Communication', variations: ['cross-team collaboration'], weight: 1.4, isCore: false },
  { name: 'Meeting Management', variations: ['running meetings', 'meeting facilitation'], weight: 1.3, isCore: false },
  { name: 'Active Listening', variations: ['listening skills'], weight: 1.3, isCore: false },
];

// Combined MBA Keywords
export const MBA_BUSINESS_KEYWORDS: KeywordEntry[] = [
  ...MANAGEMENT_LEADERSHIP_KEYWORDS,
  ...OPERATIONS_KEYWORDS,
  ...STRATEGY_KEYWORDS,
  ...FINANCE_ACCOUNTING_KEYWORDS,
  ...PROJECT_MANAGEMENT_KEYWORDS,
  ...COMMUNICATION_KEYWORDS,
];

/**
 * Get patterns for ATS matching
 */
export function getMbaBusinessPatterns(): [RegExp, string][] {
  return MBA_BUSINESS_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}

/**
 * Get patterns by skill area
 */
export function getMbaPatternsBySkillArea(skillAreaId: string): [RegExp, string][] {
  let keywords: KeywordEntry[];

  switch (skillAreaId) {
    case 'management-leadership':
      keywords = MANAGEMENT_LEADERSHIP_KEYWORDS;
      break;
    case 'operations':
      keywords = OPERATIONS_KEYWORDS;
      break;
    case 'strategy':
      keywords = STRATEGY_KEYWORDS;
      break;
    case 'finance-accounting':
      keywords = FINANCE_ACCOUNTING_KEYWORDS;
      break;
    case 'project-management':
      keywords = PROJECT_MANAGEMENT_KEYWORDS;
      break;
    case 'communication':
      keywords = COMMUNICATION_KEYWORDS;
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
