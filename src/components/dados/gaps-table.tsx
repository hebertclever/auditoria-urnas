"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { tipoLabel, type Gap } from "@/data/codigo";
import { cn } from "@/lib/utils";

const toneChip: Record<Gap["tipo"], string> = {
  A: "border-rose/40 text-rose bg-rose-soft",
  B: "border-amber/40 text-amber bg-amber-soft",
  C: "border-line-strong text-fg-2 bg-bg-sunk",
  D: "border-line text-fg-3 bg-bg-elev",
};

const toneDot: Record<Gap["tipo"], string> = {
  A: "bg-rose",
  B: "bg-amber",
  C: "bg-slate",
  D: "bg-fg-3",
};

function norm(s: string) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function sortKey(id: string) {
  const m = /^GAP-(ZIP|EVO)-(\d+)$/.exec(id);
  if (!m) return [9, 0] as const;
  return [m[1] === "ZIP" ? 0 : 1, Number(m[2])] as const;
}

export function GapsTable({ gaps }: { gaps: Gap[] }) {
  const { lang, dict } = useLang();
  const d = dict.dados.gaps;
  const [q, setQ] = useState("");
  const [tipo, setTipo] = useState<Gap["tipo"] | "all">("all");
  const dq = useDeferredValue(q);

  const counts = useMemo(() => {
    const c: Record<Gap["tipo"], number> = { A: 0, B: 0, C: 0, D: 0 };
    for (const g of gaps) c[g.tipo]++;
    return c;
  }, [gaps]);

  const rows = useMemo(() => {
    const nq = norm(dq.trim());
    return gaps
      .filter((g) => tipo === "all" || g.tipo === tipo)
      .filter((g) => !nq || norm(`${g.id} ${g.descricao} ${g.arquivo}`).includes(nq))
      .sort((a, b) => {
        const [ga, na] = sortKey(a.id);
        const [gb, nb] = sortKey(b.id);
        return ga - gb || na - nb;
      });
  }, [gaps, tipo, dq]);

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <label className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-3" />
          <input
            id="gaps-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={d.search}
            className="h-11 w-full rounded-full border border-line bg-bg-elev pl-10 pr-4 text-sm text-fg outline-none transition placeholder:text-fg-3 focus:border-amber"
          />
        </label>
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          <Chip active={tipo === "all"} onClick={() => setTipo("all")} className="border-line-strong text-fg bg-bg-elev">
            {d.all} <span className="font-mono tabular opacity-70">{gaps.length}</span>
          </Chip>
          {(["A", "B", "C", "D"] as const).map((k) => (
            <Chip key={k} active={tipo === k} onClick={() => setTipo(tipo === k ? "all" : k)} className={toneChip[k]}>
              <span className="font-mono font-semibold">{k}</span> {t(tipoLabel[k].curto, lang)}{" "}
              <span className="font-mono tabular opacity-70">{counts[k]}</span>
            </Chip>
          ))}
        </div>
      </div>

      <p className="mt-4 font-mono text-xs tabular text-fg-3">
        {rows.length} {rows.length === 1 ? d.result : d.results}
      </p>

      {rows.length === 0 && <p className="mt-6 text-sm text-fg-2">{d.empty}</p>}

      {/* Desktop table */}
      <div className="mt-3 hidden overflow-x-auto rounded-2xl border border-line bg-bg-elev md:block">
        <table className="data-table w-full text-sm">
          <thead>
            <tr>
              <th>{d.cols.id}</th>
              <th>{d.cols.tipo}</th>
              <th>{d.cols.desc}</th>
              <th>{d.cols.arquivo}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((g) => (
              <tr key={g.id}>
                <td className="whitespace-nowrap font-mono text-xs text-fg">{g.id}</td>
                <td className="whitespace-nowrap">
                  <TipoBadge tipo={g.tipo} />
                </td>
                <td className="min-w-[24rem] leading-relaxed text-fg-2">{g.descricao}</td>
                <td className="whitespace-nowrap font-mono text-xs text-fg-3">{g.arquivo || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="mt-3 flex flex-col gap-3 md:hidden">
        <AnimatePresence initial={false}>
          {rows.map((g) => (
            <motion.li
              key={g.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-line bg-bg-elev p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-fg">{g.id}</span>
                <TipoBadge tipo={g.tipo} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-fg-2">{g.descricao}</p>
              {g.arquivo && <p className="mt-2 font-mono text-[0.7rem] text-fg-3">{g.arquivo}</p>}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

function Chip({
  active,
  onClick,
  className,
  children,
}: {
  active: boolean;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 text-xs transition",
        className,
        active ? "ring-2 ring-fg/20 ring-offset-0" : "opacity-80 hover:opacity-100",
      )}
    >
      {children}
    </button>
  );
}

function TipoBadge({ tipo }: { tipo: Gap["tipo"] }) {
  const { lang } = useLang();
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[0.7rem] font-medium", toneChip[tipo])}>
      <span className={cn("h-1.5 w-1.5 rounded-full", toneDot[tipo])} />
      {tipo} · {t(tipoLabel[tipo].curto, lang)}
    </span>
  );
}
