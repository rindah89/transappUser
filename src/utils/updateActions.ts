import { User } from '../interfaces/user.interface';
import type { GlobalState } from 'little-state-machine';

export interface SearchState {
  from?: string;
  to?: string;
  journeyDate?: string;
  departureTime?: string;
}

export interface BookingState {
  tripId?: number;
  seat?: string;
  [key: string]: unknown;
}

export interface UserState {
  data?: {
    token?: string;
    user?: User;
    [key: string]: unknown;
  } | null;
  [key: string]: unknown;
}

export const updateUser = (state: GlobalState, payload: UserState): GlobalState => {
  return {
    ...state,
    user: payload,
  };
};

export const updateSearch = (state: GlobalState, payload: SearchState): GlobalState => {
  return {
    ...state,
    search: payload,
  };
};

export const updateBooking = (state: GlobalState, payload: BookingState): GlobalState => {
  return {
    ...state,
    booking: payload,
  };
};

export const updateAction = (state: GlobalState, payload: unknown): GlobalState => {
  return {
    ...state,
    ...(payload as Record<string, unknown>),
  };
};

export const updateClient = (state: GlobalState, payload: unknown): GlobalState => {
  return {
    ...state,
    ...(payload as Record<string, unknown>),
  };
};
