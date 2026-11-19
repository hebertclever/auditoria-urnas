// A lei de revisão do eleitorado e de baixa por óbito — e o que o TSE fez com ela (ADR-URNA-073).
// Todas as citações são literais e de fonte primária (T0). Cópias do Internet Archive e cópia local com SHA-256
// em urnas/fontes/lei_revisao_eleitorado_2026-11-19/. O endereço antigo do Planalto passou a redirecionar para
// uma página genérica em nov/2026; por isso os links da lei apontam para a captura arquivada.
import type { L } from "@/i18n/config";
import type { Tier } from "@/components/ui/source-tag";

type Fonte = { tier: Tier; source: L; date?: string; href?: string };
export type DocLei = { ano: string; quem: L; texto: L; leitura: L; tom: "teal" | "rose" | "amber"; fonte: Fonte };

const URL = {
  lei9504: "https://web.archive.org/web/20261027174519/https://www.planalto.gov.br/ccivil_03/leis/l9504.htm",
  codigoEleitoral: "https://web.archive.org/web/20261020015444/https://www.planalto.gov.br/ccivil_03/leis/l4737compilado.htm",
  res23659: "https://www.tse.jus.br/legislacao/compilada/res/2021/resolucao-no-23-659-de-26-de-outubro-de-2021",
  temas: "https://web.archive.org/web/20251225054552/https://temasselecionados.tse.jus.br/temas-selecionados/eleitor-do-alistamento-ao-voto/revisao-de-eleitorado/generalidades",
  baia: "https://www.tse.jus.br/comunicacao/noticias/2024/Novembro/tse-nega-pedido-de-revisao-do-eleitorado-de-baia-da-traicao-pb",
  eleitorEmDia: "https://www.tse.jus.br/comunicacao/noticias/2026/Janeiro/eleitor-em-dia-confira-se-o-titulo-esta-cancelado-e-regularize-sua-situacao",
};

export const lei = {
  eyebrow: { pt: "A lei que não foi cumprida", en: "The law that was not followed" } as L,
  title: {
    pt: "A lei manda o TSE revisar o eleitorado. O TSE trocou “determinará” por “poderá” — e decidiu não fazer.",
    en: "The law orders the TSE to review the electorate. The TSE swapped “shall” for “may” — and decided not to do it.",
  } as L,
  lead: {
    pt: "Revisar o eleitorado é chamar os eleitores de um município para confirmar quem são e onde moram — é assim que os títulos de quem morreu ou se mudou saem da lista. A Lei das Eleições manda o TSE fazer isso por conta própria quando o número de eleitores passa de 65% da população estimada pelo IBGE. Há 730 municípios com mais eleitores do que habitantes. O TSE reescreveu a regra numa resolução própria, deixou a revisão a seu critério e, quando ela foi pedida, recusou — por escrito.",
    en: "Reviewing the electorate means calling a municipality's voters in to confirm who they are and where they live — it is how the registrations of people who died or moved leave the list. The Elections Act orders the TSE to do this on its own initiative when the number of voters exceeds 65% of the population estimated by IBGE. There are 730 municipalities with more voters than inhabitants. The TSE rewrote the rule in its own resolution, left the review to its discretion and, when it was requested, refused — in writing.",
  } as L,

  // A troca de palavras: o centro visual da seção.
  troca: {
    leiLabel: { pt: "A lei · 1997", en: "The law · 1997" } as L,
    leiPalavra: { pt: "determinará", en: "shall order" } as L,
    leiGatilho: { pt: "quando o eleitorado passa de 65% da população", en: "when the electorate exceeds 65% of the population" } as L,
    tseLabel: { pt: "A resolução do TSE · 2021", en: "The TSE's resolution · 2021" } as L,
    tsePalavra: { pt: "poderá", en: "may" } as L,
    tseCondicao: { pt: "“observada a conveniência e a disponibilidade de recursos”", en: "“subject to convenience and available resources”" } as L,
    tseGatilho: { pt: "e só quando passa de 80%", en: "and only above 80%" } as L,
  },

  documentos: [
    {
      ano: "1997",
      quem: { pt: "A lei · Lei 9.504/1997, art. 92", en: "The law · Law 9.504/1997, art. 92" },
      texto: {
        pt: "“O Tribunal Superior Eleitoral, ao conduzir o processamento dos títulos eleitorais, determinará de ofício a revisão ou correição das Zonas Eleitorais sempre que: […] III – o eleitorado for superior a sessenta e cinco por cento da população projetada para aquele ano pelo Instituto Brasileiro de Geografia e Estatística – IBGE.”",
        en: "“The Superior Electoral Court, when processing voter registrations, shall on its own initiative order the review or inspection of the Electoral Zones whenever: […] III – the electorate exceeds sixty-five percent of the population projected for that year by the Brazilian Institute of Geography and Statistics – IBGE.”",
      },
      leitura: { pt: "É uma ordem: “determinará”, “de ofício”, “sempre que”.", en: "It is an order: “shall”, “on its own initiative”, “whenever”." },
      tom: "teal",
      fonte: { tier: "T0", source: { pt: "Lei 9.504/1997, art. 92 — texto do Planalto (captura de 27/10/2026)", en: "Law 9.504/1997, art. 92 — Planalto text (capture of 27 Oct 2026)" }, date: "1997", href: URL.lei9504 },
    },
    {
      ano: "2005",
      quem: { pt: "O TSE decide não fazer · Res. TSE 22.128 (RvE 455), 15/12/2005", en: "The TSE decides not to do it · TSE Res. 22.128 (RvE 455), 15 Dec 2005" },
      texto: {
        pt: "“Considerando a deliberação do Tribunal Superior Eleitoral de não realizar, de ofício, no presente exercício, as revisões de eleitorado de que cuida o art. 92 da Lei nº 9.504/97 […] impõe-se o indeferimento do pedido.”",
        en: "“Considering the Superior Electoral Court's resolution not to carry out, on its own initiative, in the current year, the electorate reviews provided for in art. 92 of Law 9.504/97 […] the request must be denied.”",
      },
      leitura: { pt: "O próprio TSE registra que decidiu não fazer, naquele ano, as revisões que a lei manda.", en: "The TSE itself records that it decided not to carry out, that year, the reviews the law orders." },
      tom: "rose",
      fonte: { tier: "T0", source: { pt: "TSE · Temas Selecionados, “Revisão de eleitorado — generalidades” (jurisprudência compilada pelo próprio TSE; captura de 25/12/2025)", en: "TSE · Selected Topics, “Electorate review — general” (case law compiled by the TSE itself; capture of 25 Dec 2025)" }, date: "2005", href: URL.temas },
    },
    {
      ano: "2021",
      quem: { pt: "A regra reescrita · Res. TSE 23.659/2021, art. 105", en: "The rule rewritten · TSE Res. 23.659/2021, art. 105" },
      texto: {
        pt: "“O Tribunal Superior Eleitoral poderá, de ofício, determinar a revisão do eleitorado do município, observada a conveniência e a disponibilidade de recursos, quando: […] III – o eleitorado for superior a 80% da população projetada para aquele ano pelo Instituto Brasileiro de Geografia e Estatística (IBGE).”",
        en: "“The Superior Electoral Court may, on its own initiative, order the review of a municipality's electorate, subject to convenience and available resources, when: […] III – the electorate exceeds 80% of the population projected for that year by the Brazilian Institute of Geography and Statistics (IBGE).”",
      },
      leitura: { pt: "A ordem da lei vira opção do TSE, e o gatilho sobe de 65% para 80%.", en: "The law's order becomes the TSE's option, and the trigger rises from 65% to 80%." },
      tom: "amber",
      fonte: { tier: "T0", source: { pt: "Res. TSE 23.659/2021, art. 105 — texto compilado do TSE (captura de 10/11/2026)", en: "TSE Res. 23.659/2021, art. 105 — TSE consolidated text (capture of 10 Nov 2026)" }, date: "2021", href: URL.res23659 },
    },
    {
      ano: "2024",
      quem: { pt: "Sem dinheiro no orçamento · RvE 0600376-08.2023.6.15.0000, 21/11/2024", en: "No money in the budget · RvE 0600376-08.2023.6.15.0000, 21 Nov 2024" },
      texto: {
        pt: "“[…] não há previsão orçamentária para as despesas necessárias para a revisão do eleitorado na lei orçamentária do ano corrente.” — o relator, ao negar a revisão de Baía da Traição (PB), por unanimidade.",
        en: "“[…] there is no budget provision for the expenses needed to review the electorate in the current year's budget law.” — the rapporteur, denying the review of Baía da Traição (Paraíba), unanimously.",
      },
      leitura: { pt: "Pedida a revisão, o TSE responde que não há dinheiro previsto para ela.", en: "Asked for a review, the TSE answers that no money has been set aside for it." },
      tom: "rose",
      fonte: { tier: "T0", source: { pt: "TSE · notícia oficial de 21/11/2024", en: "TSE · official news item of 21 Nov 2024" }, date: "2024", href: URL.baia },
    },
  ] as DocLei[],

  // A notícia oficial atribui à lei a "conveniência" que está só na resolução.
  noticia: {
    title: { pt: "A notícia oficial cita a lei com palavras que não estão nela", en: "The official news item quotes the law with words that are not in it" } as L,
    text: {
      pt: "Na notícia sobre o caso de Baía da Traição, o TSE escreveu: “Conforme a Lei das Eleições (Lei nº 9.504/97), a revisão do eleitorado pode ser determinada de ofício pelo TSE, observadas a conveniência e a disponibilidade de recursos.” A lei não diz isso. Diz “determinará”. A “conveniência” e os “recursos” estão na resolução que o próprio TSE escreveu.",
      en: "In the news item on the Baía da Traição case, the TSE wrote: “Under the Elections Act (Law 9.504/97), the review of the electorate may be ordered by the TSE on its own initiative, subject to convenience and available resources.” The law does not say that. It says “shall”. The “convenience” and the “resources” are in the resolution the TSE itself wrote.",
    } as L,
  },

  // Um pedido com os três critérios, negado.
  piaui: {
    pt: "Em 2021, o Tribunal Regional Eleitoral do Piauí encaminhou o pedido de revisão de José de Freitas, com relatório de inspeção apontando os três requisitos do art. 92. O TSE negou — entre os motivos, a “ausência de previsão orçamentária específica” (Ac. de 29/4/2021 na RvE 060029495).",
    en: "In 2021, the Regional Electoral Court of Piauí forwarded the request to review José de Freitas, with an inspection report pointing to the three requirements of art. 92. The TSE denied it — among the reasons, the “absence of a specific budget provision” (ruling of 29 Apr 2021, RvE 060029495).",
  } as L,
  cumulativo: {
    pt: "Os incisos I e II tratam do salto de transferências de título e da proporção de jovens e idosos. O TSE exige os três critérios ao mesmo tempo; os 730 municípios passam, por definição, do critério do IBGE — o da lei (65%) e o da resolução (80%).",
    en: "Items I and II deal with a jump in registration transfers and the share of young and elderly people. The TSE requires all three at once; the 730 municipalities meet, by definition, the IBGE criterion — the law's (65%) and the resolution's (80%).",
  } as L,

  // A lei da baixa por óbito e a regra dos 70+.
  obito: {
    title: { pt: "E a lei da baixa por óbito", en: "And the death-removal law" } as L,
    text: {
      pt: "O Código Eleitoral manda cancelar o título de quem morre (art. 71, IV) e obriga os cartórios a comunicar ao juiz eleitoral, até o dia 15 de cada mês, os óbitos do mês anterior “para cancelamento das inscrições” (art. 71, § 3º). Em 2022, a baixa por óbito cobriu 787.825 das 1.491.608 mortes de adultos: 52,8%.",
      en: "The Electoral Code orders the cancellation of a deceased person's registration (art. 71, IV) and requires civil registries to report to the electoral judge, by the 15th of each month, the previous month's deaths “for cancellation of the registrations” (art. 71, § 3). In 2022, death removals covered 787,825 of 1,491,608 adult deaths: 52.8%.",
    } as L,
  },
  setenta: {
    title: { pt: "Por que o título do idoso que morre nunca sai sozinho", en: "Why an elderly person's registration never leaves on its own" } as L,
    text: {
      pt: "Quem falta a três eleições seguidas tem o título cancelado — menos quem tem mais de 70 anos, que está “fora dessa regra”, segundo o próprio TSE. Para essa idade, a única porta de saída da lista é o aviso de óbito. Se ele não chega, ou não vira baixa, o nome fica para sempre.",
      en: "Anyone who misses three elections in a row has their registration cancelled — except those over 70, who are “outside this rule”, according to the TSE itself. At that age, the only way out of the list is the death notice. If it never arrives, or never becomes a removal, the name stays forever.",
    } as L,
  },

  analogia: {
    title: { pt: "O síndico e a recontagem", en: "The building manager and the recount" } as L,
    text: {
      pt: "Imagine a convenção de um condomínio dizendo: sempre que a lista de quem vota na assembleia passar de certo tamanho, o síndico recontará os moradores. O síndico escreve um regulamento próprio dizendo que “poderá” recontar, “se for conveniente e houver dinheiro”; depois avisa que naquele ano não vai recontar; e, quando um morador pede, responde que não há verba. Enquanto isso, a lista continua crescendo — e quem morreu continua com direito a voto na assembleia.",
      en: "Imagine a condominium's bylaws saying: whenever the list of those who vote at the assembly exceeds a certain size, the building manager shall recount the residents. The manager writes his own regulation saying he “may” recount, “if convenient and if there is money”; then announces that this year there will be no recount; and, when a resident asks, answers that there is no budget. Meanwhile the list keeps growing — and the dead keep their vote at the assembly.",
    } as L,
  },

  compacto: {
    pt: "A lei diz “determinará”. A resolução do TSE diz “poderá … observada a conveniência e a disponibilidade de recursos”. Em 2005, o TSE registrou a decisão de não fazer essas revisões naquele ano; em 2024, negou uma porque “não há previsão orçamentária”.",
    en: "The law says “shall”. The TSE's resolution says “may … subject to convenience and available resources”. In 2005, the TSE recorded its decision not to carry out those reviews that year; in 2024, it denied one because “there is no budget provision”.",
  } as L,
  link: { pt: "Ver a lei, a resolução e as decisões, com as fontes", en: "See the law, the resolution and the rulings, with sources" } as L,

  fontes: [
    { tier: "T0", source: { pt: "Lei 9.504/1997, art. 92 (Planalto, captura de 27/10/2026)", en: "Law 9.504/1997, art. 92 (Planalto, capture of 27 Oct 2026)" }, date: "1997", href: URL.lei9504 },
    { tier: "T0", source: { pt: "Código Eleitoral (Lei 4.737/1965), art. 71, IV e § 3º (Planalto, captura de 20/10/2026)", en: "Electoral Code (Law 4.737/1965), art. 71, IV and § 3 (Planalto, capture of 20 Oct 2026)" }, date: "1965", href: URL.codigoEleitoral },
    { tier: "T0", source: { pt: "Res. TSE 23.659/2021, art. 105", en: "TSE Res. 23.659/2021, art. 105" }, date: "2021", href: URL.res23659 },
    { tier: "T0", source: { pt: "TSE · Temas Selecionados — revisão de eleitorado (Res. 22.128/2005; Ac. de 29/4/2021 na RvE 060029495; Ac. de 21/11/2024 na RvE 060037608)", en: "TSE · Selected Topics — electorate review (Res. 22.128/2005; ruling of 29 Apr 2021, RvE 060029495; ruling of 21 Nov 2024, RvE 060037608)" }, date: "2025", href: URL.temas },
    { tier: "T0", source: { pt: "TSE · notícia de 21/11/2024 — revisão de Baía da Traição (PB) negada", en: "TSE · news item of 21 Nov 2024 — Baía da Traição (PB) review denied" }, date: "2024", href: URL.baia },
    { tier: "T0", source: { pt: "TSE · notícia de 15/01/2026 — maiores de 70 anos fora do cancelamento por ausência", en: "TSE · news item of 15 Jan 2026 — voters over 70 exempt from cancellation for absence" }, date: "2026", href: URL.eleitorEmDia },
  ] as Fonte[],
};
