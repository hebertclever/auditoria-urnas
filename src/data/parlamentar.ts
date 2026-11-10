// Guia prático de fiscalização para parlamentares, MP e sociedade.
// Ideia central: dá para fazer MUITO antes de abrir o código-fonte da urna.
// Os modelos de requerimento são instrumentos jurídicos brasileiros — o corpo
// vai em português; a moldura é bilíngue. Adaptar com a assessoria jurídica.
import type { L } from "@/i18n/config";

export const parlamentar = {
  hero: {
    eyebrow: { pt: "Guia prático de fiscalização", en: "Practical oversight guide" } as L,
    title: { pt: "O que um parlamentar pode fazer — antes de tocar no código da urna", en: "What a legislator can do — before touching the machine's code" } as L,
    lead: {
      pt: "O debate costuma pular direto para “abrir o código-fonte da urna”. Mas há uma escada inteira de fiscalização antes disso, feita com dados públicos e pedidos de informação, que já resolve a maior parte das perguntas desta auditoria. Abrir o código da urna é o último degrau — e o menos necessário para o que já está provado.",
      en: "The debate usually jumps straight to “open the machine's source code”. But there is a whole ladder of oversight before that, built on public data and information requests, that already answers most of this audit's questions. Opening the machine's code is the last rung — and the least necessary for what is already proven.",
    } as L,
  },

  escadaTitle: { pt: "A escada da fiscalização", en: "The oversight ladder" } as L,
  escadaLead: {
    pt: "Do mais fácil e imediato ao mais difícil. Os seis primeiros degraus não precisam do código-fonte da urna.",
    en: "From the easiest and most immediate to the hardest. The first six rungs need no access to the machine's source code.",
  } as L,
  semCodigo: { pt: "sem o código da urna", en: "no machine source needed" } as L,
  comCodigo: { pt: "exige acesso formal ao código da urna", en: "requires formal access to machine source" } as L,

  escada: [
    {
      n: 1,
      titulo: { pt: "Refazer os cruzamentos com dados públicos", en: "Redo the cross-checks with public data" } as L,
      texto: { pt: "Tudo nesta auditoria usa arquivos abertos do TSE, do IBGE e do DATASUS. A assessoria técnica pode reproduzir cada número hoje, sem pedir autorização a ninguém.", en: "Everything in this audit uses open files from the TSE, IBGE and DATASUS. Technical staff can reproduce every number today, without asking anyone's permission." } as L,
    },
    {
      n: 2,
      titulo: { pt: "Pedir o cruzamento óbitos × comparecimento", en: "Request the deaths × turnout cross-check" } as L,
      texto: { pt: "Um pedido de informação exige que o próprio governo faça o cruzamento CPF × óbito × comparecimento — o número exato que falta — e publique o resultado agregado, entregando os casos nominais à autoridade competente.", en: "An information request compels the government itself to run the ID × death × turnout cross-check — the exact missing number — and publish the aggregate result, handing the individual cases to the proper authority." } as L,
    },
    {
      n: 3,
      titulo: { pt: "Convocar audiência pública", en: "Call a public hearing" } as L,
      texto: { pt: "Chamar IBGE, Ministério da Saúde e TSE à mesma mesa para explicarem, ao vivo e com os números à frente, por que as três bases não batem.", en: "Bring the IBGE, Ministry of Health and TSE to the same table to explain, live and with the numbers in front of them, why the three databases do not match." } as L,
    },
    {
      n: 4,
      titulo: { pt: "Acionar o TCU e o Ministério Público", en: "Engage the audit court and prosecutors" } as L,
      texto: { pt: "A manutenção do cadastro é ato administrativo e pode ser auditada pelo Tribunal de Contas. A integridade do processo pode ser levada ao Ministério Público Eleitoral. Nada disso depende do código da urna.", en: "Registry maintenance is an administrative act and can be audited by the Audit Court. The integrity of the process can be taken to the Electoral Prosecutor's Office. None of this depends on the machine's code." } as L,
    },
    {
      n: 5,
      titulo: { pt: "Periciar o kit público de verificação", en: "Have the public verification kit examined" } as L,
      texto: { pt: "Os 63 gaps estão em código que o TSE já distribui publicamente. Uma universidade ou perícia contratada pode auditá-lo hoje, sem qualquer acesso à urna.", en: "The 63 gaps are in code the TSE already distributes publicly. A university or contracted expert can audit it today, with no access to the machine whatsoever." } as L,
    },
    {
      n: 6,
      titulo: { pt: "Propor lei ou resolução", en: "Propose a law or resolution" } as L,
      texto: { pt: "Tornar obrigatória a integração automática e auditável do cadastro com os óbitos (SIRC), a publicação periódica do cruzamento, e a correspondência verificável entre código inspecionado e binário em uso.", en: "Make mandatory the automatic, auditable integration of the registry with death records (SIRC), the periodic publication of the cross-check, and the verifiable correspondence between inspected code and the binary in use." } as L,
    },
    {
      n: 7,
      titulo: { pt: "Só então: o código-fonte da urna", en: "Only then: the machine's source code" } as L,
      texto: { pt: "A inspeção formal do código da urna, com as melhorias de processo que a EFASEV/2022 pediu (tempo adequado e correspondência código-binário). É o degrau mais difícil — e o menos necessário para o que os degraus anteriores já demonstram.", en: "The formal inspection of the machine's source, with the process improvements the EFASEV/2022 report asked for (adequate time and code-to-binary correspondence). It is the hardest rung — and the least necessary for what the earlier rungs already demonstrate." } as L,
      urna: true,
    },
  ],

  modelosTitle: { pt: "Modelos de requerimento", en: "Model requests" } as L,
  modelosLead: {
    pt: "Textos-base para adaptar com a assessoria jurídica e protocolar. São instrumentos do direito brasileiro — por isso o corpo está em português. Copie, ajuste os campos entre colchetes e os fundamente conforme o regimento da sua Casa.",
    en: "Base texts to adapt with legal advisers and file. These are instruments of Brazilian law — hence the body is in Portuguese. Copy, adjust the bracketed fields and ground them in your chamber's rules.",
  } as L,
  copiar: { pt: "Copiar texto", en: "Copy text" } as L,
  copiado: { pt: "Copiado", en: "Copied" } as L,
  baseLabel: { pt: "Base legal", en: "Legal basis" } as L,
  destinoLabel: { pt: "Destinatário", en: "Addressee" } as L,

  modelos: [
    {
      titulo: { pt: "Pedido de informação ao TSE", en: "Information request to the TSE" } as L,
      destino: { pt: "Tribunal Superior Eleitoral (via e-SIC / Ouvidoria, LAI)", en: "Superior Electoral Court (via e-SIC / Ombudsman, Access to Information Act)" } as L,
      base: { pt: "Lei 12.527/2011 (LAI), arts. 10 e 11", en: "Law 12.527/2011, arts. 10 and 11" } as L,
      texto:
        "Com fundamento na Lei nº 12.527/2011 (Lei de Acesso à Informação), solicito ao Tribunal Superior Eleitoral:\n\n1. O resultado do cruzamento, por faixa etária e por município, entre o cadastro de eleitores aptos, o registro de comparecimento das eleições de [ANO] e a base nacional de óbitos (SIM/SIRC), indicando o número de inscrições de pessoas falecidas que (a) permaneciam ativas na data do pleito e (b) constam com comparecimento registrado.\n2. A série histórica anual de cancelamentos de título por falecimento dos últimos 10 anos, desagregada por unidade da federação.\n3. A descrição e os logs do procedimento de integração entre o cadastro eleitoral e o Sistema Nacional de Informações de Registro Civil (SIRC), previsto desde a Resolução TSE nº 22.166/2006, incluindo periodicidade e prazo médio entre o óbito e o cancelamento.\n4. A relação dos municípios cujo eleitorado supera 65% da população projetada pelo IBGE, e as providências de revisão adotadas (art. 92, III, da Lei nº 9.504/1997).\n\nRequeiro que o resultado agregado seja tornado público e que os dados individuais, protegidos pela LGPD, sejam disponibilizados à autoridade competente para as providências cabíveis.",
    },
    {
      titulo: { pt: "Requerimento de informação ao Ministério da Saúde", en: "Information request to the Ministry of Health" } as L,
      destino: { pt: "Ministério da Saúde (DATASUS/SIM) — Ministro de Estado", en: "Ministry of Health (DATASUS/SIM) — Minister of State" } as L,
      base: { pt: "CF, art. 50, §2º; regimento da Casa", en: "Constitution, art. 50, §2; chamber rules" } as L,
      texto:
        "Com fundamento no art. 50, §2º, da Constituição Federal, requeiro ao Ministério da Saúde:\n\n1. A estimativa oficial mais recente de completude e de sub-registro do Sistema de Informação sobre Mortalidade (SIM), nacional e por unidade da federação, para os anos de [ANO] a [ANO].\n2. A descrição do fluxo de integração entre o SIM, o Sistema Nacional de Informações de Registro Civil (SIRC) e os órgãos que dele dependem, incluindo a Justiça Eleitoral.\n3. A confirmação da viabilidade técnica e do prazo necessário para realizar, em conjunto com o TSE, o cruzamento entre a base de óbitos e o registro de comparecimento eleitoral.\n\nA finalidade é verificar a consistência entre os óbitos registrados e a manutenção do cadastro eleitoral.",
    },
    {
      titulo: { pt: "Requerimento de audiência pública", en: "Request for a public hearing" } as L,
      destino: { pt: "Comissão competente (CCJ / Fiscalização e Controle)", en: "Relevant committee (Constitution & Justice / Oversight)" } as L,
      base: { pt: "Regimento Interno da Casa Legislativa", en: "Internal rules of the legislative chamber" } as L,
      texto:
        "Requeiro, nos termos regimentais, a realização de audiência pública para debater a divergência entre as bases oficiais de população e o cadastro eleitoral, com o convite aos seguintes expositores:\n\n- Representante técnico do IBGE (Diretoria de Pesquisas);\n- Representante técnico do Ministério da Saúde (DATASUS/SIM);\n- Representante técnico do Tribunal Superior Eleitoral (gestão do cadastro).\n\nObjeto: esclarecer, com os dados à mesa, (a) por que o cadastro eleitoral registra número de centenários e de eleitores muito idosos incompatível com a contagem do Censo; (b) o prazo médio entre o óbito e o cancelamento do título; (c) as medidas de integração automática do cadastro com a base de óbitos; e (d) a viabilidade de publicação periódica do cruzamento óbitos × comparecimento.",
    },
    {
      titulo: { pt: "Representação ao Tribunal de Contas (TCU)", en: "Representation to the Audit Court (TCU)" } as L,
      destino: { pt: "Tribunal de Contas da União", en: "Federal Audit Court" } as L,
      base: { pt: "Lei 8.443/1992 (Lei Orgânica do TCU)", en: "Law 8.443/1992 (TCU Organic Law)" } as L,
      texto:
        "Represento ao Tribunal de Contas da União para que avalie a gestão administrativa do cadastro eleitoral quanto à atualização por óbito, considerando:\n\n1. Que, segundo dados do próprio TSE e do DATASUS, cerca de 44% dos títulos de eleitores falecidos não são cancelados no mesmo ano do óbito, acumulando ao longo do tempo;\n2. Que a Resolução TSE nº 22.166/2006 prevê o cruzamento automático do cadastro com registros de óbito desde 2006;\n3. Que o cadastro registra número de eleitores muito idosos incompatível com a contagem populacional do IBGE.\n\nRequeiro auditoria sobre a eficácia e a tempestividade da rotina de atualização do cadastro por óbito, bem como sobre a integração com o SIRC — matéria administrativa que independe do sigilo do código dos sistemas eleitorais.",
    },
    {
      titulo: { pt: "Requerimento de perícia do kit de verificação", en: "Request for examination of the verification kit" } as L,
      destino: { pt: "Comissão competente / contratação de perícia independente", en: "Relevant committee / independent expert engagement" } as L,
      base: { pt: "Poder de fiscalização do Legislativo; dados já públicos", en: "Legislative oversight power; already-public data" } as L,
      texto:
        "Requeiro a realização de perícia técnica independente sobre o conjunto de scripts e especificações que o Tribunal Superior Eleitoral distribui publicamente para a verificação dos boletins de urna (arquivos abertos, já disponíveis para download), com o objetivo de:\n\n1. Confirmar ou refutar a existência das falhas apontadas em auditorias independentes, inclusive a inoperância da ferramenta de verificação do QR Code e a ausência de verificação de campos como a fase do boletim;\n2. Avaliar se o conjunto permite, de fato, a verificação externa e independente que se propõe a oferecer ao cidadão;\n3. Recomendar correções e um processo de verificação contínuo e auditável.\n\nA perícia recai sobre material já público e não requer acesso ao código-fonte dos sistemas internos das urnas.",
    },
  ],

  checklist: {
    title: { pt: "Checklist rápido", en: "Quick checklist" } as L,
    itens: [
      { pt: "Reproduzir os números com a assessoria técnica (dados públicos).", en: "Reproduce the numbers with technical staff (public data)." },
      { pt: "Protocolar o pedido do cruzamento óbitos × comparecimento.", en: "File the deaths × turnout cross-check request." },
      { pt: "Pedir a série de cancelamentos por óbito e o status da integração SIRC.", en: "Request the death-cancellation series and SIRC integration status." },
      { pt: "Convocar audiência pública com IBGE, Saúde e TSE.", en: "Call a public hearing with IBGE, Health and the TSE." },
      { pt: "Representar ao TCU sobre a gestão do cadastro.", en: "Represent to the Audit Court on registry management." },
      { pt: "Contratar perícia independente do kit de verificação já público.", en: "Commission an independent audit of the already-public verification kit." },
    ] as { pt: string; en: string }[],
  },

  aviso: {
    pt: "Estes modelos são pontos de partida, não peças jurídicas finais. Adapte-os com a assessoria jurídica e conforme o regimento da sua Casa. O objetivo é tornar verificável o que hoje depende de confiança.",
    en: "These models are starting points, not final legal documents. Adapt them with legal advisers and your chamber's rules. The goal is to make verifiable what today rests on trust.",
  } as L,
};
