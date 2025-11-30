export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type UserRole = 'admin' | 'investor';

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string;
                    email: string;
                    role: UserRole;
                    full_name: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id: string;
                    email: string;
                    role?: UserRole;
                    full_name?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    email?: string;
                    role?: UserRole;
                    full_name?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            projects: {
                Row: {
                    id: string;
                    name: string;
                    location: string;
                    total_units: number;
                    price_per_unit: number;
                    available_units: number;
                    description: string | null;
                    image_url: string | null;
                    created_by: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    name: string;
                    location: string;
                    total_units: number;
                    price_per_unit: number;
                    available_units: number;
                    description?: string | null;
                    image_url?: string | null;
                    created_by?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    name?: string;
                    location?: string;
                    total_units?: number;
                    price_per_unit?: number;
                    available_units?: number;
                    description?: string | null;
                    image_url?: string | null;
                    created_by?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            investments: {
                Row: {
                    id: string;
                    investor_id: string;
                    project_id: string;
                    units_purchased: number;
                    total_amount: number;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    investor_id: string;
                    project_id: string;
                    units_purchased: number;
                    total_amount: number;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    investor_id?: string;
                    project_id?: string;
                    units_purchased?: number;
                    total_amount?: number;
                    created_at?: string;
                };
            };
        };
    };
}
