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
      { pt: "Erro de processo provado: 42% dos títulos de quem morre não são cancelados no ano — número do próprio TSE.", en: "Proven process error: 42% of dead voters' registrations go uncancelled within the year — the TSE's own figure." },
      { pt: "Impossibilidade provada: em 137 municípios houve mais comparecimento do que pessoas vivas na faixa.", en: "Proven impossibility: in 137 municipalities turnout exceeded the living people in the age band." },
    ] as { pt: string; en: string }[],
    cta: { pt: "Ver o que está provado e o que exigir", en: "See what is proven and what to demand" } as L,
  },

  // 1) O QUE ESTÁ PROVADO
  provado: {
    eyebrow: { pt: "Fatos, não opinião", en: "Facts, not opinion" } as L,
    title: { pt: "O que esta auditoria prova", en: "What this audit proves" } as L,
    lead: {
      pt: "Cada item abaixo é aritmética sobre fontes primárias oficiais (T0). Não depende de interpretação. Abra “Auditar” para refazer a conta.",
      en: "Each item below is arithmetic on primary official sources (T0). It requires no interpretation. Open “Audit” to redo the math.",
    } as L,
    itens: [
      {
        n: 1,
        claim: { pt: "As duas bases oficiais do Estado se contradizem muito além de qualquer erro de medição.", en: "The State's two official databases contradict each other far beyond any measurement error." } as L,
        detail: {
          pt: "O IBGE contou 37.814 pessoas com 100 anos ou mais, de porta em porta, em 2022. O TSE tem 298.239 registradas para votar. São 7,9 vezes mais. A diferença (260 mil) não é erro de amostra — é uma ordem de grandeza.",
          en: "IBGE counted 37,814 people aged 100+, door to door, in 2022. The TSE has 298,239 registered to vote. That is 7.9 times more. The gap (260k) is not sampling error — it is an order of magnitude.",
        } as L,
        tipo: { pt: "Prova de erro de base", en: "Proof of a database error" } as L,
        fonte: { tier: "T0", source: { pt: "IBGE Censo 2022 (SIDRA 9514) · TSE perfil de comparecimento 2026", en: "IBGE 2022 Census (SIDRA 9514) · TSE turnout profile 2026" }, date: "2022 · 2026", href: "https://sidra.ibge.gov.br/tabela/9514" } as Fonte,
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
        claim: { pt: "O cadastro não é mantido como a lei manda: 42% dos títulos de quem morre ficam ativos no ano.", en: "The registry is not maintained as the law requires: 42% of dead voters' registrations stay active within the year." } as L,
        detail: {
          pt: "Em 2022 morreram cerca de 1,35 milhão de eleitores. O TSE cancelou 787.825 títulos por óbito. Sobram 560 mil por ano sem cancelar. A Resolução TSE 22.166/2006 já prevê o cruzamento automático com os óbitos desde 2006.",
          en: "In 2022 about 1.35 million voters died. The TSE cancelled 787,825 registrations for death. That leaves 560k uncancelled per year. TSE Resolution 22.166/2006 has required automatic cross-checking with death records since 2006.",
        } as L,
        tipo: { pt: "Prova de erro de processo", en: "Proof of a process error" } as L,
        fonte: { tier: "T0", source: { pt: "TSE, cancelamentos 2022 · DATASUS/SIM", en: "TSE, 2022 cancellations · DATASUS/SIM" }, date: "2023", href: "https://www.tse.jus.br/comunicacao/noticias/2023/Maio/justica-eleitoral-cancelou-quase-800-mil-titulos-em-2022" } as Fonte,
      },
      {
        n: 4,
        claim: { pt: "Em muitos casos foi registrado mais voto do que havia gente viva para votar naquela faixa.", en: "In many cases more votes were recorded than there were living people to cast them in that age band." } as L,
        detail: {
          pt: "Em 137 municípios, o comparecimento de uma faixa 70+ no 2º turno de 2022 superou a população viva dessa faixa no Censo. Em 107 municípios, os votos totais de 2026 superaram a população inteira — incluindo crianças. É uma impossibilidade: esses votos não podem todos ter vindo de pessoas vivas contadas ali.",
          en: "In 137 municipalities, turnout of a 70+ band in the 2022 runoff exceeded that band's living Census population. In 107 municipalities, total 2026 votes exceeded the entire population — children included. It is an impossibility: these votes cannot all have come from living people counted there.",
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

  resposta: {
    title: { pt: "A população merece uma resposta", en: "The public deserves an answer" } as L,
    body: {
      pt: "Isto não é uma teoria — é uma conta que não fecha, feita com os números que o próprio governo publica. O cadastro eleitoral tem centenas de milhares de registros que não correspondem a pessoas vivas; o TSE não cancela os títulos de quem morre no ritmo que a lei exige; e a ferramenta que deveria permitir ao cidadão verificar tudo isso não funciona. Nada disso prova fraude. Tudo isso prova que uma auditoria séria, independente e profunda precisa ser feita — e que a resposta está a um cruzamento de dados de distância.",
      en: "This is not a theory — it is a sum that does not add up, built from the government's own published numbers. The voter registry holds hundreds of thousands of records that do not correspond to living people; the TSE does not cancel the dead's registrations at the pace the law requires; and the tool meant to let citizens verify all this does not work. None of it proves fraud. All of it proves that a serious, independent, thorough audit must be done — and that the answer is one data cross-check away.",
    } as L,
  },
};
