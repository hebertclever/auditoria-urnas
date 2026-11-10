"use client";

import { FileCheck2, TrendingDown, ShieldCheck } from "lucide-react";
import { prova } from "@/data/prova";
import { useLang, useFmt } from "@/i18n/context";
import { t } from "@/i18n/config";
import { Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { Reveal } from "@/components/ui/reveal";

const icons = [FileCheck2, TrendingDown, ShieldCheck];

export function DatasusConfiabilidade() {
  const { lang } = useLang();
  const { fmt } = useFmt();
  const d = prova.datasus;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full glow-teal blur-3xl" />
      <Eyebrow tone="teal">{L(d.eyebrow)}</Eyebrow>
      <Heading as="h2" className="mt-3">{L(d.title)}</Heading>
      <Lead className="mt-5">{L(d.lead)}</Lead>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {d.stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-line bg-bg-elev p-5">
              <div className="display tabular text-3xl font-semibold text-teal">{L(s.value)}</div>
              <p className="mt-2 text-sm leading-snug text-fg-2">{L(s.label)}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {d.pontos.map((p, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-5">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-soft text-teal">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="font-medium text-fg">{L(p.t)}</p>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-fg-2">{L(p.b)}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-6">
        <div className="rounded-2xl border border-amber/30 bg-amber-soft p-5 sm:p-6">
          <p className="mb-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber">{L(d.concreto.title)}</p>
          <div className="mb-3 flex flex-wrap gap-x-8 gap-y-2">
            {d.concreto.stats.map((s, i) => (
              <div key={i}>
                <span className="display tabular text-2xl font-semibold text-amber sm:text-3xl">{fmt(s.value)}</span>
                <span className="ml-2 text-sm text-fg-2">{L(s.label)}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.98rem] leading-relaxed text-fg-2 [&_strong]:font-semibold [&_strong]:text-fg">{L(d.concreto.text)}</p>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Callout tone="teal" title={lang === "pt" ? "As três réguas, a mesma direção" : "Three yardsticks, one direction"}>
          <p className="text-[1.02rem]">{L(d.verdict)}</p>
        </Callout>
      </Reveal>

      <Sources className="mt-6">
        {d.fontes.map((f, i) => (
          <SourceTag key={i} tier={f.tier} source={L(f.source)} date={f.date} href={f.href} />
        ))}
      </Sources>
    </div>
  );
}
