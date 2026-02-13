import { getDB } from '../idb-client';
import type { Application, ApplicationStatus, StatusChange } from '@shared/types/application.types';

function generateId(): string {
  return crypto.randomUUID();
}

export const applicationRepo = {
  async getAll(): Promise<Application[]> {
    const db = await getDB();
    return db.getAll('applications');
  },

  async getById(id: string): Promise<Application | undefined> {
    const db = await getDB();
    return db.get('applications', id);
  },

  async getByJobId(jobId: string): Promise<Application | undefined> {
    const db = await getDB();
    const apps = await db.getAllFromIndex('applications', 'by-job', jobId);
    return apps[0];
  },

  async getByProfileId(profileId: string): Promise<Application[]> {
    const db = await getDB();
    return db.getAllFromIndex('applications', 'by-profile', profileId);
  },

  async getByStatus(status: ApplicationStatus): Promise<Application[]> {
    const db = await getDB();
    return db.getAllFromIndex('applications', 'by-status', status);
  },

  async getRecent(limit: number = 10): Promise<Application[]> {
    const db = await getDB();
    const all = await db.getAllFromIndex('applications', 'by-created');
    return all.reverse().slice(0, limit);
  },

  async create(
    application: Omit<Application, 'id' | 'createdAt' | 'updatedAt' | 'statusHistory'>
  ): Promise<Application> {
    const db = await getDB();
    const now = new Date();

    const newApp: Application = {
      ...application,
      id: generateId(),
      statusHistory: [],
      createdAt: now,
      updatedAt: now,
    };

    await db.put('applications', newApp);
    return newApp;
  },

  async update(id: string, updates: Partial<Application>): Promise<Application | undefined> {
    const db = await getDB();
    const existing = await db.get('applications', id);

    if (!existing) {
      return undefined;
    }

    const updated: Application = {
      ...existing,
      ...updates,
      id,
      updatedAt: new Date(),
    };

    await db.put('applications', updated);
    return updated;
  },

  async updateStatus(id: string, newStatus: ApplicationStatus, note?: string): Promise<Application | undefined> {
    const db = await getDB();
    const existing = await db.get('applications', id);

    if (!existing) {
      return undefined;
    }

    const statusChange: StatusChange = {
      from: existing.status,
      to: newStatus,
      changedAt: new Date(),
      note,
    };

    const updated: Application = {
      ...existing,
      status: newStatus,
      statusHistory: [...existing.statusHistory, statusChange],
      updatedAt: new Date(),
    };

    if (newStatus === 'submitted' && !existing.appliedAt) {
      updated.appliedAt = new Date();
    }

    await db.put('applications', updated);
    return updated;
  },

  async delete(id: string): Promise<boolean> {
    const db = await getDB();
    const existing = await db.get('applications', id);

    if (!existing) {
      return false;
    }

    await db.delete('applications', id);
    return true;
  },

  async count(): Promise<number> {
    const db = await getDB();
    return db.count('applications');
  },

  async countByStatus(): Promise<Record<ApplicationStatus, number>> {
    const all = await this.getAll();
    const counts: Record<ApplicationStatus, number> = {
      saved: 0,
      in_progress: 0,
      submitted: 0,
      under_review: 0,
      interview: 0,
      offer: 0,
      rejected: 0,
      withdrawn: 0,
      expired: 0,
    };

    for (const app of all) {
      counts[app.status]++;
    }

    return counts;
  },
};
