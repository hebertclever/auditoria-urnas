"use client";

import { createContext, useContext, useMemo } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries";
import { makeFormatters } from "@/lib/format";

type Ctx = { lang: Locale; dict: Dictionary };
const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ lang, dict, children }: Ctx & { children: React.ReactNode }) {
  const value = useMemo(() => ({ lang, dict }), [lang, dict]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang(): Ctx {
  const c = useContext(LangCtx);
  if (!c) throw new Error("useLang must be used inside LangProvider");
  return c;
}

export function useFmt() {
  const { lang } = useLang();
  return useMemo(() => makeFormatters(lang), [lang]);
}
