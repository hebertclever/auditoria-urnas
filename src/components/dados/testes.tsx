import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { makeFormatters } from "@/lib/format";
import {
  agregacaoUF,
  capacidade,
  centenarios,
  deltaPorFaixa2022,
  fantasmas90,
  fantasmas90Total,
  historicoInversao,
  limpeza,
  municipios,
  FAIXAS_IDOSOS,
} from "@/data/cadastro";
import { cn } from "@/lib/utils";

type Props = { lang: Locale; dict: Dictionary };

const IDOSOS = new Set<string>(FAIXAS_IDOSOS);

function Table({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-x-auto rounded-2xl border border-line bg-bg-sunk/40", className)}>
      <table className="data-table w-full text-[0.82rem]">{children}</table>
    </div>
  );
}

function Num({ children, tone }: { children: React.ReactNode; tone?: "amber" | "teal" | "rose" }) {
  return (
    <span className={cn("font-mono tabular", tone === "amber" && "text-amber", tone === "teal" && "text-teal", tone === "rose" && "text-rose")}>
      {children}
    </span>
  );
}

export function Testes({ lang, dict }: Props) {
  const d = dict.dados.testes;
  const tb = d.tabelas;
  const { fmt, fmtPct, fmtX } = makeFormatters(lang);

  const tables: React.ReactNode[] = [
    // T1 — agregação por UF
    <Table key="t1">
      <thead>
        <tr><th>{tb.faixa}</th><th>{tb.censo}</th><th>{tb.comp2T}</th><th>{tb.razao}</th></tr>
      </thead>
      <tbody>
        {agregacaoUF.nacional.map((r) => (
          <tr key={r.faixa}>
            <td className="font-mono">{r.faixa}</td>
            <td><Num>{fmt(r.censo)}</Num></td>
            <td><Num>{fmt(r.comp2T)}</Num></td>
            <td><Num tone="teal">{fmtPct((r.comp2T / r.censo) * 100, 0)}</Num></td>
          </tr>
        ))}
      </tbody>
    </Table>,

    // T2 — grupo de controle (22 faixas)
    <Table key="t2">
      <thead>
        <tr><th>{tb.faixa}</th><th>{tb.comp1T}</th><th>{tb.comp2T}</th><th>{tb.delta}</th><th>{tb.turnout1T}</th><th>{tb.turnout2T}</th></tr>
      </thead>
      <tbody>
        {deltaPorFaixa2022.map((r) => {
          const old = IDOSOS.has(r.faixa_label);
          return (
            <tr key={r.faixa_code} className={cn(old && "bg-amber-soft/40")}>
              <td className="font-mono">
                {r.faixa_label}
                <span className="ml-2 text-[0.65rem] uppercase tracking-wider text-fg-3">{old ? tb.idososLabel : r.faixa_label >= "21" && r.faixa_label <= "65-69" ? tb.controleLabel : ""}</span>
              </td>
              <td><Num>{fmt(r.comp_1t)}</Num></td>
              <td><Num>{fmt(r.comp_2t)}</Num></td>
              <td><Num tone={old ? "amber" : "teal"}>{fmtPct(r.delta_pct, 2, true)}</Num></td>
              <td><Num>{fmtPct(r.turnout_1t_pct, 1)}</Num></td>
              <td><Num>{fmtPct(r.turnout_2t_pct, 1)}</Num></td>
            </tr>
          );
        })}
      </tbody>
    </Table>,

    // T3 — histórico
    <Table key="t3">
      <thead>
        <tr>
          <th>{tb.faixa}</th>
          {historicoInversao.map((h) => <th key={h.ano}>{h.ano} {tb.delta}</th>)}
        </tr>
      </thead>
      <tbody>
        {FAIXAS_IDOSOS.map((f) => (
          <tr key={f}>
            <td className="font-mono">{f}</td>
            {historicoInversao.map((h) => {
              const v = h.faixas.find((x) => x.faixa === f)?.delta ?? 0;
              return <td key={h.ano}><Num tone={v > 5 ? "amber" : undefined}>{fmtPct(v, 1, true)}</Num></td>;
            })}
          </tr>
        ))}
        <tr className="bg-bg-sunk">
          <td className="font-medium text-fg">{tb.excesso}</td>
          {historicoInversao.map((h) => <td key={h.ano}><Num tone="amber">{fmt(h.excesso)}</Num></td>)}
        </tr>
      </tbody>
    </Table>,

    // T4 — municípios
    <div key="t4" className="flex flex-col gap-3">
      <Table>
        <thead>
          <tr><th>{tb.municipio}</th><th>{tb.uf}</th><th>{tb.pop}</th><th>{tb.aptos}</th><th>{tb.votos}</th><th>{tb.votosPop}</th><th>{tb.aptosPop}</th></tr>
        </thead>
        <tbody>
          {municipios.top20.map((m) => (
            <tr key={m.nome}>
              <td className="whitespace-nowrap text-fg">{m.nome}</td>
              <td className="font-mono">{m.uf}</td>
              <td><Num>{fmt(m.pop)}</Num></td>
              <td><Num>{fmt(m.aptos)}</Num></td>
              <td><Num>{fmt(m.votos)}</Num></td>
              <td><Num tone="amber">{fmtPct(m.votosPop * 100, 0)}</Num></td>
              <td><Num tone="rose">{fmtPct(m.aptosPop * 100, 0)}</Num></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr><th>{tb.margem}</th><th>{tb.restantes}</th><th>{tb.excessoVotos}</th></tr>
        </thead>
        <tbody>
          {municipios.sensibilidade.map((s) => (
            <tr key={s.margem}>
              <td className="font-mono">+{s.margem}%</td>
              <td><Num tone={s.restantes >= 9 ? "amber" : undefined}>{s.restantes}/20</Num></td>
              <td><Num>{fmt(s.excesso)}</Num></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>,

    // T5 — centenários
    <div key="t5" className="flex flex-col gap-3">
      <Table>
        <thead>
          <tr><th>{tb.indicador}</th><th>{tb.valor}</th></tr>
        </thead>
        <tbody>
          <tr><td>{lang === "pt" ? "Centenários vivos — Censo IBGE 2022" : "Centenarians alive — IBGE Census 2022"}</td><td><Num tone="teal">{fmt(centenarios.censo2022)}</Num></td></tr>
          <tr><td>{lang === "pt" ? "Centenários aptos — TSE 2026" : "Registered centenarians — TSE 2026"}</td><td><Num tone="amber">{fmt(centenarios.tse2026Aptos100)}</Num></td></tr>
          <tr><td>{tb.razao}</td><td><Num tone="rose">{fmtX(centenarios.tse2026Aptos100 / centenarios.censo2022, 1)}</Num></td></tr>
          <tr><td>{lang === "pt" ? "Comparecimento 100+, 2º turno 2022" : "Turnout 100+, round 2, 2022"}</td><td><Num>{fmt(centenarios.comp100_2022_2T)}</Num></td></tr>
          <tr><td>{lang === "pt" ? "Comparecimento 100+, 1º turno 2026" : "Turnout 100+, round 1, 2026"}</td><td><Num>{fmt(centenarios.comp100_2026_1T)}</Num></td></tr>
        </tbody>
      </Table>
      <div className="grid gap-3 md:grid-cols-2">
        <Table>
          <thead><tr><th>{tb.ano}</th><th>{tb.obitos}</th></tr></thead>
          <tbody>
            {centenarios.obitos100PorAno.map((o) => (
              <tr key={o.ano}><td className="font-mono">{o.ano}</td><td><Num>{fmt(o.obitos)}</Num></td></tr>
            ))}
          </tbody>
        </Table>
        <Table>
          <thead><tr><th>{tb.pais}</th><th>{tb.por100k}</th></tr></thead>
          <tbody>
            {centenarios.internacionalPor100k.map((c) => (
              <tr key={c.pais.pt}><td>{t(c.pais, lang)}</td><td><Num tone={c.valor > 100 ? "rose" : undefined}>{c.valor.toLocaleString(lang === "pt" ? "pt-BR" : "en-US")}</Num></td></tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Table>
        <thead><tr><th>{tb.faixa}</th><th>{tb.tse}</th><th>{tb.censoCol}</th><th>{tb.fantasmas}</th></tr></thead>
        <tbody>
          {fantasmas90.map((f) => (
            <tr key={f.faixa}><td className="font-mono">{f.faixa}</td><td><Num>{fmt(f.aptos)}</Num></td><td><Num>{fmt(f.censo)}</Num></td><td><Num tone="amber">+{fmt(f.excesso)}</Num></td></tr>
          ))}
          <tr className="bg-bg-sunk"><td className="font-medium text-fg">90+</td><td /><td /><td><Num tone="amber">+{fmt(fantasmas90Total)}</Num></td></tr>
        </tbody>
      </Table>
    </div>,

    // T6 — capacidade
    <div key="t6" className="grid gap-3 md:grid-cols-2">
      <Table>
        <thead><tr><th>{tb.indicador}</th><th>{tb.valor}</th></tr></thead>
        <tbody>
          {capacidade.acamados.map((a) => (
            <tr key={a.faixa}><td>{tb.acamados} · {a.faixa}</td><td><Num>{fmtPct(a.pct, 1)}</Num></td></tr>
          ))}
          <tr><td>{tb.aivd}</td><td><Num tone="amber">{fmtPct(capacidade.aivd75mais, 1)}</Num></td></tr>
          <tr><td>{tb.abvd}</td><td><Num>{fmtPct(capacidade.abvd75mais, 1)}</Num></td></tr>
          {capacidade.deficienciaCenso.map((c) => (
            <tr key={c.faixa}><td>{tb.deficiencia} · {c.faixa}</td><td><Num>≈ {fmtPct(c.pct, 0)}</Num></td></tr>
          ))}
        </tbody>
      </Table>
      <div className="flex flex-col gap-3">
        <Table>
          <thead><tr><th>{tb.faixa}</th><th>{tb.turnout2T}</th><th>{tb.delta}</th></tr></thead>
          <tbody>
            {capacidade.turnout2022_2T.map((r) => (
              <tr key={r.faixa}><td className="font-mono">{r.faixa}</td><td><Num>{fmtPct(r.turnout, 1)}</Num></td><td><Num tone="amber">{fmtPct(r.delta, 1, true)}</Num></td></tr>
            ))}
          </tbody>
        </Table>
        <Table>
          <thead><tr><th>{tb.lugar}</th><th>{tb.turnout80}</th></tr></thead>
          <tbody>
            {capacidade.internacional80mais.map((r) => (
              <tr key={r.lugar.pt}><td>{t(r.lugar, lang)}</td><td><Num>{fmtPct(r.pct, 1)}</Num></td></tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>,

    // T7 — limpeza
    <div key="t7" className="grid gap-3 md:grid-cols-2">
      <Table>
        <thead><tr><th>{tb.motivo}</th><th>{tb.qtd}</th><th>{tb.pct}</th></tr></thead>
        <tbody>
          {(
            [
              [lang === "pt" ? "Falecimento" : "Death", limpeza.cancelamentos2022.falecimento],
              [lang === "pt" ? "Decisões judiciais" : "Court orders", limpeza.cancelamentos2022.judiciais],
              [lang === "pt" ? "Perda de direitos políticos" : "Loss of political rights", limpeza.cancelamentos2022.perdaDireitos],
              [lang === "pt" ? "Duplicidade" : "Duplicates", limpeza.cancelamentos2022.duplicidade],
              [lang === "pt" ? "Revisão de eleitorado" : "Electorate review", limpeza.cancelamentos2022.revisao],
            ] as [string, number][]
          ).map(([k, v]) => (
            <tr key={k}>
              <td>{k}</td>
              <td><Num tone={v > 100000 ? "amber" : undefined}>{fmt(v)}</Num></td>
              <td><Num>{fmtPct((v / limpeza.cancelamentos2022.total) * 100, 2)}</Num></td>
            </tr>
          ))}
          <tr className="bg-bg-sunk"><td className="font-medium text-fg">Total</td><td><Num>{fmt(limpeza.cancelamentos2022.total)}</Num></td><td><Num>100%</Num></td></tr>
        </tbody>
      </Table>
      <div className="flex flex-col gap-3">
        <Table>
          <thead><tr><th>{tb.indicador}</th><th>{tb.valor}</th></tr></thead>
          <tbody>
            <tr><td>{lang === "pt" ? "Mortes totais 2022 (SIM)" : "Total deaths 2022 (SIM)"}</td><td><Num>{fmt(limpeza.mortesTotais2022)}</Num></td></tr>
            <tr><td>{lang === "pt" ? "Mortes de eleitores (85%)" : "Voter deaths (85%)"}</td><td><Num>{fmt(limpeza.mortesEleitores2022)}</Num></td></tr>
            <tr><td>{lang === "pt" ? "Gap anual" : "Annual gap"}</td><td><Num tone="rose">{fmt(limpeza.gapAnual)}</Num></td></tr>
            <tr><td>{lang === "pt" ? "Taxa de cancelamento" : "Cancellation rate"}</td><td><Num>{fmtPct(limpeza.taxaCancelamento * 100, 1)}</Num></td></tr>
          </tbody>
        </Table>
        <Table>
          <thead><tr><th>{tb.periodo}</th><th>{tb.acumulado}</th></tr></thead>
          <tbody>
            {limpeza.acumulado.map((a) => (
              <tr key={a.anos}><td>{t(a.periodo, lang)}</td><td><Num tone="amber">≈ {fmt(a.titulos)}</Num></td></tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>,
  ];

  return (
    <ol className="mt-12 flex flex-col gap-6">
      {d.items.map((it, i) => (
        <li key={i} className="rounded-3xl border border-line bg-bg-elev p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
            <div>
              <span className="font-mono text-xs tabular text-fg-3">
                {lang === "pt" ? "Teste" : "Test"} 0{i + 1}
              </span>
              <h3 className="display-md mt-2 text-2xl font-semibold">{it.titulo}</h3>
              <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-fg-3">{d.objetivo}</p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-fg-2">{it.objetivo}</p>
              <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-amber">{d.resultado}</p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-fg">{it.resultado}</p>
            </div>
            <div className="min-w-0">{tables[i]}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}
