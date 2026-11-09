"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Section, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { useLang, useFmt } from "@/i18n/context";
import { t } from "@/i18n/config";
import { componentes, timeline } from "@/data/codigo";
import { ease } from "./shared";

export function TimelineSection() {
  const { lang, dict } = useLang();
  const { fmtInt } = useFmt();
  const d = dict.codigo.timeline;
  const c = dict.codigo.componentes;
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const maxDens = Math.max(...componentes.map((x) => x.gaps / x.linhas));

  return (
    <Section id="timeline" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow tone="amber">{d.eyebrow}</Eyebrow>
            <Heading className="mt-3">{d.title}</Heading>
            <Lead className="mt-5">{d.lead}</Lead>
          </Reveal>
          <ol ref={ref} className="relative mt-10 space-y-8 pl-8">
            <motion.span
              aria-hidden
              className="absolute left-[7px] top-2 w-px origin-top bg-line-strong"
              initial={{ scaleY: 0, height: "100%" }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.4, ease }}
            />
            {timeline.map((item, i) => (
              <motion.li
                key={item.ano.pt}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.3, ease }}
                className="relative"
              >
                <span className="absolute -left-8 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-bg bg-amber" style={{ boxShadow: "0 0 0 3px var(--amber-soft)" }} />
                <p className="font-mono text-xs uppercase tracking-widest text-amber">{t(item.ano, lang)}</p>
                <p className="display-md mt-1 text-lg font-semibold text-fg">{t(item.titulo, lang)}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-fg-2">{t(item.detalhe, lang)}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.15} className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-3xl border border-line bg-bg-elev">
            <div className="border-b border-line px-5 py-4">
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{c.title}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="data-table w-full min-w-[520px] text-sm">
                <thead>
                  <tr>
                    <th>{c.cols.arquivo}</th>
                    <th className="text-right">{c.cols.linhas}</th>
                    <th className="text-right">{c.cols.gaps}</th>
                    <th>{c.cols.densidade}</th>
                  </tr>
                </thead>
                <tbody>
                  {componentes.map((x, i) => (
                    <tr key={x.arquivo}>
                      <td className="font-mono text-xs text-fg">{x.arquivo}</td>
                      <td className="tabular text-right font-mono text-xs text-fg-2">{fmtInt(x.linhas)}</td>
                      <td className="tabular text-right font-mono text-xs font-semibold text-rose">{x.gaps}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-bg-sunk">
                            <motion.div
                              className="h-full rounded-full bg-rose"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${((x.gaps / x.linhas) / maxDens) * 100}%` } : {}}
                              transition={{ duration: 0.9, delay: 0.3 + i * 0.08, ease }}
                            />
                          </div>
                          <span className="tabular whitespace-nowrap font-mono text-[0.68rem] text-fg-3">
                            {c.densFmt} {Math.round(x.densidade)} {c.linhas}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="font-mono text-xs text-fg-3">{c.interversao}</td>
                    <td className="text-right font-mono text-xs text-fg-3">—</td>
                    <td className="tabular text-right font-mono text-xs font-semibold text-rose">13</td>
                    <td className="font-mono text-[0.68rem] text-fg-3">v1 → v2.0 → v2.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
