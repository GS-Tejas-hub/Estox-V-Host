export type UserRecord = {
  email: string;
  full_name?: string;
};

// Extremely simple local auth placeholder. In production, replace with real auth.
const STORAGE_KEY = 'estox.user';

export class User {
  static async me(): Promise<UserRecord> {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
    // Auto-create a demo user for local testing
    const demo: UserRecord = { email: 'demo@estox.local', full_name: 'Demo User' };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demo));
    return demo;
  }

  static async loginWithRedirect(_returnUrl?: string): Promise<void> {
    const demo: UserRecord = { email: 'demo@estox.local', full_name: 'Demo User' };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demo));
  }
}


