import { Hero } from "@/components/home/hero";
import { Bento } from "@/components/home/bento";
import { Eixos } from "@/components/home/eixos";
import { OQueProva } from "@/components/home/o-que-prova";
import { MagnitudeBand } from "@/components/home/magnitude-band";
import { ComoLer } from "@/components/home/como-ler";
import { NaoProvamos } from "@/components/home/nao-provamos";
import { Section } from "@/components/ui/section";
import { QuatroReguas } from "@/components/shared/quatro-reguas";
import { LeiRevisao } from "@/components/shared/lei-revisao";
import { ObjetivoAuditoria } from "@/components/shared/objetivo-auditoria";
import { metaFor } from "@/i18n/server";

export const generateMetadata = metaFor("home");

// Ordem (ADR-URNA-073): exemplo leigo e INSS no topo → as quatro réguas → os números → a lei não cumprida →
// os dois eixos → o que está provado → para que serve (abrir o código e consertar o processo) → a conta → limites.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Section className="pt-4 sm:pt-6">
        <QuatroReguas />
      </Section>
      <Bento />
      <Section id="lei" className="border-t border-line">
        <LeiRevisao compact />
      </Section>
      <Eixos />
      <OQueProva />
      <Section id="objetivo" className="border-t border-line">
        <ObjetivoAuditoria />
      </Section>
      <MagnitudeBand />
      <ComoLer />
      <NaoProvamos />
    </>
  );
}
