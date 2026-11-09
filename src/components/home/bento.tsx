"use client";

import { Section, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { StatTile } from "@/components/ui/stat-tile";
import { SourceTag } from "@/components/ui/source-tag";
import { Stagger, staggerItem } from "@/components/ui/reveal";
import { motion } from "motion/react";
import { useLang } from "@/i18n/context";
import type { StatFormat } from "@/lib/format";
import { centenarios, centenariosRazao, limpeza, municipios, resumoControle } from "@/data/cadastro";
import { kit } from "@/data/codigo";

export function Bento() {
  const { dict } = useLang();
  const b = dict.home.bento;

  const tiles: { value: number; label: string; tone: "amber" | "teal" | "rose" | "neutral"; big?: boolean; cls?: string; format?: StatFormat }[] = [
    { value: centenarios.tse2026Aptos100, label: b.centenarios, tone: "amber", big: true, cls: "sm:col-span-2" },
    { value: centenariosRazao, label: b.razao, tone: "amber", format: "x1" },
    { value: limpeza.gapAnual, label: b.gap, tone: "rose", format: "compact" },
    { value: resumoControle.razao, label: b.controle, tone: "teal", format: "x0" },
    { value: municipios.totais.votosMaiorPop, label: b.municipios, tone: "neutral" },
    { value: kit.gaps, label: b.gaps, tone: "rose" },
  ];

  return (
    <Section className="pt-6 sm:pt-10">
      <Eyebrow tone="amber">{b.eyebrow}</Eyebrow>
      <Heading className="mt-3">{b.title}</Heading>
      <Lead className="mt-4">{b.lead}</Lead>
      <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
        {tiles.map((tl, i) => (
          <motion.div key={i} variants={staggerItem} className={tl.cls}>
            <StatTile value={tl.value} label={tl.label} tone={tl.tone} big={tl.big} format={tl.format} className="h-full" />
          </motion.div>
        ))}
      </Stagger>
      <div className="mt-6">
        <SourceTag tier="T0" source={b.sources} />
      </div>
    </Section>
  );
}
