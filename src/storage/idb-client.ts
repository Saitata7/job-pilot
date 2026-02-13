import { openDB, DBSchema, IDBPDatabase } from 'idb';
import type { ResumeProfile } from '@shared/types/profile.types';
import type { Job, JobPlatform } from '@shared/types/job.types';
import type { Application, ApplicationStatus } from '@shared/types/application.types';
import type { UserSettings } from '@shared/types/settings.types';

const DB_NAME = 'jobs-pilot-db';
const DB_VERSION = 1;

export interface JobsPilotDB extends DBSchema {
  profiles: {
    key: string;
    value: ResumeProfile;
    indexes: {
      'by-name': string;
      'by-default': number;
      'by-updated': Date;
    };
  };
  jobs: {
    key: string;
    value: Job;
    indexes: {
      'by-platform': JobPlatform;
      'by-company': string;
      'by-url': string;
      'by-created': Date;
    };
  };
  applications: {
    key: string;
    value: Application;
    indexes: {
      'by-job': string;
      'by-profile': string;
      'by-status': ApplicationStatus;
      'by-created': Date;
    };
  };
  settings: {
    key: string;
    value: UserSettings;
  };
}

let dbInstance: IDBPDatabase<JobsPilotDB> | null = null;

export async function initDB(): Promise<IDBPDatabase<JobsPilotDB>> {
  if (dbInstance) {
    return dbInstance;
  }

  dbInstance = await openDB<JobsPilotDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Profiles store
      if (!db.objectStoreNames.contains('profiles')) {
        const profileStore = db.createObjectStore('profiles', { keyPath: 'id' });
        profileStore.createIndex('by-name', 'name');
        profileStore.createIndex('by-default', 'isDefault');
        profileStore.createIndex('by-updated', 'updatedAt');
      }

      // Jobs store
      if (!db.objectStoreNames.contains('jobs')) {
        const jobStore = db.createObjectStore('jobs', { keyPath: 'id' });
        jobStore.createIndex('by-platform', 'platform');
        jobStore.createIndex('by-company', 'company');
        jobStore.createIndex('by-url', 'url');
        jobStore.createIndex('by-created', 'createdAt');
      }

      // Applications store
      if (!db.objectStoreNames.contains('applications')) {
        const appStore = db.createObjectStore('applications', { keyPath: 'id' });
        appStore.createIndex('by-job', 'jobId');
        appStore.createIndex('by-profile', 'profileId');
        appStore.createIndex('by-status', 'status');
        appStore.createIndex('by-created', 'createdAt');
      }

      // Settings store
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings', { keyPath: 'id' });
      }
    },
  });

  return dbInstance;
}

export async function getDB(): Promise<IDBPDatabase<JobsPilotDB>> {
  if (!dbInstance) {
    return initDB();
  }
  return dbInstance;
}

export const db = {
  init: initDB,
  get: getDB,
};
