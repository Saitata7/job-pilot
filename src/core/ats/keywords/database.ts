/**
 * Database & Data Storage Keywords
 * Skill Area: database
 */

import type { KeywordEntry } from '@shared/types/background.types';

export const DATABASE_KEYWORDS: KeywordEntry[] = [
  // Relational Databases
  { name: 'PostgreSQL', variations: ['postgres', 'psql', 'pg'], weight: 2.0, isCore: true },
  { name: 'MySQL', variations: ['mariadb', 'maria db'], weight: 2.0, isCore: true },
  { name: 'SQL Server', variations: ['mssql', 'ms sql', 'microsoft sql server', 'tsql', 't-sql'], weight: 1.8, isCore: true },
  { name: 'Oracle', variations: ['oracle db', 'oracle database', 'pl/sql', 'plsql'], weight: 1.8, isCore: true },
  { name: 'SQLite', variations: ['sqlite3'], weight: 1.3, isCore: false },
  { name: 'DB2', variations: ['ibm db2'], weight: 1.2, isCore: false },
  { name: 'Sybase', variations: ['sap sybase'], weight: 1.0, isCore: false },
  { name: 'CockroachDB', variations: ['cockroach db'], weight: 1.2, isCore: false },
  { name: 'TiDB', variations: [], weight: 1.1, isCore: false },
  { name: 'Vitess', variations: [], weight: 1.1, isCore: false },

  // NoSQL - Document
  { name: 'MongoDB', variations: ['mongo', 'mongo db'], weight: 1.8, isCore: true },
  { name: 'CouchDB', variations: ['couch db', 'apache couchdb'], weight: 1.2, isCore: false },
  { name: 'Firebase', variations: ['firebase firestore', 'firestore'], weight: 1.4, isCore: false },
  { name: 'Couchbase', variations: [], weight: 1.2, isCore: false },
  { name: 'RavenDB', variations: ['raven db'], weight: 1.0, isCore: false },
  { name: 'Amazon DocumentDB', variations: ['documentdb', 'aws documentdb'], weight: 1.2, isCore: false },

  // NoSQL - Key-Value
  { name: 'Redis', variations: ['redis cache'], weight: 1.8, isCore: true },
  { name: 'Memcached', variations: ['memcache'], weight: 1.3, isCore: false },
  { name: 'DynamoDB', variations: ['dynamo db', 'aws dynamodb', 'amazon dynamodb'], weight: 1.6, isCore: false },
  { name: 'Aerospike', variations: [], weight: 1.1, isCore: false },
  { name: 'Hazelcast', variations: [], weight: 1.1, isCore: false },

  // NoSQL - Wide Column
  { name: 'Cassandra', variations: ['apache cassandra'], weight: 1.5, isCore: false },
  { name: 'HBase', variations: ['apache hbase'], weight: 1.3, isCore: false },
  { name: 'ScyllaDB', variations: ['scylla'], weight: 1.2, isCore: false },
  { name: 'Bigtable', variations: ['google bigtable', 'cloud bigtable'], weight: 1.3, isCore: false },

  // NoSQL - Graph
  { name: 'Neo4j', variations: ['neo 4j'], weight: 1.4, isCore: false },
  { name: 'Amazon Neptune', variations: ['neptune', 'aws neptune'], weight: 1.2, isCore: false },
  { name: 'ArangoDB', variations: ['arango db'], weight: 1.1, isCore: false },
  { name: 'OrientDB', variations: ['orient db'], weight: 1.0, isCore: false },
  { name: 'JanusGraph', variations: ['janus graph'], weight: 1.0, isCore: false },
  { name: 'TigerGraph', variations: ['tiger graph'], weight: 1.0, isCore: false },

  // Time Series
  { name: 'InfluxDB', variations: ['influx db'], weight: 1.3, isCore: false },
  { name: 'TimescaleDB', variations: ['timescale'], weight: 1.2, isCore: false },
  { name: 'Prometheus', variations: [], weight: 1.4, isCore: false },
  { name: 'OpenTSDB', variations: ['open tsdb'], weight: 1.0, isCore: false },
  { name: 'QuestDB', variations: ['quest db'], weight: 1.0, isCore: false },

  // Search Engines
  { name: 'Elasticsearch', variations: ['elastic search', 'elastic'], weight: 1.7, isCore: true },
  { name: 'OpenSearch', variations: ['open search'], weight: 1.4, isCore: false },
  { name: 'Solr', variations: ['apache solr'], weight: 1.3, isCore: false },
  { name: 'Algolia', variations: [], weight: 1.2, isCore: false },
  { name: 'Meilisearch', variations: ['meili search'], weight: 1.1, isCore: false },
  { name: 'Typesense', variations: ['type sense'], weight: 1.0, isCore: false },

  // Data Warehouses
  { name: 'Snowflake', variations: [], weight: 1.6, isCore: false },
  { name: 'Redshift', variations: ['amazon redshift', 'aws redshift'], weight: 1.5, isCore: false },
  { name: 'BigQuery', variations: ['google bigquery', 'big query'], weight: 1.5, isCore: false },
  { name: 'Databricks', variations: [], weight: 1.5, isCore: false },
  { name: 'Azure Synapse', variations: ['synapse analytics', 'azure sql dw'], weight: 1.3, isCore: false },
  { name: 'Vertica', variations: [], weight: 1.2, isCore: false },
  { name: 'Teradata', variations: [], weight: 1.2, isCore: false },
  { name: 'ClickHouse', variations: ['click house'], weight: 1.3, isCore: false },
  { name: 'Druid', variations: ['apache druid'], weight: 1.2, isCore: false },
  { name: 'Pinot', variations: ['apache pinot'], weight: 1.1, isCore: false },

  // Query Languages & Skills
  { name: 'SQL', variations: ['structured query language'], weight: 2.0, isCore: true },
  { name: 'NoSQL', variations: ['no sql', 'non-relational'], weight: 1.5, isCore: true },
  { name: 'Query Optimization', variations: ['sql optimization', 'query tuning', 'performance tuning'], weight: 1.5, isCore: false },
  { name: 'Stored Procedures', variations: ['stored procedure', 'sprocs'], weight: 1.3, isCore: false },
  { name: 'Triggers', variations: ['database triggers'], weight: 1.1, isCore: false },
  { name: 'Views', variations: ['database views', 'materialized views'], weight: 1.2, isCore: false },
  { name: 'Indexes', variations: ['indexing', 'database indexes', 'b-tree', 'hash index'], weight: 1.4, isCore: false },
  { name: 'Transactions', variations: ['database transactions', 'acid'], weight: 1.4, isCore: false },
  { name: 'Joins', variations: ['sql joins', 'inner join', 'outer join', 'left join'], weight: 1.3, isCore: true },
  { name: 'Subqueries', variations: ['sub queries', 'nested queries'], weight: 1.2, isCore: false },
  { name: 'CTEs', variations: ['common table expressions', 'with clause'], weight: 1.2, isCore: false },
  { name: 'Window Functions', variations: ['analytic functions', 'over clause'], weight: 1.3, isCore: false },

  // Data Modeling
  { name: 'Data Modeling', variations: ['database design', 'schema design', 'data model'], weight: 1.6, isCore: true },
  { name: 'ERD', variations: ['entity relationship diagram', 'er diagram'], weight: 1.2, isCore: false },
  { name: 'Normalization', variations: ['database normalization', '1nf', '2nf', '3nf', 'bcnf'], weight: 1.4, isCore: false },
  { name: 'Denormalization', variations: ['denormalized'], weight: 1.2, isCore: false },
  { name: 'Star Schema', variations: ['dimensional modeling'], weight: 1.3, isCore: false },
  { name: 'Snowflake Schema', variations: [], weight: 1.2, isCore: false },
  { name: 'Data Vault', variations: [], weight: 1.1, isCore: false },

  // Database Administration
  { name: 'Database Administration', variations: ['dba', 'db admin'], weight: 1.5, isCore: false },
  { name: 'Backup and Recovery', variations: ['disaster recovery', 'point-in-time recovery'], weight: 1.3, isCore: false },
  { name: 'Replication', variations: ['database replication', 'master-slave', 'primary-replica'], weight: 1.4, isCore: false },
  { name: 'Sharding', variations: ['database sharding', 'horizontal partitioning'], weight: 1.4, isCore: false },
  { name: 'Partitioning', variations: ['table partitioning', 'partition'], weight: 1.3, isCore: false },
  { name: 'Connection Pooling', variations: ['connection pool', 'pgbouncer', 'pgpool'], weight: 1.2, isCore: false },
  { name: 'High Availability', variations: ['ha', 'failover', 'clustering'], weight: 1.4, isCore: false },
  { name: 'Database Migration', variations: ['schema migration', 'data migration', 'flyway', 'liquibase'], weight: 1.3, isCore: false },

  // ORMs & Libraries
  { name: 'Hibernate', variations: ['hibernate orm'], weight: 1.5, isCore: false },
  { name: 'JPA', variations: ['java persistence api'], weight: 1.4, isCore: false },
  { name: 'SQLAlchemy', variations: ['sql alchemy'], weight: 1.4, isCore: false },
  { name: 'Entity Framework', variations: ['ef core'], weight: 1.4, isCore: false },
  { name: 'Prisma', variations: ['prisma orm'], weight: 1.4, isCore: false },
  { name: 'TypeORM', variations: ['type orm'], weight: 1.3, isCore: false },
  { name: 'Sequelize', variations: [], weight: 1.3, isCore: false },
  { name: 'Drizzle', variations: ['drizzle orm'], weight: 1.2, isCore: false },
  { name: 'GORM', variations: [], weight: 1.2, isCore: false },
  { name: 'Active Record', variations: ['activerecord'], weight: 1.2, isCore: false },

  // Cloud Database Services
  { name: 'RDS', variations: ['aws rds', 'amazon rds', 'relational database service'], weight: 1.5, isCore: false },
  { name: 'Aurora', variations: ['amazon aurora', 'aws aurora'], weight: 1.4, isCore: false },
  { name: 'Cloud SQL', variations: ['google cloud sql'], weight: 1.3, isCore: false },
  { name: 'Azure SQL', variations: ['azure sql database', 'azure database'], weight: 1.3, isCore: false },
  { name: 'CosmosDB', variations: ['cosmos db', 'azure cosmos db'], weight: 1.4, isCore: false },
  { name: 'Supabase', variations: [], weight: 1.2, isCore: false },
  { name: 'PlanetScale', variations: ['planet scale'], weight: 1.2, isCore: false },
  { name: 'Neon', variations: ['neon database'], weight: 1.1, isCore: false },
];

/**
 * Get patterns for ATS matching
 */
export function getDatabasePatterns(): [RegExp, string][] {
  return DATABASE_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
