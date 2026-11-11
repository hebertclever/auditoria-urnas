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
    h1b: "E a conferência oficial das urnas tem 63 falhas.",
    lead: "Cruzamos o Censo, os registros de óbito e os próprios números do TSE: o cadastro tem quase 8 vezes mais centenários do que o Brasil — e ganhou 113 mil deles em quatro anos. Depois lemos, linha a linha, os programas que o TSE publica para conferir os arquivos das urnas. Numa eleição não pode haver erro; aqui estão os que qualquer pessoa pode conferir.",
    ctaCadastro: "Ver o cadastro fantasma",
    ctaCodigo: "Ver os 63 gaps no código",
    counterUnit: "centenários",
    counterA: "contados vivos pelo IBGE · Censo 2022",
    counterB: "registrados como eleitores pelo TSE · 2026",
    counterRatio: "títulos de eleitor para cada centenário vivo",
    replay: "Repetir",
  },
  bento: {
    eyebrow: "Seis números",
    title: "Todos de fonte primária. Nenhum nosso.",
    lead: "Cada número abaixo sai de um arquivo oficial que qualquer pessoa pode baixar. Nossa contribuição foi cruzá-los.",
    centenarios: "centenários registrados pelo TSE em 2026. O Censo 2022 contou 37.814 vivos.",
    razao: "mais centenários no cadastro eleitoral do que o IBGE encontrou porta a porta.",
    gap: "mortes de eleitores sem baixa por óbito no mesmo ano (2022) — 44% do total.",
    controle: "eleitores de 70+ a mais no 2º turno de 2022 do que no 1º (+10%). As faixas de 21 a 69 anos ficaram paradas.",
    municipios: "municípios onde votaram mais pessoas do que a população total estimada pelo IBGE.",
    gaps: "falhas no material oficial de conferência das urnas — 8 delas críticas.",
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
        "7,9 vezes mais centenários no TSE do que o Censo contou vivos.",
        "Em 2022, o TSE deu baixa por óbito em 56% das mortes de eleitores.",
      ],
      cta: "Explorar o cadastro",
    },
    codigo: {
      title: "63 gaps no kit de verificação",
      desc: "Lemos as 2.852 linhas dos scripts e especificações que o TSE distribui para o cidadão conferir as urnas. Encontramos 63 falhas — 8 delas críticas.",
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
    eyebrow: "O próximo passo",
    title: "O que falta saber — e quem pode responder",
    items: [
      "Algum título de morto registrou voto? Os dados públicos não mostram: o vínculo CPF × óbito × comparecimento é sigiloso. O governo tem as três bases e responde em menos de uma hora.",
      "Foi descuido ou foi fraude? Cadastro desatualizado e programa com falhas podem ser as duas coisas. Fraude é outro passo: exige investigação — e não se atribui a ninguém sem prova.",
      "As urnas usadas fizeram o que deviam? Só o exame de uma amostra delas, depois da votação, responde. O canal legal existe e o prazo vai até janeiro de 2027.",
    ],
    link: "Ver o que está provado e o que exigir",
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
    h1b: "And the official checking kit has 63 flaws.",
    lead: "We cross-checked the Census, death records and the electoral court's own numbers: the registry holds almost 8 times more centenarians than Brazil has — and gained 113,000 of them in four years. Then we read, line by line, the scripts the TSE publishes for checking the machines' files. An election cannot contain errors; here are the ones anyone can check.",
    ctaCadastro: "See the phantom registry",
    ctaCodigo: "See the 63 gaps in the code",
    counterUnit: "centenarians",
    counterA: "counted alive by IBGE · 2022 Census",
    counterB: "registered as voters by the TSE · 2026",
    counterRatio: "voter registrations for every living centenarian",
    replay: "Replay",
  },
  bento: {
    eyebrow: "Six numbers",
    title: "All from primary sources. None of them ours.",
    lead: "Every figure below comes from an official file anyone can download. Our contribution was to cross them.",
    centenarios: "centenarians registered by the TSE in 2026. The 2022 Census counted 37,814 alive.",
    razao: "more centenarians in the voter registry than IBGE found door to door.",
    gap: "voter deaths with no death removal within the year (2022) — 44% of the total.",
    controle: "more voters aged 70+ in the 2022 runoff than in the first round (+10%). Ages 21 to 69 stood still.",
    municipios: "municipalities where more people voted than the total population estimated by IBGE.",
    gaps: "flaws in the official material for checking the machines — 8 of them critical.",
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
        "7.9 times more centenarians in the TSE registry than the Census counted alive.",
        "In 2022 the TSE recorded a death removal for 56% of the voters who died.",
      ],
      cta: "Explore the registry",
    },
    codigo: {
      title: "63 gaps in the verification kit",
      desc: "We read all 2,852 lines of the scripts and specifications the TSE distributes for citizens to check the machines. We found 63 flaws — 8 of them critical.",
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
    eyebrow: "The next step",
    title: "What remains to be known — and who can answer",
    items: [
      "Did any dead person's registration record a vote? Public data cannot show it: the ID × death × turnout link is confidential. The government holds all three databases and can answer in under an hour.",
      "Was it carelessness or fraud? An outdated registry and flawed scripts could be either. Fraud is another step: it takes an investigation — and is attributed to no one without proof.",
      "Did the machines that were used do what they should? Only examining a sample of them, after the vote, can tell. The legal channel exists and the deadline runs until January 2027.",
    ],
    link: "See what is proven and what to demand",
  },
};

export const home = { pt, en };
