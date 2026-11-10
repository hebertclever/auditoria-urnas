// "O que isto prova" — o núcleo afirmativo da auditoria.
// Regra: afirmar só o que é irrefutável sobre dados primários. A impossibilidade
// individual (nome a nome) só o governo pode fechar; aqui provamos o erro de base,
// o erro de processo e a impossibilidade agregada — e mostramos de que lado está o erro.
import type { L } from "@/i18n/config";
import type { Tier } from "@/components/ui/source-tag";

type Fonte = { tier: Tier; source: L; date?: string; href?: string };

export const prova = {
  teaserHome: {
    eyebrow: { pt: "O que isto prova", en: "What this proves" } as L,
    title: { pt: "Não prova fraude. Prova erro — e prova que a conta não fecha.", en: "It does not prove fraud. It proves error — and proves the numbers do not add up." } as L,
    lead: {
      pt: "Esta auditoria não acusa ninguém de fraude. Mas, com dados oficiais, prova três coisas que exigem resposta: que as bases do próprio Estado se contradizem, que o cadastro não é mantido como a lei manda, e que em muitos casos foi registrado mais voto do que havia gente viva para votar.",
      en: "This audit accuses no one of fraud. But, with official data, it proves three things that demand an answer: that the State's own databases contradict each other, that the registry is not maintained as the law requires, and that in many cases more votes were recorded than there were living people to cast them.",
    } as L,
    bullets: [
      { pt: "Erro de base provado: o cadastro do TSE tem 7,9× mais centenários do que o IBGE encontrou vivos.", en: "Proven data error: the TSE registry has 7.9× more centenarians than IBGE found alive." },
      { pt: "Erro de processo provado: 44% dos títulos de quem morre não são cancelados no ano — número do próprio TSE.", en: "Proven process error: 44% of dead voters' registrations go uncancelled within the year — the TSE's own figure." },
      { pt: "Impossibilidade provada: em 137 municípios houve mais comparecimento do que pessoas vivas na faixa.", en: "Proven impossibility: in 137 municipalities turnout exceeded the living people in the age band." },
    ] as { pt: string; en: string }[],
    cta: { pt: "Ver o que está provado e o que exigir", en: "See what is proven and what to demand" } as L,
  },

  // 1) O QUE ESTÁ PROVADO
  provado: {
    eyebrow: { pt: "Fatos, não opinião", en: "Facts, not opinion" } as L,
    title: { pt: "O que esta auditoria prova", en: "What this audit proves" } as L,
    lead: {
      pt: "Cada item abaixo é aritmética sobre fontes primárias oficiais (T0) — do IBGE (população), do TSE (cadastro e comparecimento) e do DATASUS/Ministério da Saúde (óbitos). Não depende de interpretação. Abra “Auditar” para refazer a conta.",
      en: "Each item below is arithmetic on primary official sources (T0) — from IBGE (population), the TSE (registry and turnout) and DATASUS/Ministry of Health (deaths). It requires no interpretation. Open “Audit” to redo the math.",
    } as L,
    itens: [
      {
        n: 1,
        claim: { pt: "Em escala, é impossível que essas pessoas estejam vivas. O cadastro tem quase 8 vezes mais centenários do que o Brasil tem de gente com 100 anos.", en: "At scale, it is impossible for these people to be alive. The registry holds almost 8 times more centenarians than Brazil has people aged 100." } as L,
        detail: {
          pt: "O IBGE contou 37.814 pessoas com 100 anos ou mais, de porta em porta, em 2022. O TSE tem 298.239 registradas para votar. São 7,9 vezes mais. E o DATASUS confirma que centenários morrem — cerca de 15 mil por ano: o excesso não é longevidade, é falta de baixa no cadastro. A diferença não é erro de amostra — é uma ordem de grandeza.",
          en: "IBGE counted 37,814 people aged 100+, door to door, in 2022. The TSE has 298,239 registered to vote. That is 7.9 times more. And DATASUS confirms centenarians die — about 15,000 a year: the excess is not longevity, it is a failure to remove them from the registry. The gap is not sampling error — it is an order of magnitude.",
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
      { k: { pt: "Subcontagem que o IBGE precisaria para “explicar” os centenários", en: "Undercount IBGE would need to “explain” the centenarians" } as L, v: 87, tone: "rose" as const },
      { k: { pt: "Subcontagem que o IBGE precisaria em Davinópolis", en: "Undercount IBGE would need in Davinópolis" } as L, v: 104, tone: "rose" as const },
    ],
    pontos: [
      {
        t: { pt: "O IBGE é a autoridade legal sobre população — não o TSE.", en: "IBGE is the legal authority on population — not the TSE." } as L,
        b: { pt: "Desde 1973 o IBGE é o órgão oficial de estatística do país. A população que reparte o FPM, que define o número de vereadores e que dispara a revisão do eleitorado é, por lei, a do IBGE. O próprio TSE é obrigado a usá-la.", en: "Since 1973 IBGE has been the country's official statistics agency. The population that splits federal transfers, sets the number of city councillors and triggers electorate review is, by law, IBGE's. The TSE itself is required to use it." } as L,
      },
      {
        t: { pt: "O Censo erra pouco — e erra ainda menos onde estão os achados.", en: "The Census errs little — and errs even less where the findings are." } as L,
        b: { pt: "A pós-enumeração do IBGE mediu 8,3% de erro líquido nacional, 3,9% em municípios pequenos e 3,3–3,5% nos idosos de 75–79 anos. Para o cadastro do TSE estar certo, o Censo teria de ter deixado de contar 87% dos centenários — achar 1 a cada 8.", en: "IBGE's post-enumeration measured 8.3% national net error, 3.9% in small municipalities and 3.3–3.5% among the 75–79. For the TSE registry to be right, the Census would have had to miss 87% of centenarians — to find 1 in 8." } as L,
      },
      {
        t: { pt: "A ciência mostra que o Censo conta centenários a MAIS, não a menos.", en: "Research shows the Census overcounts centenarians, not undercounts." } as L,
        b: { pt: "A demografia brasileira documenta que o Censo superestima os muito idosos em 2 a 3 vezes (idades declaradas sem registro civil). Isso torna o gap do TSE ainda maior: 7,9× é um piso, não um teto.", en: "Brazilian demography documents that the Census overstates the very old by 2–3× (ages declared without civil records). That makes the TSE gap even larger: 7.9× is a floor, not a ceiling." } as L,
      },
    ],
    verdict: {
      pt: "Conclusão: é praticamente certo que o erro está na base do TSE. Nenhuma pós-enumeração, nenhum padrão internacional, descreve um censo que erre 87% para menos nos idosos. O TSE é a autoridade sobre a eleição — não sobre quantos brasileiros existem. A régua da realidade é o IBGE, e é a régua que o próprio Estado adota.",
      en: "Conclusion: it is practically certain the error is in the TSE's database. No post-enumeration, no international benchmark, describes a census that undercounts the elderly by 87%. The TSE is the authority on the election — not on how many Brazilians exist. The yardstick of reality is IBGE, and it is the yardstick the State itself adopts.",
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
      pt: "As três réguas oficiais do Estado — Censo, estimativas e óbitos — têm margens de erro conhecidas, e todas erram na direção que reforça o achado. Para a conta fechar a favor do TSE, as três teriam de errar ao mesmo tempo, cada uma na direção oposta à que sua própria metodologia documenta.",
      en: "The State's three official yardsticks — Census, estimates and deaths — have known margins of error, and all err in the direction that reinforces the finding. For the numbers to come out in the TSE's favour, all three would have to err at once, each in the opposite direction to what its own methodology documents.",
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

  // 4) AÇÕES CONCRETAS
  acoes: {
    eyebrow: { pt: "O que pedir", en: "What to request" } as L,
    title: { pt: "Ações concretas para parlamentares, Ministério Público e cidadãos", en: "Concrete actions for legislators, prosecutors and citizens" } as L,
    lead: {
      pt: "Fiscalizar os números do Estado é um direito e um dever da democracia. Estas são medidas institucionais, apartidárias, com base legal existente — não acusações.",
      en: "Scrutinizing the State's numbers is a democratic right and duty. These are institutional, non-partisan measures grounded in existing law — not accusations.",
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
        titulo: { pt: "Auditoria técnica independente do código", en: "Independent technical audit of the code" } as L,
        texto: { pt: "Auditoria externa do kit de verificação (os 63 gaps) e da correspondência entre o código inspecionado e o binário que roda nas urnas — pedido feito pelas Forças Armadas no relatório EFASEV/2022 e nunca atendido.", en: "An external audit of the verification kit (the 63 gaps) and of the correspondence between the inspected source code and the binary that runs on the machines — a request made by the Armed Forces in the EFASEV/2022 report and never fulfilled." } as L,
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
      { value: 1_491_608, label: { pt: "adultos (18+) morreram em 2022 — contagem exata do DATASUS (que ainda subnotifica)", en: "adults (18+) died in 2022 — exact DATASUS count (which still underreports)" } as L, tone: "slate" as const },
      { value: 787_825, label: { pt: "títulos o TSE cancelou por óbito naquele ano", en: "registrations the TSE cancelled for death that year" } as L, tone: "teal" as const },
      { value: 629_203, label: { pt: "eleitores comprovadamente mortos permaneceram aptos a votar", en: "demonstrably dead voters remained eligible to vote" } as L, tone: "rose" as const },
    ],
    cicloLabel: { pt: "No ciclo entre as duas eleições presidenciais (2022–2026), isso acumula cerca de", en: "Across the cycle between the two presidential elections (2022–2026), this accumulates about" } as L,
    ciclo: 2_517_000,
    cicloUnidade: { pt: "títulos de mortos aptos a votar", en: "dead people's registrations eligible to vote" } as L,
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
    naoProvadoLabel: { pt: "O que ainda não está provado", en: "What is not proven yet" } as L,
    perguntaLabel: { pt: "A pergunta certa", en: "The right question" } as L,
    provado: {
      pt: "Está provado que mortos reais — pessoas que o Ministério da Saúde registra como falecidas — permaneceram no cadastro do TSE, aptas a votar, às centenas de milhares. Não é estimativa nem estatística: é a diferença entre os óbitos reais (DATASUS, que não inventa mortes) e os cancelamentos que o próprio TSE fez. Só em 2022 foram pelo menos 629 mil eleitores mortos sem baixa no cadastro.",
      en: "It is proven that real dead people — individuals the Ministry of Health records as deceased — remained in the TSE registry, eligible to vote, by the hundreds of thousands. Not an estimate or a statistic: it is the difference between real deaths (DATASUS, which does not invent deaths) and the cancellations the TSE itself made. In 2022 alone, at least 629,000 dead voters went uncancelled.",
    } as L,
    falta: {
      pt: "Não está provado — com dado público — que esses títulos votaram, nem no total. Em alguns municípios houve mais votos do que moradores; mas parte disso também pode ser eleitor vivo com domicílio eleitoral em outro município, o que a lei permite. Separar um morto que votou de um vivo registrado fora exige ligar cada voto ao CPF. Esse dado é sigiloso (LGPD) e só o governo tem — e o cruzamento leva menos de uma hora.",
      en: "It is not proven — with public data — that these registrations voted, not even in aggregate. In some municipalities there were more votes than residents; but part of that may also be living voters whose electoral domicile is in another municipality, which the law allows. Telling a dead person who voted from a living voter registered elsewhere requires linking each vote to the ID. That data is confidential (LGPD) and only the government holds it — and the cross-check takes under an hour.",
    } as L,
    porque: {
      pt: "Por isso a pergunta certa mudou. Não é mais “há mortos aptos a votar no cadastro?” — há, e está provado. É “por que o governo, que pode confirmar em uma hora se esses mortos votaram, não confirma e não responde à população?”.",
      en: "That is why the right question has changed. It is no longer “are there dead people eligible to vote in the registry?” — there are, and it is proven. It is “why does the government, which can confirm in one hour whether those dead people voted, not confirm it and not answer the public?”.",
    } as L,
  },

  resposta: {
    title: { pt: "A população merece uma resposta", en: "The public deserves an answer" } as L,
    body: {
      pt: "Isto não é uma teoria — é uma conta que não fecha, feita com os números que o próprio governo publica. O cadastro eleitoral tem centenas de milhares de registros que não correspondem a pessoas vivas; o TSE não cancela os títulos de quem morre no ritmo que a lei exige; e a ferramenta que deveria permitir ao cidadão verificar tudo isso não funciona. Nada disso prova fraude. Tudo isso prova que uma auditoria séria, independente e profunda precisa ser feita — e que a resposta está a um cruzamento de dados de distância.",
      en: "This is not a theory — it is a sum that does not add up, built from the government's own published numbers. The voter registry holds hundreds of thousands of records that do not correspond to living people; the TSE does not cancel the dead's registrations at the pace the law requires; and the tool meant to let citizens verify all this does not work. None of it proves fraud. All of it proves that a serious, independent, thorough audit must be done — and that the answer is one data cross-check away.",
    } as L,
  },
};
