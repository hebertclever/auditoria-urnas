"use client";

import { useState } from "react";
import { scaleLinear } from "d3-scale";
import { motion } from "motion/react";
import { useFmt, useLang } from "@/i18n/context";
import { useMeasure } from "@/components/charts/use-measure";
import { Panel, PanelAudit, SimpleOnly, EquivCallout, Legend } from "./ui";
import { comparacoes } from "@/data/comparacoes";
import { municipios } from "@/data/cadastro";

export function MunicipiosPanel() {
  const { dict } = useLang();
  const { fmt, loc } = useFmt();
  const d = dict.dashboard.mun;
  const [margin, setMargin] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const data = municipios.top20;
  const height = 380;
  const m = { top: 16, right: 16, bottom: 44, left: 52 };
  const w = Math.max(width, 10);
  const iw = Math.max(w - m.left - m.right, 10);
  const ih = height - m.top - m.bottom;
  const maxAxis = Math.max(...data.map((p) => Math.max(p.pop, p.votos))) * 1.08;

  const sx = scaleLinear().domain([0, maxAxis]).range([0, iw]);
  const sy = scaleLinear().domain([0, maxAxis]).range([ih, 0]);
  const factor = 1 + margin / 100;
  const restantes = data.filter((p) => p.votos > p.pop * factor).length;
  const ticks = sx.ticks(5);

  return (
    <Panel
      id="municipios"
      title={d.title}
      subtitle={d.lead}
    >
      <SimpleOnly>
        <p className="mb-4 text-sm leading-relaxed text-fg-2">{d.simple}</p>
        <EquivCallout comp={comparacoes.davinopolis} className="mb-5" />
      </SimpleOnly>

      <div className="mb-4 flex flex-col gap-2 rounded-2xl border border-line bg-bg-sunk p-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex flex-1 items-center gap-3 text-sm text-fg-2">
          <span className="whitespace-nowrap">{d.slider}</span>
          <input
            type="range" min={0} max={60} step={5} value={margin}
            onChange={(e) => setMargin(Number(e.target.value))}
            className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-line accent-amber"
          />
          <span className="w-12 text-right font-mono font-semibold text-amber">+{margin}%</span>
        </label>
        <p className="text-sm font-medium text-fg">
          <span className="display tabular text-2xl text-amber">{restantes}</span>{" "}
          <span className="text-fg-2">{d.restam.replace("{total}", "20")}</span>
        </p>
      </div>

      <div ref={ref} className="relative w-full" style={{ height }}>
        {width > 0 && (
          <svg width={w} height={height} className="overflow-visible">
            <g transform={`translate(${m.left},${m.top})`}>
              {ticks.map((t) => (
                <g key={`x${t}`}>
                  <line x1={sx(t)} x2={sx(t)} y1={0} y2={ih} stroke="var(--line)" strokeDasharray="2 4" />
                  <text x={sx(t)} y={ih + 18} textAnchor="middle" fontSize={10} fill="var(--fg-3)" className="font-mono tabular">{fmt(t)}</text>
                </g>
              ))}
              {ticks.map((t) => (
                <text key={`y${t}`} x={-10} y={sy(t)} dy="0.32em" textAnchor="end" fontSize={10} fill="var(--fg-3)" className="font-mono tabular">{fmt(t)}</text>
              ))}
              {/* y = x */}
              <line x1={sx(0)} y1={sy(0)} x2={sx(maxAxis)} y2={sy(maxAxis)} stroke="var(--fg-3)" strokeWidth={1.2} />
              <text x={sx(maxAxis)} y={sy(maxAxis) - 6} textAnchor="end" fontSize={10} fill="var(--fg-3)" className="font-mono">{d.diag}</text>
              {/* y = x(1+m) */}
              <motion.line
                x1={sx(0)} y1={sy(0)}
                animate={{ x2: sx(maxAxis / factor), y2: sy(maxAxis) }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                stroke="var(--amber)" strokeWidth={1.5} strokeDasharray="5 4"
              />
              {data.map((p, i) => {
                const above = p.votos > p.pop * factor;
                return (
                  <motion.circle
                    key={p.nome}
                    cx={sx(p.pop)} cy={sy(p.votos)}
                    r={hover === i ? 7 : 5}
                    fill={above ? "var(--amber)" : "var(--slate)"}
                    stroke="var(--bg-elev)" strokeWidth={1.5}
                    onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                    tabIndex={0} onFocus={() => setHover(i)} onBlur={() => setHover(null)}
                    className="cursor-pointer outline-none"
                    animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: i * 0.02 }}
                  />
                );
              })}
            </g>
          </svg>
        )}
        {hover !== null && width > 0 && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-lg border border-line-strong bg-bg-elev px-2.5 py-1.5 text-xs shadow-xl"
            style={{ left: m.left + sx(data[hover].pop), top: m.top + sy(data[hover].votos) - 8 }}
          >
            <p className="font-medium text-fg">{data[hover].nome} · {data[hover].uf}</p>
            <p className="font-mono tabular text-fg-2">{d.cols.pop} {fmt(data[hover].pop)} · {d.cols.votos} {fmt(data[hover].votos)}</p>
          </div>
        )}
      </div>

      <div className="mt-4">
        <Legend items={[{ label: d.above, tone: "amber" }, { label: d.below, tone: "slate" }]} />
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {municipios.porUF.map((u) => (
          <span key={u.uf} className="rounded-full border border-line bg-bg-sunk px-2.5 py-1 font-mono text-xs text-fg-2">
            {u.uf} · {u.n}
          </span>
        ))}
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="data-table w-full min-w-[34rem]">
          <thead>
            <tr><th>{d.cols.mun}</th><th>{d.cols.uf}</th><th>{d.cols.pop}</th><th>{d.cols.aptos}</th><th>{d.cols.votos}</th><th>{d.cols.ratio}</th></tr>
          </thead>
          <tbody>
            {data.slice(0, 8).map((p) => (
              <tr key={p.nome}>
                <td className="font-medium text-fg">{p.nome}</td>
                <td className="font-mono">{p.uf}</td>
                <td className="tabular">{fmt(p.pop)}</td>
                <td className="tabular">{fmt(p.aptos)}</td>
                <td className="tabular">{fmt(p.votos)}</td>
                <td className="tabular font-medium text-amber">{(p.votosPop * 100).toLocaleString(loc, { maximumFractionDigits: 0 })}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PanelAudit
        titulo={{ pt: "Votos × população (margem IBGE)", en: "Votes × population (IBGE margin)" }}
        fonte={{ tier: "T0", source: { pt: "TSE BWEB 2026 · IBGE estimativa 2026 (SIDRA 6579)", en: "TSE BWEB 2026 · IBGE 2026 estimate (SIDRA 6579)" }, href: "https://sidra.ibge.gov.br/tabela/6579" }}
        metodo={{ pt: "Um município ainda “excede” se os votos superam a população × (1 + margem). Mesmo com +20% de margem, 9 dos 20 continuam acima; Davinópolis só some com +60%.", en: "A municipality still “exceeds” if votes beat population × (1 + margin). Even at +20% margin, 9 of 20 remain above; Davinópolis only disappears at +60%." }}
        comando={"excede = votos > pop * (1 + margem)   # margem = 0..0,60"}
        dados={municipios.sensibilidade}
      />
    </Panel>
  );
}
