// Todos os ângulos, em números (ADR-URNA-077): quanto cada órgão teria de errar para a lista do TSE estar certa,
// a chance de um título ser de alguém vivo, os centenários presentes sem biometria e o que os presentes mostram.
// Cálculos em governo/urnas/resultados/angulos_probabilidade_2026-11-19/ (analisa.py → angulos.json), sobre os arquivos
// oficiais: TSE perfil de comparecimento e perfil do eleitorado 2026 (arquivo BRASIL, 27 UFs), IBGE SIDRA 9514,
// DATASUS/SIM 2020–2024 e INSS benefícios ativos set/2026. Nada aqui afirma voto em nome de falecido (ADR-072/075/076).
import type { L } from "@/i18n/config";
import type { Tier } from "@/components/ui/source-tag";

type Fonte = { tier: Tier; source: L; date?: string; href?: string };

export const FAIXAS_70 = ["70–74", "75–79", "80–84", "85–89", "90–94", "95–99", "100+"] as const;

// Por faixa, na ordem de FAIXAS_70.
export const porFaixa = {
  tse2022: [5_873_026, 3_852_604, 2_422_352, 1_333_976, 738_244, 466_703, 184_330],
  ibge2022: [5_858_536, 3_847_379, 2_475_030, 1_329_203, 579_729, 165_178, 37_814],
  obitos2022: [163_187, 170_044, 173_703, 154_260, 108_083, 45_599, 13_638], // DATASUS/SIM, idade ao morrer (código 5 = 100+)
  tse2026: [6_948_245, 4_757_020, 2_744_129, 1_464_715, 664_482, 337_136, 297_977],
  biometria2026: [6_315_902, 4_072_430, 2_070_574, 965_375, 353_471, 93_734, 23_834],
  inss2026: [6_961_148, 5_092_758, 3_299_575, 1_974_658, 921_536, 284_823, 72_501], // benefícios, idade exata em 06/10/2026
  mulheresIbge: [55.4, 56.9, 59.2, 62.9, 66.5, 69.5, 72.0],
  mulheresTse: [55.3, 56.5, 57.7, 59.6, 61.4, 56.7, 48.2],
};

export const numeros = {
  titulos100: 297_977,
  semBiometria100: 274_143,
  vivosMax100: 124_402, // Censo 95+ (202.992) − 78.590 mortes da coorte registradas de 01/08/2022 a 31/12/2024
  impossiveis: 173_575,
  impossiveisSemBiometria: 149_741,
  impossiveisMortalidadeZero: 94_985,
  presentes2T: 3_307,
  presentes1T: 2_133,
  presentesSemBiometriaMin: 705, // soma, célula a célula, de max(0, presentes − títulos com biometria)
  presentesSemBiometriaMax: 1_094,
  rio: { titulos: 68_142, censo: 1_390, presentes: 126 },
};

export const angulos = {
  eyebrow: { pt: "Todos os ângulos, em números", en: "Every angle, in numbers" } as L,
  title: {
    pt: "A lista do TSE só se descola da realidade num lugar: nos mais velhos — e de todos os ângulos ao mesmo tempo",
    en: "The TSE's list departs from reality in only one place: among the oldest — and from every angle at once",
  } as L,
  lead: {
    pt: "Se o defeito fosse da nossa conta, ele apareceria em todas as idades. Não aparece: dos 70 aos 89 anos, a lista de eleitores bate com o IBGE, com o DATASUS e com o INSS. A partir dos 90, ela sai da curva em todas as medidas — é onde se acumulam os nomes que deveriam ter saído.",
    en: "If the fault were in our arithmetic, it would show at every age. It does not: from 70 to 89, the voter list matches IBGE, DATASUS and the INSS. From 90 onward it leaves the curve on every measure — that is where the names that should have been removed pile up.",
  } as L,

  compactTitle: {
    pt: "Qual a chance de esses títulos serem de gente viva?",
    en: "What are the odds these registrations belong to living people?",
  } as L,
  compactLead: {
    pt: "Não temos o voto de ninguém — e não acusamos ninguém. Temos as contagens oficiais de quatro órgãos do governo, e elas dão o tamanho de cada chance.",
    en: "We do not have anyone's vote — and we accuse no one. We have the official counts of four government agencies, and they give the size of each chance.",
  } as L,

  curvasTitle: { pt: "Quatro medidas, a mesma quebra", en: "Four measures, the same break" } as L,
  legendaRef: { pt: "IBGE", en: "IBGE" } as L,
  legendaTse: { pt: "lista do TSE", en: "the TSE's list" } as L,
  curvas: {
    nomes: {
      t: { pt: "Nomes na lista para cada 100 pessoas", en: "Names on the list per 100 people" } as L,
      s: { pt: "Títulos do TSE para cada 100 pessoas que o IBGE contou (2022)", en: "TSE registrations per 100 people counted by IBGE (2022)" } as L,
      c: { pt: "Até os 89 anos, 100 nomes para 100 pessoas. Depois: 127, 283 e 487.", en: "Up to age 89, 100 names for 100 people. Then: 127, 283 and 487." } as L,
    },
    mortes: {
      t: { pt: "Quantos morrem por ano, em cada 100", en: "How many die per year, in every 100" } as L,
      s: { pt: "Mortes de 2022 (DATASUS) divididas pelas pessoas do IBGE e pelos títulos do TSE", en: "2022 deaths (DATASUS) divided by IBGE's people and by the TSE's registrations" } as L,
      c: {
        pt: "Pelo IBGE, quanto mais velho, mais se morre — como em qualquer população. Pela lista do TSE, depois dos 94 anos passa-se a morrer menos: um centenário teria o risco de quem tem 80.",
        en: "By IBGE's count, the older, the more people die — as in any population. By the TSE's list, after 94 people start dying less: a centenarian would have the risk of an 80-year-old.",
      } as L,
    },
    inss: {
      t: { pt: "Benefícios do INSS para cada 100 títulos", en: "INSS benefits per 100 registrations" } as L,
      s: { pt: "Benefícios ativos do INSS (set/2026) para cada 100 títulos do TSE (2026)", en: "Active INSS benefits (Sep 2026) per 100 TSE registrations (2026)" } as L,
      c: {
        pt: "Até os 94 anos, o INSS paga mais benefícios do que o TSE tem títulos. Nos centenários, são 24 benefícios para cada 100 títulos.",
        en: "Up to age 94, the INSS pays more benefits than the TSE has registrations. Among centenarians, there are 24 benefits per 100 registrations.",
      } as L,
    },
    mulheres: {
      t: { pt: "Mulheres em cada 100", en: "Women in every 100" } as L,
      s: { pt: "IBGE (Censo 2022) × lista do TSE (2026)", en: "IBGE (2022 Census) × the TSE's list (2026)" } as L,
      c: {
        pt: "As mulheres vivem mais: entre os centenários, são 72 em cada 100 no Censo, 71 na folha do INSS e 71 entre os que morrem. Na lista do TSE, 48 — como numa lista em que ninguém morre.",
        en: "Women live longer: among centenarians they are 72 in 100 in the Census, 71 on the INSS payroll and 71 among those who die. On the TSE's list, 48 — as in a list where nobody dies.",
      } as L,
    },
  },

  orgaos: {
    title: {
      pt: "Para a lista estar certa, três órgãos teriam de errar ao mesmo tempo — e o próprio TSE também",
      en: "For the list to be right, three agencies would have to be wrong at once — and the TSE itself too",
    } as L,
    lead: {
      pt: "Perguntar se o IBGE, o DATASUS ou o INSS podem estar errados é justo. A resposta é o tamanho do erro que cada um precisaria ter cometido.",
      en: "Asking whether IBGE, DATASUS or the INSS could be wrong is fair. The answer is the size of the error each would have had to make.",
    } as L,
    necessarioLabel: { pt: "Para a lista do TSE estar certa", en: "For the TSE's list to be right" } as L,
    medidoLabel: { pt: "O que se mede", en: "What is measured" } as L,
    itens: [
      {
        id: "ibge",
        nome: { pt: "IBGE", en: "IBGE" } as L,
        valor: { pt: "87 em cada 100", en: "87 in every 100" } as L,
        texto: { pt: "centenários que o Censo teria de ter deixado de contar.", en: "centenarians the Census would have had to miss." } as L,
        medido: { pt: "Erro medido do Censo de 2022: 8,3%. E os estudos mostram que, nos muito idosos, ele conta a mais.", en: "Measured error of the 2022 Census: 8.3%. And research shows that, among the very old, it overcounts." } as L,
      },
      {
        id: "datasus",
        nome: { pt: "DATASUS", en: "DATASUS" } as L,
        valor: { pt: "88 em cada 100", en: "88 in every 100" } as L,
        texto: { pt: "mortes de centenários que o Ministério da Saúde teria de ter deixado de registrar.", en: "centenarian deaths the Ministry of Health would have had to leave unrecorded." } as L,
        medido: { pt: "O sistema capta cerca de 98 de cada 100 mortes do país.", en: "The system captures about 98 of every 100 deaths in the country." } as L,
      },
      {
        id: "inss",
        nome: { pt: "INSS", en: "INSS" } as L,
        valor: { pt: "3 em cada 4", en: "3 in every 4" } as L,
        texto: { pt: "centenários vivos que estariam sem aposentadoria, pensão ou qualquer benefício.", en: "living centenarians who would be without a pension or any benefit at all." } as L,
        medido: { pt: "Dos 70 aos 94 anos, o INSS paga mais benefícios do que o TSE tem títulos.", en: "From 70 to 94, the INSS pays more benefits than the TSE has registrations." } as L,
      },
      {
        id: "tse",
        nome: { pt: "O próprio TSE", en: "The TSE itself" } as L,
        valor: { pt: "8 em cada 100", en: "8 in every 100" } as L,
        texto: { pt: "centenários que a coleta de digitais do próprio TSE teria alcançado.", en: "centenarians the TSE's own fingerprint collection would have reached." } as L,
        medido: { pt: "Entre os eleitores de 90 a 94 anos, alcançou 53 em cada 100.", en: "Among voters aged 90 to 94, it reached 53 in every 100." } as L,
      },
    ],
    fecho: {
      pt: "Não é uma questão de probabilidade: é aritmética. Mesmo que ninguém com 95 anos ou mais tivesse morrido desde o Censo, sobrariam 94.985 títulos de centenários. Descontando só as mortes que o DATASUS registrou, no máximo 124.402 centenários podem estar vivos — pelo menos 173.575 títulos, 58% da lista, não são de pessoas vivas.",
      en: "This is not a matter of probability: it is arithmetic. Even if nobody aged 95 or over had died since the Census, 94,985 centenarian registrations would be left over. Subtracting only the deaths DATASUS recorded, at most 124,402 centenarians can be alive — at least 173,575 registrations, 58% of the list, do not belong to living people.",
    } as L,
  },

  estados: {
    title: { pt: "A prova dos nove: Rio de Janeiro e Ceará", en: "The acid test: Rio de Janeiro and Ceará" } as L,
    text: {
      pt: "No Ceará, quase todo título de centenário tem biometria (1.640 de 1.925), e a lista bate com o Censo (1.999). No Rio de Janeiro, quase nenhum tem (580 de 105.262), e a lista tem 39 nomes para cada centenário que o Censo encontrou. A biologia é a mesma nos dois estados: pelo Censo, morrem por ano 4 em cada 10 centenários, lá e cá. Pela lista do TSE, no Ceará também; no Rio, 1 em cada 95.",
      en: "In Ceará, almost every centenarian registration has biometrics (1,640 of 1,925), and the list matches the Census (1,999). In Rio de Janeiro, almost none do (580 of 105,262), and the list has 39 names for every centenarian the Census found. Biology is the same in both states: by the Census, 4 in 10 centenarians die each year, there and here. By the TSE's list, in Ceará too; in Rio, 1 in 95.",
    } as L,
  },

  chances: {
    title: { pt: "As chances, em números", en: "The odds, in numbers" } as L,
    itens: [
      {
        valor: { pt: "4 em 10", en: "4 in 10" } as L,
        label: {
          pt: "é a chance máxima de um título de centenário ser de alguém vivo — pela conta mais generosa. Pela folha do INSS, 1 em 4; pelo Censo, 1 em 8.",
          en: "is the maximum chance that a centenarian registration belongs to someone alive — on the most generous count. By the INSS payroll, 1 in 4; by the Census, 1 in 8.",
        } as L,
        tom: "amber" as const,
      },
      {
        valor: { pt: "149.741", en: "149,741" } as L,
        label: {
          pt: "títulos de centenários que não podem ser de gente viva e não têm biometria: na seção, só um documento separa cada um deles de um voto.",
          en: "centenarian registrations that cannot belong to living people and have no biometrics: at the polling station, only an ID document stands between each of them and a vote.",
        } as L,
        tom: "rose" as const,
      },
      {
        valor: { pt: "705", en: "705" } as L,
        label: {
          pt: "centenários registrados como presentes no 2º turno de 2026 sem ter biometria cadastrada — no mínimo. Podem ser até 1.094 dos 3.307.",
          en: "centenarians recorded as present in the 2026 runoff with no biometrics on file — at the very least. It may be up to 1,094 of the 3,307.",
        } as L,
        tom: "amber" as const,
      },
      {
        valor: { pt: "23×", en: "23×" } as L,
        label: {
          pt: "é, no mínimo, quanto os títulos de centenários com biometria votaram a mais que os sem: cerca de 10 em cada 100, contra menos de 1 em cada 250.",
          en: "is, at the least, how much more centenarian registrations with biometrics voted than those without: about 10 in 100, against fewer than 1 in 250.",
        } as L,
        tom: "teal" as const,
      },
    ],
    link: { pt: "Ver todos os ângulos e as perguntas ao TSE", en: "See every angle and the questions for the TSE" } as L,
  },

  quemVotou: {
    title: { pt: "E os centenários que votaram?", en: "And the centenarians who voted?" } as L,
    lead: {
      pt: "O TSE registrou 3.307 centenários presentes no 2º turno de 2026 e 2.133 no 1º. Não sabemos quem são. Mas os arquivos públicos dizem bastante sobre eles — e é honesto mostrar tudo.",
      en: "The TSE recorded 3,307 centenarians as present in the 2026 runoff and 2,133 in the first round. We do not know who they are. But the public files say a good deal about them — and it is honest to show all of it.",
    } as L,
    mostramTitle: { pt: "O que os números mostram", en: "What the numbers show" } as L,
    mostram: [
      {
        pt: "Eles aparecem onde há centenários vivos, não onde a lista é maior. Entre os estados, o número de presentes acompanha o Censo e a folha do INSS (correlação de 0,94) e quase não acompanha o tamanho da lista (0,56). Na cidade do Rio de Janeiro, a lista tem 68.142 centenários e o Censo encontrou 1.390: votaram 126.",
        en: "They show up where there are living centenarians, not where the list is longest. Across states, the number present follows the Census and the INSS payroll (correlation 0.94) and barely follows the size of the list (0.56). In the city of Rio de Janeiro, the list has 68,142 centenarians and the Census found 1,390: 126 voted.",
      },
      {
        pt: "Quem tem biometria votou pelo menos 23 vezes mais do que quem não tem. Quem passou pelo cartório nos últimos anos também: entre os títulos com cor ou raça informada — campo previsto na resolução do TSE de 2021 —, votaram 25 em cada 100; entre os demais, 1 em cada 100.",
        en: "Those with biometrics voted at least 23 times more than those without. So did those who visited the registry office in recent years: among registrations with colour or race on file — a field provided for in the TSE's 2021 resolution — 25 in 100 voted; among the rest, 1 in 100.",
      },
      {
        pt: "Conclusão: nos totais públicos, quem votou tem o perfil de gente viva. Não há sinal de uso em massa de títulos de mortos entre os centenários.",
        en: "Conclusion: in the public totals, those who voted have the profile of living people. There is no sign of mass use of dead people's registrations among centenarians.",
      },
    ] as L[],
    naoVeemTitle: { pt: "O que os números não deixam ver", en: "What the numbers cannot show" } as L,
    naoVeem: [
      {
        pt: "Uso em pequena escala. Os totais não distinguem um centenário vivo de alguém que vota no nome de um morto — e a Justiça Eleitoral já reconheceu que isso aconteceu (Pescaria Brava, SC, eleição de 2016).",
        en: "Small-scale use. The totals cannot tell a living centenarian from someone voting in a dead person's name — and the Electoral Court has already recognised that this happened (Pescaria Brava, Santa Catarina, 2016 election).",
      },
      {
        pt: "Pelo menos 705 dos presentes não têm biometria cadastrada: foram liberados por um mesário, à vista de um documento. É nesse grupo que o risco se concentra.",
        en: "At least 705 of those present have no biometrics on file: they were cleared by a poll worker on sight of an ID document. That is the group where the risk is concentrated.",
      },
      {
        pt: "Há 149.741 títulos impossíveis e sem biometria. Se apenas 1 em cada 216 mil fosse usado, a chance de ter havido pelo menos um voto em nome de morto já seria de 50%; com 1 em cada 100 mil, 78%.",
        en: "There are 149,741 impossible registrations with no biometrics. If just 1 in 216,000 were used, the chance of at least one vote in a dead person's name would already be 50%; at 1 in 100,000, 78%.",
      },
    ] as L[],
    pergunta: {
      pt: "Quantos dos 3.307 eram títulos de mortos? Entre zero e 3.307. Os números públicos não dizem quantos, nem quem. O TSE sabe quais títulos votaram — e pode conferi-los no registro civil em minutos.",
      en: "How many of the 3,307 were dead people's registrations? Between zero and 3,307. The public numbers do not say how many, or who. The TSE knows which registrations voted — and can check them against the civil registry in minutes.",
    } as L,
  },

  perguntas: {
    title: { pt: "Perguntas legítimas, que só o TSE pode responder", en: "Legitimate questions only the TSE can answer" } as L,
    itens: [
      {
        pt: "Dos 3.307 centenários registrados como presentes no 2º turno de 2026 (2.133 no 1º), quantos tinham óbito registrado no registro civil antes da eleição?",
        en: "Of the 3,307 centenarians recorded as present in the 2026 runoff (2,133 in the first round), how many had a death on record in the civil registry before the election?",
      },
      {
        pt: "Pelo menos 705 deles não têm biometria cadastrada: em que seções votaram e com que documento cada um foi liberado?",
        en: "At least 705 of them have no biometrics on file: at which polling stations did they vote, and with what document was each one cleared?",
      },
      {
        pt: "Quantos dos 297.977 títulos de centenários têm óbito registrado nas bases que a lei põe sob a guarda do TSE? Por que continuam aptos a votar?",
        en: "How many of the 297,977 centenarian registrations have a death recorded in the databases the law places in the TSE's custody? Why are they still eligible to vote?",
      },
      {
        pt: "Por que a biometria chegou a 53 de cada 100 eleitores de 90 a 94 anos e a 8 de cada 100 centenários — e por que os títulos de centenários sem biometria aumentaram 58,5% em quatro anos?",
        en: "Why did biometrics reach 53 in 100 voters aged 90 to 94 and 8 in 100 centenarians — and why did centenarian registrations without biometrics grow 58.5% in four years?",
      },
      {
        pt: "Por que, no Rio de Janeiro, a lista tem 39 centenários para cada um que o Censo encontrou, e no Ceará tem um para um?",
        en: "Why does the list in Rio de Janeiro have 39 centenarians for every one the Census found, while in Ceará it is one for one?",
      },
      {
        pt: "Em Campinápolis (MT), Santo Antônio do Içá (AM), Alto Boa Vista (MT) e Guajará (AM), quase todos os “centenários” com biometria votaram. As datas de nascimento desses títulos estão corretas?",
        en: "In Campinápolis (MT), Santo Antônio do Içá (AM), Alto Boa Vista (MT) and Guajará (AM), almost every “centenarian” with biometrics voted. Are the birth dates on those registrations correct?",
      },
      {
        pt: "Em que data o TSE calcula a idade do eleitor nos arquivos que publica? O manual dos dados não diz.",
        en: "On what date does the TSE calculate a voter's age in the files it publishes? The data manual does not say.",
      },
      {
        pt: "O que mudou entre as duas versões publicadas do 1º turno de 2026, que diferem em 788 comparecimentos?",
        en: "What changed between the two published versions of the 2026 first round, which differ by 788 turnouts?",
      },
    ] as L[],
    fecho: {
      pt: "Cada uma dessas perguntas tem resposta, e o TSE pode dá-la. Mas a resposta só pode ser conferida por quem está de fora com três coisas: o código-fonte aberto, o hash que prova que o programa da urna é aquele código e a declaração de tudo o que mudou entre uma versão e outra.",
      en: "Each of these questions has an answer, and the TSE can give it. But the answer can only be checked by outsiders with three things: open source code, the hash proving that the program on the machine is that code, and a statement of everything that changed between one version and the next.",
    } as L,
  },

  nota: {
    pt: "Como foi contado: os dois arquivos do TSE (comparecimento e eleitorado de 2026) têm as mesmas 250.694 células para os eleitores de 90 anos ou mais, com o mesmo número de eleitores em cada uma. Em cada célula, quem votou além do número de títulos com biometria necessariamente não tem biometria cadastrada.",
    en: "How it was counted: the two TSE files (2026 turnout and electorate) have the same 250,694 cells for voters aged 90 or over, with the same number of voters in each. In each cell, anyone who voted beyond the number of registrations with biometrics necessarily has no biometrics on file.",
  } as L,

  fontes: [
    { tier: "T0", source: { pt: "TSE · perfil de comparecimento 2026 (1º e 2º turno; arquivo BRASIL, 27 UFs)", en: "TSE · 2026 turnout profile (rounds 1 and 2; BRASIL file, 27 states)" }, date: "13/11/2026", href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2026" },
    { tier: "T0", source: { pt: "TSE · perfil do eleitorado 2026 (eleitores com biometria por célula)", en: "TSE · 2026 voter profile (voters with biometrics per cell)" }, date: "2026", href: "https://cdn.tse.jus.br/estatistica/sead/odsele/perfil_eleitorado/perfil_eleitorado_2026.zip" },
    { tier: "T0", source: { pt: "IBGE · Censo 2022, SIDRA 9514 (idade e sexo; Brasil, UFs e municípios)", en: "IBGE · 2022 Census, SIDRA 9514 (age and sex; Brazil, states and municipalities)" }, date: "2022", href: "https://sidra.ibge.gov.br/tabela/9514" },
    { tier: "T0", source: { pt: "DATASUS/SIM · óbitos 2020–2024 (arquivos nacionais)", en: "DATASUS/SIM · deaths 2020–2024 (national files)" }, date: "2020–2024", href: "https://datasus.saude.gov.br/transferencia-de-arquivos/" },
    { tier: "T0", source: { pt: "INSS · benefícios mantidos ativos, set/2026 (por idade, sexo, UF e município)", en: "INSS · active benefits, Sep 2026 (by age, sex, state and municipality)" }, date: "set 2026", href: "https://dadosabertos.inss.gov.br/dataset/beneficios-mantidos-plano-de-dados-abertos-jun-2023-a-dez-2027" },
    { tier: "T0", source: { pt: "IBGE · Pesquisa de Pós-Enumeração do Censo 2022 (erro medido)", en: "IBGE · 2022 Census Post-Enumeration Survey (measured error)" }, date: "ago 2024", href: "https://biblioteca.ibge.gov.br/visualizacao/livros/liv102110.pdf" },
    { tier: "T1", source: { pt: "Costa et al., Population Health Metrics — o SIM capta ≈ 98% das mortes", en: "Costa et al., Population Health Metrics — SIM captures ≈ 98% of deaths" }, date: "2020", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7650525/" },
    { tier: "T0", source: { pt: "TSE · REspe 279-89.2016.6.24.0020 (Pescaria Brava/SC)", en: "TSE · REspe 279-89.2016.6.24.0020 (Pescaria Brava/SC)" }, date: "2017", href: "https://sjur-servicos.tse.jus.br/sjur-servicos/rest/download/pdf/273855" },
  ] as Fonte[],
};
