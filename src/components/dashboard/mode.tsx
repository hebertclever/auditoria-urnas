"use client";

import { useSyncExternalStore } from "react";
import { Eye, Wrench } from "lucide-react";
import { useLang } from "@/i18n/context";
import { cn } from "@/lib/utils";

export type Mode = "simples" | "tecnico";

// Store externo: evita setState-dentro-de-efeito e hidrata do localStorage de forma segura.
let current: Mode = "simples";
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded) return;
  loaded = true;
  try {
    const s = localStorage.getItem("dash-mode");
    if (s === "tecnico" || s === "simples") current = s;
  } catch {}
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => { listeners.delete(cb); };
}
function getSnapshot(): Mode {
  load();
  return current;
}
function getServerSnapshot(): Mode {
  return "simples";
}
function setModeStore(m: Mode) {
  current = m;
  loaded = true;
  try { localStorage.setItem("dash-mode", m); } catch {}
  listeners.forEach((l) => l());
}

export function ModeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useMode() {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { mode, setMode: setModeStore };
}

export function ModeToggle() {
  const { mode, setMode } = useMode();
  const { dict } = useLang();
  const m = dict.dashboard.mode;
  const opts: { key: Mode; label: string; icon: React.ElementType }[] = [
    { key: "simples", label: m.simples, icon: Eye },
    { key: "tecnico", label: m.tecnico, icon: Wrench },
  ];
  return (
    <div className="inline-flex gap-1 rounded-full bg-bg-sunk p-1">
      {opts.map((o) => {
        const Icon = o.icon;
        return (
          <button
            key={o.key}
            type="button"
            onClick={() => setMode(o.key)}
            aria-pressed={mode === o.key}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition",
              mode === o.key ? "bg-fg text-bg" : "text-fg-2 hover:text-fg",
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export function SimpleOnly({ children }: { children: React.ReactNode }) {
  const { mode } = useMode();
  return mode === "simples" ? <>{children}</> : null;
}

export function TechOnly({ children }: { children: React.ReactNode }) {
  const { mode } = useMode();
  return mode === "tecnico" ? <>{children}</> : null;
}
