import { Section, Heading, Lead, Eyebrow, Prose } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { Reveal } from "@/components/ui/reveal";
import { SourceTag } from "@/components/ui/source-tag";
import { IbgeConfiabilidade } from "@/components/shared/ibge-confiabilidade";
import { resolveLang, metaFor } from "@/i18n/server";
import { t } from "@/i18n/config";
import { Steps } from "@/components/metodo/steps";
import { FontesTable } from "@/components/metodo/fontes-table";
import { limpeza } from "@/data/cadastro";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const generateMetadata = metaFor("metodo");

const tierTone: Record<string, string> = {
  T0: "border-teal/40 text-teal bg-teal-soft",
  T1: "border-amber/40 text-amber bg-amber-soft",
  T2: "border-line-strong text-fg-2 bg-bg-sunk",
  T3: "border-rose/40 text-rose bg-rose-soft",
};

export default async function MetodoPage({ params }: PageProps<"/[lang]/metodo">) {
  const { lang, dict } = await resolveLang(params);
  const m = dict.metodo;

  return (
    <>
      <Section className="relative overflow-hidden pb-10 sm:pb-12">
        <div className="grid-texture pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="glow-teal pointer-events-none absolute right-[-20rem] top-[-16rem] -z-10 h-[36rem] w-[50rem] opacity-60 blur-3xl" aria-hidden />
        <Eyebrow tone="teal">{m.hero.eyebrow}</Eyebrow>
        <Heading as="h1" className="mt-5">{m.hero.title}</Heading>
        <Lead className="mt-6">{m.hero.lead}</Lead>
      </Section>

      {/* Axioma */}
      <Section id="axioma" className="pt-10 sm:pt-12">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <Eyebrow>{m.axioma.eyebrow}</Eyebrow>
              <Heading className="mt-3">{m.axioma.title}</Heading>
              <Prose className="mt-6">
                <p>{m.axioma.p1}</p>
                <p>{m.axioma.p2}</p>
              </Prose>
            </div>
            <div className="rounded-3xl border border-line bg-bg-elev p-6 sm:p-8">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-fg-3">{m.axioma.stepsTitle}</p>
              <ol className="mt-5 flex flex-col gap-4">
                {m.axioma.steps.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-sm tabular text-amber">0{i + 1}</span>
                    <p className="text-[0.95rem] leading-relaxed text-fg-2">{s}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Hierarquia + Tiers */}
      <Section id="hierarquia" className="border-t border-line">
        <Reveal>
          <Eyebrow>{m.hierarquia.eyebrow}</Eyebrow>
          <Heading className="mt-3">{m.hierarquia.title}</Heading>
        </Reveal>
        <ol className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {m.hierarquia.niveis.map((n, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <li className="flex h-full gap-4 rounded-2xl border border-line bg-bg-elev p-5">
                <span className="display tabular text-3xl font-semibold text-fg-3">{i + 1}</span>
                <div>
                  <p className="font-medium text-fg">{n.titulo}</p>
                  <p className="mt-1 text-sm leading-relaxed text-fg-2">{n.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <h3 className="display-md mt-16 text-2xl font-semibold">{m.tiers.title}</h3>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {m.tiers.items.map((tr) => (
            <div key={tr.tier} className="flex gap-4 rounded-2xl border border-line bg-bg-elev p-5">
              <span className={cn("inline-flex h-9 shrink-0 items-center justify-center rounded-lg border px-2.5 font-mono text-sm font-semibold", tierTone[tr.tier])}>
                {tr.tier}
              </span>
              <div>
                <p className="font-medium text-fg">{tr.nome}</p>
                <p className="mt-1 text-sm leading-relaxed text-fg-2">{tr.desc}</p>
                <p className="mt-2 font-mono text-[0.7rem] leading-relaxed text-fg-3">{tr.exemplos}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="ibge" className="border-t border-line">
        <IbgeConfiabilidade variant="metodo" />
      </Section>

      {/* Reproduzir */}
      <Section id="reproduzir" className="border-t border-line">
        <Reveal>
          <Eyebrow tone="teal">{m.reproduzir.eyebrow}</Eyebrow>
          <Heading className="mt-3">{m.reproduzir.title}</Heading>
          <Lead className="mt-4">{m.reproduzir.lead}</Lead>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Steps title={m.reproduzir.cadastro.title} steps={m.reproduzir.cadastro.steps} tone="amber" />
          <Steps title={m.reproduzir.codigo.title} steps={m.reproduzir.codigo.steps} tone="rose" />
        </div>
      </Section>

      {/* Limites */}
      <Section id="limites" className="border-t border-line">
        <Reveal>
          <Eyebrow tone="amber">{m.limites.eyebrow}</Eyebrow>
          <Heading className="mt-3">{m.limites.title}</Heading>
          <Lead className="mt-4">{m.limites.lead}</Lead>
        </Reveal>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {m.limites.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-amber/30 bg-amber-soft p-5 sm:p-6">
                <p className="display-md text-lg font-semibold">{it.titulo}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-2">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Callout tone="neutral" title={m.limites.reconferencia.title}>
            <ul className="flex flex-col gap-3">
              {m.limites.reconferencia.items.map((it, i) => (
                <li key={i} className="flex gap-3">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-fg-3" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Callout>
          <Callout tone="teal" title={m.limites.proximo.title}>
            <p>{m.limites.proximo.body}</p>
          </Callout>
        </div>
      </Section>

      {/* Correções */}
      <Section id="correcoes" className="border-t border-line">
        <Reveal>
          <Eyebrow>{m.correcoes.eyebrow}</Eyebrow>
          <Heading className="mt-3">{m.correcoes.title}</Heading>
          <Lead className="mt-4">{m.correcoes.lead}</Lead>
        </Reveal>
        <ul className="mt-10 flex flex-col gap-3">
          {m.correcoes.items.map((c, i) => (
            <li key={i} className="grid gap-4 rounded-2xl border border-line bg-bg-elev p-5 md:grid-cols-[1fr_auto_1fr_1.4fr] md:items-center sm:p-6">
              <p className="font-mono text-sm text-fg-3 line-through decoration-rose/60">{c.antes}</p>
              <ArrowRight className="hidden h-4 w-4 text-fg-3 md:block" />
              <p className="font-mono text-sm font-semibold text-teal">{c.depois}</p>
              <p className="text-sm leading-relaxed text-fg-2">{c.por}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <SourceTag tier="T0" source={t(limpeza.nota17505, lang)} />
        </div>
      </Section>

      {/* Fontes */}
      <Section id="fontes" className="border-t border-line">
        <Reveal>
          <Eyebrow tone="teal">{m.fontes.eyebrow}</Eyebrow>
          <Heading className="mt-3">{m.fontes.title}</Heading>
          <Lead className="mt-4">{m.fontes.lead}</Lead>
        </Reveal>
        <div className="mt-8">
          <FontesTable lang={lang} dict={dict} />
        </div>
      </Section>
    </>
  );
}
