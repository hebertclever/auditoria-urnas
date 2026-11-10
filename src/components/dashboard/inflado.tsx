"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BarChart, type Bar } from "@/components/charts/bar-chart";
import { useFmt, useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { Panel, Segmented, PanelAudit, SimpleOnly, Legend, EquivCallout } from "./ui";
import { comparacoes } from "@/data/comparacoes";
import { fantasmas90, centenarios } from "@/data/cadastro";

export function InfladoPanel() {
  const { lang, dict } = useLang();
  const { fmtCompact, loc } = useFmt();
  const d = dict.dashboard.inflado;
  const [scale, setScale] = useState<"linear" | "log">("linear");

  const pares: Bar[] = fantasmas90.flatMap((r) => [
    { label: `${r.faixa} · TSE`, value: r.aptos, tone: "amber" as const },
    { label: `${r.faixa} · ${d.censo}`, value: r.censo, tone: "teal" as const },
  ]);

  const intl = centenarios.internacionalPor100k;
  const maxIntl = Math.max(...intl.map((x) => x.valor));
  const widthOf = (v: number) => (scale === "log" ? Math.log(v + 1) / Math.log(maxIntl + 1) : v / maxIntl) * 100;

  return (
    <Panel id="inflado" title={d.title} subtitle={d.lead}>
      <SimpleOnly>
        <p className="mb-4 text-sm leading-relaxed text-fg-2">{d.simple}</p>
        <EquivCallout comp={comparacoes.fantasmas90} className="mb-5" />
      </SimpleOnly>

      <h3 className="mb-2 text-sm font-semibold text-fg">{d.pares}</h3>
      <BarChart data={pares} height={300} format={(v) => fmtCompact(v)} minZero showValues labelEvery={1} />
      <div className="mt-3">
        <Legend items={[{ label: "TSE (aptos)", tone: "amber" }, { label: d.censo, tone: "teal" }]} />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-fg">{d.intl}</h3>
        <Segmented options={[{ key: "linear", label: d.linear }, { key: "log", label: d.log }]} value={scale} onChange={setScale} />
      </div>
      <ul key={scale} className="mt-4 space-y-2.5">
        {intl.map((row, i) => {
          const brasilTSE = i === intl.length - 1;
          return (
            <li key={i} className="grid grid-cols-[minmax(7rem,9rem)_1fr_auto] items-center gap-3">
              <span className="truncate text-sm text-fg-2">{t(row.pais, lang)}</span>
              <div className="h-3 overflow-hidden rounded-full bg-bg-sunk">
                <motion.div
                  className={brasilTSE ? "h-full rounded-full bg-amber" : "h-full rounded-full bg-slate"}
                  initial={{ width: 0 }}
                  animate={{ width: `${widthOf(row.valor)}%` }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                />
              </div>
              <span className="w-12 text-right font-mono tabular text-sm text-fg">{row.valor.toLocaleString(loc, { maximumFractionDigits: 1 })}</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 font-mono text-xs text-fg-3">{d.por100k}</p>

      <PanelAudit
        titulo={{ pt: "Cadastro inflado 90+ e centenários", en: "Inflated registry 90+ and centenarians" }}
        fonte={{ tier: "T0", source: { pt: "IBGE Censo 2022 · TSE perfil 2022/2026 · ONU WPP", en: "IBGE 2022 Census · TSE profile 2022/2026 · UN WPP" }, href: "https://sidra.ibge.gov.br/tabela/9514" }}
        metodo={{ pt: "Para cada faixa 90+ comparamos aptos do TSE com os vivos do Censo. A diferença (608.394 no total 90+) é o excedente. Por 100 mil habitantes, o cadastro do TSE supera qualquer país.", en: "For each 90+ band we compare TSE voters with Census living. The difference (608,394 total for 90+) is the excess. Per 100,000 inhabitants, the TSE registry beats any country." }}
        dados={{ fantasmas90, por100k: intl.map((x) => ({ pais: x.pais.pt, valor: x.valor })) }}
      />
    </Panel>
  );
}
