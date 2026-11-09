import { ExternalLink } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SourceTag } from "@/components/ui/source-tag";
import { fontes } from "@/data/fontes";

export function FontesTable({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const f = dict.metodo.fontes;
  return (
    <>
      {/* Desktop */}
      <div className="hidden overflow-x-auto rounded-2xl border border-line bg-bg-elev md:block">
        <table className="data-table w-full text-sm">
          <thead>
            <tr>
              <th>{f.cols.fonte}</th>
              <th>{f.cols.tier}</th>
              <th>{f.cols.dado}</th>
              <th>{f.cols.periodo}</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {fontes.map((s) => (
              <tr key={s.url + s.nome.pt}>
                <td className="min-w-[14rem] text-fg">{t(s.nome, lang)}</td>
                <td><SourceTag tier={s.tier} source="" /></td>
                <td className="min-w-[18rem] text-fg-2">{t(s.dado, lang)}</td>
                <td className="whitespace-nowrap font-mono text-xs text-fg-3">{t(s.periodo, lang)}</td>
                <td>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 whitespace-nowrap font-mono text-xs text-amber hover:underline"
                  >
                    {f.open} <ExternalLink className="h-3 w-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile */}
      <ul className="flex flex-col gap-3 md:hidden">
        {fontes.map((s) => (
          <li key={s.url + s.nome.pt} className="rounded-2xl border border-line bg-bg-elev p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium text-fg">{t(s.nome, lang)}</p>
              <SourceTag tier={s.tier} source="" />
            </div>
            <p className="mt-2 text-sm text-fg-2">{t(s.dado, lang)}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-mono text-[0.7rem] text-fg-3">{t(s.periodo, lang)}</span>
              <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-mono text-xs text-amber">
                {f.open} <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
