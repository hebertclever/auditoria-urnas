"use client";

import { cn } from "@/lib/utils";
import { useMode } from "./mode";
import { Auditar, type AuditarProps } from "@/components/shared/auditar";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import type { Comparacao } from "@/data/comparacoes";

export { SimpleOnly, TechOnly } from "./mode";

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  className,
}: {
  options: { key: T; label: string }[];
  value: T;
  onChange: (k: T) => void;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex flex-wrap gap-1 rounded-full bg-bg-sunk p-1", className)}>
      {options.map((o) => (
        <button
          key={o.key}
          type="button"
          onClick={() => onChange(o.key)}
          aria-pressed={value === o.key}
          className={cn(
            "whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition",
            value === o.key ? "bg-fg text-bg" : "text-fg-2 hover:text-fg",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Panel({
  title,
  subtitle,
  controls,
  children,
  id,
  className,
}: {
  title: string;
  subtitle?: string;
  controls?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 rounded-3xl border border-line bg-bg-elev p-5 sm:p-7", className)}>
      <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <h2 className="display-md text-xl font-semibold sm:text-2xl">{title}</h2>
          {subtitle && <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-fg-2">{subtitle}</p>}
        </div>
        {controls && <div className="flex shrink-0 flex-wrap items-center gap-2">{controls}</div>}
      </div>
      {children}
    </section>
  );
}

export function EquivCallout({ comp, className }: { comp: Comparacao; className?: string }) {
  const { lang } = useLang();
  return (
    <div className={cn("rounded-2xl border border-amber/25 bg-amber-soft p-4", className)}>
      <p className="text-sm leading-relaxed text-fg">
        <span className="font-semibold">{t(comp.equivalente, lang)}.</span>
        {comp.detalhe && <span className="text-fg-2"> {t(comp.detalhe, lang)}</span>}
      </p>
    </div>
  );
}

export function PanelAudit(props: AuditarProps) {
  const { mode } = useMode();
  return <Auditar {...props} defaultOpen={mode === "tecnico"} className={cn("mt-5", props.className)} />;
}

export function Legend({ items }: { items: { label: string; tone: "amber" | "teal" | "rose" | "slate" | "fg" }[] }) {
  const toneBg: Record<string, string> = { amber: "bg-amber", teal: "bg-teal", rose: "bg-rose", slate: "bg-slate", fg: "bg-fg" };
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center gap-1.5 text-xs text-fg-2">
          <span className={cn("inline-block h-2.5 w-2.5 rounded-sm", toneBg[it.tone])} />
          {it.label}
        </span>
      ))}
    </div>
  );
}
