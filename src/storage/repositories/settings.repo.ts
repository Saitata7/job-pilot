import { getDB } from '../idb-client';
import type { UserSettings } from '@shared/types/settings.types';
import { getDefaultSettings } from '@shared/types/settings.types';

const SETTINGS_ID = 'user_settings';

export const settingsRepo = {
  async get(): Promise<UserSettings> {
    const db = await getDB();
    const settings = await db.get('settings', SETTINGS_ID);

    if (!settings) {
      // Return default settings if none exist
      const defaults = getDefaultSettings();
      await this.save(defaults);
      return defaults;
    }

    return settings;
  },

  async save(settings: UserSettings): Promise<UserSettings> {
    const db = await getDB();

    const toSave: UserSettings = {
      ...settings,
      id: SETTINGS_ID,
    };

    await db.put('settings', toSave);
    return toSave;
  },

  async update(updates: Partial<UserSettings>): Promise<UserSettings> {
    const current = await this.get();

    const updated: UserSettings = {
      ...current,
      ...updates,
      id: SETTINGS_ID,
    };

    return this.save(updated);
  },

  async reset(): Promise<UserSettings> {
    const defaults = getDefaultSettings();
    return this.save(defaults);
  },
};
