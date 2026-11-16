"use client";

import { useFmt, useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { agregacaoUF, capacidade, limpeza, municipios, salto } from "@/data/cadastro";
import { cn } from "@/lib/utils";

// `min` é a largura mínima da tabela (rola de lado dentro do cartão quando não cabe).
// Tabelas de duas colunas passam "" para caber inteiras em qualquer tela; `dense` aperta o espaço lateral.
function Wrap({ title, children, min = "min-w-[560px]", dense }: { title: string; children: React.ReactNode; min?: string; dense?: boolean }) {
  return (
    <div className="rounded-3xl border border-line bg-bg-elev p-2 sm:p-4">
      <p className="display-md px-3 pb-3 pt-3 text-base font-semibold text-fg sm:text-lg">{title}</p>
      <div className="overflow-x-auto">
        <table className={cn("data-table w-full text-sm tabular", dense && "dense", min)}>{children}</table>
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
    <Wrap title={tb.title} min="min-w-[460px]" dense>
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

/** Voto facultativo × obrigatório, 1º→2º turno de 2026 (colunas do próprio arquivo do TSE). */
export function TabelaFacultativo() {
  const { dict } = useLang();
  const { fmtInt, fmtPct } = useFmt();
  const tb = dict.cadastro.p1.fac;
  const nomes: Record<string, string> = {
    "16-17": tb.grupos.jovens,
    "18-69 facultativo": tb.grupos.analfabetos,
    "18-69 obrigatório": tb.grupos.obrigatorio,
    "70+": tb.grupos.idosos,
  };
  return (
    <Wrap title={tb.title}>
      <thead>
        <tr>
          <th>{tb.grupo}</th>
          <th className="text-right">{dict.cadastro.p1.anim.t1}</th>
          <th className="text-right">{dict.cadastro.p1.anim.t2}</th>
          <th className="text-right">{tb.aumento}</th>
          <th className="text-right">{tb.retorno}</th>
        </tr>
      </thead>
      <tbody>
        {salto.facultativo["2026"].map((r) => {
          const idoso = r.grupo === "70+";
          return (
            <tr key={r.grupo}>
              <td className="font-medium text-fg">{nomes[r.grupo]}</td>
              <td className="text-right">{fmtInt(r.comp_1t)}</td>
              <td className="text-right">{fmtInt(r.comp_2t)}</td>
              <td className={idoso ? "text-right font-semibold text-amber" : "text-right"}>{fmtPct(r.delta_pct, 1, true)}</td>
              <td className={idoso ? "text-right font-semibold text-amber" : "text-right"}>{fmtPct(r.retorno_pct, 0)}</td>
            </tr>
          );
        })}
      </tbody>
    </Wrap>
  );
}

export function TabelaAcumulado() {
  const { dict, lang } = useLang();
  const { fmtInt } = useFmt();
  const tb = dict.cadastro.p3.table;
  return (
    <Wrap title={tb.title} min="">
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
    <Wrap title={tb.title} min="">
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
    <Wrap title={dict.cadastro.fraco.title} min="min-w-[440px]">
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
