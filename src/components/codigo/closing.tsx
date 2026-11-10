"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { Reveal } from "@/components/ui/reveal";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { href } from "@/i18n/routes";
import { useLang } from "@/i18n/context";
import { fontes } from "@/data/fontes";

const RES_23751 = "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026";

export function ClosingSection() {
  const { lang, dict } = useLang();
  const d = dict.codigo.naoDizemos;
  const p = dict.codigo.porque;
  const f = dict.codigo.fontes;
  const zip = fontes.find((x) => x.url.includes("arquivos-transmitidos"));
  const efasev = fontes.find((x) => x.url.includes("oficio-do-ministro"));
  return (
    <>
    <Section id="porque" className="border-t border-line">
      <Reveal>
        <Eyebrow tone="rose">{p.eyebrow}</Eyebrow>
        <Heading className="mt-3">{p.title}</Heading>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-2">{p.intro}</p>
      </Reveal>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {p.qas.map((qa, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-5 sm:p-6">
              <h3 className="display-md text-lg font-semibold leading-snug">{qa.q}</h3>
              <div className="mt-4 space-y-4 text-[0.95rem] leading-relaxed">
                <p>
                  <span className="mb-1 block font-mono text-[0.65rem] uppercase tracking-widest text-teal">{p.fatoLabel}</span>
                  <span className="text-fg-2">{qa.fato}</span>
                </p>
                <p>
                  <span className="mb-1 block font-mono text-[0.65rem] uppercase tracking-widest text-amber">{p.motivoLabel}</span>
                  <span className="text-fg-2">{qa.motivo}</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1} className="mt-6">
        <Callout tone="rose"><p className="text-[1.02rem]">{p.fecho}</p></Callout>
      </Reveal>
    </Section>
    <Section id="nao-dizemos" className="border-t border-line">
      <Reveal>
        <Eyebrow tone="teal">{d.eyebrow}</Eyebrow>
        <Heading className="mt-3">{d.title}</Heading>
      </Reveal>
      <Reveal delay={0.1} className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <Callout tone="teal">
          <ul className="space-y-3">
            {d.items.map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </Callout>
        <figure className="flex flex-col justify-between rounded-3xl border border-line bg-bg-elev p-6">
          <blockquote className="display-md text-[1.15rem] font-medium leading-snug text-fg">“{d.quote}”</blockquote>
          <figcaption className="mt-5 text-sm leading-relaxed text-fg-2">{d.metodologia}</figcaption>
        </figure>
      </Reveal>
      <Reveal delay={0.15} className="mt-8">
        <Link
          href={href(lang, "/dados/#gaps")}
          className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
        >
          {d.link}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
      <Reveal delay={0.2}>
        <Sources className="mt-10">
          {zip && <SourceTag tier="T0" source={f.zip} date="2026" href={zip.url} />}
          <SourceTag tier="T0" source={f.res} date="2026" href={RES_23751} />
          {efasev && <SourceTag tier="T0" source={f.efasev} date="2022" href={efasev.url} />}
          <SourceTag tier="T0" source={f.versoes} />
        </Sources>
      </Reveal>
    </Section>
    </>
  );
}
