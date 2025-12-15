'use client'

import { useState, useEffect, useRef, createContext, useContext, ReactNode } from "react";
import axios from "axios";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../utils/updateActions";
import { AuthState, AuthContextType } from "../interfaces/auth.interface";
import { supabase } from "@databases/supabase";
import type { User } from "@interfaces/user.interface";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook to provide access to context object
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { state, actions } = useStateMachine({ updateUser });
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    token: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const tokenRef = useRef<string>('');

  // Keep a fast in-memory token for axios so requests don't await session reads.
  useEffect(() => {
    tokenRef.current = auth.token || '';
  }, [auth.token]);

  // Configure axios + add ONE interceptor (avoid stacking interceptors on every render).
  useEffect(() => {
    // config axios - use relative URLs for Next.js API routes (proxy pattern)
    // If NEXT_PUBLIC_API_URL is set, use it (for external API), otherwise use relative URLs
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    axios.defaults.baseURL = API_BASE_URL || '';

    const interceptorId = axios.interceptors.request.use(
      (config) => {
        if (typeof window === 'undefined') return config;

        // Preferred: in-memory token populated from auth state
        const tokenFromState = tokenRef.current;
        if (tokenFromState) {
          config.headers.Authorization = `Bearer ${tokenFromState}`;
          return config;
        }

        // Fallback to localStorage for backward compatibility
        try {
          const authClient = localStorage.getItem('authClient');
          if (authClient) {
            const parsed = JSON.parse(authClient);
            const token = parsed?.token || parsed?.data?.token || state.user?.data?.token;
            if (token) {
              config.headers.Authorization = `Bearer ${token}`;
            }
          } else if (state.user?.data?.token) {
            config.headers.Authorization = `Bearer ${state.user.data.token}`;
          }
        } catch {
          // Ignore parse errors
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axios.interceptors.request.eject(interceptorId);
    };
  }, [state.user?.data?.token]);

  // Initialize auth state from Supabase session
  useEffect(() => {
    const initializeAuth = async () => {
      if (typeof window === 'undefined') {
        setLoading(false);
        return;
      }

      const hydrateFromLocalStorage = () => {
        const authData = localStorage.getItem('authClient');
        if (!authData) return;
        try {
          const parsed = JSON.parse(authData) as Partial<AuthState> & {
            data?: { token?: string };
          };

          // Support both shapes:
          // - { user, token } (preferred)
          // - legacy shapes that may include { data: { token } }
          const token = (parsed as any)?.token || (parsed as any)?.data?.token || '';
          const user = (parsed as any)?.user || (parsed as any)?.data || null;

          if (user && token) {
            const nextAuth: AuthState = { user: user as User, token };
            setAuth(nextAuth);
            tokenRef.current = token;
            actions.updateUser({
              data: {
                ...(user as User),
                token,
              },
            });
          } else {
            // If we can't normalize it, still keep it in auth state for backward compatibility.
            setAuth(parsed as AuthState);
          }
        } catch {
          // Ignore parse errors
        }
      };

      try {
        if (!supabase) {
          // Fallback to localStorage if Supabase client isn't configured
          hydrateFromLocalStorage();
          return;
        }

        // Get current Supabase session
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (session && !error) {
          const authId = session.user.id;
          if (!authId) {
            // If we can't resolve the app user without an auth id, fall back to local storage.
            const authData = localStorage.getItem('authClient');
            if (authData) {
              try {
                const parsed = JSON.parse(authData);
                setAuth(parsed);
              } catch {
                // Ignore parse errors
              }
            }
            return;
          }

          // Get user data from users table (by auth_id to match RLS)
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('auth_id', authId)
            .single();

          if (userData && !userError) {
            const authState: AuthState = {
              user: userData as User,
              token: session.access_token,
            };
            setAuth(authState);
            tokenRef.current = session.access_token;
            
            // Also update state machine for backward compatibility
            actions.updateUser({
              data: {
                ...userData,
                token: session.access_token,
              },
            });

            // Store in localStorage for backward compatibility
            localStorage.setItem('authClient', JSON.stringify(authState));
          }
        } else {
          // Fallback to localStorage for backward compatibility
          hydrateFromLocalStorage();
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth state changes
    const sb = supabase;
    if (!sb) {
      return;
    }

    const { data: { subscription } } = sb.auth.onAuthStateChange(
      async (_event, session) => {
        if (session) {
          const authId = session.user.id;
          if (!authId) return;

          // Get user data from users table (by auth_id to match RLS)
          const { data: userData } = await sb.from('users').select('*').eq('auth_id', authId).single();

          if (userData) {
            const authState: AuthState = {
              user: userData as User,
              token: session.access_token,
            };
            setAuth(authState);
            tokenRef.current = session.access_token;
            actions.updateUser({
              data: {
                ...userData,
                token: session.access_token,
              },
            });
            localStorage.setItem('authClient', JSON.stringify(authState));
          }
        } else {
          // User signed out from Supabase client.
          // If we have a token-based authClient in localStorage (cookie-based / API-login flow),
          // do NOT wipe it here (otherwise users appear logged out after refresh).
          if (typeof window !== 'undefined') {
            const existing = localStorage.getItem('authClient');
            if (existing) {
              try {
                const parsed = JSON.parse(existing) as any;
                const token = parsed?.token || parsed?.data?.token;
                const user = parsed?.user || parsed?.data;
                if (token && user) {
                  setAuth({ user, token });
                  actions.updateUser({ data: { ...user, token } });
                  return;
                }
              } catch {
                // ignore
              }
            }
          }

          setAuth({ user: null, token: "" });
          tokenRef.current = '';
          actions.updateUser({ data: null });
          localStorage.removeItem('authClient');
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [actions]);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <p>Loading...</p>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
