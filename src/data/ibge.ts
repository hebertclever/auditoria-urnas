// "Qual a chance de o IBGE estar errado — e quem depende dos números do IBGE?"
// Pesquisa de 09/11/2026 sobre fontes primárias; cada item carrega tier, fonte, data e link.
import type { L } from "@/i18n/config";
import type { Tier } from "@/components/ui/source-tag";

export type Fato = { titulo: L; texto: L; quote?: L; tier: Tier; fonte: L; data: string; url: string; nota?: L };

export const ibge = {
  titulo: { pt: "E se o IBGE estiver errado?", en: "What if IBGE is wrong?" } as L,
  lead: {
    pt: "Comparamos o cadastro eleitoral do TSE com a população do IBGE. A objeção óbvia: e se o IBGE errou? Fomos checar quem, por lei, usa esses números — e quanto eles erram, em que direção.",
    en: "We compared the TSE voter registry with IBGE's population counts. The obvious objection: what if IBGE got it wrong? We checked who is legally required to use those numbers — and how much they err, and in which direction.",
  } as L,

  // Bloco A — a própria lei eleitoral usa o IBGE como régua
  gatilho: {
    titulo: { pt: "A lei eleitoral usa o IBGE como régua do cadastro", en: "Electoral law uses IBGE as the yardstick for the registry" } as L,
    lei: {
      texto: {
        pt: "A Lei das Eleições determina que o TSE revise de ofício o eleitorado de um município quando ele passa de 65% da população projetada pelo IBGE. A resolução vigente do próprio TSE fixa o gatilho em 80% — e troca “determinará” por “poderá, observada a conveniência e a disponibilidade de recursos”.",
        en: "The Elections Act requires the TSE to review a municipality's electorate on its own initiative when it exceeds 65% of the population projected by IBGE. The TSE's own current resolution sets the trigger at 80% — and replaces “shall” with “may, subject to convenience and available resources”.",
      } as L,
      quote: {
        pt: "Art. 92. O Tribunal Superior Eleitoral, ao conduzir o processamento dos títulos eleitorais, determinará de ofício a revisão ou correição das Zonas Eleitorais sempre que: […] III – o eleitorado for superior a sessenta e cinco por cento da população projetada para aquele ano pelo Instituto Brasileiro de Geografia e Estatística – IBGE.",
        en: "Art. 92. The Superior Electoral Court, when processing voter registrations, shall on its own initiative order the review or inspection of Electoral Zones whenever: […] III – the electorate exceeds sixty-five percent of the population projected for that year by the Brazilian Institute of Geography and Statistics – IBGE.",
      } as L,
      tier: "T0" as Tier,
      fonte: { pt: "Lei 9.504/1997, art. 92, III (Câmara dos Deputados, texto atualizado)", en: "Law 9.504/1997, art. 92, III (Chamber of Deputies, consolidated text)" } as L,
      data: "1997",
      url: "https://www2.camara.leg.br/legin/fed/lei/1997/lei-9504-30-setembro-1997-365408-normaatualizada-pl.html",
    },
    resolucao: {
      tier: "T0" as Tier,
      fonte: { pt: "Res. TSE 23.659/2021, art. 105, III (80%); confirmado em notícia oficial do TSE sobre Baía da Traição/PB", en: "TSE Res. 23.659/2021, art. 105, III (80%); confirmed by an official TSE news item on Baía da Traição/PB" } as L,
      data: "2021 · nov 2024",
      url: "https://www.tse.jus.br/comunicacao/noticias/2024/Novembro/tse-nega-pedido-de-revisao-do-eleitorado-de-baia-da-traicao-pb",
      nota: { pt: "Transcrição literal integral do art. 105 não obtida (site do TSE bloqueia leitura automatizada); o percentual de 80% está confirmado pelo próprio TSE.", en: "Full literal text of art. 105 not retrieved (the TSE site blocks automated reading); the 80% threshold is confirmed by the TSE itself." } as L,
    },
    implicacao: {
      pt: "Os 730 municípios em que os eleitores aptos superam 100% da população IBGE/2026 preenchem o gatilho por definição — tanto o da lei (65%) quanto o da resolução (80%).",
      en: "The 730 municipalities where registered voters exceed 100% of the IBGE/2026 population meet the trigger by definition — both the statutory one (65%) and the resolution's (80%).",
    } as L,
  },

  // Bloco B — o TSE reconhece o gatilho e nega a revisão
  casos: {
    titulo: { pt: "O TSE reconhece o gatilho — e nega a revisão", en: "The TSE acknowledges the trigger — and denies the review" } as L,
    itens: [
      {
        local: "Olho D'Água Grande · AL",
        numeros: { pt: "4.833 eleitores para 4.330 habitantes (125% em 2025); transferências +1.050% em um ano", en: "4,833 voters for 4,330 inhabitants (125% in 2025); transfers up 1,050% in one year" } as L,
        decisao: { pt: "O TSE reconheceu que “os requisitos objetivos estavam preenchidos”, mas negou: “não há situação excepcional a ensejar o procedimento revisional”. Em 2025, todos os 102 municípios de Alagoas preenchiam o inciso II.", en: "The TSE acknowledged that “the objective requirements were met”, yet denied: “there is no exceptional situation warranting a review”. In 2025, all 102 municipalities of Alagoas met item II." } as L,
        tier: "T2" as Tier,
        fonte: { pt: "Conjur, proc. TSE 0600104-40.2024.6.02.0000", en: "Conjur, TSE case 0600104-40.2024.6.02.0000" } as L,
        data: "08 out 2026",
        url: "https://conjur.com.br/2026-out-08/revisao-do-eleitorado-requer-indicios-veementes-de-fraude-diz-tse/",
      },
      {
        local: "Baía da Traição · PB",
        numeros: { pt: "Pedido de revisão do eleitorado", en: "Request for electorate review" } as L,
        decisao: { pt: "Negado: “não há previsão orçamentária para as despesas necessárias”; o conceito amplo de domicílio eleitoral “fragiliza a revisão com base apenas em dados do IBGE”.", en: "Denied: “there is no budget provision for the necessary expenses”; the broad concept of electoral domicile “weakens a review based solely on IBGE data”." } as L,
        tier: "T0" as Tier,
        fonte: { pt: "TSE, notícia oficial", en: "TSE, official news item" } as L,
        data: "nov 2024",
        url: "https://www.tse.jus.br/comunicacao/noticias/2024/Novembro/tse-nega-pedido-de-revisao-do-eleitorado-de-baia-da-traicao-pb",
      },
    ],
    serie: {
      titulo: { pt: "Municípios com mais eleitores que habitantes", en: "Municipalities with more voters than inhabitants" } as L,
      pontos: [
        { ano: 2018, n: 308 },
        { ano: 2020, n: 483 },
        { ano: 2026, n: 733 },
      ],
      fonte: { pt: "CNM (2018, 2020: 473–493) e Agência Tatu (2026); nosso cruzamento independente encontrou 730", en: "CNM (2018; 2020: 473–493) and Agência Tatu (2026); our independent cross-check found 730" } as L,
      url: "https://atarde.com.br/eleicoes/bahia-tem-23-municipios-com-mais-eleitores-que-habitantes-em-2026-1396858",
    },
  },

  // Bloco C — quem mais depende do IBGE
  dependentes: {
    titulo: { pt: "Quem mais é obrigado a usar os números do IBGE", en: "Who else is required to use IBGE's numbers" } as L,
    itens: [
      { orgao: { pt: "TSE · número de vereadores", en: "TSE · number of city councillors" } as L, regra: { pt: "“A população de cada município […] será a constante da estimativa do IBGE.”", en: "“Each municipality's population […] shall be that of the IBGE estimate.”" } as L, tier: "T0" as Tier, fonte: { pt: "Res. TSE 21.702/2004, art. 1º, § único", en: "TSE Res. 21.702/2004, art. 1, sole paragraph" } as L, url: "https://www.normasbrasil.com.br/norma/resolucao-21702-2004_99796.html" },
      { orgao: { pt: "TCU · Fundo de Participação dos Municípios", en: "TCU · Municipal Participation Fund (FPM)" } as L, regra: { pt: "Cotas revistas anualmente “com base em dados oficiais de população produzidos pela Fundação IBGE”. Ao ser contestado, o TCU disse não ter “poder-dever de fiscalização” sobre o IBGE.", en: "Shares revised annually “based on official population data produced by IBGE”. When challenged, the TCU said it has no “duty or power to audit” IBGE." } as L, tier: "T0" as Tier, fonte: { pt: "CTN art. 91 §3º (LC 59/1988); TCU Acórdão 1763/2023", en: "National Tax Code art. 91 §3 (LC 59/1988); TCU Ruling 1763/2023" } as L, url: "https://portal.tcu.gov.br/imprensa/noticias/tcu-considera-improcedente-acao-que-contesta-calculos-do-fundo-de-participacao-dos-municipios" },
      { orgao: { pt: "Ministério da Saúde · Atenção Primária", en: "Ministry of Health · primary care funding" } as L, regra: { pt: "R$ 5,95 por habitante/ano, pela população estimada pelo IBGE.", en: "R$ 5.95 per inhabitant per year, by IBGE's estimated population." } as L, tier: "T2" as Tier, fonte: { pt: "Portaria GM/MS 6.717/2025 (espelho)", en: "Ordinance GM/MS 6.717/2025 (mirror)" } as L, url: "https://www.lex.com.br/portaria-ms-no-6-717-de-18-de-marco-de-2025/" },
      { orgao: { pt: "STF · Judiciário", en: "STF · Judiciary" } as L, regra: { pt: "Não cabe ao Judiciário presumir população diferente da oficial (caso Humaitá/AM).", en: "Courts may not presume a population different from the official one (Humaitá/AM case)." } as L, tier: "T2" as Tier, fonte: { pt: "Sedep / STF Notícias", en: "Sedep / STF News" } as L, url: "https://www.sedep.com.br/noticias/cabe-ao-stf-julgar-suspenso-de-deciso-sobre-alterao-de-dados-populacionais-de-municpio/" },
    ],
    ibgeDiz: {
      quote: { pt: "O IBGE não utiliza informações de registros administrativos [número de eleitores; matrículas escolares; cadastro único…] no cálculo das Estimativas da População dos Municípios.", en: "IBGE does not use administrative records [number of voters; school enrolment; social registry…] when computing Municipal Population Estimates." } as L,
      tier: "T0" as Tier,
      fonte: { pt: "IBGE/DPE, Esclarecimentos sobre as Estimativas da População dos Municípios", en: "IBGE/DPE, Clarifications on Municipal Population Estimates" } as L,
      data: "17 set 2026",
      url: "https://www.ibge.gov.br/np_download/novoportal/documentos_institucionais/Esclarecimentos_prestados_pela_DPE_estimativas_das_populacoes_municipais_20260917.pdf",
      leitura: { pt: "Ou seja: população IBGE e eleitorado TSE são medições independentes. Uma não contamina a outra.", en: "In other words: IBGE population and TSE electorate are independent measurements. Neither contaminates the other." } as L,
    },
  },

  // Bloco D — quanto o Censo erra (PPE 2022)
  censo: {
    titulo: { pt: "Quanto o Censo 2022 errou — e onde", en: "How much the 2022 Census erred — and where" } as L,
    lead: {
      pt: "O IBGE mediu o próprio erro com a Pesquisa de Pós-Enumeração: uma recontagem independente em setores sorteados. O erro existe, é maior que o dos EUA e do Reino Unido — e é menor justamente onde estão os nossos achados: municípios pequenos e idosos.",
      en: "IBGE measured its own error with a Post-Enumeration Survey: an independent recount in sampled areas. The error exists, it is larger than in the US and the UK — and it is smallest exactly where our findings are: small municipalities and the elderly.",
    } as L,
    nacional: [
      { k: { pt: "Omissão (pessoas não contadas)", en: "Omission (people not counted)" } as L, v: 12.2 },
      { k: { pt: "Inclusão indevida", en: "Erroneous inclusion" } as L, v: 3.3 },
      { k: { pt: "Erro líquido", en: "Net error" } as L, v: 8.3 },
    ],
    porPorte: [
      { k: { pt: "Municípios < 14 mil hab. (erro líquido)", en: "Municipalities < 14k inhab. (net error)" } as L, v: 3.9, tone: "teal" as const },
      { k: { pt: "Brasil (erro líquido)", en: "Brazil (net error)" } as L, v: 8.3, tone: "slate" as const },
      { k: { pt: "Municípios > 1 milhão (erro líquido)", en: "Municipalities > 1 million (net error)" } as L, v: 13.2, tone: "amber" as const },
    ],
    porIdade: [
      { k: { pt: "25–29 anos (erro líquido)", en: "Ages 25–29 (net error)" } as L, v: 10.2, tone: "amber" as const },
      { k: { pt: "Brasil (erro líquido)", en: "Brazil (net error)" } as L, v: 8.3, tone: "slate" as const },
      { k: { pt: "75–79 anos (erro líquido)", en: "Ages 75–79 (net error)" } as L, v: 3.4, tone: "teal" as const },
    ],
    internacional: [
      { k: { pt: "EUA · Census 2020 (erro líquido)", en: "USA · Census 2020 (net error)" } as L, v: 0.24, tone: "slate" as const },
      { k: { pt: "Inglaterra e Gales · 2021 (ajuste de cobertura)", en: "England & Wales · 2021 (coverage adjustment)" } as L, v: 3.0, tone: "slate" as const },
      { k: { pt: "Brasil · Censo 2022 (erro líquido)", en: "Brazil · 2022 Census (net error)" } as L, v: 8.3, tone: "amber" as const },
    ],
    nota: {
      pt: "As taxas da PPE referem-se às pessoas efetivamente recenseadas, antes da imputação final (omissão nacional 12,2%; inclusão indevida 3,3%). Quase todos os 733 municípios com mais eleitores que habitantes têm menos de 10 mil habitantes — a classe de menor erro líquido (3,9%).",
      en: "PPE rates refer to people actually enumerated, before final imputation (national omission 12.2%; erroneous inclusion 3.3%). Nearly all of the 733 municipalities with more voters than inhabitants have under 10,000 people — the class with the lowest net error (3.9%).",
    } as L,
    fontes: [
      { tier: "T0" as Tier, fonte: { pt: "IBGE, PPE do Censo 2022 — Resultados da Análise da Cobertura (liv102110), pp. 69–70, 76, 87", en: "IBGE, 2022 Census Post-Enumeration Survey — Coverage Analysis Results (liv102110), pp. 69–70, 76, 87" } as L, data: "ago 2024", url: "https://biblioteca.ibge.gov.br/visualizacao/livros/liv102110.pdf" },
      { tier: "T0" as Tier, fonte: { pt: "U.S. Census Bureau, 2020 PES estimates of undercount and overcount", en: "U.S. Census Bureau, 2020 PES estimates of undercount and overcount" } as L, data: "10 mar 2022", url: "https://www.census.gov/newsroom/press-releases/2022/2020-census-estimates-of-undercount-and-overcount.html" },
      { tier: "T0" as Tier, fonte: { pt: "ONS, Coverage estimation for Census 2021 in England and Wales", en: "ONS, Coverage estimation for Census 2021 in England and Wales" } as L, data: "2022–2023", url: "https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/methodologies/coverageestimationforcensus2021inenglandandwales" },
    ],
  },

  // Bloco E — estimativas municipais erram para CIMA
  estimativas: {
    titulo: { pt: "As estimativas anuais erram — para cima", en: "The annual estimates err — upwards" } as L,
    texto: {
      pt: "Entre censos, o IBGE estima a população de cada município por tendência de crescimento (método AiBi). Quando o Censo 2022 chegou, pesquisadores mediram o erro das projeções feitas 12 anos depois do censo anterior: mediana de +16% — e de +18% nos municípios pequenos. Superestimação, não subestimação. Para Davinópolis caber no cadastro, o IBGE teria de ter errado +104% na direção oposta à documentada, com apenas 4 anos desde o Censo 2022.",
      en: "Between censuses, IBGE estimates each municipality's population by growth trend (the AiBi method). When the 2022 Census arrived, researchers measured the error of projections made 12 years after the previous census: a median of +16% — and +18% in small municipalities. Overestimation, not underestimation. For Davinópolis to fit its registry, IBGE would have had to err by +104% in the opposite direction to the documented one, only 4 years after the 2022 Census.",
    } as L,
    tabela: [
      { k: { pt: "Erro mediano AiBi, todos os municípios", en: "Median AiBi error, all municipalities" } as L, v: 16.3 },
      { k: { pt: "Erro mediano AiBi, municípios < 14 mil hab.", en: "Median AiBi error, municipalities < 14k inhab." } as L, v: 18.0 },
      { k: { pt: "Erro mediano AiBi, região Norte", en: "Median AiBi error, North region" } as L, v: 27.8 },
      { k: { pt: "Erro necessário para “explicar” Davinópolis (sinal oposto)", en: "Error needed to “explain” Davinópolis (opposite sign)" } as L, v: -104 },
    ],
    ibgeQuote: {
      pt: "Os métodos […] são, por construção, determinísticos, não sendo possível o cálculo de margem de erro das populações.",
      en: "The methods […] are, by construction, deterministic, and it is not possible to compute a margin of error for the populations.",
    } as L,
    fontes: [
      { tier: "T1" as Tier, fonte: { pt: "Diógenes et al. (PPGDEM/UFRN), XVIII Jornadas AEPA — erro das projeções municipais 2022", en: "Diógenes et al. (PPGDEM/UFRN), XVIII AEPA Conference — error of 2022 municipal projections" } as L, data: "2025", url: "https://www.aacademica.org/xviii.jornadas.aepa/47.pdf" },
      { tier: "T0" as Tier, fonte: { pt: "IBGE/DPE, Esclarecimentos — item g)", en: "IBGE/DPE, Clarifications — item g)" } as L, data: "17 set 2026", url: "https://www.ibge.gov.br/np_download/novoportal/documentos_institucionais/Esclarecimentos_prestados_pela_DPE_estimativas_das_populacoes_municipais_20260917.pdf" },
    ],
  },

  // Bloco F — centenários: o Censo INFLA; 6,6× é piso
  centenarios: {
    titulo: { pt: "Centenários: o Censo conta a mais, não a menos", en: "Centenarians: the Census overcounts, not undercounts" } as L,
    texto: {
      pt: "A demografia brasileira sabe há anos que o Censo exagera a idade dos muito idosos: em 1991 contou 13.296 centenários quando os óbitos indicavam cerca de 4.400 — três vezes mais. Em 2000, 65% das idades 100+ foram imputadas. Em 2010, de 2 a 3 vezes mais que os métodos indiretos. Se o Censo 2022 ainda infla centenários, o número real de vivos é menor que 37.814 — e a razão 6,6× entre cadastro TSE e Censo é um piso, não um teto.",
      en: "Brazilian demographers have known for years that the Census exaggerates the ages of the very old: in 1991 it counted 13,296 centenarians when deaths pointed to about 4,400 — three times more. In 2000, 65% of ages 100+ were imputed. In 2010, 2 to 3 times more than indirect methods. If the 2022 Census still inflates centenarians, the true number alive is below 37,814 — and the 6.6× ratio between the TSE registry and the Census is a floor, not a ceiling.",
    } as L,
    fontes: [
      { tier: "T1" as Tier, fonte: { pt: "Gomes & Turra, Demographic Research 20(20)", en: "Gomes & Turra, Demographic Research 20(20)" } as L, data: "2009", url: "https://www.demographic-research.org/volumes/vol20/20/20-20.pdf" },
      { tier: "T1" as Tier, fonte: { pt: "Medeiros & Paes, Rev. Latinoam. Población 16", en: "Medeiros & Paes, Rev. Latinoam. Población 16" } as L, data: "2022", url: "https://www.redalyc.org/journal/3238/323868053015/html/" },
    ],
  },

  // Síntese
  sintese: {
    titulo: { pt: "Se o IBGE estivesse errado nessa escala…", en: "If IBGE were wrong on that scale…" } as L,
    fatos: {
      pt: "…o FPM de 5.570 municípios, o número de vereadores de cada câmara, o repasse per capita do SUS e o próprio gatilho legal de revisão do eleitorado estariam todos calculados sobre uma base igualmente falsa — e a direção do erro teria de ser a oposta da documentada pelo IBGE, pelo TCU e pela academia.",
      en: "…the FPM transfers to 5,570 municipalities, the number of councillors in every chamber, the per-capita SUS funding and the statutory trigger for electorate review would all rest on an equally false base — and the error would have to run opposite to the direction documented by IBGE, the TCU and academia.",
    } as L,
    inferencia: {
      pt: "Nossa comparação não introduz uma régua estranha ao sistema. Aplica ao cadastro eleitoral a mesma régua que a Justiça Eleitoral é legalmente obrigada a aplicar — e que ela própria reconhece “preenchida” ao negar revisões por “conveniência e disponibilidade de recursos”.",
      en: "Our comparison introduces no yardstick foreign to the system. It applies to the voter registry the very yardstick the Electoral Justice is legally bound to apply — and which it itself acknowledges as “met” when it denies reviews for “convenience and available resources”.",
    } as L,
    emAberto: {
      pt: "Não achamos: avaliação específica da idade de idosos no Censo 2022; a distribuição de cauda do erro das estimativas (% de municípios com erro > 20% ou > 50%); o texto literal integral do art. 105 da Res. 23.659/2021.",
      en: "Not found: a specific evaluation of elderly age reporting in the 2022 Census; the tail distribution of estimate error (% of municipalities off by > 20% or > 50%); the full literal text of art. 105 of Res. 23.659/2021.",
    } as L,
  },
};
