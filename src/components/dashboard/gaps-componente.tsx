"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { Panel, PanelAudit, SimpleOnly } from "./ui";
import { componentes, getGaps, tipoLabel, type Gap } from "@/data/codigo";
import { cn } from "@/lib/utils";

const TIPO_ORDER: Gap["tipo"][] = ["A", "B", "C", "D"];
const toneBg: Record<string, string> = { rose: "bg-rose", amber: "bg-amber", slate: "bg-slate", fg: "bg-fg" };
const toneText: Record<string, string> = { rose: "text-rose", amber: "text-amber", slate: "text-slate", fg: "text-fg" };

export function GapsComponente() {
  const { lang, dict } = useLang();
  const d = dict.dashboard.gaps;
  const gaps = getGaps(lang);
  const [selected, setSelected] = useState<string | null>(null);

  const files = useMemo(() => [...componentes.map((c) => c.arquivo), "__outros__"], []);
  const fileOf = (arquivo: string) => componentes.find((c) => arquivo.includes(c.arquivo))?.arquivo ?? "__outros__";

  const grouped = useMemo(() => {
    const map = new Map<string, { A: number; B: number; C: number; D: number; total: number; gaps: Gap[] }>();
    for (const f of files) map.set(f, { A: 0, B: 0, C: 0, D: 0, total: 0, gaps: [] });
    for (const g of gaps) {
      const f = fileOf(g.arquivo);
      const row = map.get(f)!;
      row[g.tipo] += 1;
      row.total += 1;
      row.gaps.push(g);
    }
    return files
      .map((f) => ({ file: f, ...map.get(f)! }))
      .filter((r) => r.total > 0)
      .sort((a, b) => b.total - a.total);
  }, [files, gaps]);

  const maxTotal = Math.max(...grouped.map((g) => g.total));
  const label = (f: string) => (f === "__outros__" ? d.outros : f);
  const selectedGaps = selected ? grouped.find((g) => g.file === selected)?.gaps ?? [] : [];

  return (
    <Panel id="gaps" title={d.title} subtitle={d.lead}>
      <SimpleOnly>
        <p className="mb-4 text-sm leading-relaxed text-fg-2">{d.simple}</p>
      </SimpleOnly>

      <div className="mb-5 flex flex-wrap gap-x-4 gap-y-1.5">
        {TIPO_ORDER.map((tp) => (
          <span key={tp} className="inline-flex items-center gap-1.5 text-xs text-fg-2">
            <span className={cn("inline-block h-2.5 w-2.5 rounded-sm", toneBg[tipoLabel[tp].tone])} />
            {t(tipoLabel[tp].curto, lang)}
          </span>
        ))}
      </div>

      <ul className="space-y-2.5">
        {grouped.map((row) => {
          const active = selected === row.file;
          return (
            <li key={row.file}>
              <button
                type="button"
                onClick={() => setSelected(active ? null : row.file)}
                className={cn("grid w-full grid-cols-[minmax(8rem,12rem)_1fr_auto] items-center gap-3 rounded-xl px-2 py-1.5 text-left transition hover:bg-bg-sunk", active && "bg-bg-sunk")}
              >
                <span className={cn("truncate font-mono text-xs", active ? "text-fg" : "text-fg-2")}>{label(row.file)}</span>
                <span className="flex h-5 overflow-hidden rounded-md">
                  {TIPO_ORDER.map((tp) =>
                    row[tp] > 0 ? (
                      <motion.span
                        key={tp}
                        className={toneBg[tipoLabel[tp].tone]}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(row[tp] / maxTotal) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        title={`${row[tp]} · ${t(tipoLabel[tp].curto, lang)}`}
                      />
                    ) : null,
                  )}
                </span>
                <span className="w-8 text-right font-mono tabular text-sm font-semibold text-fg">{row.total}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <AnimatePresence initial={false}>
        {selected && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="mt-5 space-y-2 rounded-2xl border border-line bg-bg-sunk p-4">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-fg-3">{label(selected)} · {selectedGaps.length}</p>
              {selectedGaps.map((g) => (
                <div key={g.id} className="flex gap-3 border-b border-line py-2 last:border-0">
                  <span className={cn("shrink-0 font-mono text-xs font-semibold", toneText[tipoLabel[g.tipo].tone])}>{g.id}</span>
                  <span className="text-sm text-fg-2">{g.descricao}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!selected && <p className="mt-4 text-xs text-fg-3">{d.clique}</p>}

      <PanelAudit
        titulo={{ pt: "63 gaps por componente", en: "63 gaps by component" }}
        fonte={{ tier: "T0", source: { pt: "ZIP oficial do TSE — scripts e specs de verificação", en: "Official TSE ZIP — verification scripts and specs" }, href: "https://dadosabertos.tse.jus.br/dataset/resultados-2026-arquivos-transmitidos-para-totalizacao" }}
        metodo={{ pt: "Lemos as 2.852 linhas do kit de verificação, uma a uma, nas três versões. Cada gap aponta um arquivo e uma linha. Aqui eles são agrupados pelo arquivo onde moram.", en: "We read the 2,852 lines of the verification kit, one by one, across the three versions. Each gap names a file and a line. Here they are grouped by the file where they live." }}
        dados={getGaps(lang)}
      />
    </Panel>
  );
}
