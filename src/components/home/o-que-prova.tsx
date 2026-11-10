"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Section, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Reveal, Stagger, staggerItem } from "@/components/ui/reveal";
import { motion } from "motion/react";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { prova } from "@/data/prova";

export function OQueProva() {
  const { lang } = useLang();
  const h = prova.teaserHome;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);

  return (
    <Section className="border-t border-line">
      <Reveal>
        <Eyebrow tone="amber">{L(h.eyebrow)}</Eyebrow>
        <Heading className="mt-3 max-w-3xl">{L(h.title)}</Heading>
        <Lead className="mt-5">{L(h.lead)}</Lead>
      </Reveal>
      <Stagger className="mt-10 grid gap-3 md:grid-cols-3" gap={0.08}>
        {h.bullets.map((b, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className="flex gap-3 rounded-2xl border border-line bg-bg-elev p-5"
          >
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-soft text-amber">
              <Check className="h-3.5 w-3.5" />
            </span>
            <p className="text-[0.95rem] leading-relaxed text-fg-2 [&_strong]:font-semibold [&_strong]:text-fg">
              {L(b)}
            </p>
          </motion.div>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <Link
          href={href(lang, "/provas/")}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90"
        >
          {L(h.cta)}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </Section>
  );
}
