import Link from "next/link";
import { Check, ArrowRight, Lock, Clock } from "lucide-react";
import { Section, Container, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { Reveal } from "@/components/ui/reveal";
import { resolveLang, metaFor } from "@/i18n/server";
import { t } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { parlamentar } from "@/data/parlamentar";
import { Requerimento } from "@/components/parlamentar/requerimento";
import { cn } from "@/lib/utils";

export const generateMetadata = metaFor("parlamentar");

export default async function ParlamentarPage({ params }: PageProps<"/[lang]/parlamentar">) {
  const { lang } = await resolveLang(params);
  const p = parlamentar;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);

  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-line">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <div className="glow-teal pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] opacity-60" />
        <Container className="relative py-20 sm:py-28">
          <Reveal>
            <Eyebrow tone="teal">{L(p.hero.eyebrow)}</Eyebrow>
            <Heading as="h1" className="mt-5 max-w-4xl">{L(p.hero.title)}</Heading>
            <Lead className="mt-7 max-w-3xl">{L(p.hero.lead)}</Lead>
          </Reveal>
        </Container>
      </div>

      {/* ESCADA */}
      <Section>
        <Reveal>
          <Heading className="max-w-3xl">{L(p.escadaTitle)}</Heading>
          <Lead className="mt-4">{L(p.escadaLead)}</Lead>
        </Reveal>
        <ol className="mt-10 flex flex-col gap-3">
          {p.escada.map((d, i) => {
            const urna = "urna" in d && d.urna;
            return (
              <Reveal key={d.n} delay={i * 0.04}>
                <li
                  className={cn(
                    "grid grid-cols-[auto_1fr] gap-4 rounded-2xl border p-5 sm:gap-6 sm:p-6",
                    urna ? "border-rose/30 bg-rose-soft" : "border-line bg-bg-elev",
                  )}
                >
                  <span className={cn("display tabular text-3xl font-semibold sm:text-4xl", urna ? "text-rose" : "text-teal")}>
                    {d.n}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="display-md text-lg font-semibold leading-snug">{L(d.titulo)}</h3>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[0.6rem] font-semibold uppercase tracking-wider",
                          urna ? "border-rose/40 text-rose" : "border-teal/40 text-teal",
                        )}
                      >
                        {urna ? <Lock className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                        {urna ? L(p.comCodigo) : L(p.semCodigo)}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-fg-2">{L(d.texto)}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      {/* MODELOS DE REQUERIMENTO */}
      <Section className="border-t border-line">
        <Reveal>
          <Eyebrow tone="amber">{L(p.modelosTitle)}</Eyebrow>
          <Heading className="mt-3">{L(p.modelosTitle)}</Heading>
          <Lead className="mt-4">{L(p.modelosLead)}</Lead>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {p.modelos.map((m, i) => (
            <Reveal key={i} delay={(i % 2) * 0.05}>
              <Requerimento modelo={m} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Callout tone="amber">
            <p>{L(p.aviso)}</p>
          </Callout>
        </Reveal>
      </Section>

      {/* CHECKLIST */}
      <Section className="border-t border-line">
        <Reveal>
          <Heading className="max-w-3xl">{L(p.checklist.title)}</Heading>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {p.checklist.itens.map((c, i) => (
            <Reveal key={i} delay={(i % 2) * 0.05}>
              <li className="flex items-start gap-3 rounded-2xl border border-line bg-bg-elev p-4">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-soft font-mono text-xs font-semibold text-teal">
                  {i + 1}
                </span>
                <span className="text-[0.95rem] leading-relaxed text-fg-2">{L(c)}</span>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10">
          <Link
            href={href(lang, "/provas/")}
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-fg transition hover:border-teal/50"
          >
            {lang === "pt" ? "Rever o que está provado" : "Review what is proven"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </Section>
      {/* AUDITORIA FÍSICA — por que testar a urna de exemplo não basta */}
      <Section className="border-t border-line">
        <Reveal>
          <Eyebrow tone="rose">{L(p.auditoriaFisica.eyebrow)}</Eyebrow>
          <Heading className="mt-3 max-w-3xl">{L(p.auditoriaFisica.title)}</Heading>
          <Lead className="mt-5">{L(p.auditoriaFisica.lead)}</Lead>
        </Reveal>
        <div className="mt-10 flex flex-col gap-4">
          {p.auditoriaFisica.pontos.map((pt, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="rounded-2xl border border-line bg-bg-elev p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rose/40 bg-rose-soft font-mono text-sm font-semibold text-rose">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="display-md text-lg font-semibold leading-snug">{L(pt.t)}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-2">{L(pt.b)}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <div className="flex items-start gap-3 rounded-2xl border border-amber/30 bg-amber-soft p-5 sm:p-6">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
            <p className="text-[0.95rem] font-medium leading-relaxed text-fg">{L(p.auditoriaFisica.prazo)}</p>
          </div>
        </Reveal>
        <Reveal className="mt-6">
          <Callout tone="rose" title={lang === "pt" ? "Conclusão" : "Conclusion"}>
            <p className="font-medium text-fg">{L(p.auditoriaFisica.conclusao)}</p>
          </Callout>
        </Reveal>
      </Section>

        </>
  );
}
