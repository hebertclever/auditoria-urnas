import { Hero } from "@/components/home/hero";
import { Bento } from "@/components/home/bento";
import { Eixos } from "@/components/home/eixos";
import { ComoLer } from "@/components/home/como-ler";
import { NaoProvamos } from "@/components/home/nao-provamos";
import { metaFor } from "@/i18n/server";

export const generateMetadata = metaFor("home");

export default function HomePage() {
  return (
    <>
      <Hero />
      <Bento />
      <Eixos />
      <ComoLer />
      <NaoProvamos />
    </>
  );
}
