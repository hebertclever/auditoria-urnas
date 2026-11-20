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
    p1: "Fontes oficiais — IBGE, TSE, DATASUS, INSS — são o ponto de partida obrigatório, nunca a palavra final. Todo índice tem uma metodologia; toda metodologia tem escolhas: o que é medido, o que fica de fora, quem serve de referência. Essas escolhas podem esconder um viés, proposital ou não.",
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
      { tier: "T0", nome: "Fonte primária oficial", desc: "Metodologia completa publicada.", exemplos: "IBGE (Censo, SIDRA, PNS), TSE (dados abertos, resoluções), DATASUS/SIM, INSS (dados abertos), Receita, Tesouro." },
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
          body: "O ZIP traz um CSV por UF e um nacional (BRASIL), com aptos, comparecimento e abstenção por município, zona, turno e faixa etária. Guarde o SHA-256: o TSE troca o arquivo no mesmo endereço. O de 2026 com os dois turnos (13/11/2026) tem SHA-256 3dc81301…8ef5; a versão anterior, só com o 1º turno, abd1af8f…f023. As duas estão no Internet Archive — veja a página Backup.",
          cmd: "curl -O https://cdn.tse.jus.br/estatistica/sead/odsele/perfil_comparecimento_abstencao/perfil_comparecimento_abstencao_2026.zip\nsha256sum perfil_comparecimento_abstencao_2026.zip\nunzip perfil_comparecimento_abstencao_2026.zip",
        },
        {
          title: "Agregue por turno e faixa etária",
          body: "O CSV usa separador “;” e codificação latin-1. A variação 1º→2º turno por faixa é a base do Pilar 1 (o salto dos idosos entre os turnos). Dividindo o aumento pelas abstenções do 1º turno, sai a volta às urnas por faixa.",
          cmd: 'import pandas as pd\ndf = pd.read_csv("perfil_comparecimento_abstencao_2026_BRASIL.csv",\n                 sep=";", encoding="latin-1")\ng = df.groupby(["NR_TURNO", "DS_FAIXA_ETARIA"])["QT_COMPARECIMENTO"].sum().unstack(0)\ng["delta_pct"] = (g[2] / g[1] - 1) * 100\nprint(g)',
        },
        {
          title: "Baixe o Censo 2022 por município e faixa",
          body: "SIDRA tabela 9514 (população por idade), nível n6 = município. Para a estimativa 2026, tabela 6579.",
          cmd: "curl 'https://apisidra.ibge.gov.br/values/t/9514/n6/all/v/93/p/2022/c2/6794/c287/93097'",
        },
        {
          title: "Baixe os óbitos do SIM/DATASUS",
          body: "Arquivos DO{UF}{ANO}.dbc; converta com pyreaddbc. O campo IDADE codifica a unidade no primeiro dígito (4 = anos; 5 = 100 anos ou mais). O código 999 é idade ignorada e não entra na conta.",
          cmd: "ftp://ftp.datasus.gov.br/dissemin/publicos/SIM/CID10/DORES/DOSP2024.dbc",
        },
        {
          title: "Baixe os benefícios ativos do INSS",
          body: "No portal de dados abertos do INSS, “Benefícios mantidos”, arquivo MANTIDOS_ATIVOS_202609.zip (42,5 milhões de linhas; SHA-256 dae5db10…c623f915). O cabeçalho usa vírgula e as linhas, ponto e vírgula. A data de nascimento é a de quem recebe o benefício. Conte quem tinha 100 anos completos em 06/10/2026.",
          cmd: 'import csv, io, zipfile\nfrom datetime import date\nz = zipfile.ZipFile("MANTIDOS_ATIVOS_202609.zip")\nf = io.TextIOWrapper(z.open(z.namelist()[0]), encoding="utf-8")\ncols = f.readline().strip().split(",")      # cabeçalho com vírgula\ni = cols.index("dt_nascimento_titular")\nn = 0\nfor linha in csv.reader(f, delimiter=";"):  # linhas com ponto e vírgula\n    try:\n        d, m, a = map(int, linha[i].split("/"))\n        n += date(a, m, d) <= date(1926, 10, 6)\n    except (ValueError, IndexError):\n        pass                                  # datas inválidas\nprint(n)  # 72501',
        },
        {
          title: "Biometria: baixe o perfil do eleitorado e some só o arquivo BRASIL",
          body: "O ZIP traz perfil_eleitorado_2026_BRASIL.csv e um arquivo por UF com as mesmas linhas. Somar todos conta cada eleitor duas vezes — foi o nosso erro de 18/11/2026. Some só o BRASIL e confira o total contra o eleitorado oficial: 158.745.463 em 2026 (156.454.011 em 2022). Uma cópia idêntica, byte a byte, está no Internet Archive (captura de 20/08/2026).",
          cmd: 'curl -O https://cdn.tse.jus.br/estatistica/sead/odsele/perfil_eleitorado/perfil_eleitorado_2026.zip\nsha256sum perfil_eleitorado_2026.zip   # 0952e9d9…648b\n\nimport pandas as pd\ndf = pd.read_csv("perfil_eleitorado_2026_BRASIL.csv", sep=";", encoding="latin-1",\n                 usecols=["SG_UF", "DS_FAIXA_ETARIA", "QT_ELEITORES", "QT_ELEITORES_BIOMETRIA"])\ng = df[df.SG_UF != "ZZ"].groupby("DS_FAIXA_ETARIA")[["QT_ELEITORES", "QT_ELEITORES_BIOMETRIA"]].sum()\ng["pct_bio"] = 100 * g.QT_ELEITORES_BIOMETRIA / g.QT_ELEITORES\nprint(g)',
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
      { titulo: "O salto entre os turnos é anomalia sem explicação medida", desc: "O comparecimento dos eleitores de 70 anos ou mais subiu 14,8% do 1º para o 2º turno de 2026 (1.295.980 a mais) — nenhum outro grupo chegou perto. A explicação que se costuma dar, a de idosos levados às urnas, não foi medida por ninguém, incluindo o TSE. O aumento do comparecimento entre os turnos cresce com a idade, e o nível de comparecimento subiu quase 15 pontos em quatro anos entre os 75+." },
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
      { antes: "“cerca de 15 mil mortes de centenários por ano”, o cartão “74.242” do DATASUS em /provas e “815.847 mortes de 70+ por ano” (até 19/11/2026)", depois: "cerca de 13 mil por ano (12.691 em média), 63.455 em cinco anos e 823.126 mortes de 70+ por ano, em média (2020–2024)", por: "Erro nosso: os três vinham da contagem antiga, que tratava idade ignorada como 100 anos ou mais, e o primeiro conserto, feito no mesmo dia, deixou esses trechos para trás. O número de 70+ era só de 2024; passou à média de 2020–2024." },
      { antes: "“Pelo menos 260 mil títulos de centenários de pessoas que não podem estar vivas” (/provas, até 19/11/2026)", depois: "“Pelo menos 173.575, contando apenas as mortes que o Ministério da Saúde registrou (pela contagem do IBGE, cerca de 260 mil)”", por: "Os 260 mil são a diferença entre a lista do TSE e a contagem do IBGE: é a melhor estimativa, mas não um mínimo certo. O mínimo que não depende de estimativa é 173.575 — as pessoas com 95 anos ou mais no Censo, menos as mortes registradas — ou 94.985 sem descontar morte nenhuma." },
      { antes: "DATASUS: 74.242 mortes de centenários em 2020–2024 (quatro réguas, /provas, /cadastro, slides; até 19/11/2026)", depois: "63.455", por: "Erro nosso: a contagem antiga tratou como “100 anos ou mais” todo código de idade a partir de 500. No DATASUS, o código 5 é 100 anos ou mais; o 999 é idade ignorada. As 10.787 mortes de idade ignorada saíram. A conclusão não muda: o cadastro tem quase cinco vezes as mortes de centenários de cinco anos." },
      { antes: "“Mortos votaram. Está provado (P < 10⁻¹⁵⁵⁰)” — home, provas, objeções e dados (18/11/2026)", depois: "“Títulos de pessoas que não podem estar vivas estavam aptos, e 92% dos de centenários sem biometria; se algum registrou voto, só o cruzamento nominal responde”", por: "Erro nosso, em duas camadas. A conta usou 596.478 centenários, o dobro do real: o arquivo do perfil do eleitorado traz a planilha do Brasil e as 28 dos estados com as mesmas linhas, e somamos todas — lido só o BRASIL, são 297.977 nas 27 UFs, o mesmo número do arquivo de comparecimento. E, mesmo com o número certo, a conta supunha que o título de um morto comparece tanto quanto o de um vivo, que era justamente o que se queria provar. Se nenhum morto tivesse votado, os 3.307 comparecimentos de centenários exigiriam que de 2 a 9 em cada 100 centenários vivos fossem votar — o que é possível. Os totais continuam sem separar zero de milhares." },
      { antes: "INSS: 46.575 centenários “titulares vivos”; TSE 12,8 vezes o INSS (18/11/2026)", depois: "72.501 benefícios pagos a pessoas com 100 anos ou mais; TSE 4,1 vezes o INSS", por: "Erro nosso: o 12,8× dividia o número dobrado (596.478). E o 46.575 descontava as pensões por morte supondo que a data de nascimento fosse a do falecido; no arquivo, ela é a de quem recebe — as pensões de filhos têm beneficiários com menos de 21 anos. Os pensionistas centenários são viúvas e viúvos vivos. Como uma pessoa pode receber dois benefícios, 4,1× é um piso." },
      { antes: "Centenários por 100 mil habitantes: Japão 7,5; EUA 3,0; França 3,5; Itália 4,0 — “quase 20 vezes o Japão” e o destaque “19,6×” no /cadastro (até 18/11/2026)", depois: "Japão 88; EUA 32; França 46; Itália 38 — “quase o dobro do país mais longevo”; destaque: 1,7×", por: "Erro nosso: as taxas estavam cerca de dez vezes abaixo das contagens oficiais de cada país (Japão: 107.677 centenários em set/2026). A fonte citada, a ONU, também dá números maiores. Com as taxas certas, o Censo brasileiro (18,6) fica abaixo do Japão, como esperado, e o cadastro do TSE (147) continua acima de todos." },
      { antes: "“O perfil do eleitorado de 2026 e a nota do TCU não têm cópia no Internet Archive” (página Backup, 18/11/2026)", depois: "Têm: o ZIP do perfil do eleitorado foi capturado em 20/08/2026 e a página do TCU em 2025", por: "Erro nosso: concluímos a partir de pedidos de captura que falharam, sem consultar o índice do arquivo. Baixamos do Internet Archive as cópias do perfil do eleitorado de 2022 e 2026: o SHA-256 é idêntico ao das nossas." },
      { antes: "Comparecimento de centenários no 2º turno de 2026: 3.313 (18/11/2026)", depois: "3.307", por: "3.313 inclui os eleitores no exterior. Para centenários, o site usa as 27 UFs: 297.977 aptos, 2.133 comparecimentos no 1º turno e 3.307 no 2º — o mesmo universo nos três números." },
      { antes: "Projeção para o 2º turno de 2026: excedente de 59 a 316 mil (publicada até 13/11/2026)", depois: "Dado real: 472.721 comparecimentos de 75+ acima do ritmo da faixa 70–74; salto de todos os 70+: 1.295.980 (+14,8%)", por: "O TSE publicou o 2º turno em 13/11/2026. A projeção deu lugar ao dado medido no arquivo oficial (22.121.816 linhas) e ficou abaixo dele." },
      { antes: "“O dado real foi 1.295 mil — quatro vezes o teto da projeção”; salto de 1.294.921 (publicado de 14 a 15/11/2026)", depois: "“O excedente real foi 472.721 — 50% acima do teto de 316 mil”; salto de todos os 70+: 1.295.980", por: "Erro nosso: comparamos o salto total dos 70+ com uma projeção que media só o excedente acima do ritmo da faixa 70–74 — duas medidas diferentes. Na definição da projeção, o real é 472.721. E 1.294.921 era o salto só das 27 UFs; a série histórica (614.299 em 2022) inclui os eleitores no exterior, e no mesmo universo o número de 2026 é 1.295.980." },
      { antes: "“A cada eleição o salto piora” e “mais do que toda a população de Porto Alegre” (14 a 15/11/2026)", depois: "“O salto de 2026 é o maior da série” e “mais do que toda a população de Guarulhos”", por: "Erro nosso: o salto de 2018 (+2,8%) foi menor que o de 2014 (+3,9%) — ele não piora a cada eleição; cresceu nas duas últimas. E Porto Alegre tem 1.332.845 habitantes no Censo 2022, mais do que os 1.295.980 do salto; Guarulhos tem 1.291.771." },
      { antes: "“A inversão biológica” como evidência mais forte; “o aumento dos idosos é 397 vezes o dos adultos”; “a biologia prevê a curva oposta”", depois: "“O salto dos idosos entre os turnos”: fato medido, sinal a explicar", por: "Com o 2º turno de 2026 refizemos a conta de outro jeito: de cada 100 que faltaram ao 1º turno, quantos apareceram no 2º. O resultado cai com a idade depois dos 74 anos (21 aos 70–74, 2 aos 95–99), como a saúde prevê — o aumento “que cresce com a idade” vinha de dividir por uma base cada vez menor. Os analfabetos de 18 a 69 anos, também de voto facultativo, subiram 6,2%. E a razão 397 dividia por +0,05%: em 2026 o mesmo cálculo dá 22. O salto continua medido e sem explicação oficial, mas deixou de ser apresentado como impossibilidade biológica." },
      { antes: "Comparecimento de centenários no 1º turno de 2026: 2.141", depois: "2.133", por: "Não foi erro nosso: o TSE republicou o arquivo em 13/11/2026 e o 1º turno mudou — 788 comparecimentos a menos no total, em 31 municípios e 4 cidades de votação no exterior, sem nota de alteração. Usamos a versão mais recente e guardamos as duas no Internet Archive." },
      { antes: "“788 a menos, em 35 municípios” (16/11/2026)", depois: "“788 a menos, em 31 municípios e 4 cidades de votação no exterior”", por: "O arquivo do TSE registra as cidades de votação no exterior no mesmo campo dos municípios. Dos 35 lugares alterados, 31 são municípios brasileiros e 4 ficam fora do país (122 dos 788)." },
      { antes: "17.505 cancelamentos por óbito/ano", depois: "787.825 cancelamentos por falecimento em 2022", por: "O 17.505 era o total de 2025 cancelado “por outros motivos diversos, como óbitos” — misturava duplicidade e decisões judiciais. O gap anual correto é ~629 mil (44%, sobre 1.491.608 adultos mortos registrados no DATASUS), não 98,9%." },
      { antes: "32.384 centenários no Censo 2022", depois: "37.814 centenários no Censo 2022", por: "Soma de todos os municípios na SIDRA 9514. Com isso a razão TSE/Censo caiu de 9,2× para 7,9× — mais conservador." },
      { antes: "248.967 centenários aptos no TSE (publicado de 09 a 10/11/2026)", depois: "297.977 centenários aptos no TSE — arquivo nacional completo, 1º turno de 2026, 27 UFs", por: "Erro nosso: o 248.967 saiu de uma cópia local incompleta do arquivo BRASIL — a extração parou em 2,57 GB de 3,03 GB, no meio de São Paulo. O arquivo oficial completo (11.060.908 linhas, CRC conferido) soma 297.977 nas 27 UFs e 298.239 com o exterior, exatamente a soma dos arquivos por UF que usávamos antes. A razão TSE/Censo é 7,9×, não 6,6×. A tabela de comparecimento de 2026 por faixa foi refeita com o arquivo completo." },
      { antes: "“Votos de falecidos provados com 100% de certeza” (texto de 10/11/2026 na página de provas)", depois: "“Cadastro com títulos de pessoas que não podem estar vivas: provado. Voto em nome de falecido: só o cruzamento nominal responde.”", por: "O texto contrariava a reconferência ADR-053 e esta própria página. Refizemos a conta nos dados brutos: no país e em cada estado, com e sem recorte por sexo (486 células), o comparecimento dos idosos ficou abaixo dos vivos do Censo em todas as faixas, e 99% dos títulos de centenários não registraram voto. Os agregados não permitem afirmar — nem negar — voto de falecido." },
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
    p1: "Official sources — IBGE, TSE, DATASUS, INSS — are the mandatory starting point, never the final word. Every index has a methodology; every methodology involves choices: what is measured, what is left out, who serves as the reference. Those choices can hide a bias, deliberate or not.",
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
      { tier: "T0", nome: "Primary official source", desc: "Complete published methodology.", exemplos: "IBGE (Census, SIDRA, PNS), TSE (open data, resolutions), DATASUS/SIM, INSS (open data), Federal Revenue, Treasury." },
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
          body: "The ZIP holds one CSV per state and a national one (BRASIL), with registered, turnout and abstention by municipality, zone, round and age group. Keep the SHA-256: the TSE replaces the file at the same address. The 2026 file with both rounds (13 Nov 2026) has SHA-256 3dc81301…8ef5; the earlier version, round 1 only, abd1af8f…f023. Both are at the Internet Archive — see the Backup page.",
          cmd: "curl -O https://cdn.tse.jus.br/estatistica/sead/odsele/perfil_comparecimento_abstencao/perfil_comparecimento_abstencao_2026.zip\nsha256sum perfil_comparecimento_abstencao_2026.zip\nunzip perfil_comparecimento_abstencao_2026.zip",
        },
        {
          title: "Aggregate by round and age group",
          body: "The CSV uses “;” as separator and latin-1 encoding. The round-1→round-2 change by age group is the basis of Pillar 1 (the elderly jump between rounds). Dividing the increase by round-1 abstentions gives the return to the polls per group.",
          cmd: 'import pandas as pd\ndf = pd.read_csv("perfil_comparecimento_abstencao_2026_BRASIL.csv",\n                 sep=";", encoding="latin-1")\ng = df.groupby(["NR_TURNO", "DS_FAIXA_ETARIA"])["QT_COMPARECIMENTO"].sum().unstack(0)\ng["delta_pct"] = (g[2] / g[1] - 1) * 100\nprint(g)',
        },
        {
          title: "Download the 2022 Census by municipality and age",
          body: "SIDRA table 9514 (population by age), level n6 = municipality. For the 2026 estimate, table 6579.",
          cmd: "curl 'https://apisidra.ibge.gov.br/values/t/9514/n6/all/v/93/p/2022/c2/6794/c287/93097'",
        },
        {
          title: "Download deaths from SIM/DATASUS",
          body: "Files DO{UF}{YEAR}.dbc; convert with pyreaddbc. The IDADE field encodes the unit in its first digit (4 = years; 5 = 100 years or more). Code 999 means unknown age and is not counted.",
          cmd: "ftp://ftp.datasus.gov.br/dissemin/publicos/SIM/CID10/DORES/DOSP2024.dbc",
        },
        {
          title: "Download the INSS active benefits",
          body: "On the INSS open-data portal, “Benefícios mantidos” (benefits in force), file MANTIDOS_ATIVOS_202609.zip (42.5 million rows; SHA-256 dae5db10…c623f915). The header uses commas and the rows use semicolons. The date of birth is that of the person receiving the benefit. Count those who were 100 or older on 6 Oct 2026.",
          cmd: 'import csv, io, zipfile\nfrom datetime import date\nz = zipfile.ZipFile("MANTIDOS_ATIVOS_202609.zip")\nf = io.TextIOWrapper(z.open(z.namelist()[0]), encoding="utf-8")\ncols = f.readline().strip().split(",")      # header with commas\ni = cols.index("dt_nascimento_titular")\nn = 0\nfor linha in csv.reader(f, delimiter=";"):  # rows with semicolons\n    try:\n        d, m, a = map(int, linha[i].split("/"))\n        n += date(a, m, d) <= date(1926, 10, 6)\n    except (ValueError, IndexError):\n        pass                                  # invalid dates\nprint(n)  # 72501',
        },
        {
          title: "Biometrics: download the voter profile and sum only the BRASIL file",
          body: "The ZIP holds perfil_eleitorado_2026_BRASIL.csv and one file per state with the same rows. Summing them all counts every voter twice — that was our error of 18 Nov 2026. Sum only BRASIL and check the total against the official electorate: 158,745,463 in 2026 (156,454,011 in 2022). A byte-for-byte identical copy is at the Internet Archive (captured 20 Aug 2026).",
          cmd: 'curl -O https://cdn.tse.jus.br/estatistica/sead/odsele/perfil_eleitorado/perfil_eleitorado_2026.zip\nsha256sum perfil_eleitorado_2026.zip   # 0952e9d9…648b\n\nimport pandas as pd\ndf = pd.read_csv("perfil_eleitorado_2026_BRASIL.csv", sep=";", encoding="latin-1",\n                 usecols=["SG_UF", "DS_FAIXA_ETARIA", "QT_ELEITORES", "QT_ELEITORES_BIOMETRIA"])\ng = df[df.SG_UF != "ZZ"].groupby("DS_FAIXA_ETARIA")[["QT_ELEITORES", "QT_ELEITORES_BIOMETRIA"]].sum()\ng["pct_bio"] = 100 * g.QT_ELEITORES_BIOMETRIA / g.QT_ELEITORES\nprint(g)',
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
      { titulo: "The jump between rounds is an anomaly with no measured explanation", desc: "Turnout of voters aged 70 or over rose 14.8% from round 1 to round 2 of 2026 (1,295,980 more) — no other group came close. The explanation usually given, that the elderly were brought to the polls, has not been measured by anyone, including the TSE. The increase in turnout between rounds grows with age, and the turnout level rose almost 15 points in four years among the 75+." },
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
      { antes: "“about 15,000 centenarian deaths a year”, the DATASUS “74,242” card on /provas and “815,847 deaths of people 70+ per year” (until 19 Nov 2026)", depois: "about 13,000 a year (12,691 on average), 63,455 in five years and 823,126 deaths of people 70+ per year, on average (2020–2024)", por: "Our error: all three came from the old count, which treated unknown age as 100 or over, and the first fix, made the same day, left these passages behind. The 70+ figure was for 2024 only; it is now the 2020–2024 average." },
      { antes: "“At least 260,000 centenarian registrations of people who cannot be alive” (/provas, until 19 Nov 2026)", depois: "“At least 173,575, counting only the deaths the Ministry of Health recorded (by IBGE's count, about 260,000)”", por: "The 260,000 is the difference between the TSE's list and IBGE's count: it is the best estimate, but not a certain minimum. The minimum that depends on no estimate is 173,575 — people aged 95 or over in the Census, minus recorded deaths — or 94,985 without subtracting any death at all." },
      { antes: "DATASUS: 74,242 centenarian deaths in 2020–2024 (four rulers, /provas, /cadastro, slides; until 19 Nov 2026)", depois: "63,455", por: "Our error: the old count treated every age code from 500 up as “100 or over”. In DATASUS, unit code 5 means 100 or over; 999 means unknown age. The 10,787 deaths of unknown age were removed. The conclusion stands: the registry holds nearly five times the centenarian deaths of five years." },
      { antes: "“Dead people voted. It is proven (P < 10⁻¹⁵⁵⁰)” — home, proofs, objections and data (18 Nov 2026)", depois: "“Registrations of people who cannot be alive were eligible, and 92% of centenarian ones lack biometrics; whether any recorded a vote, only the name-by-name cross-check can tell”", por: "Our error, in two layers. The sum used 596,478 centenarians, twice the real figure: the voter-profile file holds the national sheet and the 28 state sheets with the same rows, and we summed them all — reading only BRASIL, there are 297,977 across the 27 states, the same number as in the turnout file. And even with the right number, the sum assumed that a dead person's registration turns out as often as a living one's, which was exactly what it set out to prove. If no dead person had voted, the 3,307 centenarian turnouts would only require 2 to 9 in every 100 living centenarians to vote — which is possible. The totals still cannot tell zero from thousands." },
      { antes: "INSS: 46,575 “living titleholder” centenarians; TSE 12.8 times the INSS (18 Nov 2026)", depois: "72,501 benefits paid to people aged 100 or over; TSE 4.1 times the INSS", por: "Our error: the 12.8× divided the doubled number (596,478). And the 46,575 discounted survivor pensions on the assumption that the date of birth was the deceased's; in the file it is the recipient's — pensions paid to children have beneficiaries under 21. Centenarian pensioners are living widows and widowers. Since one person may receive two benefits, 4.1× is a floor." },
      { antes: "Centenarians per 100,000 inhabitants: Japan 7.5; USA 3.0; France 3.5; Italy 4.0 — “almost 20 times Japan” and the “19.6×” highlight on /cadastro (until 18 Nov 2026)", depois: "Japan 88; USA 32; France 46; Italy 38 — “almost double the most long-lived country”; highlight: 1.7×", por: "Our error: the rates were about ten times below each country's official counts (Japan: 107,677 centenarians in Sep 2026). The source we cited, the UN, also gives higher figures. With the right rates, Brazil's Census (18.6) sits below Japan, as expected, and the TSE registry (147) remains above them all." },
      { antes: "“The 2026 voter profile and the TCU note have no copy at the Internet Archive” (Backup page, 18 Nov 2026)", depois: "They do: the voter-profile ZIP was captured on 20 Aug 2026 and the TCU page in 2025", por: "Our error: we concluded this from capture requests that failed, without checking the archive's index. We downloaded the 2022 and 2026 voter-profile copies from the Internet Archive: their SHA-256 is identical to ours." },
      { antes: "Centenarian turnout in the 2026 runoff: 3,313 (18 Nov 2026)", depois: "3,307", por: "3,313 includes voters abroad. For centenarians the site uses the 27 states: 297,977 registered, 2,133 turnouts in round 1 and 3,307 in round 2 — the same universe in all three numbers." },
      { antes: "Projection for the 2026 runoff: an excess of 59,000 to 316,000 (published until 13 Nov 2026)", depois: "Real figure: 472,721 turnouts of 75+ above the pace of the 70–74 band; jump of all 70+: 1,295,980 (+14.8%)", por: "The TSE published the runoff on 13 Nov 2026. The projection gave way to the figure measured in the official file (22,121,816 rows) and fell short of it." },
      { antes: "“The real figure was 1,295,000 — four times the projection's ceiling”; a jump of 1,294,921 (published 14–15 Nov 2026)", depois: "“The real excess was 472,721 — 50% above the 316,000 ceiling”; jump of all 70+: 1,295,980", por: "Our error: we compared the total jump of the 70+ with a projection that measured only the excess above the pace of the 70–74 band — two different measures. Under the projection's definition, the real figure is 472,721. And 1,294,921 was the jump for the 27 states only; the historical series (614,299 in 2022) includes voters abroad, and in the same universe the 2026 number is 1,295,980." },
      { antes: "“Each election the jump gets worse” and “more than the entire population of Porto Alegre” (14–15 Nov 2026)", depois: "“The 2026 jump is the largest in the series” and “more than the entire population of Guarulhos”", por: "Our error: the 2018 jump (+2.8%) was smaller than 2014's (+3.9%) — it does not worsen every election; it grew in the last two. And Porto Alegre has 1,332,845 inhabitants in the 2022 Census, more than the 1,295,980 of the jump; Guarulhos has 1,291,771." },
      { antes: "“The biological inversion” as the strongest evidence; “the elderly's increase is 397 times the adults'”; “biology predicts the opposite curve”", depois: "“The elderly jump between rounds”: a measured fact, a signal to be explained", por: "With the 2026 runoff we redid the sum another way: of every 100 who skipped round 1, how many showed up for round 2. The result falls with age after 74 (21 at ages 70–74, 2 at 95–99), as health predicts — the increase “that grows with age” came from dividing by an ever-smaller base. Illiterate voters aged 18 to 69, also optional voters, rose 6.2%. And the 397 ratio divided by +0.05%: in 2026 the same calculation gives 22. The jump remains measured and without an official explanation, but it is no longer presented as a biological impossibility." },
      { antes: "Centenarian turnout in the first round of 2026: 2,141", depois: "2,133", por: "Not our error: the TSE republished the file on 13 Nov 2026 and the first round changed — 788 fewer turnouts in total, in 31 municipalities and 4 voting cities abroad, with no change note. We use the latest version and keep both at the Internet Archive." },
      { antes: "“788 fewer, in 35 municipalities” (16 Nov 2026)", depois: "“788 fewer, in 31 municipalities and 4 voting cities abroad”", por: "The TSE file records voting cities abroad in the same field as municipalities. Of the 35 places changed, 31 are Brazilian municipalities and 4 are outside the country (122 of the 788)." },
      { antes: "17,505 cancellations due to death per year", depois: "787,825 cancellations due to death in 2022", por: "The 17,505 was the 2025 total cancelled “for other miscellaneous reasons, such as death” — it mixed duplicates and court orders. The correct annual gap is ~629,000 (44%, over 1,491,608 adult deaths recorded in DATASUS), not 98.9%." },
      { antes: "32,384 centenarians in the 2022 Census", depois: "37,814 centenarians in the 2022 Census", por: "Sum of all municipalities in SIDRA 9514. This brought the TSE/Census ratio from 9.2× down to 7.9× — more conservative." },
      { antes: "248,967 centenarians registered at the TSE (published 9–10 Nov 2026)", depois: "297,977 centenarians registered at the TSE — complete national file, 2026 round 1, 27 states", por: "Our error: the 248,967 came from an incomplete local copy of the BRASIL file — extraction stopped at 2.57 GB of 3.03 GB, partway through São Paulo. The complete official file (11,060,908 rows, CRC verified) totals 297,977 across the 27 states and 298,239 including voters abroad, exactly the sum of the per-state files we used before. The TSE/Census ratio is 7.9×, not 6.6×. The 2026 turnout-by-age table was rebuilt from the complete file." },
      { antes: "“Deceased votes proven with 100% certainty” (text of 10 Nov 2026 on the proofs page)", depois: "“Registry holding registrations of people who cannot be alive: proven. Votes in a dead person's name: only the name-by-name cross-check can tell.”", por: "The text contradicted the ADR-053 re-check and this very page. We redid the sums on the raw data: nationwide and in every state, with and without a breakdown by sex (486 cells), elderly turnout stayed below the Census count of the living in every age band, and 99% of centenarian registrations recorded no vote. The aggregates can neither affirm nor rule out votes by the deceased." },
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
