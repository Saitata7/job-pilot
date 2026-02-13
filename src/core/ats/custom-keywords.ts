/**
 * Custom Keywords Configuration
 *
 * Add your own keywords here that the ATS scorer should recognize.
 * These will be merged with the built-in patterns.
 *
 * HOW TO ADD KEYWORDS:
 *
 * 1. Simple keyword (exact match):
 *    'Splunk'
 *
 * 2. Keyword with variations (will match any of these):
 *    { keyword: 'ServiceNow', variations: ['service now', 'snow'] }
 *
 * 3. Keyword with regex pattern (for complex matching):
 *    { keyword: 'React Native', pattern: /\breact[\s-]?native\b/gi }
 *
 * After adding keywords, rebuild with: npm run build
 */

export interface CustomKeyword {
  keyword: string;
  variations?: string[];
  pattern?: RegExp;
  category?: string; // Optional: for organization
}

// Simple keywords - just add strings to this array
export const simpleKeywords: string[] = [
  // Add your simple keywords here
  // Example: 'Splunk', 'Datadog', 'New Relic'
];

// Keywords with variations or patterns
export const advancedKeywords: CustomKeyword[] = [
  // ==========================================
  // MONITORING & OBSERVABILITY
  // ==========================================
  { keyword: 'Splunk', variations: ['splunk enterprise', 'splunk cloud'] },
  { keyword: 'Datadog', variations: ['data dog'] },
  { keyword: 'New Relic', variations: ['newrelic'] },
  { keyword: 'Prometheus', variations: [] },
  { keyword: 'Grafana', variations: [] },
  { keyword: 'ELK Stack', variations: ['elk', 'elastic stack'], pattern: /\belk\b|\belastic\s*stack\b/gi },
  { keyword: 'Kibana', variations: [] },
  { keyword: 'Logstash', variations: [] },

  // ==========================================
  // CI/CD & BUILD TOOLS
  // ==========================================
  { keyword: 'GitLab', variations: ['gitlab ci', 'gitlab-ci'] },
  { keyword: 'CircleCI', variations: ['circle ci', 'circle-ci'] },
  { keyword: 'Travis CI', variations: ['travisci', 'travis-ci'] },
  { keyword: 'Bamboo', variations: ['atlassian bamboo'] },
  { keyword: 'TeamCity', variations: ['team city'] },
  { keyword: 'ArgoCD', variations: ['argo cd', 'argo-cd'] },
  { keyword: 'Spinnaker', variations: [] },
  { keyword: 'Ansible', variations: [] },
  { keyword: 'Puppet', variations: [] },
  { keyword: 'Chef', variations: [] },
  { keyword: 'SaltStack', variations: ['salt'] },

  // ==========================================
  // CLOUD SERVICES (SPECIFIC)
  // ==========================================
  { keyword: 'Lambda', variations: ['aws lambda', 'serverless lambda'] },
  { keyword: 'EC2', variations: ['aws ec2', 'amazon ec2'] },
  { keyword: 'S3', variations: ['aws s3', 'amazon s3'] },
  { keyword: 'RDS', variations: ['aws rds', 'amazon rds'] },
  { keyword: 'ECS', variations: ['aws ecs', 'amazon ecs'] },
  { keyword: 'EKS', variations: ['aws eks', 'amazon eks'] },
  { keyword: 'CloudFormation', variations: ['aws cloudformation', 'cfn'] },
  { keyword: 'Azure Functions', variations: ['azure function'] },
  { keyword: 'Azure DevOps', variations: ['ado', 'vsts', 'tfs'] },
  { keyword: 'Cloud Functions', variations: ['gcp cloud functions', 'google cloud functions'] },
  { keyword: 'BigQuery', variations: ['big query', 'google bigquery'] },
  { keyword: 'Snowflake', variations: [] },
  { keyword: 'Databricks', variations: [] },
  { keyword: 'Redshift', variations: ['aws redshift', 'amazon redshift'] },

  // ==========================================
  // API & INTEGRATION
  // ==========================================
  { keyword: 'Swagger', variations: ['openapi', 'open api'] },
  { keyword: 'Postman', variations: [] },
  { keyword: 'gRPC', variations: ['grpc', 'g-rpc'] },
  { keyword: 'WebSocket', variations: ['websockets', 'web socket', 'web sockets'] },
  { keyword: 'Apache Camel', variations: ['camel'] },
  { keyword: 'MuleSoft', variations: ['mule', 'mulesoft anypoint'] },
  { keyword: 'Kong', variations: ['kong api gateway'] },
  { keyword: 'Apigee', variations: ['google apigee'] },

  // ==========================================
  // DATA ENGINEERING
  // ==========================================
  { keyword: 'Apache Spark', variations: ['spark', 'pyspark'] },
  { keyword: 'Hadoop', variations: ['apache hadoop', 'hdfs'] },
  { keyword: 'Hive', variations: ['apache hive'] },
  { keyword: 'Airflow', variations: ['apache airflow'] },
  { keyword: 'dbt', variations: ['data build tool'] },
  { keyword: 'Flink', variations: ['apache flink'] },
  { keyword: 'Presto', variations: ['prestodb', 'trino'] },
  { keyword: 'ETL', variations: ['extract transform load'] },
  { keyword: 'Data Pipeline', variations: ['data pipelines', 'data engineering'] },

  // ==========================================
  // SECURITY
  // ==========================================
  { keyword: 'OWASP', variations: ['owasp top 10'] },
  { keyword: 'Vault', variations: ['hashicorp vault'] },
  { keyword: 'SonarQube', variations: ['sonar', 'sonarcloud'] },
  { keyword: 'Fortify', variations: [] },
  { keyword: 'Checkmarx', variations: [] },
  { keyword: 'Snyk', variations: [] },
  { keyword: 'SAST', variations: ['static application security testing'] },
  { keyword: 'DAST', variations: ['dynamic application security testing'] },

  // ==========================================
  // MOBILE
  // ==========================================
  { keyword: 'React Native', pattern: /\breact[\s-]?native\b/gi, variations: ['reactnative'] },
  { keyword: 'Flutter', variations: [] },
  { keyword: 'Xamarin', variations: [] },
  { keyword: 'iOS', variations: ['ios development'] },
  { keyword: 'Android', variations: ['android development'] },
  { keyword: 'SwiftUI', variations: ['swift ui'] },
  { keyword: 'Jetpack Compose', variations: ['compose'] },

  // ==========================================
  // PROJECT MANAGEMENT & COLLABORATION
  // ==========================================
  { keyword: 'Confluence', variations: [] },
  { keyword: 'Slack', variations: [] },
  { keyword: 'Trello', variations: [] },
  { keyword: 'Asana', variations: [] },
  { keyword: 'Monday.com', variations: ['monday'] },
  { keyword: 'Notion', variations: [] },
  { keyword: 'Kanban', variations: ['kanban board'] },

  // ==========================================
  // ADD YOUR OWN KEYWORDS BELOW
  // ==========================================
  // { keyword: 'YourKeyword', variations: ['variation1', 'variation2'] },

];

/**
 * Get all custom keywords as patterns for the ATS scorer
 */
export function getCustomPatterns(): [RegExp, string][] {
  const patterns: [RegExp, string][] = [];

  // Add simple keywords
  for (const kw of simpleKeywords) {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    patterns.push([new RegExp(`\\b${escaped}\\b`, 'gi'), kw]);
  }

  // Add advanced keywords
  for (const item of advancedKeywords) {
    if (item.pattern) {
      patterns.push([item.pattern, item.keyword]);
    } else {
      // Build pattern from keyword and variations
      const allTerms = [item.keyword, ...(item.variations || [])];
      const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
      patterns.push([pattern, item.keyword]);
    }
  }

  return patterns;
}

/**
 * Get custom variations for skill matching
 */
export function getCustomVariations(): Record<string, string[]> {
  const variations: Record<string, string[]> = {};

  for (const item of advancedKeywords) {
    if (item.variations && item.variations.length > 0) {
      variations[item.keyword.toLowerCase()] = item.variations.map(v => v.toLowerCase());
    }
  }

  return variations;
}
