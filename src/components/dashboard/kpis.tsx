"use client";

import { StatTile } from "@/components/ui/stat-tile";
import type { StatFormat } from "@/lib/format";
import { useLang } from "@/i18n/context";
import { EquivCallout, PanelAudit, SimpleOnly } from "./ui";
import { comparacoes } from "@/data/comparacoes";
import { centenarios, centenariosRazao, centenariosRazaoINSS, inss, limpeza, perfilEleitorado, saltoResumo, municipios } from "@/data/cadastro";
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
        metodo: { pt: "Somamos os aptos com 100+ anos no arquivo nacional completo do TSE, 27 UFs (297.977), e comparamos com os centenários contados vivos no Censo 2022 (37.814).", en: "We summed voters aged 100+ in the complete TSE national file, 27 states (297,977), and compared with centenarians counted alive in the 2022 Census (37,814)." },
        comando: "aptos_100 = sum(perfil[perfil.faixa=='100+'].aptos)   # 297.977 (11.060.908 linhas)\ncenso_100 = SIDRA.t9514(faixa='100+', ano=2022)         # 37.814",
        dados: { tse_aptos_100: 297977, censo_vivos_100: 37814, excedente: 260163 },
      },
    },
    {
      value: centenariosRazao, format: "x1", tone: "amber", label: k.razao, equivId: "razaoCentenarios",
      aud: {
        titulo: { pt: "Razão TSE ÷ Censo", en: "TSE ÷ Census ratio" },
        fonte: { tier: "T0", source: { pt: "TSE 2026 · IBGE Censo 2022", en: "TSE 2026 · IBGE 2022 Census" }, href: SRC.sidra9514 },
        metodo: { pt: "297.977 ÷ 37.814 = 7,9. Comparação nacional — migração interna não altera o total do país.", en: "297,977 ÷ 37,814 = 7.9. National comparison — internal migration does not change the country total." },
        dados: { razao: 297977 / 37814 },
      },
    },
    {
      value: centenariosRazaoINSS, format: "x1", tone: "amber", label: k.inss, equivId: "inssSala",
      aud: {
        titulo: { pt: "Razão TSE ÷ INSS", en: "TSE ÷ INSS ratio" },
        fonte: { tier: "T0", source: { pt: "INSS · benefícios mantidos ativos set/2026 (dados abertos) · TSE 2026", en: "INSS · active benefits Sep 2026 (open data) · TSE 2026" }, href: "https://dadosabertos.inss.gov.br/dataset/beneficios-mantidos-plano-de-dados-abertos-jun-2023-a-dez-2027" },
        arquivo: "MANTIDOS_ATIVOS_202609.zip (42.502.098 linhas; SHA-256 dae5db10…c623f915)",
        metodo: { pt: "Contamos os benefícios ativos cujo recebedor tinha 100 anos completos em 06/10/2026: 72.501. 297.977 ÷ 72.501 = 4,1. Benefício não é pessoa — alguém pode receber dois —, então 4,1 é piso.", en: "We counted active benefits whose recipient was 100 or older on 6 Oct 2026: 72,501. 297,977 ÷ 72,501 = 4.1. A benefit is not a person — someone may receive two — so 4.1 is a floor." },
        comando: "n = sum(date(a, m, d) <= date(1926, 10, 6) for d, m, a in nascimentos)   # 72.501",
        dados: { tse_aptos_100: centenarios.tse2026Aptos100, inss_beneficios_100: inss.centenariosBeneficios, razao: centenariosRazaoINSS },
      },
    },
    {
      value: perfilEleitorado.biometria.pctSemBiometria100, format: "pct0", tone: "rose", label: k.biometria,
      aud: {
        titulo: { pt: "Centenários sem biometria", en: "Centenarians without biometrics" },
        fonte: { tier: "T0", source: { pt: "TSE · perfil do eleitorado 2026 (27 UFs, só o arquivo BRASIL)", en: "TSE · 2026 voter profile (27 states, BRASIL file only)" }, href: "https://cdn.tse.jus.br/estatistica/sead/odsele/perfil_eleitorado/perfil_eleitorado_2026.zip" },
        arquivo: "perfil_eleitorado_2026_BRASIL.csv (QT_ELEITORES, QT_ELEITORES_BIOMETRIA)",
        metodo: { pt: "Faixa 100+: 297.977 eleitores, 23.834 com biometria (8,0%); sem biometria, 274.143 (92%). Em 2022 eram 172.945 sem biometria: +58,5%, enquanto todas as outras faixas de 65 a 99 anos caíram.", en: "Age 100+: 297,977 voters, 23,834 with biometrics (8.0%); without, 274,143 (92%). In 2022 there were 172,945 without: +58.5%, while every other band from 65 to 99 fell." },
        dados: perfilEleitorado.biometria.faixas,
      },
    },
    {
      value: limpeza.gapAnual, format: "compact", tone: "rose", label: k.gap, equivId: "gapAnual",
      aud: {
        titulo: { pt: "Gap de cancelamento anual", en: "Annual cancellation gap" },
        fonte: { tier: "T0", source: { pt: "DATASUS/SIM · TSE cancelamentos 2022", en: "DATASUS/SIM · TSE 2022 cancellations" }, href: SRC.cancel2022 },
        metodo: { pt: "Mortes de adultos em 2022 = 1.491.608 (DATASUS, contagem exata); ~95% com título ≈ 1,42 mi de eleitores. O TSE cancelou 787.825 títulos por óbito. Gap = 629.203/ano.", en: "Adult deaths in 2022 = 1,491,608 (DATASUS, exact count); ~95% registered ≈ 1.42M voters. The TSE cancelled 787,825 registrations for death. Gap = 629,203/year." },
        dados: limpeza.cancelamentos2022,
      },
    },
    {
      value: saltoResumo["2026"].delta70_abs, format: "compact", tone: "teal", label: k.controle, equivId: "votosExtras70_2026",
      aud: {
        titulo: { pt: "Salto dos 70+ entre os turnos (2026)", en: "70+ jump between rounds (2026)" },
        fonte: { tier: "T0", source: { pt: "TSE perfil de comparecimento 2026 (dois turnos, publicado em 13/11/2026)", en: "TSE turnout profile 2026 (both rounds, published 13 Nov 2026)" }, href: SRC.tse2026 },
        arquivo: "perfil_comparecimento_abstencao_2026_BRASIL.csv (22.121.816 linhas)",
        metodo: { pt: "Comparecimento das faixas de 70 anos ou mais: 8.765.254 no 1º turno e 10.061.234 no 2º. Diferença: 1.295.980 (+14,8%). As faixas de 21 a 69 anos subiram 1,5%. Em 2022 a diferença foi de 614.299 (+10,0%).", en: "Turnout of the 70+ groups: 8,765,254 in round 1 and 10,061,234 in round 2. Difference: 1,295,980 (+14.8%). Ages 21 to 69 rose 1.5%. In 2022 the difference was 614,299 (+10.0%)." },
        comando: "g = df.groupby(['NR_TURNO','DS_FAIXA_ETARIA']).QT_COMPARECIMENTO.sum()\nsalto_70 = g[2][FAIXAS_70].sum() - g[1][FAIXAS_70].sum()   # 1.295.980",
        dados: { "2026": saltoResumo["2026"], "2022": saltoResumo["2022"] },
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
