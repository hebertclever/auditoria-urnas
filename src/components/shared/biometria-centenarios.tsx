"use client";

import { prova } from "@/data/prova";
import { perfilEleitorado } from "@/data/cadastro";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { Reveal } from "@/components/ui/reveal";
import { BarChart, type Bar } from "@/components/charts/bar-chart";
import { Legend } from "@/components/dashboard/ui";

export function BiometriaCentenarios() {
  const { lang } = useLang();
  const d = prova.biometria;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);
  const loc = lang === "pt" ? "pt-BR" : "en-US";
  const pct = (v: number) => `${v.toLocaleString(loc, { maximumFractionDigits: 1 })}%`;
  const faixas = perfilEleitorado.biometria.faixas;

  const cobertura: Bar[] = faixas.flatMap((f) => [
    { label: f.faixa, value: f.r2022, tone: "slate" as const },
    { label: `${f.faixa} · 2026`, value: f.r2026, tone: f.faixa === "100+" ? ("amber" as const) : ("teal" as const) },
  ]);
  const variacao: Bar[] = faixas.map((f) => {
    const v = Math.round((f.sem2026 / f.sem2022 - 1) * 1000) / 10;
    return { label: f.faixa, value: v, tone: v > 0 ? "amber" : "teal" };
  });

  return (
    <div className="relative">
      <Eyebrow tone="teal">{L(d.eyebrow)}</Eyebrow>
      <Heading as="h2" className="mt-3">{L(d.title)}</Heading>
      <Lead className="mt-5">{L(d.lead)}</Lead>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-line bg-bg-elev p-4 sm:p-5">
            <h3 className="mb-2 text-sm font-semibold text-fg">{L(d.coberturaTitle)}</h3>
            <BarChart data={cobertura} height={280} format={pct} minZero showValues={false} labelEvery={2} />
            <div className="mt-3">
              <Legend items={[{ label: "2022", tone: "slate" }, { label: "2026", tone: "teal" }, { label: lang === "pt" ? "100+ em 2026" : "100+ in 2026", tone: "amber" }]} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-line bg-bg-elev p-4 sm:p-5">
            <h3 className="mb-2 text-sm font-semibold text-fg">{L(d.semTitle)}</h3>
            <BarChart data={variacao} height={280} format={(v) => `${v > 0 ? "+" : ""}${pct(v)}`} showValues />
          </div>
        </Reveal>
      </div>
      <p className="mt-3 text-xs text-fg-3">{L(d.nota)}</p>

      <Reveal className="mt-6">
        <div className="rounded-2xl border border-teal/30 bg-teal-soft p-5 sm:p-6">
          <p className="mb-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal">{L(d.analogia.title)}</p>
          <p className="text-[0.98rem] leading-relaxed text-fg-2">{L(d.analogia.text)}</p>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Callout tone="teal" title={lang === "pt" ? "O título que ninguém atualiza" : "The registration nobody updates"}>
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
