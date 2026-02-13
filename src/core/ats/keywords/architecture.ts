/**
 * System Architecture & Design Keywords
 * Skill Area: architecture
 */

import type { KeywordEntry } from '@shared/types/background.types';

export const ARCHITECTURE_KEYWORDS: KeywordEntry[] = [
  // Architecture Patterns
  { name: 'Microservices', variations: ['microservice', 'micro services', 'micro-services'], weight: 2.0, isCore: true },
  { name: 'Monolith', variations: ['monolithic', 'monolithic architecture'], weight: 1.3, isCore: false },
  { name: 'Serverless', variations: ['serverless architecture', 'faas', 'function as a service'], weight: 1.8, isCore: false },
  { name: 'Event Driven Architecture', variations: ['eda', 'event-driven', 'event driven'], weight: 1.8, isCore: true },
  { name: 'SOA', variations: ['service oriented architecture', 'service-oriented'], weight: 1.4, isCore: false },
  { name: 'Hexagonal Architecture', variations: ['ports and adapters', 'hexagonal'], weight: 1.4, isCore: false },
  { name: 'Clean Architecture', variations: ['clean arch', 'onion architecture'], weight: 1.5, isCore: false },
  { name: 'Layered Architecture', variations: ['n-tier', 'n tier', 'multi-tier'], weight: 1.3, isCore: false },
  { name: 'CQRS', variations: ['command query responsibility segregation'], weight: 1.5, isCore: false },
  { name: 'Event Sourcing', variations: ['event-sourcing'], weight: 1.4, isCore: false },
  { name: 'Domain Driven Design', variations: ['ddd', 'domain-driven'], weight: 1.6, isCore: true },
  { name: 'Modular Monolith', variations: ['modular-monolith'], weight: 1.3, isCore: false },
  { name: 'Space-Based Architecture', variations: ['tuple space'], weight: 1.1, isCore: false },

  // Design Patterns
  { name: 'Design Patterns', variations: ['software design patterns', 'gof patterns', 'gang of four'], weight: 1.8, isCore: true },
  { name: 'SOLID', variations: ['solid principles'], weight: 1.8, isCore: true },
  { name: 'Singleton', variations: ['singleton pattern'], weight: 1.2, isCore: false },
  { name: 'Factory', variations: ['factory pattern', 'abstract factory'], weight: 1.3, isCore: false },
  { name: 'Builder', variations: ['builder pattern'], weight: 1.2, isCore: false },
  { name: 'Observer', variations: ['observer pattern', 'pub sub', 'publisher subscriber'], weight: 1.3, isCore: false },
  { name: 'Strategy', variations: ['strategy pattern'], weight: 1.2, isCore: false },
  { name: 'Decorator', variations: ['decorator pattern'], weight: 1.2, isCore: false },
  { name: 'Adapter', variations: ['adapter pattern'], weight: 1.2, isCore: false },
  { name: 'Facade', variations: ['facade pattern'], weight: 1.2, isCore: false },
  { name: 'Repository', variations: ['repository pattern'], weight: 1.4, isCore: false },
  { name: 'Unit of Work', variations: ['unit-of-work'], weight: 1.2, isCore: false },
  { name: 'Saga', variations: ['saga pattern', 'choreography', 'orchestration'], weight: 1.4, isCore: false },
  { name: 'Circuit Breaker', variations: ['circuit-breaker', 'hystrix'], weight: 1.4, isCore: false },
  { name: 'Retry Pattern', variations: ['exponential backoff'], weight: 1.2, isCore: false },
  { name: 'Bulkhead', variations: ['bulkhead pattern'], weight: 1.2, isCore: false },
  { name: 'Strangler Fig', variations: ['strangler pattern'], weight: 1.2, isCore: false },
  { name: 'Sidecar', variations: ['sidecar pattern'], weight: 1.3, isCore: false },
  { name: 'Ambassador', variations: ['ambassador pattern'], weight: 1.1, isCore: false },
  { name: 'Anti-Corruption Layer', variations: ['acl', 'anti corruption layer'], weight: 1.2, isCore: false },

  // Distributed Systems
  { name: 'Distributed Systems', variations: ['distributed computing', 'distributed architecture'], weight: 1.8, isCore: true },
  { name: 'CAP Theorem', variations: ['cap', 'brewer theorem'], weight: 1.4, isCore: false },
  { name: 'Eventual Consistency', variations: ['eventually consistent'], weight: 1.4, isCore: false },
  { name: 'Strong Consistency', variations: ['strongly consistent'], weight: 1.2, isCore: false },
  { name: 'Consensus', variations: ['consensus algorithm', 'paxos', 'raft'], weight: 1.3, isCore: false },
  { name: 'Leader Election', variations: ['leader-election'], weight: 1.2, isCore: false },
  { name: 'Distributed Transactions', variations: ['2pc', 'two-phase commit', 'distributed tx'], weight: 1.3, isCore: false },
  { name: 'Idempotency', variations: ['idempotent', 'idempotent operations'], weight: 1.3, isCore: false },
  { name: 'Partitioning', variations: ['data partitioning', 'sharding'], weight: 1.4, isCore: false },
  { name: 'Replication', variations: ['data replication', 'replica'], weight: 1.3, isCore: false },
  { name: 'Fault Tolerance', variations: ['fault-tolerant', 'resilience'], weight: 1.5, isCore: false },

  // Scalability
  { name: 'Scalability', variations: ['scalable', 'scaling'], weight: 1.8, isCore: true },
  { name: 'Horizontal Scaling', variations: ['scale out', 'scale-out', 'horizontal scale'], weight: 1.5, isCore: false },
  { name: 'Vertical Scaling', variations: ['scale up', 'scale-up', 'vertical scale'], weight: 1.3, isCore: false },
  { name: 'Auto Scaling', variations: ['autoscaling', 'auto-scaling'], weight: 1.4, isCore: false },
  { name: 'Load Balancing', variations: ['load balancer', 'lb'], weight: 1.5, isCore: true },
  { name: 'High Availability', variations: ['ha', 'highly available'], weight: 1.6, isCore: true },
  { name: 'Disaster Recovery', variations: ['dr', 'failover', 'backup recovery'], weight: 1.4, isCore: false },
  { name: 'Capacity Planning', variations: ['capacity management'], weight: 1.3, isCore: false },

  // API Design
  { name: 'REST API', variations: ['restful', 'rest apis', 'restful api'], weight: 1.8, isCore: true },
  { name: 'GraphQL', variations: ['graph ql'], weight: 1.6, isCore: false },
  { name: 'gRPC', variations: ['grpc', 'g-rpc'], weight: 1.5, isCore: false },
  { name: 'WebSocket', variations: ['websockets', 'web sockets'], weight: 1.4, isCore: false },
  { name: 'API Gateway', variations: ['api-gateway'], weight: 1.5, isCore: false },
  { name: 'Service Mesh', variations: ['service-mesh', 'istio', 'linkerd'], weight: 1.4, isCore: false },
  { name: 'API Versioning', variations: ['api version', 'versioning strategy'], weight: 1.3, isCore: false },
  { name: 'Rate Limiting', variations: ['rate-limiting', 'throttling'], weight: 1.3, isCore: false },
  { name: 'API Security', variations: ['oauth', 'api authentication'], weight: 1.4, isCore: false },
  { name: 'OpenAPI', variations: ['swagger', 'openapi spec', 'api specification'], weight: 1.4, isCore: false },
  { name: 'Contract First', variations: ['contract-first', 'api-first'], weight: 1.3, isCore: false },

  // System Design
  { name: 'System Design', variations: ['systems design', 'software architecture'], weight: 2.0, isCore: true },
  { name: 'Technical Design', variations: ['tech design', 'technical spec'], weight: 1.5, isCore: false },
  { name: 'Architecture Review', variations: ['design review', 'arch review'], weight: 1.3, isCore: false },
  { name: 'Trade-offs', variations: ['tradeoffs', 'trade offs', 'engineering tradeoffs'], weight: 1.4, isCore: false },
  { name: 'POC', variations: ['proof of concept', 'spike', 'prototype'], weight: 1.3, isCore: false },
  { name: 'RFC', variations: ['request for comments', 'design document', 'design doc'], weight: 1.3, isCore: false },
  { name: 'ADR', variations: ['architecture decision record', 'decision log'], weight: 1.2, isCore: false },

  // Infrastructure Patterns
  { name: 'Containerization', variations: ['containers', 'container orchestration'], weight: 1.6, isCore: false },
  { name: 'Infrastructure as Code', variations: ['iac', 'infra as code'], weight: 1.5, isCore: false },
  { name: 'Immutable Infrastructure', variations: ['immutable infra'], weight: 1.3, isCore: false },
  { name: 'Blue-Green Deployment', variations: ['blue green', 'blue/green'], weight: 1.3, isCore: false },
  { name: 'Canary Release', variations: ['canary deployment'], weight: 1.3, isCore: false },
  { name: 'Feature Flags', variations: ['feature toggles', 'feature switches'], weight: 1.3, isCore: false },
  { name: 'Zero Downtime', variations: ['zero-downtime deployment', 'rolling deployment'], weight: 1.3, isCore: false },

  // Data Architecture
  { name: 'Data Architecture', variations: ['data modeling', 'data design'], weight: 1.5, isCore: false },
  { name: 'Data Pipeline', variations: ['data pipelines', 'etl pipeline'], weight: 1.4, isCore: false },
  { name: 'Data Lake', variations: ['datalake'], weight: 1.3, isCore: false },
  { name: 'Data Warehouse', variations: ['dwh', 'data warehousing'], weight: 1.4, isCore: false },
  { name: 'Data Mesh', variations: ['data-mesh'], weight: 1.3, isCore: false },
  { name: 'Lakehouse', variations: ['lake house', 'data lakehouse'], weight: 1.2, isCore: false },
  { name: 'ETL', variations: ['extract transform load'], weight: 1.4, isCore: false },
  { name: 'ELT', variations: ['extract load transform'], weight: 1.3, isCore: false },
  { name: 'CDC', variations: ['change data capture'], weight: 1.3, isCore: false },
  { name: 'Data Streaming', variations: ['stream processing', 'real-time data'], weight: 1.4, isCore: false },

  // Integration Patterns
  { name: 'Message Queue', variations: ['message broker', 'mq', 'messaging'], weight: 1.5, isCore: false },
  { name: 'Pub/Sub', variations: ['publish subscribe', 'pubsub'], weight: 1.4, isCore: false },
  { name: 'Request Reply', variations: ['request-reply', 'synchronous messaging'], weight: 1.2, isCore: false },
  { name: 'Dead Letter Queue', variations: ['dlq', 'dead letter'], weight: 1.2, isCore: false },
  { name: 'Outbox Pattern', variations: ['transactional outbox'], weight: 1.2, isCore: false },
  { name: 'Inbox Pattern', variations: ['transactional inbox'], weight: 1.1, isCore: false },

  // Performance
  { name: 'Performance Optimization', variations: ['performance tuning', 'optimization'], weight: 1.5, isCore: false },
  { name: 'Caching', variations: ['cache', 'caching strategy'], weight: 1.5, isCore: true },
  { name: 'CDN', variations: ['content delivery network'], weight: 1.3, isCore: false },
  { name: 'Connection Pooling', variations: ['connection pool'], weight: 1.3, isCore: false },
  { name: 'Lazy Loading', variations: ['lazy-loading'], weight: 1.2, isCore: false },
  { name: 'Pagination', variations: ['cursor pagination', 'offset pagination'], weight: 1.2, isCore: false },
  { name: 'Query Optimization', variations: ['sql optimization'], weight: 1.4, isCore: false },
  { name: 'Indexing', variations: ['database indexing'], weight: 1.3, isCore: false },
  { name: 'N+1 Problem', variations: ['n+1 query', 'eager loading'], weight: 1.2, isCore: false },
  { name: 'Profiling', variations: ['performance profiling', 'bottleneck analysis'], weight: 1.3, isCore: false },

  // Tools
  { name: 'UML', variations: ['unified modeling language'], weight: 1.2, isCore: false },
  { name: 'C4 Model', variations: ['c4 diagram'], weight: 1.2, isCore: false },
  { name: 'Miro', variations: [], weight: 1.0, isCore: false },
  { name: 'Lucidchart', variations: ['lucid chart'], weight: 1.0, isCore: false },
  { name: 'Draw.io', variations: ['diagrams.net'], weight: 1.0, isCore: false },
];

/**
 * Get patterns for ATS matching
 */
export function getArchitecturePatterns(): [RegExp, string][] {
  return ARCHITECTURE_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
