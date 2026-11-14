"use client";

import { TrendingUp } from "lucide-react";
import { BarChart, type Bar } from "@/components/charts/bar-chart";
import { prova } from "@/data/prova";
import { useLang, useFmt } from "@/i18n/context";
import { t } from "@/i18n/config";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";

export function Estimativa2026() {
  const { lang } = useLang();
  const { fmt, fmtPct } = useFmt();
  const e = prova.estimativa2026;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);

  const deltaBars: Bar[] = e.turnout.map((r) => {
    const pct = r.turnout1T > 0 ? ((r.comp2T - r.comp1T) / r.comp1T) * 100 : 0;
    return { label: r.faixa, value: +pct.toFixed(1), tone: "rose" };
  });

  return (
    <div>
      <div className="flex items-start gap-3 rounded-2xl border border-rose/30 bg-rose-soft p-5 sm:p-6">
        <TrendingUp className="mt-0.5 h-6 w-6 shrink-0 text-rose" />
        <p className="text-[0.98rem] leading-relaxed text-fg-2 [&_strong]:font-semibold [&_strong]:text-fg">
          {L(e.porque)}
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h3 className="mb-1 text-sm font-semibold text-fg">
            {lang === "pt"
              ? "Aumento do comparecimento 1T → 2T por faixa — 2026"
              : "Turnout increase R1 → R2 by age band — 2026"}
          </h3>
          <BarChart
            data={deltaBars}
            height={280}
            format={(v) => `+${fmtPct(v, 0)}`}
            minZero
            showValues
          />
          <p className="mt-2 text-xs leading-relaxed text-fg-3">{L(e.turnoutNota)}</p>
        </div>
        <div>
          <Callout tone="rose" title={L(e.resultTitle)}>
            <div className="mb-3 flex items-baseline gap-2">
              <span className="display tabular text-3xl font-semibold text-rose sm:text-4xl">
                +{fmt(e.salto70mais2026)}
              </span>
              <span className="text-sm text-fg-2">{lang === "pt" ? "votos 70+" : "votes 70+"}</span>
            </div>
            <div className="mb-3 flex items-baseline gap-2 text-sm text-fg-3">
              <span className="font-mono tabular">2022: +{fmt(e.salto70mais2022)}</span>
              <span>→</span>
              <span className="font-mono tabular font-semibold text-rose">
                2026: {(e.salto70mais2026 / e.salto70mais2022).toFixed(1)}×
              </span>
            </div>
            <p className="text-[0.95rem] leading-relaxed">{L(e.resultTexto)}</p>
          </Callout>
        </div>
      </div>

      <Sources className="mt-6">
        {e.fontes.map((f, i) => (
          <SourceTag key={i} tier={f.tier} source={L(f.source)} date={f.date} href={f.href} />
        ))}
      </Sources>
    </div>
  );
}
