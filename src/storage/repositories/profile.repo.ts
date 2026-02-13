import { getDB } from '../idb-client';
import type { ResumeProfile } from '@shared/types/profile.types';

function generateId(): string {
  return crypto.randomUUID();
}

export const profileRepo = {
  async getAll(): Promise<ResumeProfile[]> {
    const db = await getDB();
    return db.getAll('profiles');
  },

  async getById(id: string): Promise<ResumeProfile | undefined> {
    const db = await getDB();
    return db.get('profiles', id);
  },

  async getDefault(): Promise<ResumeProfile | undefined> {
    const db = await getDB();
    const profiles = await db.getAllFromIndex('profiles', 'by-default', 1);
    return profiles[0];
  },

  async create(profile: Omit<ResumeProfile, 'id' | 'createdAt' | 'updatedAt'>): Promise<ResumeProfile> {
    const db = await getDB();
    const now = new Date();

    const newProfile: ResumeProfile = {
      ...profile,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };

    // If this is the first profile or marked as default, ensure only one default
    if (newProfile.isDefault) {
      await this.clearDefaultFlag();
    }

    await db.put('profiles', newProfile);
    return newProfile;
  },

  async update(id: string, updates: Partial<ResumeProfile>): Promise<ResumeProfile | undefined> {
    const db = await getDB();
    const existing = await db.get('profiles', id);

    if (!existing) {
      return undefined;
    }

    // If setting as default, clear other defaults
    if (updates.isDefault && !existing.isDefault) {
      await this.clearDefaultFlag();
    }

    const updated: ResumeProfile = {
      ...existing,
      ...updates,
      id, // Ensure ID can't be changed
      updatedAt: new Date(),
    };

    await db.put('profiles', updated);
    return updated;
  },

  async delete(id: string): Promise<boolean> {
    const db = await getDB();
    const existing = await db.get('profiles', id);

    if (!existing) {
      return false;
    }

    await db.delete('profiles', id);
    return true;
  },

  async clearDefaultFlag(): Promise<void> {
    try {
      const db = await getDB();
      const defaults = await db.getAllFromIndex('profiles', 'by-default', 1);

      // Collect all updates to minimize race window
      const updates: Promise<unknown>[] = [];
      for (const profile of defaults) {
        const updated = { ...profile, isDefault: false, updatedAt: new Date() };
        updates.push(db.put('profiles', updated));
      }
      await Promise.all(updates);
    } catch (error) {
      console.error('[ProfileRepo] clearDefaultFlag failed:', error);
      throw error; // Re-throw to let setDefault handle it
    }
  },

  async setDefault(id: string): Promise<ResumeProfile | undefined> {
    try {
      // Clear other defaults and set new one in sequence
      await this.clearDefaultFlag();
      return this.update(id, { isDefault: true });
    } catch (error) {
      console.error('[ProfileRepo] setDefault failed:', error);
      return undefined;
    }
  },

  async count(): Promise<number> {
    try {
      const db = await getDB();
      return db.count('profiles');
    } catch (error) {
      console.error('[ProfileRepo] count failed:', error);
      return 0;
    }
  },
};
