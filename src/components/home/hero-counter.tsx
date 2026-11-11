"use client";

import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { useFmt, useLang } from "@/i18n/context";
import { centenarios } from "@/data/cadastro";
import { cn } from "@/lib/utils";

const FROM = centenarios.censo2022;
const TO = centenarios.tse2026Aptos100;

/**
 * Phones: both figures at once, with bars. The counter below takes four seconds to make its point and a
 * reader who scrolls past earlier only sees the smaller number.
 */
function HeroCompare() {
  const { dict } = useLang();
  const h = dict.home.hero;
  const { fmtInt, loc } = useFmt();
  const rows = [
    { value: FROM, label: h.counterA, text: "text-teal", bar: "bg-teal", width: (FROM / TO) * 100 },
    { value: TO, label: h.counterB, text: "text-amber", bar: "bg-amber", width: 100 },
  ];
  return (
    <div className="relative overflow-hidden rounded-3xl border border-line bg-bg-elev/70 p-5 sm:p-7">
      <div className="glow-amber pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-60 blur-3xl" />
      <p className="relative font-mono text-[0.68rem] uppercase tracking-[0.18em] text-fg-3">{h.counterUnit}</p>
      <div className="relative mt-4 flex flex-col gap-5">
        {rows.map((r) => (
          <div key={r.label}>
            <p className={cn("display tabular text-[clamp(2.4rem,11vw,3.4rem)] font-semibold leading-none", r.text)}>{fmtInt(r.value)}</p>
            <p className="mt-1.5 text-sm leading-snug text-fg-2">{r.label}</p>
            <span className="mt-2.5 block h-2 overflow-hidden rounded-full bg-bg-sunk">
              <motion.span
                className={cn("block h-full rounded-full", r.bar)}
                initial={{ width: 0 }}
                whileInView={{ width: `${r.width}%` }}
                viewport={{ once: true, margin: "0px 0px 10% 0px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
          </div>
        ))}
      </div>
      <p className="relative mt-5 border-t border-line pt-4 text-[0.95rem] leading-snug text-fg-2">
        <strong className="display tabular text-2xl font-semibold text-amber">
          {(TO / FROM).toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
        </strong>{" "}
        {h.counterRatio}
      </p>
    </div>
  );
}

function AnimatedCounter() {
  const { dict } = useLang();
  const h = dict.home.hero;
  const { fmtInt } = useFmt();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const controls = useRef<ReturnType<typeof animate> | null>(null);
  const [val, setVal] = useState(FROM);
  const [phase, setPhase] = useState<"a" | "b">("a");
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const timer = setTimeout(() => {
      setPhase("b");
      controls.current = animate(FROM, TO, {
        duration: 2.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => setVal(v),
      });
    }, 1700);
    return () => {
      clearTimeout(timer);
      controls.current?.stop();
    };
  }, [inView, reduced, run]);

  const shownVal = reduced ? TO : val;
  const shownPhase: "a" | "b" = reduced ? "b" : phase;
  const pct = Math.min(100, (shownVal / TO) * 100);

  function replay() {
    controls.current?.stop();
    setVal(FROM);
    setPhase("a");
    setRun((r) => r + 1);
  }

  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl border border-line bg-bg-elev/70 p-6 sm:p-8">
      <div
        className={cn(
          "pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full blur-3xl transition-colors duration-1000",
          shownPhase === "a" ? "glow-teal" : "glow-amber",
        )}
      />
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-fg-3">{h.counterUnit}</p>
      <p
        className={cn(
          "display tabular mt-3 text-[clamp(2.8rem,7vw,5.2rem)] font-semibold leading-none transition-colors duration-700",
          shownPhase === "a" ? "text-teal" : "text-amber",
        )}
        aria-live="polite"
      >
        {fmtInt(shownVal)}
      </p>
      <div className="mt-4 flex items-start justify-between gap-4">
        <p className="max-w-[22ch] text-sm leading-snug text-fg-2">
          <span key={shownPhase} className="inline-block animate-[heroFade_.5s_ease_both]">
            {shownPhase === "a" ? h.counterA : h.counterB}
          </span>
        </p>
        {!reduced && (
          <button
            type="button"
            onClick={replay}
            aria-label={h.replay}
            title={h.replay}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-fg-3 transition hover:border-line-strong hover:text-fg"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg-sunk">
          <span className="block h-full rounded-full bg-amber transition-[width] duration-300 ease-out" style={{ width: `${pct}%` }} />
        </span>
        <span className="font-mono text-xs tabular text-fg-3">{Math.round(pct)}%</span>
      </div>
      <style>{`@keyframes heroFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}

/** CSS picks the variant, so the first paint is right on every screen and the hidden one never starts. */
export function HeroCounter() {
  return (
    <>
      <div className="lg:hidden">
        <HeroCompare />
      </div>
      <div className="hidden lg:block">
        <AnimatedCounter />
      </div>
    </>
  );
}
