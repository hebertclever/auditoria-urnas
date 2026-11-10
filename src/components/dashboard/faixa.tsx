"use client";

import { useState } from "react";
import { BarChart, type Bar } from "@/components/charts/bar-chart";
import { useFmt, useLang } from "@/i18n/context";
import { Panel, Segmented, PanelAudit, SimpleOnly, Legend } from "./ui";
import { deltaPorFaixa2022, historicoInversao, resumoControle, FAIXAS_IDOSOS } from "@/data/cadastro";

type Metric = "delta" | "comp1" | "comp2" | "aptos" | "turn1" | "turn2" | "dpp";
type Year = "2014" | "2018" | "2022";

const ELDER = new Set<string>(FAIXAS_IDOSOS);
const PCT: Metric[] = ["delta", "turn1", "turn2", "dpp"];

export function FaixaExplorer() {
  const { lang, dict } = useLang();
  const { fmtPct, fmtCompact } = useFmt();
  const d = dict.dashboard.faixa;
  const [metric, setMetric] = useState<Metric>("delta");
  const [year, setYear] = useState<Year>("2022");

  const isPct = PCT.includes(metric);
  const histMode = metric === "delta" && year !== "2022";

  let bars: Bar[];
  let highlight: [number, number] | undefined;

  if (histMode) {
    const h = historicoInversao.find((x) => x.ano === year)!;
    bars = h.faixas.map((f) => ({ label: f.faixa, value: f.delta, tone: "amber" }));
  } else {
    const rows = deltaPorFaixa2022;
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
          {metric === "delta" && (
            <Segmented options={[{ key: "2014", label: "2014" }, { key: "2018", label: "2018" }, { key: "2022", label: "2022" }]} value={year} onChange={setYear} />
          )}
          {metric === "delta" && (
            <p className="max-w-[16rem] text-right text-[0.7rem] leading-snug text-fg-3">
              {lang === "pt"
                ? "2026 não entra: o TSE publicou só o 1º turno, e a comparação entre turnos precisa dos dois."
                : "2026 is not included: the TSE published only the 1st round, and the round-to-round comparison needs both."}
            </p>
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
        baseline={metric === "delta" ? resumoControle.mediaDeltaControle2169 : undefined}
        baselineLabel={metric === "delta" ? d.baseline : undefined}
        minZero
        showValues={bars.length <= 12}
        highlightRange={highlight}
      />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Legend items={[{ label: d.legend70, tone: "amber" }, { label: d.legendCtrl, tone: "teal" }]} />
        {histMode && <p className="text-xs text-fg-3">{d.note70}</p>}
      </div>
      <PanelAudit
        titulo={{ pt: "Δ comparecimento 1T→2T por faixa", en: "Δ turnout R1→R2 by age band" }}
        fonte={{ tier: "T0", source: { pt: "TSE · perfil de comparecimento 2014/2018/2022", en: "TSE · turnout profile 2014/2018/2022" }, href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2022" }}
        arquivo="perfil_comparecimento_abstencao_{ano}_BRASIL.csv (latin-1, ';')"
        metodo={{ pt: "Lemos o CSV inteiro, somamos comparecimento por faixa em cada turno e calculamos (2T − 1T) ÷ 1T. O grupo de controle (21–69) fica em +0,05%.", en: "We read the whole CSV, summed turnout per band in each round and computed (R2 − R1) ÷ R1. The control group (21–69) stays at +0.05%." }}
        comando={"df = read_csv(f'perfil_{ano}.csv', sep=';', encoding='latin-1')\ng = df.groupby(['NR_TURNO','CD_FAIXA_ETARIA']).QT_COMPARECIMENTO.sum()\ndelta = (g[2] - g[1]) / g[1] * 100"}
        dados={deltaPorFaixa2022}
      />
    </Panel>
  );
}
