// Seção: /metodo.
const pt = {
  meta: {
    title: "Método, fontes e limites",
    description: "Como auditamos, de onde vem cada número, o que não provamos e como reproduzir.",
  },
  hero: {
    eyebrow: "Transparência",
    title: "Como auditamos — e onde paramos",
    lead: "Esta página existe para que qualquer pessoa possa refazer o caminho: as regras que seguimos, a ordem em que confiamos nas fontes, os comandos para reproduzir cada cruzamento e, com o mesmo destaque, o que ainda não conseguimos provar.",
  },
  axioma: {
    eyebrow: "Axioma",
    title: "Ceticismo é o método, não a conclusão",
    p1: "Fontes oficiais — IBGE, TSE, DATASUS — são o ponto de partida obrigatório, nunca a palavra final. Todo índice tem uma metodologia; toda metodologia tem escolhas: o que é medido, o que fica de fora, quem serve de referência. Essas escolhas podem esconder um viés, proposital ou não.",
    p2: "Este não é um projeto para “provar que o governo mente”. É uma auditoria: pode ser que tudo esteja correto. A tarefa é verificar, não confirmar uma opinião prévia. Governos são formados por humanos; uma democracia saudável permite — e exige — que cidadãos auditem seus representantes.",
    stepsTitle: "O que fazemos com cada número",
    steps: [
      "Localizar a metodologia exata e completa declarada pela fonte oficial — a nota técnica, não um resumo de terceiros.",
      "Listar as escolhas metodológicas implícitas: o que é medido, o que fica de fora, quem serve de referência.",
      "Testar se essas escolhas produzem uma leitura sistematicamente mais branda do que a realidade, comparando com dados alternativos.",
      "Nunca concluir “é impossível encontrar erro” nem “está tudo certo”. Enquanto a frente não fecha, o estado é “ainda não achei o gap”.",
    ],
  },
  hierarquia: {
    eyebrow: "Hierarquia de verdade",
    title: "Quando duas fontes discordam, esta é a ordem",
    niveis: [
      { titulo: "A pergunta concreta da auditoria", desc: "O que exatamente se quer testar, declarado antes de olhar os dados." },
      { titulo: "Registros versionados da auditoria", desc: "Decisões (ADRs), critérios e correções anteriores, com data e hash." },
      { titulo: "Fonte primária oficial completa", desc: "Nota metodológica, microdados, série histórica — lida por inteiro." },
      { titulo: "Análise independente revisada", desc: "FGV/IBRE, IPEA, DIEESE, universidades, com metodologia auditável." },
      { titulo: "Cálculo próprio verificável", desc: "Só depois da base de estudo; sempre com script e dados preservados." },
      { titulo: "Memória e conversa", desc: "Apenas pista para onde olhar. Nunca prova." },
    ],
  },
  tiers: {
    title: "Tiers de fonte",
    items: [
      { tier: "T0", nome: "Fonte primária oficial", desc: "Metodologia completa publicada.", exemplos: "IBGE (Censo, SIDRA, PNS), TSE (dados abertos, resoluções), DATASUS/SIM, Receita, Tesouro." },
      { tier: "T1", nome: "Análise acadêmica revisada", desc: "Revisão por pares ou instituto independente com método auditável.", exemplos: "FGV/IBRE, IPEA, DIEESE, Insper, teses, SciELO." },
      { tier: "T2", nome: "Jornalismo de dados com fonte", desc: "Metodologia clara e fontes citadas; relatórios com dados abertos.", exemplos: "Agência Tatu, notícias do TSE replicadas pela imprensa." },
      { tier: "T3", nome: "Opinião sem dados", desc: "Notícia sem fonte, redes sociais. Entra só como hipótese a testar.", exemplos: "Relatos, posts, entrevistas sem documento." },
    ],
  },
  reproduzir: {
    eyebrow: "Reprodutibilidade",
    title: "Refaça você mesmo",
    lead: "Nenhum passo exige acesso privilegiado. Os comandos abaixo são os que usamos; os nomes de arquivo são os publicados pelas fontes.",
    cadastro: {
      title: "Cadastro fantasma",
      steps: [
        {
          title: "Baixe o comparecimento por perfil do TSE",
          body: "O ZIP traz um CSV por UF e um nacional (BRASIL), com aptos, comparecimento e abstenção por município, zona, turno e faixa etária. Guarde o SHA-256.",
          cmd: "curl -O https://cdn.tse.jus.br/estatistica/sead/odsele/perfil_comparecimento_abstencao/perfil_comparecimento_abstencao_2022.zip\nsha256sum perfil_comparecimento_abstencao_2022.zip\nunzip perfil_comparecimento_abstencao_2022.zip",
        },
        {
          title: "Agregue por turno e faixa etária",
          body: "O CSV usa separador “;” e codificação latin-1. A variação 1º→2º turno por faixa é a base da inversão biológica.",
          cmd: 'import pandas as pd\ndf = pd.read_csv("perfil_comparecimento_abstencao_2022_BRASIL.csv",\n                 sep=";", encoding="latin-1")\ng = df.groupby(["NR_TURNO", "DS_FAIXA_ETARIA"])["QT_COMPARECIMENTO"].sum().unstack(0)\ng["delta_pct"] = (g[2] / g[1] - 1) * 100\nprint(g)',
        },
        {
          title: "Baixe o Censo 2022 por município e faixa",
          body: "SIDRA tabela 9514 (população por idade), nível n6 = município. Para a estimativa 2026, tabela 6579.",
          cmd: "curl 'https://apisidra.ibge.gov.br/values/t/9514/n6/all/v/93/p/2022/c2/6794/c287/93097'",
        },
        {
          title: "Baixe os óbitos do SIM/DATASUS",
          body: "Arquivos DO{UF}{ANO}.dbc; converta com pyreaddbc. O campo IDADE codifica a unidade no primeiro dígito (4 = anos; ≥ 500 = 100+).",
          cmd: "ftp://ftp.datasus.gov.br/dissemin/publicos/SIM/CID10/DORES/DOSP2024.dbc",
        },
      ],
    },
    codigo: {
      title: "Kit de verificação",
      steps: [
        {
          title: "Baixe o ZIP oficial e anote o hash",
          body: "No portal de dados abertos do TSE, em “Arquivos transmitidos para totalização”, está o pacote com 10 scripts Python, 3 specs ASN.1, requirements.txt e README.pdf.",
          cmd: "sha256sum *.zip && unzip -l *.zip",
        },
        {
          title: "Procure campos definidos na spec mas nunca lidos",
          body: "fase, tipoEnvelope e TipoVoto aparecem nas specs. Confira quantas vezes algum script os verifica.",
          cmd: 'grep -n "fase\\|tipoEnvelope\\|TipoVoto" *.asn1\ngrep -rn "fase\\|tipoEnvelope\\|tipoVoto" *.py',
        },
        {
          title: "Confira a validade do certificado embutido",
          body: "Em mr_util.py (≈ linha 917) há um bloco Base64 chamado acurna. Extraia para um .pem e leia a data de expiração.",
          cmd: "openssl x509 -in acurna.pem -noout -enddate\n# notAfter=Jul 18 2026",
        },
        {
          title: "Tente rodar verifica_qrcode.py",
          body: "Ele procura certificados/ac_raiz_ue{modelo}_v1.pem — um diretório que não existe no ZIP. Observe que o erro é capturado e o retorno é “não verificado”.",
          cmd: "python3 verifica_qrcode.py --help\nls certificados/ 2>&1",
        },
      ],
    },
  },
  limites: {
    eyebrow: "Limites",
    title: "O que não provamos",
    lead: "Estes limites têm o mesmo peso dos achados. Quem citar este site deve citá-los junto.",
    items: [
      { titulo: "Nenhum caso individual", desc: "Não temos nome ou CPF de uma pessoa falecida cujo título registrou comparecimento. Todas as bases públicas mascaram o CPF (LGPD). O triângulo óbito → inscrição ativa → comparecimento não fecha com dados abertos." },
      { titulo: "Nenhuma prova de intenção", desc: "Um cadastro com centenas de milhares de títulos de falecidos pode ser resultado de integração falha entre cartórios e Justiça Eleitoral. Ineficiência e manipulação produzem o mesmo agregado." },
      { titulo: "Nenhuma atribuição partidária", desc: "Em versões anteriores, distribuímos votos excedentes pela votação de cada município. Isso é artefato aritmético, não identificação de destino. Retiramos esse rateio das conclusões." },
      { titulo: "O sinal municipal é fraco", desc: "Os 1.089 excessos em 137 municípios somem quando agregados por estado. Domicílio eleitoral ≠ residência explica parte. Por isso ele é o último pilar, não o primeiro." },
    ],
    reconferencia: {
      title: "O que a reconferência de 06/11/2026 (ADR-053) mudou",
      items: [
        "Comparações entre células demográficas (município × faixa) não são prova individual. Os rótulos anteriores “óbitos testados individualmente” e “títulos ativos comprovados” foram retirados.",
        "O rótulo “votos matematicamente impossíveis” foi abandonado: a população residente do Censo não é limite superior automático dos eleitores com domicílio eleitoral no município.",
        "Projeções para 2026 com taxas de sobrevivência uniformes são hipóteses de modelo, não contagens. Ficam fora das conclusões.",
      ],
    },
    proximo: {
      title: "O próximo teste",
      body: "Fechar o vínculo individual exige cruzar, para a mesma pessoa, o registro de óbito (SIM ou cartório), a situação da inscrição na data da eleição e o registro de comparecimento naquele turno. Esse cruzamento nominal depende de acesso que a LGPD reserva a autoridades — Ministério Público, TCU, a própria Corregedoria Eleitoral. Nossos dados agregados servem para indicar onde olhar.",
    },
  },
  correcoes: {
    eyebrow: "Correções registradas",
    title: "O que já corrigimos em público",
    lead: "Erros anteriores ficam visíveis, com a versão antiga e a nova. Isso faz parte do método.",
    items: [
      { antes: "17.505 cancelamentos por óbito/ano", depois: "787.825 cancelamentos por falecimento em 2022", por: "O 17.505 era o total de 2025 cancelado “por outros motivos diversos, como óbitos” — misturava duplicidade e decisões judiciais. O gap anual correto é ~560 mil (42%), não 98,9%." },
      { antes: "32.384 centenários no Censo 2022", depois: "37.814 centenários no Censo 2022", por: "Soma de todos os municípios na SIDRA 9514. A razão TSE/Censo cai de 9,2× para 7,9× e o excedente de 89% para 87% — mais conservador." },
      { antes: "“Votos matematicamente impossíveis”", depois: "“Diferenças entre comparecimento e residentes do Censo”", por: "Reconferência ADR-053: domicílio eleitoral pode diferir de residência; o rótulo antecipava uma conclusão que os dados não sustentam." },
    ],
  },
  fontes: {
    eyebrow: "Fontes",
    title: "Cada arquivo que usamos",
    lead: "Todas as fontes primárias são públicas e gratuitas. Os links abrem o portal oficial; os dados processados estão em /dados.",
    cols: { fonte: "Fonte", tier: "Tier", dado: "Dado", periodo: "Período" },
    open: "abrir",
  },
};

const en: typeof pt = {
  meta: {
    title: "Method, sources and limits",
    description: "How we audited, where every number comes from, what we did not prove, and how to reproduce it.",
  },
  hero: {
    eyebrow: "Transparency",
    title: "How we audited — and where we stopped",
    lead: "This page exists so anyone can retrace the path: the rules we followed, the order in which we trust sources, the commands to reproduce each cross-check and, with equal prominence, what we have not yet been able to prove.",
  },
  axioma: {
    eyebrow: "Axiom",
    title: "Skepticism is the method, not the conclusion",
    p1: "Official sources — IBGE, TSE, DATASUS — are the mandatory starting point, never the final word. Every index has a methodology; every methodology involves choices: what is measured, what is left out, who serves as the reference. Those choices can hide a bias, deliberate or not.",
    p2: "This is not a project to “prove the government lies”. It is an audit: everything may well be correct. The task is to verify, not to confirm a prior opinion. Governments are made of humans; a healthy democracy allows — and requires — citizens to audit their representatives.",
    stepsTitle: "What we do with every number",
    steps: [
      "Locate the exact, complete methodology declared by the official source — the technical note, not a third-party summary.",
      "List the implicit methodological choices: what is measured, what is left out, who serves as the reference.",
      "Test whether those choices produce a systematically softer reading than reality, by comparing with alternative data.",
      "Never conclude “no error can be found” or “all is correct”. Until a line of inquiry closes, the state is “gap not found yet”.",
    ],
  },
  hierarquia: {
    eyebrow: "Hierarchy of truth",
    title: "When two sources disagree, this is the order",
    niveis: [
      { titulo: "The concrete audit question", desc: "Exactly what is being tested, stated before looking at the data." },
      { titulo: "Versioned audit records", desc: "Decisions (ADRs), criteria and earlier corrections, with date and hash." },
      { titulo: "Complete primary official source", desc: "Methodological note, microdata, historical series — read in full." },
      { titulo: "Reviewed independent analysis", desc: "FGV/IBRE, IPEA, DIEESE, universities, with auditable methods." },
      { titulo: "Verifiable own calculation", desc: "Only after the study base; always with script and data preserved." },
      { titulo: "Memory and conversation", desc: "Only a hint of where to look. Never proof." },
    ],
  },
  tiers: {
    title: "Source tiers",
    items: [
      { tier: "T0", nome: "Primary official source", desc: "Complete published methodology.", exemplos: "IBGE (Census, SIDRA, PNS), TSE (open data, resolutions), DATASUS/SIM, Federal Revenue, Treasury." },
      { tier: "T1", nome: "Peer-reviewed analysis", desc: "Peer review or independent institute with an auditable method.", exemplos: "FGV/IBRE, IPEA, DIEESE, Insper, theses, SciELO." },
      { tier: "T2", nome: "Data journalism with sources", desc: "Clear methodology and cited sources; reports with open data.", exemplos: "Agência Tatu, TSE press releases carried by the media." },
      { tier: "T3", nome: "Opinion without data", desc: "Unsourced news, social media. Enters only as a hypothesis to test.", exemplos: "Testimonies, posts, interviews without documents." },
    ],
  },
  reproduzir: {
    eyebrow: "Reproducibility",
    title: "Do it yourself",
    lead: "No step requires privileged access. The commands below are the ones we used; file names are those published by the sources.",
    cadastro: {
      title: "Phantom registry",
      steps: [
        {
          title: "Download the TSE turnout-by-profile file",
          body: "The ZIP holds one CSV per state and a national one (BRASIL), with registered, turnout and abstention by municipality, zone, round and age group. Keep the SHA-256.",
          cmd: "curl -O https://cdn.tse.jus.br/estatistica/sead/odsele/perfil_comparecimento_abstencao/perfil_comparecimento_abstencao_2022.zip\nsha256sum perfil_comparecimento_abstencao_2022.zip\nunzip perfil_comparecimento_abstencao_2022.zip",
        },
        {
          title: "Aggregate by round and age group",
          body: "The CSV uses “;” as separator and latin-1 encoding. The round-1→round-2 change by age group is the basis of the biological inversion.",
          cmd: 'import pandas as pd\ndf = pd.read_csv("perfil_comparecimento_abstencao_2022_BRASIL.csv",\n                 sep=";", encoding="latin-1")\ng = df.groupby(["NR_TURNO", "DS_FAIXA_ETARIA"])["QT_COMPARECIMENTO"].sum().unstack(0)\ng["delta_pct"] = (g[2] / g[1] - 1) * 100\nprint(g)',
        },
        {
          title: "Download the 2022 Census by municipality and age",
          body: "SIDRA table 9514 (population by age), level n6 = municipality. For the 2026 estimate, table 6579.",
          cmd: "curl 'https://apisidra.ibge.gov.br/values/t/9514/n6/all/v/93/p/2022/c2/6794/c287/93097'",
        },
        {
          title: "Download deaths from SIM/DATASUS",
          body: "Files DO{UF}{YEAR}.dbc; convert with pyreaddbc. The IDADE field encodes the unit in its first digit (4 = years; ≥ 500 = 100+).",
          cmd: "ftp://ftp.datasus.gov.br/dissemin/publicos/SIM/CID10/DORES/DOSP2024.dbc",
        },
      ],
    },
    codigo: {
      title: "Verification kit",
      steps: [
        {
          title: "Download the official ZIP and record its hash",
          body: "On the TSE open-data portal, under “Files transmitted for tallying”, is the package with 10 Python scripts, 3 ASN.1 specs, requirements.txt and README.pdf.",
          cmd: "sha256sum *.zip && unzip -l *.zip",
        },
        {
          title: "Look for fields defined in the spec but never read",
          body: "fase, tipoEnvelope and TipoVoto appear in the specs. Count how many times any script checks them.",
          cmd: 'grep -n "fase\\|tipoEnvelope\\|TipoVoto" *.asn1\ngrep -rn "fase\\|tipoEnvelope\\|tipoVoto" *.py',
        },
        {
          title: "Check the embedded certificate's validity",
          body: "In mr_util.py (≈ line 917) there is a Base64 block named acurna. Extract it to a .pem and read the expiry date.",
          cmd: "openssl x509 -in acurna.pem -noout -enddate\n# notAfter=Jul 18 2026",
        },
        {
          title: "Try running verifica_qrcode.py",
          body: "It looks for certificados/ac_raiz_ue{modelo}_v1.pem — a directory that does not exist in the ZIP. Note that the error is caught and the result is “not verified”.",
          cmd: "python3 verifica_qrcode.py --help\nls certificados/ 2>&1",
        },
      ],
    },
  },
  limites: {
    eyebrow: "Limits",
    title: "What we did not prove",
    lead: "These limits carry the same weight as the findings. Anyone citing this site should cite them too.",
    items: [
      { titulo: "No individual case", desc: "We have no name or CPF of a deceased person whose registration recorded a turnout. Every public database masks the CPF (LGPD). The triangle death → active registration → turnout cannot be closed with open data." },
      { titulo: "No proof of intent", desc: "A registry with hundreds of thousands of deceased registrants may result from failed integration between civil registries and the electoral courts. Inefficiency and manipulation produce the same aggregate." },
      { titulo: "No partisan attribution", desc: "In earlier versions we apportioned excess votes by each municipality's results. That is an arithmetic artefact, not an identification of where votes went. We removed that apportionment from the conclusions." },
      { titulo: "The municipal signal is weak", desc: "The 1,089 excesses in 137 municipalities vanish when aggregated by state. Electoral domicile ≠ residence explains part of it. That is why it is the last pillar, not the first." },
    ],
    reconferencia: {
      title: "What the 6 Nov 2026 re-check (ADR-053) changed",
      items: [
        "Comparisons between demographic cells (municipality × age group) are not individual proof. The earlier labels “individually tested deaths” and “proven active registrations” were withdrawn.",
        "The label “mathematically impossible votes” was abandoned: the Census resident population is not an automatic upper bound on voters with electoral domicile in the municipality.",
        "Projections to 2026 with uniform survival rates are model hypotheses, not counts. They stay out of the conclusions.",
      ],
    },
    proximo: {
      title: "The next test",
      body: "Closing the individual link requires cross-referencing, for the same person, the death record (SIM or civil registry), the registration status on election day and the turnout record for that round. That nominal cross-check depends on access the LGPD reserves to authorities — the Public Prosecutor's Office, the Federal Court of Accounts, the Electoral Inspectorate itself. Our aggregate data shows where to look.",
    },
  },
  correcoes: {
    eyebrow: "Corrections on record",
    title: "What we have already corrected in public",
    lead: "Earlier errors stay visible, with the old and the new version. That is part of the method.",
    items: [
      { antes: "17,505 cancellations due to death per year", depois: "787,825 cancellations due to death in 2022", por: "The 17,505 was the 2025 total cancelled “for other miscellaneous reasons, such as death” — it mixed duplicates and court orders. The correct annual gap is ~560,000 (42%), not 98.9%." },
      { antes: "32,384 centenarians in the 2022 Census", depois: "37,814 centenarians in the 2022 Census", por: "Sum of all municipalities in SIDRA 9514. The TSE/Census ratio falls from 9.2× to 7.9× and the excess from 89% to 87% — more conservative." },
      { antes: "“Mathematically impossible votes”", depois: "“Differences between turnout and Census residents”", por: "Re-check ADR-053: electoral domicile may differ from residence; the label anticipated a conclusion the data does not support." },
    ],
  },
  fontes: {
    eyebrow: "Sources",
    title: "Every file we used",
    lead: "All primary sources are public and free. Links open the official portal; the processed data is in /data.",
    cols: { fonte: "Source", tier: "Tier", dado: "Data", periodo: "Period" },
    open: "open",
  },
};

export const metodo = { pt, en };
