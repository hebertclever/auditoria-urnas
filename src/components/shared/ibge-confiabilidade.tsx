"use client";

import { motion } from "motion/react";
import { Scale, Landmark, Ruler, TrendingUp, Hourglass, CircleHelp } from "lucide-react";
import { ibge } from "@/data/ibge";
import { useFmt, useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const toneBar = { teal: "bg-teal", amber: "bg-amber", slate: "bg-slate", rose: "bg-rose" } as const;

function Bars({ rows, max, suffix = "%" }: { rows: { k: { pt: string; en: string }; v: number; tone?: keyof typeof toneBar }[]; max: number; suffix?: string }) {
  const { lang } = useLang();
  const { fmtPct } = useFmt();
  return (
    <ul className="space-y-3">
      {rows.map((r, i) => {
        const w = Math.min(100, (Math.abs(r.v) / max) * 100);
        return (
          <li key={i} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_auto]">
            <span className="text-sm text-fg-2 sm:col-start-1">{t(r.k, lang)}</span>
            <span className="tabular font-mono text-sm font-semibold text-fg sm:col-start-3">
              {suffix === "%" ? fmtPct(r.v, r.v % 1 === 0 ? 0 : 1, r.v < 0) : r.v}
            </span>
            <div className="col-span-2 h-2 overflow-hidden rounded-full bg-bg-sunk sm:col-span-1 sm:col-start-2 sm:row-start-1">
              <motion.div
                className={cn("h-full rounded-full", toneBar[r.tone ?? (r.v < 0 ? "rose" : "slate")])}
                initial={{ width: 0 }}
                whileInView={{ width: `${w}%` }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Card({ icon: Icon, title, children, className }: { icon: React.ElementType; title: string; children: React.ReactNode; className?: string }) {
  return (
    <Reveal className={cn("rounded-2xl border border-line bg-bg-elev p-5 sm:p-6", className)}>
      <div className="mb-3 flex items-center gap-2.5">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-soft text-amber">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="display-md text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-3 text-[0.95rem] leading-relaxed text-fg-2 [&_strong]:font-semibold [&_strong]:text-fg">{children}</div>
    </Reveal>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return <blockquote className="border-l-2 border-amber/60 pl-4 font-serif text-[0.95rem] italic leading-relaxed text-fg">{children}</blockquote>;
}

export function IbgeConfiabilidade({ variant }: { variant: "cadastro" | "metodo" }) {
  const { lang } = useLang();
  const { fmt } = useFmt();
  const L = (l: { pt: string; en: string }) => t(l, lang);
  const g = ibge.gatilho;
  const full = variant === "metodo";

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full glow-amber blur-3xl" />
      <Eyebrow tone="amber">{lang === "pt" ? "Contra-argumento testado" : "Counter-argument tested"}</Eyebrow>
      <Heading as="h2" className="mt-3">{L(ibge.titulo)}</Heading>
      <Lead className="mt-5">{L(ibge.lead)}</Lead>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Card icon={Scale} title={L(g.titulo)} className="lg:col-span-2">
          <p>{L(g.lei.texto)}</p>
          <Quote>{L(g.lei.quote)}</Quote>
          <Callout tone="amber">
            <strong>{L(g.implicacao)}</strong>
          </Callout>
          <Sources>
            <SourceTag tier={g.lei.tier} source={L(g.lei.fonte)} date={g.lei.data} href={g.lei.url} />
            <SourceTag tier={g.resolucao.tier} source={L(g.resolucao.fonte)} date={g.resolucao.data} href={g.resolucao.url} />
            <p className="text-xs text-fg-3">{L(g.resolucao.nota)}</p>
          </Sources>
        </Card>

        <Card icon={Landmark} title={L(ibge.casos.titulo)}>
          <ul className="space-y-4">
            {ibge.casos.itens.map((c) => (
              <li key={c.local} className="rounded-xl bg-bg-sunk p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-fg-3">{c.local}</p>
                <p className="mt-1 font-medium text-fg">{L(c.numeros)}</p>
                <p className="mt-1.5 text-sm">{L(c.decisao)}</p>
                <SourceTag className="mt-2" tier={c.tier} source={L(c.fonte)} date={c.data} href={c.url} />
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{L(ibge.casos.serie.titulo)}</p>
            <div className="mt-2 flex items-end gap-3">
              {ibge.casos.serie.pontos.map((p) => (
                <div key={p.ano} className="flex-1">
                  <div className="display tabular text-2xl font-semibold text-amber">{fmt(p.n)}</div>
                  <div className="font-mono text-xs text-fg-3">{p.ano}</div>
                </div>
              ))}
            </div>
            <SourceTag className="mt-2" tier="T2" source={L(ibge.casos.serie.fonte)} href={ibge.casos.serie.url} />
          </div>
        </Card>

        <Card icon={Ruler} title={L(ibge.dependentes.titulo)}>
          <ul className="space-y-3">
            {ibge.dependentes.itens.map((d, i) => (
              <li key={i} className="border-b border-line pb-3 last:border-0 last:pb-0">
                <p className="font-medium text-fg">{L(d.orgao)}</p>
                <p className="mt-0.5 text-sm">{L(d.regra)}</p>
                <SourceTag className="mt-1.5" tier={d.tier} source={L(d.fonte)} href={d.url} />
              </li>
            ))}
          </ul>
          <Quote>{L(ibge.dependentes.ibgeDiz.quote)}</Quote>
          <p className="text-sm"><strong>{L(ibge.dependentes.ibgeDiz.leitura)}</strong></p>
          <SourceTag tier={ibge.dependentes.ibgeDiz.tier} source={L(ibge.dependentes.ibgeDiz.fonte)} date={ibge.dependentes.ibgeDiz.data} href={ibge.dependentes.ibgeDiz.url} />
        </Card>

        <Card icon={Hourglass} title={L(ibge.censo.titulo)} className={full ? "lg:col-span-2" : ""}>
          <p>{L(ibge.censo.lead)}</p>
          <div className={cn("grid gap-6 pt-2", full ? "md:grid-cols-2" : "")}>
            <div>
              <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{lang === "pt" ? "Por porte do município" : "By municipality size"}</p>
              <Bars rows={ibge.censo.porPorte} max={20} />
            </div>
            <div>
              <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{lang === "pt" ? "Por idade" : "By age"}</p>
              <Bars rows={ibge.censo.porIdade} max={12} />
            </div>
            {full && (
              <div className="md:col-span-2">
                <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-widest text-fg-3">{lang === "pt" ? "Comparação internacional" : "International comparison"}</p>
                <Bars rows={ibge.censo.internacional} max={10} />
              </div>
            )}
          </div>
          <p className="text-sm text-fg-3">{L(ibge.censo.nota)}</p>
          <Sources>
            {(full ? ibge.censo.fontes : ibge.censo.fontes.slice(0, 1)).map((f, i) => (
              <SourceTag key={i} tier={f.tier} source={L(f.fonte)} date={f.data} href={f.url} />
            ))}
          </Sources>
        </Card>

        <Card icon={TrendingUp} title={L(ibge.estimativas.titulo)} className={full ? "" : "lg:col-span-2"}>
          <p>{L(ibge.estimativas.texto)}</p>
          <Bars rows={ibge.estimativas.tabela} max={104} />
          <Quote>{L(ibge.estimativas.ibgeQuote)}</Quote>
          <Sources>
            {ibge.estimativas.fontes.map((f, i) => (
              <SourceTag key={i} tier={f.tier} source={L(f.fonte)} date={f.data} href={f.url} />
            ))}
          </Sources>
        </Card>

        {full && (
          <Card icon={CircleHelp} title={L(ibge.centenarios.titulo)}>
            <p>{L(ibge.centenarios.texto)}</p>
            <Sources>
              {ibge.centenarios.fontes.map((f, i) => (
                <SourceTag key={i} tier={f.tier} source={L(f.fonte)} date={f.data} href={f.url} />
              ))}
            </Sources>
          </Card>
        )}
      </div>

      <Reveal className="mt-8">
        <Callout tone="teal" title={L(ibge.sintese.titulo)}>
          <p>{L(ibge.sintese.fatos)}</p>
          <p className="mt-3">{L(ibge.sintese.inferencia)}</p>
          {full && <p className="mt-3 text-sm text-fg-3">{L(ibge.sintese.emAberto)}</p>}
        </Callout>
      </Reveal>
    </div>
  );
}
