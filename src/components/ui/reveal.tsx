"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { useCompactMotion } from "@/lib/use-compact-motion";

type Props = HTMLMotionProps<"div"> & { delay?: number; y?: number };

const ease = [0.22, 1, 0.36, 1] as const;
// On touch screens content starts appearing just before it scrolls in, so a fast flick never shows a blank band.
const VIEWPORT_DESKTOP = { once: true, margin: "-10% 0px -10% 0px" } as const;
const VIEWPORT_COMPACT = { once: true, margin: "0px 0px 12% 0px" } as const;

export function Reveal({ className, children, delay = 0, y = 18, ...rest }: Props) {
  const compact = useCompactMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={compact ? VIEWPORT_COMPACT : VIEWPORT_DESKTOP}
      transition={{ duration: compact ? 0.35 : 0.6, ease, delay: compact ? Math.min(delay, 0.06) : delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ className, children, gap = 0.08 }: { className?: string; children: React.ReactNode; gap?: number }) {
  const compact = useCompactMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={compact ? VIEWPORT_COMPACT : { once: true, margin: "-10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: compact ? Math.min(gap, 0.03) : gap } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};
