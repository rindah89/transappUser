import React, { createContext, useContext, useMemo, useState } from "react";

// Minimal in-app replacement for the `little-state-machine` package.
// We keep the same public API (`StateMachineProvider`, `useStateMachine`, `GlobalState`)
// so existing imports continue working, while avoiding React peer-dependency conflicts.

export interface GlobalState {
  // Intentionally empty: app-specific keys are added via module augmentation
  // in `src/types/little-state-machine.d.ts`.
}

export type ActionFunction<S extends GlobalState = GlobalState, P = unknown> = (
  state: S,
  payload: P
) => S;

export type ActionsMap<S extends GlobalState = GlobalState> = Record<
  string,
  ActionFunction<S, any>
>;

export type WrappedActions<A extends ActionsMap> = {
  [K in keyof A]: (payload: Parameters<A[K]>[1]) => void;
};

type CtxValue = {
  state: GlobalState;
  setState: React.Dispatch<React.SetStateAction<GlobalState>>;
};

const StateMachineContext = createContext<CtxValue | undefined>(undefined);

export function StateMachineProvider({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: GlobalState;
}) {
  const [state, setState] = useState<GlobalState>(initialState ?? {});

  const value = useMemo(() => ({ state, setState }), [state]);

  return (
    <StateMachineContext.Provider value={value}>
      {children}
    </StateMachineContext.Provider>
  );
}

export function useStateMachine<A extends ActionsMap>(actionsMap?: A): {
  state: GlobalState;
  actions: WrappedActions<A>;
} {
  const ctx = useContext(StateMachineContext);
  if (!ctx) {
    throw new Error("useStateMachine must be used within a StateMachineProvider");
  }

  const { state, setState } = ctx;

  const actions = useMemo(() => {
    const wrapped: Record<string, (payload: unknown) => void> = {};
    if (!actionsMap) return wrapped as WrappedActions<A>;

    for (const [key, reducer] of Object.entries(actionsMap)) {
      wrapped[key] = (payload: unknown) => {
        setState((prev) => reducer(prev, payload));
      };
    }

    return wrapped as WrappedActions<A>;
  }, [actionsMap, setState]);

  return { state, actions };
}


