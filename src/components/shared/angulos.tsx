"use client";

import Link from "next/link";
import { ArrowRight, Banknote, DoorOpen, Eye, EyeOff, Fingerprint, HeartPulse } from "lucide-react";
import { angulos, FAIXAS_70, porFaixa } from "@/data/angulos";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { Reveal } from "@/components/ui/reveal";
import { BarChart, type Bar } from "@/components/charts/bar-chart";
import { Legend } from "@/components/dashboard/ui";
import { cn } from "@/lib/utils";

const ICON = { ibge: DoorOpen, datasus: HeartPulse, inss: Banknote, tse: Fingerprint } as const;
const TOM = { amber: "text-amber", rose: "text-rose", teal: "text-teal" } as const;

/** Os quatro números-resumo ("as chances"); usados na versão completa e na compacta. */
function Chances() {
  const { lang } = useLang();
  const L = (x: { pt: string; en: string }) => t(x, lang);
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {angulos.chances.itens.map((c, i) => (
        <Reveal key={i} delay={i * 0.05}>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-5">
            <div className={cn("display tabular text-[clamp(1.9rem,5vw,2.6rem)] font-semibold leading-none", TOM[c.tom])}>{L(c.valor)}</div>
            <p className="mt-3 text-sm leading-relaxed text-fg-2">{L(c.label)}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/**
 * Todos os ângulos, em números (ADR-URNA-077). Completo em /provas; compacto na home.
 * Quatro curvas por idade (a lista do TSE só sai da curva a partir dos 90), o tamanho do erro que cada órgão precisaria
 * ter cometido, as chances, o que os presentes mostram — e as perguntas que só o TSE responde.
 */
export function Angulos({ compact = false }: { compact?: boolean }) {
  const { lang } = useLang();
  const L = (x: { pt: string; en: string }) => t(x, lang);
  const loc = lang === "pt" ? "pt-BR" : "en-US";
  const n0 = (v: number) => v.toLocaleString(loc, { maximumFractionDigits: 0 });
  const n1 = (v: number) => v.toLocaleString(loc, { maximumFractionDigits: 1 });

  if (compact) {
    return (
      <div>
        <Reveal>
          <Eyebrow tone="amber">{L(angulos.eyebrow)}</Eyebrow>
          <Heading as="h2" className="mt-3 max-w-4xl">{L(angulos.compactTitle)}</Heading>
          <Lead className="mt-5">{L(angulos.compactLead)}</Lead>
        </Reveal>
        <div className="mt-8">
          <Chances />
        </div>
        <Reveal className="mt-5">
          <p className="max-w-3xl text-[0.98rem] leading-relaxed text-fg-2">{L(angulos.quemVotou.pergunta)}</p>
          <Link href={href(lang, "/provas/#chances")} className="group mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-amber">
            {L(angulos.chances.link)}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    );
  }

  const F = FAIXAS_70;
  const nomes: Bar[] = F.map((f, i) => ({ label: f, value: Math.round((porFaixa.tse2022[i] / porFaixa.ibge2022[i]) * 100), tone: i >= 4 ? "amber" : "teal" }));
  const mortes: Bar[] = F.flatMap((f, i) => [
    { label: f, value: Math.round((porFaixa.obitos2022[i] / porFaixa.ibge2022[i]) * 1000) / 10, tone: "teal" as const },
    { label: `${f} · TSE`, value: Math.round((porFaixa.obitos2022[i] / porFaixa.tse2022[i]) * 1000) / 10, tone: "amber" as const },
  ]);
  const inss: Bar[] = F.map((f, i) => ({ label: f, value: Math.round((porFaixa.inss2026[i] / porFaixa.tse2026[i]) * 100), tone: i >= 5 ? "amber" : "teal" }));
  const mulheres: Bar[] = F.flatMap((f, i) => [
    { label: f, value: porFaixa.mulheresIbge[i], tone: "teal" as const },
    { label: `${f} · TSE`, value: porFaixa.mulheresTse[i], tone: "amber" as const },
  ]);
  const legenda = [
    { label: L(angulos.legendaRef), tone: "teal" as const },
    { label: L(angulos.legendaTse), tone: "amber" as const },
  ];
  const cv = angulos.curvas;
  const graficos = [
    { k: "nomes", d: cv.nomes, data: nomes, dupla: false, fmt: n0, base: 100 },
    { k: "mortes", d: cv.mortes, data: mortes, dupla: true, fmt: n1, base: undefined },
    { k: "inss", d: cv.inss, data: inss, dupla: false, fmt: n0, base: 100 },
    { k: "mulheres", d: cv.mulheres, data: mulheres, dupla: true, fmt: n1, base: undefined },
  ];

  return (
    <div>
      <Reveal>
        <Eyebrow tone="amber">{L(angulos.eyebrow)}</Eyebrow>
        <Heading as="h2" className="mt-3 max-w-4xl">{L(angulos.title)}</Heading>
        <Lead className="mt-5">{L(angulos.lead)}</Lead>
      </Reveal>

      {/* Quatro medidas, a mesma quebra */}
      <h3 className="display-md mt-10 text-xl font-semibold text-fg">{L(angulos.curvasTitle)}</h3>
      <div className="mt-4 grid gap-5 lg:grid-cols-2">
        {graficos.map((g, i) => (
          <Reveal key={g.k} delay={(i % 2) * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-4 sm:p-5">
              <h4 className="text-sm font-semibold text-fg">{L(g.d.t)}</h4>
              <p className="mt-0.5 text-xs leading-snug text-fg-3">{L(g.d.s)}</p>
              <div className="mt-2">
                <BarChart data={g.data} height={250} format={g.fmt} minZero showValues={!g.dupla} labelEvery={g.dupla ? 2 : 1} baseline={g.base} />
              </div>
              {g.dupla && (
                <div className="mt-2">
                  <Legend items={legenda} />
                </div>
              )}
              <p className="mt-3 text-[0.92rem] leading-relaxed text-fg-2">{L(g.d.c)}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Quanto cada órgão teria de errar */}
      <Reveal className="mt-12">
        <h3 className="display-md max-w-3xl text-xl font-semibold text-fg sm:text-2xl">{L(angulos.orgaos.title)}</h3>
        <p className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-fg-2">{L(angulos.orgaos.lead)}</p>
      </Reveal>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {angulos.orgaos.itens.map((o, i) => {
          const Icon = ICON[o.id as keyof typeof ICON];
          return (
            <Reveal key={o.id} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-5">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-soft text-rose">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="font-medium text-fg">{L(o.nome)}</p>
                </div>
                <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-fg-3">{L(angulos.orgaos.necessarioLabel)}</p>
                <p className="display tabular mt-1 text-2xl font-semibold leading-tight text-rose">{L(o.valor)}</p>
                <p className="mt-1 text-sm leading-relaxed text-fg-2">{L(o.texto)}</p>
                <p className="mt-auto border-t border-line pt-3 text-[0.82rem] leading-relaxed text-fg-2">
                  <span className="mb-0.5 block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-teal">{L(angulos.orgaos.medidoLabel)}</span>
                  {L(o.medido)}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-5">
        <Callout tone="rose">
          <p className="text-[1.02rem] font-medium text-fg">{L(angulos.orgaos.fecho)}</p>
        </Callout>
      </Reveal>
      <Reveal className="mt-4">
        <div className="rounded-2xl border border-amber/30 bg-amber-soft p-5 sm:p-6">
          <p className="mb-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber">{L(angulos.estados.title)}</p>
          <p className="text-[0.98rem] leading-relaxed text-fg-2">{L(angulos.estados.text)}</p>
        </div>
      </Reveal>

      {/* As chances */}
      <h3 className="display-md mt-12 text-xl font-semibold text-fg sm:text-2xl">{L(angulos.chances.title)}</h3>
      <div className="mt-5">
        <Chances />
      </div>

      {/* E quem votou? */}
      <Reveal className="mt-12">
        <h3 className="display-md text-xl font-semibold text-fg sm:text-2xl">{L(angulos.quemVotou.title)}</h3>
        <p className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-fg-2">{L(angulos.quemVotou.lead)}</p>
      </Reveal>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-teal/30 bg-teal-soft p-5 sm:p-6">
            <p className="mb-3 flex items-center gap-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal">
              <Eye className="h-3.5 w-3.5" />
              {L(angulos.quemVotou.mostramTitle)}
            </p>
            <ul className="flex flex-col gap-3">
              {angulos.quemVotou.mostram.map((m, i) => (
                <li key={i} className={cn("text-[0.95rem] leading-relaxed", i === angulos.quemVotou.mostram.length - 1 ? "font-semibold text-fg" : "text-fg-2")}>{L(m)}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-amber/30 bg-amber-soft p-5 sm:p-6">
            <p className="mb-3 flex items-center gap-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber">
              <EyeOff className="h-3.5 w-3.5" />
              {L(angulos.quemVotou.naoVeemTitle)}
            </p>
            <ul className="flex flex-col gap-3">
              {angulos.quemVotou.naoVeem.map((m, i) => (
                <li key={i} className="text-[0.95rem] leading-relaxed text-fg-2">{L(m)}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-4">
        <div className="rounded-2xl border border-rose/30 bg-rose-soft p-5 sm:p-6">
          <p className="display-md text-lg font-semibold leading-snug text-fg sm:text-xl">{L(angulos.quemVotou.pergunta)}</p>
        </div>
      </Reveal>

      {/* Perguntas legítimas */}
      <Reveal className="mt-12">
        <h3 className="display-md text-xl font-semibold text-fg sm:text-2xl">{L(angulos.perguntas.title)}</h3>
      </Reveal>
      <ol className="mt-5 grid gap-3 md:grid-cols-2">
        {angulos.perguntas.itens.map((q, i) => (
          <Reveal key={i} delay={(i % 2) * 0.04}>
            <li className="flex h-full gap-3 rounded-2xl border border-line bg-bg-elev p-4 sm:p-5">
              <span className="display tabular text-2xl font-semibold leading-none text-amber">{i + 1}</span>
              <p className="text-[0.95rem] leading-relaxed text-fg">{L(q)}</p>
            </li>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-5">
        <Callout tone="teal">
          <p className="text-[1.02rem] font-medium text-fg">{L(angulos.perguntas.fecho)}</p>
        </Callout>
      </Reveal>

      <p className="mt-5 text-xs leading-relaxed text-fg-3">{L(angulos.nota)}</p>
      <Sources className="mt-4">
        {angulos.fontes.map((f, i) => (
          <SourceTag key={i} tier={f.tier} source={L(f.source)} date={f.date} href={f.href} />
        ))}
      </Sources>
    </div>
  );
}
