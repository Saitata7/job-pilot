/**
 * Design / Creative Keywords
 * Skill Areas: ux-design, ui-design, graphic-design, design-tools, motion-design
 */

import type { KeywordEntry } from '@shared/types/background.types';

// UX Design
export const UX_DESIGN_KEYWORDS: KeywordEntry[] = [
  { name: 'UX Design', variations: ['ux', 'user experience', 'user experience design'], weight: 2.0, isCore: true },
  { name: 'User Research', variations: ['ux research', 'user studies', 'research'], weight: 1.9, isCore: true },
  { name: 'Usability Testing', variations: ['usability study', 'user testing', 'usability'], weight: 1.8, isCore: true },
  { name: 'User Interviews', variations: ['customer interviews', 'stakeholder interviews'], weight: 1.6, isCore: false },
  { name: 'Personas', variations: ['user personas', 'persona development'], weight: 1.6, isCore: false },
  { name: 'User Journey', variations: ['user journey mapping', 'customer journey', 'journey map'], weight: 1.7, isCore: false },
  { name: 'User Flows', variations: ['user flow', 'task flows'], weight: 1.7, isCore: false },
  { name: 'Wireframes', variations: ['wireframing', 'wireframe', 'lo-fi'], weight: 1.8, isCore: true },
  { name: 'Information Architecture', variations: ['ia', 'content architecture'], weight: 1.6, isCore: false },
  { name: 'Interaction Design', variations: ['ixd', 'interaction patterns'], weight: 1.7, isCore: false },
  { name: 'Prototyping', variations: ['prototype', 'prototypes', 'rapid prototyping'], weight: 1.8, isCore: true },
  { name: 'A/B Testing', variations: ['ab testing', 'split testing'], weight: 1.5, isCore: false },
  { name: 'Heuristic Evaluation', variations: ['heuristics', 'ux audit'], weight: 1.4, isCore: false },
  { name: 'Accessibility', variations: ['a11y', 'wcag', 'accessible design', 'ada compliance'], weight: 1.6, isCore: false },
  { name: 'User-Centered Design', variations: ['ucd', 'human-centered design', 'hcd'], weight: 1.7, isCore: false },
  { name: 'Design Thinking', variations: ['design process', 'design methodology'], weight: 1.6, isCore: false },
  { name: 'Empathy Mapping', variations: ['empathy map'], weight: 1.3, isCore: false },
  { name: 'Competitive Analysis', variations: ['competitor analysis', 'ux benchmarking'], weight: 1.4, isCore: false },
  { name: 'Card Sorting', variations: ['tree testing'], weight: 1.3, isCore: false },
  { name: 'Eye Tracking', variations: ['gaze tracking'], weight: 1.2, isCore: false },
  { name: 'Analytics', variations: ['user analytics', 'behavior analytics'], weight: 1.4, isCore: false },
  { name: 'Conversion Optimization', variations: ['cro', 'conversion rate'], weight: 1.4, isCore: false },
];

// UI Design
export const UI_DESIGN_KEYWORDS: KeywordEntry[] = [
  { name: 'UI Design', variations: ['ui', 'user interface', 'user interface design'], weight: 2.0, isCore: true },
  { name: 'Visual Design', variations: ['visual designer', 'visuals'], weight: 1.9, isCore: true },
  { name: 'Design System', variations: ['design systems', 'component library', 'pattern library'], weight: 1.8, isCore: true },
  { name: 'Style Guide', variations: ['style guides', 'brand guidelines'], weight: 1.6, isCore: false },
  { name: 'Typography', variations: ['type design', 'fonts', 'typeface'], weight: 1.6, isCore: false },
  { name: 'Color Theory', variations: ['color palette', 'color scheme'], weight: 1.5, isCore: false },
  { name: 'Layout', variations: ['layout design', 'page layout'], weight: 1.5, isCore: false },
  { name: 'Grid System', variations: ['grid layout', 'grids'], weight: 1.4, isCore: false },
  { name: 'Responsive Design', variations: ['responsive', 'mobile-first', 'adaptive design'], weight: 1.7, isCore: true },
  { name: 'Mobile Design', variations: ['mobile ui', 'app design'], weight: 1.6, isCore: false },
  { name: 'Web Design', variations: ['website design', 'web ui'], weight: 1.6, isCore: false },
  { name: 'Icons', variations: ['iconography', 'icon design'], weight: 1.4, isCore: false },
  { name: 'Illustrations', variations: ['illustration', 'illustrator'], weight: 1.4, isCore: false },
  { name: 'Mockups', variations: ['mockup', 'high-fidelity', 'hi-fi'], weight: 1.6, isCore: false },
  { name: 'UI Components', variations: ['components', 'ui elements'], weight: 1.6, isCore: false },
  { name: 'Buttons', variations: ['cta', 'call to action'], weight: 1.2, isCore: false },
  { name: 'Forms', variations: ['form design', 'input fields'], weight: 1.3, isCore: false },
  { name: 'Navigation', variations: ['nav design', 'menu design'], weight: 1.4, isCore: false },
  { name: 'Dark Mode', variations: ['dark theme', 'light mode'], weight: 1.2, isCore: false },
  { name: 'Material Design', variations: ['material ui', 'google material'], weight: 1.4, isCore: false },
  { name: 'iOS Design', variations: ['human interface guidelines', 'hig', 'apple design'], weight: 1.4, isCore: false },
  { name: 'Pixel Perfect', variations: ['pixel-perfect', 'attention to detail'], weight: 1.3, isCore: false },
];

// Graphic Design
export const GRAPHIC_DESIGN_KEYWORDS: KeywordEntry[] = [
  { name: 'Graphic Design', variations: ['graphics', 'graphic designer'], weight: 2.0, isCore: true },
  { name: 'Branding', variations: ['brand design', 'brand identity', 'rebranding'], weight: 1.9, isCore: true },
  { name: 'Logo Design', variations: ['logo', 'logos', 'logotype'], weight: 1.7, isCore: false },
  { name: 'Visual Identity', variations: ['corporate identity', 'brand visuals'], weight: 1.7, isCore: false },
  { name: 'Print Design', variations: ['print', 'print materials'], weight: 1.5, isCore: false },
  { name: 'Packaging Design', variations: ['packaging', 'package design'], weight: 1.4, isCore: false },
  { name: 'Marketing Materials', variations: ['collateral', 'marketing collateral'], weight: 1.5, isCore: false },
  { name: 'Flyers', variations: ['flyer design', 'leaflets'], weight: 1.2, isCore: false },
  { name: 'Brochures', variations: ['brochure design', 'catalogs'], weight: 1.3, isCore: false },
  { name: 'Posters', variations: ['poster design'], weight: 1.2, isCore: false },
  { name: 'Business Cards', variations: ['business card design'], weight: 1.1, isCore: false },
  { name: 'Banners', variations: ['banner design', 'web banners', 'display ads'], weight: 1.3, isCore: false },
  { name: 'Social Media Graphics', variations: ['social graphics', 'social media design'], weight: 1.5, isCore: false },
  { name: 'Email Design', variations: ['email templates', 'newsletter design'], weight: 1.4, isCore: false },
  { name: 'Infographics', variations: ['infographic design', 'data visualization'], weight: 1.5, isCore: false },
  { name: 'Presentation Design', variations: ['pitch decks', 'slide design'], weight: 1.4, isCore: false },
  { name: 'Photo Editing', variations: ['photo retouching', 'image editing'], weight: 1.4, isCore: false },
  { name: 'Image Manipulation', variations: ['photo manipulation', 'compositing'], weight: 1.3, isCore: false },
  { name: 'Color Correction', variations: ['color grading'], weight: 1.2, isCore: false },
  { name: 'Creative Direction', variations: ['creative director', 'art direction'], weight: 1.6, isCore: false },
  { name: 'Concept Development', variations: ['creative concepts', 'ideation'], weight: 1.5, isCore: false },
];

// Design Tools
export const DESIGN_TOOLS_KEYWORDS: KeywordEntry[] = [
  { name: 'Figma', variations: ['figma design', 'figjam'], weight: 2.0, isCore: true },
  { name: 'Sketch', variations: ['sketch app', 'bohemian sketch'], weight: 1.8, isCore: true },
  { name: 'Adobe XD', variations: ['xd', 'experience design'], weight: 1.7, isCore: false },
  { name: 'Photoshop', variations: ['adobe photoshop', 'ps'], weight: 1.9, isCore: true },
  { name: 'Illustrator', variations: ['adobe illustrator', 'ai'], weight: 1.8, isCore: true },
  { name: 'InDesign', variations: ['adobe indesign'], weight: 1.5, isCore: false },
  { name: 'After Effects', variations: ['adobe after effects', 'ae'], weight: 1.5, isCore: false },
  { name: 'Premiere Pro', variations: ['adobe premiere', 'premiere'], weight: 1.4, isCore: false },
  { name: 'Adobe Creative Suite', variations: ['creative cloud', 'cc', 'adobe cc'], weight: 1.6, isCore: false },
  { name: 'Lightroom', variations: ['adobe lightroom'], weight: 1.3, isCore: false },
  { name: 'InVision', variations: ['invision app', 'invision studio'], weight: 1.4, isCore: false },
  { name: 'Framer', variations: ['framer x'], weight: 1.4, isCore: false },
  { name: 'Principle', variations: ['principle for mac'], weight: 1.2, isCore: false },
  { name: 'ProtoPie', variations: ['protopie'], weight: 1.2, isCore: false },
  { name: 'Zeplin', variations: [], weight: 1.4, isCore: false },
  { name: 'Abstract', variations: ['abstract design'], weight: 1.2, isCore: false },
  { name: 'Miro', variations: ['miro board', 'miro whiteboard'], weight: 1.4, isCore: false },
  { name: 'FigJam', variations: ['fig jam'], weight: 1.3, isCore: false },
  { name: 'Canva', variations: [], weight: 1.3, isCore: false },
  { name: 'Procreate', variations: [], weight: 1.2, isCore: false },
  { name: 'Blender', variations: ['blender 3d'], weight: 1.3, isCore: false },
  { name: 'Cinema 4D', variations: ['c4d'], weight: 1.2, isCore: false },
  { name: 'Webflow', variations: ['web flow'], weight: 1.3, isCore: false },
  { name: 'Storybook', variations: ['storybook js'], weight: 1.3, isCore: false },
];

// Motion & Animation
export const MOTION_DESIGN_KEYWORDS: KeywordEntry[] = [
  { name: 'Motion Design', variations: ['motion graphics', 'motion designer'], weight: 1.9, isCore: true },
  { name: 'Animation', variations: ['animator', 'animated'], weight: 1.9, isCore: true },
  { name: 'Video Editing', variations: ['video editor', 'video production'], weight: 1.6, isCore: false },
  { name: 'After Effects', variations: ['adobe after effects', 'ae', 'aep'], weight: 1.8, isCore: true },
  { name: 'Premiere Pro', variations: ['adobe premiere', 'premiere'], weight: 1.5, isCore: false },
  { name: 'Final Cut Pro', variations: ['final cut', 'fcpx'], weight: 1.4, isCore: false },
  { name: 'DaVinci Resolve', variations: ['davinci', 'resolve'], weight: 1.3, isCore: false },
  { name: 'Lottie', variations: ['lottie animations', 'lottiefiles'], weight: 1.5, isCore: false },
  { name: 'Rive', variations: ['rive app'], weight: 1.3, isCore: false },
  { name: 'Micro-interactions', variations: ['microinteractions', 'micro animations'], weight: 1.5, isCore: false },
  { name: 'UI Animation', variations: ['interface animation', 'animated ui'], weight: 1.5, isCore: false },
  { name: 'Transitions', variations: ['page transitions', 'animated transitions'], weight: 1.3, isCore: false },
  { name: 'Loading Animations', variations: ['loaders', 'spinners'], weight: 1.2, isCore: false },
  { name: 'Explainer Videos', variations: ['explainer video', 'animated explainer'], weight: 1.3, isCore: false },
  { name: 'Storyboarding', variations: ['storyboard', 'storyboards'], weight: 1.4, isCore: false },
  { name: '2D Animation', variations: ['2d animator'], weight: 1.4, isCore: false },
  { name: '3D Animation', variations: ['3d animator', '3d motion'], weight: 1.4, isCore: false },
  { name: 'Character Animation', variations: ['character animator'], weight: 1.3, isCore: false },
  { name: 'Keyframe Animation', variations: ['keyframes', 'keyframing'], weight: 1.3, isCore: false },
  { name: 'Easing', variations: ['ease-in', 'ease-out', 'timing functions'], weight: 1.2, isCore: false },
  { name: 'GIFs', variations: ['animated gifs', 'gif creation'], weight: 1.1, isCore: false },
];

// Combined Design Keywords
export const DESIGN_KEYWORDS: KeywordEntry[] = [
  ...UX_DESIGN_KEYWORDS,
  ...UI_DESIGN_KEYWORDS,
  ...GRAPHIC_DESIGN_KEYWORDS,
  ...DESIGN_TOOLS_KEYWORDS,
  ...MOTION_DESIGN_KEYWORDS,
];

/**
 * Get patterns for ATS matching
 */
export function getDesignPatterns(): [RegExp, string][] {
  return DESIGN_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}

/**
 * Get patterns by skill area
 */
export function getDesignPatternsBySkillArea(skillAreaId: string): [RegExp, string][] {
  let keywords: KeywordEntry[];

  switch (skillAreaId) {
    case 'ux-design':
      keywords = UX_DESIGN_KEYWORDS;
      break;
    case 'ui-design':
      keywords = UI_DESIGN_KEYWORDS;
      break;
    case 'graphic-design':
      keywords = GRAPHIC_DESIGN_KEYWORDS;
      break;
    case 'design-tools':
      keywords = DESIGN_TOOLS_KEYWORDS;
      break;
    case 'motion-design':
      keywords = MOTION_DESIGN_KEYWORDS;
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
