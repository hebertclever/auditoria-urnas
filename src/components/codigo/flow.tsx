"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Section, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/context";
import { gaps63Pt, type Gap } from "@/data/codigo";
import { AnimFrame, SevChip, ease } from "./shared";

type Tipo = Gap["tipo"];

function stepsFor(tipo: Tipo): { specs: number; scripts: number } {
  let specs = 0;
  let scripts = 0;
  for (const g of gaps63Pt) {
    if (g.tipo !== tipo) continue;
    if (/\.asn1/i.test(g.arquivo)) specs++;
    else scripts++;
  }
  return { specs, scripts };
}

export function FlowSection() {
  const { dict } = useLang();
  const d = dict.codigo.fluxo;
  const [active, setActive] = useState<Tipo | null>(null);
  const counts = useMemo(() => active && stepsFor(active), [active]);
  const litSteps = new Set<number>();
  if (counts) {
    if (counts.specs) litSteps.add(2);
    if (counts.scripts) litSteps.add(4);
  }

  return (
    <Section id="fluxo">
      <Reveal>
        <Eyebrow tone="rose">{d.eyebrow}</Eyebrow>
        <Heading className="mt-3">{d.title}</Heading>
        <Lead className="mt-5">{d.lead}</Lead>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <AnimFrame caption={d.opaca}>
          {(play) => (
            <div className="p-5 sm:p-8">
              <div className="relative grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
                {d.steps.slice(0, 4).map((s, i) => {
                  const opaque = i === 1 || i === 2;
                  const lit = litSteps.has(i);
                  return (
                    <div key={i} className="contents">
                      <motion.div
                        initial={{ opacity: 0.25, y: 10 }}
                        animate={play ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.25 + i * 0.4, ease }}
                        className={cn(
                          "relative rounded-2xl border p-4 transition-colors",
                          opaque ? "border-rose/40 bg-rose-soft/40" : "border-line bg-bg",
                          lit && "ring-2 ring-amber",
                        )}
                      >
                        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-fg-3">{d.passo} {i + 1}</p>
                        <p className="mt-1 font-semibold text-fg">{s.t}</p>
                        <p className="mt-0.5 text-xs text-fg-2">{s.s}</p>
                        {opaque && (
                          <motion.span
                            aria-hidden
                            className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-dashed border-rose"
                            animate={play ? { opacity: [0.2, 0.9, 0.2] } : { opacity: 0.2 }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                          />
                        )}
                      </motion.div>
                      {i < 3 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={play ? { opacity: 1 } : {}}
                          transition={{ delay: 0.5 + i * 0.4 }}
                          className="hidden items-center justify-center lg:flex"
                        >
                          <svg width="28" height="14" viewBox="0 0 28 14" aria-hidden>
                            <path d="M0 7h24M18 1l6 6-6 6" fill="none" stroke="var(--fg-3)" strokeWidth="1.5" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={play ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.0, ease }}
                className="mt-4 flex flex-col gap-3 lg:ml-[75%] lg:w-[25%]"
              >
                <div className="flex justify-center lg:justify-start lg:pl-6">
                  <svg width="14" height="28" viewBox="0 0 14 28" aria-hidden>
                    <path d="M7 0v24M1 18l6 6 6-6" fill="none" stroke="var(--amber)" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className={cn("rounded-2xl border border-amber/50 bg-amber-soft p-4", litSteps.has(4) && "ring-2 ring-amber")}>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-amber">{d.passo} 5</p>
                  <p className="mt-1 font-semibold text-fg">{d.steps[4].t}</p>
                  <p className="mt-0.5 text-xs text-fg-2">{d.steps[4].s}</p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={play ? { opacity: 1 } : {}}
                transition={{ delay: 2.6, duration: 0.6 }}
                className="mt-6 rounded-xl border border-rose/30 bg-rose-soft px-4 py-3 text-sm leading-relaxed text-fg"
              >
                {d.soVerifica}
              </motion.p>
            </div>
          )}
        </AnimFrame>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <p className="font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{d.chipsTitle}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(["A", "B", "C", "D"] as Tipo[]).map((tp) => (
            <button
              key={tp}
              type="button"
              onClick={() => setActive((a) => (a === tp ? null : tp))}
              aria-pressed={active === tp}
              className={cn("rounded-full transition", active === tp ? "scale-105" : "opacity-80 hover:opacity-100")}
            >
              <SevChip tipo={tp} withName className="px-3 py-1.5 text-xs" />
            </button>
          ))}
        </div>
        {active && counts && (
          <Callout tone="amber" className="mt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-amber">{active}</span>
            <span className="ml-2">
              {counts.specs + counts.scripts} {d.apontam}{" "}
              {counts.specs > 0 && (
                <>
                  <strong>{d.passo} 3</strong> ({counts.specs} — {d.especificacoes})
                </>
              )}
              {counts.specs > 0 && counts.scripts > 0 && " · "}
              {counts.scripts > 0 && (
                <>
                  <strong>{d.passo} 5</strong> ({counts.scripts} — {d.scripts})
                </>
              )}
            </span>
          </Callout>
        )}
      </Reveal>
    </Section>
  );
}
