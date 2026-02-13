/**
 * Security Keywords
 * Skill Area: security
 */

import type { KeywordEntry } from '@shared/types/background.types';

export const SECURITY_KEYWORDS: KeywordEntry[] = [
  // Application Security
  { name: 'Application Security', variations: ['appsec', 'app security', 'application sec'], weight: 1.8, isCore: true },
  { name: 'OWASP', variations: ['owasp top 10', 'owasp top ten'], weight: 1.8, isCore: true },
  { name: 'XSS', variations: ['cross-site scripting', 'cross site scripting'], weight: 1.5, isCore: false },
  { name: 'SQL Injection', variations: ['sqli', 'sql-injection'], weight: 1.5, isCore: false },
  { name: 'CSRF', variations: ['cross-site request forgery', 'xsrf'], weight: 1.4, isCore: false },
  { name: 'SSRF', variations: ['server-side request forgery'], weight: 1.3, isCore: false },
  { name: 'Input Validation', variations: ['input sanitization', 'data validation'], weight: 1.4, isCore: false },
  { name: 'Output Encoding', variations: ['output escaping'], weight: 1.2, isCore: false },
  { name: 'Secure Coding', variations: ['secure code', 'secure programming'], weight: 1.6, isCore: true },
  { name: 'Security Code Review', variations: ['secure code review'], weight: 1.4, isCore: false },
  { name: 'Threat Modeling', variations: ['threat model', 'stride'], weight: 1.5, isCore: false },
  { name: 'Security Architecture', variations: ['secure architecture'], weight: 1.5, isCore: false },
  { name: 'Security by Design', variations: ['secure by design', 'security-by-design'], weight: 1.4, isCore: false },

  // Security Testing
  { name: 'SAST', variations: ['static application security testing', 'static analysis'], weight: 1.6, isCore: true },
  { name: 'DAST', variations: ['dynamic application security testing', 'dynamic analysis'], weight: 1.5, isCore: false },
  { name: 'IAST', variations: ['interactive application security testing'], weight: 1.3, isCore: false },
  { name: 'SCA', variations: ['software composition analysis', 'dependency scanning'], weight: 1.4, isCore: false },
  { name: 'Penetration Testing', variations: ['pen testing', 'pentest', 'ethical hacking'], weight: 1.6, isCore: false },
  { name: 'Vulnerability Assessment', variations: ['vuln assessment', 'vulnerability scanning'], weight: 1.5, isCore: false },
  { name: 'Security Testing', variations: ['security test', 'sec testing'], weight: 1.5, isCore: true },
  { name: 'Fuzz Testing', variations: ['fuzzing', 'fuzz'], weight: 1.3, isCore: false },
  { name: 'Red Team', variations: ['red teaming', 'red-team'], weight: 1.4, isCore: false },
  { name: 'Blue Team', variations: ['blue teaming', 'blue-team'], weight: 1.3, isCore: false },
  { name: 'Bug Bounty', variations: ['bug-bounty', 'bounty program'], weight: 1.3, isCore: false },

  // Security Tools
  { name: 'SonarQube', variations: ['sonar', 'sonarcloud'], weight: 1.5, isCore: false },
  { name: 'Snyk', variations: [], weight: 1.5, isCore: false },
  { name: 'Checkmarx', variations: [], weight: 1.4, isCore: false },
  { name: 'Fortify', variations: ['hp fortify', 'microfocus fortify'], weight: 1.4, isCore: false },
  { name: 'Veracode', variations: [], weight: 1.4, isCore: false },
  { name: 'Burp Suite', variations: ['burp', 'burpsuite'], weight: 1.5, isCore: false },
  { name: 'OWASP ZAP', variations: ['zap', 'zaproxy'], weight: 1.4, isCore: false },
  { name: 'Nessus', variations: [], weight: 1.3, isCore: false },
  { name: 'Qualys', variations: [], weight: 1.3, isCore: false },
  { name: 'Metasploit', variations: [], weight: 1.3, isCore: false },
  { name: 'Nmap', variations: [], weight: 1.3, isCore: false },
  { name: 'Wireshark', variations: [], weight: 1.3, isCore: false },
  { name: 'Trivy', variations: [], weight: 1.3, isCore: false },
  { name: 'Clair', variations: [], weight: 1.2, isCore: false },
  { name: 'Anchore', variations: [], weight: 1.2, isCore: false },
  { name: 'Grype', variations: [], weight: 1.1, isCore: false },
  { name: 'Dependabot', variations: [], weight: 1.3, isCore: false },
  { name: 'Semgrep', variations: ['sem grep'], weight: 1.3, isCore: false },
  { name: 'CodeQL', variations: ['code ql', 'github codeql'], weight: 1.3, isCore: false },

  // Authentication & Authorization
  { name: 'OAuth', variations: ['oauth1', 'oauth 1.0'], weight: 1.3, isCore: false },
  { name: 'OAuth2', variations: ['oauth 2', 'oauth 2.0', 'oauth2.0'], weight: 1.7, isCore: true },
  { name: 'OpenID Connect', variations: ['oidc', 'openid'], weight: 1.5, isCore: false },
  { name: 'SAML', variations: ['saml 2.0'], weight: 1.4, isCore: false },
  { name: 'JWT', variations: ['json web token', 'json web tokens'], weight: 1.5, isCore: true },
  { name: 'MFA', variations: ['multi-factor authentication', 'two-factor', '2fa'], weight: 1.5, isCore: false },
  { name: 'SSO', variations: ['single sign-on', 'single sign on'], weight: 1.4, isCore: false },
  { name: 'RBAC', variations: ['role-based access control', 'role based'], weight: 1.4, isCore: false },
  { name: 'ABAC', variations: ['attribute-based access control'], weight: 1.2, isCore: false },
  { name: 'LDAP', variations: ['active directory', 'ad'], weight: 1.3, isCore: false },
  { name: 'Kerberos', variations: [], weight: 1.2, isCore: false },
  { name: 'Identity Management', variations: ['idm', 'iam'], weight: 1.5, isCore: false },
  { name: 'Auth0', variations: [], weight: 1.3, isCore: false },
  { name: 'Okta', variations: [], weight: 1.4, isCore: false },
  { name: 'Keycloak', variations: ['keycloak', 'red hat sso'], weight: 1.3, isCore: false },
  { name: 'SCIM', variations: ['system for cross-domain identity management'], weight: 1.1, isCore: false },
  { name: 'Zero Trust', variations: ['zero-trust', 'zero trust architecture'], weight: 1.4, isCore: false },
  { name: 'Passwordless', variations: ['passwordless auth', 'passkeys', 'webauthn'], weight: 1.3, isCore: false },

  // Cryptography
  { name: 'Cryptography', variations: ['crypto', 'cryptographic'], weight: 1.5, isCore: true },
  { name: 'Encryption', variations: ['encrypt', 'data encryption'], weight: 1.6, isCore: true },
  { name: 'TLS', variations: ['ssl', 'ssl/tls', 'https'], weight: 1.5, isCore: true },
  { name: 'AES', variations: ['aes-256', 'aes encryption'], weight: 1.3, isCore: false },
  { name: 'RSA', variations: ['rsa encryption'], weight: 1.3, isCore: false },
  { name: 'Public Key Infrastructure', variations: ['pki', 'certificates'], weight: 1.4, isCore: false },
  { name: 'Hashing', variations: ['hash', 'sha-256', 'sha256', 'bcrypt'], weight: 1.3, isCore: false },
  { name: 'Digital Signatures', variations: ['signing', 'code signing'], weight: 1.3, isCore: false },
  { name: 'Key Management', variations: ['kms', 'key management service'], weight: 1.4, isCore: false },
  { name: 'HSM', variations: ['hardware security module'], weight: 1.2, isCore: false },
  { name: 'Encryption at Rest', variations: ['data-at-rest encryption'], weight: 1.3, isCore: false },
  { name: 'Encryption in Transit', variations: ['data-in-transit encryption'], weight: 1.3, isCore: false },

  // Secrets Management
  { name: 'Vault', variations: ['hashicorp vault'], weight: 1.6, isCore: false },
  { name: 'Secrets Manager', variations: ['aws secrets manager', 'azure key vault'], weight: 1.5, isCore: false },
  { name: 'Secret Management', variations: ['secrets management'], weight: 1.5, isCore: false },
  { name: 'CyberArk', variations: ['cyber ark'], weight: 1.2, isCore: false },
  { name: 'SOPS', variations: ['mozilla sops'], weight: 1.1, isCore: false },
  { name: 'Sealed Secrets', variations: [], weight: 1.1, isCore: false },

  // Infrastructure Security
  { name: 'Network Security', variations: ['network sec', 'netsec'], weight: 1.5, isCore: false },
  { name: 'Firewall', variations: ['waf', 'web application firewall', 'ngfw'], weight: 1.4, isCore: false },
  { name: 'IDS', variations: ['intrusion detection system', 'intrusion detection'], weight: 1.3, isCore: false },
  { name: 'IPS', variations: ['intrusion prevention system', 'intrusion prevention'], weight: 1.3, isCore: false },
  { name: 'VPN', variations: ['virtual private network'], weight: 1.3, isCore: false },
  { name: 'DDoS Protection', variations: ['ddos mitigation', 'ddos'], weight: 1.3, isCore: false },
  { name: 'Security Groups', variations: ['aws security groups', 'network acl'], weight: 1.3, isCore: false },
  { name: 'Bastion Host', variations: ['jump server', 'jump box'], weight: 1.2, isCore: false },

  // Cloud Security
  { name: 'Cloud Security', variations: ['cloud sec'], weight: 1.6, isCore: true },
  { name: 'AWS Security', variations: ['aws iam', 'aws security best practices'], weight: 1.5, isCore: false },
  { name: 'Azure Security', variations: ['azure ad', 'azure sentinel'], weight: 1.4, isCore: false },
  { name: 'GCP Security', variations: ['google cloud security'], weight: 1.4, isCore: false },
  { name: 'CSPM', variations: ['cloud security posture management'], weight: 1.3, isCore: false },
  { name: 'CWPP', variations: ['cloud workload protection'], weight: 1.2, isCore: false },

  // Container Security
  { name: 'Container Security', variations: ['docker security', 'kubernetes security'], weight: 1.5, isCore: false },
  { name: 'Image Scanning', variations: ['container image scanning'], weight: 1.3, isCore: false },
  { name: 'Pod Security', variations: ['pod security policy', 'pod security standards'], weight: 1.2, isCore: false },
  { name: 'Network Policy', variations: ['k8s network policy'], weight: 1.2, isCore: false },
  { name: 'Falco', variations: [], weight: 1.2, isCore: false },
  { name: 'OPA', variations: ['open policy agent', 'gatekeeper'], weight: 1.3, isCore: false },

  // Compliance & Standards
  { name: 'SOC 2', variations: ['soc2', 'soc 2 type 2', 'soc ii'], weight: 1.4, isCore: false },
  { name: 'PCI DSS', variations: ['pci', 'payment card industry'], weight: 1.4, isCore: false },
  { name: 'HIPAA', variations: ['hipaa compliance'], weight: 1.4, isCore: false },
  { name: 'GDPR', variations: ['gdpr compliance', 'general data protection'], weight: 1.4, isCore: false },
  { name: 'ISO 27001', variations: ['iso27001', 'iso 27k'], weight: 1.4, isCore: false },
  { name: 'NIST', variations: ['nist framework', 'nist cybersecurity'], weight: 1.3, isCore: false },
  { name: 'FedRAMP', variations: ['fed ramp'], weight: 1.2, isCore: false },
  { name: 'CIS Benchmarks', variations: ['cis controls'], weight: 1.2, isCore: false },
  { name: 'CCPA', variations: ['california consumer privacy'], weight: 1.2, isCore: false },

  // DevSecOps
  { name: 'DevSecOps', variations: ['devsecops', 'secure devops', 'security automation'], weight: 1.7, isCore: true },
  { name: 'Security Pipeline', variations: ['security ci/cd', 'security automation'], weight: 1.4, isCore: false },
  { name: 'Shift Left', variations: ['shift-left security', 'shift left'], weight: 1.4, isCore: false },
  { name: 'Security as Code', variations: ['policy as code', 'compliance as code'], weight: 1.3, isCore: false },
  { name: 'Supply Chain Security', variations: ['sbom', 'software bill of materials'], weight: 1.4, isCore: false },
  { name: 'SLSA', variations: ['supply chain levels'], weight: 1.2, isCore: false },
  { name: 'Sigstore', variations: ['cosign', 'rekor'], weight: 1.1, isCore: false },

  // Security Operations
  { name: 'SIEM', variations: ['security information', 'security event management'], weight: 1.4, isCore: false },
  { name: 'SOC', variations: ['security operations center'], weight: 1.4, isCore: false },
  { name: 'Incident Response', variations: ['ir', 'security incident'], weight: 1.5, isCore: false },
  { name: 'Threat Intelligence', variations: ['threat intel', 'cti'], weight: 1.3, isCore: false },
  { name: 'Security Monitoring', variations: ['security observability'], weight: 1.4, isCore: false },
  { name: 'Splunk', variations: ['splunk security'], weight: 1.4, isCore: false },
  { name: 'Elastic Security', variations: ['elastic siem'], weight: 1.3, isCore: false },
  { name: 'Chronicle', variations: ['google chronicle'], weight: 1.2, isCore: false },
  { name: 'Sentinel', variations: ['azure sentinel', 'microsoft sentinel'], weight: 1.3, isCore: false },
];

/**
 * Get patterns for ATS matching
 */
export function getSecurityPatterns(): [RegExp, string][] {
  return SECURITY_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
