"use client";

import { scaleBand, scaleLinear } from "d3-scale";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BarChart, type Bar } from "@/components/charts/bar-chart";
import { useMeasure } from "@/components/charts/use-measure";
import { useFmt, useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { capacidade, centenarios, deltaPorFaixa2022, historicoInversao, limpeza, municipios, resumoControle } from "@/data/cadastro";

function Frame({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <figure className="rounded-3xl border border-line bg-bg-elev p-5 sm:p-7">
      <figcaption className="mb-4">
        <p className="display-md text-base font-semibold text-fg sm:text-lg">{title}</p>
        {note && <p className="mt-1 text-xs leading-relaxed text-fg-3 sm:text-sm">{note}</p>}
      </figcaption>
      {children}
    </figure>
  );
}

export function ChartInversao() {
  const { dict } = useLang();
  const { fmtPct } = useFmt();
  const c = dict.cadastro.p1.chart;
  const firstOld = deltaPorFaixa2022.findIndex((d) => d.faixa_label === "70-74");
  const data: Bar[] = deltaPorFaixa2022.map((d, i) => ({ label: d.faixa_label, value: d.delta_pct, tone: i >= firstOld ? "amber" : "teal" }));
  const fmtAxis = (v: number) => fmtPct(v, 0, true);
  return (
    <Frame title={c.title} note={c.note}>
      <div className="hidden lg:block">
        <BarChart data={data} height={340} format={fmtAxis} baseline={resumoControle.mediaDeltaControle2169} baselineLabel={c.baseline} highlightRange={[firstOld, data.length - 1]} />
      </div>
      <div className="lg:hidden">
        <BarChart data={data} height={280} format={fmtAxis} baseline={resumoControle.mediaDeltaControle2169} baselineLabel={c.baseline} highlightRange={[firstOld, data.length - 1]} showValues={false} labelEvery={3} />
      </div>
    </Frame>
  );
}

const yearTone: Record<string, string> = { "2014": "var(--slate)", "2018": "var(--fg-3)", "2022": "var(--amber)" };

export function ChartHistorico() {
  const { dict } = useLang();
  const { fmtPct } = useFmt();
  const c = dict.cadastro.p1.hist;
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const inRef = useRef<HTMLDivElement>(null);
  const inView = useInView(inRef, { once: true, margin: "-15% 0px" });

  const faixas = historicoInversao[0].faixas.map((f) => f.faixa);
  const anos = historicoInversao.map((h) => h.ano);
  const height = 300;
  const m = { top: 24, right: 8, bottom: 40, left: 44 };
  const w = Math.max(width, 10);
  const iw = Math.max(w - m.left - m.right, 10);
  const ih = height - m.top - m.bottom;
  const x0 = scaleBand<string>().domain(faixas).range([0, iw]).paddingInner(0.3);
  const x1 = scaleBand<string>().domain(anos).range([0, x0.bandwidth()]).paddingInner(0.12);
  const y = scaleLinear().domain([-2, 36]).range([ih, 0]);
  const zero = y(0);

  return (
    <Frame title={c.title} note={c.note}>
      <div className="mb-3 flex flex-wrap gap-3">
        {anos.map((a) => (
          <span key={a} className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-2">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: yearTone[a] }} /> {a}
          </span>
        ))}
      </div>
      <div ref={inRef}>
        <div ref={ref} style={{ height }}>
          {width > 0 && (
            <svg width={w} height={height} className="overflow-visible" role="img" aria-label={c.title}>
              <g transform={`translate(${m.left},${m.top})`}>
                {y.ticks(5).map((tk) => (
                  <g key={tk} transform={`translate(0,${y(tk)})`}>
                    <line x1={0} x2={iw} stroke="var(--line)" strokeDasharray={tk === 0 ? undefined : "2 4"} />
                    <text x={-8} dy="0.32em" textAnchor="end" fontSize={11} fill="var(--fg-3)" className="font-mono tabular">{fmtPct(tk, 0, true)}</text>
                  </g>
                ))}
                {historicoInversao.map((h, hi) =>
                  h.faixas.map((f, fi) => {
                    const bx = (x0(f.faixa) ?? 0) + (x1(h.ano) ?? 0);
                    const top = Math.min(y(f.delta), zero);
                    const hgt = Math.abs(y(f.delta) - zero);
                    return (
                      <motion.rect
                        key={`${h.ano}-${f.faixa}`}
                        x={bx}
                        width={x1.bandwidth()}
                        rx={3}
                        fill={yearTone[h.ano]}
                        initial={{ y: zero, height: 0 }}
                        animate={inView ? { y: top, height: hgt } : {}}
                        transition={{ duration: 0.8, delay: fi * 0.05 + hi * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      />
                    );
                  }),
                )}
                {faixas.map((f) => (
                  <text key={f} x={(x0(f) ?? 0) + x0.bandwidth() / 2} y={ih + 18} textAnchor="middle" fontSize={11} fill="var(--fg-3)" className="font-mono">{f}</text>
                ))}
              </g>
            </svg>
          )}
        </div>
      </div>
    </Frame>
  );
}

export function ChartCentenarios() {
  const { dict, lang } = useLang();
  const c = dict.cadastro.p2.chart;
  const data: Bar[] = centenarios.internacionalPor100k.map((d, i, arr) => ({
    label: t(d.pais, lang),
    value: d.valor,
    tone: i === arr.length - 1 ? "amber" : i === arr.length - 2 ? "teal" : "slate",
  }));
  return (
    <Frame title={c.title} note={c.note}>
      <BarChart data={data} height={300} format={(v) => v.toLocaleString(lang === "pt" ? "pt-BR" : "en-US", { maximumFractionDigits: 1 })} />
    </Frame>
  );
}

export function ChartLimpeza() {
  const { dict } = useLang();
  const { fmtCompact } = useFmt();
  const c = dict.cadastro.p3.chart;
  const data: Bar[] = [
    { label: c.mortes, value: limpeza.mortesEleitores2022, tone: "slate" },
    { label: c.cancelados, value: limpeza.cancelamentos2022.falecimento, tone: "teal" },
    { label: c.gap, value: limpeza.gapAnual, tone: "amber" },
  ];
  return (
    <Frame title={c.title} note={c.note}>
      <BarChart data={data} height={280} format={fmtCompact} />
    </Frame>
  );
}

export function ChartSensibilidade() {
  const { dict } = useLang();
  const c = dict.cadastro.p4.chart;
  const data: Bar[] = municipios.sensibilidade.map((s) => ({ label: `+${s.margem}%`, value: s.restantes, tone: s.restantes >= 9 ? "amber" : "slate" }));
  return (
    <Frame title={c.title} note={c.note}>
      <BarChart data={data} height={260} format={(v) => String(Math.round(v))} yLabel={c.eixo} />
    </Frame>
  );
}

export function ChartCapacidade() {
  const { dict } = useLang();
  const { fmtPct } = useFmt();
  const c = dict.cadastro.p5.chart;
  const bands = capacidade.turnout2022_2T;
  const turnout: Bar[] = bands.map((b) => ({ label: b.faixa, value: b.turnout, tone: "teal" }));
  const delta: Bar[] = bands.map((b) => ({ label: b.faixa, value: b.delta, tone: "amber" }));
  return (
    <figure className="rounded-3xl border border-line bg-bg-elev p-5 sm:p-7">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="display-md mb-3 text-base font-semibold text-fg">{c.turnout}</p>
          <BarChart data={turnout} height={260} format={(v) => fmtPct(v, 0)} />
        </div>
        <div>
          <p className="display-md mb-3 text-base font-semibold text-fg">{c.delta}</p>
          <BarChart data={delta} height={260} format={(v) => fmtPct(v, 0, true)} />
        </div>
      </div>
      <figcaption className="mt-4 text-xs leading-relaxed text-fg-3 sm:text-sm">{c.note}</figcaption>
    </figure>
  );
}
