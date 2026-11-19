// Para que serve a auditoria: cada achado aponta uma correção — e todas terminam no código-fonte.
// Pedido do autor (19/11/2026): deixar claro que todas as anomalias e erros têm como objetivo abrir o código-fonte
// e melhorar o processo inteiro. Ver ADR-URNA-073.
import type { L } from "@/i18n/config";

export type ItemObjetivo = { icon: "lista" | "baixa" | "lei" | "digital" | "kit" | "urna" | "codigo"; achado: L; correcao: L };

export const objetivo = {
  eyebrow: { pt: "Para que serve esta auditoria", en: "What this audit is for" } as L,
  title: {
    pt: "Cada erro aponta uma correção — e todas terminam no código-fonte",
    en: "Every error points to a fix — and they all end at the source code",
  } as L,
  lead: {
    pt: "Esta auditoria não existe para apontar culpados. Existe para que a eleição possa ser conferida por qualquer pessoa. Cada anomalia que encontramos indica uma correção concreta no processo — e a última delas, a que separa falha de software de inserção manual, é abrir o código-fonte da urna.",
    en: "This audit does not exist to point fingers. It exists so that anyone can check the election. Every anomaly we found points to a concrete fix in the process — and the last one, the one that separates a software fault from a manual insertion, is opening the voting machine's source code.",
  } as L,
  // Pedido do autor (19/11/2026, ADR-URNA-074 item 3): suspeita legítima não é acusação; só a transparência a resolve.
  suspeita: {
    title: { pt: "Suspeitar não é acusar", en: "To suspect is not to accuse" } as L,
    text: {
      pt: "Não afirmamos que houve fraude. Afirmamos que os dados levantam suspeitas legítimas — de erro, de falta de compreensão técnica e também de fraude — que merecem investigação e resposta. O tribunal nega a revisão do eleitorado por falta de orçamento quando a lei põe sob sua guarda a base que reúne o registro civil do país; cita a própria lei com uma palavra que não está nela; e publicou um programa de conferência cuja verificação de assinatura, em 2022, era falsa. Isso preocupa em quem cuida da tecnologia mais importante da nossa democracia: a urna eletrônica.",
      en: "We do not claim there was fraud. We claim the data raise legitimate suspicions — of error, of a lack of technical understanding and also of fraud — that deserve investigation and an answer. The court denies electorate reviews for lack of budget while the law places in its custody the database that brings together the country's civil registry; it quotes the law with a word that is not in it; and it published a checking script whose signature verification, in 2022, was fake. That is worrying in whoever looks after the most important technology of our democracy: the electronic voting machine.",
    } as L,
  },
  transparencia: {
    title: { pt: "O TSE pode tirar essas dúvidas? Pode — com três coisas", en: "Can the TSE settle these doubts? It can — with three things" } as L,
    text: {
      pt: "O código-fonte aberto, o hash que prova que o programa da urna é aquele código e a declaração de tudo o que mudou entre uma versão e outra. A própria lei já prevê as três — programas-fonte apresentados, cópias lacradas e aviso de qualquer alteração —, mas só para fiscais credenciados, dentro do TSE. É essa falta de transparência que transforma cada erro numa dúvida sobre a eleição. Ela precisa ser corrigida.",
      en: "Open source code, the hash proving that the program on the machine is that code, and a statement of everything that changed between one version and the next. The law itself already provides for all three — source programs presented, sealed copies and notice of any change — but only for accredited inspectors, inside the TSE. It is this lack of transparency that turns every error into a doubt about the election. It must be fixed.",
    } as L,
    fonte: { pt: "Lei 9.504/1997, art. 66, §§ 2º e 4º (redação da Lei 10.740/2003) — texto do Planalto, captura de 27/10/2026", en: "Law 9.504/1997, art. 66, §§ 2 and 4 (as amended by Law 10.740/2003) — Planalto text, capture of 27 Oct 2026" } as L,
    href: "https://web.archive.org/web/20261027174519/https://www.planalto.gov.br/ccivil_03/leis/l9504.htm",
  },
  achadoLabel: { pt: "O que encontramos", en: "What we found" } as L,
  correcaoLabel: { pt: "O que precisa mudar", en: "What must change" } as L,
  itens: [
    {
      icon: "lista",
      achado: { pt: "297.977 centenários aptos a votar, contra 37.814 vivos no Censo e 72.501 benefícios do INSS.", en: "297,977 centenarians eligible to vote, against 37,814 alive in the Census and 72,501 INSS benefits." },
      correcao: { pt: "Baixa por óbito automática e auditável, ligada ao registro civil, como manda o Código Eleitoral (art. 71).", en: "Automatic, auditable death removal linked to the civil registry, as the Electoral Code requires (art. 71)." },
    },
    {
      icon: "lei",
      achado: { pt: "A revisão do eleitorado que a lei manda fazer virou opção numa resolução do próprio TSE — que declarou não executá-la.", en: "The electorate review the law orders became an option in the TSE's own resolution — which it declared it would not carry out." },
      correcao: { pt: "Cumprir o art. 92 da Lei das Eleições como está escrito: “determinará de ofício”, sem depender de “conveniência”.", en: "Apply art. 92 of the Elections Act as written: “shall order on its own initiative”, without depending on “convenience”." },
    },
    {
      icon: "baixa",
      achado: { pt: "Em 2022, a baixa por óbito cobriu 52,8% das mortes de adultos.", en: "In 2022, death removals covered 52.8% of adult deaths." },
      correcao: { pt: "Publicar todo ano o cruzamento óbitos × cadastro × comparecimento, com quantos títulos de falecidos foram achados e cancelados.", en: "Publish every year the deaths × registry × turnout cross-check, with how many deceased registrations were found and cancelled." },
    },
    {
      icon: "digital",
      achado: { pt: "92% dos títulos de centenários não têm biometria: na seção, nada confere quem se apresenta.", en: "92% of centenarian registrations have no biometrics: at the polling station, nothing checks who shows up." },
      correcao: { pt: "Revisão com coleta biométrica onde o cadastro passa da população — sem tirar o voto de quem está vivo.", en: "A review with biometric collection wherever the registry exceeds the population — without taking the vote from anyone alive." },
    },
    {
      icon: "kit",
      achado: { pt: "63 falhas no material público que o TSE distribui para conferir as urnas.", en: "63 flaws in the public material the TSE distributes for checking the machines." },
      correcao: { pt: "Perícia independente e uma ferramenta oficial de conferência que funcione — com autor, testes e nota do que mudou.", en: "An independent examination and an official checking tool that works — with an author, tests and a note of what changed." },
    },
    {
      icon: "urna",
      achado: { pt: "Nenhuma urna usada é examinada, de rotina, depois da votação.", en: "No machine that was used is routinely examined after the vote." },
      correcao: { pt: "Auditoria das urnas reais depois do pleito, com amostra direcionada por anomalia e sorteio público (Res. TSE 23.673, arts. 51–52).", en: "An audit of the real machines after the poll, with a sample targeted by anomaly plus a public draw (TSE Res. 23.673, arts. 51–52)." },
    },
    {
      icon: "codigo",
      achado: { pt: "Falha de software ou inserção manual? Nenhum dado público responde.", en: "Software fault or manual insertion? No public data can answer." },
      correcao: { pt: "Abrir o código-fonte em execução, com o histórico de alterações e a prova de que o código inspecionado é o que roda na urna — o pedido das Forças Armadas no relatório de 2022, nunca atendido.", en: "Open the running source code, with its change history and proof that the inspected code is what runs on the machine — the Armed Forces' request in the 2022 report, never fulfilled." },
    },
  ] as ItemObjetivo[],
  fecho: {
    pt: "Numa eleição não pode haver erro. Os erros já estão provados com os números do próprio governo; corrigi-los é obrigação do Estado. Abrir o código é o passo que responde à pergunta que nenhum dado público responde — e deixa o processo inteiro verificável por qualquer cidadão.",
    en: "An election cannot contain errors. The errors are already proven with the government's own numbers; fixing them is the State's duty. Opening the code is the step that answers the question no public data can — and makes the whole process verifiable by any citizen.",
  } as L,
  link: { pt: "Ver a escada de fiscalização para parlamentares", en: "See the oversight ladder for legislators" } as L,
};
