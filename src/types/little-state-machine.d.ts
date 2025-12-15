import 'little-state-machine';

import type { BookingState, SearchState, UserState } from '../utils/updateActions';

declare module 'little-state-machine' {
  interface GlobalState {
    user?: UserState;
    search?: SearchState;
    booking?: BookingState;
    [key: string]: unknown;
  }
}


