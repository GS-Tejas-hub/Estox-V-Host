import { supabase } from './supabase';
import type { UserRole } from './database.types';

export interface AuthUser {
    id: string;
    email: string;
    role: UserRole;
    full_name: string | null;
}

export const authService = {
    // Sign up new user
    async signUp(email: string, password: string, role: UserRole, fullName?: string) {
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (authError) throw authError;
        if (!authData.user) throw new Error('No user returned from signup');

        // Update profile with role and full name
        const { error: profileError } = await supabase
            .from('profiles')
            .update({
                role,
                full_name: fullName || null,
            })
            .eq('id', authData.user.id);

        if (profileError) throw profileError;

        return authData;
    },

    // Sign in existing user
    async signIn(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) throw error;
        return data;
    },

    // Sign out
    async signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    },

    // Get current user profile
    async getCurrentUser(): Promise<AuthUser | null> {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) return null;

        const { data: profile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

        if (error || !profile) return null;

        return {
            id: profile.id,
            email: profile.email,
            role: profile.role,
            full_name: profile.full_name,
        };
    },

    // Check if user is admin
    async isAdmin(): Promise<boolean> {
        const user = await this.getCurrentUser();
        return user?.role === 'admin';
    },

    // Listen to auth state changes
    onAuthStateChange(callback: (user: AuthUser | null) => void) {
        return supabase.auth.onAuthStateChange(async (event, session) => {
            if (session?.user) {
                const user = await this.getCurrentUser();
                callback(user);
            } else {
                callback(null);
            }
        });
    },
};
