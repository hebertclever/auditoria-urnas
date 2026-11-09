"use client";

import { Section, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { verificavel } from "@/data/codigo";

const statusCls = {
  sim: "border-teal/40 bg-teal-soft text-teal",
  parcial: "border-amber/40 bg-amber-soft text-amber",
  nao: "border-rose/40 bg-rose-soft text-rose",
} as const;

export function VerificavelSection() {
  const { lang, dict } = useLang();
  const d = dict.codigo.verificavel;
  const ui = dict.common.ui;
  const label = { sim: ui.sim, parcial: ui.parcial, nao: ui.nao } as const;
  return (
    <Section id="verificavel" className="border-t border-line">
      <Reveal>
        <Eyebrow tone="amber">{d.eyebrow}</Eyebrow>
        <Heading className="mt-3">{d.title}</Heading>
        <Lead className="mt-5">{d.lead}</Lead>
      </Reveal>
      <Reveal delay={0.1} className="mt-10 overflow-x-auto rounded-3xl border border-line bg-bg-elev">
        <table className="data-table w-full min-w-[640px] text-sm">
          <thead>
            <tr>
              <th>{d.cols.item}</th>
              <th>{d.cols.possivel}</th>
              <th>{d.cols.obs}</th>
            </tr>
          </thead>
          <tbody>
            {verificavel.map((v) => (
              <tr key={v.item.pt}>
                <td className="font-medium text-fg">{t(v.item, lang)}</td>
                <td>
                  <span className={cn("inline-block rounded-md border px-2 py-0.5 font-mono text-[0.68rem] font-semibold uppercase tracking-wider", statusCls[v.status])}>
                    {label[v.status]}
                  </span>
                </td>
                <td className="text-fg-2">{t(v.obs, lang)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
