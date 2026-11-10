"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MagnitudeFunnel } from "@/components/provas/magnitude";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { prova } from "@/data/prova";

export function MagnitudeBand() {
  const { lang } = useLang();
  const m = prova.magnitude;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);
  return (
    <Section className="border-t border-line">
      <Reveal>
        <Eyebrow tone="rose">{L(m.eyebrow)}</Eyebrow>
        <Heading className="mt-3 max-w-3xl">{L(m.title)}</Heading>
        <Lead className="mt-5">{L(m.lead)}</Lead>
      </Reveal>
      <div className="mt-10">
        <MagnitudeFunnel compact />
      </div>
      <Reveal delay={0.1}>
        <Link
          href={href(lang, "/provas/")}
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-rose"
        >
          {lang === "pt" ? "Ver a conta completa e os sinais de uso" : "See the full count and the signs of use"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </Section>
  );
}
