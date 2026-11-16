"use client";

import { useState } from "react";
import { BarChart, type Bar } from "@/components/charts/bar-chart";
import { useFmt, useLang } from "@/i18n/context";
import { Panel, Segmented, PanelAudit, SimpleOnly, Legend } from "./ui";
import { deltaPorFaixa, historicoInversao, saltoResumo, FAIXAS_IDOSOS, type AnoTurnos } from "@/data/cadastro";

type Metric = "delta" | "comp1" | "comp2" | "aptos" | "turn1" | "turn2" | "dpp";
type Year = "2014" | "2018" | "2022" | "2026";

const ELDER = new Set<string>(FAIXAS_IDOSOS);
const PCT: Metric[] = ["delta", "turn1", "turn2", "dpp"];

export function FaixaExplorer() {
  const { dict } = useLang();
  const { fmtPct, fmtCompact } = useFmt();
  const d = dict.dashboard.faixa;
  const [metric, setMetric] = useState<Metric>("delta");
  const [year, setYear] = useState<Year>("2026");

  const isPct = PCT.includes(metric);
  // 2014 e 2018 só têm as faixas 70+ e só para o aumento entre turnos; as demais métricas valem para 2022 e 2026.
  const histMode = metric === "delta" && (year === "2014" || year === "2018");
  const fullYear: AnoTurnos = year === "2022" ? "2022" : "2026";
  const base = saltoResumo[fullYear].media_controle_2169;

  let bars: Bar[];
  let highlight: [number, number] | undefined;

  if (histMode) {
    const h = historicoInversao.find((x) => x.ano === year)!;
    bars = h.faixas.map((f) => ({ label: f.faixa, value: f.delta, tone: "amber" }));
  } else {
    const rows = deltaPorFaixa[fullYear];
    bars = rows.map((r) => {
      const elder = ELDER.has(r.faixa_label);
      const value =
        metric === "delta" ? r.delta_pct :
        metric === "comp1" ? r.comp_1t :
        metric === "comp2" ? r.comp_2t :
        metric === "aptos" ? r.aptos_1t :
        metric === "turn1" ? r.turnout_1t_pct :
        metric === "turn2" ? r.turnout_2t_pct :
        r.delta_turnout_pp;
      return { label: r.faixa_label, value, tone: elder ? "amber" : "teal" };
    });
    const idx = bars.map((b, i) => (ELDER.has(b.label) ? i : -1)).filter((i) => i >= 0);
    if (idx.length) highlight = [idx[0], idx[idx.length - 1]];
  }

  const fmt = isPct ? (v: number) => fmtPct(v, 1) : (v: number) => fmtCompact(v);

  const metricOpts: { key: Metric; label: string }[] = [
    { key: "delta", label: d.metrics.delta },
    { key: "comp1", label: d.metrics.comp1 },
    { key: "comp2", label: d.metrics.comp2 },
    { key: "aptos", label: d.metrics.aptos },
    { key: "turn1", label: d.metrics.turn1 },
    { key: "turn2", label: d.metrics.turn2 },
    { key: "dpp", label: d.metrics.dpp },
  ];

  return (
    <Panel
      id="faixa"
      title={d.title}
      subtitle={d.lead}
      controls={
        <div className="flex flex-col items-end gap-2">
          <Segmented options={metricOpts} value={metric} onChange={setMetric} />
          {metric === "delta" ? (
            <Segmented options={[{ key: "2014", label: "2014" }, { key: "2018", label: "2018" }, { key: "2022", label: "2022" }, { key: "2026", label: "2026" }]} value={year} onChange={setYear} />
          ) : (
            <Segmented options={[{ key: "2022", label: "2022" }, { key: "2026", label: "2026" }]} value={fullYear} onChange={setYear} />
          )}
        </div>
      }
    >
      <SimpleOnly>
        <p className="mb-4 text-sm leading-relaxed text-fg-2">{d.simple}</p>
      </SimpleOnly>
      <BarChart
        key={`${metric}-${year}`}
        data={bars}
        height={360}
        format={fmt}
        baseline={metric === "delta" && !histMode ? base : undefined}
        minZero
        showValues={bars.length <= 12}
        highlightRange={highlight}
      />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Legend items={[{ label: d.legend70, tone: "amber" }, { label: d.legendCtrl, tone: "teal" }]} />
        {histMode && <p className="text-xs text-fg-3">{d.note70}</p>}
        {metric === "delta" && !histMode && <p className="font-mono text-xs text-teal">- - - {d.baseline} {fmtPct(base, 2, true)}</p>}
      </div>
      <PanelAudit
        titulo={{ pt: "Δ comparecimento 1T→2T por faixa", en: "Δ turnout R1→R2 by age band" }}
        fonte={{ tier: "T0", source: { pt: "TSE · perfil de comparecimento 2014/2018/2022/2026", en: "TSE · turnout profile 2014/2018/2022/2026" }, href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2026" }}
        arquivo="perfil_comparecimento_abstencao_{ano}_BRASIL.csv (latin-1, ';')"
        metodo={{ pt: "Lemos o CSV inteiro, somamos comparecimento por faixa em cada turno e calculamos (2T − 1T) ÷ 1T. A média das faixas de 21 a 69 anos é +0,05% em 2022 e +1,51% em 2026.", en: "We read the whole CSV, summed turnout per band in each round and computed (R2 − R1) ÷ R1. The average of the 21-to-69 bands is +0.05% in 2022 and +1.51% in 2026." }}
        comando={"df = read_csv(f'perfil_{ano}.csv', sep=';', encoding='latin-1')\ng = df.groupby(['NR_TURNO','CD_FAIXA_ETARIA']).QT_COMPARECIMENTO.sum()\ndelta = (g[2] - g[1]) / g[1] * 100"}
        dados={histMode ? historicoInversao.find((x) => x.ano === year)!.faixas : deltaPorFaixa[fullYear]}
      />
    </Panel>
  );
}
