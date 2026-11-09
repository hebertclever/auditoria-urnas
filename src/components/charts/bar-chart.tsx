"use client";

import { scaleBand, scaleLinear } from "d3-scale";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useMeasure } from "./use-measure";
import { cn } from "@/lib/utils";
import { useFmt } from "@/i18n/context";

export type Bar = {
  label: string;
  value: number;
  tone?: "amber" | "teal" | "rose" | "slate" | "fg";
  note?: string;
};

const toneVar: Record<NonNullable<Bar["tone"]>, string> = {
  amber: "var(--amber)",
  teal: "var(--teal)",
  rose: "var(--rose)",
  slate: "var(--slate)",
  fg: "var(--fg)",
};

export function BarChart({
  data,
  height = 320,
  format: formatProp,
  yLabel,
  baseline,
  baselineLabel,
  className,
  minZero = true,
  showValues = true,
  labelEvery = 1,
  highlightRange,
}: {
  data: Bar[];
  height?: number;
  format?: (v: number) => string;
  yLabel?: string;
  baseline?: number;
  baselineLabel?: string;
  className?: string;
  minZero?: boolean;
  showValues?: boolean;
  labelEvery?: number;
  highlightRange?: [number, number];
}) {
  const { fmt } = useFmt();
  const format = formatProp ?? fmt;
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const inViewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(inViewRef, { once: true, margin: "-15% 0px" });

  const m = { top: 28, right: 12, bottom: 44, left: 48 };
  const w = Math.max(width, 10);
  const iw = Math.max(w - m.left - m.right, 10);
  const ih = height - m.top - m.bottom;

  const minV = minZero ? Math.min(0, ...data.map((d) => d.value)) : Math.min(...data.map((d) => d.value));
  const maxV = Math.max(0, ...data.map((d) => d.value));
  const pad = (maxV - minV) * 0.08;
  const y = scaleLinear().domain([minV - (minV < 0 ? pad : 0), maxV + pad]).range([ih, 0]).nice();
  const x = scaleBand<string>().domain(data.map((d) => d.label)).range([0, iw]).paddingInner(0.28).paddingOuter(0.1);
  const ticks = y.ticks(5);
  const zeroY = y(0);

  return (
    <div ref={inViewRef} className={cn("w-full", className)}>
      <div ref={ref} className="w-full" style={{ height }}>
        {width > 0 && (
          <svg width={w} height={height} role="img" aria-label={yLabel ?? "Gráfico de barras"} className="overflow-visible">
            <g transform={`translate(${m.left},${m.top})`}>
              {highlightRange && (
                <rect
                  x={(x(data[highlightRange[0]]?.label) ?? 0) - x.step() * x.paddingInner() * 0.5}
                  y={-10}
                  width={x.step() * (highlightRange[1] - highlightRange[0] + 1)}
                  height={ih + 10}
                  rx={10}
                  fill="var(--amber-soft)"
                />
              )}
              {ticks.map((t) => (
                <g key={t} transform={`translate(0,${y(t)})`}>
                  <line x1={0} x2={iw} stroke="var(--line)" strokeDasharray={t === 0 ? undefined : "2 4"} />
                  <text x={-10} dy="0.32em" textAnchor="end" fontSize={11} fill="var(--fg-3)" className="font-mono tabular">
                    {format(t)}
                  </text>
                </g>
              ))}
              {baseline !== undefined && (
                <g transform={`translate(0,${y(baseline)})`}>
                  <line x1={0} x2={iw} stroke="var(--teal)" strokeDasharray="4 4" strokeWidth={1.5} />
                  {baselineLabel && (
                    <text x={iw} y={-6} textAnchor="end" fontSize={11} fill="var(--teal)" className="font-mono">
                      {baselineLabel}
                    </text>
                  )}
                </g>
              )}
              {data.map((d, i) => {
                const bx = x(d.label) ?? 0;
                const bw = x.bandwidth();
                const top = Math.min(y(d.value), zeroY);
                const h = Math.abs(y(d.value) - zeroY);
                const color = toneVar[d.tone ?? "fg"];
                return (
                  <g key={d.label}>
                    <motion.rect
                      x={bx}
                      width={bw}
                      rx={Math.min(6, bw / 3)}
                      fill={color}
                      initial={{ y: zeroY, height: 0, opacity: 0.6 }}
                      animate={inView ? { y: top, height: h, opacity: 1 } : {}}
                      transition={{ duration: 0.9, delay: i * 0.035, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {showValues && (
                      <motion.text
                        x={bx + bw / 2}
                        y={d.value >= 0 ? top - 7 : top + h + 14}
                        textAnchor="middle"
                        fontSize={bw < 26 ? 9.5 : 11}
                        fill={color}
                        className="font-mono tabular font-medium"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 + i * 0.035 }}
                      >
                        {format(d.value)}
                      </motion.text>
                    )}
                    {i % labelEvery === 0 && (
                      <text x={bx + bw / 2} y={ih + 18} textAnchor="middle" fontSize={bw < 26 ? 9.5 : 11} fill="var(--fg-3)" className="font-mono">
                        {d.label}
                      </text>
                    )}
                  </g>
                );
              })}
              {yLabel && (
                <text x={-m.left + 4} y={-14} fontSize={11} fill="var(--fg-3)" className="font-mono">
                  {yLabel}
                </text>
              )}
            </g>
          </svg>
        )}
      </div>
    </div>
  );
}
