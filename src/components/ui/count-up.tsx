"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useFmt } from "@/i18n/context";
import { applyFormat, type StatFormat } from "@/lib/format";
import { useCompactMotion } from "@/lib/use-compact-motion";

export function CountUp({
  to,
  format,
  duration = 1.2,
  className,
}: {
  to: number;
  format?: StatFormat;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const compact = useCompactMotion();
  const fmts = useFmt();
  // null = show the real figure. It is what the server renders and what phones always show:
  // a number that is still counting is a wrong number for anyone who reads or screenshots it.
  const [anim, setAnim] = useState<number | null>(null);
  const still = reduced || compact;

  useEffect(() => {
    if (!inView || still) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setAnim(v),
      onComplete: () => setAnim(null),
    });
    return () => controls.stop();
  }, [inView, to, duration, still]);

  return (
    <span ref={ref} className={className}>
      {applyFormat(fmts, format, still || anim === null ? to : anim)}
    </span>
  );
}
