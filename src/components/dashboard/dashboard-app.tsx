"use client";

import { Container, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { useLang } from "@/i18n/context";
import { ModeProvider, ModeToggle } from "./mode";
import { Kpis } from "./kpis";
import { FaixaExplorer } from "./faixa";
import { UFExplorer } from "./uf";
import { MunicipiosPanel } from "./municipios";
import { InfladoPanel } from "./inflado";
import { LimpezaPanel } from "./limpeza";
import { GapsComponente } from "./gaps-componente";
import { ComoAuditar } from "./como-auditar";

export function DashboardApp() {
  const { dict } = useLang();
  const d = dict.dashboard;

  return (
    <ModeProvider>
      <div className="relative overflow-hidden border-b border-line">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <div className="glow-teal pointer-events-none absolute -top-40 left-[-10%] h-[30rem] w-[30rem] opacity-60" />
        <Container className="relative py-16 sm:py-20">
          <Eyebrow tone="teal">{d.hero.eyebrow}</Eyebrow>
          <Heading as="h1" className="mt-5 max-w-4xl">{d.hero.title}</Heading>
          <Lead className="mt-6 max-w-3xl">{d.hero.lead}</Lead>
        </Container>
      </div>

      <div className="sticky top-16 z-30 border-b border-line bg-glass backdrop-blur-xl" style={{ background: "var(--glass)" }}>
        <Container className="flex flex-wrap items-center justify-between gap-3 py-3">
          <p className="text-xs text-fg-3">{d.mode.hint}</p>
          <ModeToggle />
        </Container>
      </div>

      <Container className="py-10 sm:py-14">
        <div className="flex flex-col gap-6 sm:gap-8">
          <section className="scroll-mt-28">
            <Eyebrow tone="amber">{d.kpis.title}</Eyebrow>
            <Heading as="h2" className="mt-2">{d.kpis.title}</Heading>
            <Lead className="mb-6 mt-3 max-w-3xl">{d.kpis.lead}</Lead>
            <Kpis />
          </section>
          <FaixaExplorer />
          <UFExplorer />
          <MunicipiosPanel />
          <InfladoPanel />
          <LimpezaPanel />
          <GapsComponente />
          <ComoAuditar />
        </div>
      </Container>
    </ModeProvider>
  );
}
