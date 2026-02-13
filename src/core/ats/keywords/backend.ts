/**
 * Backend Development Keywords
 * Skill Area: backend
 */

import type { KeywordEntry } from '@shared/types/background.types';

export const BACKEND_KEYWORDS: KeywordEntry[] = [
  // Languages
  { name: 'Java', variations: ['java 8', 'java 11', 'java 17', 'java 21'], weight: 2.0, isCore: true },
  { name: 'Python', variations: ['python 3', 'python3', 'py'], weight: 2.0, isCore: true },
  { name: 'Node.js', variations: ['nodejs', 'node', 'node js'], weight: 2.0, isCore: true },
  { name: 'Go', variations: ['golang', 'go lang'], weight: 1.8, isCore: true },
  { name: 'Rust', variations: ['rustlang', 'rust lang'], weight: 1.6, isCore: false },
  { name: 'C#', variations: ['csharp', 'c sharp', '.net', 'dotnet'], weight: 1.8, isCore: true },
  { name: 'Ruby', variations: ['ruby lang'], weight: 1.5, isCore: false },
  { name: 'PHP', variations: ['php 7', 'php 8'], weight: 1.5, isCore: false },
  { name: 'Scala', variations: [], weight: 1.4, isCore: false },
  { name: 'Kotlin', variations: [], weight: 1.5, isCore: false },
  { name: 'Elixir', variations: [], weight: 1.3, isCore: false },
  { name: 'C++', variations: ['cpp', 'cplusplus'], weight: 1.5, isCore: false },
  { name: 'C', variations: [], weight: 1.3, isCore: false },

  // Java Ecosystem
  { name: 'Spring', variations: ['spring framework', 'springframework'], weight: 2.0, isCore: true },
  { name: 'Spring Boot', variations: ['springboot', 'spring-boot', 'spring boot'], weight: 2.0, isCore: true },
  { name: 'Spring MVC', variations: ['spring-mvc'], weight: 1.5, isCore: false },
  { name: 'Spring Security', variations: ['spring-security'], weight: 1.5, isCore: false },
  { name: 'Spring Cloud', variations: ['spring-cloud'], weight: 1.4, isCore: false },
  { name: 'Spring Data', variations: ['spring-data'], weight: 1.4, isCore: false },
  { name: 'Hibernate', variations: ['hibernate orm', 'hibernate framework'], weight: 1.8, isCore: true },
  { name: 'JPA', variations: ['java persistence api'], weight: 1.5, isCore: false },
  { name: 'Maven', variations: ['apache maven'], weight: 1.5, isCore: true },
  { name: 'Gradle', variations: [], weight: 1.5, isCore: true },
  { name: 'JUnit', variations: ['junit 5', 'junit5'], weight: 1.4, isCore: false },
  { name: 'Mockito', variations: [], weight: 1.3, isCore: false },
  { name: 'JSP', variations: ['java server pages'], weight: 1.2, isCore: false },
  { name: 'Servlets', variations: ['java servlets', 'servlet'], weight: 1.3, isCore: false },
  { name: 'Tomcat', variations: ['apache tomcat'], weight: 1.3, isCore: false },
  { name: 'JBoss', variations: ['wildfly', 'jboss eap'], weight: 1.2, isCore: false },
  { name: 'Jetty', variations: ['eclipse jetty'], weight: 1.1, isCore: false },
  { name: 'Quarkus', variations: [], weight: 1.3, isCore: false },
  { name: 'Micronaut', variations: [], weight: 1.3, isCore: false },
  { name: 'Vert.x', variations: ['vertx', 'eclipse vert.x'], weight: 1.2, isCore: false },
  { name: 'Lombok', variations: ['project lombok'], weight: 1.2, isCore: false },
  { name: 'Log4j', variations: ['log4j2'], weight: 1.1, isCore: false },
  { name: 'SLF4J', variations: [], weight: 1.0, isCore: false },

  // Python Ecosystem
  { name: 'Django', variations: ['django rest framework', 'drf'], weight: 1.8, isCore: true },
  { name: 'Flask', variations: ['flask api'], weight: 1.6, isCore: false },
  { name: 'FastAPI', variations: ['fast api'], weight: 1.8, isCore: false },
  { name: 'Celery', variations: [], weight: 1.4, isCore: false },
  { name: 'SQLAlchemy', variations: ['sql alchemy'], weight: 1.4, isCore: false },
  { name: 'Pydantic', variations: [], weight: 1.3, isCore: false },
  { name: 'asyncio', variations: ['async io'], weight: 1.2, isCore: false },
  { name: 'Tornado', variations: [], weight: 1.1, isCore: false },
  { name: 'Pyramid', variations: [], weight: 1.0, isCore: false },
  { name: 'aiohttp', variations: [], weight: 1.1, isCore: false },

  // Node.js Ecosystem
  { name: 'Express', variations: ['express.js', 'expressjs'], weight: 1.8, isCore: true },
  { name: 'NestJS', variations: ['nest.js', 'nest'], weight: 1.7, isCore: false },
  { name: 'Koa', variations: ['koa.js'], weight: 1.3, isCore: false },
  { name: 'Fastify', variations: [], weight: 1.4, isCore: false },
  { name: 'Hapi', variations: ['hapi.js'], weight: 1.2, isCore: false },
  { name: 'Socket.io', variations: ['socketio', 'socket io'], weight: 1.4, isCore: false },
  { name: 'Prisma', variations: ['prisma orm'], weight: 1.5, isCore: false },
  { name: 'Sequelize', variations: [], weight: 1.3, isCore: false },
  { name: 'TypeORM', variations: ['type orm'], weight: 1.4, isCore: false },
  { name: 'Mongoose', variations: [], weight: 1.3, isCore: false },
  { name: 'Drizzle', variations: ['drizzle orm'], weight: 1.3, isCore: false },

  // C#/.NET Ecosystem
  { name: 'ASP.NET', variations: ['asp.net core', 'aspnet', 'asp net'], weight: 1.8, isCore: true },
  { name: 'Entity Framework', variations: ['ef core', 'entity framework core'], weight: 1.5, isCore: false },
  { name: 'LINQ', variations: [], weight: 1.3, isCore: false },
  { name: 'Blazor', variations: [], weight: 1.3, isCore: false },
  { name: 'SignalR', variations: ['signal r'], weight: 1.2, isCore: false },

  // Go Ecosystem
  { name: 'Gin', variations: ['gin-gonic', 'gin gonic'], weight: 1.5, isCore: false },
  { name: 'Echo', variations: ['labstack echo'], weight: 1.3, isCore: false },
  { name: 'Fiber', variations: ['gofiber'], weight: 1.3, isCore: false },
  { name: 'GORM', variations: [], weight: 1.3, isCore: false },

  // Ruby Ecosystem
  { name: 'Rails', variations: ['ruby on rails', 'ror'], weight: 1.6, isCore: false },
  { name: 'Sinatra', variations: [], weight: 1.1, isCore: false },

  // PHP Ecosystem
  { name: 'Laravel', variations: [], weight: 1.5, isCore: false },
  { name: 'Symfony', variations: [], weight: 1.3, isCore: false },
  { name: 'Composer', variations: [], weight: 1.1, isCore: false },

  // API & Protocols
  { name: 'REST API', variations: ['restful', 'rest apis', 'restful api'], weight: 2.0, isCore: true },
  { name: 'GraphQL', variations: ['graph ql'], weight: 1.8, isCore: false },
  { name: 'gRPC', variations: ['grpc', 'g-rpc'], weight: 1.6, isCore: false },
  { name: 'WebSocket', variations: ['websockets', 'web sockets'], weight: 1.4, isCore: false },
  { name: 'SOAP', variations: ['soap api'], weight: 1.1, isCore: false },
  { name: 'JSON-RPC', variations: ['json rpc'], weight: 1.1, isCore: false },
  { name: 'OpenAPI', variations: ['swagger', 'openapi spec'], weight: 1.4, isCore: false },
  { name: 'Postman', variations: [], weight: 1.2, isCore: false },
  { name: 'Insomnia', variations: [], weight: 1.0, isCore: false },

  // Architecture & Patterns
  { name: 'Microservices', variations: ['microservice', 'micro services', 'micro-services'], weight: 2.0, isCore: true },
  { name: 'Monolith', variations: ['monolithic'], weight: 1.2, isCore: false },
  { name: 'Serverless', variations: ['serverless architecture'], weight: 1.6, isCore: false },
  { name: 'Event Driven', variations: ['event-driven', 'event driven architecture', 'eda'], weight: 1.6, isCore: false },
  { name: 'Domain Driven Design', variations: ['ddd'], weight: 1.5, isCore: false },
  { name: 'CQRS', variations: ['command query responsibility segregation'], weight: 1.3, isCore: false },
  { name: 'Event Sourcing', variations: ['event-sourcing'], weight: 1.3, isCore: false },
  { name: 'Hexagonal Architecture', variations: ['ports and adapters'], weight: 1.2, isCore: false },
  { name: 'Clean Architecture', variations: [], weight: 1.3, isCore: false },
  { name: 'SOA', variations: ['service oriented architecture'], weight: 1.2, isCore: false },
  { name: 'API Gateway', variations: ['api-gateway'], weight: 1.4, isCore: false },
  { name: 'Service Mesh', variations: ['service-mesh'], weight: 1.3, isCore: false },

  // Message Queues & Streaming
  { name: 'Kafka', variations: ['apache kafka', 'kafka streams'], weight: 1.8, isCore: true },
  { name: 'RabbitMQ', variations: ['rabbit mq'], weight: 1.6, isCore: false },
  { name: 'Redis', variations: ['redis cache', 'redis queue'], weight: 1.7, isCore: true },
  { name: 'ActiveMQ', variations: ['apache activemq'], weight: 1.3, isCore: false },
  { name: 'SQS', variations: ['aws sqs', 'amazon sqs'], weight: 1.4, isCore: false },
  { name: 'SNS', variations: ['aws sns', 'amazon sns'], weight: 1.3, isCore: false },
  { name: 'Pub/Sub', variations: ['pubsub', 'google pub/sub', 'publish subscribe'], weight: 1.4, isCore: false },
  { name: 'NATS', variations: ['nats.io'], weight: 1.2, isCore: false },
  { name: 'ZeroMQ', variations: ['0mq', 'zmq'], weight: 1.1, isCore: false },
  { name: 'Celery', variations: [], weight: 1.3, isCore: false },
  { name: 'Sidekiq', variations: [], weight: 1.1, isCore: false },

  // Caching
  { name: 'Memcached', variations: ['memcache'], weight: 1.3, isCore: false },
  { name: 'Varnish', variations: ['varnish cache'], weight: 1.1, isCore: false },
  { name: 'CDN', variations: ['content delivery network'], weight: 1.2, isCore: false },

  // Authentication & Authorization
  { name: 'OAuth', variations: ['oauth1', 'oauth 1.0'], weight: 1.3, isCore: false },
  { name: 'OAuth2', variations: ['oauth 2', 'oauth 2.0', 'oauth2.0'], weight: 1.6, isCore: true },
  { name: 'JWT', variations: ['json web token', 'json web tokens'], weight: 1.5, isCore: false },
  { name: 'SAML', variations: ['saml 2.0'], weight: 1.2, isCore: false },
  { name: 'OpenID', variations: ['openid connect', 'oidc'], weight: 1.3, isCore: false },
  { name: 'LDAP', variations: ['active directory'], weight: 1.2, isCore: false },
  { name: 'SSO', variations: ['single sign-on', 'single sign on'], weight: 1.3, isCore: false },
  { name: 'Keycloak', variations: [], weight: 1.2, isCore: false },
  { name: 'Auth0', variations: [], weight: 1.2, isCore: false },
  { name: 'Okta', variations: [], weight: 1.2, isCore: false },
  { name: 'Passport', variations: ['passport.js', 'passportjs'], weight: 1.1, isCore: false },

  // Practices & Concepts
  { name: 'SOLID', variations: ['solid principles'], weight: 1.5, isCore: true },
  { name: 'Design Patterns', variations: ['software design patterns', 'gang of four', 'gof'], weight: 1.5, isCore: true },
  { name: 'SDLC', variations: ['software development life cycle', 'software development lifecycle'], weight: 1.3, isCore: false },
  { name: 'OOP', variations: ['object oriented programming', 'object-oriented'], weight: 1.4, isCore: true },
  { name: 'Functional Programming', variations: ['fp', 'functional'], weight: 1.3, isCore: false },
  { name: 'Concurrency', variations: ['concurrent programming', 'parallel programming', 'multithreading'], weight: 1.4, isCore: false },
  { name: 'Async Programming', variations: ['asynchronous programming', 'async/await', 'async await'], weight: 1.3, isCore: false },
  { name: 'Rate Limiting', variations: ['rate-limiting', 'throttling'], weight: 1.2, isCore: false },
  { name: 'Caching Strategies', variations: ['cache invalidation', 'distributed caching'], weight: 1.3, isCore: false },
  { name: 'Load Balancing', variations: ['load-balancing', 'load balancer'], weight: 1.3, isCore: false },

  // Process Management
  { name: 'PM2', variations: [], weight: 1.1, isCore: false },
  { name: 'Supervisor', variations: ['supervisord'], weight: 1.0, isCore: false },
  { name: 'systemd', variations: [], weight: 1.0, isCore: false },

  // IDEs & Development Tools
  { name: 'Eclipse', variations: ['eclipse ide'], weight: 1.2, isCore: false },
  { name: 'IntelliJ', variations: ['intellij idea', 'intellij ide'], weight: 1.3, isCore: false },
  { name: 'VS Code', variations: ['visual studio code', 'vscode'], weight: 1.3, isCore: false },
  { name: 'Visual Studio', variations: ['vs 2022', 'vs 2019'], weight: 1.2, isCore: false },
  { name: 'PyCharm', variations: ['pycharm ide'], weight: 1.1, isCore: false },
  { name: 'WebStorm', variations: [], weight: 1.1, isCore: false },
  { name: 'Vim', variations: ['neovim', 'nvim'], weight: 1.0, isCore: false },
];

/**
 * Get patterns for ATS matching
 */
export function getBackendPatterns(): [RegExp, string][] {
  return BACKEND_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
