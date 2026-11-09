"use client";

import { useEffect, useRef, useState } from "react";
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

function Visual({ kind, stage }: { kind: VisualKey; stage: number }) {
  switch (kind) {
    case "corrida": return <AnimCorrida stage={stage} />;
    case "condominio": return <AnimCondominio stage={stage} />;
    case "funil": return <AnimFunil stage={stage} />;
    case "estadio": return <AnimEstadio stage={stage} />;
    case "capacidade": return <AnimCapacidade stage={stage} />;
  }
}

export function Scrolly({ steps, visual }: { steps: Step[]; visual: VisualKey }) {
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
    <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12 xl:gap-16">
      <div className="sticky top-16 z-20 -mx-5 bg-bg/95 backdrop-blur-sm sm:mx-0 sm:bg-transparent sm:backdrop-blur-none lg:top-24 lg:order-2">
        <div className="relative rounded-none border-y border-line bg-bg-elev p-4 sm:rounded-3xl sm:border sm:p-6 sm:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
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
            <button
              type="button"
              onClick={() => setReplay((r) => r + 1)}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-fg-2 transition hover:border-line-strong hover:text-fg"
            >
              <RotateCcw className="h-3 w-3" />
              {dict.common.ui.replay}
            </button>
          </div>
        </div>
      </div>

      <ol className="mt-10 space-y-[38vh] pb-[30vh] pt-[6vh] lg:order-1 lg:mt-0 lg:space-y-[46vh] lg:pb-[34vh] lg:pt-[14vh]">
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
            <h3 className="display-md mt-2 text-xl font-semibold text-fg sm:text-2xl">{s.t}</h3>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-fg-2">{s.b}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
