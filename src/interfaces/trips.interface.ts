import { Database } from '../types/database.types';

export type Trip = Database['public']['Tables']['trips']['Row'];
export type TripInsert = Database['public']['Tables']['trips']['Insert'];
export type TripUpdate = Database['public']['Tables']['trips']['Update'];
