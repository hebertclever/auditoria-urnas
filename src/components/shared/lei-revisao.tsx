"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Database, Gavel, Hourglass } from "lucide-react";
import { lei } from "@/data/lei";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const borda = { teal: "border-l-teal", rose: "border-l-rose", amber: "border-l-amber" } as const;
const selo = {
  teal: "border-teal/40 bg-teal-soft text-teal",
  rose: "border-rose/40 bg-rose-soft text-rose",
  amber: "border-amber/40 bg-amber-soft text-amber",
} as const;

/** A troca de palavras: a lei diz "determinará"; a resolução do TSE risca e escreve "poderá". */
function Troca() {
  const { lang } = useLang();
  const L = (x: { pt: string; en: string }) => t(x, lang);
  const tr = lei.troca;
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      <div className="rounded-3xl border border-teal/30 bg-teal-soft p-5 sm:p-7">
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal">{L(tr.leiLabel)}</p>
        <p className="display mt-3 text-[clamp(2rem,6vw,3.2rem)] font-semibold leading-none text-teal">{L(tr.leiPalavra)}</p>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-fg">{L(tr.leiGatilho)}</p>
      </div>
      <div className="rounded-3xl border border-rose/30 bg-rose-soft p-5 sm:p-7">
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-rose">{L(tr.tseLabel)}</p>
        <div className="relative mt-3 inline-block">
          <span className="display text-[clamp(1.4rem,4vw,2rem)] font-semibold leading-none text-fg-3">{L(tr.leiPalavra)}</span>
          <motion.span
            className="absolute left-0 top-1/2 h-[3px] w-full origin-left rounded-full bg-rose"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </div>
        <motion.p
          className="display mt-1 text-[clamp(2rem,6vw,3.2rem)] font-semibold leading-none text-rose"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ delay: 1.05, duration: 0.5 }}
        >
          {L(tr.tsePalavra)}
        </motion.p>
        <motion.p
          className="mt-3 text-[0.98rem] leading-relaxed text-fg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          {L(tr.tseCondicao)} — {L(tr.tseGatilho)}
        </motion.p>
      </div>
    </div>
  );
}

export function LeiRevisao({ compact = false }: { compact?: boolean }) {
  const { lang } = useLang();
  const L = (x: { pt: string; en: string }) => t(x, lang);

  return (
    <div>
      <Reveal>
        <Eyebrow tone="rose">{L(lei.eyebrow)}</Eyebrow>
        <Heading as="h2" className="mt-3 max-w-4xl">{L(lei.title)}</Heading>
        <Lead className="mt-5">{L(lei.lead)}</Lead>
      </Reveal>

      <Troca />

      {compact ? (
        <Reveal className="mt-6">
          <p className="max-w-3xl text-[0.98rem] leading-relaxed text-fg-2">{L(lei.compacto)}</p>
          <Link
            href={href(lang, "/provas/#lei")}
            className="group mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-rose"
          >
            {L(lei.link)}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      ) : (
        <>
          <ol className="mt-8 flex flex-col gap-4">
            {lei.documentos.map((d, i) => (
              <Reveal key={d.ano} delay={i * 0.05}>
                <li className={cn("rounded-2xl border border-line border-l-4 bg-bg-elev p-5 sm:p-6", borda[d.tom])}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold", selo[d.tom])}>{d.ano}</span>
                    <p className="font-medium text-fg">{L(d.quem)}</p>
                  </div>
                  <blockquote className="mt-3 border-l-2 border-line-strong pl-4 text-[0.98rem] italic leading-relaxed text-fg">{L(d.texto)}</blockquote>
                  <p className="mt-3 text-sm font-semibold text-fg">{L(d.leitura)}</p>
                  <SourceTag className="mt-3" tier={d.fonte.tier} source={L(d.fonte.source)} date={d.fonte.date} href={d.fonte.href} />
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-6">
            <Callout tone="rose" title={L(lei.noticia.title)}>
              <p className="text-[1.02rem]">{L(lei.noticia.text)}</p>
            </Callout>
          </Reveal>

          <div className="mt-4 grid gap-3 text-sm leading-relaxed text-fg-2 md:grid-cols-2">
            <p>{L(lei.piaui)}</p>
            <p>{L(lei.cumulativo)}</p>
          </div>

          {/* Recusa por orçamento × o Estado já tem os dados (ADR-URNA-074) */}
          <Reveal className="mt-10">
            <h3 id="dados" className="display-md max-w-3xl scroll-mt-24 text-xl font-semibold text-fg sm:text-2xl">{L(lei.dados.title)}</h3>
            <p className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-fg-2">{L(lei.dados.lead)}</p>
          </Reveal>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {lei.dados.itens.map((d, i) => (
              <Reveal key={i} delay={(i % 2) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-5">
                  <p className="flex items-center gap-2 font-medium text-fg">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-soft text-teal">
                      <Database className="h-3.5 w-3.5" />
                    </span>
                    {L(d.t)}
                  </p>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-fg-2">{L(d.b)}</p>
                  <SourceTag className="mt-auto pt-3" tier={d.fonte.tier} source={L(d.fonte.source)} date={d.fonte.date} href={d.fonte.href} />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-4">
            <Callout tone="teal">
              <p className="text-[1.02rem] font-medium text-fg">{L(lei.dados.fecho)}</p>
            </Callout>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-5 sm:p-6">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-soft text-rose">
                  <Gavel className="h-4 w-4" />
                </span>
                <p className="font-medium text-fg">{L(lei.obito.title)}</p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-fg-2">{L(lei.obito.text)}</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-5 sm:p-6">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-soft text-amber">
                  <Hourglass className="h-4 w-4" />
                </span>
                <p className="font-medium text-fg">{L(lei.setenta.title)}</p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-fg-2">{L(lei.setenta.text)}</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-6">
            <div className="rounded-2xl border border-amber/30 bg-amber-soft p-5 sm:p-6">
              <p className="mb-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber">{L(lei.analogia.title)}</p>
              <p className="text-[0.98rem] leading-relaxed text-fg-2">{L(lei.analogia.text)}</p>
            </div>
          </Reveal>

          <Sources className="mt-6">
            {lei.fontes.map((f, i) => (
              <SourceTag key={i} tier={f.tier} source={L(f.source)} date={f.date} href={f.href} />
            ))}
          </Sources>
        </>
      )}
    </div>
  );
}
