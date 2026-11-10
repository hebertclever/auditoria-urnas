// Seção: página inicial.
const pt = {
  meta: {
    title: "Auditoria das Urnas",
    description:
      "Auditoria independente, com dados oficiais, do cadastro eleitoral brasileiro e do kit público de verificação das urnas.",
  },
  hero: {
    eyebrow: "Auditoria independente · dados oficiais",
    h1a: "O cadastro eleitoral guarda centenas de milhares de mortos.",
    h1b: "O kit que deveria revelar isso não funciona.",
    lead: "Cruzamos o Censo, os registros de óbito e os próprios números do TSE: o padrão é estrutural, piora a cada eleição e resiste a um grupo de controle. Depois lemos, linha a linha, as ferramentas que o TSE distribui para o cidadão verificar as urnas.",
    ctaCadastro: "Ver o cadastro fantasma",
    ctaCodigo: "Ver os 63 gaps no código",
    counterUnit: "centenários",
    counterA: "contados vivos pelo IBGE · Censo 2022",
    counterB: "registrados como eleitores pelo TSE · 2026",
    replay: "Repetir",
  },
  bento: {
    eyebrow: "Seis números",
    title: "Todos de fonte primária. Nenhum nosso.",
    lead: "Cada número abaixo sai de um arquivo oficial que qualquer pessoa pode baixar. Nossa contribuição foi cruzá-los.",
    centenarios: "centenários registrados pelo TSE em 2026. O Censo 2022 contou 37.814 vivos.",
    razao: "mais centenários no cadastro eleitoral do que o IBGE encontrou porta a porta.",
    gap: "títulos de falecidos que o TSE deixa de cancelar por ano (44% das mortes de eleitores).",
    controle: "é quanto o aumento de comparecimento 1º→2º turno dos 70+ supera o das faixas 21–69.",
    municipios: "municípios onde votaram mais pessoas do que a população total estimada pelo IBGE.",
    gaps: "falhas no kit oficial de verificação das urnas. Todas enfraquecem a verificação.",
    sources: "Censo IBGE 2022 (SIDRA 9514) · TSE comparecimento por perfil 2014–2026 · TSE cancelamentos 2022 · DATASUS/SIM · BWEB 2026 · kit TSE v1/v2.0/v2.1",
  },
  eixos: {
    eyebrow: "Dois eixos",
    title: "Quem está no cadastro. E quem consegue verificar.",
    cadastro: {
      title: "O cadastro fantasma",
      desc: "Cinco pilares de evidência, do mais forte ao mais fraco, de que o cadastro eleitoral está inflado com títulos de pessoas falecidas.",
      bullets: [
        "A inversão biológica: quanto mais velho o eleitor, maior o aumento de comparecimento entre turnos — em 2014, 2018 e 2022.",
        "6,6 vezes mais centenários no TSE do que o Censo contou vivos.",
        "O TSE cancela 56% dos títulos de quem morre. O resto acumula.",
      ],
      cta: "Explorar o cadastro",
    },
    codigo: {
      title: "63 gaps no kit de verificação",
      desc: "Lemos as 2.852 linhas dos scripts e especificações que o TSE distribui para o cidadão conferir as urnas. Encontramos 63 falhas, todas na mesma direção.",
      bullets: [
        "A ferramenta de QR Code nunca funciona — e engole o erro em silêncio.",
        "Metade das assinaturas usa um algoritmo proprietário que ninguém de fora verifica.",
        "Em 2022, a chave que “verificava” o BU vinha dentro do próprio BU.",
      ],
      cta: "Explorar o código",
    },
  },
  comoLer: {
    eyebrow: "Como ler esta auditoria",
    title: "Três regras que valem para cada afirmação deste site",
    cols: [
      {
        title: "Fonte antes de claim",
        body: "Todo número vem com tier, fonte, data e link. T0 é fonte primária oficial com metodologia publicada. T3 é opinião — nunca entra como fato.",
      },
      {
        title: "Metodologia antes de comentário",
        body: "Não comentamos um índice sem antes ler a nota metodológica oficial por inteiro. Resumo de imprensa não vale como fonte.",
      },
      {
        title: "“Ainda não achei o gap” ≠ “não existe gap”",
        body: "Enquanto uma frente não está fechada ponto a ponto na fonte primária, o estado correto é “ainda não encontrei” — nunca “está tudo certo”, nunca “é impossível”.",
      },
    ],
    tiers: [
      { k: "T0", label: "fonte primária oficial" },
      { k: "T1", label: "análise acadêmica revisada" },
      { k: "T2", label: "jornalismo de dados com fonte" },
      { k: "T3", label: "opinião — só como hipótese" },
    ],
  },
  naoProvamos: {
    eyebrow: "Os limites — honestos e precisos",
    title: "O que falta provar — e por que só o governo pode fechar",
    items: [
      "Nenhum caso individual de voto em nome de pessoa falecida — com dados públicos. O triângulo CPF × óbito × comparecimento é protegido por lei. Mas o governo tem as três bases e pode fechar em menos de uma hora.",
      "Nenhuma prova de intenção. Cadastro inflado e falhas técnicas podem ser incompetência, não manipulação deliberada. Ambas exigem resposta.",
      "Nenhuma atribuição a candidato ou partido. Ratear votos excedentes pela votação municipal é artefato estatístico, não identificação de destino.",
      "Os excessos municipais se diluem quando agregados por estado — por isso os tratamos como o sinal mais fraco, e apoiamos a prova nos pilares que resistem.",
    ],
    link: "Ver o que está provado",
  },
};

const en: typeof pt = {
  meta: {
    title: "Auditing the Ballot Boxes",
    description:
      "An independent audit, built on official data, of Brazil's voter registry and of the public verification kit for electronic voting machines.",
  },
  hero: {
    eyebrow: "Independent audit · official data",
    h1a: "The voter registry holds hundreds of thousands of the dead.",
    h1b: "The kit meant to reveal it does not work.",
    lead: "We cross-checked the Census, death records and the electoral court's own numbers: the pattern is structural, worsens every election and survives a control group. Then we read, line by line, the tools the TSE hands citizens to verify the voting machines.",
    ctaCadastro: "See the phantom registry",
    ctaCodigo: "See the 63 gaps in the code",
    counterUnit: "centenarians",
    counterA: "counted alive by IBGE · 2022 Census",
    counterB: "registered as voters by the TSE · 2026",
    replay: "Replay",
  },
  bento: {
    eyebrow: "Six numbers",
    title: "All from primary sources. None of them ours.",
    lead: "Every figure below comes from an official file anyone can download. Our contribution was to cross them.",
    centenarios: "centenarians registered by the TSE in 2026. The 2022 Census counted 37,814 alive.",
    razao: "more centenarians in the voter registry than IBGE found door to door.",
    gap: "registrations of deceased voters the TSE fails to cancel each year (44% of voter deaths).",
    controle: "is how much the round-1→round-2 turnout increase of voters 70+ exceeds that of ages 21–69.",
    municipios: "municipalities where more people voted than the total population estimated by IBGE.",
    gaps: "flaws in the official verification kit for voting machines. Every one of them weakens verification.",
    sources: "IBGE 2022 Census (SIDRA 9514) · TSE turnout by profile 2014–2026 · TSE cancellations 2022 · DATASUS/SIM · BWEB 2026 · TSE kit v1/v2.0/v2.1",
  },
  eixos: {
    eyebrow: "Two tracks",
    title: "Who is in the registry. And who gets to verify.",
    cadastro: {
      title: "The phantom registry",
      desc: "Five pillars of evidence, strongest to weakest, that the voter registry is inflated with registrations of deceased people.",
      bullets: [
        "The biological inversion: the older the voter, the larger the turnout increase between rounds — in 2014, 2018 and 2022.",
        "6.6 times more centenarians in the TSE registry than the Census counted alive.",
        "The TSE cancels 56% of the registrations of those who die. The rest accumulates.",
      ],
      cta: "Explore the registry",
    },
    codigo: {
      title: "63 gaps in the verification kit",
      desc: "We read all 2,852 lines of the scripts and specifications the TSE distributes for citizens to check the machines. We found 63 flaws, all pointing the same way.",
      bullets: [
        "The QR Code tool never works — and swallows the error silently.",
        "Half of the signatures use a proprietary algorithm nobody outside can verify.",
        "In 2022, the key that “verified” the BU came inside the BU itself.",
      ],
      cta: "Explore the code",
    },
  },
  comoLer: {
    eyebrow: "How to read this audit",
    title: "Three rules that apply to every claim on this site",
    cols: [
      {
        title: "Source before claim",
        body: "Every number carries a tier, a source, a date and a link. T0 is a primary official source with published methodology. T3 is opinion — it never enters as fact.",
      },
      {
        title: "Methodology before commentary",
        body: "We do not comment on an index without first reading the official methodological note in full. A press summary does not count as a source.",
      },
      {
        title: "“Not found yet” ≠ “does not exist”",
        body: "Until a line of inquiry is closed point by point against the primary source, the correct state is “not found yet” — never “all is fine”, never “impossible”.",
      },
    ],
    tiers: [
      { k: "T0", label: "primary official source" },
      { k: "T1", label: "peer-reviewed analysis" },
      { k: "T2", label: "data journalism with sources" },
      { k: "T3", label: "opinion — hypothesis only" },
    ],
  },
  naoProvamos: {
    eyebrow: "The limits — honest and precise",
    title: "What is left to prove — and why only the government can close it",
    items: [
      "No individual case of a vote cast in a dead person's name — with public data. The CPF × death × turnout triangle is protected by law. But the government holds all three databases and can close it in under an hour.",
      "No proof of intent. An inflated registry and technical flaws may be incompetence, not deliberate manipulation. Both demand an answer.",
      "No attribution to any candidate or party. Apportioning excess votes by municipal results is a statistical artefact, not an identification of where votes went.",
      "The municipal excesses dilute when aggregated by state — so we treat them as the weakest signal, and rest the proof on the pillars that hold.",
    ],
    link: "See what is proven",
  },
};

export const home = { pt, en };
