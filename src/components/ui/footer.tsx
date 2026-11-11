"use client";

import Link from "next/link";
import { useLang } from "@/i18n/context";
import { href } from "@/i18n/routes";

export function Footer() {
  const { lang, dict } = useLang();
  const f = dict.common.footer;
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="display-md text-xl font-semibold">
            {dict.common.brand.a}<span className="text-amber">.</span>{dict.common.brand.b}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-2">{f.motto}</p>
          <p className="mt-4 font-mono text-xs text-fg-3">{f.sources}</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-fg-3">{f.eixos}</p>
          <ul className="space-y-0 text-fg-2 sm:space-y-2">
            <li><Link className="inline-flex min-h-10 items-center hover:text-fg sm:min-h-0" href={href(lang, "/cadastro/")}>{f.cadastro}</Link></li>
            <li><Link className="inline-flex min-h-10 items-center hover:text-fg sm:min-h-0" href={href(lang, "/codigo/")}>{f.codigo}</Link></li>
            <li><Link className="inline-flex min-h-10 items-center hover:text-fg sm:min-h-0" href={href(lang, "/dados/")}>{f.dados}</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-fg-3">{f.transparencia}</p>
          <ul className="space-y-0 text-fg-2 sm:space-y-2">
            <li><Link className="inline-flex min-h-10 items-center hover:text-fg sm:min-h-0" href={href(lang, "/metodo/")}>{f.metodo}</Link></li>
            <li><Link className="inline-flex min-h-10 items-center hover:text-fg sm:min-h-0" href={href(lang, "/metodo/#limites")}>{f.limites}</Link></li>
            <li>
              <a className="inline-flex min-h-10 items-center hover:text-fg sm:min-h-0" href="https://github.com/hebertclever/auditoria-urnas" target="_blank" rel="noreferrer">
                {f.github}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
