"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useFmt } from "@/i18n/context";
import { applyFormat, type StatFormat } from "@/lib/format";

export function CountUp({
  to,
  format,
  duration = 1.6,
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
  const fmts = useFmt();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // State flows through animate()'s onUpdate (external-system sync); reduced motion uses duration 0.
    const controls = animate(0, to, { duration: reduced ? 0 : duration, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(v) });
    return () => controls.stop();
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {applyFormat(fmts, format, val)}
    </span>
  );
}
