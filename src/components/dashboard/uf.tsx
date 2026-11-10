"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { BarChart, type Bar } from "@/components/charts/bar-chart";
import { useFmt, useLang } from "@/i18n/context";
import { Panel, Segmented, PanelAudit, SimpleOnly } from "./ui";
import { porUFFaixa, porUFTotais } from "@/data/cadastro";
import { cn } from "@/lib/utils";

type FaixaKey = "70-74" | "75-79" | "80-84" | "85-89" | "90-94" | "95-99" | "100+" | "70+" | "90+" | "95+" | "100++";
type Metric = "aptosCenso" | "compCenso" | "diff" | "comp2t";
type Row = { uf: string; census: number; comp_2t: number; aptos: number };
type SortCol = "uf" | "census" | "aptos" | "comp_2t" | "ratio";

const CUMUL: Record<string, "70+" | "90+" | "95+" | "100+"> = { "70+": "70+", "90+": "90+", "95+": "95+", "100++": "100+" };

export function UFExplorer() {
  const { dict } = useLang();
  const { fmtCompact, loc } = useFmt();
  const d = dict.dashboard.uf;
  const [faixa, setFaixa] = useState<FaixaKey>("70+");
  const [metric, setMetric] = useState<Metric>("aptosCenso");
  const [sort, setSort] = useState<{ col: SortCol; dir: 1 | -1 }>({ col: "ratio", dir: -1 });

  const rows: Row[] = useMemo(() => {
    if (faixa in CUMUL) {
      return porUFTotais[CUMUL[faixa]].map((r) => ({ uf: r.uf, census: r.census, comp_2t: r.comp_2t, aptos: r.aptos }));
    }
    return porUFFaixa.filter((f) => f.faixa === faixa).map((r) => ({ uf: r.uf, census: r.census, comp_2t: r.comp_2t, aptos: r.aptos }));
  }, [faixa]);

  const valueOf = (r: Row) =>
    metric === "aptosCenso" ? r.aptos / r.census :
    metric === "compCenso" ? r.comp_2t / r.census :
    metric === "diff" ? r.aptos - r.census :
    r.comp_2t;

  const isRatio = metric === "aptosCenso" || metric === "compCenso";
  const bars: Bar[] = [...rows]
    .sort((a, b) => valueOf(b) - valueOf(a))
    .map((r) => {
      const v = valueOf(r);
      const flagged = isRatio ? v > 1 : metric === "diff" ? v > 0 : false;
      return { label: r.uf, value: v, tone: flagged ? "amber" : "slate" };
    });

  const nAptos = rows.filter((r) => r.aptos > r.census).length;
  const nComp = rows.filter((r) => r.comp_2t > r.census).length;

  const fmt = isRatio ? (v: number) => v.toLocaleString(loc, { maximumFractionDigits: 2 }) : (v: number) => fmtCompact(v);

  const sorted = useMemo(() => {
    const key = (r: Row): number | string => (sort.col === "uf" ? r.uf : sort.col === "ratio" ? r.aptos / r.census : r[sort.col]);
    return [...rows].sort((a, b) => {
      const ka = key(a), kb = key(b);
      if (typeof ka === "string" && typeof kb === "string") return ka.localeCompare(kb) * sort.dir;
      return ((ka as number) - (kb as number)) * sort.dir;
    });
  }, [rows, sort]);

  const toggleSort = (col: SortCol) => setSort((s) => (s.col === col ? { col, dir: (s.dir * -1) as 1 | -1 } : { col, dir: col === "uf" ? 1 : -1 }));

  const faixaOpts: { key: FaixaKey; label: string }[] = [
    { key: "70-74", label: "70–74" }, { key: "75-79", label: "75–79" }, { key: "80-84", label: "80–84" },
    { key: "85-89", label: "85–89" }, { key: "90-94", label: "90–94" }, { key: "95-99", label: "95–99" }, { key: "100+", label: "100+" },
    { key: "70+", label: "70+" }, { key: "90+", label: "90+" }, { key: "95+", label: "95+" }, { key: "100++", label: "≥100" },
  ];
  const metricOpts: { key: Metric; label: string }[] = [
    { key: "aptosCenso", label: d.metrics.aptosCenso },
    { key: "compCenso", label: d.metrics.compCenso },
    { key: "diff", label: d.metrics.diff },
    { key: "comp2t", label: d.metrics.comp2t },
  ];

  const th = (col: SortCol, label: string) => (
    <th>
      <button type="button" onClick={() => toggleSort(col)} className="inline-flex items-center gap-1 hover:text-fg">
        {label}
        <ArrowUpDown className={cn("h-3 w-3", sort.col === col ? "text-amber" : "text-fg-3")} />
      </button>
    </th>
  );

  return (
    <Panel
      id="uf"
      title={d.title}
      subtitle={d.lead}
      controls={
        <div className="flex flex-col items-end gap-2">
          <Segmented options={metricOpts} value={metric} onChange={setMetric} />
          <Segmented options={faixaOpts} value={faixa} onChange={setFaixa} />
        </div>
      }
    >
      <SimpleOnly>
        <p className="mb-4 text-sm leading-relaxed text-fg-2">{d.simple}</p>
      </SimpleOnly>
      <div className="rounded-2xl border border-amber/20 bg-amber-soft px-4 py-3 text-sm text-fg">
        {d.live.replace("{nA}", String(nAptos)).replace("{nC}", String(nComp))}
      </div>
      <div className="mt-4">
        <BarChart key={`${metric}-${faixa}`} data={bars} height={300} format={fmt} baseline={isRatio ? 1 : undefined} baselineLabel={isRatio ? d.ref : undefined} minZero showValues={false} />
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="data-table w-full min-w-[32rem]">
          <thead>
            <tr>
              {th("uf", d.cols.uf)}
              {th("census", d.cols.censo)}
              {th("aptos", d.cols.aptos)}
              {th("comp_2t", d.cols.comp)}
              {th("ratio", d.cols.ratio)}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r) => {
              const ratio = r.aptos / r.census;
              return (
                <tr key={r.uf}>
                  <td className="font-mono font-medium text-fg">{r.uf}</td>
                  <td className="tabular">{fmtCompact(r.census)}</td>
                  <td className="tabular">{fmtCompact(r.aptos)}</td>
                  <td className="tabular">{fmtCompact(r.comp_2t)}</td>
                  <td className={cn("tabular font-medium", ratio > 1 ? "text-amber" : "text-fg-2")}>{ratio.toLocaleString(loc, { maximumFractionDigits: 2 })}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <PanelAudit
        titulo={{ pt: "Censo × TSE por estado", en: "Census × TSE by state" }}
        fonte={{ tier: "T0", source: { pt: "IBGE Censo 2022 (SIDRA 9514) · TSE comparecimento 2022", en: "IBGE 2022 Census (SIDRA 9514) · TSE turnout 2022" }, href: "https://sidra.ibge.gov.br/tabela/9514" }}
        arquivo="teste1_agregacao_uf.json"
        metodo={{ pt: "Agregamos o Censo e o comparecimento do 2º turno por estado e faixa. Ao subir de município para estado, a migração de domicílio eleitoral se cancela: nenhum estado tem comparecimento acima do Censo.", en: "We aggregated the Census and round-2 turnout by state and band. Moving from municipality to state, electoral-domicile migration cancels out: no state has turnout above the Census." }}
        dados={faixa in CUMUL ? porUFTotais[CUMUL[faixa]] : porUFFaixa.filter((f) => f.faixa === faixa)}
      />
    </Panel>
  );
}
