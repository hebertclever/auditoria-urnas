"use client";

import { motion } from "motion/react";
import { useFmt, useLang } from "@/i18n/context";
import { centenarios, centenariosPctFantasma, centenariosRazao } from "@/data/cadastro";
import { AnimLabel, Big, Chip, useAnimatedNumber } from "./figures";

const WIN_COLS = 6;
const WIN_ROWS = 7;
const LIT = Math.round(centenarios.censo2022 / 1000); // 38
const NAMES = Math.round(centenarios.tse2026Aptos100 / 1000); // 298
const GRID_COLS = 15;

export function AnimCondominio({ stage }: { stage: number }) {
  const { dict } = useLang();
  const a = dict.cadastro.p2.anim;
  const { fmtInt, fmtX, fmtPct } = useFmt();
  const censo = useAnimatedNumber(centenarios.censo2022, true, 1.4);
  const tse = useAnimatedNumber(centenarios.tse2026Aptos100, stage >= 1, 1.8);
  const razao = useAnimatedNumber(centenariosRazao, stage >= 2, 1.2);

  const cell = 9;
  const gap = 1.4;
  const gridRows = Math.ceil(NAMES / GRID_COLS);
  const gw = GRID_COLS * (cell + gap);
  const gh = gridRows * (cell + gap);

  return (
    <div className="flex flex-col gap-4">
      <AnimLabel>{dict.cadastro.ui.visualDe}</AnimLabel>
      <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-end gap-4">
        {/* Building */}
        <div>
          <svg viewBox="0 0 150 210" className="h-auto w-full max-h-[30vh] lg:max-h-none" role="img" aria-label={a.censo}>
            <path d="M15 40 L75 8 L135 40 Z" fill="var(--bg-sunk)" stroke="var(--line-strong)" />
            <rect x={20} y={40} width={110} height={160} rx={4} fill="var(--bg-sunk)" stroke="var(--line-strong)" />
            {Array.from({ length: WIN_COLS * WIN_ROWS }).map((_, i) => {
              const c = i % WIN_COLS;
              const r = Math.floor(i / WIN_COLS);
              const lit = i < LIT;
              return (
                <motion.rect
                  key={i}
                  x={29 + c * 16}
                  y={50 + r * 20}
                  width={10}
                  height={13}
                  rx={1.5}
                  initial={{ fill: "var(--bg)", opacity: 0.6 }}
                  animate={{ fill: lit ? "var(--teal)" : "var(--bg)", opacity: lit ? 1 : 0.5 }}
                  transition={{ delay: 0.05 + i * 0.025, duration: 0.5 }}
                  style={lit ? { filter: "drop-shadow(0 0 4px var(--glow-teal))" } : undefined}
                />
              );
            })}
            <rect x={68} y={186} width={14} height={14} rx={1} fill="var(--bg)" />
          </svg>
          <div className="mt-2">
            <AnimLabel>{a.censo}</AnimLabel>
            <div className="display tabular text-xl font-semibold text-teal sm:text-2xl">{fmtInt(censo)}</div>
            <p className="text-[0.7rem] leading-snug text-fg-3">{a.encontrados} · {a.janela}</p>
          </div>
        </div>

        {/* TSE list grid */}
        <div>
          <svg viewBox={`0 0 ${gw} ${gh}`} className="h-auto w-full max-h-[30vh] lg:max-h-none" role="img" aria-label={a.tse}>
            {Array.from({ length: NAMES }).map((_, i) => {
              const c = i % GRID_COLS;
              const r = Math.floor(i / GRID_COLS);
              const real = i < LIT;
              const on = stage >= 1;
              return (
                <motion.rect
                  key={i}
                  x={c * (cell + gap)}
                  y={r * (cell + gap)}
                  width={cell}
                  height={cell}
                  rx={1.6}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{
                    opacity: on ? (real ? 1 : stage >= 2 ? 0.9 : 0.75) : 0.08,
                    scale: on ? 1 : 0.6,
                    fill: real ? "var(--teal)" : "var(--amber)",
                  }}
                  transition={{ delay: on ? i * 0.004 : 0, duration: 0.35 }}
                  style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
                />
              );
            })}
          </svg>
          <div className="mt-2">
            <AnimLabel>{a.tse}</AnimLabel>
            <div className="display tabular text-xl font-semibold text-amber sm:text-2xl">{stage >= 1 ? fmtInt(tse) : "—"}</div>
            <p className="text-[0.7rem] leading-snug text-fg-3">{a.registrados} · {NAMES} {a.nomes}</p>
          </div>
        </div>
      </div>

      {stage >= 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative overflow-hidden rounded-2xl border border-amber/30 p-4">
          <div className="glow-amber pointer-events-none absolute -inset-10 opacity-60" />
          <div className="relative grid grid-cols-2 gap-3">
            <Big tone="amber" sub={<Chip tone="fg">TSE ÷ {a.censo.split(" ")[0]}</Chip>}>{fmtX(razao)}</Big>
            <Big tone="rose" sub={<Chip tone="rose">{a.fantasma}</Chip>}>{fmtPct(centenariosPctFantasma * 100, 0)}</Big>
          </div>
        </motion.div>
      )}
    </div>
  );
}
