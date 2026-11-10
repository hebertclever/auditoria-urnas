"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/context";
import { href } from "@/i18n/routes";

export function ComoAuditar() {
  const { lang, dict } = useLang();
  const d = dict.dashboard.auditarTudo;
  return (
    <section className="rounded-3xl border border-teal/30 bg-teal-soft p-6 sm:p-8">
      <h2 className="display-md text-xl font-semibold sm:text-2xl">{d.title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-2">{d.lead}</p>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {d.passos.map((p, i) => (
          <li key={i} className="rounded-2xl border border-line bg-bg-elev p-4">
            <span className="display tabular text-2xl font-semibold text-teal">{i + 1}</span>
            <p className="mt-1.5 text-sm leading-relaxed text-fg-2">{p}</p>
          </li>
        ))}
      </ol>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={href(lang, "/metodo/#reproduzir")} className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90">
          {d.irMetodo} <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href={href(lang, "/dados/")} className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-elev px-5 py-2.5 text-sm font-medium text-fg transition hover:border-line-strong">
          {d.irDados} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
