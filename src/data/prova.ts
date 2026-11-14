// "O que isto prova" — o núcleo afirmativo da auditoria.
// Provado, por aritmética sobre fontes T0: o cadastro guarda títulos que não podem corresponder a pessoas
// vivas, a baixa por óbito cobre pouco mais da metade das mortes e o material público de conferência tem
// 63 achados. Em aberto (ADR-053): se algum título de falecido registrou comparecimento — os agregados
// públicos não permitem afirmar nem negar; só o cruzamento nominal do governo responde.
import type { L } from "@/i18n/config";
import type { Tier } from "@/components/ui/source-tag";

type Fonte = { tier: Tier; source: L; date?: string; href?: string };

export const prova = {
  teaserHome: {
    eyebrow: { pt: "Erros e falhas comprovados", en: "Proven errors and flaws" } as L,
    title: { pt: "O que já está provado — com os números do próprio governo", en: "What is already proven — with the government's own numbers" } as L,
    lead: {
      pt: "Três coisas estão provadas por aritmética simples sobre dados oficiais do TSE, do IBGE e do Ministério da Saúde — qualquer pessoa pode refazer a conta. Numa eleição não pode haver erro, e aqui há erros medidos. Se alguém se aproveitou deles, é fraude: esse é o passo seguinte, e se apura com investigação.",
      en: "Three things are proven by simple arithmetic on official data from the TSE, IBGE and the Ministry of Health — anyone can redo the sums. An election cannot contain errors, and here are measured errors. If anyone exploited them, that is fraud: it is the next step, and it takes an investigation.",
    } as L,
    bullets: [
      { pt: "O cadastro tem gente que não pode estar viva: 297.977 eleitores com 100 anos ou mais, contra 37.814 que o IBGE encontrou vivos. Mesmo que ninguém com 95 anos ou mais tivesse morrido desde o Censo, o Brasil teria no máximo 202.992.", en: "The registry holds people who cannot be alive: 297,977 voters aged 100 or over, against 37,814 IBGE found alive. Even if nobody aged 95 or over had died since the Census, Brazil would have at most 202,992." },
      { pt: "A baixa não acompanha as mortes: em 2022 morreram 1.491.608 adultos e o TSE cancelou 787.825 títulos por óbito — pouco mais de um para cada dois.", en: "Removals do not keep up with deaths: in 2022, 1,491,608 adults died and the TSE cancelled 787,825 registrations for death — barely more than one in two." },
      { pt: "O material público para conferir as urnas tem 63 falhas, 8 delas críticas: a conferência do QR Code não funciona com o que vem no pacote e, em 2022, a verificação das assinaturas era falsa — o programa usava uma chave tirada do próprio boletim.", en: "The public material for checking the machines has 63 flaws, 8 of them critical: the QR Code check does not work with what ships in the package and, in 2022, the signature verification was fake — the script used a key taken from the bulletin itself." },
    ] as { pt: string; en: string }[],
    cta: { pt: "Ver as provas e o que exigir", en: "See the proofs and what to demand" } as L,
  },

  // 1) O QUE ESTÁ PROVADO
  provado: {
    eyebrow: { pt: "Erros e falhas comprovados · dados oficiais", en: "Proven errors and flaws · official data" } as L,
    title: { pt: "O sistema eleitoral tem erros comprovados. E numa eleição não pode haver erro.", en: "The electoral system has proven errors. And an election cannot contain errors." } as L,
    lead: {
      pt: "Com os números do próprio governo — TSE, IBGE e Ministério da Saúde — esta auditoria prova, com contas que qualquer pessoa refaz: o cadastro de eleitores guarda centenas de milhares de títulos de pessoas que não podem estar vivas; o TSE dá baixa por óbito em pouco mais da metade das mortes; o material público para conferir as urnas tem 63 falhas; e nenhum teste de rotina examina, depois da votação, as urnas que foram de fato usadas. Se alguém se aproveitou desses erros, isso é fraude — e fraude se apura com investigação: é o passo seguinte, que só o Estado pode dar. O primeiro passo está dado aqui: os erros existem, estão medidos e exigem resposta.",
      en: "Using the government's own numbers — TSE, IBGE and the Ministry of Health — this audit proves, with sums anyone can redo: the voter registry holds hundreds of thousands of registrations of people who cannot be alive; the TSE removes barely more than half of those who die; the public material for checking the machines has 63 flaws; and no routine test examines, after the vote, the machines that were actually used. If anyone exploited these errors, that is fraud — and fraud is established by investigation: it is the next step, and only the State can take it. The first step is taken here: the errors exist, they are measured and they demand an answer.",
    } as L,
    resumo: [
      { t: { pt: "Mortos no cadastro", en: "The dead on the rolls" } as L, b: { pt: "O TSE tem 297.977 eleitores com 100 anos ou mais. O IBGE, de porta em porta, encontrou 37.814. É uma lista de chamada com 79 nomes para uma sala de 10 alunos.", en: "The TSE lists 297,977 voters aged 100 or over. IBGE, going door to door, found 37,814. It is a roll call with 79 names for a class of 10." } as L },
      { t: { pt: "Nem a imortalidade explica", en: "Not even immortality explains it" } as L, b: { pt: "Só pode ter 100 anos em 2026 quem tinha 95 ou mais no Censo de 2022 — e o Censo contou 202.992 pessoas nessa idade. Mesmo que nenhuma tivesse morrido em quatro anos, sobrariam 94.985 títulos de centenários sem pessoa possível.", en: "Only someone aged 95 or over in the 2022 Census can be 100 in 2026 — and the Census counted 202,992 people that age. Even if none had died in four years, 94,985 centenarian registrations would be left with no possible person." } as L },
      { t: { pt: "Uma baixa para cada duas mortes", en: "One removal for every two deaths" } as L, b: { pt: "Em 2022 morreram 1.491.608 adultos, segundo o Ministério da Saúde. O TSE cancelou 787.825 títulos por óbito. É como um condomínio que tira da lista de moradores só metade dos que morreram — e continua mandando o boleto para os outros.", en: "In 2022, 1,491,608 adults died, according to the Ministry of Health. The TSE cancelled 787,825 registrations for death. It is like a condominium that removes only half of its deceased residents from the list — and keeps billing the rest." } as L },
      { t: { pt: "Em 2022, a verificação era falsa", en: "In 2022, the verification was fake" } as L, b: { pt: "O programa oficial de 2022 conferia as assinaturas do boletim de urna com uma chave que vinha dentro do próprio boletim — a verificação era falsa: quem falsificasse o boletim colocaria ali a própria chave, e o programa responderia “assinatura OK”. É um cadeado vendido com a chave pendurada: a chave é verdadeira, mas a segurança é falsa. Em 2024 isso mudou — sem aviso.", en: "The official 2022 script checked the ballot-box bulletin’s signatures with a key that came from inside the bulletin itself — the verification was fake: anyone forging the bulletin would put their own key there, and the script would answer “signature OK”. It is a padlock sold with the key hanging from it: the key is real, but the security is fake. In 2024 this changed — with no notice." } as L },
      { t: { pt: "63 falhas no material de conferência", en: "63 flaws in the checking material" } as L, b: { pt: "Lemos as 2.852 linhas dos programas e especificações que o TSE publica para conferir os arquivos da urna: 63 falhas, 8 críticas. A conferência do QR Code não funciona com o que vem no pacote, e a assinatura de software não é conferida por nenhum programa. É um alarme de incêndio com defeitos que o deixam mudo: ninguém percebe até precisar dele.", en: "We read all 2,852 lines of the scripts and specifications the TSE publishes for checking the machine's files: 63 flaws, 8 critical. The QR Code check does not work with what ships in the package, and no script checks the software signature. It is a fire alarm whose defects keep it silent: nobody notices until it is needed." } as L },
      { t: { pt: "A urna usada não é examinada", en: "The machine that was used is not examined" } as L, b: { pt: "O teste de integridade é feito em urnas retiradas da seção na véspera e trocadas por outras. Nenhum teste de rotina examina, depois da votação, as urnas que de fato receberam os votos. É como uma blitz que só confere os carros que ficaram na garagem.", en: "The integrity test is run on machines withdrawn from their polling stations the day before and replaced by others. No routine test examines, after the vote, the machines that actually received the votes. It is like a roadside check that only inspects the cars left in the garage." } as L },
    ],
    itens: [
      {
        n: 1,
        claim: { pt: "Em escala, é impossível que essas pessoas estejam vivas: o cadastro tem quase 8 vezes mais centenários do que o Brasil.", en: "At scale, it is impossible for these people to be alive: the registry holds almost 8 times more centenarians than Brazil has." } as L,
        detail: {
          pt: "O IBGE contou 37.814 pessoas com 100 anos ou mais, de porta em porta, em 2022. O TSE tem 297.977 registradas para votar em 2026 — 7,9 vezes mais. Em 2022 eram 184.330: o cadastro ganhou 113 mil centenários em quatro anos, enquanto o Ministério da Saúde registra cerca de 15 mil mortes de centenários por ano. E há um teto que não depende de estimativa nenhuma: só pode ter 100 anos em 2026 quem tinha 95 ou mais no Censo, e eram 202.992 pessoas. Mesmo que nenhuma tivesse morrido, sobrariam 94.985 títulos sem pessoa possível.",
          en: "IBGE counted 37,814 people aged 100 or over, door to door, in 2022. The TSE has 297,977 registered to vote in 2026 — 7.9 times more. In 2022 there were 184,330: the registry gained 113,000 centenarians in four years, while the Ministry of Health records about 15,000 centenarian deaths a year. And there is a ceiling that depends on no estimate at all: only someone aged 95 or over in the Census can be 100 in 2026, and there were 202,992 of them. Even if none had died, 94,985 registrations would be left with no possible person.",
        } as L,
        tipo: { pt: "Prova de impossibilidade demográfica", en: "Proof of demographic impossibility" } as L,
        fonte: { tier: "T0", source: { pt: "IBGE Censo 2022 (SIDRA 9514) · TSE perfil de comparecimento 2022 e 2026 · DATASUS/SIM", en: "IBGE 2022 Census (SIDRA 9514) · TSE turnout profile 2022 and 2026 · DATASUS/SIM" }, date: "2022 · 2026", href: "https://sidra.ibge.gov.br/tabela/9514" } as Fonte,
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
        claim: { pt: "O cadastro não é mantido como a lei manda: em 2022, a baixa por óbito cobriu pouco mais da metade das mortes.", en: "The registry is not maintained as the law requires: in 2022, death removals covered barely more than half of the deaths." } as L,
        detail: {
          pt: "Em 2022 morreram 1.491.608 adultos — contagem exata do DATASUS, não estimativa; cerca de 95% tinham título. O TSE cancelou 787.825 títulos por óbito naquele ano. Ficam 629 mil mortes de eleitores sem a baixa correspondente. Parte pode ser corrigida depois, por outros caminhos; o que não é corrigido aparece no topo da pirâmide: em 2022 havia 606 mil títulos de pessoas de 90 anos ou mais além de todos os brasileiros vivos dessa idade. A Resolução TSE 22.166/2006 prevê o cruzamento com os registros de óbito desde 2006.",
          en: "In 2022, 1,491,608 adults died — an exact DATASUS count, not an estimate; about 95% were registered. The TSE cancelled 787,825 registrations for death that year. That leaves 629,000 voter deaths without the matching removal. Some may be corrected later by other routes; what is never corrected shows up at the top of the age pyramid: in 2022 there were 606,000 registrations of people aged 90 or over beyond every living Brazilian of that age. TSE Resolution 22.166/2006 has provided for cross-checking against death records since 2006.",
        } as L,
        tipo: { pt: "Prova de erro de processo", en: "Proof of a process error" } as L,
        fonte: { tier: "T0", source: { pt: "TSE, cancelamentos 2022 · DATASUS/SIM · IBGE Censo 2022", en: "TSE, 2022 cancellations · DATASUS/SIM · IBGE 2022 Census" }, date: "2023", href: "https://www.tse.jus.br/comunicacao/noticias/2023/Maio/justica-eleitoral-cancelou-quase-800-mil-titulos-em-2022" } as Fonte,
      },
      {
        n: 4,
        claim: { pt: "Em 137 municípios, votou mais gente de uma faixa de 70+ do que o Censo contou morando ali.", en: "In 137 municipalities, more people in a 70+ age band voted than the Census counted living there." } as L,
        detail: {
          pt: "No 2º turno de 2022, em 137 municípios o comparecimento de uma faixa de 70 anos ou mais superou os moradores dessa faixa no Censo — 1.089 a mais, no total. E em 107 municípios os votos de 2026 superaram a população inteira estimada pelo IBGE. Há duas explicações possíveis: eleitores que moram em outra cidade e votam ali, o que a lei permite, ou títulos usados por quem não devia. Somando por estado, o excesso desaparece — sinal de que o domicílio eleitoral pesa. Os dados públicos não separam uma coisa da outra; o TSE separa em minutos.",
          en: "In the 2022 runoff, in 137 municipalities turnout in a 70+ age band exceeded that band's residents in the Census — 1,089 more in total. And in 107 municipalities the 2026 votes exceeded the entire population estimated by IBGE. There are two possible explanations: voters who live in another town and vote there, which the law allows, or registrations used by someone who should not. Added up by state, the excess disappears — a sign that electoral domicile weighs heavily. Public data cannot tell the two apart; the TSE can, in minutes.",
        } as L,
        tipo: { pt: "Sinal que exige explicação", en: "Signal that demands an explanation" } as L,
        fonte: { tier: "T0", source: { pt: "TSE BWEB 2026 e perfil 2022 × IBGE Censo/estimativa", en: "TSE BWEB 2026 and 2022 profile × IBGE Census/estimate" }, date: "2022 · 2026", href: "https://dadosabertos.tse.jus.br/dataset/resultados-2026-boletim-de-urna" } as Fonte,
      },
      {
        n: 5,
        claim: { pt: "Entre os dois turnos, o comparecimento dos idosos salta como em nenhuma outra faixa — e a cada eleição o salto piora.", en: "Between the two rounds, elderly turnout jumps like no other age band — and each election the jump gets worse." } as L,
        detail: {
          pt: "Do 1º para o 2º turno de 2022, compareceram 614 mil eleitores de 70 anos ou mais a mais (+10%), enquanto as faixas de 21 a 69 ficaram praticamente paradas (+0,05%). Em 2026, o padrão se repetiu com mais que o dobro da intensidade: 1.295 mil a mais (+14,8%), enquanto os menores de 70 subiram apenas 1,4%. Quanto mais velha a faixa, maior o salto: de +9,4% aos 70–74 até +55% entre os centenários. Em 2014 e 2018 o salto dos idosos foi de +3,9% e +2,8%. Voto facultativo e mobilização explicam uma parte: quem não é obrigado a votar oscila mais. Mas o padrão se repete, piora a cada eleição e o TSE consegue explicar com um cruzamento simples — e ainda não explicou.",
          en: "From the first to the second round of 2022, 614,000 more voters aged 70 or over turned out (+10%), while ages 21 to 69 barely moved (+0.05%). In 2026, the pattern repeated with more than double the intensity: 1,295,000 more (+14.8%), while under-70s rose only 1.4%. The older the band, the bigger the jump: from +9.4% at 70–74 to +55% among centenarians. In 2014 and 2018 the elderly jump was +3.9% and +2.8%. Optional voting and mobilisation explain part of it: those not required to vote fluctuate more. But the pattern repeats, worsens each election, and the TSE can explain it with a simple cross-check — and has not yet explained.",
        } as L,
        tipo: { pt: "Anomalia a explicar", en: "Anomaly to be explained" } as L,
        fonte: { tier: "T0", source: { pt: "TSE perfil de comparecimento 2014/2018/2022/2026", en: "TSE turnout profile 2014/2018/2022/2026" }, date: "2014–2026", href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2026" } as Fonte,
      },
      {
        n: 6,
        claim: { pt: "O material que o TSE publica para conferir os arquivos da urna tem 63 falhas.", en: "The material the TSE publishes for checking the machine's files has 63 flaws." } as L,
        detail: {
          pt: "São 63 achados em 2.852 linhas de programas e especificações: 8 críticos, 19 altos, 22 médios e 14 menores. Entre os críticos: a conferência do QR Code não funciona com o que vem no pacote, a assinatura de software não é conferida por nenhum programa e, em 2022, a conferência usava uma chave tirada do próprio boletim. O README do TSE chama esses programas de “exemplos” — mas eles são tudo o que o cidadão recebe para conferir.",
          en: "There are 63 findings in 2,852 lines of scripts and specifications: 8 critical, 19 high, 22 medium and 14 minor. Among the critical ones: the QR Code check does not work with what ships in the package, no script checks the software signature and, in 2022, the check used a key taken from the bulletin itself. The TSE's README calls these scripts “examples” — but they are all the citizen is given to check with.",
        } as L,
        tipo: { pt: "Prova de falha técnica", en: "Proof of technical flaw" } as L,
        fonte: { tier: "T0", source: { pt: "Pacote oficial do TSE (programas e especificações ASN.1), lido linha a linha", en: "Official TSE package (scripts and ASN.1 specs), read line by line" }, date: "2026", href: "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/formato-arquivos-de-bu-rdv-e-assinatura-digital" } as Fonte,
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
        b: { pt: "A pós-enumeração do IBGE mediu 8,3% de erro líquido nacional, 3,9% em municípios pequenos e 3,3–3,5% nos idosos de 75–79 anos. Para o cadastro do TSE estar certo, o Censo teria de ter deixado de contar 87% dos centenários — achar só 1 em cada 8.", en: "IBGE's post-enumeration measured 8.3% national net error, 3.9% in small municipalities and 3.3–3.5% among the 75–79. For the TSE registry to be right, the Census would have had to miss 87% of centenarians — to find only 1 in 8." } as L,
      },
      {
        t: { pt: "A ciência mostra que o Censo conta centenários a MAIS, não a menos.", en: "Research shows the Census overcounts centenarians, not undercounts." } as L,
        b: { pt: "A demografia brasileira documenta que o Censo superestima os muito idosos em 2 a 3 vezes (idades declaradas sem registro civil). Isso torna o gap do TSE ainda maior: 7,9× é um piso, não um teto.", en: "Brazilian demography documents that the Census overstates the very old by 2–3× (ages declared without civil records). That makes the TSE gap even larger: 7.9× is a floor, not a ceiling." } as L,
      },
    ],
    verdict: {
      pt: "Conclusão: é praticamente certo que o erro está na base do TSE. Nenhuma pós-enumeração, nenhum padrão internacional, descreve um censo que erre 87% para menos nos idosos. O TSE é a autoridade sobre a eleição — não sobre quantos brasileiros existem. A régua da realidade é o IBGE, e é a régua que o próprio Estado adota. Erro em eleição é inaceitável — e fraude não está excluída como possibilidade enquanto a investigação não for feita.",
      en: "Conclusion: it is practically certain the error is in the TSE's database. No post-enumeration, no international benchmark, describes a census that undercounts the elderly by 87%. The TSE is the authority on the election — not on how many Brazilians exist. The yardstick of reality is IBGE, and it is the yardstick the State itself adopts. Error in an election is unacceptable — and fraud is not excluded as a possibility until the investigation is done.",
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
        pt: "O DATASUS não é vago: ele conta cada morte, nome a nome, com atestado assinado por médico. Foram 74.242 mortes de centenários em cinco anos. Mesmo assim, o cadastro mantém quase 300 mil centenários aptos a votar — quatro vezes todas as mortes de centenários de meia década. Esses mortos existem, estão contados pelo Ministério da Saúde, e deveriam ter saído do cadastro.",
        en: "DATASUS is not vague: it counts every death, name by name, with a physician-signed certificate. There were 74,242 centenarian deaths in five years. Even so, the registry keeps almost 300,000 centenarians eligible to vote — four times every centenarian death of half a decade. These dead people exist, are counted by the Ministry of Health, and should have been removed from the registry.",
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
        texto: { pt: "Auditoria independente do cadastro nas faixas 90+ e centenários, nos 137 municípios com comparecimento acima dos moradores da faixa e nos 730 com mais eleitores que habitantes — com os nomes, sob sigilo, conferidos contra a base de óbitos.", en: "An independent audit of the registry in the 90+ and centenarian bands, in the 137 municipalities with turnout above the band's residents and the 730 with more voters than inhabitants — with the names, under confidentiality, checked against the death registry." } as L,
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
    title: { pt: "Quantos títulos de mortos estão no cadastro?", en: "How many dead people's registrations are on the rolls?" } as L,
    lead: {
      pt: "Dá para medir de duas formas, as duas só com números oficiais: o ritmo — quantas mortes ficam sem baixa a cada ano — e o estoque — quantos títulos existem além das pessoas vivas. O que não dá para medir de fora é quantos desses títulos registraram voto: essa é a conta que só o governo faz.",
      en: "It can be measured in two ways, both with official numbers only: the pace — how many deaths go unremoved each year — and the stock — how many registrations exist beyond the living. What cannot be measured from outside is how many of those registrations recorded a vote: that is the sum only the government can do.",
    } as L,
    // Funil medido (um ano, 2022)
    funil: [
      { value: 1_491_608, label: { pt: "adultos (18+) morreram em 2022 — contagem exata do DATASUS, que ainda subnotifica", en: "adults (18+) died in 2022 — exact DATASUS count, which still underreports" } as L, tone: "slate" as const },
      { value: 1_417_028, label: { pt: "deles tinham título de eleitor (~95% dos adultos, segundo o próprio TSE)", en: "of them held a voter registration (~95% of adults, per the TSE itself)" } as L, tone: "slate" as const },
      { value: 787_825, label: { pt: "títulos o TSE cancelou por óbito naquele ano", en: "registrations the TSE cancelled for death that year" } as L, tone: "teal" as const },
      { value: 629_203, label: { pt: "mortes de eleitores ficaram sem baixa por óbito naquele ano (1.417.028 − 787.825)", en: "voter deaths were left without a death removal that year (1,417,028 − 787,825)" } as L, tone: "rose" as const },
    ],
    cicloLabel: { pt: "O estoque, medido em 2022: títulos de pessoas de 90 anos ou mais além de todos os brasileiros vivos dessa idade", en: "The stock, measured in 2022: registrations of people aged 90 or over beyond every living Brazilian of that age" } as L,
    ciclo: 606_556,
    cicloUnidade: { pt: "títulos sem pessoa viva correspondente (cadastro do TSE × Censo, mesmo ano)", en: "registrations with no living person behind them (TSE registry × Census, same year)" } as L,
    // Sinais medidos que pedem explicação (não medem voto em nome de falecido)
    sinaisTitle: { pt: "Sinais que o TSE precisa explicar", en: "Signals the TSE needs to explain" } as L,
    sinais: [
      { value: 1_294_921, label: { pt: "comparecimentos de 70+ a mais no 2º turno de 2026 do que no 1º (+14,8%) — mais que o dobro de 2022 (+10%); quanto mais velha a faixa, maior o salto", en: "more turnouts of voters 70+ in the 2026 runoff than in the first round (+14.8%) — more than double 2022 (+10%); the older the band, the larger the jump" } as L },
      { value: 614_299, label: { pt: "a mais no 2º turno de 2022 do que no 1º (+10%); em 2014 e 2018 o salto foi de 3,9% e 2,8%", en: "more in the 2022 runoff than in the first round (+10%); in 2014 and 2018 the jump was 3.9% and 2.8%" } as L },
      { value: 1_089, label: { pt: "comparecimentos acima dos moradores da mesma faixa em 137 municípios (2022, 2º turno); domicílio eleitoral explica parte — só o cruzamento separa", en: "turnouts above the same band’s residents in 137 municipalities (2022 runoff); electoral domicile explains part — only the cross-check can separate them" } as L },
    ],
    cap: {
      pt: "Nenhum desses números diz, sozinho, que alguém votou no lugar de um morto: somando o país, e também estado por estado, o comparecimento dos idosos ficou abaixo dos vivos em todas as faixas, e 99% dos títulos de centenários não registraram voto. O que eles dizem é que a porta está aberta — e a Justiça Eleitoral já reconheceu um caso em que ela foi usada: em Pescaria Brava (SC), na eleição de 2016, houve voto em nome de uma eleitora falecida. Quantas vezes isso aconteceu em 2022 e 2026 é a conta CPF × óbito × comparecimento, que o governo faz em menos de uma hora. E se o ritmo de 2022 se repetisse por quatro anos sem nenhuma correção posterior, seriam até 2,5 milhões de títulos por ciclo eleitoral — isso é um teto, não uma medição.",
      en: "None of these numbers says, on its own, that someone voted in a dead person's place: nationwide, and state by state as well, elderly turnout stayed below the number of living people in every age band, and 99% of centenarian registrations recorded no vote. What they say is that the door is open — and the Electoral Court has already recognised a case in which it was used: in Pescaria Brava (Santa Catarina), in the 2016 election, a vote was cast in the name of a deceased voter. How many times that happened in 2022 and 2026 is the ID × death × turnout sum the government can run in under an hour. And if the 2022 pace repeated for four years with no later correction, it would be up to 2.5 million registrations per electoral cycle — that is a ceiling, not a measurement.",
    } as L,
    fontes: [
      { tier: "T0", source: { pt: "DATASUS/SIM (mortes) · TSE, cancelamentos por óbito 2022", en: "DATASUS/SIM (deaths) · TSE, 2022 death cancellations" }, date: "2022", href: "https://www.tse.jus.br/comunicacao/noticias/2023/Maio/justica-eleitoral-cancelou-quase-800-mil-titulos-em-2022" } as Fonte,
      { tier: "T0", source: { pt: "TSE perfil de comparecimento 2022 × IBGE Censo 2022 (SIDRA 9514), nacional e por UF", en: "TSE 2022 turnout profile × IBGE 2022 Census (SIDRA 9514), national and by state" }, date: "2022", href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2022" } as Fonte,
      { tier: "T0", source: { pt: "TSE · REspe 279-89.2016.6.24.0020 (Pescaria Brava/SC), acórdão de 17/10/2017", en: "TSE · REspe 279-89.2016.6.24.0020 (Pescaria Brava/SC), ruling of 17 Oct 2017" }, date: "2017", href: "https://sjur-servicos.tse.jus.br/sjur-servicos/rest/download/pdf/273855" } as Fonte,
    ],
  },

  // 2026 — o 2º turno confirmou o padrão
  estimativa2026: {
    eyebrow: { pt: "A eleição de 2026", en: "The 2026 election" } as L,
    title: { pt: "Em 2026, o padrão se confirmou — com o dobro da intensidade", en: "In 2026, the pattern was confirmed — with double the intensity" } as L,
    porque: {
      pt: "O TSE publicou o perfil do 2º turno de 2026 em 13 de novembro de 2026. A projeção desta auditoria, feita com dados de 2014–2022, estimava um excesso de 59 a 316 mil. O dado real superou a estimativa mais extrema: 1.295 mil comparecimentos a mais dos 70+, um aumento de 14,8% — mais que o dobro dos 614 mil de 2022 (+10%). E o padrão da escada invertida se repetiu: quanto mais velha a faixa, maior o salto — de +9,4% aos 70–74 até +55% entre os centenários. Nas faixas de 21 a 69, o aumento foi de apenas 1,4%.",
      en: "The TSE published the 2026 runoff turnout profile on 13 November 2026. This audit’s projection, based on 2014–2022 data, estimated an excess of 59,000 to 316,000. The real figure exceeded the most extreme estimate: 1,295,000 more 70+ turnouts, a 14.8% increase — more than double the 614,000 of 2022 (+10%). And the inverted staircase pattern repeated: the older the band, the bigger the jump — from +9.4% at 70–74 to +55% among centenarians. In the 21-to-69 bands, the increase was only 1.4%.",
    } as L,
    turnoutNota: {
      pt: "Comparecimento por idade no 1º e no 2º turno de 2026 (dado oficial, publicado 13/11/2026). A queda com a idade é esperada; a anomalia é o aumento entre turnos — quanto mais velha a faixa, maior o salto.",
      en: "Turnout by age in the 2026 first and second rounds (official data, published 13 Nov 2026). The decline with age is expected; the anomaly is the increase between rounds — the older the band, the bigger the jump.",
    } as L,
    // 2026 1T + 2T real (perfil de comparecimento BRASIL completo, 22.121.816 linhas, 27 UFs)
    turnout: [
      { faixa: "70-74", turnout1T: 68.9, comp1T: 4_785_608, turnout2T: 75.3, comp2T: 5_235_213, aptos: 6_948_245 },
      { faixa: "75-79", turnout1T: 52.3, comp1T: 2_487_337, turnout2T: 61.1, comp2T: 2_905_511, aptos: 4_757_020 },
      { faixa: "80-84", turnout1T: 37.2, comp1T: 1_019_705, turnout2T: 46.5, comp2T: 1_276_824, aptos: 2_744_129 },
      { faixa: "85-89", turnout1T: 24.3, comp1T: 356_121, turnout2T: 32.7, comp2T: 478_644, aptos: 1_464_715 },
      { faixa: "90-94", turnout1T: 13.5, comp1T: 89_517, turnout2T: 19.3, comp2T: 128_336, aptos: 664_482 },
      { faixa: "95-99", turnout1T: 4.3, comp1T: 14_654, turnout2T: 6.6, comp2T: 22_161, aptos: 337_136 },
      { faixa: "100+", turnout1T: 0.7, comp1T: 2_133, turnout2T: 1.1, comp2T: 3_307, aptos: 297_977 },
    ],
    salto70mais2026: 1_294_921,
    salto70mais2022: 614_299,
    resultTitle: { pt: "O resultado real — e a projeção que subestimou", en: "The real result — and the projection that underestimated" } as L,
    resultTexto: {
      pt: "A projeção desta auditoria estimava entre 59 mil e 316 mil. O dado real foi 1.295 mil — quatro vezes o teto da projeção. O padrão não só se confirmou: piorou. O mecanismo, o tamanho e a direção são os mesmos de 2022 — escalados para cima.",
      en: "This audit’s projection estimated between 59,000 and 316,000. The real figure was 1,295,000 — four times the projection’s ceiling. The pattern was not just confirmed: it worsened. The mechanism, size and direction are the same as 2022 — scaled up.",
    } as L,
    fontes: [
      { tier: "T0", source: { pt: "TSE · perfil de comparecimento e abstenção 2026 (com 2º turno, publicado 13/11/2026)", en: "TSE · 2026 turnout and abstention profile (with runoff, published 13 Nov 2026)" }, date: "13/11/2026", href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2026" } as Fonte,
      { tier: "T0", source: { pt: "TSE · perfil 2014/2018/2022 (padrão histórico)", en: "TSE · 2014/2018/2022 profiles (historical pattern)" }, date: "2014–2022", href: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2022" } as Fonte,
    ],
  },

  // Pergunta direta — resposta precisa (título e corpo alinhados)
  mortosVotaram: {
    pergunta: { pt: "Mortos votaram? O que está provado, o que os dados não mostram — e quem pode responder", en: "Did dead people vote? What is proven, what the data cannot show — and who can answer" } as L,
    provadoLabel: { pt: "O que está provado — 100%, com dados públicos", en: "What is proven — 100%, with public data" } as L,
    naoProvadoLabel: { pt: "O que os dados públicos não mostram", en: "What public data cannot show" } as L,
    perguntaLabel: { pt: "A pergunta certa", en: "The right question" } as L,
    provado: {
      pt: "Está provado que o cadastro guarda títulos de pessoas que não podem estar vivas — só entre os centenários, pelo menos 260 mil em 2026 — e que o TSE dá baixa por óbito em pouco mais da metade das mortes de adultos. Não é estimativa: é a diferença entre contagens oficiais do próprio Estado. Título de morto ativo é a matéria-prima para alguém votar no lugar dele, e a Justiça Eleitoral já reconheceu que isso aconteceu: em Pescaria Brava (SC), na eleição de 2016, houve voto registrado em nome de uma eleitora falecida.",
      en: "It is proven that the registry holds registrations of people who cannot be alive — among centenarians alone, at least 260,000 in 2026 — and that the TSE removes barely more than half of the adults who die. This is not an estimate: it is the difference between the State's own official counts. An active registration of a dead person is the raw material for someone to vote in their place, and the Electoral Court has already recognised that this happened: in Pescaria Brava (Santa Catarina), in the 2016 election, a vote was recorded in the name of a deceased voter.",
    } as L,
    falta: {
      pt: "Se títulos de falecidos registraram voto em 2022 e 2026 — e quantos. Somando o país inteiro, e também estado por estado, o comparecimento dos idosos ficou abaixo do número de vivos em todas as faixas; e 99% dos títulos de centenários não registraram voto. Ou seja: os números agregados fecham com zero votos em nome de mortos, e fecham também com milhares. Eles não conseguem dizer qual dos dois. Só o cruzamento nome a nome — CPF × óbito × comparecimento — diz. Esse dado é sigiloso (LGPD) e só o governo o tem.",
      en: "Whether dead people's registrations recorded votes in 2022 and 2026 — and how many. Nationwide, and state by state as well, elderly turnout stayed below the number of living people in every age band; and 99% of centenarian registrations recorded no vote. In other words: the aggregate numbers are consistent with zero votes in dead people's names, and equally consistent with thousands. They cannot tell which. Only the name-by-name cross-check — ID × death × turnout — can. That data is confidential (LGPD) and only the government holds it.",
    } as L,
    porque: {
      pt: "Por isso a pergunta certa mudou. Não é mais “há mortos aptos a votar no cadastro?” — há, e está provado. É “por que o governo, que pode confirmar em uma hora se algum título de morto registrou voto, não confirma e não responde à população?”.",
      en: "That is why the right question has changed. It is no longer “are there dead people eligible to vote in the registry?” — there are, and it is proven. It is “why does the government, which can confirm in one hour whether any dead person's registration recorded a vote, not confirm it and not answer the public?”.",
    } as L,
  },

  resposta: {
    title: { pt: "A população merece uma resposta", en: "The public deserves an answer" } as L,
    body: {
      pt: "Os erros estão provados com os números do próprio governo: o cadastro guarda centenas de milhares de títulos de pessoas que não podem estar vivas; a baixa por óbito cobre pouco mais da metade das mortes; o material público de conferência tem 63 falhas; e nenhuma urna usada é examinada, de rotina, depois da votação. Numa eleição não pode haver erro. Se esses erros foram explorados, é fraude — e isso se apura com investigação, que é o passo seguinte. A resposta começa por um cruzamento de dados que o governo faz em menos de uma hora.",
      en: "The errors are proven with the government's own numbers: the registry holds hundreds of thousands of registrations of people who cannot be alive; death removals cover barely more than half of the deaths; the public checking material has 63 flaws; and no used machine is routinely examined after the vote. An election cannot contain errors. If these errors were exploited, that is fraud — and it is established by investigation, which is the next step. The answer starts with a data cross-check the government can run in under an hour.",
    } as L,
    atribuicao: {
      pt: "Fraude não está excluída — mas não deve ser atribuída ao candidato vencedor. Se provada, poderia ter vindo de qualquer direção: interna ou externa, ataque coordenado ou individual. É objetivamente errado atribuir fraude ao vencedor sem prova direta. Mas os erros até aqui demonstrados demandam obrigatoriamente respostas claras do Estado.",
      en: "Fraud is not excluded — but it should not be attributed to the winning candidate. If proven, it could have come from any direction: internal or external, a coordinated attack or an individual one. It is objectively wrong to attribute fraud to the winner without direct proof. But the errors demonstrated so far mandatorily demand clear answers from the State.",
    } as L,
  },
};
