// As quatro réguas do Estado sobre os mesmos centenários — a animação de abertura (home e /provas).
// IBGE conta os vivos, DATASUS conta os mortos, INSS paga (e confere a vida), TSE guarda a lista de quem vota.
import type { L } from "@/i18n/config";
import type { Tier } from "@/components/ui/source-tag";
import { centenarios, inss } from "./cadastro";

export type Regua = {
  id: "ibge" | "datasus" | "inss" | "tse";
  nome: L;
  faz: L;
  valor: number;
  unidade: L;
  tom: "teal" | "rose" | "slate" | "amber";
};

const obitos5anos = centenarios.obitos100PorAno.reduce((s, o) => s + o.obitos, 0); // 63.455 (2020–2024; IDADE 5xx — corrigido em 19/11/2026)

export const reguas = {
  eyebrow: { pt: "Quatro réguas do mesmo governo", en: "Four yardsticks from the same government" } as L,
  title: {
    pt: "Quatro órgãos olham para os mesmos centenários. Um deles está fora da curva.",
    en: "Four agencies look at the same centenarians. One of them is off the curve.",
  } as L,
  lead: {
    pt: "O IBGE conta os vivos. O DATASUS conta os mortos. O INSS paga — e, por isso, confere todo ano quem está vivo. O TSE guarda a lista de quem pode votar. Veja o que cada um encontrou.",
    en: "IBGE counts the living. DATASUS counts the dead. The INSS pays — and so checks every year who is alive. The TSE keeps the list of who may vote. See what each one found.",
  } as L,
  itens: [
    {
      id: "ibge",
      nome: { pt: "IBGE · Censo", en: "IBGE · Census" },
      faz: { pt: "bate de porta em porta e conta quem está vivo", en: "knocks on every door and counts who is alive" },
      valor: centenarios.censo2022,
      unidade: { pt: "centenários vivos (2022)", en: "living centenarians (2022)" },
      tom: "teal",
    },
    {
      id: "datasus",
      nome: { pt: "DATASUS · Ministério da Saúde", en: "DATASUS · Ministry of Health" },
      faz: { pt: "anota cada morte, com atestado assinado por médico", en: "records every death, with a physician-signed certificate" },
      valor: obitos5anos,
      unidade: { pt: "mortes de centenários em 5 anos (2020–2024)", en: "centenarian deaths in 5 years (2020–2024)" },
      tom: "rose",
    },
    {
      id: "inss",
      nome: { pt: "INSS · Previdência", en: "INSS · Social security" },
      faz: { pt: "paga todo mês — e confere todo ano se o beneficiário está vivo", en: "pays every month — and checks every year that the beneficiary is alive" },
      valor: inss.centenariosBeneficios,
      unidade: { pt: "benefícios pagos a pessoas com 100 anos ou mais (set/2026)", en: "benefits paid to people aged 100 or over (Sep 2026)" },
      tom: "slate",
    },
    {
      id: "tse",
      nome: { pt: "TSE · cadastro eleitoral", en: "TSE · voter registry" },
      faz: { pt: "guarda a lista de quem pode votar", en: "keeps the list of who may vote" },
      valor: centenarios.tse2026Aptos100,
      unidade: { pt: "títulos de 100 anos ou mais aptos a votar (2026)", en: "registrations aged 100 or over eligible to vote (2026)" },
      tom: "amber",
    },
  ] as Regua[],
  escala: 300_000,
  marcaTse: {
    pt: "4,1 vezes o que o INSS paga · 7,9 vezes o que o IBGE contou",
    en: "4.1 times what the INSS pays · 7.9 times what IBGE counted",
  } as L,
  salaTitle: { pt: "A mesma conta, numa sala", en: "The same sum, in one room" } as L,
  sala: {
    pt: "Numa sala em que o IBGE contou 10 pessoas e o INSS paga 19 benefícios, a lista do TSE tem 79 nomes.",
    en: "In a room where IBGE counted 10 people and the INSS pays 19 benefits, the TSE's list has 79 names.",
  } as L,
  salaLegenda: {
    ibge: { pt: "contados vivos pelo IBGE", en: "counted alive by IBGE" } as L,
    inss: { pt: "a mais na folha do INSS", en: "more on the INSS payroll" } as L,
    tse: { pt: "a mais só na lista do TSE", en: "more on the TSE's list only" } as L,
  },
  saida: {
    pt: "E a lista deveria encolher: entre 2020 e 2024, o DATASUS registrou a morte de 63.455 centenários — nomes que deveriam ter saído do cadastro. Entre 2022 e 2026, em vez de encolher, ela cresceu 113 mil.",
    en: "And the list should shrink: between 2020 and 2024, DATASUS recorded the deaths of 63,455 centenarians — names that should have left the registry. Between 2022 and 2026, instead of shrinking, it grew by 113,000.",
  } as L,
  replay: { pt: "Repetir", en: "Replay" } as L,
  fontes: [
    { tier: "T0" as Tier, source: { pt: "IBGE · Censo 2022, SIDRA 9514 (100 anos ou mais)", en: "IBGE · 2022 Census, SIDRA 9514 (aged 100 or over)" } as L, href: "https://sidra.ibge.gov.br/tabela/9514" },
    { tier: "T0" as Tier, source: { pt: "DATASUS/SIM · óbitos de 100 anos ou mais, 2020–2024", en: "DATASUS/SIM · deaths aged 100 or over, 2020–2024" } as L, href: "https://datasus.saude.gov.br/transferencia-de-arquivos/" },
    { tier: "T0" as Tier, source: { pt: "INSS · benefícios mantidos ativos, set/2026 (dados abertos)", en: "INSS · active benefits, Sep 2026 (open data)" } as L, href: "https://dadosabertos.inss.gov.br/dataset/beneficios-mantidos-plano-de-dados-abertos-jun-2023-a-dez-2027" },
    { tier: "T0" as Tier, source: { pt: "TSE · perfil de comparecimento 2026 (27 UFs, faixa 100+)", en: "TSE · 2026 turnout profile (27 states, age 100+)" } as L, href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2026" },
  ],
};
