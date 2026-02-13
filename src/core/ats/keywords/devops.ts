/**
 * DevOps & Infrastructure Keywords
 * Skill Area: devops
 */

import type { KeywordEntry } from '@shared/types/background.types';

export const DEVOPS_KEYWORDS: KeywordEntry[] = [
  // Cloud Providers
  { name: 'AWS', variations: ['amazon web services', 'amazon aws'], weight: 2.0, isCore: true },
  { name: 'Azure', variations: ['microsoft azure', 'azure cloud'], weight: 2.0, isCore: true },
  { name: 'GCP', variations: ['google cloud', 'google cloud platform', 'gcloud'], weight: 2.0, isCore: true },
  { name: 'DigitalOcean', variations: ['digital ocean'], weight: 1.3, isCore: false },
  { name: 'Linode', variations: ['akamai linode'], weight: 1.1, isCore: false },
  { name: 'Heroku', variations: [], weight: 1.2, isCore: false },
  { name: 'Vercel', variations: [], weight: 1.3, isCore: false },
  { name: 'Netlify', variations: [], weight: 1.2, isCore: false },
  { name: 'Cloudflare', variations: ['cloudflare workers'], weight: 1.4, isCore: false },
  { name: 'Oracle Cloud', variations: ['oci', 'oracle cloud infrastructure'], weight: 1.2, isCore: false },
  { name: 'IBM Cloud', variations: ['ibm cloud'], weight: 1.1, isCore: false },

  // AWS Services
  { name: 'EC2', variations: ['aws ec2', 'amazon ec2', 'elastic compute cloud'], weight: 1.8, isCore: true },
  { name: 'S3', variations: ['aws s3', 'amazon s3', 'simple storage service'], weight: 1.8, isCore: true },
  { name: 'Lambda', variations: ['aws lambda', 'serverless lambda'], weight: 1.7, isCore: false },
  { name: 'ECS', variations: ['aws ecs', 'elastic container service'], weight: 1.5, isCore: false },
  { name: 'EKS', variations: ['aws eks', 'elastic kubernetes service'], weight: 1.6, isCore: false },
  { name: 'VPC', variations: ['aws vpc', 'virtual private cloud'], weight: 1.4, isCore: false },
  { name: 'IAM', variations: ['aws iam', 'identity and access management'], weight: 1.5, isCore: false },
  { name: 'CloudFormation', variations: ['aws cloudformation', 'cfn'], weight: 1.5, isCore: false },
  { name: 'CloudWatch', variations: ['aws cloudwatch'], weight: 1.4, isCore: false },
  { name: 'Route 53', variations: ['aws route53', 'route53'], weight: 1.3, isCore: false },
  { name: 'ALB', variations: ['application load balancer', 'aws alb'], weight: 1.3, isCore: false },
  { name: 'ELB', variations: ['elastic load balancer', 'aws elb', 'nlb'], weight: 1.4, isCore: false },
  { name: 'API Gateway', variations: ['aws api gateway', 'amazon api gateway'], weight: 1.4, isCore: false },
  { name: 'Elastic Beanstalk', variations: ['aws beanstalk', 'eb'], weight: 1.2, isCore: false },
  { name: 'ECR', variations: ['aws ecr', 'elastic container registry'], weight: 1.3, isCore: false },
  { name: 'CodePipeline', variations: ['aws codepipeline'], weight: 1.2, isCore: false },
  { name: 'CodeBuild', variations: ['aws codebuild'], weight: 1.2, isCore: false },
  { name: 'CodeDeploy', variations: ['aws codedeploy'], weight: 1.2, isCore: false },
  { name: 'Secrets Manager', variations: ['aws secrets manager'], weight: 1.2, isCore: false },
  { name: 'Parameter Store', variations: ['aws parameter store', 'ssm'], weight: 1.2, isCore: false },

  // Containerization
  { name: 'Docker', variations: ['docker container', 'dockerfile', 'docker-compose'], weight: 2.0, isCore: true },
  { name: 'Kubernetes', variations: ['k8s', 'k8', 'kube'], weight: 2.0, isCore: true },
  { name: 'Helm', variations: ['helm charts'], weight: 1.6, isCore: false },
  { name: 'Podman', variations: [], weight: 1.2, isCore: false },
  { name: 'containerd', variations: ['container d'], weight: 1.2, isCore: false },
  { name: 'Rancher', variations: [], weight: 1.3, isCore: false },
  { name: 'OpenShift', variations: ['red hat openshift', 'okd'], weight: 1.4, isCore: false },
  { name: 'Istio', variations: [], weight: 1.4, isCore: false },
  { name: 'Linkerd', variations: [], weight: 1.2, isCore: false },
  { name: 'Envoy', variations: ['envoy proxy'], weight: 1.3, isCore: false },
  { name: 'Docker Swarm', variations: ['swarm'], weight: 1.2, isCore: false },
  { name: 'Kustomize', variations: [], weight: 1.2, isCore: false },

  // CI/CD
  { name: 'Jenkins', variations: ['jenkins ci', 'jenkins pipeline'], weight: 1.8, isCore: true },
  { name: 'GitHub Actions', variations: ['gh actions', 'github-actions'], weight: 1.8, isCore: true },
  { name: 'GitLab CI', variations: ['gitlab-ci', 'gitlab ci/cd'], weight: 1.7, isCore: true },
  { name: 'CircleCI', variations: ['circle ci', 'circle-ci'], weight: 1.5, isCore: false },
  { name: 'Travis CI', variations: ['travisci', 'travis-ci'], weight: 1.3, isCore: false },
  { name: 'TeamCity', variations: ['team city'], weight: 1.3, isCore: false },
  { name: 'Bamboo', variations: ['atlassian bamboo'], weight: 1.2, isCore: false },
  { name: 'Azure DevOps', variations: ['azure pipelines', 'ado', 'vsts', 'tfs'], weight: 1.5, isCore: false },
  { name: 'Bitbucket Pipelines', variations: ['bitbucket-pipelines'], weight: 1.3, isCore: false },
  { name: 'ArgoCD', variations: ['argo cd', 'argo-cd'], weight: 1.5, isCore: false },
  { name: 'Spinnaker', variations: [], weight: 1.3, isCore: false },
  { name: 'Flux', variations: ['fluxcd', 'gitops flux'], weight: 1.3, isCore: false },
  { name: 'Tekton', variations: ['tekton pipelines'], weight: 1.2, isCore: false },
  { name: 'Drone', variations: ['drone ci'], weight: 1.1, isCore: false },
  { name: 'GoCD', variations: ['go cd'], weight: 1.0, isCore: false },
  { name: 'Concourse', variations: ['concourse ci'], weight: 1.0, isCore: false },

  // Infrastructure as Code
  { name: 'Terraform', variations: ['hashicorp terraform', 'tf'], weight: 2.0, isCore: true },
  { name: 'Ansible', variations: ['ansible playbook'], weight: 1.8, isCore: true },
  { name: 'Pulumi', variations: [], weight: 1.4, isCore: false },
  { name: 'CloudFormation', variations: ['aws cfn', 'cfn'], weight: 1.5, isCore: false },
  { name: 'ARM Templates', variations: ['azure arm', 'azure resource manager'], weight: 1.2, isCore: false },
  { name: 'Bicep', variations: ['azure bicep'], weight: 1.2, isCore: false },
  { name: 'Chef', variations: ['chef infra'], weight: 1.3, isCore: false },
  { name: 'Puppet', variations: ['puppet enterprise'], weight: 1.3, isCore: false },
  { name: 'SaltStack', variations: ['salt', 'saltstack'], weight: 1.2, isCore: false },
  { name: 'CDK', variations: ['aws cdk', 'cloud development kit'], weight: 1.4, isCore: false },
  { name: 'Crossplane', variations: [], weight: 1.2, isCore: false },

  // Monitoring & Observability
  { name: 'Prometheus', variations: [], weight: 1.7, isCore: true },
  { name: 'Grafana', variations: [], weight: 1.7, isCore: true },
  { name: 'Datadog', variations: ['data dog'], weight: 1.6, isCore: false },
  { name: 'New Relic', variations: ['newrelic'], weight: 1.5, isCore: false },
  { name: 'Splunk', variations: ['splunk enterprise', 'splunk cloud'], weight: 1.5, isCore: false },
  { name: 'ELK Stack', variations: ['elk', 'elastic stack'], weight: 1.6, isCore: false },
  { name: 'Elasticsearch', variations: ['elastic search'], weight: 1.5, isCore: false },
  { name: 'Kibana', variations: [], weight: 1.4, isCore: false },
  { name: 'Logstash', variations: [], weight: 1.3, isCore: false },
  { name: 'Fluentd', variations: ['fluent'], weight: 1.3, isCore: false },
  { name: 'Jaeger', variations: [], weight: 1.3, isCore: false },
  { name: 'Zipkin', variations: [], weight: 1.2, isCore: false },
  { name: 'OpenTelemetry', variations: ['otel', 'open telemetry'], weight: 1.4, isCore: false },
  { name: 'PagerDuty', variations: ['pager duty'], weight: 1.3, isCore: false },
  { name: 'Opsgenie', variations: ['ops genie'], weight: 1.2, isCore: false },
  { name: 'CloudWatch', variations: ['aws cloudwatch'], weight: 1.3, isCore: false },
  { name: 'Nagios', variations: [], weight: 1.2, isCore: false },
  { name: 'Zabbix', variations: [], weight: 1.2, isCore: false },
  { name: 'Dynatrace', variations: [], weight: 1.3, isCore: false },
  { name: 'AppDynamics', variations: ['appdynamics'], weight: 1.2, isCore: false },
  { name: 'Loki', variations: ['grafana loki'], weight: 1.3, isCore: false },
  { name: 'Tempo', variations: ['grafana tempo'], weight: 1.2, isCore: false },
  { name: 'Thanos', variations: [], weight: 1.2, isCore: false },

  // Version Control
  { name: 'Git', variations: [], weight: 2.0, isCore: true },
  { name: 'GitHub', variations: ['github enterprise'], weight: 1.8, isCore: true },
  { name: 'GitLab', variations: ['gitlab enterprise'], weight: 1.6, isCore: false },
  { name: 'Bitbucket', variations: ['atlassian bitbucket'], weight: 1.4, isCore: false },
  { name: 'GitOps', variations: ['git ops'], weight: 1.5, isCore: false },

  // Networking
  { name: 'Load Balancing', variations: ['load balancer', 'lb'], weight: 1.5, isCore: false },
  { name: 'Nginx', variations: ['nginx plus'], weight: 1.6, isCore: true },
  { name: 'Apache', variations: ['apache http', 'httpd', 'apache2'], weight: 1.3, isCore: false },
  { name: 'HAProxy', variations: ['ha proxy'], weight: 1.3, isCore: false },
  { name: 'Traefik', variations: ['traefik proxy'], weight: 1.3, isCore: false },
  { name: 'DNS', variations: ['domain name system'], weight: 1.3, isCore: false },
  { name: 'CDN', variations: ['content delivery network'], weight: 1.3, isCore: false },
  { name: 'VPN', variations: ['virtual private network'], weight: 1.2, isCore: false },
  { name: 'SSL/TLS', variations: ['ssl', 'tls', 'https', 'certificates'], weight: 1.4, isCore: false },

  // Linux & Systems
  { name: 'Linux', variations: ['linux administration', 'linux admin', 'linux scripting'], weight: 1.8, isCore: true },
  { name: 'Unix', variations: ['unix administration', 'unix scripting', 'unix/linux', 'unix/linux scripting', 'linux/unix'], weight: 1.7, isCore: true },
  { name: 'Ubuntu', variations: [], weight: 1.3, isCore: false },
  { name: 'CentOS', variations: ['centos stream'], weight: 1.2, isCore: false },
  { name: 'Red Hat', variations: ['rhel', 'red hat enterprise linux'], weight: 1.3, isCore: false },
  { name: 'Debian', variations: [], weight: 1.2, isCore: false },
  { name: 'Shell Scripting', variations: ['bash', 'bash scripting', 'sh', 'shell script'], weight: 1.5, isCore: true },
  { name: 'PowerShell', variations: ['powershell scripting'], weight: 1.3, isCore: false },
  { name: 'systemd', variations: [], weight: 1.2, isCore: false },
  { name: 'cron', variations: ['crontab', 'cron jobs'], weight: 1.2, isCore: false },

  // Concepts & Practices
  { name: 'CI/CD', variations: ['cicd', 'ci cd', 'continuous integration', 'continuous deployment', 'continuous delivery'], weight: 2.0, isCore: true },
  { name: 'Infrastructure as Code', variations: ['iac', 'infra as code'], weight: 1.8, isCore: true },
  { name: 'DevOps', variations: ['dev ops'], weight: 2.0, isCore: true },
  { name: 'SRE', variations: ['site reliability engineering', 'site reliability'], weight: 1.6, isCore: false },
  { name: 'Platform Engineering', variations: ['platform engineer'], weight: 1.4, isCore: false },
  { name: 'Blue-Green Deployment', variations: ['blue green', 'blue/green'], weight: 1.3, isCore: false },
  { name: 'Canary Deployment', variations: ['canary release'], weight: 1.3, isCore: false },
  { name: 'Rolling Deployment', variations: ['rolling update'], weight: 1.2, isCore: false },
  { name: 'Feature Flags', variations: ['feature toggles', 'launchdarkly'], weight: 1.3, isCore: false },
  { name: 'Chaos Engineering', variations: ['chaos monkey'], weight: 1.2, isCore: false },
  { name: 'Incident Management', variations: ['incident response'], weight: 1.3, isCore: false },
  { name: 'On-Call', variations: ['on call rotation', 'pager duty'], weight: 1.2, isCore: false },
  { name: 'Runbook', variations: ['runbooks', 'playbooks'], weight: 1.2, isCore: false },
  { name: 'Post-Mortem', variations: ['postmortem', 'blameless postmortem'], weight: 1.2, isCore: false },
  { name: 'SLA', variations: ['service level agreement', 'slo', 'sli'], weight: 1.3, isCore: false },
  { name: 'High Availability', variations: ['ha', 'fault tolerance', 'failover'], weight: 1.5, isCore: false },
  { name: 'Disaster Recovery', variations: ['dr', 'backup recovery'], weight: 1.4, isCore: false },
  { name: 'Immutable Infrastructure', variations: [], weight: 1.2, isCore: false },
  { name: 'Configuration Management', variations: ['config management'], weight: 1.3, isCore: false },
  { name: 'Secrets Management', variations: ['secret management'], weight: 1.3, isCore: false },

  // Security Tools
  { name: 'Vault', variations: ['hashicorp vault'], weight: 1.5, isCore: false },
  { name: 'Sealed Secrets', variations: [], weight: 1.1, isCore: false },
  { name: 'SOPS', variations: ['mozilla sops'], weight: 1.1, isCore: false },
];

/**
 * Get patterns for ATS matching
 */
export function getDevopsPatterns(): [RegExp, string][] {
  return DEVOPS_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
