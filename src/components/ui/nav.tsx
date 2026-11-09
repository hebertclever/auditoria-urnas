"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { useLang } from "@/i18n/context";
import type { Locale } from "@/i18n/config";
import { href } from "@/i18n/routes";

export function Nav() {
  const path = usePathname() ?? "/";
  const { lang, dict } = useLang();
  const n = dict.common.nav;
  const other: Locale = lang === "pt" ? "en" : "pt";
  const switched = (path.replace(/^\/(pt|en)(?=\/|$)/, `/${other}`) || `/${other}/`) as Route;

  const links = [
    { href: href(lang, "/cadastro/"), key: "/cadastro", label: n.cadastro },
    { href: href(lang, "/codigo/"), key: "/codigo", label: n.codigo },
    { href: href(lang, "/dashboard/"), key: "/dashboard", label: n.dashboard },
    { href: href(lang, "/slides/"), key: "/slides", label: n.slides },
    { href: href(lang, "/dados/"), key: "/dados", label: n.dados },
    { href: href(lang, "/metodo/"), key: "/metodo", label: n.metodo },
  ];

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href={href(lang, "/")} className="display-md shrink-0 text-[1.05rem] font-semibold tracking-tight text-fg">
          {dict.common.brand.a}
          <span className="text-amber">.</span>
          <span className="hidden sm:inline">{dict.common.brand.b}</span>
        </Link>
        <nav className="no-scrollbar flex items-center gap-1 overflow-x-auto">
          {links.map((l) => {
            const active = path.startsWith(`/${lang}${l.key}`);
            return (
              <Link
                key={l.key}
                href={l.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition",
                  active ? "bg-fg text-bg" : "text-fg-2 hover:bg-bg-sunk hover:text-fg",
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href={switched}
            hrefLang={other === "pt" ? "pt-BR" : "en"}
            aria-label={n.toggleLang.label}
            title={n.toggleLang.label}
            onClick={() => {
              try { localStorage.setItem("lang", other); } catch {}
            }}
            className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-3 font-mono text-xs font-semibold uppercase tracking-wider text-fg-2 transition hover:border-line-strong hover:text-fg"
          >
            <Languages className="h-3.5 w-3.5" />
            {n.toggleLang.short}
          </Link>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
