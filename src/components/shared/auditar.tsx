"use client";

import { useState } from "react";
import { ChevronDown, Copy, Check, FileSearch } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLang } from "@/i18n/context";
import { t, type L } from "@/i18n/config";
import { SourceTag, type Tier } from "@/components/ui/source-tag";
import { cn } from "@/lib/utils";

export type AuditarProps = {
  /** Título curto do que está sendo auditado, ex.: "Δ% 1T→2T por faixa etária" */
  titulo: L;
  fonte: { tier: Tier; source: L; href?: string; date?: string };
  /** Arquivo/tabela concreta usada (nome do CSV, tabela SIDRA, ZIP). */
  arquivo?: string;
  /** Como o número foi obtido, em 1–3 frases para leigos. */
  metodo: L;
  /** Trecho de código ou pseudo-código reproduzível. */
  comando?: string;
  /** Linhas brutas que sustentam o número; viram preview + botão copiar. */
  dados?: unknown;
  className?: string;
  defaultOpen?: boolean;
};

function previewJson(d: unknown, max = 6): { text: string; more: number } {
  if (Array.isArray(d)) {
    const head = d.slice(0, max);
    return { text: JSON.stringify(head, null, 2), more: Math.max(0, d.length - max) };
  }
  return { text: JSON.stringify(d, null, 2), more: 0 };
}

export function Auditar({ titulo, fonte, arquivo, metodo, comando, dados, className, defaultOpen = false }: AuditarProps) {
  const { lang, dict } = useLang();
  const u = dict.common.ui;
  const [open, setOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = JSON.stringify(dados, null, 2);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch {}
      document.body.removeChild(ta);
    }
  }

  const pv = dados !== undefined ? previewJson(dados) : null;

  return (
    <div className={cn("rounded-2xl border border-line bg-bg-elev", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-teal">
          <FileSearch className="h-3.5 w-3.5" />
          {u.auditar}
          <span className="hidden text-fg-3 sm:inline">· {t(titulo, lang)}</span>
        </span>
        <ChevronDown className={cn("h-4 w-4 shrink-0 text-fg-3 transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-5 border-t border-line px-4 py-5 sm:px-5 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-4 text-sm leading-relaxed text-fg-2">
                <div>
                  <p className="mb-1 font-mono text-[0.65rem] uppercase tracking-widest text-fg-3">{u.fonte}</p>
                  <SourceTag tier={fonte.tier} source={t(fonte.source, lang)} date={fonte.date} href={fonte.href} />
                </div>
                {arquivo && (
                  <div>
                    <p className="mb-1 font-mono text-[0.65rem] uppercase tracking-widest text-fg-3">{u.arquivo}</p>
                    <code className="rounded-md bg-bg-sunk px-1.5 py-0.5 font-mono text-xs text-fg">{arquivo}</code>
                  </div>
                )}
                <div>
                  <p className="mb-1 font-mono text-[0.65rem] uppercase tracking-widest text-fg-3">{u.metodo}</p>
                  <p>{t(metodo, lang)}</p>
                </div>
                {comando && (
                  <div>
                    <p className="mb-1 font-mono text-[0.65rem] uppercase tracking-widest text-fg-3">{u.comando}</p>
                    <pre className="overflow-x-auto rounded-xl bg-bg-sunk p-3 font-mono text-[0.72rem] leading-relaxed text-fg">{comando}</pre>
                  </div>
                )}
              </div>
              {pv && (
                <div className="min-w-0">
                  <div className="mb-1 flex items-center justify-between">
                    <p className="font-mono text-[0.65rem] uppercase tracking-widest text-fg-3">{u.dadosBrutos}</p>
                    <button
                      type="button"
                      onClick={copy}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[0.68rem] text-fg-2 transition hover:border-line-strong hover:text-fg"
                    >
                      {copied ? <Check className="h-3 w-3 text-teal" /> : <Copy className="h-3 w-3" />}
                      {copied ? u.copiado : u.copiarJson}
                    </button>
                  </div>
                  <pre className="max-h-72 overflow-auto rounded-xl bg-bg-sunk p-3 font-mono text-[0.7rem] leading-relaxed text-fg-2">{pv.text}</pre>
                  {pv.more > 0 && <p className="mt-1 font-mono text-[0.65rem] text-fg-3">+{pv.more} {u.maisLinhas}</p>}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
