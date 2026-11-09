"use client";

import { useInView } from "motion/react";
import { RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { tipoLabel, type Gap } from "@/data/codigo";

export function useReplay() {
  const [run, setRun] = useState(0);
  return { run, replay: () => setRun((r) => r + 1) };
}

export function ReplayButton({ onClick, className }: { onClick: () => void; className?: string }) {
  const { dict } = useLang();
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-fg-2 transition hover:border-line-strong hover:text-fg",
        className,
      )}
    >
      <RotateCcw className="h-3 w-3" />
      {dict.common.ui.replay}
    </button>
  );
}

/** Wrapper that starts an animation when scrolled into view and supports replay via remount. */
export function AnimFrame({
  children,
  className,
  caption,
}: {
  children: (play: boolean, run: number) => React.ReactNode;
  className?: string;
  caption?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const { run, replay } = useReplay();
  return (
    <div ref={ref} className={cn("relative overflow-hidden rounded-3xl border border-line bg-bg-elev", className)}>
      <div key={run}>{children(inView, run)}</div>
      <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
        <p className="text-xs leading-snug text-fg-3">{caption}</p>
        <ReplayButton onClick={replay} />
      </div>
    </div>
  );
}

const sevClass: Record<Gap["tipo"], string> = {
  A: "border-rose/40 bg-rose-soft text-rose",
  B: "border-amber/40 bg-amber-soft text-amber",
  C: "border-line-strong bg-bg-sunk text-fg-2",
  D: "border-line bg-bg-sunk text-fg-3",
};

export function SevChip({ tipo, className, withName }: { tipo: Gap["tipo"]; className?: string; withName?: boolean }) {
  const { lang } = useLang();
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-md border px-1.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider", sevClass[tipo], className)}>
      {tipo}
      {withName && <span className="font-sans normal-case tracking-normal">{t(tipoLabel[tipo].curto, lang)}</span>}
    </span>
  );
}

export function IdChip({ id, className }: { id: string; className?: string }) {
  return (
    <span className={cn("inline-block rounded-md border border-line bg-bg-sunk px-1.5 py-0.5 font-mono text-[0.68rem] text-fg-2", className)}>
      {id}
    </span>
  );
}

export const ease = [0.22, 1, 0.36, 1] as const;
export const mono = { fontFamily: "var(--font-mono)" } as const;
export const sans = { fontFamily: "var(--font-sans)" } as const;
