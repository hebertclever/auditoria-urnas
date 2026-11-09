import { metaFor } from "@/i18n/server";
import { CodigoHero } from "@/components/codigo/hero";
import { FlowSection } from "@/components/codigo/flow";
import { BankSection } from "@/components/codigo/bank";
import { GravesSection } from "@/components/codigo/graves";
import { VerificavelSection } from "@/components/codigo/verificavel";
import { PatternSection } from "@/components/codigo/pattern";
import { TimelineSection } from "@/components/codigo/timeline";
import { ClosingSection } from "@/components/codigo/closing";

export const generateMetadata = metaFor("codigo");

export default function CodigoPage() {
  return (
    <>
      <CodigoHero />
      <FlowSection />
      <BankSection />
      <GravesSection />
      <VerificavelSection />
      <PatternSection />
      <TimelineSection />
      <ClosingSection />
    </>
  );
}
