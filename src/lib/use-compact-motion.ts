"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 1023px), (pointer: coarse)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** True on phones/tablets and touch screens, where long, sequenced or scroll-synced animation gets in the way of reading. */
export function useCompactMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
