// Guia prático de fiscalização para parlamentares, MP e sociedade.
// Ideia central: dá para fazer MUITO antes de abrir o código-fonte da urna.
// Os modelos de requerimento são instrumentos jurídicos brasileiros — o corpo
// vai em português; a moldura é bilíngue. Adaptar com a assessoria jurídica.
import type { L } from "@/i18n/config";

export const parlamentar = {
  hero: {
    eyebrow: { pt: "Guia prático de fiscalização", en: "Practical oversight guide" } as L,
    title: { pt: "O que um parlamentar pode fazer — e por que o código da urna precisa ser aberto no fim", en: "What a legislator can do — and why the machine's code must be opened at the end" } as L,
    lead: {
      pt: "O debate costuma pular direto para “abrir o código-fonte da urna”. Aqui a ordem é outra: uma escada de fiscalização, feita com dados públicos e pedidos de informação, que estabelece que há erro e onde ele está. Mas só o código-fonte em execução diz de que tipo é o erro — falha de software ou inserção manual. Por isso o último degrau não é opcional: é o que encerra a investigação. Os anteriores existem para justificá-lo e orientá-lo — e para resolver, no caminho, tudo o que não depende dele.",
      en: "The debate usually jumps straight to “open the machine's source code”. Here the order is different: an oversight ladder, built on public data and information requests, that establishes that there is error and where it lies. But only the running source code says what kind of error it is — a software fault or a manual insertion. So the last rung is not optional: it is what closes the investigation. The earlier ones exist to justify and guide it — and to settle, along the way, everything that does not depend on it.",
    } as L,
  },

  escadaTitle: { pt: "A escada da fiscalização", en: "The oversight ladder" } as L,
  escadaLead: {
    pt: "Do mais fácil e imediato ao mais decisivo. Os seis primeiros degraus não exigem acesso ao código e já estabelecem que há erro e onde. O sétimo é indispensável: só ele distingue erro de software de inserção manual.",
    en: "From the easiest and most immediate to the most decisive. The first six rungs need no access to the code and already establish that there is error and where. The seventh is indispensable: only it tells a software fault from a manual insertion.",
  } as L,
  semCodigo: { pt: "sem o código da urna", en: "no machine source needed" } as L,
  comCodigo: { pt: "indispensável · exige acesso formal ao código", en: "indispensable · requires formal access to the source code" } as L,

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
      titulo: { pt: "O degrau indispensável: o código-fonte da urna", en: "The indispensable rung: the machine's source code" } as L,
      texto: { pt: "A inspeção do código em execução, com as melhorias de processo que a EFASEV/2022 pediu (tempo adequado e correspondência código-binário), mais o histórico de alterações dos arquivos. É o único degrau que responde à pergunta que os anteriores deixam aberta: os erros são de software ou de inserção manual? É o mais difícil — e o mais decisivo. Os degraus 1 a 6 produzem a evidência que o justifica e indicam onde olhar.", en: "The inspection of the running code, with the process improvements the EFASEV/2022 report asked for (adequate time and code-to-binary correspondence), plus the change history of the files. It is the only rung that answers the question the earlier ones leave open: are the errors software faults or manual insertions? It is the hardest — and the most decisive. Rungs 1 to 6 produce the evidence that justifies it and show where to look." } as L,
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
        "Requeiro a realização de perícia técnica independente sobre o conjunto de scripts e especificações que o Tribunal Superior Eleitoral distribui publicamente para a verificação dos boletins de urna (arquivos abertos, já disponíveis para download), com o objetivo de:\n\n1. Confirmar ou refutar a existência das falhas apontadas em auditorias independentes, inclusive a inoperância da ferramenta de verificação do QR Code e a ausência de verificação de campos como a fase do boletim;\n2. Avaliar se o conjunto permite, de fato, a verificação externa e independente que se propõe a oferecer ao cidadão;\n3. Recomendar correções e um processo de verificação contínuo e auditável.\n\nA perícia recai sobre material já público e não requer acesso ao código-fonte dos sistemas internos das urnas. A inspeção desse código é objeto de requerimento próprio (último modelo abaixo), por ser indispensável para distinguir erro de software de inserção manual.",
    },
    {
      titulo: { pt: "Requerimento de verificação pós-pleito das urnas usadas", en: "Request for post-poll verification of used machines" } as L,
      destino: { pt: "Tribunal Superior Eleitoral — via tribunal eleitoral competente (art. 51, §2º, Res. TSE 23.673/2021)", en: "Superior Electoral Court — via the competent electoral court (art. 51, §2, TSE Res. 23.673/2021)" } as L,
      base: { pt: "Res. TSE 23.673/2021, arts. 51–52 (com redação da Res. 23.728/2024) · Res. TSE 23.751/2026, art. 272", en: "TSE Res. 23.673/2021, arts. 51–52 (as amended by Res. 23.728/2024) · TSE Res. 23.751/2026, art. 272" } as L,
      texto:
        "Com fundamento nos arts. 51 e 52 da Resolução TSE nº 23.673/2021 (com as alterações da Resolução nº 23.728/2024), apresento pedido de verificação dos sistemas eleitorais após o pleito, acompanhado do seguinte plano de trabalho:\n\nFATOS E INDÍCIOS QUE JUSTIFICAM A VERIFICAÇÃO:\n1. Divergência entre as bases oficiais de população (IBGE/Censo), óbitos (DATASUS/SIM) e cadastro eleitoral (TSE), com centenas de milhares de eleitores comprovadamente falecidos que permaneceram aptos a votar.\n2. 63 falhas identificadas no kit público de verificação do TSE, todas enfraquecendo a verificação — probabilidade de ocorrência por acaso de 0,5⁶³ ≈ 1,08 × 10⁻¹⁹ (sob a premissa de independência entre as falhas).\n3. Relatório EFASEV/2022, que recomendou testes funcionais em condições normais de uso e análise dos binários efetivamente executados, recomendações ainda não implementadas.\n4. Existência de [NÚMERO] seções com indicadores anômalos de habilitação biométrica no 2º turno de 2026, identificadas com critérios públicos e reproduzíveis a partir dos BUs oficiais.\n\nPLANO DE TRABALHO (art. 51, §3º):\n1. Seleção de duas amostras: (a) amostra direcionada — as seções com os maiores indicadores de anomalia segundo critérios pré-registrados e públicos; (b) amostra aleatória — seções sorteadas com semente pública verificável (ex.: números da Loteria Federal do dia do sorteio).\n2. Para cada seção selecionada, exame do conteúdo da urna eletrônica em seu estado de uso (mídias de votação e resultado no estado em que se encontram), confrontando: (a) os dados na urna com o BU transmitido e com o resultado totalizado; (b) os programas instalados com o código-fonte compilado e lacrado; (c) os logs da urna com os logs do Transportador de Arquivos e do Receptor de Arquivos (RecArquivos).\n3. Exame dos sistemas auxiliares (art. 52): microcomputadores utilizados na transmissão e servidores do tribunal com o sistema de totalização (Sistot).\n4. Verificação da cadeia de custódia das mídias (resultado e carga) e dos lacres.\n5. Registro público de todos os procedimentos, com hash dos arquivos examinados e ata detalhada.\n\nAFERIÇÃO DOS RESULTADOS:\n- Conferência bit a bit entre o conteúdo da urna e os registros transmitidos/totalizados.\n- Conferência de hash entre o binário instalado e o código lacrado.\n- Confronto entre os logs da urna e os do sistema de transmissão.\n- Regra de três para a amostra aleatória: zero discrepâncias em n urnas implica prevalência ≤ 3/n com 95% de confiança.\n\nOBJETIVOS:\nVerificar se os sistemas eleitorais instalados nas urnas efetivamente utilizadas no 2º turno das eleições de [ANO] funcionaram conforme o esperado, e se há correspondência entre os dados armazenados nas urnas e os resultados transmitidos e totalizados.\n\nPRAZO: O presente pedido é formulado dentro do prazo do art. 51, §1º, da Resolução TSE nº 23.673/2021, considerando que as urnas permanecerão lacradas até 12 de janeiro de 2027 (art. 272 da Resolução TSE nº 23.751/2026).\n\nRequeiro, ainda, com fundamento nos arts. 45 a 48 da mesma Resolução, a preservação e disponibilização dos seguintes arquivos: logs do Gedai-UE, logs do Transportador e do Receptor de Arquivos, imagens de BU, RDV, logs de urna e relatório de urnas substituídas — dentro do prazo de 100 dias corridos contados a partir do dia do 1º turno (art. 48).",
    },
    {
      titulo: { pt: "Requerimento de inspeção do código-fonte e da correspondência código-binário", en: "Request for source-code inspection and code-to-binary correspondence" } as L,
      destino: { pt: "Presidência do Tribunal Superior Eleitoral — com cópia à Comissão competente", en: "Presidency of the Superior Electoral Court — copied to the relevant committee" } as L,
      base: { pt: "Poder de fiscalização do Legislativo · Res. TSE 23.751/2026 · Relatório EFASEV/2022 (Anexo G)", en: "Legislative oversight power · TSE Res. 23.751/2026 · EFASEV/2022 report (Annex G)" } as L,
      texto:
        "Requeiro ao Tribunal Superior Eleitoral, com fundamento no poder de fiscalização do Poder Legislativo, a realização de inspeção técnica do código-fonte dos sistemas eleitorais por equipe indicada por [COMISSÃO / ENTIDADE], sob termo de confidencialidade, abrangendo:\n\n1. O código-fonte dos sistemas de votação e apuração utilizados nas eleições de [ANO], com o histórico de alterações dos arquivos inspecionados (autoria, data e justificativa de cada alteração).\n2. A compilação acompanhada pelos inspetores, com o registro da origem das dependências e das redes acessadas durante a compilação (questão do Anexo G do relatório EFASEV/2022).\n3. A demonstração de correspondência entre o código inspecionado e o binário efetivamente instalado nas urnas, por compilação reprodutível e conferência de resumos criptográficos (hash).\n4. Tempo de inspeção compatível com a complexidade dos sistemas, conforme apontado no relatório EFASEV/2022.\n5. Esclarecimento formal, com base nesse exame, sobre se as falhas e divergências apontadas em auditorias públicas decorrem de erro de software ou de alteração manual.\n\nA finalidade é distinguir erro de software de inserção manual, o que não é possível a partir dos dados públicos.",
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
      { pt: "Protocolar pedido de verificação pós-pleito das urnas usadas (arts. 51–52, Res. 23.673) — prazo se encerra em ≈ 7 de janeiro de 2027.", en: "File a post-poll verification request for used machines (arts. 51–52, Res. 23.673) — deadline around 7 January 2027." },
      { pt: "Requerer a inspeção do código-fonte e da correspondência código-binário — o degrau indispensável, por último.", en: "Request source-code inspection and code-to-binary correspondence — the indispensable rung, last." },
    ] as { pt: string; en: string }[],
  },

  aviso: {
    pt: "Estes modelos são pontos de partida, não peças jurídicas finais. Adapte-os com a assessoria jurídica e conforme o regimento da sua Casa. O objetivo é tornar verificável o que hoje depende de confiança.",
    en: "These models are starting points, not final legal documents. Adapt them with legal advisers and your chamber's rules. The goal is to make verifiable what today rests on trust.",
  } as L,

  auditoriaFisica: {
    eyebrow: { pt: "Auditoria das urnas usadas", en: "Audit of the machines actually used" } as L,
    title: { pt: "Por que testar a urna lacrada de exemplo não basta", en: "Why testing a sealed example machine is not enough" } as L,
    lead: {
      pt: "O teste de integridade e o teste de autenticidade, como desenhados hoje, não examinam as urnas que efetivamente serviram na eleição, no estado em que foram usadas. Só o exame pós-pleito das urnas reais — com amostra direcionada por anomalias e sorteio aleatório — pode detectar ou descartar alterações no hardware e no software efetivamente utilizados. O canal legal existe (Res. TSE 23.673, arts. 51–52) e o prazo se aproxima.",
      en: "The integrity test and the authenticity test, as designed today, do not examine the machines that actually served in the election, in the state they were used. Only a post-poll examination of the real machines — with anomaly-based targeting and random drawing — can detect or rule out alterations in the actual hardware and software. The legal channel exists (TSE Res. 23.673, arts. 51–52) and the deadline is approaching.",
    } as L,
    pontos: [
      {
        t: { pt: "O teste de integridade retira a urna", en: "The integrity test removes the machine" } as L,
        b: { pt: "O teste de integridade (arts. 53, 57–64 da Res. 23.673/2021) retira a urna selecionada na véspera da eleição e a substitui por outra. O teste é feito na unidade retirada; os votos reais da seção são contados numa máquina diferente. Se houvesse um ataque no software da urna real, ele não estaria na que está sendo testada.", en: "The integrity test (arts. 53, 57–64 of Res. 23.673/2021) removes the selected machine on the eve of the election and replaces it with another one. The test runs on the withdrawn unit; the section's real votes are counted on a different machine. If there were an attack in the real machine's software, it would not be in the one being tested." } as L,
      },
      {
        t: { pt: "O teste de autenticidade é pré-votação", en: "The authenticity test is pre-voting" } as L,
        b: { pt: "O teste de autenticidade (AVPART) compara hashes dos programas instalados antes do início da votação, numa amostra pequena (~10 seções por UF). Ele verifica que o software instalado confere com a versão lacrada — mas não testa o comportamento durante nem depois da votação, nem examina o hardware.", en: "The authenticity test (AVPART) compares hashes of installed programs before voting begins, in a small sample (~10 sections per state). It verifies that the installed software matches the sealed version — but it does not test behavior during or after voting, nor does it examine the hardware." } as L,
      },
      {
        t: { pt: "Nenhum teste oficial examina a urna depois que ela votou", en: "No official test examines the machine after it has voted" } as L,
        b: { pt: "Nas fontes oficiais lidas, não encontramos teste oficial que examine, após o pleito, a urna no estado em que serviu. O relatório EFASEV/2022 identificou essa lacuna e recomendou testes funcionais em condições normais de uso e análise dos binários efetivamente executados — recomendações ainda não implementadas. Os arts. 51–52 da Res. 23.673 preveem um canal de verificação pós-pleito por solicitação das entidades fiscalizadoras, mas ele precisa ser acionado.", en: "In the official sources we reviewed, we found no official test that examines, after the poll, the machine in the state it served. The EFASEV/2022 report identified this gap and recommended functional tests under normal conditions of use and analysis of the binaries actually executed — recommendations not yet implemented. Arts. 51–52 of Res. 23.673 provide a post-poll verification channel upon request by oversight entities, but it must be triggered." } as L,
      },
      {
        t: { pt: "O Congresso é entidade fiscalizadora", en: "Congress is an oversight entity" } as L,
        b: { pt: "O art. 6º da Res. 23.673/2021 lista o Congresso Nacional entre as entidades fiscalizadoras que podem solicitar verificação pós-pleito (art. 51), apresentando fatos, indícios e um plano de trabalho. Não é preciso novo instrumento legal — basta acionar o que já existe.", en: "Art. 6 of Res. 23.673/2021 lists the National Congress among the oversight entities that can request post-poll verification (art. 51), presenting facts, indicia and a work plan. No new legal instrument is needed — the existing one just needs to be triggered." } as L,
      },
      {
        t: { pt: "O prazo é curto", en: "The deadline is short" } as L,
        b: { pt: "A Res. 23.751/2026, art. 272, determina que as urnas permaneçam lacradas até 12 de janeiro de 2027. O pedido de verificação deve ser feito até 5 dias antes dessa data-limite (art. 51, §1º) — ou seja, cerca de 7 de janeiro de 2027 (confirmar a data exata no Calendário Eleitoral). Depois disso, os lacres são rompidos e as mídias formatadas.", en: "Res. 23.751/2026, art. 272, requires the machines to remain sealed until 12 January 2027. The verification request must be filed up to 5 days before that date (art. 51, §1) — i.e. around 7 January 2027 (confirm the exact date in the Electoral Calendar). After that, the seals are broken and the media formatted." } as L,
      },
    ],
    prazo: {
      pt: "Res. 23.751/2026, art. 272: urnas lacradas até 12 de janeiro de 2027. O pedido de verificação (art. 51 da Res. 23.673) deve ser feito até 5 dias antes — cerca de 7 de janeiro de 2027 (confirmar no Calendário Eleitoral).",
      en: "Res. 23.751/2026, art. 272: machines sealed until 12 January 2027. The verification request (art. 51 of Res. 23.673) must be filed up to 5 days before — around 7 January 2027 (confirm in the Electoral Calendar).",
    } as L,
    conclusao: {
      pt: "A legislação já prevê o instrumento. O que falta é usá-lo — com uma amostra correta, direcionada e aleatória, sobre as urnas reais, em seu estado de uso, não sobre exemplares lacrados de demonstração.",
      en: "The legislation already provides the instrument. What is missing is using it — with a correct sample, targeted and random, of the real machines, in their state of use, not of sealed demonstration units.",
    } as L,
  },
};
