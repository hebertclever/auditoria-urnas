"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { prova } from "@/data/prova";
import { useLang, useFmt } from "@/i18n/context";
import { t } from "@/i18n/config";
import { CountUp } from "@/components/ui/count-up";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { cn } from "@/lib/utils";

const toneText = { slate: "text-slate", teal: "text-teal", rose: "text-rose" } as const;

export function MagnitudeFunnel({ compact = false }: { compact?: boolean }) {
  const { lang, dict } = useLang();
  const { fmt } = useFmt();
  const m = prova.magnitude;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [key, setKey] = useState(0);

  const maxV = m.funil[0].value;

  return (
    <div ref={ref} className="relative">
      {/* Funil */}
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div key={key} className="flex flex-col gap-3">
          {m.funil.map((f, i) => {
            const w = 30 + (f.value / maxV) * 70; // 30%..100% largura
            const highlight = f.tone === "rose";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full"
                style={{ maxWidth: `${w}%` }}
              >
                <div
                  className={cn(
                    "rounded-2xl border px-5 py-4 text-center",
                    highlight ? "border-rose/40" : "border-line",
                  )}
                  style={{ background: highlight ? "var(--rose-soft)" : "var(--bg-elev)" }}
                >
                  <div className={cn("display tabular font-semibold", highlight ? "text-[clamp(2.2rem,6vw,3.5rem)]" : "text-[clamp(1.6rem,4vw,2.4rem)]", toneText[f.tone])}>
                    {inView ? <CountUp to={f.value} format="int" duration={1.2} /> : 0}
                  </div>
                  <p className={cn("mx-auto mt-1 max-w-sm text-sm leading-snug", highlight ? "text-fg" : "text-fg-2")}>{L(f.label)}</p>
                </div>
                {i < m.funil.length - 1 && (
                  <svg className="mx-auto my-1 block h-4 w-4 text-fg-3" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M8 2v9m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </motion.div>
            );
          })}
          <button
            type="button"
            onClick={() => setKey((k) => k + 1)}
            className="mx-auto mt-1 inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-fg-3 transition hover:text-fg"
          >
            <RotateCcw className="h-3 w-3" /> {dict.common.ui.replay}
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-2xl border border-rose/30 bg-rose-soft p-5 sm:p-6">
            <p className="text-sm text-fg-2">{L(m.cicloLabel)}</p>
            <div className="display tabular mt-1 text-[clamp(2.4rem,7vw,4rem)] font-semibold text-rose">
              {inView ? <CountUp to={m.ciclo} format="compact" duration={1.6} /> : 0}
            </div>
            <p className="text-sm font-medium text-fg">{L(m.cicloUnidade)}</p>
          </div>

          {!compact && (
            <div>
              <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{L(m.sinaisTitle)}</p>
              <ul className="flex flex-col gap-3">
                {m.sinais.map((s, i) => (
                  <li key={i} className="flex gap-3 rounded-xl border border-line bg-bg-elev p-4">
                    <span className="display tabular shrink-0 text-2xl font-semibold text-amber">{fmt(s.value)}</span>
                    <span className="text-[0.88rem] leading-snug text-fg-2">{L(s.label)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {!compact && (
        <>
          <Callout tone="amber" className="mt-8">
            <p>{L(m.cap)}</p>
          </Callout>
          <Sources className="mt-6">
            {m.fontes.map((f, i) => (
              <SourceTag key={i} tier={f.tier} source={L(f.source)} date={f.date} href={f.href} />
            ))}
          </Sources>
        </>
      )}
    </div>
  );
}
