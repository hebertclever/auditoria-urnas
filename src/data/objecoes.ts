// Objeções comuns e respostas. O objetivo é blindar o argumento contra os desvios mais usados.
import type { L } from "@/i18n/config";

export type Objecao = { objecao: L; resposta: L };

export const objecoes = {
  eyebrow: { pt: "Antecipando os desvios", en: "Anticipating the deflections" } as L,
  title: { pt: "Objeções — e por que elas não derrubam o achado", en: "Objections — and why they do not defeat the finding" } as L,
  lead: {
    pt: "As críticas previsíveis têm resposta objetiva. Em nenhuma delas o problema desaparece: ele apenas muda de endereço — e todos os endereços levam à mesma conclusão: precisa de auditoria.",
    en: "The predictable criticisms have objective answers. In none of them does the problem vanish: it only changes address — and every address leads to the same conclusion: an audit is needed.",
  } as L,
  itens: [
    {
      objecao: { pt: "“Isso não muda o resultado da eleição.”", en: "“This does not change the election result.”" } as L,
      resposta: {
        pt: "A auditoria não afirma que mudou — afirma que o sistema não permite saber. Integridade não se mede pela margem de votos: um cadastro que não bate com os óbitos e um kit de verificação que não verifica tiram a presunção de correção, independentemente do placar. E dizer “não mudou nada” é indemonstrável exatamente porque as ferramentas de verificação falham. Se fosse uma contagem física conferível, a objeção teria peso. Como não é, ela se vira contra quem a faz.",
        en: "The audit does not claim it changed — it claims the system makes that impossible to know. Integrity is not measured by the vote margin: a registry that does not match the death records and a verification kit that does not verify remove the presumption of correctness, regardless of the score. And saying “nothing changed” is unprovable precisely because the verification tools fail. If this were a checkable physical count, the objection would carry weight. Since it is not, it turns against whoever raises it.",
      } as L,
    },
    {
      objecao: { pt: "“O TSE já corrigiu isso.”", en: "“The TSE has already fixed this.”" } as L,
      resposta: {
        pt: "Como saberemos? Sem o cruzamento óbitos × comparecimento publicado, sem o código em execução auditável de forma independente, e com o próprio kit de verificação quebrado, “já corrigimos” é uma afirmação que não pode ser verificada por ninguém de fora. Correção de verdade é auditável e contínua — uma integração publicada, com logs e números abertos — e não uma nota à imprensa. Enquanto a correção não for verificável, ela não conta como correção.",
        en: "How would we know? Without the published deaths × turnout cross-check, without the running code independently auditable, and with the verification kit itself broken, “we already fixed it” is a claim no outsider can verify. A real fix is auditable and continuous — a published integration, with open logs and numbers — not a press note. Until the fix is verifiable, it does not count as a fix.",
      } as L,
    },
    {
      objecao: { pt: "“Os auditores autorizados não encontraram nada.”", en: "“The authorized auditors found nothing.”" } as L,
      resposta: {
        pt: "O processo formal inspeciona o código-fonte em sala fechada, com tempo e acesso limitados, sob sigilo, e sem a correspondência entre o código inspecionado e o binário que roda na urna — a verificação que as Forças Armadas pediram no relatório EFASEV/2022 e não obtiveram. Uma análise independente de dados 100% públicos encontrou 63 falhas no kit de verificação e a divergência entre as bases oficiais. Se o processo oficial não surfou isso, o problema é o processo de auditoria — não a ausência de falhas.",
        en: "The formal process inspects source code in a closed room, with limited time and access, under confidentiality, and without the correspondence between the inspected code and the binary that runs on the machine — the verification the Armed Forces requested in the EFASEV/2022 report and did not obtain. An independent analysis of fully public data found 63 flaws in the verification kit and the divergence between the official databases. If the official process did not surface this, the problem is the audit process — not the absence of flaws.",
      } as L,
    },
    {
      objecao: { pt: "“São bugs normais; todo software tem bug.”", en: "“These are normal bugs; all software has bugs.”" } as L,
      resposta: {
        pt: "Não para código de segurança eleitoral em produção. O padrão aceitável de falhas de verificação nesse contexto é zero. Encontrar 63 falhas — todas enfraquecendo a verificação, uma a cada 45 linhas — tem a aparência de um rascunho, não de software de produção auditado. A probabilidade de 63 erros caírem todos do mesmo lado por acaso é de 1 em 9,2 quintilhões. Isso, sozinho, já põe em dúvida o nível técnico do que foi entregue — e, por tabela, a qualidade do que não podemos ver.",
        en: "Not for election-security code in production. The acceptable rate of verification flaws in this context is zero. Finding 63 flaws — all weakening verification, one every 45 lines — looks like a draft, not audited production software. The probability of 63 errors all landing on the same side by chance is 1 in 9.2 quintillion. That alone casts doubt on the technical level of what was delivered — and, by extension, on the quality of what we cannot see.",
      } as L,
    },
    {
      objecao: { pt: "“Você está pedindo para abrir o código secreto da urna.”", en: "“You are asking to open the machine's secret source code.”" } as L,
      resposta: {
        pt: "Não. Quase tudo o que esta auditoria mostra foi feito com dados públicos, sem tocar no código da urna. E a maior parte das providências que recomendamos também dispensa o código-fonte da urna: cruzar óbitos com comparecimento, auditar a limpeza do cadastro, periciar o kit de verificação que já é público. O código da urna é o último degrau — e o menos necessário para o que já está provado.",
        en: "No. Almost everything this audit shows was done with public data, without touching the machine's code. And most of the steps we recommend also require no access to the machine's source: cross-checking deaths against turnout, auditing the registry cleanup, examining the already-public verification kit. The machine's source code is the last rung — and the least necessary for what is already proven.",
      } as L,
    },
  ] as Objecao[],
};
