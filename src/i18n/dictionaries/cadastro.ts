// Seção: /cadastro — todo texto visível da página, PT e EN.

const pt = {
  meta: {
    title: "O cadastro fantasma",
    description:
      "Cinco pilares de evidência, com dados T0, de que centenas de milhares de títulos de falecidos seguem ativos no cadastro eleitoral.",
  },
  ui: {
    pilar: "Pilar",
    forca: "força da evidência",
    comoMedimos: "Como medimos",
    naoProva: "O que isto não prova",
    porque: "Por que isto pesa",
    passo: "Passo",
    indice: "Nesta página",
    visualDe: "Visualização interativa",
  },
  hero: {
    eyebrow: "Eixo 1 · Cadastro eleitoral",
    title: "O cadastro fantasma",
    lead:
      "Dados oficiais do IBGE, do TSE e do Ministério da Saúde apontam para a mesma conclusão: centenas de milhares de títulos de pessoas falecidas continuam ativos no cadastro eleitoral brasileiro. O padrão é estrutural, aparece em todas as eleições e piora com o tempo.",
    stats: {
      tse: "centenários registrados como eleitores no TSE (2026), contra 37.814 encontrados vivos pelo Censo 2022",
      razao: "mais centenários no cadastro do TSE do que o IBGE contou, porta a porta, no Censo",
      gap: "títulos de eleitores falecidos que ficam sem cancelamento a cada ano (gap de 42%)",
      controle: "o aumento de comparecimento dos idosos entre os turnos, comparado ao dos adultos (2022)",
    },
    note:
      "Os cinco pilares abaixo são independentes: usam fontes e comparações diferentes. Derrubar um não derruba os outros. Cada pilar diz o que prova — e o que não prova.",
  },
  p1: {
    short: "Inversão biológica",
    eyebrow: "Pilar 1 · evidência mais forte",
    title: "A inversão biológica",
    lead:
      "Entre o 1º e o 2º turno, o comparecimento muda pouco — e, se muda, deveria mudar menos entre os mais idosos, que têm mais dificuldade de sair de casa. Os dados do TSE mostram o contrário: quanto mais velha a faixa etária, maior o aumento de comparecimento.",
    steps: [
      {
        t: "Primeiro turno",
        b: "Imagine duas filas no dia da eleição: uma de adultos entre 21 e 69 anos e outra de idosos com 70 anos ou mais. Contamos quantos de cada fila compareceram no 1º turno de 2022.",
      },
      {
        t: "Segundo turno",
        b: "Quatro semanas depois, as mesmas pessoas podem votar de novo. A fila dos adultos fica praticamente igual: +0,05%. A fila dos idosos cresce +20,7% em média — e +33,7% entre quem tem 95 a 99 anos.",
      },
      {
        t: "397 vezes",
        b: "O aumento dos idosos é 397 vezes maior que o do grupo de controle. E cresce de forma regular com a idade: 70–74 (+6,8%), 75–79 (+12%), 80–84 (+17%), 85–89 (+22%), 90–94 (+28%), 95–99 (+34%). A biologia prevê a curva oposta.",
      },
    ],
    anim: {
      jovens: "Adultos 21–69",
      idosos: "Idosos 70+",
      t1: "1º turno",
      t2: "2º turno",
      variacao: "variação",
      media: "média das faixas 70+",
      razao: "vezes o grupo de controle",
      controle: "grupo de controle",
    },
    chart: {
      title: "Variação do comparecimento do 1º para o 2º turno, por faixa etária (2022)",
      note: "Verde-azulado: faixas de 16 a 69 anos (controle). Âmbar: 70 anos ou mais. Linha tracejada: média do controle, +0,05%.",
      baseline: "controle +0,05%",
    },
    hist: {
      title: "O padrão aparece em 2014, 2018 e 2022 — e piora",
      note: "Variação do 1º para o 2º turno nas faixas 70+, por eleição presidencial com segundo turno. 2012 e 2016 foram eleições municipais (2º turno só em algumas cidades) e não entram.",
      excesso: "votos acima do que a faixa 70–74 permitiria",
      legenda: "Eleição",
    },
    why: {
      title: "Por que este é o pilar mais forte",
      items: [
        "Compara o TSE com o próprio TSE: mesmas pessoas, mesmo cadastro, dois turnos. Não depende do IBGE nem de estimativa.",
        "Tem grupo de controle interno: as faixas de 21 a 69 anos não mostram o padrão.",
        "É monotônico: cada faixa mais velha aumenta mais que a anterior.",
        "É estrutural: aparece em 2014, 2018 e 2022 — e o excesso de 2022 (198,7 mil votos) é 3,4 vezes o de 2014.",
        "Não é afetado por domicílio eleitoral: a pessoa vota no mesmo lugar nos dois turnos.",
        "Contradiz a capacidade funcional medida pelo IBGE (Pilar 5).",
      ],
    },
    method: [
      "Fonte: arquivos oficiais “Comparecimento e abstenção por perfil do eleitorado” do TSE (2014, 2018, 2022), lidos integralmente — 8,8 milhões de linhas em 2022, com CRC e SHA-256 conferidos.",
      "Para cada faixa etária somamos o comparecimento nacional no 1º e no 2º turno. Variação = (2º − 1º) ÷ 1º.",
      "Grupo de controle: faixas de 21 a 69 anos. Baseline dos idosos: a faixa 70–74, a mais jovem entre eles.",
      "Votos excedentes = quanto cada faixa acima de 74 anos teve a mais do que teria se crescesse como a faixa 70–74.",
    ],
    naoProva:
      "Este pilar não identifica nenhuma pessoa, nem prova que alguém votou com título de falecido. Prova que o comportamento agregado dos idosos entre os turnos é anômalo e cresce com a idade — algo que mobilização, voto facultativo ou transporte organizado não explicam, porque teriam de ser progressivamente mais fortes quanto mais velha a faixa.",
  },
  p2: {
    short: "Centenários",
    eyebrow: "Pilar 2 · contagem contra contagem",
    title: "O impossível demográfico",
    lead:
      "O IBGE bateu em todas as casas do país em 2022 e encontrou 37.814 pessoas com 100 anos ou mais. O TSE tem 298.239 pessoas dessa idade registradas como eleitoras. São 7,9 vezes mais — sem depender de nenhuma estimativa ou projeção.",
    steps: [
      {
        t: "O prédio do Censo",
        b: "Pense no Brasil como um prédio. Em 2022, os recenseadores do IBGE bateram em cada porta e encontraram 37.814 centenários. Cada janela acesa representa mil pessoas vivas.",
      },
      {
        t: "A lista do TSE",
        b: "Agora olhe a lista de eleitores do TSE para a mesma idade: 298.239 nomes. Só 38 mil deles cabem nas janelas acesas. Os outros 260 mil estão na lista, mas ninguém os encontrou em casa.",
      },
      {
        t: "Nenhum país do mundo",
        b: "O Japão, líder mundial em longevidade, tem 7,5 centenários por 100 mil habitantes. O cadastro do TSE equivale a 140 por 100 mil — 18,7 vezes o Japão. O próprio Censo brasileiro (18,6) já é alto.",
      },
    ],
    anim: {
      censo: "Censo IBGE 2022",
      tse: "Cadastro TSE 2026",
      janela: "janela acesa = mil pessoas encontradas vivas",
      nomes: "nomes na lista",
      fantasma: "sem janela",
      encontrados: "encontrados vivos",
      registrados: "registrados como eleitores",
      por100k: "por 100 mil habitantes",
    },
    chart: {
      title: "Centenários por 100 mil habitantes",
      note: "Fontes: ONU World Population Prospects (países), IBGE Censo 2022 e TSE perfil de comparecimento 2026.",
    },
    stats: {
      fantasma: "dos centenários do cadastro não correspondem a pessoas que o Censo encontrou vivas",
      japao: "mais centenários no cadastro do TSE do que no Japão, por 100 mil habitantes",
      zero: "municípios com centenários cadastrados no TSE e zero mortes de centenários em cinco anos (578 cadastrados)",
    },
    why: {
      title: "Por que esta comparação resiste",
      items: [
        "É Censo contra cadastro, os dois dados primários — nenhuma premissa de sobrevivência no meio.",
        "É nacional: quem o Censo não achou em um município foi achado em outro. Domicílio eleitoral não muda o total do país.",
        "Objeção “nasceram depois de 2022”: a faixa 95–99 tinha ~165 mil pessoas no Censo. Mesmo que todas vivessem até 2026 (impossível), somariam ~203 mil com os 37,8 mil — ainda abaixo de 298 mil.",
        "Uma subcontagem do Censo teria de ser de 8 vezes para explicar o TSE. A cobertura do Censo é da ordem de 97%.",
        "13 municípios têm 578 centenários no TSE e zero óbitos de centenários em 2020–2024. Com expectativa de vida de ~2 anos aos 100, esperar-se-iam centenas de mortes.",
        "O DATASUS registrou 74.242 mortes de centenários em 5 anos (2020–2024). O cadastro tem quase o triplo disso em centenários aptos — mais mortos registrados do que todas as mortes de centenários de meia década.",
      ],
    },
    method: [
      "Censo 2022: SIDRA tabela 9514, grupo “100 anos ou mais”, soma dos 5.570 municípios.",
      "TSE: “Comparecimento e abstenção por perfil do eleitorado” 2026 (1º turno), campo aptos, faixa 100+, total nacional.",
      "Óbitos: DATASUS/SIM 2020–2024, 27 UFs, idade codificada ≥ 100; média de 14.848 mortes de centenários por ano.",
      "Internacional: ONU World Population Prospects 2024. Brasil Censo = 37.814 ÷ 203 milhões; Brasil TSE = 298.239 ÷ ~213 milhões.",
    ],
    naoProva:
      "Não prova que algum centenário falecido votou. Erros de data de nascimento existem nos dois lados: idosos nascidos antes de 1930 frequentemente não têm registro civil preciso, e o TSE pode ter herdado datas erradas. Mas erro de idade não cria pessoas: desloca-as entre faixas. O excedente de 260 mil permanece a explicar.",
  },
  p3: {
    short: "Limpeza cadastral",
    eyebrow: "Pilar 3 · o mecanismo",
    title: "A limpeza que não acontece",
    lead:
      "O TSE é obrigado a cancelar o título de quem morre. Em 2022, cancelou 787.825 títulos por falecimento. Naquele ano, cerca de 1,35 milhão de eleitores morreram. Quatro em cada dez títulos de falecidos ficaram ativos.",
    steps: [
      {
        t: "Mortes entram",
        b: "Todo ano, cerca de 1,35 milhão de pessoas com título de eleitor morrem no Brasil. Cada ponto que cai no funil é um título que deveria ser cancelado.",
      },
      {
        t: "Só parte sai cancelada",
        b: "Em 2022, o melhor ano com dados detalhados, o TSE cancelou 787.825 títulos por falecimento — 58%. Os outros 42%, cerca de 560 mil, continuaram ativos no cadastro.",
      },
      {
        t: "A pilha cresce",
        b: "O que não é cancelado acumula. Em quatro anos, entre duas eleições presidenciais, a pilha chega a 2,2 milhões de títulos de pessoas mortas aptas a votar. Em dez anos, 5,6 milhões.",
      },
    ],
    anim: {
      mortes: "mortes de eleitores por ano",
      cancelados: "cancelados",
      ativos: "seguem ativos",
      ano: "ano",
      acumulado: "títulos de falecidos acumulados",
    },
    chart: {
      title: "Mortes de eleitores × cancelamentos por falecimento (2022)",
      note: "Mortes de eleitores = 85% das 1,586 milhão de mortes registradas (parcela da população com título). Cancelamentos: TSE, maio de 2023.",
      mortes: "Mortes de eleitores",
      cancelados: "Cancelados",
      gap: "Não cancelados",
    },
    table: {
      title: "Quanto acumula se nada mudar",
      periodo: "Período",
      titulos: "Títulos de falecidos ativos (estimativa)",
    },
    correcao: "Correção de um número nosso",
    why: {
      title: "Por que isto fecha o círculo",
      items: [
        "Explica os Pilares 1 e 2: títulos de falecidos inflam os aptos e se concentram nas faixas mais velhas, onde há mais mortes.",
        "Os 608 mil registros de 90+ a mais do que o Censo (2022) equivalem a pouco mais de um ano de gap.",
        "A norma existe desde 2006: a Resolução TSE 22.166 prevê o cruzamento com registros de óbito. O gap é de execução, não de regra.",
      ],
    },
    method: [
      "Cancelamentos 2022 por motivo: 793.776 no total; 787.825 (99,25%) por falecimento; 5.765 por decisão judicial; 145 por perda de direitos; 38 por duplicidade; 3 por revisão. Fonte: TSE, maio de 2023.",
      "Mortes 2022: ~1,586 milhão (DATASUS/SIM). Parcela com título estimada em 85%: quase todas as mortes ocorrem em adultos, e ~95% dos adultos têm título.",
      "Gap = 1.348.000 − 787.825 = 560.175 (41,6%).",
      "Ressalva: o dado de 2022 pode incluir óbitos de anos anteriores processados com atraso (pandemia). Isso tornaria o gap de anos individuais maior e o acumulado menor; a ordem de grandeza não muda.",
    ],
    naoProva:
      "O TSE confirma o comparecimento dessas faixas — é o número oficial de votos, não uma inferência nossa. E o DATASUS dá o número concreto de mortos: ninguém entra na base de óbitos sem atestado assinado por médico. Está provado, então, que foram registrados votos em faixas cujo cadastro está cheio de pessoas comprovadamente mortas — e, em 137 municípios, houve mais votos do que pessoas vivas na faixa. O que os dados públicos ainda não ligam é o nome: qual voto saiu de um título de falecido e qual de um eleitor vivo. Esse vínculo nome a nome só o cruzamento do governo fecha, em menos de uma hora. Intenção não é demonstrada; pode ser ineficiência. Mas ineficiência dessa escala, sem correção verificável, é exatamente o que exige auditoria.",
  },
  p4: {
    short: "Votos > população",
    eyebrow: "Pilar 4 · teste de robustez",
    title: "Cidades onde votaram mais pessoas do que moradores",
    lead:
      "Em 107 municípios, o número de votos no 2º turno de 2026 foi maior que a população inteira estimada pelo IBGE — contando bebês, crianças e acamados. Em 730, há mais títulos de eleitor do que habitantes.",
    steps: [
      {
        t: "O estádio",
        b: "Davinópolis (GO) tem 1.877 moradores segundo o IBGE. Pense num estádio com 1.877 assentos — um para cada pessoa da cidade, de qualquer idade.",
      },
      {
        t: "Os ingressos",
        b: "O TSE emitiu 4.144 títulos de eleitor para essa cidade: 2,2 ingressos por morador. Para cada adulto, são 2,8 títulos.",
      },
      {
        t: "Quem entrou",
        b: "No 2º turno de 2026, 3.010 pessoas votaram. São 1.133 a mais do que assentos — mais votos do que habitantes de qualquer idade. Use o controle abaixo da animação: e se o IBGE tivesse errado a população?",
      },
    ],
    anim: {
      moradores: "moradores (IBGE 2026)",
      titulos: "títulos de eleitor (TSE)",
      votos: "votos no 2º turno",
      semAssento: "sem assento",
      slider: "E se o IBGE errou a população em",
      popAjustada: "população ajustada",
      restantes: "dos 20 municípios mais extremos ainda têm mais votos do que habitantes",
      assento: "1 assento = 50 pessoas",
      cidade: "Davinópolis · GO",
    },
    chart: {
      title: "Quantos dos 20 municípios mais extremos sobrevivem a cada margem de erro do IBGE",
      note: "Mesmo com +10% de margem, todos os 20 permanecem. Com +20%, nove. Davinópolis só desaparece com +60%.",
      eixo: "margem de erro do IBGE",
    },
    table: {
      title: "Os sete casos mais extremos (2º turno de 2026)",
      votosPop: "Votos ÷ pop.",
      aptosPop: "Títulos ÷ pop.",
    },
    stats: {
      aptosPop: "municípios com mais títulos de eleitor do que habitantes",
      votosPop: "municípios com mais votos do que habitantes no 2º turno de 2026",
      davi: "títulos de eleitor por habitante em Davinópolis (GO), contando pessoas de qualquer idade",
    },
    why: {
      title: "Por que resiste à objeção “o IBGE errou”",
      items: [
        "No Brasil inteiro, há 73 títulos para cada 100 habitantes. Nos 20 municípios mais extremos, 155 — mais que o dobro.",
        "Para zerar o excesso desses 20, o IBGE teria de ter subestimado a população em 104% — o dobro de gente. São municípios rurais pequenos, muitos em declínio.",
        "Domicílio eleitoral explica parte (pessoas que votam onde não moram), mas não 2,2 títulos por habitante.",
      ],
    },
    method: [
      "Votos e aptos: BWEB/TSE, 2º turno de 2026, 28 UFs, 499.177 seções, cargo presidente.",
      "População: IBGE, estimativas 2026 (SIDRA 6579); casamento por nome exato UF + município: 5.550 de 5.571.",
      "Sensibilidade: inflamos a população de cada município em +5%, +10% … +60% e recontamos quantos ainda têm votos > população.",
      "Contagem independente: a Agência Tatu reportou 733 municípios com mais eleitores que habitantes em julho de 2026; encontramos 730.",
    ],
    naoProva:
      "Não prova fraude no dia da votação. Nesses municípios, o BU bate com o RDV em 100% das seções, não há votos após o encerramento e a velocidade de votação é normal. O que está inflado é o cadastro — por falecidos, por emigrados que nunca transferiram o título e por quem mantém título onde não mora. Não sabemos a proporção de cada causa.",
  },
  p5: {
    short: "Capacidade funcional",
    eyebrow: "Pilar 5 · a contradição",
    title: "Quem consegue ir votar?",
    lead:
      "A Pesquisa Nacional de Saúde do IBGE mede o que os idosos conseguem fazer sozinhos. 43% dos brasileiros com 75 anos ou mais têm dificuldade para ir a lugares distantes ou usar transporte. Mesmo assim, são justamente os mais velhos que mais aumentam o comparecimento entre os turnos.",
    steps: [
      {
        t: "Cem pessoas com 75 anos ou mais",
        b: "Cada boneco é uma pessoa. Juntas, representam os brasileiros de 75 anos ou mais.",
      },
      {
        t: "43 não conseguem ir longe sozinhas",
        b: "Segundo a PNS 2019, 43,2% têm limitação para atividades como ir a lugares distantes, usar transporte ou lidar com dinheiro. 6% dos 80+ estiveram acamados nas duas semanas anteriores à pesquisa.",
      },
      {
        t: "Mas o aumento cresce com a idade",
        b: "Se a mobilidade cai com a idade, o efeito de uma segunda ida às urnas deveria ser menor nos mais velhos. É maior: +6,8% aos 70–74, +33,7% aos 95–99.",
      },
    ],
    anim: {
      pessoas: "pessoas com 75 anos ou mais",
      limitadas: "com limitação para sair sozinhas (PNS 2019)",
      aumento: "aumento do 1º para o 2º turno (2022)",
    },
    chart: {
      turnout: "Comparecimento no 2º turno de 2022, sobre os aptos",
      delta: "Aumento do 1º para o 2º turno (2022)",
      note: "À esquerda, o nível cai com a idade, como esperado. À direita, o aumento sobe com a idade — o oposto do esperado.",
    },
    table: {
      title: "Comparecimento de eleitores com 80 anos ou mais: comparação internacional",
      lugar: "Onde",
      pct: "Comparecimento",
    },
    why: {
      title: "O que a saúde dos idosos nos diz",
      items: [
        "O nível absoluto de comparecimento (31,6% aos 80–84) é plausível frente à capacidade funcional.",
        "O que não é plausível é o aumento entre turnos crescer com a idade — exatamente onde a limitação funcional é maior.",
        "No Japão, o comparecimento dos 80+ fica entre 33% e 48%; na Alemanha chega a 85%, mas com voto postal amplo. No Brasil o voto é presencial.",
      ],
    },
    method: [
      "PNS 2019 (IBGE): limitação AIVD em 43,2% dos 75+; ABVD em 18,5%; acamamento em 6,0% dos 80+ (Lima et al., 2024, n = 22.728).",
      "Censo 2022: deficiência (muita dificuldade ou impossibilidade) em 30–39% dos 80–84, ~48% dos 85–89 e mais de 60% dos 100+.",
      "Comparecimento: TSE 2022, 2º turno, por faixa, sobre aptos; variação 1º→2º turno do Pilar 1.",
    ],
    naoProva:
      "Não prova que pessoas incapazes “votaram”. Mostra que a curva do aumento entre turnos é incompatível com a curva de capacidade funcional da mesma população. A contradição está no agregado — e a explicação mais simples está no cadastro, não nas pessoas.",
  },
  fraco: {
    eyebrow: "Sinal fraco · mostrado por honestidade",
    title: "O que não usamos como pilar",
    body:
      "Em 137 municípios, o comparecimento de uma faixa etária no 2º turno de 2022 superou a população residente dessa faixa no Censo: 1.089 diferenças. Reproduzimos o número — mas, ao somar por estado, nenhuma UF apresenta comparecimento acima do Censo em nenhuma faixa. O sinal dilui. Domicílio eleitoral (votar onde não se mora) explica parte dele. Por isso essas diferenças não são pilar, e abandonamos o rótulo “votos impossíveis” de versões anteriores.",
    table: {
      faixa: "Faixa",
      censo: "Censo 2022 (vivos)",
      comp: "Comparecimento 2º turno 2022",
      razao: "Razão",
    },
  },
  fecho: {
    title: "Onde a auditoria está",
    encontrado: "Gap encontrado",
    encontradoBody:
      "O cadastro eleitoral tem centenas de milhares de títulos que não correspondem a pessoas vivas, por falha estrutural de cancelamento. Cinco linhas de evidência independentes convergem.",
    naoAchado: "Ainda não achado",
    naoAchadoBody:
      "Um caso individual, com nome e documento, de título de falecido usado para votar. Fechar esse elo exige cruzar CPF de óbito com registro de comparecimento — dados que a LGPD mantém fora do acesso público.",
    link: "Ver todos os limites e o método",
  },
};

const en: typeof pt = {
  meta: {
    title: "The phantom registry",
    description:
      "Five pillars of evidence, built on primary data, that hundreds of thousands of deceased people remain registered to vote.",
  },
  ui: {
    pilar: "Pillar",
    forca: "strength of evidence",
    comoMedimos: "How we measured",
    naoProva: "What this does not prove",
    porque: "Why this matters",
    passo: "Step",
    indice: "On this page",
    visualDe: "Interactive visual",
  },
  hero: {
    eyebrow: "Track 1 · Voter registry",
    title: "The phantom registry",
    lead:
      "Official data from IBGE (the statistics institute), the TSE (the electoral court) and the Ministry of Health point to the same conclusion: hundreds of thousands of registrations belonging to deceased people remain active in Brazil's voter rolls. The pattern is structural, shows up in every election, and gets worse over time.",
    stats: {
      tse: "centenarians registered as voters by the TSE (2026), against 37,814 found alive by the 2022 Census",
      razao: "more centenarians in the TSE registry than IBGE counted, door to door, in the Census",
      gap: "registrations of deceased voters left uncancelled every year (a 42% gap)",
      controle: "the rise in elderly turnout between rounds, compared with adults (2022)",
    },
    note:
      "The five pillars below are independent: they use different sources and comparisons. Knocking one down does not knock down the others. Each pillar states what it proves — and what it does not.",
  },
  p1: {
    short: "Biological inversion",
    eyebrow: "Pillar 1 · strongest evidence",
    title: "The biological inversion",
    lead:
      "Between the first and second rounds, turnout changes little — and if it changes, it should change less among the oldest, who find it hardest to leave home. TSE data show the opposite: the older the age group, the bigger the increase in turnout.",
    steps: [
      {
        t: "First round",
        b: "Picture two queues on election day: one of adults aged 21 to 69 and one of people aged 70 and over. We count how many from each queue showed up in the first round of 2022.",
      },
      {
        t: "Second round",
        b: "Four weeks later the same people can vote again. The adult queue stays practically the same: +0.05%. The elderly queue grows +20.7% on average — and +33.7% among those aged 95 to 99.",
      },
      {
        t: "397 times",
        b: "The increase among the elderly is 397 times that of the control group. And it climbs steadily with age: 70–74 (+6.8%), 75–79 (+12%), 80–84 (+17%), 85–89 (+22%), 90–94 (+28%), 95–99 (+34%). Biology predicts the opposite curve.",
      },
    ],
    anim: {
      jovens: "Adults 21–69",
      idosos: "Elderly 70+",
      t1: "Round 1",
      t2: "Round 2",
      variacao: "change",
      media: "average of the 70+ groups",
      razao: "times the control group",
      controle: "control group",
    },
    chart: {
      title: "Change in turnout from round 1 to round 2, by age group (2022)",
      note: "Teal: ages 16 to 69 (control). Amber: 70 and over. Dashed line: control average, +0.05%.",
      baseline: "control +0.05%",
    },
    hist: {
      title: "The pattern appears in 2014, 2018 and 2022 — and worsens",
      note: "Round 1 to round 2 change in the 70+ groups, for each presidential election with a runoff. 2012 and 2016 were municipal elections (runoffs only in some cities) and are excluded.",
      excesso: "votes above what the 70–74 group would allow",
      legenda: "Election",
    },
    why: {
      title: "Why this is the strongest pillar",
      items: [
        "It compares the TSE with the TSE itself: same people, same registry, two rounds. It depends neither on IBGE nor on estimates.",
        "It has a built-in control group: ages 21 to 69 show no such pattern.",
        "It is monotonic: each older group rises more than the previous one.",
        "It is structural: present in 2014, 2018 and 2022 — and the 2022 excess (198.7 thousand votes) is 3.4 times that of 2014.",
        "It is unaffected by electoral domicile: a person votes in the same place in both rounds.",
        "It contradicts the functional capacity measured by IBGE (Pillar 5).",
      ],
    },
    method: [
      "Source: the TSE's official “Turnout and abstention by voter profile” files (2014, 2018, 2022), read in full — 8.8 million rows in 2022, with CRC and SHA-256 verified.",
      "For each age group we sum national turnout in rounds 1 and 2. Change = (R2 − R1) ÷ R1.",
      "Control group: ages 21 to 69. Elderly baseline: the 70–74 group, the youngest among them.",
      "Excess votes = how many more each group above 74 had than it would if it had grown like the 70–74 group.",
    ],
    naoProva:
      "This pillar identifies no individual and does not prove that anyone voted with a dead person's registration. It proves that the aggregate behaviour of the elderly between rounds is anomalous and grows with age — something mobilisation, optional voting or organised transport cannot explain, since each would have to be progressively stronger the older the group.",
  },
  p2: {
    short: "Centenarians",
    eyebrow: "Pillar 2 · count against count",
    title: "The demographic impossibility",
    lead:
      "In 2022 IBGE knocked on every door in the country and found 37,814 people aged 100 or over. The TSE has 298,239 people of that age registered as voters. That is 7.9 times more — with no estimate or projection involved.",
    steps: [
      {
        t: "The Census building",
        b: "Think of Brazil as a building. In 2022, IBGE enumerators knocked on every door and found 37,814 centenarians. Each lit window stands for a thousand living people.",
      },
      {
        t: "The TSE list",
        b: "Now look at the TSE's voter list for the same age: 298,239 names. Only 38 thousand of them fit in the lit windows. The other 260 thousand are on the list, but nobody found them at home.",
      },
      {
        t: "No country on Earth",
        b: "Japan, the world leader in longevity, has 7.5 centenarians per 100,000 inhabitants. The TSE registry amounts to 140 per 100,000 — 18.7 times Japan. Brazil's own Census figure (18.6) is already high.",
      },
    ],
    anim: {
      censo: "IBGE Census 2022",
      tse: "TSE registry 2026",
      janela: "lit window = one thousand people found alive",
      nomes: "names on the list",
      fantasma: "no window",
      encontrados: "found alive",
      registrados: "registered as voters",
      por100k: "per 100,000 inhabitants",
    },
    chart: {
      title: "Centenarians per 100,000 inhabitants",
      note: "Sources: UN World Population Prospects (countries), IBGE 2022 Census and TSE 2026 turnout profile.",
    },
    stats: {
      fantasma: "of the centenarians in the registry do not match people the Census found alive",
      japao: "more centenarians in the TSE registry than in Japan, per 100,000 inhabitants",
      zero: "municipalities with centenarians registered by the TSE and zero centenarian deaths in five years (578 registered)",
    },
    why: {
      title: "Why this comparison holds",
      items: [
        "It is Census against registry, both primary data — no survival assumption in between.",
        "It is national: whoever the Census missed in one municipality was found in another. Electoral domicile does not change the country's total.",
        "Objection “they turned 100 after 2022”: the 95–99 group had ~165 thousand people in the Census. Even if all of them lived to 2026 (impossible), they would add up to ~203 thousand with the 37.8 thousand — still below 298 thousand.",
        "A Census undercount would have to be 8-fold to explain the TSE. Census coverage is on the order of 97%.",
        "13 municipalities have 578 centenarians in the TSE and zero centenarian deaths in 2020–2024. With a life expectancy of ~2 years at 100, hundreds of deaths would be expected.",
        "DATASUS recorded 74,242 centenarian deaths in 5 years (2020–2024). The registry holds nearly three times as many centenarians eligible to vote — more registered than every centenarian death in half a decade.",
      ],
    },
    method: [
      "2022 Census: SIDRA table 9514, group “100 years and over”, sum of 5,570 municipalities.",
      "TSE: “Turnout and abstention by voter profile” 2026 (round 1), registered-voters field, 100+ group, national total.",
      "Deaths: DATASUS/SIM 2020–2024, 27 states, coded age ≥ 100; an average of 14,848 centenarian deaths per year.",
      "International: UN World Population Prospects 2024. Brazil Census = 37,814 ÷ 203 million; Brazil TSE = 298,239 ÷ ~213 million.",
    ],
    naoProva:
      "It does not prove that any deceased centenarian voted. Birth-date errors exist on both sides: people born before 1930 often lack precise civil records, and the TSE may have inherited wrong dates. But an age error does not create people: it moves them between groups. The 260 thousand excess remains to be explained.",
  },
  p3: {
    short: "Registry clean-up",
    eyebrow: "Pillar 3 · the mechanism",
    title: "The clean-up that does not happen",
    lead:
      "The TSE is required to cancel the registration of anyone who dies. In 2022 it cancelled 787,825 registrations due to death. That year, about 1.35 million voters died. Four in ten registrations of the deceased stayed active.",
    steps: [
      {
        t: "Deaths come in",
        b: "Every year, about 1.35 million people holding a voter registration die in Brazil. Each dot falling into the funnel is a registration that should be cancelled.",
      },
      {
        t: "Only part comes out cancelled",
        b: "In 2022, the best year with detailed data, the TSE cancelled 787,825 registrations due to death — 58%. The other 42%, about 560 thousand, stayed active in the registry.",
      },
      {
        t: "The pile grows",
        b: "What is not cancelled accumulates. In four years, between two presidential elections, the pile reaches 2.2 million registrations of dead people eligible to vote. In ten years, 5.6 million.",
      },
    ],
    anim: {
      mortes: "voter deaths per year",
      cancelados: "cancelled",
      ativos: "still active",
      ano: "year",
      acumulado: "accumulated registrations of the deceased",
    },
    chart: {
      title: "Voter deaths × cancellations due to death (2022)",
      note: "Voter deaths = 85% of the 1.586 million recorded deaths (the share of the population holding a registration). Cancellations: TSE, May 2023.",
      mortes: "Voter deaths",
      cancelados: "Cancelled",
      gap: "Not cancelled",
    },
    table: {
      title: "How much accumulates if nothing changes",
      periodo: "Period",
      titulos: "Active registrations of the deceased (estimate)",
    },
    correcao: "Correcting one of our own numbers",
    why: {
      title: "Why this closes the loop",
      items: [
        "It explains Pillars 1 and 2: registrations of the deceased inflate the registered count and concentrate in the oldest groups, where most deaths occur.",
        "The 608 thousand registrations aged 90+ above the Census (2022) amount to little more than one year of gap.",
        "The rule has existed since 2006: TSE Resolution 22.166 provides for cross-checking against death records. The gap is one of execution, not of rules.",
      ],
    },
    method: [
      "2022 cancellations by reason: 793,776 in total; 787,825 (99.25%) due to death; 5,765 by court order; 145 for loss of political rights; 38 duplicates; 3 by registry review. Source: TSE, May 2023.",
      "2022 deaths: ~1.586 million (DATASUS/SIM). Share holding a registration estimated at 85%: almost all deaths occur among adults, and ~95% of adults are registered.",
      "Gap = 1,348,000 − 787,825 = 560,175 (41.6%).",
      "Caveat: the 2022 figure may include deaths from earlier years processed late (pandemic). That would make single-year gaps larger and the accumulated total smaller; the order of magnitude does not change.",
    ],
    naoProva:
      "The TSE confirms the turnout in these bands — it is the official vote count, not our inference. And DATASUS gives the concrete number of deaths: no one enters the death registry without a physician-signed certificate. So it is proven that votes were recorded in age bands whose registry is full of demonstrably dead people — and, in 137 municipalities, there were more votes than living people in the band. What public data still does not link is the name: which vote came from a deceased person's registration and which from a living voter. That name-by-name link is closed only by the government's cross-check, in under an hour. Intent is not demonstrated; it may be inefficiency. But inefficiency on this scale, with no verifiable fix, is exactly what demands an audit.",
  },
  p4: {
    short: "Votes > population",
    eyebrow: "Pillar 4 · robustness test",
    title: "Towns where more people voted than live there",
    lead:
      "In 107 municipalities, the number of votes in the 2026 runoff exceeded the entire population estimated by IBGE — babies, children and the bedridden included. In 730, there are more voter registrations than inhabitants.",
    steps: [
      {
        t: "The stadium",
        b: "Davinópolis (GO) has 1,877 residents according to IBGE. Picture a stadium with 1,877 seats — one for every person in town, of any age.",
      },
      {
        t: "The tickets",
        b: "The TSE issued 4,144 voter registrations for this town: 2.2 tickets per resident. For every adult, there are 2.8 registrations.",
      },
      {
        t: "Who came in",
        b: "In the 2026 runoff, 3,010 people voted. That is 1,133 more than seats — more votes than inhabitants of any age. Use the control under the animation: what if IBGE got the population wrong?",
      },
    ],
    anim: {
      moradores: "residents (IBGE 2026)",
      titulos: "voter registrations (TSE)",
      votos: "votes in the runoff",
      semAssento: "without a seat",
      slider: "What if IBGE got the population wrong by",
      popAjustada: "adjusted population",
      restantes: "of the 20 most extreme municipalities still have more votes than inhabitants",
      assento: "1 seat = 50 people",
      cidade: "Davinópolis · GO",
    },
    chart: {
      title: "How many of the 20 most extreme municipalities survive each IBGE error margin",
      note: "Even with a +10% margin, all 20 remain. At +20%, nine. Davinópolis only disappears at +60%.",
      eixo: "IBGE error margin",
    },
    table: {
      title: "The seven most extreme cases (2026 runoff)",
      votosPop: "Votes ÷ pop.",
      aptosPop: "Registrations ÷ pop.",
    },
    stats: {
      aptosPop: "municipalities with more voter registrations than inhabitants",
      votosPop: "municipalities with more votes than inhabitants in the 2026 runoff",
      davi: "voter registrations per inhabitant in Davinópolis (GO), counting people of any age",
    },
    why: {
      title: "Why it survives the “IBGE got it wrong” objection",
      items: [
        "Across Brazil there are 73 registrations per 100 inhabitants. In the 20 most extreme municipalities, 155 — more than double.",
        "To erase the excess in those 20, IBGE would have to have underestimated the population by 104% — twice as many people. These are small rural towns, many in decline.",
        "Electoral domicile explains part of it (people who vote where they do not live), but not 2.2 registrations per inhabitant.",
      ],
    },
    method: [
      "Votes and registered voters: BWEB/TSE, 2026 runoff, 28 states, 499,177 polling sections, presidential race.",
      "Population: IBGE 2026 estimates (SIDRA 6579); matched by exact state + municipality name: 5,550 of 5,571.",
      "Sensitivity: we inflated each municipality's population by +5%, +10% … +60% and recounted how many still have votes > population.",
      "Independent count: Agência Tatu reported 733 municipalities with more voters than inhabitants in July 2026; we found 730.",
    ],
    naoProva:
      "It does not prove fraud on election day. In these municipalities the BU matches the RDV in 100% of sections, there are no votes after closing time, and voting speed is normal. What is inflated is the registry — through the deceased, through emigrants who never transferred their registration, and through people who keep a registration where they do not live. We do not know the share of each cause.",
  },
  p5: {
    short: "Functional capacity",
    eyebrow: "Pillar 5 · the contradiction",
    title: "Who can actually go and vote?",
    lead:
      "IBGE's National Health Survey measures what elderly people can do on their own. 43% of Brazilians aged 75 and over have difficulty travelling to distant places or using transport. Yet it is precisely the oldest who increase their turnout the most between rounds.",
    steps: [
      {
        t: "One hundred people aged 75 and over",
        b: "Each figure is a person. Together they stand for Brazilians aged 75 and over.",
      },
      {
        t: "43 cannot travel far on their own",
        b: "According to the 2019 PNS, 43.2% have limitations in activities such as travelling to distant places, using transport or handling money. 6% of those 80+ had been bedridden in the two weeks before the survey.",
      },
      {
        t: "Yet the increase grows with age",
        b: "If mobility falls with age, the effect of a second trip to the polls should be smaller among the oldest. It is larger: +6.8% at 70–74, +33.7% at 95–99.",
      },
    ],
    anim: {
      pessoas: "people aged 75 and over",
      limitadas: "with limitations to go out alone (PNS 2019)",
      aumento: "increase from round 1 to round 2 (2022)",
    },
    chart: {
      turnout: "Turnout in the 2022 runoff, over registered voters",
      delta: "Increase from round 1 to round 2 (2022)",
      note: "On the left, the level falls with age, as expected. On the right, the increase rises with age — the opposite of what is expected.",
    },
    table: {
      title: "Turnout of voters aged 80 and over: international comparison",
      lugar: "Where",
      pct: "Turnout",
    },
    why: {
      title: "What the health of the elderly tells us",
      items: [
        "The absolute turnout level (31.6% at 80–84) is plausible given functional capacity.",
        "What is not plausible is the increase between rounds growing with age — exactly where functional limitation is greatest.",
        "In Japan, turnout of those 80+ is between 33% and 48%; in Germany it reaches 85%, but with widespread postal voting. In Brazil voting is in person.",
      ],
    },
    method: [
      "PNS 2019 (IBGE): IADL limitation in 43.2% of those 75+; ADL in 18.5%; bedridden status in 6.0% of those 80+ (Lima et al., 2024, n = 22,728).",
      "2022 Census: disability (great difficulty or inability) in 30–39% of those 80–84, ~48% of those 85–89 and over 60% of those 100+.",
      "Turnout: TSE 2022, runoff, by age group, over registered voters; round 1 to round 2 change from Pillar 1.",
    ],
    naoProva:
      "It does not prove that incapacitated people “voted”. It shows that the curve of the increase between rounds is incompatible with the functional-capacity curve of the same population. The contradiction lies in the aggregate — and the simplest explanation lies in the registry, not in the people.",
  },
  fraco: {
    eyebrow: "Weak signal · shown for honesty",
    title: "What we did not use as a pillar",
    body:
      "In 137 municipalities, turnout of one age group in the 2022 runoff exceeded the resident population of that group in the Census: 1,089 differences. We reproduced the number — but when summed by state, no state shows turnout above the Census in any age group. The signal dilutes. Electoral domicile (voting where one does not live) explains part of it. That is why these differences are not a pillar, and why we dropped the “impossible votes” label used in earlier versions.",
    table: {
      faixa: "Age group",
      censo: "2022 Census (alive)",
      comp: "2022 runoff turnout",
      razao: "Ratio",
    },
  },
  fecho: {
    title: "Where the audit stands",
    encontrado: "Gap found",
    encontradoBody:
      "The voter registry holds hundreds of thousands of registrations that do not correspond to living people, owing to a structural failure to cancel them. Five independent lines of evidence converge.",
    naoAchado: "Not yet found",
    naoAchadoBody:
      "An individual case, with a name and a document, of a dead person's registration used to vote. Closing that link requires matching death-record IDs with turnout records — data that Brazil's privacy law keeps out of public reach.",
    link: "See every limitation and the method",
  },
};

export const cadastro = { pt, en };
export type CadastroDict = typeof pt;
