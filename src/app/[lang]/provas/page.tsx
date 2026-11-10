import Link from "next/link";
import { ArrowRight, Scale, Landmark, Gavel, FileClock, Database, Megaphone, Clock } from "lucide-react";
import { Section, Container, Eyebrow, Heading, Lead, Prose } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { Reveal } from "@/components/ui/reveal";
import { resolveLang, metaFor } from "@/i18n/server";
import { t } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { prova } from "@/data/prova";
import { ErrorBars } from "@/components/provas/error-bars";
import { MagnitudeFunnel } from "@/components/provas/magnitude";
import { Estimativa2026 } from "@/components/provas/estimativa-2026";
import { Objecoes } from "@/components/provas/objecoes";
import { CodigoNecessario } from "@/components/provas/codigo-necessario";
import { AuditoriaAmostral } from "@/components/provas/auditoria-amostral";
import { objecoes } from "@/data/objecoes";
import { DatasusConfiabilidade } from "@/components/shared/datasus-confiabilidade";
import { cn } from "@/lib/utils";

export const generateMetadata = metaFor("provas");

const acaoIcons = [Scale, Landmark, Gavel, Database, FileClock, Megaphone];

export default async function ProvasPage({ params }: PageProps<"/[lang]/provas">) {
  const { lang, dict } = await resolveLang(params);
  const d = dict.provas;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);

  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-line">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <div className="glow-amber pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] opacity-70" />
        <Container className="relative py-20 sm:py-28">
          <Reveal>
            <Eyebrow tone="amber">{L(prova.provado.eyebrow)}</Eyebrow>
            <Heading as="h1" className="mt-5 max-w-4xl">{L(prova.provado.title)}</Heading>
            <Lead className="mt-7 max-w-3xl">{L(prova.provado.lead)}</Lead>
            <p className="mt-5 max-w-3xl rounded-xl border border-amber/30 bg-bg/40 p-4 text-[0.9rem] leading-relaxed text-fg-2">{L(prova.resposta.atribuicao)}</p>
          </Reveal>
        </Container>
      </div>

      {/* O QUE ESTÁ PROVADO */}
      <Section>
        <div className="grid gap-4">
          {prova.provado.itens.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.04}>
              <article className="grid gap-4 rounded-2xl border border-line bg-bg-elev p-5 sm:grid-cols-[auto_1fr] sm:p-6">
                <div className="flex sm:flex-col sm:items-center">
                  <span className="display tabular text-4xl font-semibold text-amber sm:text-5xl">{it.n}</span>
                </div>
                <div className="min-w-0">
                  <span className="inline-block rounded-full border border-amber/30 bg-amber-soft px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-amber">
                    {L(it.tipo)}
                  </span>
                  <h2 className="display-md mt-2 text-xl font-semibold leading-snug">{L(it.claim)}</h2>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-fg-2">{L(it.detail)}</p>
                  <SourceTag className="mt-3" tier={it.fonte.tier} source={L(it.fonte.source)} date={it.fonte.date} href={it.fonte.href} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DE QUE LADO ESTÁ O ERRO */}
      <Section className="border-t border-line">
        <Reveal>
          <Eyebrow tone="rose">{L(prova.quemErrou.eyebrow)}</Eyebrow>
          <Heading className="mt-3">{L(prova.quemErrou.title)}</Heading>
          <Lead className="mt-5">{L(prova.quemErrou.lead)}</Lead>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <Reveal>
            <ErrorBars measuredLabel={d.ui.erroMedido} neededLabel={d.ui.erroNecessario} />
          </Reveal>
          <div className="flex flex-col gap-5">
            {prova.quemErrou.pontos.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber" />
                  <div>
                    <p className="font-medium text-fg">{L(p.t)}</p>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-fg-2">{L(p.b)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-8">
          <Callout tone="rose" title={d.ui.verdictLabel}>
            <p className="text-[1.02rem]">{L(prova.quemErrou.verdict)}</p>
          </Callout>
        </Reveal>
        <Sources className="mt-6">
          {prova.quemErrou.fontes.map((f, i) => (
            <SourceTag key={i} tier={f.tier} source={L(f.source)} date={f.date} href={f.href} />
          ))}
        </Sources>
      </Section>

      {/* DATASUS — a terceira régua */}
      <Section className="border-t border-line">
        <DatasusConfiabilidade />
      </Section>

      {/* QUANTOS — a conta mensurável */}
      <Section className="border-t border-line">
        <Reveal>
          <Eyebrow tone="rose">{L(prova.magnitude.eyebrow)}</Eyebrow>
          <Heading className="mt-3">{L(prova.magnitude.title)}</Heading>
          <Lead className="mt-5">{L(prova.magnitude.lead)}</Lead>
        </Reveal>
        <div className="mt-10">
          <MagnitudeFunnel />
        </div>
        <Reveal className="mt-8">
          <div className="relative overflow-hidden rounded-3xl border border-rose/30 bg-rose-soft p-6 sm:p-10">
            <h3 className="display-md text-2xl font-semibold text-fg sm:text-3xl">{L(prova.mortosVotaram.pergunta)}</h3>
            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              <p className="text-[0.98rem] leading-relaxed text-fg">
                <span className="mb-1 block font-mono text-[0.65rem] uppercase tracking-widest text-teal">{L(prova.mortosVotaram.provadoLabel)}</span>
                {L(prova.mortosVotaram.provado)}
              </p>
              <p className="text-[0.98rem] leading-relaxed text-fg-2">
                <span className="mb-1 block font-mono text-[0.65rem] uppercase tracking-widest text-amber">{L(prova.mortosVotaram.naoProvadoLabel)}</span>
                {L(prova.mortosVotaram.falta)}
              </p>
              <p className="text-[0.98rem] font-medium leading-relaxed text-fg">
                <span className="mb-1 block font-mono text-[0.65rem] uppercase tracking-widest text-rose">{L(prova.mortosVotaram.perguntaLabel)}</span>
                {L(prova.mortosVotaram.porque)}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 2026 — estimativa e por que não há 2º turno */}
      <Section className="border-t border-line">
        <Reveal>
          <Eyebrow tone="teal">{L(prova.estimativa2026.eyebrow)}</Eyebrow>
          <Heading className="mt-3">{L(prova.estimativa2026.title)}</Heading>
        </Reveal>
        <div className="mt-8">
          <Estimativa2026 />
        </div>
      </Section>

      {/* OBJEÇÕES */}
      <Section className="border-t border-line">
        <Reveal>
          <Eyebrow tone="amber">{L(objecoes.eyebrow)}</Eyebrow>
          <Heading className="mt-3">{L(objecoes.title)}</Heading>
          <Lead className="mt-5">{L(objecoes.lead)}</Lead>
        </Reveal>
        <div className="mt-10">
          <Objecoes />
        </div>
      </Section>

      {/* GOVERNO PODE FECHAR EM 1 HORA */}
      <Section className="border-t border-line">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow tone="teal">{L(prova.governo.eyebrow)}</Eyebrow>
            <Heading className="mt-3">{L(prova.governo.title)}</Heading>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-teal/30 bg-teal-soft px-5 py-4">
              <Clock className="h-6 w-6 shrink-0 text-teal" />
              <p className="text-sm font-medium text-fg">
                {lang === "pt" ? "CPF × óbitos (SIM/SIRC) × comparecimento = a lista de nomes, em menos de uma hora." : "ID × deaths (SIM/SIRC) × turnout = the list of names, in under an hour."}
              </p>
            </div>
          </Reveal>
          <Prose className="flex flex-col gap-4">
            <p>{L(prova.governo.naoConseguimos)}</p>
            <p className="text-fg">{L(prova.governo.governoConsegue)}</p>
            <p>{L(prova.governo.ausencia)}</p>
          </Prose>
        </div>
      </Section>

      {/* POR QUE O CÓDIGO-FONTE PRECISA SER ABERTO */}
      <Section className="border-t border-line">
        <CodigoNecessario />
      </Section>

      {/* AUDITORIA AMOSTRAL — por que a urna de exemplo não basta */}
      <Section className="border-t border-line">
        <AuditoriaAmostral />
      </Section>

      {/* AÇÕES */}
      <Section className="border-t border-line">
        <Reveal>
          <Eyebrow tone="amber">{L(prova.acoes.eyebrow)}</Eyebrow>
          <Heading className="mt-3">{L(prova.acoes.title)}</Heading>
          <Lead className="mt-5">{L(prova.acoes.lead)}</Lead>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {prova.acoes.itens.map((a, i) => {
            const Icon = acaoIcons[i % acaoIcons.length];
            return (
              <Reveal key={i} delay={(i % 2) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-soft text-amber">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="display-md text-lg font-semibold leading-snug">{L(a.titulo)}</h3>
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-fg-2">{L(a.texto)}</p>
                  <p className="mt-3 border-t border-line pt-3 font-mono text-[0.72rem] leading-relaxed text-fg-3">
                    <span className="uppercase tracking-wider">{d.ui.baseLegal}:</span> {L(a.base)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* RESPOSTA */}
      <Section className="border-t border-line">
        <Reveal>
          <div className={cn("relative overflow-hidden rounded-3xl border border-amber/30 bg-amber-soft p-8 sm:p-12")}>
            <div className="glow-amber pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 opacity-60" />
            <Heading className="relative max-w-3xl">{L(prova.resposta.title)}</Heading>
            <p className="relative mt-6 max-w-3xl text-lg leading-relaxed text-fg-2">{L(prova.resposta.body)}</p>
            <p className="relative mt-4 max-w-3xl rounded-xl border border-amber/40 bg-bg/50 p-4 text-[0.95rem] font-medium leading-relaxed text-fg">{L(prova.resposta.atribuicao)}</p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Link href={href(lang, "/parlamentar/")} className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90">
                {lang === "pt" ? "O que um parlamentar pode pedir" : "What a legislator can request"} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href(lang, "/dados/")} className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-fg transition hover:border-amber/50">
                {lang === "pt" ? "Ver os dados" : "See the data"}
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
