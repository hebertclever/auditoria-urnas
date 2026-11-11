"use client";

import { motion } from "motion/react";
import { useMemo } from "react";
import { useFmt, useLang } from "@/i18n/context";
import { limpeza } from "@/data/cadastro";
import { AnimLabel, Chip, useAnimatedNumber } from "./figures";
import { useCompactMotion } from "@/lib/use-compact-motion";

const N = 40;
const N_COMPACT = 14; // phones show three of these drawings at once; keep the endless loop light
const PCT_CANCEL = 0.58;

export function AnimFunil({ stage }: { stage: number }) {
  const { dict } = useLang();
  const a = dict.cadastro.p3.anim;
  const { fmtCompact, fmtInt, fmtPct } = useFmt();
  const compact = useCompactMotion();

  const years = useAnimatedNumber(4, stage >= 2, 2.2);
  const yearShown = 2022 + Math.round(years);
  const acumulado = limpeza.gapAnual * Math.max(1, years);
  const stackMax = limpeza.gapAnual * 4;
  const stackH = 20 + 70 * (Math.min(acumulado, stackMax) / stackMax);

  const mortes = useAnimatedNumber(limpeza.mortesEleitores2022, true, 1.6);
  const canc = useAnimatedNumber(limpeza.cancelamentos2022.falecimento, stage >= 1, 1.6);

  const particles = useMemo(
    () =>
      Array.from({ length: N }).map((_, i) => {
        const seed = ((i * 9301 + 49297) % 233280) / 233280;
        return {
          x0: 70 + seed * 260,
          cancel: i % 100 < PCT_CANCEL * 100,
          delay: i * 0.11,
          jitter: ((i * 7) % 11) - 5,
        };
      }),
    [],
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <AnimLabel>{dict.cadastro.ui.visualDe}</AnimLabel>
        {stage >= 2 && (
          <Chip tone="fg">
            {a.ano} <span className="text-fg">{yearShown}</span>
          </Chip>
        )}
      </div>

      <svg viewBox="0 0 400 300" className="h-auto w-full max-h-[34vh] lg:max-h-none" role="img" aria-label={a.mortes}>
        {/* funnel */}
        <path d="M50 30 H350 L222 150 H178 Z" fill="var(--bg-sunk)" stroke="var(--line-strong)" />
        <text x={200} y={20} textAnchor="middle" fontSize={10} fill="var(--fg-3)" className="font-mono">
          {fmtCompact(mortes)} · {a.mortes}
        </text>

        {/* bins */}
        <rect x={60} y={220} width={120} height={70} rx={8} fill="var(--teal-soft)" stroke="var(--teal)" strokeOpacity={stage >= 1 ? 1 : 0.3} />
        <text x={120} y={212} textAnchor="middle" fontSize={10} fill="var(--teal)" className="font-mono" opacity={stage >= 1 ? 1 : 0.4}>
          {a.cancelados} · {fmtPct(PCT_CANCEL * 100, 0)}
        </text>
        <rect x={220} y={220} width={120} height={70} rx={8} fill="none" stroke="var(--amber)" strokeOpacity={stage >= 1 ? 0.5 : 0.25} strokeDasharray="4 4" />
        <motion.rect
          x={224}
          width={112}
          rx={6}
          fill="var(--amber)"
          initial={{ y: 286, height: 0 }}
          animate={stage >= 1 ? { y: 286 - stackH, height: stackH } : { y: 286, height: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          style={{ filter: "drop-shadow(0 0 8px var(--glow-amber))" }}
        />
        <text x={280} y={212} textAnchor="middle" fontSize={10} fill="var(--amber)" className="font-mono" opacity={stage >= 1 ? 1 : 0.4}>
          {a.ativos} · {fmtPct((1 - PCT_CANCEL) * 100, 0)}
        </text>

        {/* particles */}
        {(compact ? particles.slice(0, N_COMPACT) : particles).map((p, i) => {
          const toCancel = p.cancel && stage >= 1;
          const toStack = !p.cancel && stage >= 1;
          const endX = toCancel ? 120 + p.jitter * 6 : toStack ? 280 + p.jitter * 6 : 200 + p.jitter;
          const endY = toCancel ? 262 + (p.jitter % 3) * 6 : toStack ? 286 - stackH - 6 : 150;
          return (
            <motion.circle
              key={i}
              r={3.4}
              fill={p.cancel && stage >= 1 ? "var(--teal)" : "var(--amber)"}
              initial={{ cx: p.x0, cy: 14, opacity: 0 }}
              animate={{
                cx: [p.x0, 200 + p.jitter, endX],
                cy: [14, 150, endY],
                opacity: [0, 1, stage >= 1 ? 0 : 0],
              }}
              transition={{ duration: 2.4, times: [0, 0.55, 1], delay: p.delay, repeat: Infinity, repeatDelay: 0.6, ease: "easeIn" }}
            />
          );
        })}
      </svg>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-teal/30 bg-teal-soft p-3">
          <AnimLabel>{a.cancelados} · 2022</AnimLabel>
          <div className="display tabular mt-1 text-xl font-semibold text-teal sm:text-2xl">{stage >= 1 ? fmtInt(canc) : "—"}</div>
        </div>
        <div className="rounded-xl border border-amber/30 bg-amber-soft p-3">
          <AnimLabel>{stage >= 2 ? a.acumulado : a.ativos}</AnimLabel>
          <div className="display tabular mt-1 text-xl font-semibold text-amber sm:text-2xl">
            {stage >= 1 ? fmtCompact(stage >= 2 ? acumulado : limpeza.gapAnual) : "—"}
          </div>
        </div>
      </div>
    </div>
  );
}
