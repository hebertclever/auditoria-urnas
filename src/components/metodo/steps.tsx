import { cn } from "@/lib/utils";

export type Step = { title: string; body: string; cmd?: string };

export function Steps({ title, steps, tone }: { title: string; steps: Step[]; tone: "amber" | "rose" }) {
  return (
    <div className="rounded-3xl border border-line bg-bg-elev p-6 sm:p-8">
      <h3 className="display-md text-xl font-semibold sm:text-2xl">{title}</h3>
      <ol className="mt-6 flex flex-col gap-6">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-4">
            <span
              className={cn(
                "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold",
                tone === "amber" ? "bg-amber text-[#0a0c10]" : "bg-rose text-[#0a0c10]",
              )}
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-fg">{s.title}</p>
              <p className="mt-1 text-[0.93rem] leading-relaxed text-fg-2">{s.body}</p>
              {s.cmd && (
                <pre className="mt-3 overflow-x-auto rounded-xl border border-line bg-bg-sunk p-3.5 font-mono text-[0.76rem] leading-relaxed text-fg-2">
                  <code>{s.cmd}</code>
                </pre>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
