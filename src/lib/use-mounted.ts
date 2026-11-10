"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** Returns false during SSR and the first client render, then true. Lint-clean (no effect). */
export function useMounted(): boolean {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}
