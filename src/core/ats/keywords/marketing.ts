/**
 * Marketing / Communications Keywords
 * Skill Areas: digital-marketing, content-marketing, social-media, brand-marketing, marketing-analytics, marketing-tools
 */

import type { KeywordEntry } from '@shared/types/background.types';

// Digital Marketing
export const DIGITAL_MARKETING_KEYWORDS: KeywordEntry[] = [
  { name: 'Digital Marketing', variations: ['digital marketer', 'online marketing'], weight: 2.0, isCore: true },
  { name: 'SEO', variations: ['search engine optimization', 'organic search'], weight: 1.9, isCore: true },
  { name: 'SEM', variations: ['search engine marketing', 'paid search'], weight: 1.8, isCore: true },
  { name: 'PPC', variations: ['pay per click', 'paid ads', 'ppc advertising'], weight: 1.8, isCore: true },
  { name: 'Google Ads', variations: ['google adwords', 'adwords', 'google advertising'], weight: 1.8, isCore: true },
  { name: 'Facebook Ads', variations: ['meta ads', 'fb ads', 'instagram ads'], weight: 1.7, isCore: false },
  { name: 'LinkedIn Ads', variations: ['linkedin advertising'], weight: 1.5, isCore: false },
  { name: 'Display Advertising', variations: ['display ads', 'banner ads', 'programmatic'], weight: 1.5, isCore: false },
  { name: 'Retargeting', variations: ['remarketing', 'retargeting ads'], weight: 1.5, isCore: false },
  { name: 'Email Marketing', variations: ['email campaigns', 'email automation'], weight: 1.7, isCore: true },
  { name: 'Marketing Automation', variations: ['automation', 'automated marketing'], weight: 1.6, isCore: false },
  { name: 'Lead Generation', variations: ['lead gen', 'demand generation', 'demand gen'], weight: 1.7, isCore: false },
  { name: 'Conversion Rate', variations: ['cro', 'conversion optimization'], weight: 1.6, isCore: false },
  { name: 'Landing Pages', variations: ['landing page optimization', 'lp'], weight: 1.5, isCore: false },
  { name: 'Affiliate Marketing', variations: ['affiliate', 'affiliate program'], weight: 1.3, isCore: false },
  { name: 'Growth Marketing', variations: ['growth hacking', 'growth hacker'], weight: 1.6, isCore: false },
  { name: 'Performance Marketing', variations: ['performance marketer'], weight: 1.7, isCore: false },
  { name: 'Customer Acquisition', variations: ['cac', 'user acquisition'], weight: 1.5, isCore: false },
  { name: 'Keyword Research', variations: ['keyword analysis'], weight: 1.5, isCore: false },
  { name: 'On-page SEO', variations: ['on-page optimization', 'technical seo'], weight: 1.4, isCore: false },
  { name: 'Off-page SEO', variations: ['link building', 'backlinks'], weight: 1.4, isCore: false },
  { name: 'Local SEO', variations: ['local search', 'google my business'], weight: 1.3, isCore: false },
  { name: 'Mobile Marketing', variations: ['app marketing', 'mobile ads'], weight: 1.4, isCore: false },
];

// Content Marketing
export const CONTENT_MARKETING_KEYWORDS: KeywordEntry[] = [
  { name: 'Content Marketing', variations: ['content marketer', 'content strategy'], weight: 2.0, isCore: true },
  { name: 'Content Strategy', variations: ['content strategist', 'content planning'], weight: 1.9, isCore: true },
  { name: 'Copywriting', variations: ['copywriter', 'copy', 'ad copy'], weight: 1.8, isCore: true },
  { name: 'Blog', variations: ['blogging', 'blog posts', 'blog writing'], weight: 1.6, isCore: false },
  { name: 'Article Writing', variations: ['articles', 'long-form content'], weight: 1.5, isCore: false },
  { name: 'Content Creation', variations: ['content creator', 'creating content'], weight: 1.7, isCore: true },
  { name: 'Editorial Calendar', variations: ['content calendar', 'editorial planning'], weight: 1.5, isCore: false },
  { name: 'Storytelling', variations: ['brand storytelling', 'narrative'], weight: 1.5, isCore: false },
  { name: 'Thought Leadership', variations: ['thought leader', 'industry expertise'], weight: 1.4, isCore: false },
  { name: 'White Papers', variations: ['whitepapers', 'white paper'], weight: 1.4, isCore: false },
  { name: 'Case Studies', variations: ['case study', 'customer stories'], weight: 1.5, isCore: false },
  { name: 'Ebooks', variations: ['e-books', 'guides', 'downloadable content'], weight: 1.3, isCore: false },
  { name: 'Webinars', variations: ['webinar', 'online events'], weight: 1.4, isCore: false },
  { name: 'Podcasts', variations: ['podcast', 'podcasting'], weight: 1.3, isCore: false },
  { name: 'Video Content', variations: ['video marketing', 'video production'], weight: 1.5, isCore: false },
  { name: 'SEO Writing', variations: ['seo content', 'seo copywriting'], weight: 1.5, isCore: false },
  { name: 'Content Optimization', variations: ['content seo', 'optimized content'], weight: 1.4, isCore: false },
  { name: 'Content Distribution', variations: ['content promotion', 'amplification'], weight: 1.4, isCore: false },
  { name: 'Content Management', variations: ['cms', 'content management system'], weight: 1.4, isCore: false },
  { name: 'WordPress', variations: ['wp', 'wordpress cms'], weight: 1.4, isCore: false },
  { name: 'UX Writing', variations: ['ux copy', 'microcopy'], weight: 1.4, isCore: false },
  { name: 'Technical Writing', variations: ['technical writer', 'documentation'], weight: 1.3, isCore: false },
];

// Social Media
export const SOCIAL_MEDIA_KEYWORDS: KeywordEntry[] = [
  { name: 'Social Media', variations: ['social media marketing', 'smm'], weight: 2.0, isCore: true },
  { name: 'Social Media Management', variations: ['social media manager', 'social manager'], weight: 1.9, isCore: true },
  { name: 'Community Management', variations: ['community manager', 'online community'], weight: 1.7, isCore: true },
  { name: 'Instagram', variations: ['ig', 'instagram marketing'], weight: 1.6, isCore: false },
  { name: 'Facebook', variations: ['fb', 'facebook marketing', 'meta'], weight: 1.6, isCore: false },
  { name: 'LinkedIn', variations: ['linkedin marketing'], weight: 1.6, isCore: false },
  { name: 'Twitter', variations: ['x', 'twitter marketing'], weight: 1.5, isCore: false },
  { name: 'TikTok', variations: ['tiktok marketing', 'tik tok'], weight: 1.6, isCore: false },
  { name: 'YouTube', variations: ['youtube marketing', 'video marketing'], weight: 1.5, isCore: false },
  { name: 'Pinterest', variations: ['pinterest marketing'], weight: 1.3, isCore: false },
  { name: 'Snapchat', variations: ['snapchat marketing'], weight: 1.2, isCore: false },
  { name: 'Social Strategy', variations: ['social media strategy', 'social planning'], weight: 1.7, isCore: false },
  { name: 'Social Content', variations: ['social posts', 'social copy'], weight: 1.5, isCore: false },
  { name: 'Engagement', variations: ['social engagement', 'audience engagement'], weight: 1.6, isCore: false },
  { name: 'Followers', variations: ['follower growth', 'audience growth'], weight: 1.3, isCore: false },
  { name: 'Influencer Marketing', variations: ['influencer', 'influencers', 'creator partnerships'], weight: 1.6, isCore: false },
  { name: 'User Generated Content', variations: ['ugc', 'user content'], weight: 1.4, isCore: false },
  { name: 'Social Listening', variations: ['social monitoring', 'brand monitoring'], weight: 1.4, isCore: false },
  { name: 'Hashtags', variations: ['hashtag strategy'], weight: 1.2, isCore: false },
  { name: 'Reels', variations: ['instagram reels', 'short-form video'], weight: 1.4, isCore: false },
  { name: 'Stories', variations: ['instagram stories', 'social stories'], weight: 1.3, isCore: false },
  { name: 'Live Streaming', variations: ['live video', 'going live'], weight: 1.2, isCore: false },
  { name: 'Viral', variations: ['viral content', 'viral marketing'], weight: 1.3, isCore: false },
];

// Brand & Communications
export const BRAND_MARKETING_KEYWORDS: KeywordEntry[] = [
  { name: 'Brand Marketing', variations: ['brand manager', 'branding'], weight: 2.0, isCore: true },
  { name: 'Brand Strategy', variations: ['brand strategist', 'brand planning'], weight: 1.9, isCore: true },
  { name: 'Brand Awareness', variations: ['brand recognition', 'awareness campaigns'], weight: 1.7, isCore: true },
  { name: 'Brand Identity', variations: ['brand voice', 'brand personality'], weight: 1.6, isCore: false },
  { name: 'Brand Guidelines', variations: ['brand standards', 'brand book'], weight: 1.5, isCore: false },
  { name: 'Brand Positioning', variations: ['positioning', 'market positioning'], weight: 1.6, isCore: false },
  { name: 'Public Relations', variations: ['pr', 'media relations'], weight: 1.7, isCore: false },
  { name: 'Press Releases', variations: ['press release', 'media release'], weight: 1.4, isCore: false },
  { name: 'Media Coverage', variations: ['earned media', 'press coverage'], weight: 1.4, isCore: false },
  { name: 'Corporate Communications', variations: ['corp comms', 'internal communications'], weight: 1.5, isCore: false },
  { name: 'Crisis Communications', variations: ['crisis management', 'crisis pr'], weight: 1.4, isCore: false },
  { name: 'Reputation Management', variations: ['online reputation', 'brand reputation'], weight: 1.4, isCore: false },
  { name: 'Sponsorships', variations: ['sponsorship', 'brand partnerships'], weight: 1.3, isCore: false },
  { name: 'Events', variations: ['event marketing', 'event management'], weight: 1.5, isCore: false },
  { name: 'Trade Shows', variations: ['trade show', 'conferences', 'exhibitions'], weight: 1.3, isCore: false },
  { name: 'Product Marketing', variations: ['product marketer', 'pmm'], weight: 1.7, isCore: false },
  { name: 'Go-to-Market', variations: ['gtm', 'product launch', 'launch strategy'], weight: 1.6, isCore: false },
  { name: 'Messaging', variations: ['brand messaging', 'value proposition'], weight: 1.5, isCore: false },
  { name: 'Competitive Positioning', variations: ['competitive analysis', 'market differentiation'], weight: 1.4, isCore: false },
  { name: 'Customer Marketing', variations: ['customer advocacy', 'customer programs'], weight: 1.3, isCore: false },
];

// Marketing Analytics
export const MARKETING_ANALYTICS_KEYWORDS: KeywordEntry[] = [
  { name: 'Marketing Analytics', variations: ['marketing analysis', 'campaign analytics'], weight: 1.9, isCore: true },
  { name: 'Google Analytics', variations: ['ga', 'ga4', 'google analytics 4'], weight: 1.8, isCore: true },
  { name: 'A/B Testing', variations: ['ab testing', 'split testing', 'experimentation'], weight: 1.6, isCore: false },
  { name: 'Attribution', variations: ['attribution modeling', 'multi-touch attribution'], weight: 1.5, isCore: false },
  { name: 'ROI', variations: ['return on investment', 'marketing roi'], weight: 1.7, isCore: true },
  { name: 'KPIs', variations: ['kpi', 'key performance indicators'], weight: 1.6, isCore: false },
  { name: 'Reporting', variations: ['marketing reports', 'campaign reporting'], weight: 1.6, isCore: false },
  { name: 'Dashboards', variations: ['marketing dashboards', 'data visualization'], weight: 1.5, isCore: false },
  { name: 'Data-Driven', variations: ['data driven marketing', 'data-driven decisions'], weight: 1.6, isCore: false },
  { name: 'Metrics', variations: ['marketing metrics', 'performance metrics'], weight: 1.5, isCore: false },
  { name: 'CTR', variations: ['click through rate', 'click-through rate'], weight: 1.4, isCore: false },
  { name: 'CPC', variations: ['cost per click'], weight: 1.4, isCore: false },
  { name: 'CPM', variations: ['cost per mille', 'cost per thousand'], weight: 1.3, isCore: false },
  { name: 'CPA', variations: ['cost per acquisition', 'cost per action'], weight: 1.4, isCore: false },
  { name: 'CAC', variations: ['customer acquisition cost'], weight: 1.5, isCore: false },
  { name: 'LTV', variations: ['lifetime value', 'customer lifetime value', 'clv'], weight: 1.5, isCore: false },
  { name: 'ROAS', variations: ['return on ad spend'], weight: 1.5, isCore: false },
  { name: 'Funnel Analysis', variations: ['marketing funnel', 'conversion funnel'], weight: 1.5, isCore: false },
  { name: 'Cohort Analysis', variations: ['cohort', 'user cohorts'], weight: 1.3, isCore: false },
  { name: 'Segmentation', variations: ['audience segmentation', 'customer segmentation'], weight: 1.5, isCore: false },
  { name: 'Tracking', variations: ['conversion tracking', 'pixel tracking'], weight: 1.4, isCore: false },
  { name: 'UTM', variations: ['utm parameters', 'utm tracking'], weight: 1.3, isCore: false },
];

// Marketing Tools
export const MARKETING_TOOLS_KEYWORDS: KeywordEntry[] = [
  { name: 'HubSpot', variations: ['hubspot crm', 'hubspot marketing'], weight: 1.8, isCore: true },
  { name: 'Salesforce', variations: ['sfdc', 'salesforce crm', 'salesforce marketing cloud'], weight: 1.8, isCore: true },
  { name: 'Marketo', variations: ['adobe marketo', 'marketo engage'], weight: 1.6, isCore: false },
  { name: 'Mailchimp', variations: ['mail chimp'], weight: 1.5, isCore: false },
  { name: 'Klaviyo', variations: [], weight: 1.4, isCore: false },
  { name: 'Constant Contact', variations: [], weight: 1.2, isCore: false },
  { name: 'Pardot', variations: ['salesforce pardot'], weight: 1.4, isCore: false },
  { name: 'ActiveCampaign', variations: ['active campaign'], weight: 1.3, isCore: false },
  { name: 'Intercom', variations: [], weight: 1.3, isCore: false },
  { name: 'Drift', variations: ['drift chat'], weight: 1.2, isCore: false },
  { name: 'Hootsuite', variations: ['hoot suite'], weight: 1.5, isCore: false },
  { name: 'Sprout Social', variations: ['sproutsocial'], weight: 1.4, isCore: false },
  { name: 'Buffer', variations: [], weight: 1.3, isCore: false },
  { name: 'Later', variations: [], weight: 1.2, isCore: false },
  { name: 'Sprinklr', variations: [], weight: 1.3, isCore: false },
  { name: 'SEMrush', variations: ['sem rush', 'semrush'], weight: 1.6, isCore: false },
  { name: 'Ahrefs', variations: ['a hrefs'], weight: 1.5, isCore: false },
  { name: 'Moz', variations: ['moz pro', 'moz seo'], weight: 1.4, isCore: false },
  { name: 'Google Search Console', variations: ['gsc', 'search console'], weight: 1.5, isCore: false },
  { name: 'Google Tag Manager', variations: ['gtm', 'tag manager'], weight: 1.5, isCore: false },
  { name: 'Hotjar', variations: ['hot jar'], weight: 1.3, isCore: false },
  { name: 'Optimizely', variations: [], weight: 1.3, isCore: false },
  { name: 'Unbounce', variations: [], weight: 1.2, isCore: false },
  { name: 'Canva', variations: [], weight: 1.3, isCore: false },
  { name: 'Adobe Creative Suite', variations: ['adobe cc', 'creative cloud'], weight: 1.4, isCore: false },
  { name: 'Asana', variations: [], weight: 1.3, isCore: false },
  { name: 'Monday.com', variations: ['monday'], weight: 1.2, isCore: false },
  { name: 'Trello', variations: [], weight: 1.2, isCore: false },
];

// Combined Marketing Keywords
export const MARKETING_KEYWORDS: KeywordEntry[] = [
  ...DIGITAL_MARKETING_KEYWORDS,
  ...CONTENT_MARKETING_KEYWORDS,
  ...SOCIAL_MEDIA_KEYWORDS,
  ...BRAND_MARKETING_KEYWORDS,
  ...MARKETING_ANALYTICS_KEYWORDS,
  ...MARKETING_TOOLS_KEYWORDS,
];

/**
 * Get patterns for ATS matching
 */
export function getMarketingPatterns(): [RegExp, string][] {
  return MARKETING_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}

/**
 * Get patterns by skill area
 */
export function getMarketingPatternsBySkillArea(skillAreaId: string): [RegExp, string][] {
  let keywords: KeywordEntry[];

  switch (skillAreaId) {
    case 'digital-marketing':
      keywords = DIGITAL_MARKETING_KEYWORDS;
      break;
    case 'content-marketing':
      keywords = CONTENT_MARKETING_KEYWORDS;
      break;
    case 'social-media':
      keywords = SOCIAL_MEDIA_KEYWORDS;
      break;
    case 'brand-marketing':
      keywords = BRAND_MARKETING_KEYWORDS;
      break;
    case 'marketing-analytics':
      keywords = MARKETING_ANALYTICS_KEYWORDS;
      break;
    case 'marketing-tools':
      keywords = MARKETING_TOOLS_KEYWORDS;
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
