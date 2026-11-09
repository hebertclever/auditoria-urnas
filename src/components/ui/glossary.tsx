"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/context";
import type { CommonDict } from "@/i18n/dictionaries/common";

export type GlossaryKey = keyof CommonDict["glossary"];

export function Term({ k, children, className }: { k: GlossaryKey; children?: React.ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const { dict } = useLang();
  const g = dict.common.glossary[k];
  return (
    <span className="relative inline-block">
      <button
        type="button"
        aria-describedby={id}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setOpen(false)}
        className={cn("cursor-help rounded-sm border-b border-dotted border-amber/70 text-fg transition hover:border-amber", className)}
      >
        {children ?? g.term}
      </button>
      <span
        id={id}
        role="tooltip"
        className={cn(
          "pointer-events-none absolute left-1/2 top-full z-40 mt-2 w-72 -translate-x-1/2 rounded-xl border border-line-strong bg-bg-elev p-3 text-left text-sm font-normal leading-relaxed text-fg-2 shadow-2xl transition",
          open ? "opacity-100" : "opacity-0",
        )}
      >
        <span className="mb-1 block font-mono text-[0.65rem] uppercase tracking-widest text-amber">{g.term}</span>
        {g.def}
      </span>
    </span>
  );
}
