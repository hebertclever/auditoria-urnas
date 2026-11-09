import { ChevronDown } from "lucide-react";
import { Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { cn } from "@/lib/utils";

export function Stars({ n, label }: { n: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`${label}: ${n}/5`} title={`${label}: ${n}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={cn("h-3 w-3", i < n ? "text-amber" : "text-line-strong")} fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 14.9l-5.3 2.8 1.1-5.9L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

export function PillarHeader({ eyebrow, stars, starsLabel, title, lead }: { eyebrow: string; stars: number; starsLabel: string; title: string; lead: string }) {
  return (
    <header className="max-w-3xl">
      <div className="flex flex-wrap items-center gap-3">
        <Eyebrow tone="amber">{eyebrow}</Eyebrow>
        <Stars n={stars} label={starsLabel} />
      </div>
      <Heading as="h2" className="mt-4">{title}</Heading>
      <Lead className="mt-5">{lead}</Lead>
    </header>
  );
}

export function MethodDetails({ summary, body }: { summary: string; body: string[] }) {
  return (
    <details className="group rounded-2xl border border-line bg-bg-elev open:border-line-strong">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-fg-2 marker:content-none [&::-webkit-details-marker]:hidden">
        {summary}
        <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
      </summary>
      <ol className="space-y-3 border-t border-line px-5 py-4 text-sm leading-relaxed text-fg-2">
        {body.map((b, i) => (
          <li key={i} className="grid grid-cols-[1.6rem_1fr] gap-2">
            <span className="font-mono text-xs text-fg-3">{String(i + 1).padStart(2, "0")}</span>
            <span>{b}</span>
          </li>
        ))}
      </ol>
    </details>
  );
}

export function WhyList({ title, items }: { title: string; items: string[] }) {
  return (
    <Callout tone="teal" title={title}>
      <ul className="space-y-2.5">
        {items.map((it, i) => (
          <li key={i} className="grid grid-cols-[0.9rem_1fr] gap-2.5">
            <span className="mt-[0.55em] inline-block h-1.5 w-1.5 rounded-full bg-teal" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </Callout>
  );
}

export function PillarIndex({ title, items }: { title: string; items: { href: string; label: string; n: number }[] }) {
  return (
    <nav aria-label={title} className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
      {items.map((it) => (
        <a
          key={it.href}
          href={it.href}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-bg-elev px-3.5 py-1.5 text-sm text-fg-2 transition hover:border-amber/50 hover:text-fg"
        >
          <span className="font-mono text-[0.65rem] text-amber">{String(it.n).padStart(2, "0")}</span>
          {it.label}
        </a>
      ))}
    </nav>
  );
}
