import { cn } from "@/lib/utils";

type Tone = "amber" | "teal" | "rose" | "neutral";

const styles: Record<Tone, { ring: string; label: string; dot: string }> = {
  amber: { ring: "border-amber/30 bg-amber-soft", label: "text-amber", dot: "bg-amber" },
  teal: { ring: "border-teal/30 bg-teal-soft", label: "text-teal", dot: "bg-teal" },
  rose: { ring: "border-rose/30 bg-rose-soft", label: "text-rose", dot: "bg-rose" },
  neutral: { ring: "border-line bg-bg-elev", label: "text-fg-3", dot: "bg-fg-3" },
};

export function Callout({
  tone = "neutral",
  title,
  children,
  className,
}: {
  tone?: Tone;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const s = styles[tone];
  return (
    <div className={cn("rounded-2xl border p-5 sm:p-6", s.ring, className)}>
      {title && (
        <p className={cn("mb-2 flex items-center gap-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em]", s.label)}>
          <span className={cn("inline-block h-1.5 w-1.5 rounded-full", s.dot)} />
          {title}
        </p>
      )}
      <div className="text-[0.98rem] leading-relaxed text-fg-2 [&_strong]:font-semibold [&_strong]:text-fg">{children}</div>
    </div>
  );
}
