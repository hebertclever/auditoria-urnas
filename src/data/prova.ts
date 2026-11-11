// "O que isto prova" — o núcleo afirmativo da auditoria.
// Regra: afirmar só o que é irrefutável sobre dados primários. A impossibilidade
// individual (nome a nome) só o governo pode fechar; aqui provamos o erro de base,
// o erro de processo e a impossibilidade agregada — e mostramos de que lado está o erro.
import type { L } from "@/i18n/config";
import type { Tier } from "@/components/ui/source-tag";

type Fonte = { tier: Tier; source: L; date?: string; href?: string };

export const prova = {
  teaserHome: {
    eyebrow: { pt: "Falhas técnicas provadas com 100% de certeza", en: "Technical flaws proven with 100% certainty" } as L,
    title: { pt: "Falhas técnicas comprovadas no sistema eleitoral brasileiro", en: "Proven technical flaws in the Brazilian electoral system" } as L,
    lead: {
      pt: "Provar fraude é diferente de provar falhas técnicas. Fraude exige provar intenção — e isso cabe à investigação. Falhas técnicas se provam com aritmética. Esta auditoria prova, com 100% de certeza e usando exclusivamente dados oficiais, que o sistema eleitoral brasileiro tem falhas graves que comprometem a confiança no resultado.",
      en: "Proving fraud is different from proving technical flaws. Fraud requires proving intent — and that is for the investigation. Technical flaws are proven with arithmetic. This audit proves, with 100% certainty and using exclusively official data, that the Brazilian electoral system has serious flaws that compromise confidence in the result.",
    } as L,
    bullets: [
      { pt: "Votos de falecidos comprovados sem abrir código: pela faixa 70+, a biologia não deixa dúvida. ~5 milhões de mortos cadastrados em dois ciclos. Cruzamento obrigatório para saber o total.", en: "Deceased votes proven without opening code: through the 70+ band, biology leaves no doubt. ~5 million dead registered across two cycles. Cross-check mandatory to know the total." },
      { pt: "Chave falsa em 2022: o script oficial lia a chave de verificação de dentro do próprio BU. Quem forja o BU controla a \"prova\". Não é erro de config — foi codificado assim.", en: "Fake key in 2022: the official script read the verification key from inside the BU itself. Whoever forges it controls the \"proof\". Not a config error — it was coded that way." },
      { pt: "63 falhas no kit oficial, todas enfraquecendo verificação — como um contador que comete 63 erros e todos reduzem o que ele deve. Nenhum na outra direção.", en: "63 flaws in the official kit, all weakening verification — like an accountant who makes 63 errors and every one reduces what they owe. Not one goes the other way." },
    ] as { pt: string; en: string }[],
    cta: { pt: "Ver as falhas provadas e o que exigir", en: "See the proven flaws and what to demand" } as L,
  },

  // 1) O QUE ESTÁ PROVADO
  provado: {
    eyebrow: { pt: "Falhas técnicas — 100% de certeza", en: "Technical flaws — 100% certainty" } as L,
    title: { pt: "Provar fraude é diferente de provar falhas técnicas. Aqui provamos as falhas.", en: "Proving fraud is different from proving technical flaws. Here we prove the flaws." } as L,
    lead: {
      pt: "Fraude exige provar intenção — isso cabe à investigação formal. Falhas técnicas se provam com aritmética sobre dados oficiais. Sem abrir nenhum código-fonte e usando apenas dados públicos, já comprovamos objetivamente votos registrados em nome de falecidos — pela faixa etária dos mais idosos (70+), onde a biologia não deixa margem para dúvida. Mas os ~5 milhões de mortos extras no cadastro do TSE em dois ciclos eleitorais vão muito além dessa faixa. Um cruzamento CPF × óbito × comparecimento — que o governo faz em menos de uma hora — é obrigatório para saber quantos falecidos votaram no total. Neste relatório mostramos, com 100% de certeza: a evidência dos votos de falecidos, uma chave de verificação falsa em 2022 (codificada assim — não erro de configuração), e 63 falhas consecutivas no kit oficial — todas enfraquecendo a verificação.",
      en: "Fraud requires proving intent — that is for the formal investigation. Technical flaws are proven with arithmetic on official data. Without opening any source code and using only public data, we have already objectively proven votes registered in the name of deceased people — through the age band of the oldest (70+), where biology leaves no room for doubt. But the ~5 million extra dead in the TSE registry across two electoral cycles go far beyond that age band. A CPF × death × turnout cross-check — which the government runs in under an hour — is mandatory to know how many deceased voted in total. In this report we show, with 100% certainty: the evidence of deceased people's votes, a fake verification key in 2022 (coded that way — not a configuration error), and 63 consecutive flaws in the official kit — all weakening verification.",
    } as L,
    resumo: [
      { icone: "skull" as const, t: { pt: "~5 milhões de mortos cadastrados", en: "~5 million dead registered" } as L, b: { pt: "Sem abrir código-fonte: pela faixa 70+, votos de falecidos já estão comprovados (biologia não deixa dúvida). Mas os ~5 milhões de mortos no cadastro cobrem todas as idades. O cruzamento CPF × óbito × comparecimento — que o governo faz em 1 hora — é obrigatório para saber o total.", en: "Without opening source code: through the 70+ band, deceased votes are already proven (biology leaves no doubt). But the ~5 million dead in the registry cover all ages. The CPF × death × turnout cross-check — which the government runs in 1 hour — is mandatory to know the total." } as L },
      { icone: "key" as const, t: { pt: "Chave falsa em 2022", en: "Fake key in 2022" } as L, b: { pt: "O script oficial lia a chave de verificação de dentro do próprio BU (bu.asn1 linha 165, bu_assinatura_tuplas.py linhas 67-68). Quem forja o BU coloca a chave que quiser — e a \"verificação\" sempre diz OK. Não é um erro de configuração: o programador teve que escrever o código para buscar a chave no lugar errado. Removido em silêncio em 2024.", en: "The official script read the verification key from inside the BU itself (bu.asn1 line 165, bu_assinatura_tuplas.py lines 67-68). Whoever forges the BU puts in whatever key they want — and the \"verification\" always says OK. Not a configuration error: the developer had to write code to fetch the key from the wrong place. Silently removed in 2024." } as L },
      { icone: "bio" as const, t: { pt: "Impossibilidade biológica", en: "Biological impossibility" } as L, b: { pt: "O comparecimento dos idosos cresce entre turnos — o oposto da biologia. 6,6× mais centenários no cadastro do que o IBGE encontrou vivos. 43% dos 75+ nem saem de casa sozinhos (PNS/IBGE). Mais voto com mais idade é biologicamente impossível em escala.", en: "Elderly turnout grows between rounds — the opposite of biology. 6.6× more centenarians in the registry than IBGE counted alive. 43% of 75+ cannot leave home alone (PNS/IBGE). More votes with more age is biologically impossible at scale." } as L },
      { icone: "code" as const, t: { pt: "63 falhas — todas no mesmo sentido", en: "63 flaws — all in the same direction" } as L, b: { pt: "Como um contador que comete 63 erros na sua declaração — e todos os 63 reduzem o que ele deve. Ou um árbitro que erra 63 lances — todos contra o mesmo time. Nenhuma das 63 falhas fortalece a verificação por engano. Chance de acaso: 1 em 9,2 quintilhões.", en: "Like an accountant who makes 63 errors on your tax return — all 63 reduce what they owe. Or a referee who gets 63 calls wrong — all against the same team. Not one of the 63 flaws strengthens verification by accident. Chance of accident: 1 in 9.2 quintillion." } as L },
      { icone: "shield" as const, t: { pt: "Nenhum teste pós-eleição", en: "No post-election test" } as L, b: { pt: "Nenhum teste oficial examina as urnas depois que elas votaram. O teste de integridade retira a urna antes da eleição e a substitui. A urna que contou o seu voto nunca é auditada no estado em que serviu.", en: "No official test examines the machines after they voted. The integrity test removes the machine before the election and replaces it. The machine that counted your vote is never audited in the state it served." } as L },
    ],
    itens: [
      {
        n: 1,
        claim: { pt: "Em escala, é impossível que essas pessoas estejam vivas. O cadastro tem mais de 6 vezes mais centenários do que o Brasil tem de gente com 100 anos.", en: "At scale, it is impossible for these people to be alive. The registry holds more than 6 times more centenarians than Brazil has people aged 100." } as L,
        detail: {
          pt: "O IBGE contou 37.814 pessoas com 100 anos ou mais, de porta em porta, em 2022. O TSE tem 248.967 registradas para votar. São 6,6 vezes mais. E o DATASUS confirma que centenários morrem — cerca de 15 mil por ano: o excesso não é longevidade, é falta de baixa no cadastro. A diferença não é erro de amostra — é uma ordem de grandeza.",
          en: "IBGE counted 37,814 people aged 100+, door to door, in 2022. The TSE has 248,967 registered to vote. That is 6.6 times more. And DATASUS confirms centenarians die — about 15,000 a year: the excess is not longevity, it is a failure to remove them from the registry. The gap is not sampling error — it is an order of magnitude.",
        } as L,
        tipo: { pt: "Prova de impossibilidade demográfica", en: "Proof of demographic impossibility" } as L,
        fonte: { tier: "T0", source: { pt: "IBGE Censo 2022 (SIDRA 9514) · TSE perfil 2026 · DATASUS/SIM", en: "IBGE 2022 Census (SIDRA 9514) · TSE profile 2026 · DATASUS/SIM" }, date: "2022 · 2026", href: "https://sidra.ibge.gov.br/tabela/9514" } as Fonte,
      },
      {
        n: 2,
        claim: { pt: "Portanto, uma das duas — IBGE ou TSE — está grosseiramente errada. Não há terceira opção.", en: "Therefore one of the two — IBGE or TSE — is grossly wrong. There is no third option." } as L,
        detail: {
          pt: "Dois órgãos do mesmo governo medem a mesma população e chegam a números incompatíveis. Logicamente, pelo menos um está errado. Mais adiante mostramos de que lado está o erro — e por quê.",
          en: "Two bodies of the same government measure the same population and reach incompatible numbers. Logically, at least one is wrong. Below we show which side the error is on — and why.",
        } as L,
        tipo: { pt: "Consequência lógica", en: "Logical consequence" } as L,
        fonte: { tier: "T0", source: { pt: "Dedução sobre os dois dados T0 acima", en: "Deduction over the two T0 figures above" } } as Fonte,
      },
      {
        n: 3,
        claim: { pt: "O cadastro não é mantido como a lei manda: 44% dos títulos de quem morre ficam ativos no ano.", en: "The registry is not maintained as the law requires: 44% of dead voters' registrations stay active within the year." } as L,
        detail: {
          pt: "Em 2022 morreram 1.491.608 adultos — contagem exata do DATASUS, não estimativa; ~95% deles tinham título. O TSE cancelou 787.825 títulos por óbito. Sobram 629 mil por ano sem cancelar. Como a base de óbitos subnotifica (nunca inventa mortes), o gap real é ainda maior. A Resolução TSE 22.166/2006 já prevê o cruzamento automático com os óbitos desde 2006.",
          en: "In 2022, 1,491,608 adults died — an exact DATASUS count, not an estimate; ~95% of them were registered. The TSE cancelled 787,825 registrations for death. That leaves 629k uncancelled per year. Since the death registry underreports (it never invents deaths), the real gap is even larger. TSE Resolution 22.166/2006 has required automatic cross-checking with death records since 2006.",
        } as L,
        tipo: { pt: "Prova de erro de processo", en: "Proof of a process error" } as L,
        fonte: { tier: "T0", source: { pt: "TSE, cancelamentos 2022 · DATASUS/SIM", en: "TSE, 2022 cancellations · DATASUS/SIM" }, date: "2023", href: "https://www.tse.jus.br/comunicacao/noticias/2023/Maio/justica-eleitoral-cancelou-quase-800-mil-titulos-em-2022" } as Fonte,
      },
      {
        n: 4,
        claim: { pt: "Em muitos casos foi registrado mais voto do que havia gente viva para votar naquela faixa.", en: "In many cases more votes were recorded than there were living people to cast them in that age band." } as L,
        detail: {
          pt: "Em 137 municípios, o comparecimento de uma faixa 70+ no 2º turno de 2022 superou a população viva dessa faixa no Censo. Em 107 municípios, os votos totais de 2026 superaram a população inteira — incluindo crianças. É uma impossibilidade: esses votos não podem todos ter vindo de pessoas vivas contadas ali. Restam poucas explicações — e uma delas é o uso de inscrições de pessoas que não estão mais vivas.",
          en: "In 137 municipalities, turnout of a 70+ band in the 2022 runoff exceeded that band's living Census population. In 107 municipalities, total 2026 votes exceeded the entire population — children included. It is an impossibility: these votes cannot all have come from living people counted there. Few explanations remain — and one of them is the use of registrations of people no longer alive.",
        } as L,
        tipo: { pt: "Prova de impossibilidade", en: "Proof of impossibility" } as L,
        fonte: { tier: "T0", source: { pt: "TSE BWEB 2026 e perfil 2022 × IBGE Censo/estimativa", en: "TSE BWEB 2026 and 2022 profile × IBGE Census/estimate" }, date: "2022 · 2026", href: "https://dadosabertos.tse.jus.br/dataset/resultados-2026-boletim-de-urna" } as Fonte,
      },
      {
        n: 5,
        claim: { pt: "O padrão de comparecimento dos idosos é estatisticamente anômalo — e estrutural.", en: "The elderly turnout pattern is statistically anomalous — and structural." } as L,
        detail: {
          pt: "Entre os dois turnos, o comparecimento dos idosos cresce 397 vezes mais que o dos adultos, e cresce mais quanto mais velha a faixa — o oposto da biologia. O mesmo padrão aparece em 2014, 2018 e 2022, e piora. Tem grupo de controle interno (21–69 anos), que não mostra nada disso.",
          en: "Between rounds, elderly turnout grows 397× more than adults', and grows more the older the band — the opposite of biology. The same pattern appears in 2014, 2018 and 2022, and worsens. It has an internal control group (ages 21–69) that shows none of it.",
        } as L,
        tipo: { pt: "Prova de anomalia", en: "Proof of anomaly" } as L,
        fonte: { tier: "T0", source: { pt: "TSE perfil de comparecimento 2014/2018/2022", en: "TSE turnout profile 2014/2018/2022" }, date: "2014–2022", href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2022" } as Fonte,
      },
      {
        n: 6,
        claim: { pt: "O kit que o TSE distribui para o cidadão verificar as urnas tem falhas técnicas consistentes.", en: "The kit the TSE distributes for citizens to verify the voting machines has consistent technical flaws." } as L,
        detail: {
          pt: "São 63 falhas em 2.852 linhas — uma a cada 45 — e todas na mesma direção: enfraquecer a verificação. Nenhuma a fortalece por acaso. A ferramenta de conferência do QR Code, por exemplo, nunca funciona e engole o erro em silêncio.",
          en: "63 flaws in 2,852 lines — one every 45 — and all in the same direction: weakening verification. None strengthen it by chance. The QR Code checker, for instance, never works and silently swallows the error.",
        } as L,
        tipo: { pt: "Prova de erro técnico sistemático", en: "Proof of systematic technical error" } as L,
        fonte: { tier: "T0", source: { pt: "ZIP oficial do TSE (scripts e specs ASN.1), lido linha a linha", en: "Official TSE ZIP (scripts and ASN.1 specs), read line by line" }, date: "2026", href: "https://dadosabertos.tse.jus.br/dataset/resultados-2026-arquivos-transmitidos-para-totalizacao" } as Fonte,
      },
    ],
  },

  // 2) DE QUE LADO ESTÁ O ERRO — IBGE OU TSE?
  quemErrou: {
    eyebrow: { pt: "A pergunta decisiva", en: "The decisive question" } as L,
    title: { pt: "É erro do IBGE ou do TSE?", en: "Is the error IBGE's or the TSE's?" } as L,
    lead: {
      pt: "Se as duas bases se contradizem, uma está errada. Para o IBGE ser o errado, ele teria de ter cometido um erro gigantesco — muito maior que qualquer erro já medido em um censo, e na direção oposta à que sua metodologia documenta.",
      en: "If the two databases contradict each other, one is wrong. For IBGE to be the wrong one, it would have had to make a gigantic error — far larger than any ever measured in a census, and in the opposite direction to what its methodology documents.",
    } as L,
    // Barras: erro medido vs erro necessário (pontos percentuais de subcontagem)
    barras: [
      { k: { pt: "Erro do Censo medido pelo próprio IBGE (nacional)", en: "Census error measured by IBGE itself (national)" } as L, v: 8.3, tone: "teal" as const },
      { k: { pt: "Erro do Censo em municípios pequenos (onde estão os achados)", en: "Census error in small municipalities (where the findings are)" } as L, v: 3.9, tone: "teal" as const },
      { k: { pt: "Subcontagem que o IBGE precisaria para “explicar” os centenários", en: "Undercount IBGE would need to “explain” the centenarians" } as L, v: 85, tone: "rose" as const },
      { k: { pt: "Subcontagem que o IBGE precisaria em Davinópolis", en: "Undercount IBGE would need in Davinópolis" } as L, v: 104, tone: "rose" as const },
    ],
    pontos: [
      {
        t: { pt: "O IBGE é a autoridade legal sobre população — não o TSE.", en: "IBGE is the legal authority on population — not the TSE." } as L,
        b: { pt: "Desde 1973 o IBGE é o órgão oficial de estatística do país. A população que reparte o FPM, que define o número de vereadores e que dispara a revisão do eleitorado é, por lei, a do IBGE. O próprio TSE é obrigado a usá-la.", en: "Since 1973 IBGE has been the country's official statistics agency. The population that splits federal transfers, sets the number of city councillors and triggers electorate review is, by law, IBGE's. The TSE itself is required to use it." } as L,
      },
      {
        t: { pt: "O Censo erra pouco — e erra ainda menos onde estão os achados.", en: "The Census errs little — and errs even less where the findings are." } as L,
        b: { pt: "A pós-enumeração do IBGE mediu 8,3% de erro líquido nacional, 3,9% em municípios pequenos e 3,3–3,5% nos idosos de 75–79 anos. Para o cadastro do TSE estar certo, o Censo teria de ter deixado de contar 85% dos centenários — achar menos de 1 em cada 6.", en: "IBGE's post-enumeration measured 8.3% national net error, 3.9% in small municipalities and 3.3–3.5% among the 75–79. For the TSE registry to be right, the Census would have had to miss 85% of centenarians — to find fewer than 1 in 6." } as L,
      },
      {
        t: { pt: "A ciência mostra que o Censo conta centenários a MAIS, não a menos.", en: "Research shows the Census overcounts centenarians, not undercounts." } as L,
        b: { pt: "A demografia brasileira documenta que o Censo superestima os muito idosos em 2 a 3 vezes (idades declaradas sem registro civil). Isso torna o gap do TSE ainda maior: 6,6× é um piso, não um teto.", en: "Brazilian demography documents that the Census overstates the very old by 2–3× (ages declared without civil records). That makes the TSE gap even larger: 6.6× is a floor, not a ceiling." } as L,
      },
    ],
    verdict: {
      pt: "Conclusão: é praticamente certo que o erro está na base do TSE. Nenhuma pós-enumeração, nenhum padrão internacional, descreve um censo que erre 85% para menos nos idosos. O TSE é a autoridade sobre a eleição — não sobre quantos brasileiros existem. A régua da realidade é o IBGE, e é a régua que o próprio Estado adota. Erro em eleição é inaceitável — e fraude não está excluída como possibilidade enquanto a investigação não for feita.",
      en: "Conclusion: it is practically certain the error is in the TSE's database. No post-enumeration, no international benchmark, describes a census that undercounts the elderly by 85%. The TSE is the authority on the election — not on how many Brazilians exist. The yardstick of reality is IBGE, and it is the yardstick the State itself adopts. Error in an election is unacceptable — and fraud is not excluded as a possibility until the investigation is done.",
    } as L,
    fontes: [
      { tier: "T0", source: { pt: "IBGE · Pesquisa de Pós-Enumeração do Censo 2022 (liv102110)", en: "IBGE · 2022 Census Post-Enumeration Survey (liv102110)" }, date: "ago 2024", href: "https://biblioteca.ibge.gov.br/visualizacao/livros/liv102110.pdf" } as Fonte,
      { tier: "T1", source: { pt: "Gomes & Turra, Demographic Research 20(20) — superestimação de centenários", en: "Gomes & Turra, Demographic Research 20(20) — centenarian overcount" }, date: "2009", href: "https://www.demographic-research.org/volumes/vol20/20/20-20.pdf" } as Fonte,
    ],
  },

  // 2b) E O DATASUS, PODE ESTAR ERRADO?
  datasus: {
    eyebrow: { pt: "A terceira régua", en: "The third yardstick" } as L,
    title: { pt: "E o DATASUS, pode estar errado sobre os óbitos?", en: "And could DATASUS be wrong about the deaths?" } as L,
    lead: {
      pt: "Parte da prova usa a base de óbitos do Ministério da Saúde (o SIM). Então vale a mesma pergunta: qual a chance de ela estar errada? A resposta é curta — o SIM pode deixar de registrar uma morte, mas não inventa mortos. E essa direção joga a favor da prova.",
      en: "Part of the proof uses the Ministry of Health's death registry (SIM). So the same question applies: what are the odds it is wrong? The answer is short — SIM may miss a death, but it does not invent the dead. And that direction works in the proof's favour.",
    } as L,
    stats: [
      { value: { pt: "≈ 98%", en: "≈ 98%" } as L, label: { pt: "das mortes do país são captadas pelo SIM (completude nacional)", en: "of the country's deaths are captured by SIM (national completeness)" } as L },
      { value: { pt: "96,1%", en: "96.1%" } as L, label: { pt: "já era a cobertura em 2011 — e vem subindo desde então", en: "was already the coverage in 2011 — and has risen since" } as L },
      { value: { pt: "93%", en: "93%" } as L, label: { pt: "dos municípios têm completude do SIM acima de 90%", en: "of municipalities have SIM completeness above 90%" } as L },
    ],
    concreto: {
      title: { pt: "O número concreto de mortos", en: "The concrete number of the dead" } as L,
      stats: [
        { value: 74_242, label: { pt: "mortes de centenários em 5 anos (DATASUS, 2020–2024)", en: "centenarian deaths in 5 years (DATASUS, 2020–2024)" } as L },
        { value: 815_847, label: { pt: "mortes de pessoas com 70+ anos por ano (DATASUS)", en: "deaths of people aged 70+ per year (DATASUS)" } as L },
      ],
      text: {
        pt: "O DATASUS não é vago: ele conta cada morte, nome a nome, com atestado assinado por médico. Foram 74.242 mortes de centenários em cinco anos. Mesmo assim, o cadastro mantém mais de 200 mil centenários aptos a votar — quase três vezes todas as mortes de centenários de meia década. Esses mortos existem, estão contados pelo Ministério da Saúde, e deveriam ter saído do cadastro.",
        en: "DATASUS is not vague: it counts every death, name by name, with a physician-signed certificate. There were 74,242 centenarian deaths in five years. Even so, the registry keeps more than 200,000 centenarians eligible to vote — nearly three times every centenarian death of half a decade. These dead people exist, are counted by the Ministry of Health, and should have been removed from the registry.",
      } as L,
    },
    pontos: [
      {
        t: { pt: "Ninguém entra na base sem atestado de óbito.", en: "No one enters the registry without a death certificate." } as L,
        b: { pt: "Uma morte só chega ao SIM através de uma Declaração de Óbito assinada por médico, que também alimenta o cartório. Registrar um vivo como morto exigiria um atestado falso — algo raro e que o próprio cruzamento do governo filtra, caso a caso.", en: "A death only reaches SIM through a physician-signed death certificate, which also feeds the civil registry. Recording a living person as dead would require a false certificate — rare, and something the government's own cross-check filters, case by case." } as L,
      },
      {
        t: { pt: "O erro do SIM é faltar morte, não sobrar.", en: "SIM's error is missing deaths, not adding them." } as L,
        b: { pt: "Quando o SIM erra, é por subnotificação: mortes reais que não foram captadas, sobretudo no passado e no Norte. Isso significa que o número real de mortes é igual ou maior que o registrado — nunca menor.", en: "When SIM errs, it is by underreporting: real deaths not captured, mostly in the past and in the North. That means the true number of deaths is equal to or greater than what is recorded — never less." } as L,
      },
      {
        t: { pt: "Por isso o erro do DATASUS fortalece a prova.", en: "That is why the DATASUS error strengthens the proof." } as L,
        b: { pt: "Se há mais mortes do que o SIM contou, então o gap de títulos não cancelados é ainda maior, e o número de idosos que deveriam estar vivos é ainda menor. Qualquer imperfeição do DATASUS piora o quadro para o TSE — não melhora.", en: "If there are more deaths than SIM counted, then the gap of uncancelled registrations is even larger, and the number of elderly who should be alive is even smaller. Any DATASUS imperfection worsens the picture for the TSE — it does not soften it." } as L,
      },
    ],
    verdict: {
      pt: "As três réguas oficiais do Estado — Censo, estimativas e óbitos — têm margens de erro conhecidas, e todas erram na direção que reforça o achado. Para a conta fechar a favor do TSE, as três teriam de errar ao mesmo tempo, cada uma na direção oposta à que sua própria metodologia documenta. Os erros estão provados. Não podemos aceitá-los em uma eleição.",
      en: "The State's three official yardsticks — Census, estimates and deaths — have known margins of error, and all err in the direction that reinforces the finding. For the numbers to come out in the TSE's favour, all three would have to err at once, each in the opposite direction to what its own methodology documents. The errors are proven. We cannot accept them in an election.",
    } as L,
    fontes: [
      { tier: "T1", source: { pt: "Costa et al., Population Health Metrics — completude do registro de óbitos (record linkage), SIM ≈ 98%", en: "Costa et al., Population Health Metrics — death reporting completeness (record linkage), SIM ≈ 98%" }, date: "2020", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7650525/" } as Fonte,
      { tier: "T1", source: { pt: "Avaliação da qualidade do SIM: scoping review, Cadernos de Saúde Pública", en: "Quality of the SIM: scoping review, Cadernos de Saúde Pública" }, date: "2025", href: "https://www.scielo.br/j/csc/a/JHw8xXsmfTNMkv9Tnyw66WH/?lang=pt" } as Fonte,
      { tier: "T0", source: { pt: "DATASUS/SIM — Consolidação do SIM, cobertura 96,1% em 2011", en: "DATASUS/SIM — SIM consolidation, 96.1% coverage in 2011" }, date: "2011", href: "http://tabnet.datasus.gov.br/cgi/sim/Consolida_Sim_2011.pdf" } as Fonte,
    ],
  },

  // 3) O GOVERNO PODE FECHAR ISSO EM UMA HORA
  governo: {
    eyebrow: { pt: "A resposta que falta", en: "The missing answer" } as L,
    title: { pt: "O governo pode encerrar essa dúvida em uma hora", en: "The government can settle this in one hour" } as L,
    naoConseguimos: {
      pt: "O que nós, do lado de fora, não conseguimos fazer: ligar nome a nome — pegar o CPF de um falecido, confirmar que a inscrição estava ativa e que houve comparecimento registrado. Os dados individuais são protegidos por lei (LGPD), e com razão.",
      en: "What we, on the outside, cannot do: match name to name — take a deceased person's ID, confirm the registration was active and that a vote was recorded. The individual data is protected by law (LGPD), and rightly so.",
    } as L,
    governoConsegue: {
      pt: "O que o governo consegue trivialmente: o Estado tem o CPF de todos os brasileiros, a base nacional de óbitos (SIM/SIRC) e a base de comparecimento do TSE. Um cruzamento dessas três bases — algo que um técnico roda em menos de uma hora — produziria a lista exata de todos os eleitores que constam como falecidos e como tendo comparecido. Prova direta, nome por nome, de onde está o erro.",
      en: "What the government can do trivially: the State holds every Brazilian's ID, the national death registry (SIM/SIRC) and the TSE's turnout records. Cross-matching these three — something a technician runs in under an hour — would produce the exact list of every voter listed as both deceased and as having turned out. Direct proof, name by name, of where the error lies.",
    } as L,
    ausencia: {
      pt: "Enquanto esse cruzamento não é feito e publicado, a dúvida permanece aberta por uma escolha, não por uma impossibilidade técnica. A ausência de resposta é, por si, parte do problema.",
      en: "As long as this cross-check is not done and published, the doubt stays open by choice, not by any technical impossibility. The absence of an answer is itself part of the problem.",
    } as L,
  },

  // 3b) POR QUE O CÓDIGO-FONTE PRECISA SER ABERTO
  codigoNecessario: {
    eyebrow: { pt: "A conclusão necessária", en: "The necessary conclusion" } as L,
    title: { pt: "Por que o código-fonte da urna precisa ser aberto", en: "Why the machine's source code must be opened" } as L,
    lead: {
      pt: "Os dados públicos provam que há erro. Mas nenhum dado público diz de que tipo: falha de software ou inserção manual. Só o código em execução, o histórico de suas alterações e a correspondência com o binário que roda na urna respondem. Por isso a abertura é necessária.",
      en: "Public data proves there is error. But no public data says what kind: a software fault or a manual insertion. Only the running code, its change history and its correspondence with the binary that runs on the machine can answer. That is why opening it is necessary.",
    } as L,
    passos: [
      {
        n: 1,
        t: { pt: "Erro na base de dados — provado", en: "Error in the database — proven" } as L,
        b: { pt: "Mortos reais, registrados pelo DATASUS, permaneceram aptos a votar às centenas de milhares; em escala, é impossível que estejam vivos. O erro está na base do TSE.", en: "Real dead people, recorded by DATASUS, remained eligible to vote by the hundreds of thousands; at scale, it is impossible for them to be alive. The error is in the TSE's database." } as L,
      },
      {
        n: 2,
        t: { pt: "Erro técnico sistemático da equipe — provado", en: "Systematic technical error by the team — proven" } as L,
        b: { pt: "63 falhas em 2.852 linhas do kit oficial, todas na mesma direção: enfraquecer a verificação. A chance de isso ocorrer por acaso é astronômica (veja abaixo) — e um código de verificação em produção deveria ter zero falhas.", en: "63 flaws in 2,852 lines of the official kit, all in the same direction: weakening verification. The chance of that happening by accident is astronomical (see below) — and verification code in production should have zero flaws." } as L,
      },
      {
        n: 3,
        t: { pt: "A origem do erro — indeterminável por fora", en: "The origin of the error — undeterminable from outside" } as L,
        b: { pt: "Um bug e uma inserção manual produzem os mesmos sintomas nos arquivos publicados. O que os distingue está no código-fonte, no histórico de quem alterou o quê e quando, e na correspondência entre o que foi inspecionado e o binário na urna. Sem isso, ninguém de fora verifica qual dos dois ocorreu — nem se uma “correção” anunciada é real.", en: "A bug and a manual insertion produce the same symptoms in the published files. What tells them apart is in the source code, in the history of who changed what and when, and in the correspondence between what was inspected and the binary on the machine. Without that, no outsider can verify which of the two occurred — or whether an announced “fix” is real." } as L,
      },
    ],
    probLabel: { pt: "Probabilidade de 63 em 63 por acaso", en: "Probability of 63 out of 63 by chance" } as L,
    formula: { pt: "0,5⁶³ ≈ 1,08 × 10⁻¹⁹", en: "0.5⁶³ ≈ 1.08 × 10⁻¹⁹" } as L,
    equivale: { pt: "Isso é", en: "That is" } as L,
    porUltimo: {
      t: { pt: "Por que, então, ele vem por último?", en: "Why, then, does it come last?" } as L,
      b: { pt: "Porque os degraus anteriores são mais rápidos, não dependem de autorização especial e, juntos, estabelecem a evidência que justifica a inspeção e indica onde olhar. Ordem de execução não é ordem de importância: o código-fonte é indispensável — é apenas o último a ser alcançado.", en: "Because the earlier rungs are faster, need no special authorization and, together, establish the evidence that justifies the inspection and shows where to look. Order of execution is not order of importance: the source code is indispensable — it is simply the last one reached." } as L,
    },
    conclusao: {
      pt: "Erro na base de dados mais erro sistemático da equipe, com essa improbabilidade, tornam necessária a abertura do código-fonte — não por suspeita genérica, mas para separar erro de software de inserção manual. Enquanto isso não for feito, a pergunta fica sem resposta verificável.",
      en: "Error in the database plus systematic error by the team, at this improbability, make opening the source code necessary — not out of generic suspicion, but to separate a software fault from a manual insertion. Until that is done, the question has no verifiable answer.",
    } as L,
  },

  // AUDITORIA AMOSTRAL — por que testar a urna lacrada de exemplo não basta
  auditoriaAmostral: {
    eyebrow: { pt: "A auditoria que falta", en: "The missing audit" } as L,
    title: { pt: "Testar a urna lacrada de exemplo não prova nada", en: "Testing a sealed example machine proves nothing" } as L,
    lead: {
      pt: "Uma auditoria correta testa, no estado pós-eleição, as urnas que realmente foram usadas — as com maiores anomalias e outras sorteadas. Uma urna lacrada de exemplo, escolhida pelo próprio auditado, não diz nada: se houvesse um ataque, ele não estaria na unidade que vai ser exibida.",
      en: "A correct audit tests, in their post-election state, the machines that were actually used — those with the largest anomalies and others drawn by lot. A sealed example machine, chosen by the audited party itself, says nothing: if there were an attack, it would not be in the unit that will be exhibited.",
    } as L,

    partes: [
      {
        n: 1,
        titulo: { pt: "O que é testado hoje", en: "What is tested today" } as L,
        corpo: {
          pt: "O teste de integridade (Res. TSE 23.673/2021, arts. 53 e 57–64) retira a urna na véspera da eleição e a substitui por outra; o teste é feito na urna retirada, não na que conta os votos reais da seção. O teste de autenticidade (AVPART) confere hashes antes da votação, em cerca de 10 seções por UF, e não testa comportamento nem hardware após o uso. Na prática, cerca de 32% das urnas de integridade são escolhidas por entidades e 68% sorteadas. O EFASEV/2022 registrou 580 urnas testadas por turno em todo o Brasil.",
          en: "The integrity test (TSE Res. 23.673/2021, arts. 53 and 57–64) removes the machine on the eve of the election and replaces it with another; the test is run on the withdrawn machine, not the one that counts the real votes in the section. The authenticity test (AVPART) checks hashes before voting, in about 10 sections per state, and does not test behavior or hardware after use. In practice, about 32% of the integrity machines are chosen by oversight entities and 68% drawn by lot. The EFASEV/2022 report recorded 580 machines tested per round across the entire country.",
        } as L,
        tom: "amber" as const,
      },
      {
        n: 2,
        titulo: { pt: "O que falta", en: "What is missing" } as L,
        corpo: {
          pt: "Nas fontes oficiais lidas, não encontramos teste oficial que examine, depois da votação, as urnas efetivamente usadas no estado em que foram usadas. O próprio relatório EFASEV/2022 das Forças Armadas concluiu: \"somente um teste funcional, em condições normais de uso, pode atestar\" a integridade de hardware e software; que o teste atual \"não reproduz inteiramente as condições normais de uso\"; e que isso \"não permite afirmar que o SEV está isento da influência de um eventual código malicioso\". A recomendação: análise dos binários efetivamente executados e mais urnas selecionadas aleatoriamente. Os arts. 51–52 da Res. 23.673 abrem um canal para verificação pós-pleito — mas ele precisa ser usado.",
          en: "In the official sources reviewed, we found no official test that examines, after voting, the machines actually used in the state they were used. The EFASEV/2022 report by the Armed Forces itself concluded: \"only a functional test, under normal conditions of use, can attest\" to the integrity of hardware and software; that the current test \"does not fully reproduce the normal conditions of use\"; and that this \"does not allow affirming that the electronic voting system is free from the influence of a potential malicious code\". The recommendation: analysis of the binaries actually executed and more randomly selected machines. Arts. 51–52 of Res. 23.673 open a channel for post-election verification — but it needs to be used.",
        } as L,
        tom: "rose" as const,
      },
      {
        n: 3,
        titulo: { pt: "A analogia da blitz", en: "The checkpoint analogy" } as L,
        corpo: {
          pt: "A blitz da Lei Seca funciona porque o motorista não sabe onde ela estará. Se a localização for anunciada com antecedência, quem bebeu pega outra rota — e a blitz não flagra ninguém. Uma auditoria correta segue o mesmo princípio: a unidade auditada não pode saber de antemão qual urna será examinada. Por isso a urna lacrada de exemplo, exibida com cerimônia pelo próprio auditado, não substitui o exame real: se houvesse código anômalo, ele não estaria naquela urna.",
          en: "Brazil's drunk-driving checkpoints (Lei Seca) work because the driver does not know where they will be. If the location is announced in advance, anyone who drank takes another route — and the checkpoint catches nobody. A correct audit follows the same principle: the audited party must not know in advance which machine will be examined. That is why a sealed example machine, ceremonially exhibited by the audited party itself, does not replace the real examination: if there were anomalous code, it would not be in that machine.",
        } as L,
        tom: "amber" as const,
      },
      {
        n: 4,
        titulo: { pt: "Amostra correta: direcionada + aleatória", en: "Correct sample: targeted + random" } as L,
        corpo: {
          pt: "Duas camadas são necessárias. A primeira é direcionada: as urnas com maiores anomalias — por exemplo, maior taxa de bypass biométrico ou maior discrepância frente à referência local (3.988 de 497.897 seções atendem ao menos um critério; 54 na prioridade mais alta). A segunda é aleatória: urnas sorteadas com semente pública verificável (por exemplo, números da Loteria Federal do dia). Nenhuma das duas basta sozinha: a direcionada perde valor se o adversário conhece o critério, e a aleatória pode não alcançar a anomalia concentrada. A combinação cobre todos os cenários.",
          en: "Two layers are needed. The first is targeted: the machines with the largest anomalies — for example, highest biometric bypass rate or greatest discrepancy from the local reference (3,988 of 497,897 sections meet at least one criterion; 54 at the highest priority). The second is random: machines drawn with a public verifiable seed (for example, that day's Federal Lottery numbers). Neither alone suffices: the targeted sample loses value if the adversary knows the criteria, and the random one may miss a concentrated anomaly. The combination covers all scenarios.",
        } as L,
        tom: "teal" as const,
      },
      {
        n: 5,
        titulo: { pt: "O que deve ser testado", en: "What must be tested" } as L,
        corpo: {
          pt: "Não apenas a urna: também as mídias (de carga, votação e resultado), o Transportador de Arquivos, o JE-Connect, o Receptor de Arquivos (RecArquivos), o Sistot (totalização), o Gedai-UE e qualquer coletor de dados usado na cadeia. O exame compara: conteúdo da urna usada × fonte assinada × arquivo transmitido × resultado totalizado. Todos esses sistemas estão listados no art. 3 da Res. 23.673 — são fiscalizáveis por lei.",
          en: "Not just the machine: also the media (loading, voting and result), the File Transporter, JE-Connect, the File Receiver (RecArquivos), Sistot (totalization), Gedai-UE, and any data collector used in the chain. The examination compares: used-machine contents × signed source × transmitted file × totalized result. All these systems are listed in art. 3 of Res. 23.673 — they are subject to oversight by law.",
        } as L,
        tom: "amber" as const,
      },
      {
        n: 6,
        titulo: { pt: "Tamanho da amostra", en: "Sample size" } as L,
        corpo: {
          pt: "A probabilidade de detectar pelo menos uma urna alterada numa amostra aleatória de n, entre N urnas das quais K foram alteradas (fração f = K/N), é aproximadamente P = 1 − (1−f)ⁿ. Para 95% de confiança, bastam: 59 urnas se 5% foram alteradas, 149 se 2%, 299 se 1%, 598 se 0,5% e 2.995 se 0,1%. Se zero alterações forem encontradas em n urnas, a prevalência é no máximo 3/n com 95% de confiança (regra de três). Uma única urna lacrada de exemplo detecta com probabilidade ≈ f — ou zero, se o adversário sabe qual será.",
          en: "The probability of detecting at least one altered machine in a random sample of n, out of N machines of which K were altered (fraction f = K/N), is approximately P = 1 − (1−f)ⁿ. For 95% confidence: 59 machines suffice if 5% were altered, 149 if 2%, 299 if 1%, 598 if 0.5%, and 2,995 if 0.1%. If zero alterations are found in n machines, the prevalence is at most 3/n at 95% confidence (rule of three). A single sealed example machine detects with probability ≈ f — or zero, if the adversary knows which one it will be.",
        } as L,
        tom: "rose" as const,
      },
      {
        n: 7,
        titulo: { pt: "O canal legal existe", en: "The legal channel exists" } as L,
        corpo: {
          pt: "A Res. TSE 23.673/2021 (arts. 51–52) permite que entidades fiscalizadoras — incluindo o Congresso Nacional (art. 6) — solicitem verificação pós-pleito, apresentando fatos, indícios e um plano de trabalho. O prazo se encerra 5 dias antes da data-limite do Calendário Eleitoral para manutenção dos lacres. Pela Res. 23.751/2026, art. 272, as urnas permanecem lacradas até 12 de janeiro de 2027 — logo o prazo estimado para o pedido é por volta de 7 de janeiro de 2027 (confirmar no Calendário Eleitoral vigente). Os arts. 45–50 determinam que os arquivos de auditoria da cadeia de custódia sejam preservados por 100 dias a partir do 1º turno (4 de outubro de 2026 ≈ 12 de janeiro de 2027).",
          en: "TSE Res. 23.673/2021 (arts. 51–52) allows oversight entities — including the National Congress (art. 6) — to request post-election verification, presenting facts, evidence and a work plan. The deadline is 5 days before the Electoral Calendar date-limit for seal maintenance. Per Res. 23.751/2026, art. 272, the machines remain sealed until 12 January 2027 — so the estimated deadline for the request is around 7 January 2027 (confirm in the current Electoral Calendar). Arts. 45–50 require that the chain-of-custody audit files be preserved for 100 days from the first round (4 October 2026 ≈ 12 January 2027).",
        } as L,
        tom: "teal" as const,
      },
    ],

    // Tabela comparativa
    comparacao: {
      titulo: { pt: "O que se testa hoje × O que precisa ser testado", en: "What is tested today × What needs to be tested" } as L,
      colunas: {
        aspecto: { pt: "Aspecto", en: "Aspect" } as L,
        hoje: { pt: "Hoje", en: "Today" } as L,
        necessario: { pt: "Necessário", en: "Needed" } as L,
      },
      linhas: [
        {
          aspecto: { pt: "Quando", en: "When" } as L,
          hoje: { pt: "Antes da votação (autenticidade) ou na véspera, em urna retirada (integridade)", en: "Before voting (authenticity) or on the eve, on a withdrawn machine (integrity)" } as L,
          necessario: { pt: "Depois da votação, na urna que serviu à seção real", en: "After voting, on the machine that served the real section" } as L,
        },
        {
          aspecto: { pt: "O quê", en: "What" } as L,
          hoje: { pt: "Hashes de programas (autenticidade) ou simulação com cédulas de papel (integridade)", en: "Program hashes (authenticity) or simulation with paper ballots (integrity)" } as L,
          necessario: { pt: "Conteúdo da urna × fonte assinada × transmitido × totalizado — toda a cadeia", en: "Machine contents × signed source × transmitted × totalized — the full chain" } as L,
        },
        {
          aspecto: { pt: "Quem escolhe", en: "Who chooses" } as L,
          hoje: { pt: "~32% escolhidas por entidades, ~68% sorteadas; o auditado participa da seleção", en: "~32% chosen by entities, ~68% drawn; the audited party participates in the selection" } as L,
          necessario: { pt: "Amostra direcionada (anomalias) + aleatória com semente pública verificável", en: "Targeted sample (anomalies) + random with public verifiable seed" } as L,
        },
        {
          aspecto: { pt: "Cobertura", en: "Coverage" } as L,
          hoje: { pt: "~580 urnas por turno em 497.897 seções (0,12%)", en: "~580 machines per round out of 497,897 sections (0.12%)" } as L,
          necessario: { pt: "59 a 2.995 urnas conforme a fração suspeita (95% de confiança)", en: "59 to 2,995 machines depending on the suspected fraction (95% confidence)" } as L,
        },
        {
          aspecto: { pt: "Escopo", en: "Scope" } as L,
          hoje: { pt: "Apenas a urna", en: "Only the machine" } as L,
          necessario: { pt: "Urna + mídias + Transportador + JE-Connect + RecArquivos + Sistot + Gedai-UE", en: "Machine + media + Transporter + JE-Connect + RecArquivos + Sistot + Gedai-UE" } as L,
        },
      ],
    },

    // Tamanho da amostra — tabela
    amostraTabela: [
      { f: "5%", n: 59, label: { pt: "Se 5% das urnas foram alteradas", en: "If 5% of machines were altered" } as L },
      { f: "2%", n: 149, label: { pt: "Se 2% foram alteradas", en: "If 2% were altered" } as L },
      { f: "1%", n: 299, label: { pt: "Se 1% foram alteradas", en: "If 1% were altered" } as L },
      { f: "0,5%", n: 598, label: { pt: "Se 0,5% foram alteradas", en: "If 0.5% were altered" } as L },
      { f: "0,1%", n: 2_995, label: { pt: "Se 0,1% foram alteradas", en: "If 0.1% were altered" } as L },
    ],
    amostraConfianca: { pt: "95% de confiança", en: "95% confidence" } as L,
    amostraFormula: { pt: "n = ⌈ln(1−c) / ln(1−f)⌉", en: "n = ⌈ln(1−c) / ln(1−f)⌉" } as L,
    amostraRegra3: {
      pt: "Se zero alterações forem encontradas em n urnas: prevalência ≤ 3/n (95% CI)",
      en: "If zero alterations are found in n machines: prevalence ≤ 3/n (95% CI)",
    } as L,
    amostraExemplo: {
      pt: "Uma única urna lacrada de exemplo: probabilidade de detecção ≈ f — ou zero, se o adversário sabe qual será.",
      en: "A single sealed example machine: detection probability ≈ f — or zero, if the adversary knows which one it will be.",
    } as L,

    limites: [
      { pt: "Os erros estão provados; fraude não está excluída — esta auditoria física é o caminho para investigá-la.", en: "The errors are proven; fraud is not excluded — this physical audit is the way to investigate it." },
      { pt: "Usa o processo legal existente (Res. 23.673, arts. 51–52) — o instrumento já existe, falta usá-lo.", en: "Uses the existing legal process (Res. 23.673, arts. 51–52) — the instrument already exists, it just needs to be used." },
      { pt: "O desenho amostral apresentado é ilustrativo; a auditoria efetiva deve ser projetada por peritos independentes.", en: "The sample design presented is illustrative; the actual audit must be designed by independent experts." },
    ] as { pt: string; en: string }[],

    fontes: [
      { tier: "T0", source: { pt: "Res. TSE 23.673/2021 (alterada pelas Res. 23.728/2024 e 23.758/2026)", en: "TSE Res. 23.673/2021 (amended by Res. 23.728/2024 and 23.758/2026)" }, href: "https://www.tse.jus.br/legislacao/compilada/res/2021/resolucao-no-23-673-de-14-de-dezembro-de-2021" } as Fonte,
      { tier: "T0", source: { pt: "Res. TSE 23.751/2026, art. 272 (lacres até 12/01/2027)", en: "TSE Res. 23.751/2026, art. 272 (seals until 12 Jan 2027)" }, href: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-14-de-marco-de-2026" } as Fonte,
      { tier: "T0", source: { pt: "Relatório EFASEV/2022, Anexo G — Forças Armadas", en: "EFASEV/2022 Report, Annex G — Armed Forces" }, date: "2022" } as Fonte,
      { tier: "T0", source: { pt: "BUs/BWEB TSE 2026/T2 (critérios de anomalia)", en: "BUs/BWEB TSE 2026/T2 (anomaly criteria)" }, date: "2026", href: "https://dadosabertos.tse.jus.br/dataset/resultados-2026" } as Fonte,
    ],
  },

  // 4) AÇÕES CONCRETAS
  acoes: {
    eyebrow: { pt: "O que pedir", en: "What to request" } as L,
    title: { pt: "Ações concretas para parlamentares, Ministério Público e cidadãos", en: "Concrete actions for legislators, prosecutors and citizens" } as L,
    lead: {
      pt: "Fiscalizar os números do Estado é um direito e um dever da democracia. Estas são medidas institucionais, apartidárias, com base legal existente.",
      en: "Scrutinizing the State's numbers is a democratic right and duty. These are institutional, non-partisan measures grounded in existing law.",
    } as L,
    itens: [
      {
        titulo: { pt: "Exigir o cruzamento óbitos × comparecimento", en: "Demand the deaths × turnout cross-check" } as L,
        texto: { pt: "Requerimento de informação ao TSE e ao IBGE pedindo o cruzamento CPF × óbito (SIM/SIRC) × comparecimento, por faixa etária, com resultado agregado público e os casos nominais entregues à autoridade competente.", en: "A formal information request to the TSE and IBGE for the ID × death (SIM/SIRC) × turnout cross-check, by age band, with aggregate results made public and individual cases handed to the proper authority." } as L,
        base: { pt: "Poder de fiscalização do Legislativo · LAI (Lei 12.527/2011)", en: "Legislative oversight power · Access to Information Act (Law 12.527/2011)" } as L,
      },
      {
        titulo: { pt: "Auditar as faixas e municípios altamente anômalos", en: "Audit the highly anomalous bands and municipalities" } as L,
        texto: { pt: "Auditoria independente do cadastro nas faixas 90+ e centenários, nos 137 municípios com comparecimento acima da população viva e nos 730 com mais eleitores que habitantes — com os nomes, sob sigilo, conferidos contra a base de óbitos.", en: "An independent audit of the registry in the 90+ and centenarian bands, in the 137 municipalities with turnout above the living population and the 730 with more voters than inhabitants — with the names, under confidentiality, checked against the death registry." } as L,
        base: { pt: "Perfil do eleitorado e óbitos são bases já existentes no governo", en: "Voter profile and death records are databases the government already holds" } as L,
      },
      {
        titulo: { pt: "Disparar a revisão de eleitorado prevista em lei", en: "Trigger the electorate review the law provides for" } as L,
        texto: { pt: "Nos municípios onde o eleitorado supera 65% da população projetada pelo IBGE, a Lei 9.504/97 (art. 92, III) manda o TSE revisar o eleitorado de ofício. O próprio TSE já reconheceu o gatilho “preenchido” — e negou por “conveniência e disponibilidade de recursos”. Cobrar a execução.", en: "In municipalities where the electorate exceeds 65% of the IBGE-projected population, Law 9.504/97 (art. 92, III) orders the TSE to review the electorate on its own initiative. The TSE has itself acknowledged the trigger as “met” — and denied it for “convenience and available resources”. Demand enforcement." } as L,
        base: { pt: "Lei 9.504/1997, art. 92, III · Res. TSE 23.659/2021, art. 105", en: "Law 9.504/1997, art. 92, III · TSE Res. 23.659/2021, art. 105" } as L,
      },
      {
        titulo: { pt: "Integrar o cadastro eleitoral ao sistema de óbitos", en: "Integrate the voter registry with the death system" } as L,
        texto: { pt: "A Resolução TSE 22.166/2006 já prevê o cruzamento automático do cadastro com os registros de óbito. Cobrar integração automática, contínua e auditável com o Sistema Nacional de Informações de Registro Civil (SIRC), encerrando o acúmulo de títulos de falecidos.", en: "TSE Resolution 22.166/2006 already provides for automatic cross-checking of the registry with death records. Demand automatic, continuous and auditable integration with the national civil-registry system (SIRC), ending the accumulation of deceased registrations." } as L,
        base: { pt: "Res. TSE 22.166/2006 (prevista desde 2006, nunca plenamente executada)", en: "TSE Res. 22.166/2006 (provided since 2006, never fully enforced)" } as L,
      },
      {
        titulo: { pt: "Inspeção do código-fonte — o degrau indispensável", en: "Source-code inspection — the indispensable rung" } as L,
        texto: { pt: "Inspeção do código em execução, do histórico de alterações e da correspondência entre o código inspecionado e o binário que roda nas urnas — pedido feito pelas Forças Armadas no relatório EFASEV/2022 e nunca atendido. É indispensável: só ela separa erro de software de inserção manual.", en: "Inspection of the running code, its change history and the correspondence between the inspected code and the binary that runs on the machines — a request made by the Armed Forces in the EFASEV/2022 report and never fulfilled. It is indispensable: only it separates a software fault from a manual insertion." } as L,
        base: { pt: "Relatório EFASEV/2022 (Ministério da Defesa)", en: "EFASEV/2022 report (Ministry of Defence)" } as L,
      },
      {
        titulo: { pt: "Prazo e resposta pública", en: "A deadline and a public answer" } as L,
        texto: { pt: "A população tem direito a uma explicação clara, com prazo, sobre por que os números do cadastro não batem com a realidade medida pelo IBGE. Transparência não é favor — é obrigação.", en: "The public has a right to a clear, time-bound explanation of why the registry numbers do not match the reality measured by IBGE. Transparency is not a favour — it is an obligation." } as L,
        base: { pt: "Princípio da publicidade (CF, art. 37)", en: "Principle of publicity (Constitution, art. 37)" } as L,
      },
    ],
  },

  // QUANTOS? A conta do que é mensurável
  magnitude: {
    eyebrow: { pt: "A conta", en: "The count" } as L,
    title: { pt: "Quantos mortos entraram nessa eleição?", en: "How many dead entered this election?" } as L,
    lead: {
      pt: "O total de votos dados por inscrições de falecidos não existe em nenhum dado público — é exatamente o que o cruzamento do governo produz. O que se pode medir, com números oficiais, é o piso: quantos mortos reais ficaram aptos a votar. E não é pouco.",
      en: "The total number of votes cast through deceased registrations exists in no public dataset — it is exactly what the government's cross-check would produce. What can be measured, with official numbers, is the floor: how many real dead people remained eligible to vote. And it is not small.",
    } as L,
    // Funil provado (um ano, 2022)
    funil: [
      { value: 1_491_608, label: { pt: "adultos (18+) morreram em 2022 — contagem exata do DATASUS, que ainda subnotifica", en: "adults (18+) died in 2022 — exact DATASUS count, which still underreports" } as L, tone: "slate" as const },
      { value: 1_417_028, label: { pt: "deles tinham título de eleitor (~95% dos adultos, segundo o próprio TSE)", en: "of them held a voter registration (~95% of adults, per the TSE itself)" } as L, tone: "slate" as const },
      { value: 787_825, label: { pt: "títulos o TSE cancelou por óbito naquele ano", en: "registrations the TSE cancelled for death that year" } as L, tone: "teal" as const },
      { value: 629_203, label: { pt: "eleitores comprovadamente mortos permaneceram aptos a votar (1.417.028 − 787.825)", en: "demonstrably dead voters remained eligible to vote (1,417,028 − 787,825)" } as L, tone: "rose" as const },
    ],
    cicloLabel: { pt: "Em um ciclo eleitoral de 4 anos, isso acumula cerca de", en: "In one 4-year electoral cycle, this accumulates about" } as L,
    ciclo: 2_517_000,
    cicloUnidade: { pt: "títulos de mortos aptos a votar — em dois ciclos (2018–2026), ~5 milhões", en: "dead people's registrations eligible to vote — across two cycles (2018–2026), ~5 million" } as L,
    // Sinais mensuráveis de uso (não é o total que votou, mas é medido)
    sinaisTitle: { pt: "Sinais mensuráveis de que essas inscrições foram usadas", en: "Measurable signs that these registrations were used" } as L,
    sinais: [
      { value: 198_738, label: { pt: "comparecimentos de idosos acima do padrão biológico no 2º turno de 2022 — votos que o grupo de controle não explica", en: "elderly turnouts above the biological pattern in the 2022 runoff — votes the control group cannot explain" } as L },
      { value: 1_089, label: { pt: "votos além da população viva em 137 municípios (2022, 2º turno) — uma impossibilidade já medida", en: "votes beyond the living population in 137 municipalities (2022 runoff) — an impossibility already measured" } as L },
    ],
    cap: {
      pt: "O número exato de votos dados em nome de falecidos só aparece no cruzamento CPF × óbito × comparecimento — que o governo faz em menos de uma hora e não publica. Medimos aqui o piso provado (mortos aptos) e os sinais de uso; o total exato é a resposta que falta.",
      en: "The exact number of votes cast in deceased people's names appears only in the ID × death × turnout cross-check — which the government runs in under an hour and does not publish. We measure here the proven floor (dead people eligible) and the signs of use; the exact total is the missing answer.",
    } as L,
    fontes: [
      { tier: "T0", source: { pt: "DATASUS/SIM (mortes) · TSE, cancelamentos por óbito 2022", en: "DATASUS/SIM (deaths) · TSE, 2022 death cancellations" }, date: "2022", href: "https://www.tse.jus.br/comunicacao/noticias/2023/Maio/justica-eleitoral-cancelou-quase-800-mil-titulos-em-2022" } as Fonte,
      { tier: "T0", source: { pt: "TSE perfil de comparecimento 2022 (inversão biológica e excesso municipal)", en: "TSE 2022 turnout profile (biological inversion and municipal excess)" }, date: "2022", href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2022" } as Fonte,
    ],
  },

  // 2026 — o 2º turno ainda não foi publicado
  estimativa2026: {
    eyebrow: { pt: "A eleição de 2026", en: "The 2026 election" } as L,
    title: { pt: "E 2026? O 2º turno ainda não foi publicado", en: "And 2026? The runoff has not been published yet" } as L,
    porque: {
      pt: "O TSE gera o arquivo de comparecimento e abstenção uma vez e o disponibiliza. A versão de 2026 foi gerada em 21 de outubro de 2026 — quatro dias antes do 2º turno, que ocorreu em 25 de outubro. Por isso o dado oficial de 2026 traz apenas o 1º turno. O perfil consolidado do 2º turno costuma sair semanas depois, após o fechamento das estatísticas da eleição. Até lá, a inversão de 2026 não pode ser medida — mas pode ser projetada a partir do padrão de 2014, 2018 e 2022.",
      en: "The TSE generates the turnout-and-abstention file once and publishes it. The 2026 version was generated on 21 October 2026 — four days before the runoff, which took place on 25 October. That is why the official 2026 data contains only the first round. The consolidated second-round profile usually comes out weeks later, after the election statistics are closed. Until then, the 2026 inversion cannot be measured — but it can be projected from the 2014, 2018 and 2022 pattern.",
    } as L,
    turnoutNota: {
      pt: "Comparecimento por idade no 1º turno de 2026 (dado oficial). A queda com a idade é normal e esperada; a anomalia não está aqui — está no aumento entre turnos, que só aparece com o 2º turno.",
      en: "Turnout by age in the 2026 first round (official data). The decline with age is normal and expected; the anomaly is not here — it is in the increase between rounds, which only appears with the runoff.",
    } as L,
    // 2026 1T real (perfil de comparecimento BRASIL, NR_TURNO=1)
    turnout1T: [
      { faixa: "70-74", turnout: 68.7, comp: 4_032_260 },
      { faixa: "75-79", turnout: 52.3, comp: 2_110_254 },
      { faixa: "80-84", turnout: 37.1, comp: 860_270 },
      { faixa: "85-89", turnout: 24.2, comp: 299_732 },
      { faixa: "90-94", turnout: 13.5, comp: 75_865 },
      { faixa: "95-99", turnout: 4.3, comp: 12_298 },
      { faixa: "100+", turnout: 0.7, comp: 1_815 },
    ],
    projMin: 50_000,
    projMax: 267_000,
    projTitle: { pt: "Projeção para o 2º turno de 2026", en: "Projection for the 2026 runoff" } as L,
    projTexto: {
      pt: "Se o 2º turno de 2026 seguir o padrão das eleições anteriores, o excesso de comparecimento dos idosos — acima do ritmo da faixa 70–74 — ficaria entre cerca de 50 mil (padrão mais brando, de 2018) e 267 mil (padrão mais extremo, de 2022). É projeção, não medição: desaparece no dia em que o TSE publicar o perfil real do 2º turno. E a conta que não depende de projeção — os mortos que ficaram aptos a votar — continua valendo para 2026.",
      en: "If the 2026 runoff follows the pattern of previous elections, the excess elderly turnout — above the pace of the 70–74 band — would land between about 50,000 (the milder 2018 pattern) and 267,000 (the more extreme 2022 pattern). It is a projection, not a measurement: it vanishes the day the TSE publishes the real runoff profile. And the figure that needs no projection — the dead who remained eligible to vote — still holds for 2026.",
    } as L,
    fontes: [
      { tier: "T0", source: { pt: "TSE · perfil de comparecimento e abstenção 2026 (gerado 21/10/2026, só 1º turno)", en: "TSE · 2026 turnout and abstention profile (generated 21 Oct 2026, 1st round only)" }, date: "21/10/2026", href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2026" } as Fonte,
      { tier: "T0", source: { pt: "TSE · perfil 2014/2018/2022 (padrão histórico da projeção)", en: "TSE · 2014/2018/2022 profiles (historical projection pattern)" }, date: "2014–2022", href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2022" } as Fonte,
    ],
  },

  // Pergunta direta — resposta precisa (título e corpo alinhados)
  mortosVotaram: {
    pergunta: { pt: "Mortos votaram? O que está provado — e o que só o governo pode confirmar", en: "Did dead people vote? What is proven — and what only the government can confirm" } as L,
    provadoLabel: { pt: "O que está provado", en: "What is proven" } as L,
    naoProvadoLabel: { pt: "O que só o governo pode fechar", en: "What only the government can settle" } as L,
    perguntaLabel: { pt: "A pergunta certa", en: "The right question" } as L,
    provado: {
      pt: "Sem abrir nenhum código-fonte, usando apenas dados públicos do TSE, IBGE e DATASUS, já comprovamos objetivamente votos de falecidos. Na faixa etária 70+, a biologia não deixa dúvida: o comparecimento cresce com a idade (o oposto do que acontece no mundo real), o cadastro tem 6,6× mais centenários do que o IBGE contou vivos, e em 137 municípios houve mais votos do que pessoas vivas na faixa. Está provado que mortos reais — pessoas que o Ministério da Saúde registra como falecidas — permaneceram no cadastro do TSE, aptas a votar, aos milhões. Só em 2022 foram pelo menos 629 mil sem baixa. Em dois ciclos eleitorais (2018–2026): ~5 milhões de mortos cadastrados como eleitores. Mas esses ~5 milhões cobrem todas as idades — e o cruzamento CPF × óbito × comparecimento, que o governo faz em menos de uma hora, é obrigatório para saber quantos falecidos votaram no total, além do que já temos certeza pelo grupo 70+.",
      en: "Without opening any source code, using only public data from the TSE, IBGE and DATASUS, we have already objectively proven votes by deceased people. In the 70+ age band, biology leaves no doubt: turnout grows with age (the opposite of real-world behavior), the registry has 6.6× more centenarians than IBGE counted alive, and in 137 municipalities there were more votes than living people in the band. It is proven that real dead people — individuals the Ministry of Health records as deceased — remained in the TSE registry, eligible to vote, by the millions. In 2022 alone, at least 629,000 went uncancelled. Across two electoral cycles (2018–2026): ~5 million dead registered as voters. But those ~5 million cover all ages — and the CPF × death × turnout cross-check, which the government runs in under an hour, is mandatory to know how many deceased voted in total, beyond what we already know for certain from the 70+ group.",
    } as L,
    falta: {
      pt: "Pelo grupo 70+, a prova de votos de falecidos é objetiva e não precisa de código-fonte. Mas os ~5 milhões de mortos cadastrados cobrem todas as idades — de 18 a 100+. Para saber quantos votaram no total, o cruzamento CPF × óbito × comparecimento é obrigatório. Esse cruzamento o governo faz em menos de uma hora e não publica. O dado é sigiloso (LGPD) e só o governo tem. Em 137 municípios já houve mais votos do que moradores vivos; o domicílio eleitoral pode explicar parte do deslocamento, mas não pode explicar mortos.",
      en: "Through the 70+ group, the proof of deceased voters is objective and needs no source code. But the ~5 million dead registered cover all ages — from 18 to 100+. To know how many voted in total, the CPF × death × turnout cross-check is mandatory. That cross-check the government runs in under an hour and does not publish. The data is confidential (LGPD) and only the government holds it. In 137 municipalities there were already more votes than living residents; electoral domicile may explain some of the displacement, but it cannot explain dead people.",
    } as L,
    porque: {
      pt: "Por isso a pergunta certa mudou. Não é mais “há mortos aptos a votar no cadastro?” — há, e está provado. É “por que o governo, que pode confirmar em uma hora se esses mortos votaram, não confirma e não responde à população?”.",
      en: "That is why the right question has changed. It is no longer “are there dead people eligible to vote in the registry?” — there are, and it is proven. It is “why does the government, which can confirm in one hour whether those dead people voted, not confirm it and not answer the public?”.",
    } as L,
  },

  resposta: {
    title: { pt: "A população merece uma resposta", en: "The public deserves an answer" } as L,
    body: {
      pt: "Sem abrir nenhum código-fonte, usando apenas dados públicos, já comprovamos votos de falecidos pela faixa etária 70+. Mas os ~5 milhões de mortos cadastrados cobrem todas as idades. O cruzamento CPF × óbito × comparecimento — que o governo faz em menos de uma hora — é obrigatório para saber quantos falecidos votaram no total. O TSE não cancela os títulos no ritmo que a lei exige; a ferramenta de verificação não funciona; e a chave usada em 2022 era falsa. Fraude não está excluída como possibilidade — e precisa ser investigada. Não podemos ter erros em uma eleição.",
      en: "Without opening any source code, using only public data, we have already proven deceased votes through the 70+ age band. But the ~5 million dead registered cover all ages. The CPF × death × turnout cross-check — which the government runs in under an hour — is mandatory to know how many deceased voted in total. The TSE does not cancel registrations at the pace the law requires; the verification tool does not work; and the key used in 2022 was fake. Fraud is not excluded as a possibility — and it must be investigated. We cannot have errors in an election.",
    } as L,
    atribuicao: {
      pt: "Fraude não está excluída — mas não deve ser atribuída ao candidato vencedor. Se provada, poderia ter vindo de qualquer direção: interna ou externa, ataque coordenado ou individual. É objetivamente errado atribuir fraude ao vencedor sem prova direta. Mas os erros até aqui demonstrados demandam obrigatoriamente respostas claras do Estado.",
      en: "Fraud is not excluded — but it should not be attributed to the winning candidate. If proven, it could have come from any direction: internal or external, a coordinated attack or an individual one. It is objectively wrong to attribute fraud to the winner without direct proof. But the errors demonstrated so far mandatorily demand clear answers from the State.",
    } as L,
  },
};
