"use client";

import { motion, type Variants } from "motion/react";

/** Client wrapper so server pages can place children inside a `Stagger` with item variants. */
export function MotionItem({ variants, className, children }: { variants: Variants; className?: string; children: React.ReactNode }) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
