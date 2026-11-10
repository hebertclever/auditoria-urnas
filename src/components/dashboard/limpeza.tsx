"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BarChart, type Bar } from "@/components/charts/bar-chart";
import { useFmt, useLang } from "@/i18n/context";
import { Panel, Segmented, PanelAudit, SimpleOnly, EquivCallout } from "./ui";
import { comparacoes } from "@/data/comparacoes";
import { limpeza } from "@/data/cadastro";

export function LimpezaPanel() {
  const { lang, dict } = useLang();
  const { fmt, fmtCompact } = useFmt();
  const d = dict.dashboard.limpeza;
  const [horizon, setHorizon] = useState(4);

  const bars: Bar[] = [
    { label: d.mortes, value: limpeza.mortesEleitores2022, tone: "slate" },
    { label: d.cancelados, value: limpeza.cancelamentos2022.falecimento, tone: "teal" },
    { label: d.gap, value: limpeza.gapAnual, tone: "rose" },
  ];

  const acc = limpeza.acumulado.find((a) => a.anos === horizon) ?? limpeza.acumulado[1];

  const motivos = [
    { k: d.motivoLabels.falecimento, v: limpeza.cancelamentos2022.falecimento, tone: "bg-teal" },
    { k: d.motivoLabels.judiciais, v: limpeza.cancelamentos2022.judiciais, tone: "bg-amber" },
    { k: d.motivoLabels.perdaDireitos, v: limpeza.cancelamentos2022.perdaDireitos, tone: "bg-slate" },
    { k: d.motivoLabels.duplicidade, v: limpeza.cancelamentos2022.duplicidade, tone: "bg-fg" },
  ];
  const totalMot = limpeza.cancelamentos2022.total;

  return (
    <Panel id="limpeza" title={d.title} subtitle={d.lead}>
      <SimpleOnly>
        <p className="mb-4 text-sm leading-relaxed text-fg-2">{d.simple}</p>
        <EquivCallout comp={comparacoes.gapAnual} className="mb-5" />
      </SimpleOnly>

      <BarChart data={bars} height={280} format={(v) => fmtCompact(v)} minZero showValues />

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-line bg-bg-sunk p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-fg-2">{d.acumulado}</p>
            <Segmented
              options={limpeza.acumulado.map((a) => ({ key: String(a.anos), label: a.periodo[lang].split(" ")[0] }))}
              value={String(horizon)}
              onChange={(k) => setHorizon(Number(k))}
            />
          </div>
          <motion.p key={horizon} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="display tabular text-4xl font-semibold text-rose">
            {fmt(acc.titulos)}
          </motion.p>
          <p className="mt-1 text-sm text-fg-3">{acc.periodo[lang]}</p>
        </div>

        <div className="rounded-2xl border border-line bg-bg-sunk p-5">
          <p className="mb-3 text-sm font-medium text-fg-2">{d.motivos}</p>
          <div className="mb-3 flex h-4 overflow-hidden rounded-full">
            {motivos.map((mo, i) => (
              <motion.div key={i} className={mo.tone} initial={{ width: 0 }} whileInView={{ width: `${(mo.v / totalMot) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} />
            ))}
          </div>
          <ul className="space-y-1.5 text-sm">
            {motivos.map((mo, i) => (
              <li key={i} className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-fg-2">
                  <span className={`inline-block h-2.5 w-2.5 rounded-sm ${mo.tone}`} />{mo.k}
                </span>
                <span className="font-mono tabular text-fg">{fmt(mo.v)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PanelAudit
        titulo={{ pt: "Gap de limpeza cadastral", en: "Registry cleanup gap" }}
        fonte={{ tier: "T0", source: { pt: "DATASUS/SIM · TSE cancelamentos 2022", en: "DATASUS/SIM · TSE 2022 cancellations" }, href: "https://www.tse.jus.br/comunicacao/noticias/2023/Maio/justica-eleitoral-cancelou-quase-800-mil-titulos-em-2022" }}
        metodo={{ pt: limpeza.nota17505.pt, en: limpeza.nota17505.en }}
        dados={{ cancelamentos2022: limpeza.cancelamentos2022, gapAnual: limpeza.gapAnual, acumulado: limpeza.acumulado }}
      />
    </Panel>
  );
}
