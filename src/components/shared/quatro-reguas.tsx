"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Banknote, DoorOpen, HeartPulse, RotateCcw, Vote } from "lucide-react";
import { reguas } from "@/data/reguas";
import { useFmt, useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { useCompactMotion } from "@/lib/use-compact-motion";
import { Eyebrow, Heading, Lead } from "@/components/ui/section";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const ICON = { ibge: DoorOpen, datasus: HeartPulse, inss: Banknote, tse: Vote } as const;
const TONE = {
  teal: { text: "text-teal", bar: "bg-teal", ring: "border-teal/40 bg-teal-soft text-teal" },
  rose: { text: "text-rose", bar: "bg-rose", ring: "border-rose/40 bg-rose-soft text-rose" },
  slate: { text: "text-fg", bar: "bg-slate", ring: "border-line-strong bg-bg-sunk text-fg-2" },
  amber: { text: "text-amber", bar: "bg-amber", ring: "border-amber/40 bg-amber-soft text-amber" },
} as const;
const TICKS = [50_000, 100_000, 150_000, 200_000, 250_000];
const STEP_MS = 900;

// A sala: 1 lugar ≈ 3.781 pessoas (37.814 ÷ 10). IBGE 10 · INSS 19 · TSE 79.
const SALA = { ibge: 10, inss: 19, tse: 79 };

/**
 * Quatro réguas oficiais sobre os mesmos centenários, uma de cada vez: IBGE, DATASUS, INSS e, por último, o TSE,
 * que passa de todas. Fecha com a mesma conta numa sala de 79 lugares. Em celular e com movimento reduzido,
 * tudo aparece de uma vez.
 */
export function QuatroReguas({ className }: { className?: string }) {
  const { lang } = useLang();
  const { fmt } = useFmt();
  const L = (x: { pt: string; en: string }) => t(x, lang);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduced = useReducedMotion();
  const compact = useCompactMotion();
  const instant = !!reduced || compact;
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);
  const total = reguas.itens.length + 1;

  useEffect(() => {
    if (!inView) return;
    const timers = Array.from({ length: total }, (_, k) =>
      setTimeout(() => setStep(k + 1), instant ? 0 : 300 + k * STEP_MS),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, instant, run, total]);

  function replay() {
    setStep(0);
    setRun((r) => r + 1);
  }

  const done = step >= total;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow tone="amber">{L(reguas.eyebrow)}</Eyebrow>
          <Heading as="h2" className="mt-3 max-w-3xl">{L(reguas.title)}</Heading>
        </div>
        {!instant && (
          <button
            type="button"
            onClick={replay}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-line px-4 font-mono text-[0.65rem] uppercase tracking-wider text-fg-2 transition hover:border-line-strong hover:text-fg"
          >
            <RotateCcw className="h-3 w-3" />
            {L(reguas.replay)}
          </button>
        )}
      </div>
      <Lead className="mt-5">{L(reguas.lead)}</Lead>

      <div className="mt-8 rounded-3xl border border-line bg-bg-elev p-5 sm:p-7">
        <div className="flex flex-col gap-6">
          {reguas.itens.map((r, i) => {
            const on = step >= i + 1;
            const T = TONE[r.tom];
            const Icon = ICON[r.id];
            const w = Math.min(100, (r.valor / reguas.escala) * 100);
            return (
              <div
                key={r.id}
                className={cn(
                  "grid gap-2 transition-opacity duration-500 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:items-center sm:gap-6",
                  on ? "opacity-100" : "opacity-20",
                )}
              >
                <div className="flex items-start gap-3">
                  <span className={cn("inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border", T.ring)}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium leading-snug text-fg">{L(r.nome)}</p>
                    <p className="mt-0.5 text-xs leading-snug text-fg-3">{L(r.faz)}</p>
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="relative h-7 overflow-hidden rounded-md bg-bg-sunk" aria-hidden>
                    {TICKS.map((tk) => (
                      <span key={tk} className="absolute inset-y-0 w-px bg-line" style={{ left: `${(tk / reguas.escala) * 100}%` }} />
                    ))}
                    <motion.div
                      key={`${r.id}-${run}`}
                      className={cn("absolute inset-y-0 left-0 rounded-md", T.bar)}
                      initial={{ width: 0 }}
                      animate={{ width: on ? `${w}%` : 0 }}
                      transition={{ duration: instant ? 0.5 : 1, ease }}
                    />
                  </div>
                  <p className="mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className={cn("display tabular text-xl font-semibold sm:text-2xl", T.text)}>{fmt(r.valor)}</span>
                    <span className="text-sm leading-snug text-fg-2">{L(r.unidade)}</span>
                  </p>
                  {r.id === "tse" && (
                    <motion.p
                      className="mt-1 inline-block rounded-full border border-amber/40 bg-amber-soft px-3 py-1 font-mono text-[0.7rem] font-semibold text-amber"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: done ? 1 : 0, y: done ? 0 : 6 }}
                      transition={{ duration: 0.4 }}
                    >
                      {L(reguas.marcaTse)}
                    </motion.p>
                  )}
                </div>
              </div>
            );
          })}

          {/* Escala da régua */}
          <div className="hidden sm:grid sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-6" aria-hidden>
            <span />
            <div className="relative h-4 font-mono text-[0.62rem] text-fg-3">
              {TICKS.map((tk) => (
                <span key={tk} className="absolute -translate-x-1/2" style={{ left: `${(tk / reguas.escala) * 100}%` }}>
                  {lang === "pt" ? `${tk / 1000} mil` : `${tk / 1000}k`}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* A mesma conta, numa sala */}
      <motion.div
        className="mt-5 grid gap-5 rounded-3xl border border-amber/30 bg-amber-soft p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: done ? 1 : 0.15, y: done ? 0 : 12 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <p className="mb-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber">{L(reguas.salaTitle)}</p>
          <div
            className="flex flex-wrap gap-1.5"
            role="img"
            aria-label={`${SALA.ibge} · ${SALA.inss} · ${SALA.tse}`}
          >
            {Array.from({ length: SALA.tse }).map((_, i) => {
              const cor = i < SALA.ibge ? "bg-teal" : i < SALA.inss ? "bg-slate" : "bg-amber";
              return (
                <motion.span
                  key={`${i}-${run}`}
                  className={cn("inline-block h-3.5 w-3.5 rounded-full", cor)}
                  initial={{ scale: 0 }}
                  animate={{ scale: done ? 1 : 0 }}
                  transition={{ delay: done && !instant ? i * 0.012 : 0, type: "spring", stiffness: 300, damping: 20 }}
                />
              );
            })}
          </div>
          <ul className="mt-3 flex flex-col gap-1 text-xs text-fg-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
            <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-teal" />{SALA.ibge} {L(reguas.salaLegenda.ibge)}</li>
            <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-slate" />+{SALA.inss - SALA.ibge} {L(reguas.salaLegenda.inss)}</li>
            <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-amber" />+{SALA.tse - SALA.inss} {L(reguas.salaLegenda.tse)}</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <p className="display-md text-xl font-semibold leading-snug text-fg sm:text-2xl">{L(reguas.sala)}</p>
          <p className="text-[0.98rem] leading-relaxed text-fg-2">{L(reguas.saida)}</p>
        </div>
      </motion.div>

      <Sources className="mt-6">
        {reguas.fontes.map((f, i) => (
          <SourceTag key={i} tier={f.tier} source={L(f.source)} href={f.href} />
        ))}
      </Sources>
    </div>
  );
}
