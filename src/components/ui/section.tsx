import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "amber" | "teal" | "rose";
  className?: string;
}) {
  const tones = {
    neutral: "text-fg-3",
    amber: "text-amber",
    teal: "text-teal",
    rose: "text-rose",
  };
  return (
    <p className={cn("font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em]", tones[tone], className)}>
      {children}
    </p>
  );
}

export function Heading({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}) {
  const sizes = {
    h1: "display text-[clamp(2.6rem,7vw,5.5rem)] font-semibold",
    h2: "display-md text-[clamp(1.9rem,4vw,3rem)] font-semibold",
    h3: "display-md text-[clamp(1.3rem,2.4vw,1.7rem)] font-semibold",
  };
  return <Tag className={cn(sizes[Tag], className)}>{children}</Tag>;
}

export function Lead({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn("max-w-2xl text-lg leading-relaxed text-fg-2 sm:text-xl", className)}>{children}</p>;
}

export function Prose({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("prose-audit text-[1.02rem] leading-[1.75] text-fg-2", className)}>{children}</div>;
}
