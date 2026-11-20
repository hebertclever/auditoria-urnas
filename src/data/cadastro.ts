// Dados consolidados dos 7 testes de fortalecimento (09/11/2026).
// Todos os números abaixo derivam de fontes T0 processadas localmente; ver /metodo.

import type { L } from "@/i18n/config";
import controle from "./teste2_grupo_controle.json";
import controle2026 from "./teste2_grupo_controle_2026.json";
import historico from "./teste3_historico_inversao.json";
import ufJson from "./teste1_agregacao_uf.json";
import saltoJson from "./salto_2t_2026.json";

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
export type AnoTurnos = "2022" | "2026";
export const deltaPorFaixa2022: FaixaDelta[] = controle;
// 2026: arquivo BRASIL publicado pelo TSE em 13/11/2026 (22.121.816 linhas, 1º e 2º turno), lido direto do ZIP.
export const deltaPorFaixa2026: FaixaDelta[] = controle2026;
export const deltaPorFaixa: Record<AnoTurnos, FaixaDelta[]> = { "2022": controle, "2026": controle2026 };

export const FAIXAS_IDOSOS = ["70-74", "75-79", "80-84", "85-89", "90-94", "95-99", "100+"] as const;
export const FAIXAS_CONTROLE = ["21-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69"] as const;

// Números de 2022 pelo método publicado em 09/11/2026 (médias simples das variações por faixa).
// A razão 397 só vale para 2022: divide por +0,05%. Em 2026 o mesmo cálculo dá 22, porque os adultos subiram 1,5%.
export const resumoControle = {
  mediaDeltaControle2169: 0.05,
  mediaDeltaIdosos70: 20.67,
  razao: 397,
  votosExtras70mais2T: 614_299,
  votosExtrasControle4059: 136_486,
  excessoAcimaBaseline7074: 198_738,
};

// Salto do 1º para o 2º turno, 2022 e 2026 — arquivo BRASIL inteiro (27 UFs + exterior), mesmo universo da
// série 2014–2022. Gerado no repositório da auditoria: resultados/segundo_turno_2026-11-15/gera_json_site.py.
export const salto = saltoJson;
export type SaltoResumo = (typeof saltoJson.resumo)["2026"];
export const saltoResumo: Record<AnoTurnos, SaltoResumo> = saltoJson.resumo;

type AnoHist = "2014" | "2018" | "2022" | "2026";
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
// excesso = comparecimentos de 75+ acima do que haveria se cada faixa crescesse no ritmo da faixa 70–74.
// deltaAbs/deltaPct = aumento do comparecimento de todos os 70+ entre o 1º e o 2º turno.
export const historicoInversao: { ano: AnoHist; faixas: { faixa: string; delta: number }[]; excesso: number; deltaAbs: number; deltaPct: number }[] =
  saltoJson.serie.map((s) => {
    const ano = s.ano as AnoHist;
    return {
      ano,
      excesso: s.excesso_ritmo_7074,
      deltaAbs: s.delta70_abs,
      deltaPct: s.delta70_pct,
      faixas: Object.entries(H[ano].bands_70plus).map(([k, v]) => ({ faixa: mapFaixa[k], delta: v.delta_pct })),
    };
  });

// Pilar 2 — centenários. Censo 2022 nacional (SIDRA 9514, soma municipal) = 37.814.
// TSE 2026: arquivo BRASIL completo do perfil de comparecimento (3.034.230.075 bytes, 11.060.908 linhas, CRC conferido),
// 1º turno, 27 UFs = 297.977 aptos de 100+ (298.239 com o exterior). O 248.967 usado antes vinha de uma extração truncada.
// Comparecimento de 100+ em 2026 (27 UFs), versão do arquivo publicada em 13/11/2026: 2.133 no 1º turno e 3.307 no 2º.
// Na versão anterior do mesmo arquivo (13/10/2026, só 1º turno) o 1º turno tinha 2.141.
export const centenarios = {
  censo2022: 37_814,
  popCenso2022: 203_062_512,
  tse2026Aptos100: 297_977,
  comp100_2026_1T: 2_133,
  comp100_2026_2T: 3_307, // 27 UFs, mesmo universo dos 297.977 aptos; com o exterior, 3.313
  comp100_2022_2T: 2_092,
  aptos100_2022: 184_330,
  faixa9599Censo2022: 165_178,
  obitos100PorAno: [
    // DATASUS/SIM, arquivos nacionais DOBR, IDADE = 5xx (100 anos ou mais). O código 999 (idade ignorada) não entra.
    // Corrigido em 19/11/2026: a versão anterior (74.242) contava IDADE ≥ 500 e incluía 10.787 mortes de idade ignorada.
    { ano: 2020, obitos: 11_800 },
    { ano: 2021, obitos: 12_782 },
    { ano: 2022, obitos: 13_638 },
    { ano: 2023, obitos: 12_149 },
    { ano: 2024, obitos: 13_086 },
  ],
  // Fonte: contagem oficial de cada país (Min.Saúde Japão set/2026: 107.677/123M;
  // US Census Bureau 2020 adj.: ~106K/332M; INSEE França 2024: ~31K/68M;
  // ISTAT Itália 2024: ~22.500/59M). Brasil: Censo 2022 e TSE 2026.
  // Nota: o Brasil-IBGE ficar ABAIXO do Japão é esperado — Japão lidera em longevidade.
  // O que é anômalo é o cadastro TSE: 147/100k, quase o dobro do país mais longevo do mundo.
  internacionalPor100k: [
    { pais: { pt: "EUA", en: "USA" } as L, valor: 32 },
    { pais: { pt: "França", en: "France" } as L, valor: 46 },
    { pais: { pt: "Itália", en: "Italy" } as L, valor: 38 },
    { pais: { pt: "Japão", en: "Japan" } as L, valor: 88 },
    { pais: { pt: "Brasil · Censo IBGE", en: "Brazil · IBGE Census" } as L, valor: 18.6 },
    { pais: { pt: "Brasil · cadastro TSE", en: "Brazil · TSE registry" } as L, valor: 147 },
  ],
  municipiosZeroObitos: { qtd: 13, centenariosTSE: 578, exemplos: [
    { nome: "São João da Ponte", uf: "MG", cent: 244 },
    { nome: "Rubelita", uf: "MG", cent: 129 },
    { nome: "Fruta de Leite", uf: "MG", cent: 117 },
  ] },
};
// INSS — benefícios mantidos ativos, set/2026 (dados abertos, MANTIDOS_ATIVOS_202609, SHA-256 dae5db10…c623f915).
// Idade exata de quem recebe (dt_nascimento_titular) em 06/10/2026: 72.501 benefícios de pessoas com 100+.
// Benefício não é pessoa: alguém pode receber dois — por isso a razão TSE/INSS é um piso.
// Idades extremas no mesmo arquivo e no mesmo método (ADR-URNA-072): 4.153 com 110+, 181 com 120+, 33 com 123+.
export const inss = {
  totalBeneficios: 42_502_098,
  centenariosBeneficios: 72_501,
  centenariosMulheres: 51_360, // 70,8% dos 72.501
  idades: { mais110: 4_153, mais120: 181, mais123: 33 },
};

// Perfil do eleitorado do TSE (27 UFs, só o arquivo BRASIL — o ZIP também traz um arquivo por UF com as mesmas linhas).
// Sexo: 2026. Biometria: 2022 e 2026. Conferido em resultados/verificacao_dupla_contagem_2026-11-18/ (ADR-URNA-072).
export const perfilEleitorado = {
  biometria: {
    pais: { r2022: 75.8, r2026: 89.4 },
    // cobertura (%) e títulos sem biometria por faixa, 27 UFs
    faixas: [
      { faixa: "65-69", r2022: 81.1, r2026: 92.7, sem2022: 1_504_282, sem2026: 659_082 },
      { faixa: "70-74", r2022: 78.0, r2026: 90.9, sem2022: 1_292_615, sem2026: 632_343 },
      { faixa: "75-79", r2022: 65.3, r2026: 85.6, sem2022: 1_336_656, sem2026: 684_590 },
      { faixa: "80-84", r2022: 54.4, r2026: 75.5, sem2022: 1_105_642, sem2026: 673_555 },
      { faixa: "85-89", r2022: 42.5, r2026: 65.9, sem2022: 766_374, sem2026: 499_340 },
      { faixa: "90-94", r2022: 26.6, r2026: 53.2, sem2022: 541_814, sem2026: 311_011 },
      { faixa: "95-99", r2022: 9.8, r2026: 27.8, sem2022: 421_112, sem2026: 243_402 },
      { faixa: "100+", r2022: 6.2, r2026: 8.0, sem2022: 172_945, sem2026: 274_143 },
    ],
    semBiometria100: { r2022: 172_945, r2026: 274_143 },
    pctSemBiometria100: 92.0,
  },
  homensPct2026: [
    { faixa: "90-94", pct: 38.4 },
    { faixa: "95-99", pct: 42.9 },
    { faixa: "100+", pct: 51.3 },
  ],
};

export const centenariosRazao = centenarios.tse2026Aptos100 / centenarios.censo2022; // ≈ 7,9×
const por100k = centenarios.internacionalPor100k;
// Idoso com idoso: centenários por mil pessoas de 80 anos ou mais. Não depende de o país ter mais ou menos idosos.
// Japão: 107.677 centenários (Min. Saúde, 01/09/2026) ÷ 12,88 milhões de 80+ (Agência de Estatística do Japão,
// Statistical Topics No. 149, tabela 1, estimativa de 15/09/2026; SHA-256 5765f7f8…7704e4). Brasil: Censo 2022 (SIDRA 9514),
// 37.814 ÷ 4.586.954. TSE 2026: 297.977 ÷ 5.508.439 aptos de 80+ (perfil de comparecimento, 27 UFs).
export const centenariosPorMil80 = {
  japao: (107_677 / 12_880_000) * 1000, // 8,36
  censo: (37_814 / 4_586_954) * 1000, // 8,24
  tse: (297_977 / 5_508_439) * 1000, // 54,1
};
export const centenariosRazaoJapao80 = centenariosPorMil80.tse / centenariosPorMil80.japao; // ≈ 6,5×

export const centenariosRazaoJapao = por100k[por100k.length - 1].valor / por100k.find((x) => x.pais.pt === "Japão")!.valor; // ≈ 1,7×
export const centenariosRazaoINSS = centenarios.tse2026Aptos100 / inss.centenariosBeneficios; // ≈ 4,1×
export const centenariosExcedente = centenarios.tse2026Aptos100 - centenarios.censo2022; // 260.163
export const centenariosPctFantasma = centenariosExcedente / centenarios.tse2026Aptos100; // ≈ 0,87

// Fantasmas 90+ (Censo 2022 × aptos TSE 2022, 27 UFs — mesmo universo do Censo)
export const fantasmas90 = [
  { faixa: "90-94", aptos: 738_244, censo: 579_729 },
  { faixa: "95-99", aptos: 466_703, censo: 165_178 },
  { faixa: "100+", aptos: 184_330, censo: 37_814 },
].map((r) => ({ ...r, excesso: r.aptos - r.censo }));
export const fantasmas90Total = fantasmas90.reduce((s, r) => s + r.excesso, 0); // 606.556

// Pilar 3 — gap de limpeza (2022, melhor ano com desagregação por motivo)
// Mortes de ADULTOS (18+) são contagem EXATA do DATASUS/SIM (registros individuais, 7,67 mi de óbitos 2020–2024).
// A única premissa é a fração de adultos com título (~95%, TSE: ~156 mi títulos / ~160 mi adultos) — declarada e conservadora.
export const limpeza = {
  mortesTotais2022: 1_586_000,
  mortesAdultos2022: 1_491_608,
  fracaoComTitulo: 0.95,
  mortesEleitores2022: 1_417_028,
  cancelamentos2022: {
    falecimento: 787_825,
    judiciais: 5_765,
    perdaDireitos: 145,
    duplicidade: 38,
    revisao: 3,
    total: 793_776,
  },
  gapAnual: 629_203,
  taxaCancelamento: 0.556,
  taxaCancelVsAdultos: 0.528,
  acumulado: [
    { periodo: { pt: "1 ano", en: "1 year" } as L, anos: 1, titulos: 629_000 },
    { periodo: { pt: "4 anos (entre presidenciais)", en: "4 years (between presidential elections)" } as L, anos: 4, titulos: 2_517_000 },
    { periodo: { pt: "10 anos", en: "10 years" } as L, anos: 10, titulos: 6_292_000 },
    { periodo: { pt: "20 anos", en: "20 years" } as L, anos: 20, titulos: 12_584_000 },
  ],
  // Mortes de adultos (18+) por ano — contagem exata DATASUS/SIM
  mortesSerie: [
    { ano: 2020, mortes: 1_506_753 },
    { ano: 2021, mortes: 1_782_077 },
    { ano: 2022, mortes: 1_491_608 },
    { ano: 2023, mortes: 1_414_028 },
    { ano: 2024, mortes: 1_482_449 },
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
  // 2026: nível no 2º turno e "retorno" = aumento entre turnos ÷ abstenções do 1º turno (saldo líquido).
  turnout2026_2T: FAIXAS_IDOSOS.map((f) => {
    const r = controle2026.find((c) => c.faixa_label === f)!;
    const ret = saltoJson.retorno_abstencao["2026"].find((x) => x.faixa === f)!;
    return { faixa: f, turnout: r.turnout_2t_pct, delta: r.delta_pct, retorno: ret.retorno_pct };
  }),
  // Comparecimento de todos os 75+ sobre os aptos, 2º turno
  turnout75: { r2022: saltoJson.turnout75["2022"].turnout_2t_pct, r2026: saltoJson.turnout75["2026"].turnout_2t_pct },
  internacional80mais: [
    { lugar: { pt: "Japão · Aomori 2026", en: "Japan · Aomori 2026" } as L, pct: 33.3 },
    { lugar: { pt: "Japão · Gunma 2024", en: "Japan · Gunma 2024" } as L, pct: 47.8 },
    { lugar: { pt: "Alemanha · NRW (voto postal)", en: "Germany · NRW (postal voting)" } as L, pct: 84.6 },
    { lugar: { pt: "Brasil 2022 2T (80-84, sobre aptos)", en: "Brazil 2022 R2 (80-84, over registered)" } as L, pct: 31.6 },
    { lugar: { pt: "Brasil 2026 2T (80-84, sobre aptos)", en: "Brazil 2026 R2 (80-84, over registered)" } as L, pct: 46.5 },
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
  // 2026 não tem Censo do mesmo ano. Teto sem premissa: quem está na faixa X em out/2026 estava na faixa X−5 ou X
  // no Censo de ago/2022 (mortalidade zero). País e 27 UFs × 7 faixas: nenhuma célula acima. Municípios: 3, por 1 voto cada.
  teto2026: {
    ufCelulasAcima: saltoJson.teto_2026.uf_celulas_acima,
    ufCelulasTestadas: saltoJson.teto_2026.uf_celulas_testadas_por_turno,
    municipios: saltoJson.teto_2026.municipal_2t.municipios,
    diferencas: saltoJson.teto_2026.municipal_2t.soma_diferencas,
  },
};
