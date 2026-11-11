"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useInView } from "motion/react";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/context";
import { AnimCorrida } from "./anim-corrida";
import { AnimCondominio } from "./anim-condominio";
import { AnimFunil } from "./anim-funil";
import { AnimEstadio } from "./anim-estadio";
import { AnimCapacidade } from "./anim-capacidade";

export type VisualKey = "corrida" | "condominio" | "funil" | "estadio" | "capacidade";
export type Step = { t: string; b: string };

function Visual({ kind, stage, controls = true }: { kind: VisualKey; stage: number; controls?: boolean }) {
  switch (kind) {
    case "corrida": return <AnimCorrida stage={stage} />;
    case "condominio": return <AnimCondominio stage={stage} />;
    case "funil": return <AnimFunil stage={stage} />;
    case "estadio": return <AnimEstadio stage={stage} controls={controls} />;
    case "capacidade": return <AnimCapacidade stage={stage} />;
  }
}

const LG = "(min-width: 1024px)";
function subscribeLg(onChange: () => void) {
  const mq = window.matchMedia(LG);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
/** null until hydrated: both layouts are then in the HTML and CSS picks one, so the first paint is right on any screen. */
function useIsLg(): boolean | null {
  return useSyncExternalStore<boolean | null>(subscribeLg, () => window.matchMedia(LG).matches, () => null);
}

function ReplayButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line px-4 font-mono text-[0.65rem] uppercase tracking-wider text-fg-2 transition hover:border-line-strong hover:text-fg active:scale-95 lg:min-h-0 lg:px-3 lg:py-1"
    >
      <RotateCcw className="h-3 w-3" />
      {label}
    </button>
  );
}

/** Starts one step behind and moves to its own step once on screen: the change itself is what the reader watches. */
function FramePlayer({ kind, index, play, controls }: { kind: VisualKey; index: number; play: boolean; controls: boolean }) {
  const [stage, setStage] = useState(Math.max(0, index - 1));
  useEffect(() => {
    if (!play || index === 0) return;
    const timer = setTimeout(() => setStage(index), 550);
    return () => clearTimeout(timer);
  }, [play, index]);
  return <Visual kind={kind} stage={stage} controls={controls} />;
}

/**
 * Phones and tablets. A sticky drawing that changes while text scrolls underneath does not work on a small
 * screen: the drawing covers the very text that is driving it. Here each step is a frame, text first and its
 * own drawing right below, in plain reading order.
 */
function StepFrame({ step, index, last, visual }: { step: Step; index: number; last: boolean; visual: VisualKey }) {
  const { dict } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [replay, setReplay] = useState(0);
  return (
    <li>
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-amber">
        {dict.cadastro.ui.passo} {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="display-md mt-2 text-xl font-semibold text-fg sm:text-2xl">{step.t}</h3>
      <p className="mt-3 max-w-prose text-[1.02rem] leading-relaxed text-fg-2">{step.b}</p>
      <div ref={ref} className="mt-5 rounded-2xl border border-line bg-bg-elev p-4 sm:p-6">
        <FramePlayer key={`${inView ? "on" : "off"}-${replay}`} kind={visual} index={index} play={inView} controls={last} />
        <div className="mt-3 flex justify-end border-t border-line pt-3">
          <ReplayButton onClick={() => setReplay((r) => r + 1)} label={dict.common.ui.replay} />
        </div>
      </div>
    </li>
  );
}

/** Wide screens: text scrolls on the left, the drawing stays pinned on the right and follows the active step. */
function PinnedScrolly({ steps, visual, className }: { steps: Step[]; visual: VisualKey; className?: string }) {
  const { dict } = useLang();
  const [active, setActive] = useState(0);
  const [replay, setReplay] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
        }
      },
      { rootMargin: "-38% 0px -47% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [steps.length]);

  return (
    <div className={cn("mt-10 grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-12 xl:gap-16", className)}>
      <div className="sticky top-24 z-20 order-2">
        <div className="relative rounded-3xl border border-line bg-bg-elev p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
          <Visual key={`${visual}-${replay}`} kind={visual} stage={active} />
          <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
            <ol className="flex items-center gap-1.5" aria-hidden>
              {steps.map((_, i) => (
                <li
                  key={i}
                  className={cn("h-1.5 rounded-full transition-all duration-500", i === active ? "w-6 bg-amber" : i < active ? "w-1.5 bg-fg-3" : "w-1.5 bg-line-strong")}
                />
              ))}
            </ol>
            <ReplayButton onClick={() => setReplay((r) => r + 1)} label={dict.common.ui.replay} />
          </div>
        </div>
      </div>

      <ol className="order-1 space-y-[46vh] pb-[34vh] pt-[14vh]">
        {steps.map((s, i) => (
          <li
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            data-step={i}
            className={cn("max-w-md transition-opacity duration-500", active === i ? "opacity-100" : "opacity-35")}
          >
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-amber">
              {dict.cadastro.ui.passo} {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="display-md mt-2 text-2xl font-semibold text-fg">{s.t}</h3>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-fg-2">{s.b}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Scrolly({ steps, visual }: { steps: Step[]; visual: VisualKey }) {
  const lg = useIsLg();
  return (
    <>
      {lg !== true && (
        <ol className={cn("mt-8 space-y-10", lg === null && "lg:hidden")}>
          {steps.map((s, i) => (
            <StepFrame key={i} step={s} index={i} last={i === steps.length - 1} visual={visual} />
          ))}
        </ol>
      )}
      {lg !== false && <PinnedScrolly steps={steps} visual={visual} className={lg === null ? "hidden lg:grid" : "grid"} />}
    </>
  );
}
