"use client";

import { motion } from "motion/react";
import { useFmt, useLang } from "@/i18n/context";
import { capacidade } from "@/data/cadastro";
import { AnimLabel, Chip, Person, useAnimatedNumber } from "./figures";

const LIMITED = Math.round(capacidade.aivd75mais); // 43
const isLimited = (i: number) => (i * 37) % 100 < LIMITED;

export function AnimCapacidade({ stage }: { stage: number }) {
  const { dict } = useLang();
  const a = dict.cadastro.p5.anim;
  const { fmtPct, fmtInt } = useFmt();
  const n = useAnimatedNumber(LIMITED, stage >= 1, 1.4);
  const bands = capacidade.turnout2022_2T.filter((b) => b.faixa !== "100+");
  const maxDelta = Math.max(...bands.map((b) => b.delta));

  return (
    <div className="flex flex-col gap-4">
      <AnimLabel>{dict.cadastro.ui.visualDe}</AnimLabel>
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4">
        <div>
          <svg viewBox="0 0 230 236" className="h-auto w-full max-h-[32vh] lg:max-h-none" role="img" aria-label={a.pessoas}>
            {Array.from({ length: 100 }).map((_, i) => (
              <Person
                key={i}
                x={14 + (i % 10) * 22.5}
                y={26 + Math.floor(i / 10) * 23}
                s={0.78}
                fill={stage >= 1 && isLimited(i) ? "var(--fg-3)" : "var(--teal)"}
                dim={stage >= 1 && isLimited(i)}
                delay={stage >= 1 ? (isLimited(i) ? 0.1 + (i % 17) * 0.05 : 0) : i * 0.006}
              />
            ))}
          </svg>
          <div className="mt-2">
            <div className="display tabular text-2xl font-semibold text-fg">
              <span className={stage >= 1 ? "text-fg-3" : "text-teal"}>{stage >= 1 ? fmtInt(n) : 100}</span>
              <span className="text-base text-fg-3"> / 100</span>
            </div>
            <p className="text-[0.7rem] leading-snug text-fg-3">{stage >= 1 ? a.limitadas : a.pessoas}</p>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <AnimLabel>{a.aumento}</AnimLabel>
          <ul className="mt-2 space-y-2">
            {bands.map((b, i) => (
              <li key={b.faixa} className="grid grid-cols-[3.2rem_1fr_3.4rem] items-center gap-2">
                <span className="font-mono text-[0.68rem] text-fg-3">{b.faixa}</span>
                <div className="h-3 overflow-hidden rounded-full bg-bg-sunk">
                  <motion.div
                    className="h-full rounded-full bg-amber"
                    initial={{ width: 0 }}
                    animate={{ width: stage >= 2 ? `${(b.delta / maxDelta) * 100}%` : "0%" }}
                    transition={{ type: "spring", stiffness: 90, damping: 18, delay: i * 0.1 }}
                    style={{ boxShadow: "0 0 10px var(--glow-amber)" }}
                  />
                </div>
                <span className="text-right font-mono text-[0.68rem] tabular text-amber">{stage >= 2 ? fmtPct(b.delta, 1, true) : ""}</span>
              </li>
            ))}
          </ul>
          {stage >= 2 && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
              <Chip tone="amber">↑ {fmtPct(bands[0].delta, 1, true)} → {fmtPct(bands[bands.length - 1].delta, 1, true)}</Chip>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
