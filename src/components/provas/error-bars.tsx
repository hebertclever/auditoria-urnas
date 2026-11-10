"use client";

import { motion } from "motion/react";
import { prova } from "@/data/prova";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { cn } from "@/lib/utils";

const toneBar = { teal: "bg-teal", rose: "bg-rose" } as const;

export function ErrorBars({ measuredLabel, neededLabel }: { measuredLabel: string; neededLabel: string }) {
  const { lang } = useLang();
  const rows = prova.quemErrou.barras;
  const max = Math.max(...rows.map((r) => r.v));
  return (
    <div className="rounded-2xl border border-line bg-bg-elev p-5 sm:p-6">
      <ul className="flex flex-col gap-4">
        {rows.map((r, i) => {
          const w = (r.v / max) * 100;
          const tag = r.tone === "teal" ? measuredLabel : neededLabel;
          return (
            <li key={i}>
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <span className="text-sm leading-snug text-fg-2">{t(r.k, lang)}</span>
                <span className={cn("shrink-0 font-mono text-sm font-semibold tabular", r.tone === "rose" ? "text-rose" : "text-teal")}>
                  {r.v}%
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-bg-sunk">
                <motion.div
                  className={cn("h-full rounded-full", toneBar[r.tone])}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${w}%` }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
                />
              </div>
              <span className="mt-1 inline-block font-mono text-[0.65rem] uppercase tracking-wider text-fg-3">{tag}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
