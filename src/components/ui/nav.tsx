"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, Languages, Menu, X } from "lucide-react";
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

  // The phone menu is "open at" a path, so following a link closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === path;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenAt(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: href(lang, "/cadastro/"), key: "/cadastro", label: n.cadastro },
    { href: href(lang, "/codigo/"), key: "/codigo", label: n.codigo },
    { href: href(lang, "/provas/"), key: "/provas", label: n.provas },
    { href: href(lang, "/parlamentar/"), key: "/parlamentar", label: n.parlamentar },
    { href: href(lang, "/dashboard/"), key: "/dashboard", label: n.dashboard },
    { href: href(lang, "/slides/"), key: "/slides", label: n.slides },
    { href: href(lang, "/dados/"), key: "/dados", label: n.dados },
    { href: href(lang, "/metodo/"), key: "/metodo", label: n.metodo },
  ];
  const isActive = (key: string) => path.startsWith(`/${lang}${key}`);

  const langLink = (
    <Link
      href={switched}
      hrefLang={other === "pt" ? "pt-BR" : "en"}
      aria-label={n.toggleLang.label}
      title={n.toggleLang.label}
      onClick={() => {
        try { localStorage.setItem("lang", other); } catch {}
      }}
      className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line px-3 font-mono text-xs font-semibold uppercase tracking-wider text-fg-2 transition hover:border-line-strong hover:text-fg lg:h-9"
    >
      <Languages className="h-3.5 w-3.5" />
      {n.toggleLang.short}
    </Link>
  );

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link
          href={href(lang, "/")}
          onClick={() => setOpenAt(null)}
          className="display-md inline-flex h-11 shrink-0 items-center text-[1.05rem] font-semibold tracking-tight text-fg"
        >
          {dict.common.brand.a}
          <span className="text-amber">.</span>
          <span className="hidden min-[440px]:inline">{dict.common.brand.b}</span>
        </Link>

        {/* Wide screens: every section on one line. */}
        <nav className="no-scrollbar hidden items-center gap-0.5 overflow-x-auto lg:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={cn(
                "whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition xl:px-3.5",
                isActive(l.key) ? "bg-fg text-bg" : "text-fg-2 hover:bg-bg-sunk hover:text-fg",
              )}
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-2">{langLink}</div>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>

        {/* Phones and tablets: language, theme and one menu button — nothing hidden off-screen. */}
        <div className="flex items-center gap-1.5 lg:hidden">
          {langLink}
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-secoes"
            aria-label={open ? n.menu.close : n.menu.open}
            onClick={() => setOpenAt(open ? null : path)}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-4 text-sm font-semibold text-bg transition active:scale-95"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            {n.menu.label}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-secoes"
            aria-label={n.menu.label}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg lg:hidden"
          >
            <ul className="mx-auto max-w-6xl px-3 py-2 sm:px-6">
              {links.map((l) => (
                <li key={l.key}>
                  <Link
                    href={l.href}
                    onClick={() => setOpenAt(null)}
                    aria-current={isActive(l.key) ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center justify-between rounded-xl px-3 text-base font-medium transition active:bg-bg-sunk",
                      isActive(l.key) ? "bg-bg-elev text-fg" : "text-fg-2",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn("h-1.5 w-1.5 rounded-full", isActive(l.key) ? "bg-amber" : "bg-line-strong")} />
                      {l.label}
                    </span>
                    <ChevronRight className="h-4 w-4 text-fg-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
