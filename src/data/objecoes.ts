// Objeções comuns e respostas. O objetivo é blindar o argumento contra os desvios mais usados.
import type { L } from "@/i18n/config";

export type Objecao = { objecao: L; resposta: L };

export const objecoes = {
  eyebrow: { pt: "Antecipando os desvios", en: "Anticipating the deflections" } as L,
  title: { pt: "Objeções — e por que elas não derrubam o achado", en: "Objections — and why they do not defeat the finding" } as L,
  lead: {
    pt: "As críticas previsíveis têm resposta objetiva — e, onde a crítica tem razão, dizemos. Em nenhuma delas o problema desaparece: ele apenas muda de endereço — e todos os endereços levam à mesma conclusão: precisa de auditoria.",
    en: "The predictable criticisms have objective answers — and where a criticism is right, we say so. In none of them does the problem vanish: it only changes address — and every address leads to the same conclusion: an audit is needed.",
  } as L,
  itens: [
    {
      objecao: { pt: "“Morto no cadastro não é morto votando.”", en: "“A dead person on the rolls is not a dead person voting.”" } as L,
      resposta: {
        pt: "Correto — e é por isso que pedimos o cruzamento. No país e em cada estado, o comparecimento dos idosos ficou abaixo do número de vivos em todas as faixas, e 99% dos títulos de centenários não registraram voto: os números agregados não mostram voto em nome de morto, e também não o excluem. Mas título de morto ativo é a matéria-prima do problema, e a Justiça Eleitoral já reconheceu que ela foi usada (Pescaria Brava/SC, eleição de 2016). Um cadastro com 260 mil centenários a mais do que o país é erro por si só — e a resposta sobre os votos está a uma hora de trabalho do governo.",
        en: "Correct — and that is why we ask for the cross-check. Nationwide and in every state, elderly turnout stayed below the number of living people in every age band, and 99% of centenarian registrations recorded no vote: the aggregate numbers do not show votes in dead people's names, nor do they rule them out. But an active registration of a dead person is the raw material of the problem, and the Electoral Court has already recognised that it was used (Pescaria Brava, Santa Catarina, 2016 election). A registry with 260,000 more centenarians than the country has is an error in itself — and the answer about the votes is one hour of government work away.",
      } as L,
    },
    {
      objecao: { pt: "“Cidade pequena com mais eleitor que morador é normal: é o domicílio eleitoral.”", en: "“A small town with more voters than residents is normal: that is electoral domicile.”" } as L,
      resposta: {
        pt: "Em parte, sim: a lei permite votar onde se tem vínculo, e quando somamos por estado o excesso dos 137 municípios desaparece. Por isso não chamamos esses casos de “votos impossíveis”. Mas domicílio eleitoral não explica a conta do país inteiro: 297.977 centenários no cadastro para 37.814 no Censo é um total nacional, em que ninguém “mora em outra cidade”. E a própria Lei das Eleições manda revisar o eleitorado quando ele passa de 65% da população (art. 92) — gatilho que 730 municípios preenchem.",
        en: "Partly, yes: the law allows voting where one has ties, and when we add up by state the excess in the 137 municipalities disappears. That is why we do not call those cases “impossible votes”. But electoral domicile does not explain the country-wide sum: 297,977 centenarians on the rolls against 37,814 in the Census is a national total, where nobody “lives in another town”. And the Elections Act itself orders a review of the electorate when it exceeds 65% of the population (art. 92) — a trigger 730 municipalities meet.",
      } as L,
    },
    {
      objecao: { pt: "“Idoso não é obrigado a votar; é natural que o comparecimento dele oscile.”", en: "“The elderly are not required to vote; it is natural for their turnout to fluctuate.”" } as L,
      resposta: {
        pt: "É verdade, e por isso tratamos o salto como sinal a explicar, não como prova. Mas o sinal piora a cada eleição: 614 mil a mais no 2º turno de 2022 (+10%), e 1.295 mil em 2026 (+14,8%) — mais que o dobro. Em 2014 e 2018 foi +3,9% e +2,8%. E quanto mais velha a faixa, maior o salto: de +9,4% aos 70–74 até +55% entre os centenários. Mobilização explica parte. O que pedimos é simples: que o TSE mostre, com o cruzamento que só ele pode fazer, que esses comparecimentos são de eleitores vivos.",
        en: "True, and that is why we treat the jump as a signal to be explained, not as proof. But the signal worsens each election: 614,000 more in the 2022 runoff (+10%), and 1,295,000 in 2026 (+14.8%) — more than double. In 2014 and 2018 it was +3.9% and +2.8%. And the older the band, the bigger the jump: from +9.4% at 70–74 to +55% among centenarians. Mobilisation explains part of it. What we ask is simple: that the TSE show, with the cross-check only it can run, that those turnouts belong to living voters.",
      } as L,
    },
    {
      objecao: { pt: "“Isso não muda o resultado da eleição.”", en: "“This does not change the election result.”" } as L,
      resposta: {
        pt: "A auditoria prova que há erros — no cadastro e no kit de verificação. Erro em eleição é inaceitável, independentemente da margem. Fraude não está excluída como possibilidade e precisa ser investigada. Um cadastro com centenas de milhares de mortos aptos a votar e um kit que não verifica tiram a presunção de correção. E dizer “não mudou nada” é indemonstrável exatamente porque as ferramentas de verificação falham. Se fosse uma contagem física conferível, a objeção teria peso. Como não é, ela se vira contra quem a faz.",
        en: "The audit proves there are errors — in the registry and in the verification kit. Error in an election is unacceptable, regardless of the margin. Fraud is not excluded as a possibility and must be investigated. A registry with hundreds of thousands of dead people eligible to vote and a kit that does not verify remove the presumption of correctness. And saying “nothing changed” is unprovable precisely because the verification tools fail. If this were a checkable physical count, the objection would carry weight. Since it is not, it turns against whoever raises it.",
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
      objecao: { pt: "“Esses programas são só exemplos; não são a ferramenta oficial de auditoria.”", en: "“Those scripts are only examples; they are not the official audit tool.”" } as L,
      resposta: {
        pt: "O próprio README do TSE os chama de “exemplos de leitores”, que “podem servir como base para desenvolvimento de ferramentas mais sofisticadas”. Só que não existe outra coisa: é tudo o que o cidadão recebe para conferir os arquivos da urna. Se o exemplo oficial de conferência tem 63 falhas — e em 2022 conferia o boletim com uma chave tirada do próprio boletim —, o cidadão fica sem meio de conferir. Quem pode publicar uma ferramenta completa e auditável é o TSE.",
        en: "The TSE's own README calls them “example readers” that “may serve as a basis for developing more sophisticated tools”. But there is nothing else: they are all the citizen is given to check the machine's files. If the official example of a check has 63 flaws — and in 2022 checked the bulletin with a key taken from the bulletin itself — the citizen is left with no means of checking. The one who can publish a complete, auditable tool is the TSE.",
      } as L,
    },
    {
      objecao: { pt: "“Os programas analisados nem são do TSE.”", en: "“The scripts you analysed are not even the TSE's.”" } as L,
      resposta: {
        pt: "São. O pacote de 2026 foi baixado do site do TSE (SHA-256 b5ac413e…fbafd). O de 2022 é idêntico, byte a byte, à cópia que o Internet Archive capturou do endereço oficial do TSE em 5 de outubro de 2022. O de 2024 tem o mesmo hash em repositórios independentes; o TSE o substituiu no mesmo endereço em 2026. Nenhum dos 63 achados cita código de terceiros — todos os arquivos estão dentro desses pacotes. Os links e os hashes estão nas fontes da página do código.",
        en: "They are. The 2026 package was downloaded from the TSE website (SHA-256 b5ac413e…fbafd). The 2022 one is byte-for-byte identical to the copy the Internet Archive captured from the official TSE address on 5 October 2022. The 2024 one has the same hash across independent repositories; the TSE replaced it at the same address in 2026. None of the 63 findings cites third-party code — every file is inside those packages. The links and hashes are in the sources of the code page.",
      } as L,
    },
    {
      objecao: { pt: "“São bugs normais; todo software tem bug.”", en: "“These are normal bugs; all software has bugs.”" } as L,
      resposta: {
        pt: "Não para código de segurança eleitoral em produção. O padrão aceitável de falhas de verificação nesse contexto é zero. Encontrar 63 falhas — todas enfraquecendo a verificação, uma a cada 45 linhas — tem a aparência de um rascunho, não de software de produção auditado. É como um contador que comete 63 erros na sua declaração de imposto — e todos os 63 reduzem o que ele deve. Ou um árbitro que erra 63 lances — todos contra o mesmo time. A probabilidade disso por acaso é de 1 em 9,2 quintilhões. Isso, sozinho, já põe em dúvida o nível técnico do que foi entregue — e, por tabela, a qualidade do que não podemos ver. É exatamente por isso que o que não podemos ver precisa ser aberto.",
        en: "Not for election-security code in production. The acceptable rate of verification flaws in this context is zero. Finding 63 flaws — all weakening verification, one every 45 lines — looks like a draft, not audited production software. Like an accountant who makes 63 errors on your tax return — and all 63 reduce what they owe. Or a referee who gets 63 calls wrong — all against the same team. The probability of that by chance is 1 in 9.2 quintillion. That alone casts doubt on the technical level of what was delivered — and, by extension, on the quality of what we cannot see. That is exactly why what we cannot see must be opened.",
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
