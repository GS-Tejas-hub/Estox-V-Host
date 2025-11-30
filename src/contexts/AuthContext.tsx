import React, { createContext, useContext, useEffect, useState } from 'react';
import { authService, type AuthUser } from '../lib/auth';

interface AuthContextType {
    user: AuthUser | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string, role: 'admin' | 'investor', fullName?: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check current user on mount
        authService.getCurrentUser().then(setUser).finally(() => setLoading(false));

        // Listen to auth changes
        const { data: { subscription } } = authService.onAuthStateChange(setUser);

        return () => subscription.unsubscribe();
    }, []);

    const signIn = async (email: string, password: string) => {
        await authService.signIn(email, password);
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
    };

    const signUp = async (email: string, password: string, role: 'admin' | 'investor', fullName?: string) => {
        await authService.signUp(email, password, role, fullName);
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
    };

    const signOut = async () => {
        await authService.signOut();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
