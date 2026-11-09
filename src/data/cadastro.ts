// Dados consolidados dos 7 testes de fortalecimento (09/11/2026).
// Todos os números abaixo derivam de fontes T0 processadas localmente; ver /metodo.

import type { L } from "@/i18n/config";
import controle from "./teste2_grupo_controle.json";
import historico from "./teste3_historico_inversao.json";
import ufJson from "./teste1_agregacao_uf.json";

// Teste 1 — Censo 2022 × TSE 2022/2T por UF (27 UFs × 7 faixas 70+)
export type UFFaixa = { uf_code: string; uf: string; faixa: string; census: number; comp_2t: number; aptos: number; diff: number; ratio: number };
export type UFTotal = Omit<UFFaixa, "faixa">;
export const porUFFaixa: UFFaixa[] = ufJson.por_uf_faixa as UFFaixa[];
export const porUFTotais: Record<"70+" | "90+" | "95+" | "100+", UFTotal[]> = {
  "70+": ufJson.por_uf_total_70plus as UFTotal[],
  "90+": ufJson.por_uf_90plus as UFTotal[],
  "95+": ufJson.por_uf_95plus as UFTotal[],
  "100+": ufJson.por_uf_100plus as UFTotal[],
};

export type FaixaDelta = (typeof controle)[number];
export const deltaPorFaixa2022: FaixaDelta[] = controle;

export const FAIXAS_IDOSOS = ["70-74", "75-79", "80-84", "85-89", "90-94", "95-99", "100+"] as const;
export const FAIXAS_CONTROLE = ["21-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69"] as const;

export const resumoControle = {
  mediaDeltaControle2169: 0.05,
  mediaDeltaIdosos70: 20.67,
  razao: 397,
  votosExtras70mais2T: 614_299,
  votosExtrasControle4059: 136_486,
  excessoAcimaBaseline7074: 198_738,
};

type AnoHist = "2014" | "2018" | "2022";
const H = historico.summary as Record<AnoHist | "2012", { bands_70plus: Record<string, { delta_pct: number }> }>;
const mapFaixa: Record<string, string> = {
  "70 a 74 anos": "70-74",
  "75 a 79 anos": "75-79",
  "80 a 84 anos": "80-84",
  "85 a 89 anos": "85-89",
  "90 a 94 anos": "90-94",
  "95 a 99 anos": "95-99",
  "100 anos ou mais": "100+",
};
export const historicoInversao: { ano: AnoHist; faixas: { faixa: string; delta: number }[]; excesso: number }[] = (
  [
    ["2014", 58_913],
    ["2018", 27_477],
    ["2022", 198_738],
  ] as [AnoHist, number][]
).map(([ano, excesso]) => ({
  ano,
  excesso,
  faixas: Object.entries(H[ano].bands_70plus).map(([k, v]) => ({ faixa: mapFaixa[k], delta: v.delta_pct })),
}));

// Pilar 2 — centenários. Censo 2022 nacional (SIDRA 9514, soma municipal) = 37.814.
export const centenarios = {
  censo2022: 37_814,
  popCenso2022: 203_062_512,
  tse2026Aptos100: 298_239,
  comp100_2026_1T: 2_141,
  comp100_2022_2T: 2_097,
  aptos100_2022: 184_438,
  faixa9599Censo2022: 165_178,
  obitos100PorAno: [
    { ano: 2020, obitos: 14_187 },
    { ano: 2021, obitos: 15_159 },
    { ano: 2022, obitos: 15_975 },
    { ano: 2023, obitos: 14_022 },
    { ano: 2024, obitos: 14_899 },
  ],
  internacionalPor100k: [
    { pais: { pt: "EUA", en: "USA" } as L, valor: 3.0 },
    { pais: { pt: "França", en: "France" } as L, valor: 3.5 },
    { pais: { pt: "Itália", en: "Italy" } as L, valor: 4.0 },
    { pais: { pt: "Japão", en: "Japan" } as L, valor: 7.5 },
    { pais: { pt: "Brasil · Censo IBGE", en: "Brazil · IBGE Census" } as L, valor: 18.6 },
    { pais: { pt: "Brasil · cadastro TSE", en: "Brazil · TSE registry" } as L, valor: 140 },
  ],
  municipiosZeroObitos: { qtd: 13, centenariosTSE: 578, exemplos: [
    { nome: "São João da Ponte", uf: "MG", cent: 244 },
    { nome: "Rubelita", uf: "MG", cent: 129 },
    { nome: "Fruta de Leite", uf: "MG", cent: 117 },
  ] },
};
export const centenariosRazao = centenarios.tse2026Aptos100 / centenarios.censo2022; // ≈ 7,9×
export const centenariosExcedente = centenarios.tse2026Aptos100 - centenarios.censo2022; // 260.425
export const centenariosPctFantasma = centenariosExcedente / centenarios.tse2026Aptos100; // ≈ 0,87

// Fantasmas 90+ (Censo 2022 × aptos TSE 2022)
export const fantasmas90 = [
  { faixa: "90-94", aptos: 738_761, censo: 579_045 },
  { faixa: "95-99", aptos: 466_940, censo: 164_974 },
  { faixa: "100+", aptos: 184_438, censo: 37_726 },
].map((r) => ({ ...r, excesso: r.aptos - r.censo }));
export const fantasmas90Total = fantasmas90.reduce((s, r) => s + r.excesso, 0); // 608.394

// Pilar 3 — gap de limpeza (2022, melhor ano com desagregação por motivo)
export const limpeza = {
  mortesTotais2022: 1_586_000,
  fracaoEleitores: 0.85,
  mortesEleitores2022: 1_348_000,
  cancelamentos2022: {
    falecimento: 787_825,
    judiciais: 5_765,
    perdaDireitos: 145,
    duplicidade: 38,
    revisao: 3,
    total: 793_776,
  },
  gapAnual: 560_175,
  taxaCancelamento: 0.584,
  acumulado: [
    { periodo: { pt: "1 ano", en: "1 year" } as L, anos: 1, titulos: 560_000 },
    { periodo: { pt: "4 anos (entre presidenciais)", en: "4 years (between presidential elections)" } as L, anos: 4, titulos: 2_240_000 },
    { periodo: { pt: "10 anos", en: "10 years" } as L, anos: 10, titulos: 5_600_000 },
    { periodo: { pt: "20 anos", en: "20 years" } as L, anos: 20, titulos: 11_200_000 },
  ],
  mortesSerie: [
    { ano: 2019, mortes: 1_350_000 },
    { ano: 2020, mortes: 1_565_000 },
    { ano: 2021, mortes: 1_753_000 },
    { ano: 2022, mortes: 1_586_000 },
    { ano: 2024, mortes: 1_532_015 },
  ],
  nota17505: {
    pt: "O número 17.505, citado em versões anteriores como “cancelamentos por óbito”, é na verdade o total cancelado em 2025 “por outros motivos diversos, como óbitos” — mistura duplicidade, decisões judiciais e óbitos. Corrigido.",
    en: "The figure 17,505, cited in earlier versions as “cancellations due to death”, is actually the 2025 total cancelled “for other miscellaneous reasons, such as death” — it mixes duplicates, court orders and deaths. Corrected.",
  } as L,
};

// Pilar 4 — votos > população (2T 2026)
export const municipios = {
  totais: { aptosMaiorPop: 730, votosMaiorPop: 107, turnoutMaior90: 12, secoes100: 12 },
  top20: [
    { nome: "Davinópolis", uf: "GO", pop: 1_877, aptos: 4_144, votos: 3_010 },
    { nome: "Aroeiras do Itaim", uf: "PI", pop: 2_787, aptos: 4_352, votos: 3_885 },
    { nome: "Novo Santo Antônio", uf: "PI", pop: 2_889, aptos: 4_727, votos: 3_743 },
    { nome: "Tibau", uf: "RN", pop: 5_816, aptos: 9_238, votos: 7_417 },
    { nome: "Jatobá do Piauí", uf: "PI", pop: 4_554, aptos: 6_901, votos: 5_750 },
    { nome: "Queluzito", uf: "MG", pop: 1_792, aptos: 2_786, votos: 2_259 },
    { nome: "Bodó", uf: "RN", pop: 2_357, aptos: 3_784, votos: 2_942 },
    { nome: "São Luís do Piauí", uf: "PI", pop: 2_265, aptos: 3_573, votos: 2_736 },
    { nome: "Sebastião Barros", uf: "PI", pop: 3_194, aptos: 4_634, votos: 3_834 },
    { nome: "Chapada de Areia", uf: "TO", pop: 1_585, aptos: 2_545, votos: 1_894 },
    { nome: "São Sebastião do Rio Preto", uf: "MG", pop: 1_211, aptos: 2_044, votos: 1_433 },
    { nome: "São José do Brejo do Cruz", uf: "PB", pop: 1_753, aptos: 2_614, votos: 2_073 },
    { nome: "Águas de São Pedro", uf: "SP", pop: 2_933, aptos: 4_336, votos: 3_462 },
    { nome: "Passagem", uf: "RN", pop: 3_244, aptos: 4_548, votos: 3_815 },
    { nome: "Pilar de Goiás", uf: "GO", pop: 2_221, aptos: 3_938, votos: 2_607 },
    { nome: "Quixaba", uf: "PB", pop: 1_807, aptos: 2_501, votos: 2_121 },
    { nome: "Acorizal", uf: "MT", pop: 4_907, aptos: 7_351, votos: 5_750 },
    { nome: "Parari", uf: "PB", pop: 1_739, aptos: 2_403, votos: 1_993 },
    { nome: "Pedro Teixeira", uf: "MG", pop: 1_859, aptos: 2_507, votos: 2_130 },
    { nome: "Vespasiano Corrêa", uf: "RS", pop: 1_851, aptos: 2_485, votos: 2_115 },
  ].map((m) => ({ ...m, votosPop: m.votos / m.pop, aptosPop: m.aptos / m.pop })),
  sensibilidade: [
    { margem: 0, restantes: 20, excesso: 12_328 },
    { margem: 5, restantes: 20, excesso: 9_696 },
    { margem: 10, restantes: 20, excesso: 7_064 },
    { margem: 15, restantes: 17, excesso: 4_460 },
    { margem: 20, restantes: 9, excesso: 2_539 },
    { margem: 30, restantes: 2, excesso: 832 },
    { margem: 40, restantes: 1, excesso: 382 },
    { margem: 50, restantes: 1, excesso: 194 },
    { margem: 60, restantes: 1, excesso: 7 },
  ],
  razaoAptosPopNacional: 0.732,
  razaoAptosPopTop20: 1.547,
  porUF: [
    { uf: "MG", n: 19 }, { uf: "GO", n: 17 }, { uf: "RN", n: 16 }, { uf: "PI", n: 15 },
    { uf: "RS", n: 13 }, { uf: "PB", n: 12 }, { uf: "SC", n: 4 }, { uf: "TO", n: 2 },
    { uf: "SP", n: 2 }, { uf: "PE", n: 2 },
  ],
};

// Pilar 5 — capacidade funcional (PNS 2019 / Censo 2022) × turnout
export const capacidade = {
  acamados: [
    { faixa: "60-69", pct: 4.1 },
    { faixa: "70-79", pct: 3.9 },
    { faixa: "80+", pct: 6.0 },
  ],
  aivd75mais: 43.2,
  abvd75mais: 18.5,
  aivd60mais: 20.4,
  deficienciaCenso: [
    { faixa: "80-84", pct: 35 },
    { faixa: "85-89", pct: 48 },
    { faixa: "100+", pct: 60 },
  ],
  turnout2022_2T: FAIXAS_IDOSOS.map((f) => {
    const r = controle.find((c) => c.faixa_label === f)!;
    return { faixa: f, turnout: r.turnout_2t_pct, delta: r.delta_pct };
  }),
  internacional80mais: [
    { lugar: { pt: "Japão · Aomori 2026", en: "Japan · Aomori 2026" } as L, pct: 33.3 },
    { lugar: { pt: "Japão · Gunma 2024", en: "Japan · Gunma 2024" } as L, pct: 47.8 },
    { lugar: { pt: "Alemanha · NRW (voto postal)", en: "Germany · NRW (postal voting)" } as L, pct: 84.6 },
    { lugar: { pt: "Brasil 2022 2T (80-84, sobre aptos)", en: "Brazil 2022 R2 (80-84, over registered)" } as L, pct: 31.6 },
  ],
};

// Teste 1 — agregação por UF (o sinal municipal dilui)
export const agregacaoUF = {
  nenhumaUFcompMaiorCenso: true,
  nacional: [
    { faixa: "70+", censo: 14_292_869, comp2T: 6_735_128 },
    { faixa: "90+", censo: 782_721, comp2T: 75_782 },
    { faixa: "95+", censo: 202_992, comp2T: 12_253 },
    { faixa: "100+", censo: 37_814, comp2T: 2_092 },
  ],
  municipal: { municipios: 137, celulas: 152, diferencas: 1_089 },
};
