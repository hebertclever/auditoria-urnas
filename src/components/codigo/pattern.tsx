"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Section, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { useLang, useFmt } from "@/i18n/context";
import { t } from "@/i18n/config";
import { kit, probabilidade } from "@/data/codigo";
import { AnimFrame, ease } from "./shared";

function DensityBars() {
  const { dict } = useLang();
  const { fmtInt } = useFmt();
  const d = dict.codigo.padrao.densidade;
  const rows = [
    { label: d.comercial, per1000: 1, tone: "bg-teal" },
    { label: d.ruim, per1000: 5, tone: "bg-amber" },
    { label: d.tse, per1000: 1000 / kit.linhasPorGap, tone: "bg-rose", strong: true },
  ];
  const max = Math.max(...rows.map((r) => r.per1000));
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  return (
    <div ref={ref} className="rounded-3xl border border-line bg-bg-elev p-5 sm:p-7">
      <p className="font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{d.title}</p>
      <div className="mt-5 space-y-4">
        {rows.map((r, i) => (
          <div key={r.label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
              <span className={cn(r.strong ? "font-semibold text-fg" : "text-fg-2")}>{r.label}</span>
              <span className="tabular font-mono text-xs text-fg-3">
                {r.per1000.toLocaleString(undefined, { maximumFractionDigits: 1 })} {d.por1000}
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-bg-sunk">
              <motion.div
                className={cn("h-full rounded-full", r.tone)}
                initial={{ width: 0 }}
                animate={inView ? { width: `${Math.max(2, (r.per1000 / max) * 100)}%` } : {}}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.2, ease }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-fg-2">
        <span className="font-mono text-rose">{d.razao} {fmtInt(kit.linhasPorGap)} {d.linhas}</span>
        <span className="text-fg-3"> · </span>
        {d.nota}
      </p>
    </div>
  );
}

function Coins({ play }: { play: boolean }) {
  const { lang, dict } = useLang();
  const d = dict.codigo.padrao.moedas;
  const [count, setCount] = useState(0);
  const n = probabilidade.gaps;
  const per = 0.035;
  const total = n * per + 0.7;
  useEffect(() => {
    if (!play) return;
    const c = animate(0, n, { duration: total, ease: "linear", onUpdate: (v) => setCount(Math.floor(v)) });
    return () => c.stop();
  }, [play, n, total]);
  const done = count >= n;
  return (
    <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[auto_1fr] lg:items-center">
      <div className="grid grid-cols-9 gap-1.5 sm:gap-2" style={{ perspective: 600 }}>
        {Array.from({ length: n }).map((_, i) => (
          <motion.div
            key={i}
            className="relative h-7 w-7 sm:h-8 sm:w-8"
            initial={{ rotateY: 0 }}
            animate={play ? { rotateY: 180 } : {}}
            transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.3 + i * per }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 flex items-center justify-center rounded-full border border-line-strong bg-bg font-mono text-[0.7rem] text-fg-3" style={{ backfaceVisibility: "hidden" }}>
              ?
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-amber font-mono text-sm font-bold text-[#0a0c10]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
              −
            </div>
          </motion.div>
        ))}
      </div>
      <div>
        <p className="display tabular text-[clamp(2.4rem,5vw,3.6rem)] font-semibold text-amber">
          {count}
          <span className="text-fg-3"> / {n}</span>
        </p>
        <p className="text-sm text-fg-2">{d.counter}</p>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={done ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }} className="mt-5 space-y-1.5">
          <p className="font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{d.prob}</p>
          <p className="font-mono text-sm text-fg-2">
            0,5<sup>63</sup> ≈ 1,08 × 10<sup>−19</sup>
          </p>
          <p className="display-md text-2xl font-semibold text-fg">
            {d.umEm} {t(probabilidade.umEm, lang)}
          </p>
          <p className="text-sm text-fg-2">
            {d.compara} {t(probabilidade.comparacao, lang)}.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function PatternSection() {
  const { lang, dict } = useLang();
  const d = dict.codigo.padrao;
  return (
    <Section id="padrao" className="border-t border-line">
      <Reveal>
        <Eyebrow tone="rose">{d.eyebrow}</Eyebrow>
        <Heading className="mt-3">{d.title}</Heading>
        <Lead className="mt-5">{d.lead}</Lead>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <DensityBars />
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <p className="font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{d.moedas.title}</p>
        <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-fg-2">{d.moedas.lead}</p>
        <div className="mt-5">
          <AnimFrame caption={d.moedas.pergunta}>{(play) => <Coins play={play} />}</AnimFrame>
        </div>
        <Callout tone="neutral" title={d.moedas.ressalvaTitle} className="mt-4">
          {t(probabilidade.ressalva, lang)}
        </Callout>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <p className="font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{d.categorias.title}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1.6fr]">
          <div className="rounded-3xl border border-teal/30 bg-teal-soft p-5 sm:p-6">
            <p className="font-semibold text-fg">{d.categorias.normais.title}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-fg-2">
              {d.categorias.normais.items.map((i) => (
                <li key={i} className="flex gap-2"><span className="text-teal">·</span>{i}</li>
              ))}
            </ul>
            <p className="display-md mt-4 text-xl font-semibold text-teal">{d.categorias.normais.total}</p>
          </div>
          <div className="rounded-3xl border border-rose/30 bg-rose-soft p-5 sm:p-6">
            <p className="font-semibold text-fg">{d.categorias.estruturais.title}</p>
            <ul className="mt-3 grid gap-x-6 gap-y-1.5 text-sm text-fg-2 sm:grid-cols-2">
              {d.categorias.estruturais.items.map((i) => (
                <li key={i} className="flex gap-2"><span className="text-rose">·</span>{i}</li>
              ))}
            </ul>
            <p className="display-md mt-4 text-xl font-semibold text-rose">{d.categorias.estruturais.total}</p>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg-2">{d.categorias.nota}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 rounded-3xl border border-line bg-bg-elev p-5 sm:p-7">
        <p className="font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{d.contra.title}</p>
        <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-fg-2">{d.contra.lead}</p>
        <ul className="mt-5 divide-y divide-line">
          {d.contra.items.map((i) => (
            <li key={i} className="flex items-center justify-between gap-4 py-3 text-sm">
              <span className="text-fg-2">{i}</span>
              <span className="shrink-0 rounded-md border border-rose/40 bg-rose-soft px-2 py-0.5 font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-rose">
                {dict.common.ui.nao}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5 font-semibold text-fg">{d.contra.nenhum}</p>
      </Reveal>
    </Section>
  );
}
