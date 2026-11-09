"use client";

import { motion } from "motion/react";
import { Section, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Reveal, Stagger, staggerItem } from "@/components/ui/reveal";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { graves } from "@/data/codigo";
import { AnimFrame, IdChip } from "./shared";
import { MiniAnim } from "./mini-anims";

export function GravesSection() {
  const { lang, dict } = useLang();
  const d = dict.codigo.graves;
  const ui = dict.common.ui;
  return (
    <Section id="graves" className="border-t border-line">
      <Reveal>
        <Eyebrow tone="rose">{d.eyebrow}</Eyebrow>
        <Heading className="mt-3">{d.title}</Heading>
        <Lead className="mt-5">{d.lead}</Lead>
      </Reveal>
      <Stagger className="mt-12 grid gap-6 md:grid-cols-2" gap={0.1}>
        {graves.map((g) => (
          <motion.article key={g.n} variants={staggerItem} className="flex flex-col">
            <AnimFrame
              className="flex h-full flex-col"
              caption={
                <>
                  <span className="font-mono text-[0.62rem] uppercase tracking-widest text-amber">{ui.analogia} · </span>
                  {t(g.analogia, lang)}
                </>
              }
            >
              {(play) => (
                <div className="flex flex-col">
                  <div className="border-b border-line bg-bg-sunk/40 p-3 sm:p-4">
                    <MiniAnim kind={g.anim} play={play} />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="display tabular text-3xl font-semibold text-rose">{g.n}</span>
                      <h3 className="display-md text-lg font-semibold leading-tight text-fg">{t(g.titulo, lang)}</h3>
                    </div>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-fg-2">{t(g.leigo, lang)}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {g.ids.map((id) => (
                        <IdChip key={id} id={id} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </AnimFrame>
          </motion.article>
        ))}
      </Stagger>
    </Section>
  );
}
