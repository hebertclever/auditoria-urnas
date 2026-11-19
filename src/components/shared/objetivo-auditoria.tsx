"use client";

import Link from "next/link";
import { ArrowRight, ClipboardX, FileCode2, Fingerprint, Scale, SearchCheck, Users, Wrench } from "lucide-react";
import { objetivo, type ItemObjetivo } from "@/data/objetivo";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const ICON: Record<ItemObjetivo["icon"], React.ElementType> = {
  lista: Users,
  lei: Scale,
  baixa: ClipboardX,
  digital: Fingerprint,
  kit: Wrench,
  urna: SearchCheck,
  codigo: FileCode2,
};

/** Achado → correção, um por linha; a última linha (o código-fonte) é o destino de todas. */
export function ObjetivoAuditoria() {
  const { lang } = useLang();
  const L = (x: { pt: string; en: string }) => t(x, lang);
  const n = objetivo.itens.length;

  return (
    <div>
      <Reveal>
        <Eyebrow tone="teal">{L(objetivo.eyebrow)}</Eyebrow>
        <Heading as="h2" className="mt-3 max-w-4xl">{L(objetivo.title)}</Heading>
        <Lead className="mt-5">{L(objetivo.lead)}</Lead>
      </Reveal>

      <div className="mt-8 hidden gap-4 px-5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-fg-3 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)]">
        <span>{L(objetivo.achadoLabel)}</span>
        <span className="w-4" />
        <span>{L(objetivo.correcaoLabel)}</span>
      </div>

      <ol className="mt-3 flex flex-col gap-3">
        {objetivo.itens.map((it, i) => {
          const Icon = ICON[it.icon];
          const ultimo = i === n - 1;
          return (
            <Reveal key={it.icon} delay={i * 0.04}>
              <li
                className={cn(
                  "grid gap-3 rounded-2xl border p-5 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)] md:items-center md:gap-4",
                  ultimo ? "border-amber/40 bg-amber-soft" : "border-line bg-bg-elev",
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                      ultimo ? "bg-amber text-[#0a0c10]" : "bg-rose-soft text-rose",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-[0.95rem] leading-relaxed text-fg">{L(it.achado)}</p>
                </div>
                <ArrowRight className="hidden h-4 w-4 text-fg-3 md:block" aria-hidden />
                <p className={cn("text-[0.95rem] leading-relaxed md:pl-0", ultimo ? "font-semibold text-fg" : "text-fg-2")}>
                  <span className="mr-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-teal md:hidden">{L(objetivo.correcaoLabel)}:</span>
                  {L(it.correcao)}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ol>

      <Reveal className="mt-6">
        <Callout tone="teal">
          <p className="text-[1.02rem] font-medium text-fg">{L(objetivo.fecho)}</p>
          <Link
            href={href(lang, "/parlamentar/")}
            className="group mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-teal"
          >
            {L(objetivo.link)}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Callout>
      </Reveal>
    </div>
  );
}
