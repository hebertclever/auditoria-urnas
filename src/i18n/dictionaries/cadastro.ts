// Seção: /cadastro — todo texto visível da página, PT e EN.

const pt = {
  meta: {
    title: "O cadastro fantasma",
    description:
      "Cinco pilares, com dados T0, sobre os títulos de falecidos que seguem ativos no cadastro eleitoral — e o salto dos idosos entre os turnos.",
  },
  ui: {
    pilar: "Pilar",
    forca: "força da evidência",
    comoMedimos: "Como medimos",
    naoProva: "Anomalia registrada — o que o TSE precisa responder",
    porque: "Por que isto pesa",
    passo: "Passo",
    indice: "Nesta página",
    visualDe: "Visualização interativa",
  },
  hero: {
    eyebrow: "Eixo 1 · Cadastro eleitoral",
    title: "O cadastro fantasma",
    lead:
      "Numa sala em que o IBGE contou 10 pessoas e o INSS paga 19 benefícios, a lista de eleitores do TSE tem 79 nomes. É isso que dizem, juntos, os dados oficiais do IBGE, do Ministério da Saúde, do INSS e do próprio TSE: centenas de milhares de títulos de pessoas falecidas continuam ativos no cadastro eleitoral brasileiro. O problema é estrutural — aparece em 2022 e em 2026, e só entre os centenários o cadastro ganhou 113 mil nomes em quatro anos — e a revisão do eleitorado que a lei manda fazer virou, numa resolução do próprio TSE, uma opção.",
    stats: {
      tse: "centenários registrados como eleitores no TSE (2026), contra 37.814 encontrados vivos pelo Censo 2022",
      razao: "mais centenários no cadastro do TSE do que o IBGE contou, porta a porta, no Censo",
      inss: "mais centenários no cadastro do que benefícios pagos pelo INSS, que confere todo ano se cada beneficiário está vivo",
      gap: "títulos de eleitores falecidos que ficam sem cancelamento a cada ano (gap de 44%)",
      controle: "eleitores de 70 anos ou mais a mais no 2º turno de 2026 do que no 1º (+14,8%) — o maior salto da série",
    },
    note:
      "Os cinco pilares abaixo são independentes: usam fontes e comparações diferentes. Derrubar um não derruba os outros. Cada pilar diz o que prova — e o que não prova.",
  },
  p1: {
    short: "Salto entre turnos",
    eyebrow: "Pilar 1 · o sinal entre os turnos",
    title: "O salto dos idosos entre os turnos",
    lead:
      "Do 1º para o 2º turno de 2026, 1,3 milhão de eleitores de 70 anos ou mais apareceram a mais nas urnas: +14,8%, contra +1,4% no resto do eleitorado. É o maior salto das quatro eleições presidenciais com esse dado (2014 a 2026) — mais que o dobro do de 2022 — e, quanto mais velha a faixa, maior o aumento em relação ao 1º turno.",
    steps: [
      {
        t: "Primeiro turno",
        b: "Imagine duas filas no dia 4 de outubro de 2026: uma de adultos entre 21 e 69 anos, outra de idosos com 70 anos ou mais, para quem o voto é facultativo. Na fila dos idosos votaram 8,77 milhões de pessoas.",
      },
      {
        t: "Segundo turno",
        b: "Três semanas depois, a fila dos adultos cresce 1,5%. A dos idosos cresce 14,8%: 1.295.980 comparecimentos a mais. Para cada 20 idosos que votaram no 1º turno, o 2º turno teve 23.",
      },
      {
        t: "44% do aumento",
        b: "Os eleitores de 70 anos ou mais eram 7% de quem votou no 1º turno — e responderam por 44% de todo o aumento de comparecimento entre os turnos. Em 2022 a concentração foi ainda maior: sem eles, o comparecimento do país teria caído do 1º para o 2º turno.",
      },
    ],
    anim: {
      jovens: "Adultos 21–69",
      idosos: "Idosos 70+",
      t1: "1º turno",
      t2: "2º turno",
      variacao: "variação",
      media: "todas as faixas 70+",
      razao: "de todo o aumento entre os turnos veio dos 70+",
      controle: "7% dos votantes",
    },
    chart: {
      title: "Variação do comparecimento do 1º para o 2º turno, por faixa etária",
      note: "Verde-azulado: faixas de 16 a 69 anos. Âmbar: 70 anos ou mais. Linha tracejada: média das faixas de 21 a 69 anos",
      ano: "Eleição",
    },
    retorno: {
      title: "De cada 100 que faltaram ao 1º turno, quantos apareceram no 2º",
      note: "Aumento do comparecimento entre os turnos dividido pelas abstenções do 1º turno, por faixa etária. É um saldo: quem veio a mais menos quem deixou de vir. O pico está nos 70–74 anos; daí em diante a proporção cai a cada faixa.",
    },
    hist: {
      title: "2014, 2018, 2022 e 2026: o maior salto é o de 2026",
      note: "Variação do 1º para o 2º turno nas faixas 70+, por eleição presidencial com segundo turno. 2012 e 2016 foram eleições municipais (2º turno só em algumas cidades) e não entram.",
      excesso: "comparecimentos de 75+ acima do ritmo da faixa 70–74",
      legenda: "Eleição",
    },
    fac: {
      title: "Ninguém subiu como os idosos — nem quem também vota só se quiser (2026)",
      grupo: "Grupo",
      aumento: "Aumento 1º→2º turno",
      retorno: "Voltaram, de cada 100 que faltaram ao 1º",
      grupos: {
        jovens: "16 e 17 anos · facultativo",
        analfabetos: "18 a 69 anos, analfabetos · facultativo",
        obrigatorio: "18 a 69 anos · obrigatório",
        idosos: "70 anos ou mais · facultativo",
      },
    },
    why: {
      title: "As anomalias medidas",
      items: [
        "Compara o TSE com o próprio TSE: mesmo cadastro, dois turnos, três semanas de intervalo. Não depende do IBGE nem de estimativa.",
        "É o maior salto da série: +3,9% em 2014, +2,8% em 2018, +10,0% em 2022 e +14,8% em 2026.",
        "Está no país inteiro: em 2026 o comparecimento dos 70+ subiu em 5.490 dos 5.571 municípios e em 25 dos 27 estados.",
        "Começa exatamente onde o voto deixa de ser obrigatório: +2,3% aos 65–69 anos, +9,4% aos 70–74.",
        "Concentra-se nos idosos de menor escolaridade: +40% entre os analfabetos de 70 anos ou mais, +4,5% entre os que têm ensino superior.",
        "Os outros eleitores de voto facultativo fizeram algo parecido: entre os analfabetos de 18 a 69 anos, voltaram no 2º turno 14 de cada 100 que tinham faltado ao 1º; entre os idosos, 15.",
      ],
    },
    method: [
      "Fonte: arquivos oficiais “Comparecimento e abstenção por perfil do eleitorado” do TSE (2014, 2018, 2022 e 2026), lidos integralmente. O de 2026 com os dois turnos foi publicado em 13/11/2026: 22.121.816 linhas, SHA-256 conferido, aptos = comparecimento + abstenção em todas.",
      "Para cada faixa etária somamos o comparecimento nacional no 1º e no 2º turno. Variação = (2º − 1º) ÷ 1º.",
      "Volta às urnas = (2º − 1º) ÷ abstenções do 1º turno. É um saldo líquido: o arquivo não diz quem votou só em um dos turnos.",
      "Voto facultativo e obrigatório: colunas QT_COMPAREC_FACULTATIVO e QT_COMPAREC_OBRIGATORIO do próprio arquivo. Entre 18 e 69 anos, o voto facultativo é o dos analfabetos.",
      "Excedente = quanto cada faixa acima de 74 anos teve a mais do que teria se crescesse como a faixa 70–74: 58.913 (2014), 27.477 (2018), 198.738 (2022) e 472.721 (2026).",
    ],
    naoProva:
      "É a maior anomalia de comparecimento da série, e está no arquivo do próprio TSE. Nenhum outro grupo chegou perto — nem quem também vota só se quiser: jovens de 16 e 17 anos subiram 0,8%, analfabetos de 18 a 69 anos 6,2%, adultos obrigados 1,3%. Os idosos subiram 14,8%. Quem são esses 1,3 milhão de eleitores a mais? Quantos foram identificados pela digital e quantos foram liberados sem ela? Em quais seções? O TSE registra, eleitor por eleitor, quem compareceu e como foi identificado — e não publicou essa conta. Ninguém mediu a explicação que se costuma dar, a de idosos levados às urnas para o 2º turno: nem o TSE. Enquanto ele não mostrar, a anomalia segue sem resposta.",
  },
  p2: {
    short: "Centenários",
    eyebrow: "Pilar 2 · contagem contra contagem",
    title: "O impossível demográfico",
    lead:
      "O IBGE bateu em todas as casas do país em 2022 e encontrou 37.814 pessoas com 100 anos ou mais. O INSS, que confere todo ano se cada beneficiário está vivo, paga 72.501 benefícios a pessoas dessa idade. O TSE tem 297.977 registradas como eleitoras: 7,9 vezes o Censo e 4,1 vezes o INSS — sem depender de nenhuma estimativa ou projeção.",
    steps: [
      {
        t: "O prédio do Censo",
        b: "Pense no Brasil como um prédio. Em 2022, os recenseadores do IBGE bateram em cada porta e encontraram 37.814 centenários. Cada janela acesa representa mil pessoas vivas.",
      },
      {
        t: "A lista do TSE",
        b: "Agora olhe a lista de eleitores do TSE para a mesma idade: 297.977 nomes. Só 38 mil deles cabem nas janelas acesas. Os outros 260 mil estão na lista, mas ninguém os encontrou em casa.",
      },
      {
        t: "A folha do INSS",
        b: "Agora a folha do INSS, que paga todo mês e confere todo ano se cada beneficiário está vivo: 72.501 benefícios a pessoas com 100 anos ou mais — 73 dos 298 quadrados da lista. Para cada benefício que quem paga reconhece, o cadastro eleitoral tem quatro nomes.",
      },
      {
        t: "Nenhum país do mundo",
        b: "O Japão, líder mundial em longevidade, tem 88 centenários por 100 mil habitantes. O Censo brasileiro tem 18,6 — esperado para o nível de saúde do país. Mas o cadastro do TSE equivale a 147 por 100 mil: quase o dobro do país mais longevo do mundo. Comparando idoso com idoso — centenários em cada mil pessoas de 80 anos ou mais —, a distância cresce: Japão 8,4; Censo do Brasil 8,2; lista do TSE 54 — seis vezes e meia.",
      },
    ],
    anim: {
      censo: "Censo IBGE 2022",
      tse: "Cadastro TSE 2026",
      janela: "janela acesa = mil pessoas encontradas vivas",
      inss: "na folha do INSS",
      nomes: "nomes na lista",
      fantasma: "sem janela",
      encontrados: "encontrados vivos",
      registrados: "registrados como eleitores",
      por100k: "por 100 mil habitantes",
    },
    chart: {
      title: "Centenários por 100 mil habitantes",
      note: "Fontes: contagens oficiais de cada país (Japão: Min. Saúde; EUA: Census Bureau; França: INSEE; Itália: ISTAT), IBGE Censo 2022 e TSE perfil de comparecimento 2026.",
    },
    stats: {
      fantasma: "dos centenários do cadastro não correspondem a pessoas que o Censo encontrou vivas",
      japao: "mais centenários entre os eleitores de 80+ do TSE do que entre os japoneses de 80+ — o país mais longevo do mundo",
      zero: "municípios com centenários cadastrados no TSE e zero mortes de centenários em cinco anos (578 cadastrados)",
    },
    why: {
      title: "Por que esta comparação resiste",
      items: [
        "É Censo contra cadastro, os dois dados primários — nenhuma premissa de sobrevivência no meio.",
        "É nacional: quem o Censo não achou em um município foi achado em outro. Domicílio eleitoral não muda o total do país.",
        "Objeção “nasceram depois de 2022”: a faixa 95–99 tinha ~165 mil pessoas no Censo. Mesmo que todas vivessem até 2026 (impossível), somariam ~203 mil com os 37,8 mil — quase 95 mil abaixo dos 298 mil do cadastro.",
        "Uma subcontagem do Censo teria de ser de 7,9 vezes para explicar o TSE. A cobertura do Censo é da ordem de 97%.",
        "13 municípios têm 578 centenários no TSE e zero óbitos de centenários em 2020–2024. Com expectativa de vida de ~2 anos aos 100, esperar-se-iam centenas de mortes.",
        "O DATASUS registrou 63.455 mortes de centenários em 5 anos (2020–2024). O cadastro tem quase cinco vezes isso em centenários aptos.",
        "O INSS (previdência) paga 72.501 benefícios a pessoas com 100 anos ou mais e precisa confirmar, todo ano, que cada beneficiário está vivo. O TSE tem 297.977 centenários aptos — 4,1 vezes mais. Numa folha de pagamento, centenário fantasma é dinheiro perdido todo mês: o incentivo é limpar, não manter.",
        "A biometria quase não alcançou esses títulos: de 2022 a 2026, a cobertura dos centenários foi de 6,2% para 8,0%, enquanto a dos 90–94 anos subiu de 26,6% para 53,2%. E os títulos de centenários sem biometria aumentaram 58,5%, enquanto em todas as outras faixas de idosos caíram.",
        "Idoso com idoso, o Japão fica para trás: entre as pessoas de 80 anos ou mais, o Japão tem 8 centenários em cada mil e o Censo do Brasil também (8,2). A lista do TSE tem 54 — seis vezes e meia. Essa conta não depende de o Japão ter mais idosos: compara só os idosos.",
      ],
    },
    method: [
      "Censo 2022: SIDRA tabela 9514, grupo “100 anos ou mais”, soma dos 5.570 municípios.",
      "TSE: “Comparecimento e abstenção por perfil do eleitorado” 2026 (1º turno), campo aptos, faixa 100+, total nacional.",
      "Óbitos: DATASUS/SIM 2020–2024, arquivos nacionais, campo IDADE com código 5 (100 anos ou mais; o código 999, idade ignorada, não entra); média de 12.691 mortes de centenários por ano.",
      "Internacional: contagens oficiais de cada país (Japão: Min. Saúde set/2026, 107.677/123M = 88/100k; EUA: Census Bureau; França: INSEE; Itália: ISTAT). Brasil Censo = 37.814 ÷ 203 milhões; Brasil TSE = 297.977 ÷ 203 milhões.",
      "INSS: benefícios mantidos ativos em set/2026 (dados abertos, 42,5 milhões de registros), idade exata de quem recebe em 06/10/2026: 72.501 benefícios de pessoas com 100 anos ou mais. Benefício não é pessoa — alguém pode receber dois —, o que só aumenta a distância para o TSE.",
      "Biometria: “Perfil do eleitorado” 2022 e 2026 do TSE, colunas QT_ELEITORES e QT_ELEITORES_BIOMETRIA, 27 UFs. O ZIP traz o arquivo BRASIL e um por UF com as mesmas linhas: some um ou outro, nunca os dois.",
      "Idoso com idoso: Japão 107.677 centenários ÷ 12,88 milhões de pessoas de 80+ (Agência de Estatística do Japão, Statistical Topics No. 149, tabela 1, estimativa de 15/09/2026) = 8,4 por mil; Brasil Censo 2022: 37.814 ÷ 4.586.954 = 8,2; TSE 2026: 297.977 ÷ 5.508.439 aptos de 80+ = 54,1.",
    ],
    naoProva:
      "Quem são os 260 mil nomes da lista que o Censo não encontrou? Erro na data de nascimento não explica: a lista tem mais centenários do que o Censo encontrou com 95 anos ou mais. O TSE tem o nome, a data de nascimento e o nome da mãe de cada um, e o Estado tem os registros de óbito. Os nomes continuam na lista — e a revisão do eleitorado que a lei manda fazer virou, numa resolução do TSE, uma opção.",
  },
  p3: {
    short: "Limpeza cadastral",
    eyebrow: "Pilar 3 · o mecanismo",
    title: "A limpeza que não acontece",
    lead:
      "A lei manda cancelar o título de quem morre, e os cartórios devem avisar os óbitos à Justiça Eleitoral todo mês (Código Eleitoral, art. 71). Em 2022, o TSE cancelou 787.825 títulos por falecimento. Naquele ano, 1.491.608 adultos morreram — contagem exata do DATASUS. Mais de quatro em cada dez títulos de falecidos ficaram ativos.",
    steps: [
      {
        t: "Mortes entram",
        b: "Todo ano, cerca de 1,5 milhão de adultos morrem no Brasil — contagem exata do DATASUS, e ~95% têm título. Cada ponto que cai no funil é um título que deveria ser cancelado.",
      },
      {
        t: "Só parte sai cancelada",
        b: "Em 2022, o melhor ano com dados detalhados, o TSE cancelou 787.825 títulos por falecimento — 56%. Os outros 44%, cerca de 629 mil, continuaram ativos no cadastro.",
      },
      {
        t: "A pilha cresce",
        b: "O que não é cancelado fica no cadastro. Se o ritmo de 2022 se repetisse por quatro anos, sem nenhuma correção posterior, seriam até 2,5 milhões de títulos entre duas eleições presidenciais. O estoque que dá para medir é menor — 606 mil títulos de 90 anos ou mais além dos vivos, em 2022 —, sinal de que parte é corrigida depois. Quanto, só o TSE sabe. E, para quem tem mais de 70 anos, faltar à eleição não cancela o título: a única saída da lista é o aviso de óbito.",
      },
    ],
    anim: {
      mortes: "mortes de eleitores por ano",
      cancelados: "cancelados",
      ativos: "seguem ativos",
      ano: "ano",
      acumulado: "títulos de falecidos acumulados",
    },
    chart: {
      title: "Mortes de eleitores × cancelamentos por falecimento (2022)",
      note: "Mortes de adultos (18+) = 1.491.608, contagem exata do DATASUS/SIM; ~95% dos adultos têm título. Cancelamentos: TSE, maio de 2023.",
      mortes: "Mortes de eleitores",
      cancelados: "Cancelados",
      gap: "Não cancelados",
    },
    table: {
      title: "Quanto acumula se nada mudar",
      periodo: "Período",
      titulos: "Títulos de falecidos ativos (estimativa)",
    },
    correcao: "Correção de um número nosso",
    why: {
      title: "Por que isto fecha o círculo",
      items: [
        "Explica os Pilares 1 e 2: títulos de falecidos inflam os aptos e se concentram nas faixas mais velhas, onde há mais mortes.",
        "Os 606 mil registros de 90+ a mais do que o Censo (2022) equivalem a cerca de um ano de gap.",
        "A norma existe desde 2006: a Resolução TSE 22.166 prevê o cruzamento com registros de óbito. O gap é de execução, não de regra.",
        "A lei é mais antiga ainda: o Código Eleitoral manda cancelar o título por falecimento (art. 71, IV) e obriga os cartórios a comunicar os óbitos ao juiz eleitoral até o dia 15 de cada mês (art. 71, § 3º).",
        "Acima de 70 anos, quem falta às eleições não perde o título — o próprio TSE diz que essa idade está “fora dessa regra”. Sem o aviso de óbito, o título do idoso que morreu fica ativo para sempre.",
        "A revisão do eleitorado é a faxina que a Lei das Eleições manda o TSE fazer quando o cadastro passa de 65% da população (“determinará de ofício”, art. 92). A resolução do TSE trocou por “poderá … observada a conveniência e a disponibilidade de recursos” — e o TSE já negou revisões por falta de verba.",
      ],
    },
    method: [
      "Cancelamentos 2022 por motivo: 793.776 no total; 787.825 (99,25%) por falecimento; 5.765 por decisão judicial; 145 por perda de direitos; 38 por duplicidade; 3 por revisão. Fonte: TSE, maio de 2023.",
      "Mortes de adultos (18+) em 2022: 1.491.608 — contagem exata dos registros individuais do DATASUS/SIM. Parcela com título: ~95% dos adultos (TSE: ~156 mi títulos para ~160 mi adultos).",
      "Gap = 1.417.028 − 787.825 = 629.203 (44,4%). Sem premissa alguma, só sobre adultos: 787.825 ÷ 1.491.608 = 52,8% cancelados.",
      "Ressalva: o dado de 2022 pode incluir óbitos de anos anteriores processados com atraso (pandemia). Isso tornaria o gap de anos individuais maior e o acumulado menor; a ordem de grandeza não muda.",
    ],
    naoProva:
      "O TSE confirma o comparecimento dessas faixas — é o número oficial de votos, não uma inferência nossa. E o DATASUS dá o número concreto de mortos: ninguém entra na base de óbitos sem atestado assinado por médico. Está provado, então, que foram registrados votos em faixas cujo cadastro está cheio de pessoas comprovadamente mortas — e, em 137 municípios, houve mais votos do que moradores da faixa no Censo. O que os dados públicos ainda não ligam é o nome: qual voto saiu de um título de falecido e qual de um eleitor vivo. Esse vínculo nome a nome só o cruzamento do governo fecha, em menos de uma hora. Intenção não é demonstrada; pode ser ineficiência. Mas ineficiência dessa escala, sem correção verificável, é exatamente o que exige auditoria.",
  },
  p4: {
    short: "Votos > população",
    eyebrow: "Pilar 4 · teste de robustez",
    title: "Cidades onde votaram mais pessoas do que moradores",
    lead:
      "Em 107 municípios, o número de votos no 2º turno de 2026 foi maior que a população inteira estimada pelo IBGE — contando bebês, crianças e acamados. Em 730, há mais títulos de eleitor do que habitantes.",
    steps: [
      {
        t: "O estádio",
        b: "Davinópolis (GO) tem 1.877 moradores segundo o IBGE. Pense num estádio com 1.877 assentos — um para cada pessoa da cidade, de qualquer idade.",
      },
      {
        t: "Os ingressos",
        b: "O TSE emitiu 4.144 títulos de eleitor para essa cidade: 2,2 ingressos por morador. Para cada adulto, são 2,8 títulos.",
      },
      {
        t: "Quem entrou",
        b: "No 2º turno de 2026, 3.010 pessoas votaram. São 1.133 a mais do que assentos — mais votos do que habitantes de qualquer idade. Use o controle abaixo da animação: e se o IBGE tivesse errado a população?",
      },
    ],
    anim: {
      moradores: "moradores (IBGE 2026)",
      titulos: "títulos de eleitor (TSE)",
      votos: "votos no 2º turno",
      semAssento: "sem assento",
      slider: "E se o IBGE errou a população em",
      popAjustada: "população ajustada",
      restantes: "dos 20 municípios mais extremos ainda têm mais votos do que habitantes",
      assento: "1 assento = 50 pessoas",
      cidade: "Davinópolis · GO",
    },
    chart: {
      title: "Quantos dos 20 municípios mais extremos sobrevivem a cada margem de erro do IBGE",
      note: "Mesmo com +10% de margem, todos os 20 permanecem. Com +20%, nove. Davinópolis só desaparece com +60%.",
      eixo: "margem de erro do IBGE",
    },
    table: {
      title: "Os sete casos mais extremos (2º turno de 2026)",
      votosPop: "Votos ÷ pop.",
      aptosPop: "Títulos ÷ pop.",
    },
    stats: {
      aptosPop: "municípios com mais títulos de eleitor do que habitantes",
      votosPop: "municípios com mais votos do que habitantes no 2º turno de 2026",
      davi: "títulos de eleitor por habitante em Davinópolis (GO), contando pessoas de qualquer idade",
    },
    why: {
      title: "Por que resiste à objeção “o IBGE errou”",
      items: [
        "No Brasil inteiro, há 73 títulos para cada 100 habitantes. Nos 20 municípios mais extremos, 155 — mais que o dobro.",
        "Para zerar o excesso desses 20, o IBGE teria de ter subestimado a população em 104% — o dobro de gente. São municípios rurais pequenos, muitos em declínio.",
        "Domicílio eleitoral explica parte (pessoas que votam onde não moram), mas não 2,2 títulos por habitante.",
      ],
    },
    method: [
      "Votos e aptos: BWEB/TSE, 2º turno de 2026, 28 UFs, 499.177 seções, cargo presidente.",
      "População: IBGE, estimativas 2026 (SIDRA 6579); casamento por nome exato UF + município: 5.550 de 5.571.",
      "Sensibilidade: inflamos a população de cada município em +5%, +10% … +60% e recontamos quantos ainda têm votos > população.",
      "Contagem independente: a Agência Tatu reportou 733 municípios com mais eleitores que habitantes em julho de 2026; encontramos 730.",
    ],
    naoProva:
      "Quanto desse excesso é de falecidos, quanto de quem se mudou e nunca transferiu o título e quanto de quem mantém título onde não mora? O TSE pode separar, título por título; os dados públicos, não. Nesses municípios, o BU bate com o RDV em todas as seções, não há votos depois do encerramento e a velocidade de votação é normal: o que está inflado é o cadastro.",
  },
  p5: {
    short: "Capacidade funcional",
    eyebrow: "Pilar 5 · a contradição",
    title: "Quem consegue ir votar?",
    lead:
      "A Pesquisa Nacional de Saúde do IBGE mede o que os idosos conseguem fazer sozinhos: 43% dos brasileiros com 75 anos ou mais têm dificuldade para ir a lugares distantes ou usar transporte. Mesmo assim, é entre os mais velhos que o comparecimento mais cresce do 1º para o 2º turno — +9% aos 70–74 anos, +55% entre os centenários. E, em quatro anos, o comparecimento dos eleitores de 75 anos ou mais no 2º turno subiu de 32% para 47%.",
    steps: [
      {
        t: "Cem pessoas com 75 anos ou mais",
        b: "Cada boneco é uma pessoa. Juntas, representam os brasileiros de 75 anos ou mais.",
      },
      {
        t: "43 não conseguem ir longe sozinhas",
        b: "Segundo a PNS 2019, 43,2% têm limitação para atividades como ir a lugares distantes, usar transporte ou lidar com dinheiro. 6% dos 80+ estiveram acamados nas duas semanas anteriores à pesquisa.",
      },
      {
        t: "A volta às urnas cai com a idade",
        b: "Entre os que faltaram ao 1º turno de 2026, apareceram no 2º turno 21 de cada 100 aos 70–74 anos, 15 aos 80–84 e 2 aos 95–99. A curva desce com a idade. Mas o aumento em relação ao 1º turno faz o contrário: cresceu 9% aos 70–74 anos, 25% aos 80–84, 43% aos 90–94 e 55% entre os centenários. Quanto mais velha a faixa — e maior a dificuldade para sair de casa —, maior o aumento. E o nível subiu: 47% dos eleitores de 75+ votaram no 2º turno de 2026, contra 32% em 2022.",
      },
    ],
    anim: {
      pessoas: "pessoas com 75 anos ou mais",
      limitadas: "com limitação para sair sozinhas (PNS 2019)",
      aumento: "de cada 100 que faltaram ao 1º turno, vieram no 2º (2026)",
    },
    chart: {
      turnout: "Comparecimento no 2º turno de 2026, sobre os aptos",
      delta: "De cada 100 que faltaram ao 1º turno, vieram no 2º (2026)",
      note: "No primeiro gráfico, o nível cai com a idade, como esperado. No segundo, a volta às urnas no 2º turno: também cai com a idade a partir dos 75 anos.",
    },
    table: {
      title: "Comparecimento de eleitores com 80 anos ou mais: comparação internacional",
      lugar: "Onde",
      pct: "Comparecimento",
    },
    why: {
      title: "As anomalias medidas",
      items: [
        "O aumento do comparecimento do 1º para o 2º turno cresce com a idade: +9% aos 70–74 anos, +34% aos 85–89, +55% entre os centenários. Os mais velhos, que têm mais dificuldade para sair de casa, foram os que mais cresceram.",
        "O comparecimento dos eleitores de 75 anos ou mais subiu quase 15 pontos em quatro anos: de 32% em 2022 para 47% em 2026.",
        "Os 70+ como grupo foram os que mais voltaram às urnas: 15 de cada 100 que faltaram ao 1º turno, contra 6 entre os adultos obrigados. Dentro dos 70+, a volta cai com a idade (21 aos 70–74, 2 aos 95–99) — mas até os 90–94 anos fica acima da dos adultos obrigados.",
        "O nível de comparecimento ainda cabe na capacidade funcional (46% aos 80–84 anos, onde 30–39% têm muita dificuldade). O que pede resposta é a velocidade da subida.",
        "No Japão, o comparecimento dos 80+ fica entre 33% e 48%; na Alemanha chega a 85%, mas com voto postal amplo. No Brasil o voto é presencial.",
      ],
    },
    method: [
      "PNS 2019 (IBGE): limitação AIVD em 43,2% dos 75+; ABVD em 18,5%; acamamento em 6,0% dos 80+ (Lima et al., 2024, n = 22.728).",
      "Censo 2022: deficiência (muita dificuldade ou impossibilidade) em 30–39% dos 80–84, ~48% dos 85–89 e mais de 60% dos 100+.",
      "Comparecimento: TSE 2022 e 2026, 2º turno, por faixa, sobre os aptos. Volta às urnas = aumento entre os turnos ÷ abstenções do 1º turno (Pilar 1).",
    ],
    naoProva:
      "Anomalia: o comparecimento dos eleitores de 75 anos ou mais subiu quase 15 pontos em quatro anos, numa faixa em que 43 de cada 100 têm dificuldade para sair sozinhos, e o aumento entre os turnos cresce justamente com a idade. O que explica a subida? Quantos desses eleitores foram identificados pela digital no dia da votação? O TSE tem a resposta, eleitor por eleitor; os dados públicos não mostram.",
  },
  fraco: {
    eyebrow: "Sinal fraco · mostrado por honestidade",
    title: "O que não usamos como pilar",
    body:
      "Em 137 municípios, o comparecimento de uma faixa etária no 2º turno de 2022 superou a população residente dessa faixa no Censo: 1.089 diferenças. Reproduzimos o número — mas, ao somar por estado, nenhuma UF apresenta comparecimento acima do Censo em nenhuma faixa. O sinal dilui. Domicílio eleitoral (votar onde não se mora) explica parte dele. Por isso essas diferenças não são pilar, e abandonamos o rótulo “votos impossíveis” de versões anteriores. Para 2026 não há Censo do mesmo ano; com o teto que não depende de premissa — só pode ter de 70 a 74 anos em 2026 quem tinha de 65 a 74 no Censo de 2022, e assim por diante —, nenhum estado passa do teto e só três municípios passam, por um voto cada.",
    table: {
      faixa: "Faixa",
      censo: "Censo 2022 (vivos)",
      comp: "Comparecimento 2º turno 2022",
      razao: "Razão",
    },
  },
  fecho: {
    title: "Onde a auditoria está",
    encontrado: "Gap encontrado",
    encontradoBody:
      "O cadastro eleitoral tem centenas de milhares de títulos que não correspondem a pessoas vivas, por falha estrutural de cancelamento. Quatro linhas de evidência independentes convergem: a contagem de centenários do Censo, a folha de benefícios do INSS, a baixa por óbito em metade das mortes e os municípios com mais títulos que habitantes. E a biometria quase não alcançou os títulos de centenários: 92% estão sem digital. A revisão do eleitorado que a lei manda fazer virou, na resolução do TSE, uma opção — que ele registrou não executar.",
    naoAchado: "Ainda não achado",
    naoAchadoBody:
      "Um caso individual, com nome e documento, de título de falecido usado para votar. Fechar esse elo exige cruzar CPF de óbito com registro de comparecimento — dados que a LGPD mantém fora do acesso público.",
    link: "Ver todos os limites e o método",
  },
};

const en: typeof pt = {
  meta: {
    title: "The phantom registry",
    description:
      "Five pillars, built on primary data, on the registrations of deceased people still active in the voter rolls — and the elderly jump between rounds.",
  },
  ui: {
    pilar: "Pillar",
    forca: "strength of evidence",
    comoMedimos: "How we measured",
    naoProva: "Anomaly on record — what the TSE needs to answer",
    porque: "Why this matters",
    passo: "Step",
    indice: "On this page",
    visualDe: "Interactive visual",
  },
  hero: {
    eyebrow: "Track 1 · Voter registry",
    title: "The phantom registry",
    lead:
      "In a room where IBGE counted 10 people and the INSS pays 19 benefits, the TSE's voter list has 79 names. That is what official data from IBGE (the statistics institute), the Ministry of Health, the INSS (social security) and the TSE (the electoral court) itself say together: hundreds of thousands of registrations belonging to deceased people remain active in Brazil's voter rolls. The problem is structural — it shows in 2022 and in 2026, and among centenarians alone the registry gained 113,000 names in four years — and the electorate review the law orders became, in the TSE's own resolution, an option.",
    stats: {
      tse: "centenarians registered as voters by the TSE (2026), against 37,814 found alive by the 2022 Census",
      razao: "more centenarians in the TSE registry than IBGE counted, door to door, in the Census",
      inss: "more centenarians on the rolls than benefits paid by the INSS, which checks every year that each beneficiary is alive",
      gap: "registrations of deceased voters left uncancelled every year (a 44% gap)",
      controle: "more voters aged 70 or over in the 2026 runoff than in the first round (+14.8%) — the largest jump in the series",
    },
    note:
      "The five pillars below are independent: they use different sources and comparisons. Knocking one down does not knock down the others. Each pillar states what it proves — and what it does not.",
  },
  p1: {
    short: "Jump between rounds",
    eyebrow: "Pillar 1 · the signal between rounds",
    title: "The elderly jump between rounds",
    lead:
      "From the first to the second round of 2026, 1.3 million more voters aged 70 or over showed up at the polls: +14.8%, against +1.4% in the rest of the electorate. It is the largest jump of the four presidential elections with this data (2014 to 2026) — more than double that of 2022 — and the older the age group, the bigger the increase relative to the first round.",
    steps: [
      {
        t: "First round",
        b: "Picture two queues on 4 October 2026: one of adults aged 21 to 69, the other of people aged 70 and over, for whom voting is optional. In the elderly queue, 8.77 million people voted.",
      },
      {
        t: "Second round",
        b: "Three weeks later the adult queue grows 1.5%. The elderly queue grows 14.8%: 1,295,980 more turnouts. For every 20 elderly voters in the first round, the runoff had 23.",
      },
      {
        t: "44% of the increase",
        b: "Voters aged 70 or over were 7% of those who voted in the first round — and accounted for 44% of the entire increase in turnout between rounds. In 2022 the concentration was even greater: without them, the country's turnout would have fallen from the first round to the second.",
      },
    ],
    anim: {
      jovens: "Adults 21–69",
      idosos: "Elderly 70+",
      t1: "Round 1",
      t2: "Round 2",
      variacao: "change",
      media: "all 70+ groups",
      razao: "of the whole increase between rounds came from the 70+",
      controle: "7% of voters",
    },
    chart: {
      title: "Change in turnout from round 1 to round 2, by age group",
      note: "Teal: ages 16 to 69. Amber: 70 and over. Dashed line: average of the 21-to-69 groups",
      ano: "Election",
    },
    retorno: {
      title: "Of every 100 who skipped round 1, how many showed up in round 2",
      note: "Increase in turnout between rounds divided by round-1 abstentions, by age group. It is a net figure: those who came minus those who stopped coming. The peak is at ages 70–74; from there the share falls with every group.",
    },
    hist: {
      title: "2014, 2018, 2022 and 2026: the largest jump is 2026's",
      note: "Round 1 to round 2 change in the 70+ groups, for each presidential election with a runoff. 2012 and 2016 were municipal elections (runoffs only in some cities) and are excluded.",
      excesso: "turnouts of 75+ above the pace of the 70–74 group",
      legenda: "Election",
    },
    fac: {
      title: "No one rose like the elderly — not even others who vote only if they wish (2026)",
      grupo: "Group",
      aumento: "Increase R1→R2",
      retorno: "Returned, per 100 who skipped round 1",
      grupos: {
        jovens: "Ages 16 and 17 · optional",
        analfabetos: "Ages 18 to 69, illiterate · optional",
        obrigatorio: "Ages 18 to 69 · compulsory",
        idosos: "Aged 70 or over · optional",
      },
    },
    why: {
      title: "The measured anomalies",
      items: [
        "It compares the TSE with the TSE itself: same registry, two rounds, three weeks apart. It depends neither on IBGE nor on estimates.",
        "It is the largest jump in the series: +3.9% in 2014, +2.8% in 2018, +10.0% in 2022 and +14.8% in 2026.",
        "It is nationwide: in 2026, turnout of the 70+ rose in 5,490 of 5,571 municipalities and in 25 of the 27 states.",
        "It starts exactly where voting stops being compulsory: +2.3% at ages 65–69, +9.4% at 70–74.",
        "It is concentrated among the least-schooled elderly: +40% among illiterate voters aged 70 or over, +4.5% among those with a university degree.",
        "Other optional voters did something similar: among illiterate voters aged 18 to 69, 14 of every 100 who had skipped round 1 came back for round 2; among the elderly, 15.",
      ],
    },
    method: [
      "Source: the TSE's official “Turnout and abstention by voter profile” files (2014, 2018, 2022 and 2026), read in full. The 2026 file with both rounds was published on 13 Nov 2026: 22,121,816 rows, SHA-256 verified, registered = turnout + abstention in every row.",
      "For each age group we sum national turnout in rounds 1 and 2. Change = (R2 − R1) ÷ R1.",
      "Return to the polls = (R2 − R1) ÷ round-1 abstentions. It is a net figure: the file does not say who voted in only one of the rounds.",
      "Optional and compulsory voting: columns QT_COMPAREC_FACULTATIVO and QT_COMPAREC_OBRIGATORIO of the file itself. Between ages 18 and 69, optional voting is that of illiterate voters.",
      "Excess = how many more each group above 74 had than it would if it had grown like the 70–74 group: 58,913 (2014), 27,477 (2018), 198,738 (2022) and 472,721 (2026).",
    ],
    naoProva:
      "It is the largest turnout anomaly in the series, and it is in the TSE's own file. No other group came close — not even others who vote only if they wish: 16- and 17-year-olds rose 0.8%, illiterate voters aged 18 to 69 rose 6.2%, compulsory voters 1.3%. The elderly rose 14.8%. Who are those 1.3 million extra voters? How many were identified by fingerprint and how many were let through without one? At which polling stations? The TSE records, voter by voter, who turned up and how they were identified — and has not published that count. No one has measured the explanation usually given — that the elderly were brought to the polls for the runoff: not even the TSE. Until it does, the anomaly stands unanswered.",
  },
  p2: {
    short: "Centenarians",
    eyebrow: "Pillar 2 · count against count",
    title: "The demographic impossibility",
    lead:
      "In 2022 IBGE knocked on every door in the country and found 37,814 people aged 100 or over. The INSS, which checks every year that each beneficiary is alive, pays 72,501 benefits to people that age. The TSE has 297,977 registered as voters: 7.9 times the Census and 4.1 times the INSS — with no estimate or projection involved.",
    steps: [
      {
        t: "The Census building",
        b: "Think of Brazil as a building. In 2022, IBGE enumerators knocked on every door and found 37,814 centenarians. Each lit window stands for a thousand living people.",
      },
      {
        t: "The TSE list",
        b: "Now look at the TSE's voter list for the same age: 297,977 names. Only 38 thousand of them fit in the lit windows. The other 260 thousand are on the list, but nobody found them at home.",
      },
      {
        t: "The INSS payroll",
        b: "Now the INSS payroll, which pays every month and checks every year that each beneficiary is alive: 72,501 benefits to people aged 100 or over — 73 of the list's 298 squares. For every benefit the payer recognises, the voter registry has four names.",
      },
      {
        t: "No country on Earth",
        b: "Japan, the world leader in longevity, has 88 centenarians per 100,000 inhabitants. Brazil's Census figure is 18.6 — expected for the country's health profile. But the TSE registry amounts to 147 per 100,000: nearly double the most long-lived country on Earth. Comparing elderly with elderly — centenarians per thousand people aged 80 or over —, the gap widens: Japan 8.4; Brazil Census 8.2; TSE list 54 — six and a half times.",
      },
    ],
    anim: {
      censo: "IBGE Census 2022",
      tse: "TSE registry 2026",
      janela: "lit window = one thousand people found alive",
      inss: "on the INSS payroll",
      nomes: "names on the list",
      fantasma: "no window",
      encontrados: "found alive",
      registrados: "registered as voters",
      por100k: "per 100,000 inhabitants",
    },
    chart: {
      title: "Centenarians per 100,000 inhabitants",
      note: "Sources: official country counts (Japan: Min. of Health; USA: Census Bureau; France: INSEE; Italy: ISTAT), IBGE 2022 Census and TSE 2026 turnout profile.",
    },
    stats: {
      fantasma: "of the centenarians in the registry do not match people the Census found alive",
      japao: "more centenarians among TSE voters aged 80+ than among Japan's population aged 80+ — the longest-lived country on Earth",
      zero: "municipalities with centenarians registered by the TSE and zero centenarian deaths in five years (578 registered)",
    },
    why: {
      title: "Why this comparison holds",
      items: [
        "It is Census against registry, both primary data — no survival assumption in between.",
        "It is national: whoever the Census missed in one municipality was found in another. Electoral domicile does not change the country's total.",
        "Objection “they turned 100 after 2022”: the 95–99 group had ~165 thousand people in the Census. Even if all of them lived to 2026 (impossible), they would add up to ~203 thousand with the 37.8 thousand — almost 95 thousand short of the registry's 298 thousand.",
        "A Census undercount would have to be 7.9-fold to explain the TSE. Census coverage is on the order of 97%.",
        "13 municipalities have 578 centenarians in the TSE and zero centenarian deaths in 2020–2024. With a life expectancy of ~2 years at 100, hundreds of deaths would be expected.",
        "DATASUS recorded 63,455 centenarian deaths in 5 years (2020–2024). The registry holds nearly five times as many centenarians eligible to vote.",
        "The INSS (social security) pays 72,501 benefits to people aged 100 or over and must confirm, every year, that each beneficiary is alive. The TSE has 297,977 centenarians eligible to vote — 4.1 times more. On a payroll, a phantom centenarian is money lost every month: the incentive is to clean, not to keep.",
        "Biometrics barely reached these registrations: from 2022 to 2026, centenarian coverage went from 6.2% to 8.0%, while that of ages 90–94 rose from 26.6% to 53.2%. And centenarian registrations without biometrics grew 58.5%, while in every other elderly band they fell.",
        "Elderly against elderly, Japan falls behind: among people aged 80 or over, Japan has 8 centenarians per thousand and Brazil's Census has 8.2. The TSE's list has 54 — six and a half times. This comparison does not depend on Japan having more elderly people: it compares only the elderly.",
      ],
    },
    method: [
      "2022 Census: SIDRA table 9514, group “100 years and over”, sum of 5,570 municipalities.",
      "TSE: “Turnout and abstention by voter profile” 2026 (round 1), registered-voters field, 100+ group, national total.",
      "Deaths: DATASUS/SIM 2020–2024, national files, IDADE field with unit code 5 (100 years or more; code 999, unknown age, is excluded); an average of 12,691 centenarian deaths per year.",
      "International: official counts by country (Japan: Min. of Health Sep 2026, 107,677/123M = 88 per 100k; USA: Census Bureau; France: INSEE; Italy: ISTAT). Brazil Census = 37,814 ÷ 203 million; Brazil TSE = 297,977 ÷ 203 million.",
      "INSS: benefits active in Sep 2026 (open data, 42.5 million records), exact age of the recipient on 6 Oct 2026: 72,501 benefits of people aged 100 or over. A benefit is not a person — someone may receive two — which only widens the gap to the TSE.",
      "Biometrics: TSE “Voter profile” 2022 and 2026, columns QT_ELEITORES and QT_ELEITORES_BIOMETRIA, 27 states. The ZIP holds the BRASIL file and one per state with the same rows: sum one or the other, never both.",
      "Elderly with elderly: Japan 107,677 centenarians ÷ 12.88 million people aged 80+ (Statistics Bureau of Japan, Statistical Topics No. 149, table 1, estimate of 15 Sep 2026) = 8.4 per thousand; Brazil 2022 Census: 37,814 ÷ 4,586,954 = 8.2; TSE 2026: 297,977 ÷ 5,508,439 registered aged 80+ = 54.1.",
    ],
    naoProva:
      "Who are the 260 thousand names on the list that the Census did not find? A birth-date error does not explain it: the list has more centenarians than the Census found aged 95 or over. The TSE holds the name, the birth date and the mother's name of each one, and the State holds the death records. The names remain on the list — and the electorate review the law requires became, in a TSE resolution, optional.",
  },
  p3: {
    short: "Registry clean-up",
    eyebrow: "Pillar 3 · the mechanism",
    title: "The clean-up that does not happen",
    lead:
      "The law orders the cancellation of a deceased person's registration, and civil registries must report deaths to the electoral courts every month (Electoral Code, art. 71). In 2022 the TSE cancelled 787,825 registrations due to death. That year, 1,491,608 adults died — an exact DATASUS count. More than four in ten registrations of the deceased stayed active.",
    steps: [
      {
        t: "Deaths come in",
        b: "Every year, about 1.5 million adults die in Brazil — an exact DATASUS count, and ~95% hold a registration. Each dot falling into the funnel is a registration that should be cancelled.",
      },
      {
        t: "Only part comes out cancelled",
        b: "In 2022, the best year with detailed data, the TSE cancelled 787,825 registrations due to death — 56%. The other 44%, about 629 thousand, stayed active in the registry.",
      },
      {
        t: "The pile grows",
        b: "What is not cancelled stays in the registry. If the 2022 pace repeated for four years, with no later correction, it would be up to 2.5 million registrations between two presidential elections. The stock that can be measured is smaller — 606 thousand registrations aged 90 or over beyond the living, in 2022 — a sign that part is corrected later. How much, only the TSE knows. And, for anyone over 70, missing an election does not cancel the registration: the only way off the list is the death notice.",
      },
    ],
    anim: {
      mortes: "voter deaths per year",
      cancelados: "cancelled",
      ativos: "still active",
      ano: "year",
      acumulado: "accumulated registrations of the deceased",
    },
    chart: {
      title: "Voter deaths × cancellations due to death (2022)",
      note: "Adult (18+) deaths = 1,491,608, exact count from DATASUS/SIM; ~95% of adults hold a registration. Cancellations: TSE, May 2023.",
      mortes: "Voter deaths",
      cancelados: "Cancelled",
      gap: "Not cancelled",
    },
    table: {
      title: "How much accumulates if nothing changes",
      periodo: "Period",
      titulos: "Active registrations of the deceased (estimate)",
    },
    correcao: "Correcting one of our own numbers",
    why: {
      title: "Why this closes the loop",
      items: [
        "It explains Pillars 1 and 2: registrations of the deceased inflate the registered count and concentrate in the oldest groups, where most deaths occur.",
        "The 606 thousand registrations aged 90+ above the Census (2022) amount to about one year of gap.",
        "The rule has existed since 2006: TSE Resolution 22.166 provides for cross-checking against death records. The gap is one of execution, not of rules.",
        "The law is older still: the Electoral Code orders cancellation on death (art. 71, IV) and requires civil registries to report deaths to the electoral judge by the 15th of each month (art. 71, § 3).",
        "Over 70, missing elections does not cost anyone their registration — the TSE itself says that age is “outside this rule”. Without the death notice, a deceased elderly person's registration stays active forever.",
        "The electorate review is the clean-up the Elections Act orders the TSE to carry out when the registry exceeds 65% of the population (“shall order on its own initiative”, art. 92). The TSE's resolution swapped that for “may … subject to convenience and available resources” — and the TSE has already denied reviews for lack of funds.",
      ],
    },
    method: [
      "2022 cancellations by reason: 793,776 in total; 787,825 (99.25%) due to death; 5,765 by court order; 145 for loss of political rights; 38 duplicates; 3 by registry review. Source: TSE, May 2023.",
      "Adult (18+) deaths in 2022: 1,491,608 — exact count of individual DATASUS/SIM records. Share registered: ~95% of adults (TSE: ~156M registrations for ~160M adults).",
      "Gap = 1,417,028 − 787,825 = 629,203 (44.4%). With no assumption at all, adults only: 787,825 ÷ 1,491,608 = 52.8% cancelled.",
      "Caveat: the 2022 figure may include deaths from earlier years processed late (pandemic). That would make single-year gaps larger and the accumulated total smaller; the order of magnitude does not change.",
    ],
    naoProva:
      "The TSE confirms the turnout in these bands — it is the official vote count, not our inference. And DATASUS gives the concrete number of deaths: no one enters the death registry without a physician-signed certificate. So it is proven that votes were recorded in age bands whose registry is full of demonstrably dead people — and, in 137 municipalities, there were more votes than the band's residents in the Census. What public data still does not link is the name: which vote came from a deceased person's registration and which from a living voter. That name-by-name link is closed only by the government's cross-check, in under an hour. Intent is not demonstrated; it may be inefficiency. But inefficiency on this scale, with no verifiable fix, is exactly what demands an audit.",
  },
  p4: {
    short: "Votes > population",
    eyebrow: "Pillar 4 · robustness test",
    title: "Towns where more people voted than live there",
    lead:
      "In 107 municipalities, the number of votes in the 2026 runoff exceeded the entire population estimated by IBGE — babies, children and the bedridden included. In 730, there are more voter registrations than inhabitants.",
    steps: [
      {
        t: "The stadium",
        b: "Davinópolis (GO) has 1,877 residents according to IBGE. Picture a stadium with 1,877 seats — one for every person in town, of any age.",
      },
      {
        t: "The tickets",
        b: "The TSE issued 4,144 voter registrations for this town: 2.2 tickets per resident. For every adult, there are 2.8 registrations.",
      },
      {
        t: "Who came in",
        b: "In the 2026 runoff, 3,010 people voted. That is 1,133 more than seats — more votes than inhabitants of any age. Use the control under the animation: what if IBGE got the population wrong?",
      },
    ],
    anim: {
      moradores: "residents (IBGE 2026)",
      titulos: "voter registrations (TSE)",
      votos: "votes in the runoff",
      semAssento: "without a seat",
      slider: "What if IBGE got the population wrong by",
      popAjustada: "adjusted population",
      restantes: "of the 20 most extreme municipalities still have more votes than inhabitants",
      assento: "1 seat = 50 people",
      cidade: "Davinópolis · GO",
    },
    chart: {
      title: "How many of the 20 most extreme municipalities survive each IBGE error margin",
      note: "Even with a +10% margin, all 20 remain. At +20%, nine. Davinópolis only disappears at +60%.",
      eixo: "IBGE error margin",
    },
    table: {
      title: "The seven most extreme cases (2026 runoff)",
      votosPop: "Votes ÷ pop.",
      aptosPop: "Registrations ÷ pop.",
    },
    stats: {
      aptosPop: "municipalities with more voter registrations than inhabitants",
      votosPop: "municipalities with more votes than inhabitants in the 2026 runoff",
      davi: "voter registrations per inhabitant in Davinópolis (GO), counting people of any age",
    },
    why: {
      title: "Why it survives the “IBGE got it wrong” objection",
      items: [
        "Across Brazil there are 73 registrations per 100 inhabitants. In the 20 most extreme municipalities, 155 — more than double.",
        "To erase the excess in those 20, IBGE would have to have underestimated the population by 104% — twice as many people. These are small rural towns, many in decline.",
        "Electoral domicile explains part of it (people who vote where they do not live), but not 2.2 registrations per inhabitant.",
      ],
    },
    method: [
      "Votes and registered voters: BWEB/TSE, 2026 runoff, 28 states, 499,177 polling sections, presidential race.",
      "Population: IBGE 2026 estimates (SIDRA 6579); matched by exact state + municipality name: 5,550 of 5,571.",
      "Sensitivity: we inflated each municipality's population by +5%, +10% … +60% and recounted how many still have votes > population.",
      "Independent count: Agência Tatu reported 733 municipalities with more voters than inhabitants in July 2026; we found 730.",
    ],
    naoProva:
      "How much of this excess is from the deceased, how much from people who moved and never transferred their registration, and how much from people who keep a registration where they do not live? The TSE can separate them, registration by registration; public data cannot. In these municipalities the BU matches the RDV in every section, there are no votes after closing time, and voting speed is normal: what is inflated is the registry.",
  },
  p5: {
    short: "Functional capacity",
    eyebrow: "Pillar 5 · the contradiction",
    title: "Who can actually go and vote?",
    lead:
      "IBGE's National Health Survey measures what elderly people can do on their own: 43% of Brazilians aged 75 and over have difficulty travelling to distant places or using transport. Yet it is among the oldest that turnout rises the most from round 1 to round 2 — +9% at 70–74, +55% among centenarians. And in four years, turnout of voters aged 75 and over in the runoff went from 32% to 47%.",
    steps: [
      {
        t: "One hundred people aged 75 and over",
        b: "Each figure is a person. Together they stand for Brazilians aged 75 and over.",
      },
      {
        t: "43 cannot travel far on their own",
        b: "According to the 2019 PNS, 43.2% have limitations in activities such as travelling to distant places, using transport or handling money. 6% of those 80+ had been bedridden in the two weeks before the survey.",
      },
      {
        t: "The return to the polls falls with age",
        b: "Among those who skipped the first round of 2026, 21 of every 100 showed up for the runoff at ages 70–74, 15 at 80–84 and 2 at 95–99. The curve falls with age. But the increase relative to round 1 goes the other way: it grew 9% at 70–74, 25% at 80–84, 43% at 90–94 and 55% among centenarians. The older the band — and the greater the difficulty leaving home —, the larger the increase. And the level rose: 47% of voters aged 75+ voted in the 2026 runoff, against 32% in 2022.",
      },
    ],
    anim: {
      pessoas: "people aged 75 and over",
      limitadas: "with limitations to go out alone (PNS 2019)",
      aumento: "of every 100 who skipped round 1, came for round 2 (2026)",
    },
    chart: {
      turnout: "Turnout in the 2026 runoff, over registered voters",
      delta: "Of every 100 who skipped round 1, came for round 2 (2026)",
      note: "In the first chart, the level falls with age, as expected. In the second, the return to the polls in the runoff: it also falls with age from 75 onwards.",
    },
    table: {
      title: "Turnout of voters aged 80 and over: international comparison",
      lugar: "Where",
      pct: "Turnout",
    },
    why: {
      title: "The measured anomalies",
      items: [
        "The increase in turnout from round 1 to round 2 grows with age: +9% at 70–74, +34% at 85–89, +55% among centenarians. The oldest, who have the greatest difficulty leaving home, rose the most.",
        "Turnout of voters aged 75 and over rose almost 15 points in four years: from 32% in 2022 to 47% in 2026.",
        "The 70+ as a group returned to the polls the most: 15 of every 100 who skipped round 1, against 6 among compulsory voters. Within the 70+, the return falls with age (21 at 70–74, 2 at 95–99) — but up to 90–94 it stays above that of compulsory voters.",
        "The turnout level still fits within functional capacity (46% at ages 80–84, where 30–39% have great difficulty). What demands an answer is the speed of the rise.",
        "In Japan, turnout of those 80+ is between 33% and 48%; in Germany it reaches 85%, but with widespread postal voting. In Brazil voting is in person.",
      ],
    },
    method: [
      "PNS 2019 (IBGE): IADL limitation in 43.2% of those 75+; ADL in 18.5%; bedridden status in 6.0% of those 80+ (Lima et al., 2024, n = 22,728).",
      "2022 Census: disability (great difficulty or inability) in 30–39% of those 80–84, ~48% of those 85–89 and over 60% of those 100+.",
      "Turnout: TSE 2022 and 2026, runoff, by age group, over registered voters. Return to the polls = increase between rounds ÷ round-1 abstentions (Pillar 1).",
    ],
    naoProva:
      "Anomaly: turnout of voters aged 75 and over rose almost 15 points in four years, in a group where 43 of every 100 have difficulty going out on their own, and the increase between rounds grows precisely with age. What explains the rise? How many of those voters were identified by fingerprint on election day? The TSE holds the answer, voter by voter; public data does not show it.",
  },
  fraco: {
    eyebrow: "Weak signal · shown for honesty",
    title: "What we did not use as a pillar",
    body:
      "In 137 municipalities, turnout of one age group in the 2022 runoff exceeded the resident population of that group in the Census: 1,089 differences. We reproduced the number — but when summed by state, no state shows turnout above the Census in any age group. The signal dilutes. Electoral domicile (voting where one does not live) explains part of it. That is why these differences are not a pillar, and why we dropped the “impossible votes” label used in earlier versions. For 2026 there is no same-year Census; using the ceiling that needs no assumption — only someone aged 65 to 74 in the 2022 Census can be 70 to 74 in 2026, and so on — no state exceeds the ceiling and only three municipalities do, by one vote each.",
    table: {
      faixa: "Age group",
      censo: "2022 Census (alive)",
      comp: "2022 runoff turnout",
      razao: "Ratio",
    },
  },
  fecho: {
    title: "Where the audit stands",
    encontrado: "Gap found",
    encontradoBody:
      "The voter registry holds hundreds of thousands of registrations that do not correspond to living people, owing to a structural failure to cancel them. Four independent lines of evidence converge: the Census centenarian count, the INSS benefits payroll, death removals covering half the deaths, and municipalities with more registrations than inhabitants. And biometrics barely reached centenarian registrations: 92% have no fingerprint. The electorate review the law orders became, in the TSE's resolution, an option — one it recorded it would not carry out.",
    naoAchado: "Not yet found",
    naoAchadoBody:
      "An individual case, with a name and a document, of a dead person's registration used to vote. Closing that link requires matching death-record IDs with turnout records — data that Brazil's privacy law keeps out of public reach.",
    link: "See every limitation and the method",
  },
};

export const cadastro = { pt, en };
export type CadastroDict = typeof pt;
