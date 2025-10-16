export type ProjectRecord = {
  id: string;
  title: string;
  location: string;
  property_type: 'Land' | 'PG' | 'Rental' | 'Commercial';
  min_investment: number;
  expected_roi?: number;
  rental_yield?: number;
  appreciation_potential?: number;
  total_value?: number;
  funded_percentage?: number;
  image_url?: string;
  status?: 'Open' | 'Funded' | 'Coming Soon';
  description?: string;
  highlights?: string[];
};

const STORAGE_KEY = 'estox.projects';
const VERSION_KEY = 'estox.seedVersion';
const SEED_VERSION = 3; // bump to force reseed across all entities

function loadAll(): ProjectRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seed();
    return JSON.parse(raw);
  } catch {
    return seed();
  }
}

function saveAll(projects: ProjectRecord[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function seed(): ProjectRecord[] {
  const seeded: ProjectRecord[] = [
    // 1) Commercial - Baner (₹10K)
    {
      id: 'p-1',
      title: 'Premium Commercial Complex - Baner',
      location: 'Baner, Pune',
      property_type: 'Commercial',
      min_investment: 10000, // ₹10K
      expected_roi: 18,
      rental_yield: 7.5,
      total_value: 50000000, // ₹5.0Cr
      image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
      status: 'Open'
    },
    // 2) PG - Koramangala (₹1.5L)
    {
      id: 'p-2',
      title: 'Luxury PG - Koramangala',
      location: 'Koramangala, Bangalore',
      property_type: 'PG',
      min_investment: 150000, // ₹1.5L
      expected_roi: 22,
      rental_yield: 12,
      total_value: 25000000, // ₹2.5Cr
      image_url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop',
      status: 'Open'
    },
    // 3) Land - Gurgaon (₹3.0L)
    {
      id: 'p-3',
      title: 'Prime Land - Gurgaon',
      location: 'Sector 82, Gurgaon',
      property_type: 'Land',
      min_investment: 300000, // ₹3.0L
      expected_roi: 25,
      rental_yield: 0,
      total_value: 80000000, // ₹8.0Cr
      image_url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop',
      status: 'Open'
    },
    // 4) Land - Gurgaon (Development)
    {
      id: 'p-4',
      title: 'Prime Development Land - Gurgaon',
      location: 'Sector 82, Gurgaon',
      property_type: 'Land',
      min_investment: 300000, // ₹3.0L
      expected_roi: 25,
      rental_yield: 0,
      total_value: 75000000, // ₹7.5Cr
      image_url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop',
      status: 'Open',
      highlights: ['Metro connectivity planned', 'Rapid infrastructure development']
    },
    // 5) Luxury Student PG - Koramangala (₹1.5L)
    {
      id: 'p-5',
      title: 'Luxury Student PG - Koramangala',
      location: 'Koramangala, Bangalore',
      property_type: 'PG',
      min_investment: 150000, // ₹1.5L
      expected_roi: 22,
      rental_yield: 12,
      total_value: 25000000, // ₹2.5Cr
      image_url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop',
      status: 'Open',
      highlights: ['95% occupancy rate', 'Near tech hubs']
    },
    // 6) Co-working Space - Indiranagar (Funded)
    {
      id: 'p-6',
      title: 'Co-working Space - Indiranagar',
      location: 'Indiranagar, Bangalore',
      property_type: 'Commercial',
      min_investment: 180000, // ₹1.8L
      expected_roi: 20,
      rental_yield: 10,
      total_value: 35000000, // ₹3.5Cr
      image_url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=500&fit=crop',
      status: 'Funded',
      highlights: ['Vibrant startup ecosystem', 'Modern design']
    },
    // 7) Commercial - Baner (₹2.5L variant)
    {
      id: 'p-7',
      title: 'Premium Commercial Complex - Baner',
      location: 'Baner, Pune',
      property_type: 'Commercial',
      min_investment: 250000, // ₹2.5L
      expected_roi: 18,
      rental_yield: 7.5,
      total_value: 50000000, // ₹5.0Cr
      image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
      status: 'Open',
      highlights: ['IT hub location', 'Metro connectivity']
    },
    // 8) Tech Park - Whitefield
    {
      id: 'p-8',
      title: 'Tech Park Office Space - Whitefield',
      location: 'Whitefield, Bangalore',
      property_type: 'Commercial',
      min_investment: 200000, // ₹2.0L
      expected_roi: 16,
      rental_yield: 8,
      total_value: 40000000, // ₹4.0Cr
      image_url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&h=500&fit=crop',
      status: 'Open',
      highlights: ['Grade-A building', 'Blue-chip tenants']
    },
    // 9) Luxury Rental Apartments - Powai
    {
      id: 'p-9',
      title: 'Luxury Rental Apartments - Powai',
      location: 'Powai, Mumbai',
      property_type: 'Rental',
      min_investment: 350000, // ₹3.5L
      expected_roi: 14,
      rental_yield: 6,
      total_value: 60000000, // ₹6.0Cr
      image_url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&h=500&fit=crop',
      status: 'Open',
      highlights: ['Lake view', 'Premium amenities']
    }
  ];
  saveAll(seeded);
  return seeded;
}

export class Project {
  static async list(): Promise<ProjectRecord[]> {
    // Reseed when version changes or data missing
    const currentVersion = localStorage.getItem(VERSION_KEY);
    const hasData = !!localStorage.getItem(STORAGE_KEY);
    if (!hasData || currentVersion !== String(SEED_VERSION)) {
      const data = seed();
      localStorage.setItem(VERSION_KEY, String(SEED_VERSION));
      return data;
    }
    return loadAll();
  }
}


