import { Section, Heading, Lead, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { resolveLang, metaFor } from "@/i18n/server";
import { GapsTable } from "@/components/dados/gaps-table";
import { Testes } from "@/components/dados/testes";
import { CopyJsonList } from "@/components/dados/copy-json";
import { getGaps, kit } from "@/data/codigo";
import { centenarios, deltaPorFaixa2022, fantasmas90, historicoInversao, limpeza, municipios } from "@/data/cadastro";

export const generateMetadata = metaFor("dados");

export default async function DadosPage({ params }: PageProps<"/[lang]/dados">) {
  const { lang, dict } = await resolveLang(params);
  const d = dict.dados;
  const gaps = getGaps(lang);

  const files = [
    { key: "delta_1t_2t_2022", label: d.arquivos.items.delta, data: deltaPorFaixa2022 },
    { key: "inversao_2014_2018_2022", label: d.arquivos.items.historico, data: historicoInversao },
    { key: "gaps63", label: d.arquivos.items.gaps, data: gaps },
    { key: "municipios_votos_pop", label: d.arquivos.items.municipios, data: { top20: municipios.top20, sensibilidade: municipios.sensibilidade, totais: municipios.totais } },
    { key: "centenarios", label: d.arquivos.items.centenarios, data: { ...centenarios, fantasmas90 } },
    { key: "limpeza_cadastral", label: d.arquivos.items.limpeza, data: limpeza },
  ];

  return (
    <>
      <Section className="relative overflow-hidden pb-10 sm:pb-12">
        <div className="grid-texture pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <Eyebrow>{d.hero.eyebrow}</Eyebrow>
        <Heading as="h1" className="mt-5">{d.hero.title}</Heading>
        <Lead className="mt-6">{d.hero.lead}</Lead>
      </Section>

      <Section id="gaps" className="pt-10 sm:pt-12">
        <Reveal>
          <Eyebrow tone="rose">{d.gaps.eyebrow}</Eyebrow>
          <Heading className="mt-3">{d.gaps.title}</Heading>
          <Lead className="mt-4">{d.gaps.lead}</Lead>
          <p className="mt-3 font-mono text-xs text-fg-3">
            {kit.linhas.toLocaleString(lang === "pt" ? "pt-BR" : "en-US")} {lang === "pt" ? "linhas" : "lines"} · {d.gaps.density.replace("{n}", String(kit.linhasPorGap))}
          </p>
        </Reveal>
        <div className="mt-8">
          <GapsTable gaps={gaps} />
        </div>
      </Section>

      <Section id="testes" className="border-t border-line">
        <Reveal>
          <Eyebrow tone="amber">{d.testes.eyebrow}</Eyebrow>
          <Heading className="mt-3">{d.testes.title}</Heading>
          <Lead className="mt-4">{d.testes.lead}</Lead>
        </Reveal>
        <Testes lang={lang} dict={dict} />
      </Section>

      <Section id="arquivos" className="border-t border-line">
        <Reveal>
          <Eyebrow>{d.arquivos.eyebrow}</Eyebrow>
          <Heading className="mt-3">{d.arquivos.title}</Heading>
          <Lead className="mt-4">{d.arquivos.lead}</Lead>
        </Reveal>
        <div className="mt-8">
          <CopyJsonList items={files} />
        </div>
      </Section>
    </>
  );
}
