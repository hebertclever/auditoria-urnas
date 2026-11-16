import Link from "next/link";
import { ArrowRight, Archive, ExternalLink, ShieldCheck } from "lucide-react";
import { Section, Container, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { Reveal } from "@/components/ui/reveal";
import { SourceTag, Sources } from "@/components/ui/source-tag";
import { resolveLang, metaFor } from "@/i18n/server";
import { t, type Locale } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { makeFormatters } from "@/lib/format";
import { backup, backupGrupos, backupItens, backupTitulos, waybackUrl, type ItemBackup } from "@/data/backup";
import { cn } from "@/lib/utils";

export const generateMetadata = metaFor("backup");

/** "20261114040055" → "14/11/2026" (pt) ou "14 Nov 2026" (en). Horário de Greenwich. */
function dataCaptura(ts: string, lang: Locale) {
  const d = new Date(Date.UTC(+ts.slice(0, 4), +ts.slice(4, 6) - 1, +ts.slice(6, 8)));
  return d.toLocaleDateString(lang === "pt" ? "pt-BR" : "en-GB", { day: "2-digit", month: lang === "pt" ? "2-digit" : "short", year: "numeric", timeZone: "UTC" });
}

export default async function BackupPage({ params }: PageProps<"/[lang]/backup">) {
  const { lang } = await resolveLang(params);
  const b = backup;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);
  const { fmt } = makeFormatters(lang);
  const zip = backupItens.find((i) => i.id === "perfil2026zip")!;
  const versoes = zip.versoes ?? [];
  const mb = (n: number) => `${(n / 1e6).toLocaleString(lang === "pt" ? "pt-BR" : "en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} MB`;

  const situacao = (it: ItemBackup) => {
    if (it.versoes?.length && it.situacao === "ok") return { txt: L(b.tabela.situacoes.conferida), tone: "text-teal" };
    if (it.situacao === "ok") return { txt: L(b.tabela.situacoes.ok), tone: "text-teal" };
    return { txt: L(b.tabela.situacoes[it.situacao]), tone: it.situacao === "bloqueado" || it.situacao === "sem_captura" ? "text-rose" : "text-amber" };
  };

  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-line">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <div className="glow-teal pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] opacity-60" />
        <Container className="relative py-20 sm:py-28">
          <Reveal>
            <Eyebrow tone="teal">{L(b.hero.eyebrow)}</Eyebrow>
            <Heading as="h1" className="mt-5 max-w-4xl">{L(b.hero.title)}</Heading>
            <Lead className="mt-7 max-w-3xl">{L(b.hero.lead)}</Lead>
          </Reveal>
        </Container>
      </div>

      {/* O QUE É */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-soft text-teal"><Archive className="h-5 w-5" /></span>
              <Heading>{L(b.oQueE.title)}</Heading>
            </div>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-fg-2">{L(b.oQueE.texto)}</p>
            <Callout tone="teal" className="mt-6">
              <p className="text-[1.02rem] font-medium text-fg">{L(b.oQueE.analogia)}</p>
            </Callout>
          </Reveal>
          <ul className="flex flex-col gap-3">
            {b.oQueE.pontos.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <li className="rounded-2xl border border-line bg-bg-elev p-5 sm:p-6">
                  <h3 className="display-md text-lg font-semibold text-fg">{L(p.t)}</h3>
                  <p className="mt-2 break-words text-[0.95rem] leading-relaxed text-fg-2">{L(p.b)}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* POR QUE */}
      <Section className="border-t border-line">
        <Reveal>
          <Heading>{L(b.porque.title)}</Heading>
        </Reveal>
        <ol className="mt-8 grid gap-4 lg:grid-cols-3">
          {b.porque.itens.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <li className="h-full rounded-3xl border border-line bg-bg-elev p-5 sm:p-6">
                <span className="display tabular text-3xl font-semibold text-teal">{i + 1}</span>
                <h3 className="display-md mt-2 text-lg font-semibold text-fg">{L(p.t)}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-2">{L(p.b)}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* AS DUAS VERSÕES */}
      <Section id="duas-versoes" className="border-t border-line">
        <Reveal>
          <Eyebrow tone="rose">{L(b.versoes.eyebrow)}</Eyebrow>
          <Heading className="mt-3 max-w-4xl">{L(b.versoes.title)}</Heading>
          <Lead className="mt-5 max-w-3xl">{L(b.versoes.lead)}</Lead>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {versoes.map((v, i) => {
            const nova = i === versoes.length - 1;
            const linhas: [string, string][] = [
              [L(b.versoes.rotulos.gerado), v.gerado_tse ?? "—"],
              [L(b.versoes.rotulos.captura), dataCaptura(v.ts, lang)],
              [L(b.versoes.rotulos.tamanho), `${mb(v.bytes)} · ${fmt(v.bytes)} bytes`],
              [L(b.versoes.rotulos.linhas), v.linhas ? fmt(v.linhas) : "—"],
            ];
            return (
              <Reveal key={v.ts} delay={i * 0.06}>
                <div className={cn("flex h-full flex-col rounded-3xl border p-5 sm:p-7", nova ? "border-rose/40 bg-rose-soft" : "border-line bg-bg-elev")}>
                  <p className={cn("font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em]", nova ? "text-rose" : "text-fg-3")}>
                    {L(nova ? b.versoes.rotulos.depois : b.versoes.rotulos.antes)}
                  </p>
                  <p className={cn("display tabular mt-3 text-[clamp(2rem,6vw,3rem)] font-semibold", nova ? "text-rose" : "text-fg")}>{v.comp_1t ? fmt(v.comp_1t) : "—"}</p>
                  <p className="text-sm text-fg-2">{L(b.versoes.rotulos.comp1)}</p>
                  {v.comp_2t && (
                    <p className="mt-2 text-sm text-fg-2">
                      <span className="font-mono tabular font-semibold text-fg">{fmt(v.comp_2t)}</span> {L(b.versoes.rotulos.comp2)}
                    </p>
                  )}
                  <dl className="mt-5 grid gap-2 border-t border-line pt-4 text-sm">
                    {linhas.map(([k, val]) => (
                      <div key={k} className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-3">
                        <dt className="text-fg-3">{k}</dt>
                        <dd className="font-mono tabular text-fg">{val}</dd>
                      </div>
                    ))}
                    <div>
                      <dt className="text-fg-3">SHA-256</dt>
                      <dd className="mt-1 break-all font-mono text-[0.72rem] leading-relaxed text-fg">{v.sha256}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 flex items-start gap-2 text-xs text-teal">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" /> {L(b.versoes.rotulos.conferida)}
                  </p>
                  <a
                    href={waybackUrl(v.ts, zip.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-fg px-5 text-sm font-semibold text-bg transition hover:opacity-90"
                  >
                    {L(b.versoes.rotulos.abrir)} <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Callout tone="amber">
            <p className="text-[1.02rem] text-fg">{L(b.versoes.diferenca)}</p>
          </Callout>
          <Callout tone="rose">
            <p className="text-[1.02rem] text-fg">{L(b.versoes.pergunta)}</p>
          </Callout>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-fg-3">{L(b.versoes.incompleta)}</p>
        <Link
          href={href(lang, "/parlamentar/")}
          className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-bg-elev px-5 text-sm font-medium text-fg transition hover:border-amber/50"
        >
          {lang === "pt" ? "Ver o modelo de requerimento ao TSE" : "See the model request to the TSE"}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </Section>

      {/* COMO CONFERIR */}
      <Section className="border-t border-line">
        <Reveal>
          <Heading>{L(b.conferir.title)}</Heading>
        </Reveal>
        <ol className="mt-8 grid gap-3 lg:grid-cols-2">
          {b.conferir.passos.map((p, i) => (
            <li key={i} className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-line bg-bg-elev p-5">
              <span className="display tabular text-2xl font-semibold text-teal">{i + 1}</span>
              <p className="min-w-0 break-words text-[0.95rem] leading-relaxed text-fg-2">{L(p)}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* TODAS AS CAPTURAS */}
      <Section id="enderecos" className="border-t border-line">
        <Reveal>
          <Heading>{L(b.tabela.title)}</Heading>
          <Lead className="mt-4 max-w-3xl">{L(b.tabela.lead)}</Lead>
        </Reveal>
        <div className="mt-8 flex flex-col gap-8">
          {backupGrupos.map((g) => {
            const itens = backupItens.filter((i) => i.grupo === g.id);
            return (
              <div key={g.id}>
                <h3 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-fg-3">{L(g.titulo)}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {itens.map((it) => {
                    const s = situacao(it);
                    return (
                      <li key={it.id} className="grid gap-3 rounded-2xl border border-line bg-bg-elev p-4 sm:p-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center">
                        <div className="min-w-0">
                          <p className="font-medium text-fg">{L(backupTitulos[it.id])}</p>
                          <a href={it.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex max-w-full items-center gap-1 text-xs text-fg-3 hover:text-fg hover:underline">
                            <span className="truncate">{L(b.tabela.original)}: {it.url.replace(/^https?:\/\//, "")}</span>
                          </a>
                          <p className={cn("mt-2 font-mono text-[0.7rem]", s.tone)}>{s.txt}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                          {it.versoes
                            ? it.versoes.map((v) => (
                                <a key={v.ts} href={waybackUrl(v.ts, it.url)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-teal/40 bg-teal-soft px-3.5 font-mono text-xs font-semibold text-teal transition hover:opacity-80">
                                  {dataCaptura(v.ts, lang)} <ExternalLink className="h-3 w-3" />
                                </a>
                              ))
                            : [it.primeira, it.ultima]
                                .filter((ts, i, arr): ts is string => !!ts && arr.indexOf(ts) === i)
                                .map((ts) => (
                                  <a key={ts} href={waybackUrl(ts, it.url)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-line bg-bg px-3.5 font-mono text-xs font-semibold text-fg-2 transition hover:border-line-strong hover:text-fg">
                                    {dataCaptura(ts, lang)} <ExternalLink className="h-3 w-3" />
                                  </a>
                                ))}
                          {(it.primeira || it.ultima) && (
                            <a href={`https://web.archive.org/web/*/${it.url}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center text-xs text-fg-3 underline-offset-2 hover:text-fg hover:underline">
                              {L(b.tabela.todas)}
                            </a>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* O QUE NÃO FOI POSSÍVEL */}
      <Section className="border-t border-line">
        <Reveal>
          <Heading as="h3">{L(b.naoGuardado.title)}</Heading>
        </Reveal>
        <Callout tone="amber" className="mt-6 max-w-4xl">
          <p className="text-[1.02rem]">{L(b.naoGuardado.texto)}</p>
        </Callout>
        <Sources className="mt-8">
          {b.fontes.map((f, i) => (
            <SourceTag key={i} tier={f.tier} source={L(f.source)} href={f.href} />
          ))}
        </Sources>
      </Section>
    </>
  );
}
