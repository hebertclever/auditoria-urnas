"use client";

import { animate, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/** Animate a number from 0 to `target` whenever `active` flips to true. */
export function useAnimatedNumber(target: number, active: boolean, duration = 1.2) {
  const [v, setV] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!active) { setV(0); return; }
    if (reduced) { setV(target); return; }
    const c = animate(0, target, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: (x) => setV(x) });
    return () => c.stop();
  }, [target, active, duration, reduced]);
  return v;
}

const spring = { type: "spring", stiffness: 300, damping: 22 } as const;

/** Minimal person glyph. Anchored at the feet (0,0); ~24 units tall at s=1. */
export function Person({
  x,
  y,
  s = 1,
  fill,
  show = true,
  dim = false,
  delay = 0,
}: {
  x: number;
  y: number;
  s?: number;
  fill: string;
  show?: boolean;
  dim?: boolean;
  delay?: number;
}) {
  return (
    <g transform={`translate(${x},${y})`}>
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: show ? 1 : 0, opacity: show ? (dim ? 0.28 : 1) : 0 }}
        transition={{ ...spring, delay }}
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      >
        <circle cx={0} cy={-19 * s} r={3.6 * s} fill={fill} />
        <rect x={-4.2 * s} y={-14.5 * s} width={8.4 * s} height={9.5 * s} rx={2.6 * s} fill={fill} />
        <rect x={-3.6 * s} y={-5.5 * s} width={2.8 * s} height={5.5 * s} rx={1} fill={fill} />
        <rect x={0.8 * s} y={-5.5 * s} width={2.8 * s} height={5.5 * s} rx={1} fill={fill} />
      </motion.g>
    </g>
  );
}

/** Big display number used inside animations (HTML, not SVG). */
export function Big({ children, tone = "amber", sub }: { children: React.ReactNode; tone?: "amber" | "teal" | "rose" | "fg"; sub?: React.ReactNode }) {
  const c = { amber: "text-amber", teal: "text-teal", rose: "text-rose", fg: "text-fg" }[tone];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ...spring, damping: 26 }}
      className="text-center"
    >
      <div className={`display tabular text-[clamp(2.4rem,7vw,4.2rem)] font-semibold ${c}`}>{children}</div>
      {sub && <div className="mt-1 text-xs leading-snug text-fg-2 sm:text-sm">{sub}</div>}
    </motion.div>
  );
}

export function Chip({ children, tone = "fg" }: { children: React.ReactNode; tone?: "amber" | "teal" | "fg" | "rose" }) {
  const c = {
    amber: "border-amber/40 bg-amber-soft text-amber",
    teal: "border-teal/40 bg-teal-soft text-teal",
    rose: "border-rose/40 bg-rose-soft text-rose",
    fg: "border-line bg-bg text-fg-2",
  }[tone];
  return <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[0.7rem] font-semibold tabular ${c}`}>{children}</span>;
}

export function AnimLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-fg-3">{children}</p>;
}
