"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Users, FileCode2 } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/ui/section";
import { useLang } from "@/i18n/context";
import { href } from "@/i18n/routes";
import { cn } from "@/lib/utils";

const spring = { type: "spring", stiffness: 320, damping: 26 } as const;

export function Eixos() {
  const { lang, dict } = useLang();
  const e = dict.home.eixos;
  const cards = [
    { ...e.cadastro, href: href(lang, "/cadastro/"), tone: "amber" as const, Icon: Users },
    { ...e.codigo, href: href(lang, "/codigo/"), tone: "rose" as const, Icon: FileCode2 },
  ];
  return (
    <Section>
      <Eyebrow>{e.eyebrow}</Eyebrow>
      <Heading className="mt-3">{e.title}</Heading>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {cards.map((c) => (
          <motion.div key={c.title} whileHover={{ y: -4 }} transition={spring} className="h-full">
            <Link
              href={c.href}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-bg-elev p-6 transition sm:p-9",
                // Touch screens have no hover: the card answers the finger instead, and the glow is simply there.
                "active:scale-[0.985]",
                c.tone === "amber" ? "hover:border-amber/50 active:border-amber/60" : "hover:border-rose/50 active:border-rose/60",
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100 pointer-coarse:opacity-70",
                  c.tone === "amber" ? "glow-amber" : "bg-[radial-gradient(closest-side,var(--rose-soft),transparent)]",
                )}
              />
              <div className="flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "inline-flex h-11 w-11 items-center justify-center rounded-2xl border",
                    c.tone === "amber" ? "border-amber/30 bg-amber-soft text-amber" : "border-rose/30 bg-rose-soft text-rose",
                  )}
                >
                  <c.Icon className="h-5 w-5" />
                </span>
                <motion.span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg-3 transition-colors group-hover:border-fg group-hover:text-fg"
                  whileHover={{ rotate: 45 }}
                  transition={spring}
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.span>
              </div>
              <h3 className="display-md mt-6 text-2xl font-semibold sm:text-3xl">{c.title}</h3>
              <p className="mt-3 max-w-prose text-[0.98rem] leading-relaxed text-fg-2">{c.desc}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {c.bullets.map((bl, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-fg-2">
                    <span className={cn("mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full", c.tone === "amber" ? "bg-amber" : "bg-rose")} />
                    {bl}
                  </li>
                ))}
              </ul>
              <span className={cn("mt-8 inline-flex items-center gap-2 text-sm font-semibold", c.tone === "amber" ? "text-amber" : "text-rose")}>
                {c.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
