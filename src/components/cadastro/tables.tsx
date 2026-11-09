"use client";

import { useFmt, useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { agregacaoUF, capacidade, limpeza, municipios } from "@/data/cadastro";

function Wrap({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-line bg-bg-elev p-2 sm:p-4">
      <p className="display-md px-3 pb-3 pt-3 text-base font-semibold text-fg sm:text-lg">{title}</p>
      <div className="overflow-x-auto">
        <table className="data-table w-full min-w-[560px] text-sm tabular">{children}</table>
      </div>
    </div>
  );
}

export function TabelaMunicipios() {
  const { dict } = useLang();
  const { fmtInt, fmtPct } = useFmt();
  const u = dict.common.ui;
  const tb = dict.cadastro.p4.table;
  return (
    <Wrap title={tb.title}>
      <thead>
        <tr>
          <th>{u.municipio}</th>
          <th>{u.uf}</th>
          <th className="text-right">{u.populacao}</th>
          <th className="text-right">{u.aptos}</th>
          <th className="text-right">{u.votos}</th>
          <th className="text-right">{tb.votosPop}</th>
          <th className="text-right">{tb.aptosPop}</th>
        </tr>
      </thead>
      <tbody>
        {municipios.top20.slice(0, 7).map((m) => (
          <tr key={m.nome}>
            <td className="font-medium text-fg">{m.nome}</td>
            <td className="text-fg-3">{m.uf}</td>
            <td className="text-right">{fmtInt(m.pop)}</td>
            <td className="text-right">{fmtInt(m.aptos)}</td>
            <td className="text-right">{fmtInt(m.votos)}</td>
            <td className="text-right font-semibold text-rose">{fmtPct(m.votosPop * 100, 0)}</td>
            <td className="text-right font-semibold text-amber">{fmtPct(m.aptosPop * 100, 0)}</td>
          </tr>
        ))}
      </tbody>
    </Wrap>
  );
}

export function TabelaAcumulado() {
  const { dict, lang } = useLang();
  const { fmtInt } = useFmt();
  const tb = dict.cadastro.p3.table;
  return (
    <Wrap title={tb.title}>
      <thead>
        <tr>
          <th>{tb.periodo}</th>
          <th className="text-right">{tb.titulos}</th>
        </tr>
      </thead>
      <tbody>
        {limpeza.acumulado.map((r) => (
          <tr key={r.anos}>
            <td className="text-fg">{t(r.periodo, lang)}</td>
            <td className="text-right font-semibold text-amber">{fmtInt(r.titulos)}</td>
          </tr>
        ))}
      </tbody>
    </Wrap>
  );
}

export function TabelaInternacional() {
  const { dict, lang } = useLang();
  const { fmtPct } = useFmt();
  const tb = dict.cadastro.p5.table;
  return (
    <Wrap title={tb.title}>
      <thead>
        <tr>
          <th>{tb.lugar}</th>
          <th className="text-right">{tb.pct}</th>
        </tr>
      </thead>
      <tbody>
        {capacidade.internacional80mais.map((r) => (
          <tr key={r.pct}>
            <td className="text-fg">{t(r.lugar, lang)}</td>
            <td className="text-right font-semibold">{fmtPct(r.pct, 1)}</td>
          </tr>
        ))}
      </tbody>
    </Wrap>
  );
}

export function TabelaAgregacao() {
  const { dict } = useLang();
  const { fmtInt, fmtPct } = useFmt();
  const tb = dict.cadastro.fraco.table;
  return (
    <Wrap title={dict.cadastro.fraco.title}>
      <thead>
        <tr>
          <th>{tb.faixa}</th>
          <th className="text-right">{tb.censo}</th>
          <th className="text-right">{tb.comp}</th>
          <th className="text-right">{tb.razao}</th>
        </tr>
      </thead>
      <tbody>
        {agregacaoUF.nacional.map((r) => (
          <tr key={r.faixa}>
            <td className="font-medium text-fg">{r.faixa}</td>
            <td className="text-right">{fmtInt(r.censo)}</td>
            <td className="text-right">{fmtInt(r.comp2T)}</td>
            <td className="text-right text-teal">{fmtPct((r.comp2T / r.censo) * 100, 0)}</td>
          </tr>
        ))}
      </tbody>
    </Wrap>
  );
}
