// Comparações concretas para o público brasileiro. Cada item: número auditado → equivalente físico.
// Referências: Maracanã 78.838 lugares (capacidade oficial pós-2013); Censo 2022: Florianópolis 537.211,
// Belo Horizonte 2.315.560, Curitiba 1.773.718, Sorocaba 723.574; Mega-Sena 1/50.063.860 (C(60,6));
// grãos de areia nas praias da Terra ≈ 7,5 × 10^18 (estimativa Univ. do Havaí, amplamente citada).
import type { L } from "@/i18n/config";

export const refs = {
  maracana: 78_838,
  florianopolis: 537_211,
  beloHorizonte: 2_315_560,
  curitiba: 1_773_718,
  sorocaba: 723_574,
  megaSena: 50_063_860,
  graosAreia: 7.5e18,
};

export type Comparacao = {
  id: string;
  numero: number;
  formato: "int" | "x" | "pct" | "prob";
  rotulo: L;
  equivalente: L;
  detalhe?: L;
};

const maracanas = (n: number) => n / refs.maracana;

export const comparacoes: Record<string, Comparacao> = {
  centenariosFantasma: {
    id: "centenariosFantasma",
    numero: 260_163,
    formato: "int",
    rotulo: { pt: "centenários no cadastro do TSE que o Censo não encontrou vivos", en: "centenarians in the TSE registry the Census did not find alive" },
    equivalente: {
      pt: `${maracanas(260_163).toFixed(1).replace(".", ",")} Maracanãs lotados só de pessoas com mais de 100 anos que ninguém achou em casa`,
      en: `${maracanas(260_163).toFixed(1)} sold-out Maracanã stadiums filled only with people over 100 whom nobody found at home`,
    },
    detalhe: { pt: "O Censo encontrou 37.814 (meio Maracanã). O TSE tem 297.977 (quase quatro).", en: "The Census found 37,814 (half a Maracanã). The TSE has 297,977 (almost four)." },
  },
  razaoCentenarios: {
    id: "razaoCentenarios",
    numero: 7.9,
    formato: "x",
    rotulo: { pt: "vezes mais centenários no TSE do que no Censo", en: "times more centenarians in the TSE than in the Census" },
    equivalente: {
      pt: "Se o IBGE contou 10 pessoas numa sala, o TSE tem 79 nomes para essa mesma sala",
      en: "If IBGE counted 10 people in a room, the TSE has 79 names for that same room",
    },
  },
  gapAnual: {
    id: "gapAnual",
    numero: 629_203,
    formato: "int",
    rotulo: { pt: "mortes de eleitores sem baixa por óbito no ano (2022)", en: "voter deaths with no death removal within the year (2022)" },
    equivalente: {
      pt: "mais do que toda a Florianópolis (537 mil habitantes): é o número de mortes de eleitores que ficam sem baixa por óbito em um ano",
      en: "more than the whole of Florianópolis (537,000 people): that is how many voter deaths go without a death removal in a year",
    },
    detalhe: { pt: "De cada 10 eleitores que morrem, mais de 4 não têm a baixa por óbito registrada no mesmo ano.", en: "Of every 10 voters who die, more than 4 have no death removal recorded that same year." },
  },
  acumulado4anos: {
    id: "acumulado4anos",
    numero: 2_517_000,
    formato: "int",
    rotulo: { pt: "títulos de falecidos sem baixa em quatro anos, se o ritmo de 2022 se repetir e nada for corrigido depois", en: "deceased registrations left unremoved in four years, if the 2022 pace repeats and nothing is corrected later" },
    equivalente: {
      pt: "o tamanho de uma Belo Horizonte (2,3 milhões) — é um teto, não uma medição",
      en: "the size of a whole Belo Horizonte (2.3 million) — a ceiling, not a measurement",
    },
  },
  fantasmas90: {
    id: "fantasmas90",
    numero: 606_556,
    formato: "int",
    rotulo: { pt: "eleitores com 90+ anos no TSE além dos que o Censo contou vivos", en: "voters aged 90+ in the TSE beyond those the Census counted alive" },
    equivalente: {
      pt: `${maracanas(606_556).toFixed(1).replace(".", ",")} Maracanãs lotados de pessoas com mais de 90 anos que o Censo não achou`,
      en: `${maracanas(606_556).toFixed(1)} sold-out Maracanãs of people over 90 the Census did not find`,
    },
  },
  votosExtras70: {
    id: "votosExtras70",
    numero: 614_299,
    formato: "int",
    rotulo: { pt: "comparecimentos a mais dos 70+ no 2º turno de 2022, em relação ao 1º (+10%)", en: "more turnouts of voters 70+ in the 2022 runoff than in the first round (+10%)" },
    equivalente: {
      pt: "mais do que toda a população de Florianópolis indo votar no 2º turno sem ter ido no 1º",
      en: "more than the entire population of Florianópolis voting in the runoff without having voted in the first round",
    },
  },
  votosExtras70_2026: {
    id: "votosExtras70_2026",
    numero: 1_294_921,
    formato: "int",
    rotulo: { pt: "comparecimentos a mais dos 70+ no 2º turno de 2026, em relação ao 1º (+14,8%) — dobro de 2022", en: "more turnouts of voters 70+ in the 2026 runoff than in the first round (+14.8%) — double the 2022 figure" },
    equivalente: {
      pt: "mais do que toda a população de Porto Alegre indo votar no 2º turno sem ter ido no 1º",
      en: "more than the entire population of Porto Alegre voting in the runoff without having voted in the first round",
    },
  },
  razaoControle: {
    id: "razaoControle",
    numero: 397,
    formato: "x",
    rotulo: { pt: "vezes: aumento dos 70+ frente ao dos 21–69 entre os turnos", en: "times: increase of voters 70+ versus ages 21–69 between rounds" },
    equivalente: {
      pt: "numa sala de 1.000 adultos, chega 1 pessoa a mais no 2º turno; numa sala de 1.000 idosos de 95–99 anos, chegam 337 a mais",
      en: "in a room of 1,000 adults, 1 more person shows up in round 2; in a room of 1,000 people aged 95–99, 337 more show up",
    },
    detalhe: { pt: "Se o controle fosse 1 cm, os idosos seriam quase 4 metros.", en: "If the control group were 1 cm, the elderly would be almost 4 metres." },
  },
  excesso2022: {
    id: "excesso2022",
    numero: 198_738,
    formato: "int",
    rotulo: { pt: "votos de 75+ acima do ritmo da faixa 70–74 no 2º turno de 2022", en: "votes of 75+ above the pace of ages 70–74 in the 2022 runoff" },
    equivalente: {
      pt: `${maracanas(198_738).toFixed(1).replace(".", ",")} Maracanãs lotados — 3,4 vezes o excesso de 2014`,
      en: `${maracanas(198_738).toFixed(1)} sold-out Maracanãs — 3.4 times the 2014 excess`,
    },
  },
  davinopolis: {
    id: "davinopolis",
    numero: 1.604,
    formato: "pct",
    rotulo: { pt: "votos em Davinópolis (GO) em relação à população total", en: "votes in Davinópolis (GO) relative to total population" },
    equivalente: {
      pt: "um ônibus de 40 lugares com 64 passageiros votando sentados — e 88 passagens vendidas",
      en: "a 40-seat bus with 64 passengers voting from their seats — and 88 tickets sold",
    },
    detalhe: { pt: "1.877 moradores, 4.144 títulos, 3.010 votos. 2,8 títulos por adulto.", en: "1,877 residents, 4,144 registrations, 3,010 votes. 2.8 registrations per adult." },
  },
  gapsDensidade: {
    id: "gapsDensidade",
    numero: 45,
    formato: "int",
    rotulo: { pt: "linhas de código por falha no kit do TSE", en: "lines of code per flaw in the TSE kit" },
    equivalente: {
      pt: "uma falha a cada tela de código — 63 falhas num programa do tamanho de um conto curto",
      en: "one flaw per screen of code — 63 flaws in a program the length of a short story",
    },
  },
  probabilidade63: {
    id: "probabilidade63",
    numero: Math.pow(0.5, 63),
    formato: "prob",
    rotulo: { pt: "chance de 63 falhas caírem todas do mesmo lado por acaso", en: "chance that 63 flaws all fall on the same side by accident" },
    equivalente: {
      pt: "1 em 9,2 quintilhões: pegar de olhos fechados um grão de areia marcado entre todos os grãos de todas as praias da Terra (≈ 7,5 quintilhões)",
      en: "1 in 9.2 quintillion: picking a marked grain of sand blindfolded out of every grain on every beach on Earth (≈ 7.5 quintillion)",
    },
    detalhe: {
      pt: "Cerca de 3.700 vezes mais raro que ganhar na Mega-Sena duas vezes seguidas (1 em 2,5 quatrilhões). Ou: jogar uma moeda 63 vezes e dar cara em todas.",
      en: "About 3,700 times rarer than winning Brazil's Mega-Sena lottery twice in a row (1 in 2.5 quadrillion). Or: flipping a coin 63 times and getting heads every time.",
    },
  },
  capacidade75: {
    id: "capacidade75",
    numero: 43.2,
    formato: "pct",
    rotulo: { pt: "dos brasileiros com 75+ têm dificuldade para ir sozinhos a lugares distantes", en: "of Brazilians aged 75+ have difficulty travelling alone to distant places" },
    equivalente: {
      pt: "quase metade dessa faixa tem dificuldade para sair sozinha — e é justamente ela que mais aumenta o comparecimento entre os turnos",
      en: "nearly half of this group has difficulty going out alone — and it is precisely this group whose turnout rises most between rounds",
    },
  },
  cancelamento58: {
    id: "cancelamento58",
    numero: 55.6,
    formato: "pct",
    rotulo: { pt: "dos títulos de quem morreu em 2022 foram cancelados no mesmo ano", en: "of the registrations of people who died in 2022 were cancelled that year" },
    equivalente: {
      pt: "é como um condomínio que atualiza a lista de moradores para pouco mais da metade dos falecidos — e segue cobrando a taxa dos outros",
      en: "like a condo that updates its resident list for barely more than half of the deceased — and keeps billing the rest",
    },
  },
};

export const listaComparacoes = Object.values(comparacoes);
