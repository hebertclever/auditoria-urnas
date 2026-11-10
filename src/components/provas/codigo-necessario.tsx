"use client";

import { prova } from "@/data/prova";
import { probabilidade } from "@/data/codigo";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const badge = [
  "border-teal/40 bg-teal-soft text-teal",
  "border-amber/40 bg-amber-soft text-amber",
  "border-rose/40 bg-rose-soft text-rose",
] as const;

export function CodigoNecessario() {
  const { lang } = useLang();
  const c = prova.codigoNecessario;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);

  return (
    <div>
      <Reveal>
        <Eyebrow tone="rose">{L(c.eyebrow)}</Eyebrow>
        <Heading className="mt-3 max-w-3xl">{L(c.title)}</Heading>
        <Lead className="mt-5">{L(c.lead)}</Lead>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {c.passos.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-5 sm:p-6">
              <span className={cn("inline-flex h-9 w-9 items-center justify-center rounded-full border font-mono text-sm font-semibold", badge[i])}>
                {p.n}
              </span>
              <h3 className="display-md mt-3 text-lg font-semibold leading-snug">{L(p.t)}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-2">{L(p.b)}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <div className="rounded-2xl border border-rose/30 bg-rose-soft p-5 sm:p-6">
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-rose">{L(c.probLabel)}</p>
          <div className="mt-2 flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <span className="display tabular text-[clamp(1.6rem,5vw,2.6rem)] font-semibold text-rose">{L(c.formula)}</span>
            <span className="display text-[clamp(1.4rem,4vw,2rem)] font-semibold text-fg">
              {lang === "pt" ? "1 em" : "1 in"} {L(probabilidade.umEm)}
            </span>
          </div>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-fg-2">
            {L(c.equivale)} {L(probabilidade.comparacao)}.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-fg-3">{L(probabilidade.ressalva)}</p>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <Callout tone="teal" title={L(c.porUltimo.t)}>
            <p>{L(c.porUltimo.b)}</p>
          </Callout>
        </Reveal>
        <Reveal delay={0.06}>
          <Callout tone="rose" title={lang === "pt" ? "Conclusão" : "Conclusion"}>
            <p className="font-medium text-fg">{L(c.conclusao)}</p>
          </Callout>
        </Reveal>
      </div>
    </div>
  );
}
