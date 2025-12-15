import { User } from './user.interface';

export interface AuthState {
  user: User | null;
  token: string;
}

export interface AuthResponse {
  error: boolean;
  message: string;
  data?: User & { token?: string };
}

export type AuthContextType = [AuthState, React.Dispatch<React.SetStateAction<AuthState>>];
