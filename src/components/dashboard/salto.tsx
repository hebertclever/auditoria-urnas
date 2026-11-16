"use client";

import { useMemo, useState } from "react";
import { BarChart, type Bar } from "@/components/charts/bar-chart";
import { useFmt, useLang } from "@/i18n/context";
import { Panel, Segmented, PanelAudit, SimpleOnly } from "./ui";
import { salto, type AnoTurnos } from "@/data/cadastro";
import { cn } from "@/lib/utils";

type Metric = "pct70" | "pctLt70" | "abs70";

/** Salto do comparecimento dos 70+ entre o 1º e o 2º turno, por estado e por município (2022 e 2026). */
export function SaltoPanel() {
  const { dict } = useLang();
  const { fmtPct, fmtCompact, fmtInt } = useFmt();
  const d = dict.dashboard.salto;
  const [year, setYear] = useState<AnoTurnos>("2026");
  const [metric, setMetric] = useState<Metric>("pct70");

  const rows = salto.por_uf[year];
  const mun = salto.municipal[year];
  const valueOf = (r: (typeof rows)[number]) => (metric === "pct70" ? r.delta70_pct : metric === "pctLt70" ? r.delta_lt70_pct : r.delta70_abs);
  const bars: Bar[] = useMemo(
    () =>
      [...rows]
        .sort((a, b) => valueOf(b) - valueOf(a))
        .map((r) => ({ label: r.uf, value: valueOf(r), tone: metric === "pctLt70" ? "teal" : valueOf(r) > 0 ? "amber" : "slate" })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rows, metric],
  );
  const nPos = rows.filter((r) => r.delta70_abs > 0).length;
  const nMaior = rows.filter((r) => r.delta70_pct > r.delta_lt70_pct).length;
  const fmt = metric === "abs70" ? (v: number) => fmtCompact(v) : (v: number) => fmtPct(v, 0, true);

  const metricOpts: { key: Metric; label: string }[] = [
    { key: "pct70", label: d.metrics.pct70 },
    { key: "pctLt70", label: d.metrics.pctLt70 },
    { key: "abs70", label: d.metrics.abs70 },
  ];

  return (
    <Panel
      id="salto"
      title={d.title}
      subtitle={d.lead}
      controls={
        <div className="flex flex-col items-end gap-2">
          <Segmented options={metricOpts} value={metric} onChange={setMetric} />
          <Segmented options={[{ key: "2022", label: "2022" }, { key: "2026", label: "2026" }]} value={year} onChange={setYear} />
        </div>
      }
    >
      <SimpleOnly>
        <p className="mb-4 text-sm leading-relaxed text-fg-2">{d.simple}</p>
      </SimpleOnly>
      <div className="rounded-2xl border border-amber/20 bg-amber-soft px-4 py-3 text-sm text-fg">
        {d.live.replace("{ano}", year).replace("{nPos}", String(nPos)).replace("{nMaior}", String(nMaior))}
      </div>
      <div className="mt-4">
        <BarChart key={`${metric}-${year}`} data={bars} height={300} format={fmt} minZero showValues={false} />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-fg-2">
        {d.mun
          .replace("{ano}", year)
          .replace("{pos}", fmtInt(mun.com_salto_70_positivo))
          .replace("{total}", fmtInt(mun.municipios))
          .replace("{mediana}", fmtPct(mun.mediana_d70_pct, 1, true))
          .replace("{medianaLt}", fmtPct(mun.mediana_dlt70_pct, 1, true))}
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="data-table w-full min-w-[34rem]">
          <thead>
            <tr>
              <th>{d.cols.mun}</th>
              <th>{d.cols.uf}</th>
              <th>{d.cols.t1}</th>
              <th>{d.cols.t2}</th>
              <th>{d.cols.dif}</th>
              <th>{d.cols.pct}</th>
              <th>{d.cols.pctLt}</th>
            </tr>
          </thead>
          <tbody>
            {mun.top_abs.slice(0, 10).map((r) => (
              <tr key={`${r.uf}-${r.municipio}`}>
                <td className="whitespace-nowrap font-medium text-fg">{r.municipio}</td>
                <td className="font-mono">{r.uf}</td>
                <td className="tabular">{fmtInt(r.comp70_1t)}</td>
                <td className="tabular">{fmtInt(r.comp70_2t)}</td>
                <td className="tabular font-medium text-amber">+{fmtInt(r.d70_abs)}</td>
                <td className={cn("tabular font-medium", "text-amber")}>{fmtPct(r.d70_pct, 1, true)}</td>
                <td className="tabular text-fg-2">{fmtPct(r.dlt70_pct, 1, true)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PanelAudit
        titulo={{ pt: "Salto dos 70+ por estado e município", en: "70+ jump by state and municipality" }}
        fonte={{ tier: "T0", source: { pt: "TSE · perfil de comparecimento 2022 e 2026 (dois turnos)", en: "TSE · turnout profile 2022 and 2026 (both rounds)" }, href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2026" }}
        arquivo="perfil_comparecimento_abstencao_{ano}_BRASIL.csv · salto_2t_2026.json"
        metodo={{
          pt: "Somamos o comparecimento das faixas de 70 anos ou mais e das demais, por UF e por município, em cada turno. Variação = (2º − 1º) ÷ 1º. O exterior (ZZ) fica fora desta tabela.",
          en: "We summed turnout of the 70+ groups and of the others, by state and by municipality, in each round. Change = (R2 − R1) ÷ R1. Voters abroad (ZZ) are left out of this table.",
        }}
        comando={"g = df.groupby(['NR_TURNO','SG_UF', df.DS_FAIXA_ETARIA.isin(FAIXAS_70)]).QT_COMPARECIMENTO.sum()\ndelta = (g[2] - g[1]) / g[1] * 100"}
        dados={rows}
      />
    </Panel>
  );
}
