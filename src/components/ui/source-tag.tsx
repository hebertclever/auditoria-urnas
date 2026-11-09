import { cn } from "@/lib/utils";

export type Tier = "T0" | "T1" | "T2" | "T3";

const tierTone: Record<Tier, string> = {
  T0: "border-teal/40 text-teal",
  T1: "border-amber/40 text-amber",
  T2: "border-line-strong text-fg-2",
  T3: "border-rose/40 text-rose",
};

export function SourceTag({
  tier,
  source,
  date,
  href,
  note,
  className,
}: {
  tier: Tier;
  source: string;
  date?: string;
  href?: string;
  note?: string;
  className?: string;
}) {
  const inner = (
    <>
      <span className={cn("rounded-md border px-1.5 py-0.5 font-mono text-[0.65rem] font-semibold", tierTone[tier])}>
        {tier}
      </span>
      <span className="text-fg-2">{source}</span>
      {date && <span className="text-fg-3">· {date}</span>}
      {note && <span className="text-fg-3">· {note}</span>}
    </>
  );
  const cls = cn("inline-flex flex-wrap items-center gap-2 text-xs leading-relaxed", className);
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cn(cls, "hover:underline")}>
      {inner}
    </a>
  ) : (
    <span className={cls}>{inner}</span>
  );
}

export function Sources({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mt-6 flex flex-col gap-1.5 border-l-2 border-line pl-4", className)}>
      <p className="font-mono text-[0.65rem] uppercase tracking-widest text-fg-3">Fontes</p>
      {children}
    </div>
  );
}
