"use client";

import { motion } from "motion/react";
import { Section, Eyebrow, Heading } from "@/components/ui/section";
import { Stagger, staggerItem } from "@/components/ui/reveal";
import { useLang } from "@/i18n/context";
import { cn } from "@/lib/utils";

const tierTone: Record<string, string> = {
  T0: "border-teal/40 text-teal bg-teal-soft",
  T1: "border-amber/40 text-amber bg-amber-soft",
  T2: "border-line-strong text-fg-2 bg-bg-sunk",
  T3: "border-rose/40 text-rose bg-rose-soft",
};

export function ComoLer() {
  const { dict } = useLang();
  const c = dict.home.comoLer;
  return (
    <Section className="border-t border-line">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <Heading className="mt-3">{c.title}</Heading>
      <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
        {c.cols.map((col, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className="flex flex-col rounded-3xl border border-line bg-bg-elev p-6 sm:p-7"
          >
            <span className="font-mono text-xs tabular text-fg-3">0{i + 1}</span>
            <h3 className="display-md mt-3 text-xl font-semibold">{col.title}</h3>
            <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-fg-2">{col.body}</p>
            {i === 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {c.tiers.map((tr) => (
                  <span
                    key={tr.k}
                    className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs", tierTone[tr.k])}
                  >
                    <span className="font-mono font-semibold">{tr.k}</span>
                    <span className="opacity-80">{tr.label}</span>
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </Stagger>
    </Section>
  );
}
