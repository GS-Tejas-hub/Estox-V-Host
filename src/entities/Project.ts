import { supabase } from '../lib/supabase';

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
  created_by?: string;
  created_at?: string;
  updated_at?: string;
};

export class Project {
  // List all projects from Supabase
  static async list(): Promise<ProjectRecord[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error in Project.list():', error);
      return [];
    }
  }

  // Create new project (admin only)
  static async create(project: Omit<ProjectRecord, 'created_at' | 'updated_at'>): Promise<ProjectRecord | null> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([{
          ...project,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (error) {
        console.error('Error creating project:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in Project.create():', error);
      return null;
    }
  }

  // Update project (admin only)
  static async update(id: string, updates: Partial<ProjectRecord>): Promise<ProjectRecord | null> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating project:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in Project.update():', error);
      return null;
    }
  }

  // Delete project (admin only)
  static async delete(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting project:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error in Project.delete():', error);
      return false;
    }
  }
}
