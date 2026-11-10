"use client";

import { CalendarClock } from "lucide-react";
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

  const bars: Bar[] = e.turnout1T.map((r) => ({ label: r.faixa, value: r.turnout, tone: "amber" }));

  return (
    <div>
      <div className="flex items-start gap-3 rounded-2xl border border-teal/30 bg-teal-soft p-5 sm:p-6">
        <CalendarClock className="mt-0.5 h-6 w-6 shrink-0 text-teal" />
        <p className="text-[0.98rem] leading-relaxed text-fg-2 [&_strong]:font-semibold [&_strong]:text-fg">
          {L(e.porque)}
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h3 className="mb-1 text-sm font-semibold text-fg">
            {lang === "pt" ? "Comparecimento por idade — 1º turno de 2026" : "Turnout by age — 2026 first round"}
          </h3>
          <BarChart
            data={bars}
            height={280}
            format={(v) => fmtPct(v, 0)}
            minZero
            showValues
          />
          <p className="mt-2 text-xs leading-relaxed text-fg-3">{L(e.turnoutNota)}</p>
        </div>
        <div>
          <Callout tone="amber" title={L(e.projTitle)}>
            <div className="mb-3 flex items-baseline gap-2">
              <span className="display tabular text-3xl font-semibold text-amber sm:text-4xl">
                {fmt(e.projMin)}–{fmt(e.projMax)}
              </span>
              <span className="text-sm text-fg-2">{lang === "pt" ? "votos (estimativa)" : "votes (estimate)"}</span>
            </div>
            <p className="text-[0.95rem] leading-relaxed">{L(e.projTexto)}</p>
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
