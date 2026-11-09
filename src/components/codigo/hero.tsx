"use client";

import { ArrowDownRight } from "lucide-react";
import { Container, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { StatTile } from "@/components/ui/stat-tile";
import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/i18n/context";
import { kit } from "@/data/codigo";

export function CodigoHero() {
  const { dict } = useLang();
  const d = dict.codigo.hero;
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grid-texture pointer-events-none absolute inset-0" />
      <div className="glow-amber pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] opacity-60" />
      <Container className="relative py-20 sm:py-28">
        <Reveal>
          <Eyebrow tone="rose">{d.eyebrow}</Eyebrow>
          <Heading as="h1" className="mt-4 max-w-4xl">{d.title}</Heading>
          <Lead className="mt-7">{d.lead}</Lead>
        </Reveal>
        <Reveal delay={0.15} className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatTile value={kit.gaps} tone="rose" label={d.stats.gaps} />
          <StatTile value={kit.linhas} label={d.stats.linhas} format="int" />
          <StatTile value={kit.linhasPorGap} prefix="1 : " label={d.stats.densidade} tone="amber" />
          <StatTile value={100} suffix="%" tone="rose" label={d.stats.direcao} />
        </Reveal>
        <Reveal delay={0.25} className="mt-6 flex items-start gap-3 rounded-2xl border border-rose/30 bg-rose-soft px-5 py-4 text-[0.95rem] text-fg">
          <ArrowDownRight className="mt-0.5 h-5 w-5 shrink-0 text-rose" />
          <p className="leading-relaxed">{d.strip}</p>
        </Reveal>
      </Container>
    </section>
  );
}
