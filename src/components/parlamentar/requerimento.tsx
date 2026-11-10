"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { parlamentar } from "@/data/parlamentar";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";

type Modelo = (typeof parlamentar.modelos)[number];

export function Requerimento({ modelo }: { modelo: Modelo }) {
  const { lang } = useLang();
  const p = parlamentar;
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(modelo.texto);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = modelo.texto;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
      document.body.removeChild(ta);
    }
  }

  return (
    <div className="flex flex-col rounded-2xl border border-line bg-bg-elev p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="display-md text-lg font-semibold leading-snug">{L(modelo.titulo)}</h3>
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[0.7rem] text-fg-2 transition hover:border-amber/50 hover:text-fg"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-teal" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? L(p.copiado) : L(p.copiar)}
        </button>
      </div>
      <dl className="mt-3 flex flex-col gap-1.5 border-y border-line py-3 text-xs">
        <div className="flex gap-2">
          <dt className="font-mono uppercase tracking-wider text-fg-3">{L(p.destinoLabel)}:</dt>
          <dd className="text-fg-2">{L(modelo.destino)}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-mono uppercase tracking-wider text-fg-3">{L(p.baseLabel)}:</dt>
          <dd className="text-fg-2">{L(modelo.base)}</dd>
        </div>
      </dl>
      <pre className="mt-3 max-h-80 overflow-auto whitespace-pre-wrap rounded-xl bg-bg-sunk p-4 font-mono text-[0.8rem] leading-relaxed text-fg-2">
        {modelo.texto}
      </pre>
    </div>
  );
}
