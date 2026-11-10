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
        pt: "Não para código de segurança eleitoral em produção. O padrão aceitável de falhas de verificação nesse contexto é zero. Encontrar 63 falhas — todas enfraquecendo a verificação, uma a cada 45 linhas — tem a aparência de um rascunho, não de software de produção auditado. A probabilidade de 63 erros caírem todos do mesmo lado por acaso é de 1 em 9,2 quintilhões. Isso, sozinho, já põe em dúvida o nível técnico do que foi entregue — e, por tabela, a qualidade do que não podemos ver. É exatamente por isso que o que não podemos ver precisa ser aberto.",
        en: "Not for election-security code in production. The acceptable rate of verification flaws in this context is zero. Finding 63 flaws — all weakening verification, one every 45 lines — looks like a draft, not audited production software. The probability of 63 errors all landing on the same side by chance is 1 in 9.2 quintillion. That alone casts doubt on the technical level of what was delivered — and, by extension, on the quality of what we cannot see. That is exactly why what we cannot see must be opened.",
      } as L,
    },
    {
      objecao: { pt: "“Você está pedindo para abrir o código secreto da urna.”", en: "“You are asking to open the machine's secret source code.”" } as L,
      resposta: {
        pt: "Sim — e é necessário, por uma razão objetiva. Os dados públicos já provam que há erro: na base (centenas de milhares de mortos aptos a votar, impossível em escala) e na equipe técnica (63 falhas, todas na mesma direção: chance de 1 em 9,2 quintilhões de ser acaso, sob a premissa de independência entre elas). Mas nenhum dado público diz de onde o erro vem — falha de software ou inserção manual. Isso só o código em execução, seu histórico de alterações e a correspondência com o binário que roda na urna respondem. Ele fica por último na ordem de fiscalização não por ser dispensável, mas porque os degraus anteriores são mais rápidos e produzem a evidência que justifica a inspeção e mostra onde olhar. Ordem de execução não é ordem de importância.",
        en: "Yes — and it is necessary, for an objective reason. Public data already proves there is error: in the database (hundreds of thousands of dead people eligible to vote, impossible at scale) and in the technical team's work (63 flaws, all in the same direction: a 1-in-9.2-quintillion chance of being accident, assuming the flaws are independent). But no public data says where the error comes from — a software fault or a manual insertion. Only the running code, its change history and its correspondence with the binary that runs on the machine can answer that. It comes last in the order of oversight not because it is dispensable, but because the earlier rungs are faster and produce the evidence that justifies the inspection and shows where to look. Order of execution is not order of importance.",
      } as L,
    },
  ] as Objecao[],
};
