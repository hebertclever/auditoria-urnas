import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container, Eyebrow, Heading, Lead, Prose } from "@/components/ui/section";
import { StatTile } from "@/components/ui/stat-tile";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { Reveal, Stagger, staggerItem } from "@/components/ui/reveal";
import { href } from "@/i18n/routes";
import { IbgeConfiabilidade } from "@/components/shared/ibge-confiabilidade";
import { resolveLang, metaFor } from "@/i18n/server";
import { t } from "@/i18n/config";
import { Scrolly } from "@/components/cadastro/scrolly";
import { MethodDetails, PillarHeader, PillarIndex, WhyList } from "@/components/cadastro/pillar";
import { ChartCapacidade, ChartCentenarios, ChartHistorico, ChartInversao, ChartLimpeza, ChartSensibilidade } from "@/components/cadastro/charts";
import { TabelaAcumulado, TabelaAgregacao, TabelaInternacional, TabelaMunicipios } from "@/components/cadastro/tables";
import { MotionItem } from "@/components/cadastro/motion-item";
import {
  centenarios,
  centenariosPctFantasma,
  centenariosRazao,
  historicoInversao,
  limpeza,
  municipios,
  resumoControle,
} from "@/data/cadastro";

export const generateMetadata = metaFor("cadastro");

const SRC = {
  tse2022: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2022",
  tse2018: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2018",
  tse2014: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2014",
  tse2026: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2026",
  sidra9514: "https://sidra.ibge.gov.br/tabela/9514",
  sidra6579: "https://sidra.ibge.gov.br/tabela/6579",
  sidra8375: "https://sidra.ibge.gov.br/tabela/8375",
  sim: "https://datasus.saude.gov.br/transferencia-de-arquivos/",
  cancel2022: "https://www.tse.jus.br/comunicacao/noticias/2023/Maio/justica-eleitoral-cancelou-quase-800-mil-titulos-em-2022",
  res22166: "https://www.tse.jus.br/legislacao/compilada/res/2006/resolucao-no-22-166-de-9-de-marco-de-2006",
  res23659: "https://www.tse.jus.br/legislacao/compilada/res/2021/resolucao-no-23-659-de-26-de-outubro-de-2021",
  bweb2026: "https://dadosabertos.tse.jus.br/dataset/resultados-2026-boletim-de-urna",
  unwpp: "https://population.un.org/wpp/",
  lima: "https://www.scielo.br/j/rbgg/a/BYxNrspkzg8KkZFBfhp8cyf/?lang=pt",
  aomori: "https://www.pref.aomori.lg.jp/soshiki/senkan/files2/voter_turnout_by_agegroup2026.pdf",
};

export default async function CadastroPage({ params }: PageProps<"/[lang]/cadastro">) {
  const { lang, dict } = await resolveLang(params);
  const d = dict.cadastro;
  const u = d.ui;
  const isPt = lang === "pt";

  const pillars = [
    { id: "inversao", n: 1, label: d.p1.short },
    { id: "centenarios", n: 2, label: d.p2.short },
    { id: "limpeza", n: 3, label: d.p3.short },
    { id: "municipios", n: 4, label: d.p4.short },
    { id: "capacidade", n: 5, label: d.p5.short },
  ];

  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-line">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <div className="glow-amber pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] opacity-70" />
        <Container className="relative py-20 sm:py-28">
          <Reveal>
            <Eyebrow tone="amber">{d.hero.eyebrow}</Eyebrow>
            <Heading as="h1" className="mt-5 max-w-4xl">{d.hero.title}</Heading>
            <Lead className="mt-7 max-w-3xl">{d.hero.lead}</Lead>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <MotionItem variants={staggerItem}><StatTile value={centenarios.tse2026Aptos100} label={d.hero.stats.tse} tone="amber" /></MotionItem>
            <MotionItem variants={staggerItem}><StatTile value={centenariosRazao} format="dec1" suffix="×" label={d.hero.stats.razao} tone="amber" /></MotionItem>
            <MotionItem variants={staggerItem}><StatTile value={limpeza.gapAnual} format="compact" label={d.hero.stats.gap} tone="rose" /></MotionItem>
            <MotionItem variants={staggerItem}><StatTile value={resumoControle.razao} suffix="×" label={d.hero.stats.controle} tone="teal" /></MotionItem>
          </Stagger>
          <Reveal delay={0.2} className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-2xl text-sm leading-relaxed text-fg-2">{d.hero.note}</p>
            <PillarIndex title={u.indice} items={pillars.map((p) => ({ href: `#${p.id}`, label: p.label, n: p.n }))} />
          </Reveal>
        </Container>
      </div>

      {/* PILAR 1 */}
      <Section id="inversao">
        <PillarHeader eyebrow={d.p1.eyebrow} stars={5} starsLabel={u.forca} title={d.p1.title} lead={d.p1.lead} />
        <Scrolly steps={d.p1.steps} visual="corrida" />
        <div className="mt-6 grid gap-6">
          <Reveal><ChartInversao /></Reveal>
          <Reveal><ChartHistorico /></Reveal>
          <Stagger className="grid grid-cols-3 gap-3">
            {historicoInversao.map((h) => (
              <MotionItem key={h.ano} variants={staggerItem}>
                <StatTile value={h.excesso} label={`${h.ano} · ${d.p1.hist.excesso}`} tone={h.ano === "2022" ? "amber" : "neutral"} />
              </MotionItem>
            ))}
          </Stagger>
          <div className="grid gap-6 lg:grid-cols-2">
            <WhyList title={d.p1.why.title} items={d.p1.why.items} />
            <div className="grid gap-6">
              <MethodDetails summary={u.comoMedimos} body={d.p1.method} />
              <Callout tone="amber" title={u.naoProva}>{d.p1.naoProva}</Callout>
            </div>
          </div>
          <Sources>
            <SourceTag tier="T0" source={isPt ? "TSE · Comparecimento e abstenção por perfil, 2022" : "TSE · Turnout and abstention by profile, 2022"} date="2022" href={SRC.tse2022} />
            <SourceTag tier="T0" source={isPt ? "TSE · idem, 2018" : "TSE · same, 2018"} date="2018" href={SRC.tse2018} />
            <SourceTag tier="T0" source={isPt ? "TSE · idem, 2014" : "TSE · same, 2014"} date="2014" href={SRC.tse2014} />
          </Sources>
        </div>
      </Section>

      {/* PILAR 2 */}
      <Section id="centenarios" className="border-t border-line">
        <PillarHeader eyebrow={d.p2.eyebrow} stars={4} starsLabel={u.forca} title={d.p2.title} lead={d.p2.lead} />
        <Scrolly steps={d.p2.steps} visual="condominio" />
        <div className="mt-6 grid gap-6">
          <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <MotionItem variants={staggerItem}><StatTile value={centenariosPctFantasma * 100} format="pct0" label={d.p2.stats.fantasma} tone="rose" /></MotionItem>
            <MotionItem variants={staggerItem}><StatTile value={123 / 7.5} format="dec1" suffix="×" label={d.p2.stats.japao} tone="amber" /></MotionItem>
            <MotionItem variants={staggerItem}><StatTile value={centenarios.municipiosZeroObitos.qtd} label={d.p2.stats.zero} tone="neutral" /></MotionItem>
          </Stagger>
          <Reveal><ChartCentenarios /></Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <WhyList title={d.p2.why.title} items={d.p2.why.items} />
            <div className="grid gap-6">
              <MethodDetails summary={u.comoMedimos} body={d.p2.method} />
              <Callout tone="amber" title={u.naoProva}>{d.p2.naoProva}</Callout>
            </div>
          </div>
          <Sources>
            <SourceTag tier="T0" source={isPt ? "IBGE · Censo 2022, SIDRA 9514" : "IBGE · 2022 Census, SIDRA 9514"} date="2022" href={SRC.sidra9514} />
            <SourceTag tier="T0" source={isPt ? "TSE · Comparecimento e abstenção por perfil, 2026" : "TSE · Turnout and abstention by profile, 2026"} date="2026" href={SRC.tse2026} />
            <SourceTag tier="T0" source="DATASUS · SIM 2020–2024" date="2024" href={SRC.sim} />
            <SourceTag tier="T1" source={isPt ? "ONU · World Population Prospects" : "UN · World Population Prospects"} date="2024" href={SRC.unwpp} />
          </Sources>
        </div>
      </Section>

      {/* PILAR 3 */}
      <Section id="limpeza" className="border-t border-line">
        <PillarHeader eyebrow={d.p3.eyebrow} stars={4} starsLabel={u.forca} title={d.p3.title} lead={d.p3.lead} />
        <Scrolly steps={d.p3.steps} visual="funil" />
        <div className="mt-6 grid gap-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <Reveal><ChartLimpeza /></Reveal>
            <Reveal><TabelaAcumulado /></Reveal>
          </div>
          <Callout tone="rose" title={d.p3.correcao}>{t(limpeza.nota17505, lang)}</Callout>
          <div className="grid gap-6 lg:grid-cols-2">
            <WhyList title={d.p3.why.title} items={d.p3.why.items} />
            <div className="grid gap-6">
              <MethodDetails summary={u.comoMedimos} body={d.p3.method} />
              <Callout tone="amber" title={u.naoProva}>{d.p3.naoProva}</Callout>
            </div>
          </div>
          <Sources>
            <SourceTag tier="T0" source={isPt ? "TSE · Justiça Eleitoral cancelou quase 800 mil títulos em 2022" : "TSE · Electoral Justice cancelled nearly 800k registrations in 2022"} date={isPt ? "mai 2023" : "May 2023"} href={SRC.cancel2022} />
            <SourceTag tier="T0" source="DATASUS · SIM" date="2022" href={SRC.sim} />
            <SourceTag tier="T0" source={isPt ? "TSE · Resolução 22.166/2006" : "TSE · Resolution 22.166/2006"} date="2006" href={SRC.res22166} />
          </Sources>
        </div>
      </Section>

      {/* PILAR 4 */}
      <Section id="municipios" className="border-t border-line">
        <PillarHeader eyebrow={d.p4.eyebrow} stars={3} starsLabel={u.forca} title={d.p4.title} lead={d.p4.lead} />
        <Scrolly steps={d.p4.steps} visual="estadio" />
        <div className="mt-6 grid gap-6">
          <IbgeConfiabilidade variant="cadastro" />
          <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <MotionItem variants={staggerItem}><StatTile value={municipios.totais.aptosMaiorPop} label={d.p4.stats.aptosPop} tone="amber" /></MotionItem>
            <MotionItem variants={staggerItem}><StatTile value={municipios.totais.votosMaiorPop} label={d.p4.stats.votosPop} tone="rose" /></MotionItem>
            <MotionItem variants={staggerItem}><StatTile value={municipios.top20[0].aptosPop} format="dec1" label={d.p4.stats.davi} tone="amber" /></MotionItem>
          </Stagger>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <Reveal><ChartSensibilidade /></Reveal>
            <Reveal><TabelaMunicipios /></Reveal>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <WhyList title={d.p4.why.title} items={d.p4.why.items} />
            <div className="grid gap-6">
              <MethodDetails summary={u.comoMedimos} body={d.p4.method} />
              <Callout tone="amber" title={u.naoProva}>{d.p4.naoProva}</Callout>
            </div>
          </div>
          <Sources>
            <SourceTag tier="T0" source={isPt ? "TSE · Boletim de urna (BWEB), 2º turno 2026" : "TSE · Ballot box bulletins (BWEB), 2026 runoff"} date="2026" href={SRC.bweb2026} />
            <SourceTag tier="T0" source={isPt ? "IBGE · Estimativas populacionais 2026, SIDRA 6579" : "IBGE · 2026 population estimates, SIDRA 6579"} date="2026" href={SRC.sidra6579} />
            <SourceTag tier="T0" source={isPt ? "TSE · Resolução 23.659/2021, art. 23 (domicílio eleitoral)" : "TSE · Resolution 23.659/2021, art. 23 (electoral domicile)"} date="2021" href={SRC.res23659} />
          </Sources>
        </div>
      </Section>

      {/* PILAR 5 */}
      <Section id="capacidade" className="border-t border-line">
        <PillarHeader eyebrow={d.p5.eyebrow} stars={3} starsLabel={u.forca} title={d.p5.title} lead={d.p5.lead} />
        <Scrolly steps={d.p5.steps} visual="capacidade" />
        <div className="mt-6 grid gap-6">
          <Reveal><ChartCapacidade /></Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Reveal><TabelaInternacional /></Reveal>
            <WhyList title={d.p5.why.title} items={d.p5.why.items} />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <MethodDetails summary={u.comoMedimos} body={d.p5.method} />
            <Callout tone="amber" title={u.naoProva}>{d.p5.naoProva}</Callout>
          </div>
          <Sources>
            <SourceTag tier="T0" source={isPt ? "IBGE · PNS 2019, SIDRA 8375 (AVD por idade)" : "IBGE · PNS 2019, SIDRA 8375 (ADL by age)"} date="2019" href={SRC.sidra8375} />
            <SourceTag tier="T1" source="Lima, Souza Jr. & Teixeira · Rev. Bras. Geriatr. Gerontol." date="2024" href={SRC.lima} />
            <SourceTag tier="T0" source={isPt ? "TSE · Comparecimento e abstenção por perfil, 2022" : "TSE · Turnout and abstention by profile, 2022"} date="2022" href={SRC.tse2022} />
            <SourceTag tier="T2" source={isPt ? "Pref. Aomori · comparecimento por idade" : "Aomori Prefecture · turnout by age"} date="2026" href={SRC.aomori} />
          </Sources>
        </div>
      </Section>

      {/* SINAL FRACO */}
      <Section id="sinal-fraco" className="border-t border-line">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>{d.fraco.eyebrow}</Eyebrow>
            <Heading as="h3" className="mt-4">{d.fraco.title}</Heading>
            <Prose className="mt-5"><p>{d.fraco.body}</p></Prose>
            <Sources className="mt-6">
              <SourceTag tier="T0" source={isPt ? "TSE · Comparecimento e abstenção por perfil, 2022" : "TSE · Turnout and abstention by profile, 2022"} date="2022" href={SRC.tse2022} />
              <SourceTag tier="T0" source={isPt ? "IBGE · Censo 2022, SIDRA 9514" : "IBGE · 2022 Census, SIDRA 9514"} date="2022" href={SRC.sidra9514} />
            </Sources>
          </div>
          <Reveal><TabelaAgregacao /></Reveal>
        </div>
      </Section>

      {/* FECHO */}
      <Section id="fecho" className="border-t border-line">
        <Heading as="h2">{d.fecho.title}</Heading>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Callout tone="teal" title={d.fecho.encontrado}>{d.fecho.encontradoBody}</Callout>
          <Callout tone="amber" title={d.fecho.naoAchado}>{d.fecho.naoAchadoBody}</Callout>
        </div>
        <Link
          href={href(lang, "/metodo/#limites")}
          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-bg-elev px-5 py-2.5 text-sm font-medium text-fg transition hover:border-amber/50"
        >
          {d.fecho.link}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </Section>
    </>
  );
}
