import { supabase } from '../lib/supabase';

export type UserRecord = {
  id: string;
  email: string;
  full_name?: string;
  role?: 'admin' | 'investor';
};

export class User {
  // Get currently logged in user
  static async me(): Promise<UserRecord | null> {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        return null;
      }

      // Get profile with role
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      return {
        id: user.id,
        email: user.email || '',
        full_name: profile?.full_name || user.user_metadata?.full_name || '',
        role: profile?.role || 'investor'
      };
    } catch (error) {
      console.error('Error in User.me():', error);
      return null;
    }
  }

  // Redirect to login page
  static async loginWithRedirect(returnUrl?: string): Promise<void> {
    const url = returnUrl ? `/login?redirect=${encodeURIComponent(returnUrl)}` : '/login';
    window.location.href = url;
  }

  // Sign up new user
  static async signUp(email: string, password: string, fullName: string, role: 'admin' | 'investor' = 'investor'): Promise<{ success: boolean; error?: string }> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role: role
          }
        }
      });

      if (error) {
        return { success: false, error: error.message };
      }

      // Update profile role if needed
      if (data.user) {
        await supabase
          .from('profiles')
          .update({ role: role, full_name: fullName })
          .eq('id', data.user.id);
      }

      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  // Sign in existing user
  static async signIn(email: string, password: string): Promise<{ success: boolean; error?: string; user?: UserRecord }> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        return { success: false, error: error.message };
      }

      const user = await User.me();
      return { success: true, user: user || undefined };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  // Sign out
  static async signOut(): Promise<void> {
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  // Check if user is admin
  static async isAdmin(): Promise<boolean> {
    const user = await User.me();
    return user?.role === 'admin';
  }
}
