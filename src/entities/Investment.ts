export type InvestmentRecord = {
  id: string;
  project_id: string;
  user_email: string;
  amount_invested: number;
  estocks_purchased: number;
  investment_date: string; // ISO
  project_title: string;
};

const STORAGE_KEY = 'estox.investments';
const VERSION_KEY = 'estox.seedVersion';
const SEED_VERSION = 2;

function loadAll(): InvestmentRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveAll(items: InvestmentRecord[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export class Investment {
  static async list(): Promise<InvestmentRecord[]> {
    const currentVersion = localStorage.getItem(VERSION_KEY);
    if (currentVersion !== String(SEED_VERSION)) {
      // reset demo investments on version change
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(VERSION_KEY, String(SEED_VERSION));
    }
    return loadAll();
  }

  static async create(input: Omit<InvestmentRecord, 'id'>): Promise<InvestmentRecord> {
    const all = loadAll();
    const record: InvestmentRecord = { id: crypto.randomUUID(), ...input };
    all.push(record);
    saveAll(all);
    return record;
  }
}


