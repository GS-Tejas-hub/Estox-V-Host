import { supabase } from '../lib/supabase';

export type InvestmentRecord = {
  id: string;
  project_id: string;
  user_email: string;
  amount_invested: number;
  estocks_purchased: number;
  investment_date: string; // ISO
  project_title: string;
  investor_id?: string;
};

export class Investment {
  // List all investments (filtered by user in UI)
  static async list(): Promise<InvestmentRecord[]> {
    try {
      const { data, error } = await supabase
        .from('investments')
        .select('*')
        .order('investment_date', { ascending: false });

      if (error) {
        console.error('Error fetching investments:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error in Investment.list():', error);
      return [];
    }
  }

  // Create new investment
  static async create(input: Omit<InvestmentRecord, 'id'>): Promise<InvestmentRecord | null> {
    try {
      // Get current user to set investor_id
      const { data: { user } } = await supabase.auth.getUser();

      const { data, error } = await supabase
        .from('investments')
        .insert([{
          ...input,
          investor_id: user?.id || null,
          investment_date: input.investment_date || new Date().toISOString()
        }])
        .select()
        .single();

      if (error) {
        console.error('Error creating investment:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in Investment.create():', error);
      return null;
    }
  }

  // Delete investment (for portfolio)
  static async delete(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('investments')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting investment:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error in Investment.delete():', error);
      return false;
    }
  }
}
