"use client";

import { StatTile } from "@/components/ui/stat-tile";
import type { StatFormat } from "@/lib/format";
import { useLang } from "@/i18n/context";
import { EquivCallout, PanelAudit, SimpleOnly } from "./ui";
import { comparacoes } from "@/data/comparacoes";
import { centenarios, centenariosRazao, limpeza, resumoControle, municipios } from "@/data/cadastro";
import type { AuditarProps } from "@/components/shared/auditar";

const SRC = {
  tse2026: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2026",
  sidra9514: "https://sidra.ibge.gov.br/tabela/9514",
  sim: "https://datasus.saude.gov.br/transferencia-de-arquivos/",
  cancel2022: "https://www.tse.jus.br/comunicacao/noticias/2023/Maio/justica-eleitoral-cancelou-quase-800-mil-titulos-em-2022",
  tse2022: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2022",
  bweb2026: "https://dadosabertos.tse.jus.br/dataset/resultados-2026-boletim-de-urna",
};

type Kpi = {
  value: number;
  format: StatFormat;
  tone: "amber" | "teal" | "rose" | "neutral";
  label: string;
  equivId?: keyof typeof comparacoes;
  explain?: string;
  aud: AuditarProps;
};

export function Kpis() {
  const { dict } = useLang();
  const k = dict.dashboard.kpis;

  const kpis: Kpi[] = [
    {
      value: centenarios.tse2026Aptos100, format: "int", tone: "amber", label: k.tse, equivId: "centenariosFantasma",
      aud: {
        titulo: { pt: "Centenários TSE × Censo", en: "TSE × Census centenarians" },
        fonte: { tier: "T0", source: { pt: "TSE perfil de comparecimento 2026 · IBGE Censo 2022", en: "TSE turnout profile 2026 · IBGE 2022 Census" }, href: SRC.tse2026 },
        arquivo: "perfil_comparecimento_abstencao_2026 · SIDRA 9514 (faixa 100+)",
        metodo: { pt: "Somamos os aptos com 100+ anos no perfil nacional do TSE (298.239) e comparamos com os centenários contados vivos no Censo 2022 (37.814).", en: "We summed voters aged 100+ in the TSE national profile (298,239) and compared with centenarians counted alive in the 2022 Census (37,814)." },
        comando: "aptos_100 = sum(perfil[perfil.faixa=='100+'].aptos)   # 298.239\ncenso_100 = SIDRA.t9514(faixa='100+', ano=2022)         # 37.814",
        dados: { tse_aptos_100: 298239, censo_vivos_100: 37814, excedente: 260425 },
      },
    },
    {
      value: centenariosRazao, format: "x1", tone: "amber", label: k.razao, equivId: "razaoCentenarios",
      aud: {
        titulo: { pt: "Razão TSE ÷ Censo", en: "TSE ÷ Census ratio" },
        fonte: { tier: "T0", source: { pt: "TSE 2026 · IBGE Censo 2022", en: "TSE 2026 · IBGE 2022 Census" }, href: SRC.sidra9514 },
        metodo: { pt: "298.239 ÷ 37.814 = 7,9. Comparação nacional — migração interna não altera o total do país.", en: "298,239 ÷ 37,814 = 7.9. National comparison — internal migration does not change the country total." },
        dados: { razao: 298239 / 37814 },
      },
    },
    {
      value: limpeza.gapAnual, format: "compact", tone: "rose", label: k.gap, equivId: "gapAnual",
      aud: {
        titulo: { pt: "Gap de cancelamento anual", en: "Annual cancellation gap" },
        fonte: { tier: "T0", source: { pt: "DATASUS/SIM · TSE cancelamentos 2022", en: "DATASUS/SIM · TSE 2022 cancellations" }, href: SRC.cancel2022 },
        metodo: { pt: "Mortes de eleitores em 2022 ≈ 1,35 mi (85% de 1,59 mi do SIM). O TSE cancelou 787.825 títulos por óbito. Gap = 560.175/ano.", en: "Voter deaths in 2022 ≈ 1.35M (85% of SIM's 1.59M). The TSE cancelled 787,825 registrations for death. Gap = 560,175/year." },
        dados: limpeza.cancelamentos2022,
      },
    },
    {
      value: resumoControle.razao, format: "x0", tone: "teal", label: k.controle, equivId: "razaoControle",
      aud: {
        titulo: { pt: "Idosos ÷ controle (Δ 1T→2T)", en: "Elderly ÷ control (Δ R1→R2)" },
        fonte: { tier: "T0", source: { pt: "TSE perfil de comparecimento 2022", en: "TSE turnout profile 2022" }, href: SRC.tse2022 },
        metodo: { pt: "Aumento médio de comparecimento 1T→2T: faixas 21–69 = +0,05%; faixas 70+ = +20,67%. 20,67 ÷ 0,05 ≈ 397.", en: "Mean turnout increase R1→R2: ages 21–69 = +0.05%; ages 70+ = +20.67%. 20.67 ÷ 0.05 ≈ 397." },
        dados: { controle_21_69: 0.05, idosos_70: 20.67, razao: 397 },
      },
    },
    {
      value: municipios.totais.votosMaiorPop, format: "int", tone: "amber", label: k.municipios, equivId: "davinopolis",
      aud: {
        titulo: { pt: "Votos > população", en: "Votes > population" },
        fonte: { tier: "T0", source: { pt: "TSE BWEB 2026 · IBGE SIDRA 6579", en: "TSE BWEB 2026 · IBGE SIDRA 6579" }, href: SRC.bweb2026 },
        metodo: { pt: "Cruzamos votos efetivos por município (BWEB 2026) com a população estimada (IBGE 2026). 107 municípios tiveram mais votos que habitantes.", en: "We cross-checked effective votes per municipality (BWEB 2026) with estimated population (IBGE 2026). 107 municipalities had more votes than inhabitants." },
        dados: municipios.top20.slice(0, 5),
      },
    },
    {
      value: 0, format: "int", tone: "teal", label: k.ufs, explain: k.ufsExplain,
      aud: {
        titulo: { pt: "Agregação por estado", en: "State-level aggregation" },
        fonte: { tier: "T0", source: { pt: "TSE 2022 · IBGE Censo 2022", en: "TSE 2022 · IBGE 2022 Census" }, href: SRC.sidra9514 },
        metodo: { pt: "Ao agregar por UF, nenhum estado tem comparecimento acima da população do Censo em qualquer faixa 70+. O excesso municipal dilui — por isso é o sinal mais fraco.", en: "Aggregated by state, no state has turnout above the Census population in any 70+ band. The municipal excess dilutes — hence the weakest signal." },
        dados: { ufs_comp_maior_censo: 0, de: 27 },
      },
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {kpis.map((kp, i) => (
        <div key={i} className="flex flex-col gap-3">
          <StatTile value={kp.value} format={kp.format} tone={kp.tone} label={kp.label} className="h-full" />
          <SimpleOnly>
            {kp.equivId ? <EquivCallout comp={comparacoes[kp.equivId]} /> : kp.explain ? (
              <div className="rounded-2xl border border-teal/25 bg-teal-soft p-4 text-sm leading-relaxed text-fg">{kp.explain}</div>
            ) : null}
          </SimpleOnly>
          <PanelAudit {...kp.aud} className="mt-0" />
        </div>
      ))}
    </div>
  );
}
