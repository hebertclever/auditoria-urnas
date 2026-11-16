"use client";

import { ExternalLink, TrendingUp } from "lucide-react";
import { BarChart, type Bar } from "@/components/charts/bar-chart";
import { prova } from "@/data/prova";
import { deltaPorFaixa2026, salto, saltoResumo, FAIXAS_IDOSOS } from "@/data/cadastro";
import { useLang, useFmt } from "@/i18n/context";
import { t } from "@/i18n/config";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";

const IDOSOS = new Set<string>(FAIXAS_IDOSOS);
const RETORNO_FAIXAS = new Set<string>(["60-64", "65-69", ...FAIXAS_IDOSOS]);

export function Estimativa2026() {
  const { lang } = useLang();
  const { fmt, fmtPct, fmtX } = useFmt();
  const e = prova.estimativa2026;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);
  const r26 = saltoResumo["2026"];
  const r22 = saltoResumo["2022"];
  const v = salto.versoes_1t_2026;

  const deltaBars: Bar[] = deltaPorFaixa2026.filter((r) => IDOSOS.has(r.faixa_label)).map((r) => ({ label: r.faixa_label, value: r.delta_pct, tone: "rose" }));
  const retornoBars: Bar[] = salto.retorno_abstencao["2026"]
    .filter((r) => RETORNO_FAIXAS.has(r.faixa))
    .map((r) => ({ label: r.faixa, value: r.retorno_pct, tone: IDOSOS.has(r.faixa) ? "amber" : "teal" }));

  return (
    <div>
      <div className="flex items-start gap-3 rounded-2xl border border-rose/30 bg-rose-soft p-5 sm:p-6">
        <TrendingUp className="mt-0.5 h-6 w-6 shrink-0 text-rose" />
        <p className="text-[0.98rem] leading-relaxed text-fg-2">{L(e.porque)}</p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-1 text-sm font-semibold text-fg">{L(e.deltaTitle)}</h3>
          <BarChart data={deltaBars} height={270} format={(x) => fmtPct(x, 0, true)} minZero showValues />
        </div>
        <div>
          <h3 className="mb-1 text-sm font-semibold text-fg">{L(e.retornoTitle)}</h3>
          <BarChart data={retornoBars} height={270} format={(x) => fmtPct(x, x > 0 && x < 1 ? 1 : 0)} minZero showValues />
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-fg-3">{L(e.turnoutNota)}</p>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Callout tone="rose" title={L(e.resultTitle)}>
          <div className="mb-3 flex flex-wrap items-baseline gap-x-2">
            <span className="display tabular text-3xl font-semibold text-rose sm:text-4xl">+{fmt(r26.delta70_abs)}</span>
            <span className="text-sm text-fg-2">{lang === "pt" ? "comparecimentos de 70+" : "turnouts of 70+"}</span>
          </div>
          <div className="mb-3 flex flex-wrap items-baseline gap-x-2 text-sm text-fg-3">
            <span className="font-mono tabular">2022: +{fmt(r22.delta70_abs)}</span>
            <span>→</span>
            <span className="font-mono tabular font-semibold text-rose">2026: {fmtX(r26.delta70_abs / r22.delta70_abs, 1)}</span>
          </div>
          <p className="text-[0.95rem] leading-relaxed">{L(e.resultTexto)}</p>
        </Callout>
        <Callout tone="amber" title={L(e.leituraTitle)}>
          <p className="text-[0.95rem] leading-relaxed">{L(e.leituraTexto)}</p>
        </Callout>
      </div>

      <div id="duas-versoes" className="mt-8 scroll-mt-28 rounded-3xl border border-line bg-bg-elev p-5 sm:p-7">
        <h3 className="display-md text-xl font-semibold text-fg sm:text-2xl">{L(e.versoesTitle)}</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            { rot: L(e.versoesAntes), n: v.antes.comp_1t, href: v.wayback_antes, tone: "text-fg" },
            { rot: L(e.versoesDepois), n: v.depois.comp_1t, href: v.wayback_depois, tone: "text-rose" },
          ].map((x) => (
            <div key={x.href} className="rounded-2xl border border-line bg-bg p-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-wider text-fg-3">{x.rot}</p>
              <p className={`display tabular mt-1 text-2xl font-semibold sm:text-3xl ${x.tone}`}>{fmt(x.n)}</p>
              <p className="text-xs text-fg-3">{L(e.versoesUnidade)}</p>
              <a href={x.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-9 items-center gap-1.5 text-xs font-medium text-teal hover:underline">
                {L(e.versoesLink)} <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[0.95rem] leading-relaxed text-fg-2">{L(e.versoesTexto)}</p>
      </div>

      <Sources className="mt-6">
        {e.fontes.map((f, i) => (
          <SourceTag key={i} tier={f.tier} source={L(f.source)} date={f.date} href={f.href} />
        ))}
      </Sources>
    </div>
  );
}
