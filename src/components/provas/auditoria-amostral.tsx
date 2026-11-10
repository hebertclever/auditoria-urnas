"use client";

import { prova } from "@/data/prova";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const tomBorder = { amber: "border-amber/30", rose: "border-rose/30", teal: "border-teal/30" } as const;
const tomBg = { amber: "bg-amber-soft", rose: "bg-rose-soft", teal: "bg-teal-soft" } as const;
const tomText = { amber: "text-amber", rose: "text-rose", teal: "text-teal" } as const;

export function AuditoriaAmostral() {
  const { lang } = useLang();
  const a = prova.auditoriaAmostral;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);

  return (
    <div>
      <Reveal>
        <Eyebrow tone="rose">{L(a.eyebrow)}</Eyebrow>
        <Heading className="mt-3 max-w-3xl">{L(a.title)}</Heading>
        <Lead className="mt-5">{L(a.lead)}</Lead>
      </Reveal>

      {/* PARTES OBJETIVAS */}
      <div className="mt-10 grid gap-4">
        {a.partes.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.04}>
            <div className={cn("grid grid-cols-[auto_1fr] gap-4 rounded-2xl border p-5 sm:gap-6 sm:p-6", tomBorder[p.tom], tomBg[p.tom])}>
              <span className={cn("display tabular text-3xl font-semibold sm:text-4xl", tomText[p.tom])}>
                {p.n}
              </span>
              <div className="min-w-0">
                <h3 className="display-md text-lg font-semibold leading-snug">{L(p.titulo)}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-2">{L(p.corpo)}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* TABELA COMPARATIVA */}
      <Reveal className="mt-10">
        <h3 className="display-md text-xl font-semibold">{L(a.comparacao.titulo)}</h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
          <table className="data-table w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-bg-elev">
                <th className="px-4 py-3 text-left font-mono text-[0.7rem] uppercase tracking-wider text-fg-3">{L(a.comparacao.colunas.aspecto)}</th>
                <th className="px-4 py-3 text-left font-mono text-[0.7rem] uppercase tracking-wider text-rose">{L(a.comparacao.colunas.hoje)}</th>
                <th className="px-4 py-3 text-left font-mono text-[0.7rem] uppercase tracking-wider text-teal">{L(a.comparacao.colunas.necessario)}</th>
              </tr>
            </thead>
            <tbody>
              {a.comparacao.linhas.map((row, i) => (
                <tr key={i} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 font-medium text-fg">{L(row.aspecto)}</td>
                  <td className="px-4 py-3 text-fg-2">{L(row.hoje)}</td>
                  <td className="px-4 py-3 text-fg-2">{L(row.necessario)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* TAMANHO DA AMOSTRA */}
      <Reveal className="mt-10">
        <div className="rounded-2xl border border-rose/30 bg-rose-soft p-5 sm:p-6">
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-rose">
            {lang === "pt" ? "Tamanho da amostra para 95% de confiança" : "Sample size for 95% confidence"}
          </p>
          <p className="mt-2 font-mono text-sm text-fg-2">{L(a.amostraFormula)}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-5">
            {a.amostraTabela.map((row) => (
              <div key={row.f} className="flex flex-col items-center rounded-xl border border-rose/20 bg-bg p-3">
                <span className="font-mono text-xs text-fg-3">{lang === "pt" ? "fração" : "fraction"} = {row.f}</span>
                <span className="display tabular mt-1 text-2xl font-semibold text-rose">{row.n.toLocaleString(lang === "pt" ? "pt-BR" : "en-US")}</span>
                <span className="font-mono text-[0.65rem] text-fg-3">{lang === "pt" ? "urnas" : "machines"}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[0.9rem] leading-relaxed text-fg-2">{L(a.amostraRegra3)}</p>
          <p className="mt-2 text-[0.9rem] font-medium leading-relaxed text-fg">{L(a.amostraExemplo)}</p>
        </div>
      </Reveal>

      {/* LIMITES — o que isto NÃO afirma */}
      <Reveal className="mt-6">
        <Callout tone="teal" title={lang === "pt" ? "O que esta seção NÃO afirma" : "What this section does NOT claim"}>
          <ul className="flex flex-col gap-1.5">
            {a.limites.map((lim, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span>{L(lim)}</span>
              </li>
            ))}
          </ul>
        </Callout>
      </Reveal>

      {/* FONTES */}
      <Sources className="mt-6">
        {a.fontes.map((f, i) => (
          <SourceTag key={i} tier={f.tier} source={L(f.source)} date={f.date} href={f.href} />
        ))}
      </Sources>
    </div>
  );
}
