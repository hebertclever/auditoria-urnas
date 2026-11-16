"use client";

import { motion } from "motion/react";
import { useFmt, useLang } from "@/i18n/context";
import { saltoResumo } from "@/data/cadastro";
import { AnimLabel, Big, Chip, Person, useAnimatedNumber } from "./figures";

// 2026: de cada 20 idosos (70+) que votaram no 1º turno, o 2º turno teve 23 (+14,8%). Adultos: +1,5%.
const R = saltoResumo["2026"];
const N_YOUNG = 20;
const N_OLD_1T = 20;
const N_OLD_2T = 23;

export function AnimCorrida({ stage }: { stage: number }) {
  const { dict } = useLang();
  const a = dict.cadastro.p1.anim;
  const { fmtPct } = useFmt();
  const second = stage >= 1;
  const oldPct = useAnimatedNumber(R.delta70_pct, second, 1.4);
  const youngPct = useAnimatedNumber(R.delta2169_pct, second, 1.4);
  const share = useAnimatedNumber(R.parte70_aumento_pct, stage >= 2, 1.6);

  const dx = 16;
  const x0 = 22;
  const w = x0 + dx * (N_OLD_2T - 1) + 22;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <AnimLabel>{dict.cadastro.ui.visualDe}</AnimLabel>
        <div className="flex shrink-0 gap-1 rounded-full border border-line p-0.5">
          {[a.t1, a.t2].map((l, i) => (
            <span
              key={l}
              className={`whitespace-nowrap rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider transition ${
                (i === 1) === second ? "bg-fg text-bg" : "text-fg-3"
              }`}
            >
              {l}
            </span>
          ))}
        </div>
      </div>

      <svg viewBox={`0 0 ${w} 150`} className="h-auto w-full max-h-[34vh] lg:max-h-none" role="img" aria-label={a.jovens + " / " + a.idosos}>
        <text x={x0 - 6} y={14} fontSize={9} fill="var(--fg-3)" className="font-mono">
          {a.jovens.toUpperCase()}
        </text>
        <line x1={x0 - 6} x2={w - 10} y1={62} y2={62} stroke="var(--line)" />
        {Array.from({ length: N_YOUNG }).map((_, i) => (
          <Person key={`y${i}`} x={x0 + i * dx} y={60} fill="var(--teal)" delay={i * 0.02} />
        ))}

        <text x={x0 - 6} y={88} fontSize={9} fill="var(--fg-3)" className="font-mono">
          {a.idosos.toUpperCase()}
        </text>
        <line x1={x0 - 6} x2={w - 10} y1={138} y2={138} stroke="var(--line)" />
        {Array.from({ length: N_OLD_2T }).map((_, i) => (
          <Person
            key={`o${i}`}
            x={x0 + i * dx}
            y={136}
            fill="var(--amber)"
            show={i < N_OLD_1T || second}
            delay={i < N_OLD_1T ? i * 0.02 : 0.15 + (i - N_OLD_1T) * 0.18}
          />
        ))}
      </svg>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-line bg-bg p-3">
          <AnimLabel>{a.jovens}</AnimLabel>
          <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
            <span className="display tabular text-2xl font-semibold text-teal">{second ? fmtPct(youngPct, 1, true) : "—"}</span>
            <span className="text-xs text-fg-3">{a.variacao}</span>
          </div>
        </div>
        <div className="rounded-xl border border-amber/30 bg-amber-soft p-3">
          <AnimLabel>{a.idosos}</AnimLabel>
          <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
            <span className="display tabular text-2xl font-semibold text-amber">{second ? fmtPct(oldPct, 1, true) : "—"}</span>
            <span className="text-xs text-fg-3">{a.media}</span>
          </div>
        </div>
      </div>

      {stage >= 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative overflow-hidden rounded-2xl border border-amber/30 p-4">
          <div className="glow-amber pointer-events-none absolute -inset-10 opacity-60" />
          <div className="relative">
            <Big tone="amber" sub={<><Chip tone="fg">{a.controle}</Chip> {a.razao}</>}>
              {fmtPct(share, 0)}
            </Big>
          </div>
        </motion.div>
      )}
    </div>
  );
}
