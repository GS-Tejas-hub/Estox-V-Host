export type InquiryRecord = {
  id: string;
  name: string;
  email: string;
  phone: string;
  investment_range?: '1.5L - 5L' | '5L - 10L' | '10L - 25L' | '25L+';
  interest_area?: 'Land' | 'PG' | 'Rental' | 'Commercial' | 'All';
  message?: string;
  source?: 'Website' | 'WhatsApp' | 'Referral' | 'Social Media';
  created_at: string; // ISO
};

const STORAGE_KEY = 'estox.inquiries';

function loadAll(): InquiryRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveAll(items: InquiryRecord[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export class Inquiry {
  static async create(input: Omit<InquiryRecord, 'id' | 'created_at'>): Promise<InquiryRecord> {
    const all = loadAll();
    const record: InquiryRecord = {
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      ...input
    };
    all.push(record);
    saveAll(all);
    return record;
  }
}


