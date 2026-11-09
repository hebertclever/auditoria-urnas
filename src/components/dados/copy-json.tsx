"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { useLang } from "@/i18n/context";
import { cn } from "@/lib/utils";

type Item = { key: string; label: string; data: unknown };

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export function CopyJsonList({ items }: { items: Item[] }) {
  const { dict } = useLang();
  const a = dict.dados.arquivos;
  const [state, setState] = useState<Record<string, "idle" | "ok" | "fail">>({});

  async function onCopy(it: Item) {
    const ok = await copyText(JSON.stringify(it.data, null, 1));
    setState((s) => ({ ...s, [it.key]: ok ? "ok" : "fail" }));
    setTimeout(() => setState((s) => ({ ...s, [it.key]: "idle" })), 2200);
  }

  return (
    <div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((it) => {
          const st = state[it.key] ?? "idle";
          const size = new Blob([JSON.stringify(it.data)]).size;
          return (
            <li key={it.key} className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-bg-elev p-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-fg">{it.label}</p>
                <p className="mt-1 font-mono text-[0.7rem] tabular text-fg-3">
                  {it.key}.json · {(size / 1024).toFixed(1)} KB
                </p>
              </div>
              <button
                type="button"
                onClick={() => onCopy(it)}
                className={cn(
                  "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold transition",
                  st === "ok" ? "border-teal/40 bg-teal-soft text-teal" : st === "fail" ? "border-rose/40 bg-rose-soft text-rose" : "border-line-strong text-fg hover:border-fg",
                )}
              >
                {st === "ok" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {st === "ok" ? a.copied : st === "fail" ? a.failed : a.copy}
              </button>
            </li>
          );
        })}
      </ul>
      <a
        href="https://github.com/hebertclever/auditoria-urnas/tree/main/src/data"
        target="_blank"
        rel="noreferrer"
        className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber"
      >
        {a.github}
        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
