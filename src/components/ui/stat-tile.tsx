import { cn } from "@/lib/utils";
import { CountUp } from "./count-up";
import type { StatFormat } from "@/lib/format";

type Tone = "amber" | "teal" | "rose" | "neutral";

const toneText: Record<Tone, string> = {
  amber: "text-amber",
  teal: "text-teal",
  rose: "text-rose",
  neutral: "text-fg",
};

export function StatTile({
  value,
  format,
  prefix,
  suffix,
  label,
  tone = "neutral",
  className,
  big,
}: {
  value: number;
  format?: StatFormat;
  prefix?: string;
  suffix?: string;
  label: React.ReactNode;
  tone?: Tone;
  className?: string;
  big?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line bg-bg-elev p-5 sm:p-6",
        className,
      )}
    >
      <div className={cn("display tabular font-semibold", big ? "text-[clamp(2.6rem,6vw,4.5rem)]" : "text-[clamp(2rem,4vw,3rem)]", toneText[tone])}>
        {prefix}
        <CountUp to={value} format={format} />
        {suffix}
      </div>
      <p className="mt-2 text-sm leading-snug text-fg-2">{label}</p>
    </div>
  );
}
