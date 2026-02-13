/**
 * Data Analytics & Business Intelligence Keywords
 * Skill Area: data-analytics (for Data Analyst, BI Analyst roles)
 */

import type { KeywordEntry } from '@shared/types/background.types';

export const DATA_ANALYTICS_KEYWORDS: KeywordEntry[] = [
  // BI Tools
  { name: 'Tableau', variations: ['tableau desktop', 'tableau server', 'tableau online'], weight: 2.0, isCore: true },
  { name: 'Power BI', variations: ['powerbi', 'power bi desktop', 'power bi service', 'dax'], weight: 2.0, isCore: true },
  { name: 'Looker', variations: ['google looker', 'looker studio'], weight: 1.7, isCore: false },
  { name: 'Qlik', variations: ['qlikview', 'qlik sense'], weight: 1.5, isCore: false },
  { name: 'Metabase', variations: ['meta base'], weight: 1.3, isCore: false },
  { name: 'Superset', variations: ['apache superset'], weight: 1.3, isCore: false },
  { name: 'Mode', variations: ['mode analytics'], weight: 1.2, isCore: false },
  { name: 'Sisense', variations: [], weight: 1.2, isCore: false },
  { name: 'Domo', variations: [], weight: 1.2, isCore: false },
  { name: 'ThoughtSpot', variations: ['thought spot'], weight: 1.2, isCore: false },
  { name: 'SSRS', variations: ['sql server reporting services'], weight: 1.3, isCore: false },
  { name: 'Crystal Reports', variations: [], weight: 1.0, isCore: false },
  { name: 'Google Data Studio', variations: ['data studio', 'looker studio'], weight: 1.4, isCore: false },
  { name: 'Amazon QuickSight', variations: ['quicksight', 'aws quicksight'], weight: 1.3, isCore: false },

  // SQL & Databases
  { name: 'SQL', variations: ['structured query language'], weight: 2.0, isCore: true },
  { name: 'MySQL', variations: ['my sql'], weight: 1.6, isCore: false },
  { name: 'PostgreSQL', variations: ['postgres', 'psql'], weight: 1.6, isCore: false },
  { name: 'SQL Server', variations: ['mssql', 'ms sql', 'tsql', 't-sql'], weight: 1.7, isCore: false },
  { name: 'Oracle', variations: ['oracle sql', 'pl/sql'], weight: 1.5, isCore: false },
  { name: 'SQLite', variations: [], weight: 1.2, isCore: false },
  { name: 'Query Writing', variations: ['sql queries', 'complex queries'], weight: 1.8, isCore: true },
  { name: 'Stored Procedures', variations: ['sprocs'], weight: 1.3, isCore: false },
  { name: 'Views', variations: ['database views'], weight: 1.2, isCore: false },
  { name: 'CTEs', variations: ['common table expressions', 'with clause'], weight: 1.4, isCore: false },
  { name: 'Window Functions', variations: ['analytic functions', 'over clause', 'partition by'], weight: 1.5, isCore: false },
  { name: 'Subqueries', variations: ['nested queries'], weight: 1.3, isCore: false },
  { name: 'Joins', variations: ['sql joins', 'inner join', 'left join', 'outer join'], weight: 1.5, isCore: true },
  { name: 'Query Optimization', variations: ['sql optimization', 'performance tuning'], weight: 1.4, isCore: false },

  // Spreadsheets
  { name: 'Excel', variations: ['microsoft excel', 'ms excel', 'advanced excel'], weight: 1.8, isCore: true },
  { name: 'Google Sheets', variations: ['gsheets', 'google spreadsheets'], weight: 1.4, isCore: false },
  { name: 'Pivot Tables', variations: ['pivot table', 'pivots'], weight: 1.6, isCore: true },
  { name: 'VLOOKUP', variations: ['v-lookup', 'xlookup', 'hlookup'], weight: 1.4, isCore: false },
  { name: 'Macros', variations: ['excel macros', 'vba'], weight: 1.3, isCore: false },
  { name: 'Power Query', variations: ['power-query', 'get & transform'], weight: 1.5, isCore: false },
  { name: 'Power Pivot', variations: ['power-pivot'], weight: 1.4, isCore: false },
  { name: 'Data Modeling', variations: ['excel data model'], weight: 1.4, isCore: false },
  { name: 'Formulas', variations: ['excel formulas', 'advanced formulas'], weight: 1.4, isCore: false },
  { name: 'Conditional Formatting', variations: [], weight: 1.1, isCore: false },

  // Programming for Analytics
  { name: 'Python', variations: ['python analytics', 'python3'], weight: 1.8, isCore: true },
  { name: 'R', variations: ['r programming', 'r language', 'rstudio'], weight: 1.6, isCore: false },
  { name: 'Pandas', variations: ['pandas python'], weight: 1.7, isCore: false },
  { name: 'NumPy', variations: ['numpy'], weight: 1.5, isCore: false },
  { name: 'SciPy', variations: ['scipy'], weight: 1.3, isCore: false },
  { name: 'Jupyter', variations: ['jupyter notebook', 'jupyter lab'], weight: 1.5, isCore: false },
  { name: 'Matplotlib', variations: ['pyplot'], weight: 1.4, isCore: false },
  { name: 'Seaborn', variations: [], weight: 1.3, isCore: false },
  { name: 'Plotly', variations: ['plotly express'], weight: 1.3, isCore: false },
  { name: 'ggplot2', variations: ['ggplot'], weight: 1.3, isCore: false },
  { name: 'tidyverse', variations: ['dplyr', 'tidyr'], weight: 1.3, isCore: false },
  { name: 'Shiny', variations: ['r shiny'], weight: 1.2, isCore: false },
  { name: 'Dash', variations: ['plotly dash'], weight: 1.2, isCore: false },
  { name: 'Streamlit', variations: ['stream lit'], weight: 1.3, isCore: false },

  // Data Visualization
  { name: 'Data Visualization', variations: ['data viz', 'dataviz', 'visualizations'], weight: 1.8, isCore: true },
  { name: 'Dashboard', variations: ['dashboards', 'dashboard design', 'interactive dashboards'], weight: 1.8, isCore: true },
  { name: 'Reporting', variations: ['reports', 'report development', 'automated reporting'], weight: 1.6, isCore: true },
  { name: 'Charts', variations: ['charting', 'graphs'], weight: 1.3, isCore: false },
  { name: 'KPI', variations: ['kpis', 'key performance indicators', 'metrics'], weight: 1.6, isCore: true },
  { name: 'Data Storytelling', variations: ['storytelling with data', 'narrative'], weight: 1.4, isCore: false },
  { name: 'Infographics', variations: ['info graphics'], weight: 1.1, isCore: false },

  // Statistics
  { name: 'Statistics', variations: ['statistical analysis', 'statistical methods'], weight: 1.7, isCore: true },
  { name: 'Descriptive Statistics', variations: ['mean', 'median', 'mode', 'standard deviation'], weight: 1.4, isCore: false },
  { name: 'Inferential Statistics', variations: ['inference', 'statistical inference'], weight: 1.3, isCore: false },
  { name: 'Hypothesis Testing', variations: ['statistical testing', 'significance testing'], weight: 1.4, isCore: false },
  { name: 'Regression Analysis', variations: ['linear regression', 'logistic regression'], weight: 1.5, isCore: false },
  { name: 'Correlation', variations: ['correlation analysis'], weight: 1.3, isCore: false },
  { name: 'A/B Testing', variations: ['ab testing', 'split testing', 'experimentation'], weight: 1.5, isCore: false },
  { name: 'Statistical Modeling', variations: ['predictive modeling'], weight: 1.4, isCore: false },
  { name: 'Probability', variations: ['probability theory'], weight: 1.2, isCore: false },
  { name: 'Time Series Analysis', variations: ['time series', 'forecasting'], weight: 1.4, isCore: false },
  { name: 'Trend Analysis', variations: ['trending', 'trend identification'], weight: 1.4, isCore: false },
  { name: 'ANOVA', variations: ['analysis of variance'], weight: 1.2, isCore: false },
  { name: 'Chi-Square', variations: ['chi square test', 'chi-squared'], weight: 1.1, isCore: false },

  // Data Concepts
  { name: 'Data Analysis', variations: ['data analyst', 'analytical'], weight: 2.0, isCore: true },
  { name: 'Business Intelligence', variations: ['bi', 'bi analyst', 'business analytics'], weight: 1.8, isCore: true },
  { name: 'Business Analysis', variations: ['business analyst', 'requirements gathering'], weight: 1.6, isCore: false },
  { name: 'Data Mining', variations: ['data discovery'], weight: 1.4, isCore: false },
  { name: 'Data Cleaning', variations: ['data cleansing', 'data wrangling', 'data munging'], weight: 1.5, isCore: true },
  { name: 'Data Transformation', variations: ['data prep', 'data preparation'], weight: 1.4, isCore: false },
  { name: 'ETL', variations: ['extract transform load'], weight: 1.5, isCore: false },
  { name: 'ELT', variations: ['extract load transform'], weight: 1.3, isCore: false },
  { name: 'Data Modeling', variations: ['dimensional modeling', 'data model'], weight: 1.5, isCore: false },
  { name: 'Data Governance', variations: ['data stewardship'], weight: 1.3, isCore: false },
  { name: 'Data Quality', variations: ['data quality assurance', 'dq'], weight: 1.4, isCore: false },
  { name: 'Data Catalog', variations: ['metadata management'], weight: 1.2, isCore: false },
  { name: 'Data Dictionary', variations: ['data definitions'], weight: 1.2, isCore: false },
  { name: 'EDA', variations: ['exploratory data analysis', 'data exploration'], weight: 1.5, isCore: false },
  { name: 'Ad Hoc Analysis', variations: ['adhoc analysis', 'ad-hoc'], weight: 1.4, isCore: false },

  // Data Warehousing
  { name: 'Data Warehouse', variations: ['dwh', 'data warehousing', 'edw'], weight: 1.6, isCore: false },
  { name: 'Data Lake', variations: ['datalake'], weight: 1.4, isCore: false },
  { name: 'Snowflake', variations: [], weight: 1.6, isCore: false },
  { name: 'Redshift', variations: ['amazon redshift', 'aws redshift'], weight: 1.5, isCore: false },
  { name: 'BigQuery', variations: ['google bigquery', 'bq'], weight: 1.5, isCore: false },
  { name: 'Azure Synapse', variations: ['synapse analytics'], weight: 1.4, isCore: false },
  { name: 'Databricks', variations: [], weight: 1.4, isCore: false },
  { name: 'Star Schema', variations: ['fact table', 'dimension table'], weight: 1.4, isCore: false },
  { name: 'Snowflake Schema', variations: [], weight: 1.2, isCore: false },
  { name: 'OLAP', variations: ['online analytical processing', 'olap cube'], weight: 1.3, isCore: false },
  { name: 'OLTP', variations: ['online transaction processing'], weight: 1.2, isCore: false },

  // ETL/ELT Tools
  { name: 'dbt', variations: ['data build tool', 'dbt cloud'], weight: 1.6, isCore: false },
  { name: 'Fivetran', variations: [], weight: 1.3, isCore: false },
  { name: 'Stitch', variations: ['stitch data'], weight: 1.2, isCore: false },
  { name: 'Airbyte', variations: [], weight: 1.2, isCore: false },
  { name: 'Talend', variations: [], weight: 1.3, isCore: false },
  { name: 'Informatica', variations: ['informatica powercenter'], weight: 1.4, isCore: false },
  { name: 'SSIS', variations: ['sql server integration services'], weight: 1.4, isCore: false },
  { name: 'Alteryx', variations: [], weight: 1.4, isCore: false },
  { name: 'Matillion', variations: [], weight: 1.2, isCore: false },
  { name: 'Pentaho', variations: [], weight: 1.1, isCore: false },

  // Analytics Concepts
  { name: 'Insights', variations: ['actionable insights', 'data insights', 'data-driven insights'], weight: 1.6, isCore: true },
  { name: 'Data Driven', variations: ['data-driven', 'data driven decision making'], weight: 1.5, isCore: true },
  { name: 'ROI Analysis', variations: ['roi', 'return on investment'], weight: 1.3, isCore: false },
  { name: 'Cohort Analysis', variations: ['cohort', 'cohorts'], weight: 1.4, isCore: false },
  { name: 'Funnel Analysis', variations: ['conversion funnel', 'marketing funnel'], weight: 1.4, isCore: false },
  { name: 'Segmentation', variations: ['customer segmentation', 'market segmentation'], weight: 1.5, isCore: false },
  { name: 'Attribution', variations: ['attribution modeling', 'multi-touch attribution'], weight: 1.3, isCore: false },
  { name: 'Churn Analysis', variations: ['customer churn', 'retention analysis'], weight: 1.3, isCore: false },
  { name: 'Customer Analytics', variations: ['customer analysis'], weight: 1.4, isCore: false },
  { name: 'Web Analytics', variations: ['site analytics'], weight: 1.4, isCore: false },
  { name: 'Product Analytics', variations: ['product analysis'], weight: 1.4, isCore: false },
  { name: 'Marketing Analytics', variations: ['marketing analysis'], weight: 1.4, isCore: false },
  { name: 'Financial Analysis', variations: ['financial analytics', 'finance analysis'], weight: 1.4, isCore: false },
  { name: 'Sales Analytics', variations: ['sales analysis', 'revenue analysis'], weight: 1.4, isCore: false },
  { name: 'Operational Analytics', variations: ['operations analysis'], weight: 1.3, isCore: false },

  // Analytics Tools
  { name: 'Google Analytics', variations: ['ga', 'ga4', 'google analytics 4'], weight: 1.5, isCore: false },
  { name: 'Adobe Analytics', variations: ['omniture', 'sitecatalyst'], weight: 1.3, isCore: false },
  { name: 'Mixpanel', variations: ['mix panel'], weight: 1.3, isCore: false },
  { name: 'Amplitude', variations: [], weight: 1.3, isCore: false },
  { name: 'Heap', variations: ['heap analytics'], weight: 1.2, isCore: false },
  { name: 'Segment', variations: ['twilio segment'], weight: 1.2, isCore: false },
  { name: 'Snowplow', variations: [], weight: 1.1, isCore: false },
  { name: 'Hotjar', variations: ['hot jar'], weight: 1.1, isCore: false },
  { name: 'FullStory', variations: ['full story'], weight: 1.1, isCore: false },

  // Collaboration & Presentation
  { name: 'Stakeholder Management', variations: ['stakeholder communication'], weight: 1.4, isCore: false },
  { name: 'Requirements Gathering', variations: ['requirements analysis'], weight: 1.4, isCore: false },
  { name: 'Presentation', variations: ['presenting data', 'executive presentation'], weight: 1.4, isCore: false },
  { name: 'Communication', variations: ['verbal communication', 'written communication'], weight: 1.4, isCore: false },
  { name: 'Documentation', variations: ['technical documentation', 'analysis documentation'], weight: 1.3, isCore: false },
  { name: 'Cross-functional', variations: ['cross functional collaboration'], weight: 1.3, isCore: false },
];

/**
 * Get patterns for ATS matching
 */
export function getDataAnalyticsPatterns(): [RegExp, string][] {
  return DATA_ANALYTICS_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
