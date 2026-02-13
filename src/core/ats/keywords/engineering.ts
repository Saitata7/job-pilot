/**
 * Engineering (Non-Software) Keywords
 * Skill Areas: technical-design, project-engineering, quality-compliance, manufacturing, safety, technical-analysis
 */

import type { KeywordEntry } from '@shared/types/background.types';

// Technical Design
export const TECHNICAL_DESIGN_KEYWORDS: KeywordEntry[] = [
  { name: 'CAD', variations: ['computer aided design', 'cad software'], weight: 2.0, isCore: true },
  { name: 'AutoCAD', variations: ['auto cad', 'autocad lt'], weight: 1.9, isCore: true },
  { name: 'SolidWorks', variations: ['solid works', 'solidworks simulation'], weight: 1.9, isCore: true },
  { name: 'CATIA', variations: ['catia v5', 'catia v6'], weight: 1.7, isCore: false },
  { name: 'Inventor', variations: ['autodesk inventor'], weight: 1.6, isCore: false },
  { name: 'Creo', variations: ['creo parametric', 'pro/engineer', 'pro engineer'], weight: 1.7, isCore: false },
  { name: 'NX', variations: ['siemens nx', 'unigraphics'], weight: 1.6, isCore: false },
  { name: 'Fusion 360', variations: ['fusion360', 'autodesk fusion'], weight: 1.5, isCore: false },
  { name: 'Revit', variations: ['autodesk revit'], weight: 1.6, isCore: false },
  { name: 'Civil 3D', variations: ['autocad civil 3d'], weight: 1.5, isCore: false },
  { name: '3D Modeling', variations: ['3d design', 'solid modeling', 'surface modeling'], weight: 1.7, isCore: true },
  { name: '2D Drafting', variations: ['2d drawings', 'drafting'], weight: 1.5, isCore: false },
  { name: 'Technical Drawings', variations: ['engineering drawings', 'blueprints', 'schematics'], weight: 1.7, isCore: true },
  { name: 'BOM', variations: ['bill of materials', 'parts list'], weight: 1.5, isCore: false },
  { name: 'GD&T', variations: ['geometric dimensioning and tolerancing', 'tolerancing'], weight: 1.6, isCore: false },
  { name: 'Design Review', variations: ['design validation'], weight: 1.4, isCore: false },
  { name: 'Prototyping', variations: ['prototype', 'proof of concept'], weight: 1.6, isCore: false },
  { name: '3D Printing', variations: ['additive manufacturing', 'rapid prototyping'], weight: 1.4, isCore: false },
  { name: 'FEA', variations: ['finite element analysis', 'structural analysis'], weight: 1.6, isCore: false },
  { name: 'CFD', variations: ['computational fluid dynamics', 'flow simulation'], weight: 1.5, isCore: false },
  { name: 'PDM', variations: ['product data management'], weight: 1.4, isCore: false },
  { name: 'PLM', variations: ['product lifecycle management'], weight: 1.5, isCore: false },
];

// Project Engineering
export const PROJECT_ENGINEERING_KEYWORDS: KeywordEntry[] = [
  { name: 'Project Engineering', variations: ['engineering projects', 'technical projects'], weight: 1.9, isCore: true },
  { name: 'Project Planning', variations: ['project plan', 'planning'], weight: 1.7, isCore: true },
  { name: 'Project Scheduling', variations: ['schedule management', 'scheduling'], weight: 1.6, isCore: false },
  { name: 'Resource Management', variations: ['resource allocation', 'resourcing'], weight: 1.5, isCore: false },
  { name: 'Cost Estimation', variations: ['cost estimating', 'project costing'], weight: 1.6, isCore: false },
  { name: 'Timeline Management', variations: ['timelines', 'milestones'], weight: 1.5, isCore: false },
  { name: 'Scope Management', variations: ['scope definition', 'scope control'], weight: 1.5, isCore: false },
  { name: 'Vendor Coordination', variations: ['supplier coordination', 'contractor management'], weight: 1.5, isCore: false },
  { name: 'RFQ', variations: ['request for quote', 'rfqs'], weight: 1.4, isCore: false },
  { name: 'RFP', variations: ['request for proposal', 'rfps'], weight: 1.4, isCore: false },
  { name: 'Technical Specifications', variations: ['specs', 'specifications', 'technical specs'], weight: 1.6, isCore: false },
  { name: 'Engineering Change', variations: ['eco', 'engineering change order', 'change control'], weight: 1.5, isCore: false },
  { name: 'Cross-functional', variations: ['cross-functional teams', 'multidisciplinary'], weight: 1.4, isCore: false },
  { name: 'Stakeholder Management', variations: ['stakeholder coordination'], weight: 1.5, isCore: false },
  { name: 'MS Project', variations: ['microsoft project'], weight: 1.4, isCore: false },
  { name: 'Primavera', variations: ['oracle primavera', 'p6'], weight: 1.4, isCore: false },
  { name: 'Capital Projects', variations: ['capex projects'], weight: 1.4, isCore: false },
  { name: 'Commissioning', variations: ['startup', 'plant commissioning'], weight: 1.5, isCore: false },
];

// Quality & Compliance
export const QUALITY_COMPLIANCE_KEYWORDS: KeywordEntry[] = [
  { name: 'Quality Assurance', variations: ['qa', 'quality management'], weight: 1.9, isCore: true },
  { name: 'Quality Control', variations: ['qc', 'inspection'], weight: 1.9, isCore: true },
  { name: 'ISO 9001', variations: ['iso9001', 'iso 9000'], weight: 1.8, isCore: true },
  { name: 'ISO 14001', variations: ['iso14001', 'environmental management'], weight: 1.5, isCore: false },
  { name: 'AS9100', variations: ['as 9100', 'aerospace quality'], weight: 1.5, isCore: false },
  { name: 'IATF 16949', variations: ['ts 16949', 'automotive quality'], weight: 1.5, isCore: false },
  { name: 'FDA', variations: ['fda compliance', 'fda regulations'], weight: 1.5, isCore: false },
  { name: 'GMP', variations: ['good manufacturing practice', 'cgmp'], weight: 1.5, isCore: false },
  { name: 'Six Sigma', variations: ['6 sigma', 'lean six sigma', 'lss'], weight: 1.7, isCore: false },
  { name: 'DMAIC', variations: ['define measure analyze improve control'], weight: 1.4, isCore: false },
  { name: 'Root Cause Analysis', variations: ['rca', 'root cause'], weight: 1.6, isCore: false },
  { name: '5 Whys', variations: ['five whys', '5-why'], weight: 1.3, isCore: false },
  { name: 'Fishbone Diagram', variations: ['ishikawa', 'cause and effect'], weight: 1.3, isCore: false },
  { name: 'FMEA', variations: ['failure mode effects analysis', 'dfmea', 'pfmea'], weight: 1.6, isCore: false },
  { name: '8D', variations: ['8d report', 'eight disciplines'], weight: 1.4, isCore: false },
  { name: 'CAPA', variations: ['corrective action preventive action', 'corrective action'], weight: 1.5, isCore: false },
  { name: 'SPC', variations: ['statistical process control'], weight: 1.5, isCore: false },
  { name: 'Control Charts', variations: ['control chart'], weight: 1.3, isCore: false },
  { name: 'First Article Inspection', variations: ['fai', 'first article'], weight: 1.4, isCore: false },
  { name: 'Audit', variations: ['quality audit', 'internal audit', 'auditing'], weight: 1.5, isCore: false },
  { name: 'Non-conformance', variations: ['ncr', 'non-conforming', 'deviation'], weight: 1.4, isCore: false },
  { name: 'Calibration', variations: ['equipment calibration'], weight: 1.3, isCore: false },
  { name: 'Traceability', variations: ['material traceability'], weight: 1.3, isCore: false },
  { name: 'Documentation Control', variations: ['document control'], weight: 1.4, isCore: false },
];

// Manufacturing & Production
export const MANUFACTURING_KEYWORDS: KeywordEntry[] = [
  { name: 'Manufacturing', variations: ['manufacturing engineering', 'mfg'], weight: 2.0, isCore: true },
  { name: 'Production', variations: ['production management', 'production engineering'], weight: 1.9, isCore: true },
  { name: 'Lean Manufacturing', variations: ['lean production', 'lean'], weight: 1.8, isCore: true },
  { name: 'Assembly', variations: ['assembly line', 'assembly process'], weight: 1.6, isCore: false },
  { name: 'Machining', variations: ['cnc machining', 'machine shop'], weight: 1.6, isCore: false },
  { name: 'CNC', variations: ['cnc programming', 'cnc machine'], weight: 1.7, isCore: false },
  { name: 'Fabrication', variations: ['metal fabrication', 'sheet metal'], weight: 1.5, isCore: false },
  { name: 'Welding', variations: ['mig welding', 'tig welding'], weight: 1.4, isCore: false },
  { name: 'Injection Molding', variations: ['plastic injection', 'molding'], weight: 1.4, isCore: false },
  { name: 'Die Casting', variations: ['casting'], weight: 1.3, isCore: false },
  { name: 'Process Engineering', variations: ['process engineer', 'process development'], weight: 1.7, isCore: false },
  { name: 'Production Planning', variations: ['production scheduling'], weight: 1.6, isCore: false },
  { name: 'Capacity Planning', variations: ['capacity analysis'], weight: 1.5, isCore: false },
  { name: 'Work Instructions', variations: ['standard work', 'work standards'], weight: 1.4, isCore: false },
  { name: 'Time Study', variations: ['time and motion study', 'work measurement'], weight: 1.4, isCore: false },
  { name: 'Line Balancing', variations: ['production balancing'], weight: 1.3, isCore: false },
  { name: 'Kaizen', variations: ['continuous improvement', 'kaizen event'], weight: 1.6, isCore: false },
  { name: '5S', variations: ['5s methodology', 'workplace organization'], weight: 1.5, isCore: false },
  { name: 'Value Stream Mapping', variations: ['vsm', 'value stream'], weight: 1.5, isCore: false },
  { name: 'Kanban', variations: ['kanban system', 'pull system'], weight: 1.4, isCore: false },
  { name: 'JIT', variations: ['just in time', 'just-in-time'], weight: 1.4, isCore: false },
  { name: 'TPM', variations: ['total productive maintenance'], weight: 1.4, isCore: false },
  { name: 'OEE', variations: ['overall equipment effectiveness'], weight: 1.4, isCore: false },
  { name: 'Downtime', variations: ['downtime reduction', 'downtime analysis'], weight: 1.3, isCore: false },
  { name: 'Yield', variations: ['yield improvement', 'first pass yield'], weight: 1.4, isCore: false },
  { name: 'Scrap Reduction', variations: ['waste reduction'], weight: 1.3, isCore: false },
  { name: 'ERP', variations: ['erp system', 'mrp'], weight: 1.5, isCore: false },
  { name: 'SAP', variations: ['sap erp', 'sap manufacturing'], weight: 1.4, isCore: false },
];

// Safety & Environmental
export const SAFETY_KEYWORDS: KeywordEntry[] = [
  { name: 'Safety', variations: ['safety management', 'workplace safety'], weight: 1.9, isCore: true },
  { name: 'OSHA', variations: ['osha compliance', 'osha regulations', 'osha 30'], weight: 1.8, isCore: true },
  { name: 'EHS', variations: ['environment health safety', 'hse', 'health and safety'], weight: 1.8, isCore: true },
  { name: 'Risk Assessment', variations: ['hazard assessment', 'risk analysis'], weight: 1.6, isCore: false },
  { name: 'Hazard Identification', variations: ['hazid', 'hazard analysis'], weight: 1.5, isCore: false },
  { name: 'HAZOP', variations: ['hazard and operability'], weight: 1.4, isCore: false },
  { name: 'Lockout Tagout', variations: ['loto', 'lockout/tagout'], weight: 1.5, isCore: false },
  { name: 'PPE', variations: ['personal protective equipment'], weight: 1.4, isCore: false },
  { name: 'Safety Training', variations: ['safety education'], weight: 1.4, isCore: false },
  { name: 'Incident Investigation', variations: ['accident investigation', 'incident analysis'], weight: 1.5, isCore: false },
  { name: 'Near Miss', variations: ['near miss reporting'], weight: 1.3, isCore: false },
  { name: 'Safety Audit', variations: ['safety inspection'], weight: 1.4, isCore: false },
  { name: 'Permit to Work', variations: ['ptw', 'work permit'], weight: 1.3, isCore: false },
  { name: 'Confined Space', variations: ['confined space entry'], weight: 1.3, isCore: false },
  { name: 'Fall Protection', variations: ['fall prevention'], weight: 1.3, isCore: false },
  { name: 'Emergency Response', variations: ['emergency preparedness', 'emergency planning'], weight: 1.4, isCore: false },
  { name: 'Environmental Compliance', variations: ['environmental regulations'], weight: 1.5, isCore: false },
  { name: 'EPA', variations: ['epa regulations', 'epa compliance'], weight: 1.4, isCore: false },
  { name: 'Waste Management', variations: ['hazardous waste', 'waste disposal'], weight: 1.4, isCore: false },
  { name: 'Emissions', variations: ['air emissions', 'emission control'], weight: 1.3, isCore: false },
  { name: 'Sustainability', variations: ['sustainable practices', 'green initiatives'], weight: 1.3, isCore: false },
  { name: 'SDS', variations: ['safety data sheet', 'msds'], weight: 1.3, isCore: false },
];

// Technical Analysis
export const TECHNICAL_ANALYSIS_KEYWORDS: KeywordEntry[] = [
  { name: 'Technical Analysis', variations: ['engineering analysis'], weight: 1.8, isCore: true },
  { name: 'Problem Solving', variations: ['troubleshooting', 'problem-solving'], weight: 1.8, isCore: true },
  { name: 'Root Cause', variations: ['root cause analysis', 'failure analysis'], weight: 1.6, isCore: false },
  { name: 'Calculations', variations: ['engineering calculations', 'technical calculations'], weight: 1.5, isCore: false },
  { name: 'MATLAB', variations: ['mat lab'], weight: 1.5, isCore: false },
  { name: 'Simulink', variations: ['matlab simulink'], weight: 1.4, isCore: false },
  { name: 'ANSYS', variations: ['ansys workbench'], weight: 1.5, isCore: false },
  { name: 'Simulation', variations: ['computer simulation', 'modeling and simulation'], weight: 1.6, isCore: false },
  { name: 'Data Analysis', variations: ['data analytics', 'analytical skills'], weight: 1.5, isCore: false },
  { name: 'Statistical Analysis', variations: ['statistics', 'statistical methods'], weight: 1.4, isCore: false },
  { name: 'Minitab', variations: ['mini tab'], weight: 1.3, isCore: false },
  { name: 'DOE', variations: ['design of experiments', 'experimental design'], weight: 1.4, isCore: false },
  { name: 'Testing', variations: ['test engineering', 'test procedures'], weight: 1.5, isCore: false },
  { name: 'Validation', variations: ['design validation', 'product validation'], weight: 1.5, isCore: false },
  { name: 'Verification', variations: ['design verification'], weight: 1.4, isCore: false },
  { name: 'Reliability', variations: ['reliability engineering', 'reliability analysis'], weight: 1.4, isCore: false },
  { name: 'MTBF', variations: ['mean time between failure'], weight: 1.3, isCore: false },
  { name: 'Technical Reports', variations: ['engineering reports', 'technical documentation'], weight: 1.4, isCore: false },
  { name: 'Technical Presentations', variations: ['presenting technical data'], weight: 1.3, isCore: false },
  { name: 'Cross-disciplinary', variations: ['multidisciplinary', 'interdisciplinary'], weight: 1.3, isCore: false },
];

// Combined Engineering Keywords
export const ENGINEERING_KEYWORDS: KeywordEntry[] = [
  ...TECHNICAL_DESIGN_KEYWORDS,
  ...PROJECT_ENGINEERING_KEYWORDS,
  ...QUALITY_COMPLIANCE_KEYWORDS,
  ...MANUFACTURING_KEYWORDS,
  ...SAFETY_KEYWORDS,
  ...TECHNICAL_ANALYSIS_KEYWORDS,
];

/**
 * Get patterns for ATS matching
 */
export function getEngineeringPatterns(): [RegExp, string][] {
  return ENGINEERING_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}

/**
 * Get patterns by skill area
 */
export function getEngineeringPatternsBySkillArea(skillAreaId: string): [RegExp, string][] {
  let keywords: KeywordEntry[];

  switch (skillAreaId) {
    case 'technical-design':
      keywords = TECHNICAL_DESIGN_KEYWORDS;
      break;
    case 'project-engineering':
      keywords = PROJECT_ENGINEERING_KEYWORDS;
      break;
    case 'quality-compliance':
      keywords = QUALITY_COMPLIANCE_KEYWORDS;
      break;
    case 'manufacturing':
      keywords = MANUFACTURING_KEYWORDS;
      break;
    case 'safety':
      keywords = SAFETY_KEYWORDS;
      break;
    case 'technical-analysis':
      keywords = TECHNICAL_ANALYSIS_KEYWORDS;
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
