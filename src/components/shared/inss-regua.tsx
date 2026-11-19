"use client";

import { Wallet, AlertTriangle, Scale } from "lucide-react";
import { prova } from "@/data/prova";
import { centenarios, inss } from "@/data/cadastro";
import { useLang, useFmt } from "@/i18n/context";
import { t } from "@/i18n/config";
import { Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { Reveal } from "@/components/ui/reveal";
import { BarChart, type Bar } from "@/components/charts/bar-chart";

const icons = [Wallet, AlertTriangle, Scale];

export function InssRegua() {
  const { lang } = useLang();
  const { fmt } = useFmt();
  const d = prova.inss;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);

  const contagens: Bar[] = [
    { label: lang === "pt" ? "Censo IBGE (vivos)" : "IBGE Census (alive)", value: centenarios.censo2022, tone: "teal" },
    { label: lang === "pt" ? "INSS (benefícios)" : "INSS (benefits)", value: inss.centenariosBeneficios, tone: "slate" },
    { label: lang === "pt" ? "TSE (títulos)" : "TSE (registrations)", value: centenarios.tse2026Aptos100, tone: "amber" },
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute right-0 top-10 -z-10 h-72 w-72 rounded-full glow-amber blur-3xl lg:-right-24" />
      <Eyebrow tone="amber">{L(d.eyebrow)}</Eyebrow>
      <Heading as="h2" className="mt-3">{L(d.title)}</Heading>
      <Lead className="mt-5">{L(d.lead)}</Lead>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {d.stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-line bg-bg-elev p-5">
              <div className="display tabular text-3xl font-semibold text-amber">{L(s.value)}</div>
              <p className="mt-2 text-sm leading-snug text-fg-2">{L(s.label)}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <div className="rounded-2xl border border-line bg-bg-elev p-4 sm:p-5">
          <h3 className="mb-1 text-sm font-semibold text-fg">
            {lang === "pt" ? "Pessoas com 100 anos ou mais, segundo três réguas do Estado" : "People aged 100 or over, by three of the State's yardsticks"}
          </h3>
          <p className="mb-2 text-xs text-fg-3">
            {lang === "pt"
              ? "Censo 2022 (contagem porta a porta) · INSS set/2026 (benefícios pagos) · TSE 2026 (títulos aptos, 27 UFs)."
              : "2022 Census (door-to-door count) · INSS Sep 2026 (benefits paid) · TSE 2026 (eligible registrations, 27 states)."}
          </p>
          <BarChart data={contagens} height={240} format={(v) => fmt(v)} minZero showValues />
        </div>
      </Reveal>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {d.pontos.map((p, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-5">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-soft text-amber">
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
          <p className="mb-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber">{L(d.analogia.title)}</p>
          <p className="text-[0.98rem] leading-relaxed text-fg-2">{L(d.analogia.text)}</p>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Callout tone="amber" title={lang === "pt" ? "As quatro réguas, a mesma direção" : "Four yardsticks, one direction"}>
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
