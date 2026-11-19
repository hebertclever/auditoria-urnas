// Página /backup — cópias das fontes no Wayback Machine (Internet Archive).
// As capturas vêm de backup_wayback.json, gerado no repositório da auditoria
// (resultados/segundo_turno_2026-11-15/wayback_capturas.py e gera_backup_site.py): cada endereço foi consultado
// no índice público do Internet Archive; "conferida" = resumo da captura igual ao do arquivo que analisamos.
import type { L } from "@/i18n/config";
import capturas from "./backup_wayback.json";

export type GrupoBackup = "tseDados" | "tseKit" | "tseNormas" | "ibge" | "saude" | "outros";
export type Situacao = "ok" | "bloqueado" | "indisponivel" | "incompleta" | "sem_captura";
export type VersaoBackup = { ts: string; bytes: number; sha256: string; conferida?: boolean; gerado_tse?: string; linhas?: number; turnos?: string; comp_1t?: number; comp_2t?: number };
export type ItemBackup = { id: string; grupo: GrupoBackup; url: string; primeira: string | null; ultima: string | null; situacao: Situacao; versoes?: VersaoBackup[] };

export const backupItens = capturas.itens as ItemBackup[];
export const backupConsulta = capturas.concluido_em_utc;

export const waybackUrl = (ts: string, url: string) => `https://web.archive.org/web/${ts}/${url}`;

export const backupTitulos: Record<string, L> = {
  perfil2026zip: { pt: "TSE · comparecimento e abstenção por perfil, 2026 (arquivo ZIP)", en: "TSE · turnout and abstention by profile, 2026 (ZIP file)" },
  perfil2026pagina: { pt: "TSE · página do conjunto de dados de comparecimento 2026", en: "TSE · 2026 turnout dataset page" },
  perfil2022zip: { pt: "TSE · comparecimento e abstenção por perfil, 2022 (arquivo ZIP)", en: "TSE · turnout and abstention by profile, 2022 (ZIP file)" },
  perfil2022pagina: { pt: "TSE · página do conjunto de dados de comparecimento 2022", en: "TSE · 2022 turnout dataset page" },
  perfil2018pagina: { pt: "TSE · página do conjunto de dados de comparecimento 2018", en: "TSE · 2018 turnout dataset page" },
  perfil2014pagina: { pt: "TSE · página do conjunto de dados de comparecimento 2014", en: "TSE · 2014 turnout dataset page" },
  bu2026: { pt: "TSE · boletins de urna de 2026 (página do conjunto de dados)", en: "TSE · 2026 ballot-box bulletins (dataset page)" },
  transmitidos2026: { pt: "TSE · arquivos transmitidos para totalização, 2026 (página)", en: "TSE · files transmitted for tallying, 2026 (page)" },
  resultados2026: { pt: "TSE · resultados de 2026 (página do conjunto de dados)", en: "TSE · 2026 results (dataset page)" },
  dadosabertos: { pt: "TSE · portal de dados abertos (página inicial)", en: "TSE · open-data portal (home page)" },
  kit2026: { pt: "TSE · página do pacote de programas e especificações de 2026", en: "TSE · page of the 2026 scripts-and-specifications package" },
  kit2022zip: { pt: "TSE · pacote de programas e especificações de 2022 (arquivo ZIP)", en: "TSE · 2022 scripts-and-specifications package (ZIP file)" },
  segurancaUrna: { pt: "TSE · página “Segurança da urna”", en: "TSE · “Voting machine security” page" },
  res23673: { pt: "TSE · Resolução 23.673/2021 (fiscalização e auditoria)", en: "TSE · Resolution 23.673/2021 (oversight and audit)" },
  res23659: { pt: "TSE · Resolução 23.659/2021 (cadastro eleitoral)", en: "TSE · Resolution 23.659/2021 (voter registry)" },
  res22166: { pt: "TSE · Resolução 22.166/2006 (cruzamento com óbitos)", en: "TSE · Resolution 22.166/2006 (cross-check with deaths)" },
  cancelamentos2022: { pt: "TSE · notícia: quase 800 mil títulos cancelados em 2022", en: "TSE · news: nearly 800,000 registrations cancelled in 2022" },
  baiaTraicao: { pt: "TSE · notícia: revisão do eleitorado de Baía da Traição (PB) negada", en: "TSE · news: electorate review of Baía da Traição (PB) denied" },
  pescariaBrava: { pt: "TSE · acórdão do REspe 279-89 (Pescaria Brava/SC)", en: "TSE · ruling in REspe 279-89 (Pescaria Brava/SC)" },
  sidra9514: { pt: "IBGE · SIDRA, tabela 9514 (Censo 2022 por idade)", en: "IBGE · SIDRA table 9514 (2022 Census by age)" },
  sidra6579: { pt: "IBGE · SIDRA, tabela 6579 (estimativas de população)", en: "IBGE · SIDRA table 6579 (population estimates)" },
  sidra8375: { pt: "IBGE · SIDRA, tabela 8375 (Pesquisa Nacional de Saúde 2019)", en: "IBGE · SIDRA table 8375 (2019 National Health Survey)" },
  ibgePPE: { pt: "IBGE · Pesquisa de Pós-Enumeração do Censo 2022 (PDF)", en: "IBGE · 2022 Census Post-Enumeration Survey (PDF)" },
  ibgeDPE: { pt: "IBGE · esclarecimentos sobre as estimativas municipais (PDF)", en: "IBGE · clarifications on municipal estimates (PDF)" },
  datasus: { pt: "DATASUS · transferência de arquivos (óbitos do SIM)", en: "DATASUS · file transfer (SIM death records)" },
  sim2011: { pt: "DATASUS · consolidação do SIM 2011 (PDF)", en: "DATASUS · 2011 SIM consolidation (PDF)" },
  efasev: { pt: "Ministério da Defesa · relatório das Forças Armadas, EFASEV/2022 (PDF)", en: "Ministry of Defence · Armed Forces report, EFASEV/2022 (PDF)" },
  lei9504: { pt: "Câmara dos Deputados · Lei 9.504/1997, texto atualizado", en: "Chamber of Deputies · Law 9.504/1997, updated text" },
  perfilEleitorado2026: { pt: "TSE · perfil do eleitorado 2026 (arquivo ZIP — biometria por idade)", en: "TSE · 2026 voter profile (ZIP file — biometrics by age)" },
  perfilEleitorado2022: { pt: "TSE · perfil do eleitorado 2022 (arquivo ZIP)", en: "TSE · 2022 voter profile (ZIP file)" },
  inssDadosAbertos: { pt: "INSS · portal de dados abertos (página inicial)", en: "INSS · open-data portal (home page)" },
  inssBeneficios: { pt: "INSS · benefícios mantidos (página do conjunto de dados)", en: "INSS · benefits in force (dataset page)" },
  inssProvaVida: { pt: "INSS · notícia: a prova de vida é feita por cruzamento de dados", en: "INSS · news: proof of life is done by cross-checking data" },
  tcuAcordao1606: { pt: "TCU · nota sobre o Acórdão 1606/2025 (R$ 4,4 bi pagos a mortos)", en: "TCU · note on Ruling 1606/2025 (R$ 4.4bn paid to the dead)" },
  lei9504Planalto: { pt: "Planalto · Lei 9.504/1997, texto compilado (art. 92: revisão do eleitorado)", en: "Planalto · Law 9.504/1997, consolidated text (art. 92: electorate review)" },
  codigoEleitoral: { pt: "Planalto · Código Eleitoral, texto compilado (art. 71: baixa por óbito)", en: "Planalto · Electoral Code, consolidated text (art. 71: death removal)" },
  temasRevisao: { pt: "TSE · Temas Selecionados: revisão de eleitorado (jurisprudência)", en: "TSE · Selected Topics: electorate review (case law)" },
  eleitorEmDia: { pt: "TSE · notícia: Eleitor em dia (70+ fora do cancelamento por ausência)", en: "TSE · news: Voter up to date (70+ exempt from cancellation for absence)" },
};

export const backupGrupos: { id: GrupoBackup; titulo: L }[] = [
  { id: "tseDados", titulo: { pt: "TSE · dados da eleição", en: "TSE · election data" } },
  { id: "tseKit", titulo: { pt: "TSE · programas de conferência", en: "TSE · checking scripts" } },
  { id: "tseNormas", titulo: { pt: "TSE · normas, notícias e decisões", en: "TSE · rules, news and rulings" } },
  { id: "ibge", titulo: { pt: "IBGE", en: "IBGE" } },
  { id: "saude", titulo: { pt: "Ministério da Saúde", en: "Ministry of Health" } },
  { id: "outros", titulo: { pt: "Outros órgãos", en: "Other bodies" } },
];

export const backup = {
  hero: {
    eyebrow: { pt: "Preservação das fontes", en: "Source preservation" } as L,
    title: { pt: "Backup: as fontes desta auditoria, guardadas onde quem as publicou não alcança", en: "Backup: this audit's sources, stored where their publisher cannot reach" } as L,
    lead: {
      pt: "Tudo o que este site afirma sai de arquivos oficiais. E arquivo oficial muda: é trocado no mesmo endereço, é corrigido sem aviso e, às vezes, some. Por isso guardamos cópias com data num arquivo público e independente — o Wayback Machine — e listamos aqui cada endereço, para qualquer pessoa conferir.",
      en: "Everything this site states comes from official files. And official files change: they are replaced at the same address, corrected without notice and, sometimes, they vanish. So we store dated copies in a public, independent archive — the Wayback Machine — and list every address here, for anyone to check.",
    } as L,
  },
  oQueE: {
    title: { pt: "O que é o Wayback Machine", en: "What the Wayback Machine is" } as L,
    texto: {
      pt: "É o serviço de cópias de páginas do Internet Archive, uma biblioteca digital sem fins lucrativos que funciona nos Estados Unidos desde 1996. Ele visita um endereço da internet, guarda uma cópia do que estava lá e grava, no próprio link, a data e a hora da captura. Quem publicou a página original não consegue alterar nem apagar essa cópia por conta própria.",
      en: "It is the page-copying service of the Internet Archive, a non-profit digital library operating in the United States since 1996. It visits an internet address, stores a copy of what was there and records, in the link itself, the date and time of the capture. Whoever published the original page cannot alter or erase that copy on their own.",
    } as L,
    analogia: {
      pt: "É como autenticar um documento em cartório: fica uma cópia com data, guardada por um terceiro. Se o original mudar depois, a cópia mostra como ele era.",
      en: "It is like having a document certified by a notary: a dated copy is kept by a third party. If the original changes later, the copy shows what it used to be.",
    } as L,
    pontos: [
      {
        t: { pt: "Cada cópia tem a data no endereço", en: "Every copy carries its date in the address" } as L,
        b: { pt: "No link web.archive.org/web/20261114040055/…, os números são ano, mês, dia, hora, minuto e segundo da captura, no horário de Greenwich: 14 de novembro de 2026, 04:00:55.", en: "In the link web.archive.org/web/20261114040055/…, the digits are the year, month, day, hour, minute and second of the capture, in Greenwich time: 14 November 2026, 04:00:55." } as L,
      },
      {
        t: { pt: "Não depende de nós", en: "It does not depend on us" } as L,
        b: { pt: "As cópias ficam nos servidores do Internet Archive, não no nosso computador. Ninguém precisa confiar nesta auditoria para abrir a cópia e conferir.", en: "The copies sit on the Internet Archive's servers, not on our computer. Nobody needs to trust this audit to open the copy and check." } as L,
      },
      {
        t: { pt: "Tem limites", en: "It has limits" } as L,
        b: { pt: "O serviço não guarda tudo: alguns sites bloqueiam o robô de captura, e arquivos muito grandes podem ficar pela metade. Por isso também mantemos cópia local de cada arquivo, com o resumo criptográfico (SHA-256) publicado.", en: "The service does not store everything: some sites block the capture robot, and very large files may be cut short. So we also keep a local copy of every file, with its cryptographic digest (SHA-256) published." } as L,
      },
    ],
  },
  porque: {
    title: { pt: "Por que guardamos lá", en: "Why we store them there" } as L,
    itens: [
      {
        t: { pt: "Porque arquivo oficial muda", en: "Because official files change" } as L,
        b: { pt: "O TSE publicou duas versões do arquivo de comparecimento de 2026 no mesmo endereço. Entre uma e outra, o 1º turno perdeu 788 comparecimentos. Sem a cópia da primeira versão, não haveria como mostrar a diferença.", en: "The TSE published two versions of the 2026 turnout file at the same address. Between one and the other, the first round lost 788 turnouts. Without the copy of the first version, there would be no way to show the difference." } as L,
      },
      {
        t: { pt: "Porque arquivo oficial some", en: "Because official files vanish" } as L,
        b: { pt: "O pacote de programas de conferência de 2024 foi substituído pelo de 2026 no mesmo endereço do TSE. O de 2022 só pôde ser confirmado, byte a byte, porque o Internet Archive o tinha capturado em 5 de outubro de 2022.", en: "The 2024 package of checking scripts was replaced by the 2026 one at the same TSE address. The 2022 one could only be confirmed, byte for byte, because the Internet Archive had captured it on 5 October 2022." } as L,
      },
      {
        t: { pt: "Porque prova precisa de terceiro", en: "Because proof needs a third party" } as L,
        b: { pt: "Dizer “baixamos do site do TSE” não basta. Uma cópia com data, guardada por um arquivo independente, mostra que o arquivo analisado é o que o TSE publicou — e deixa qualquer pessoa refazer a conta.", en: "Saying “we downloaded it from the TSE site” is not enough. A dated copy held by an independent archive shows that the file analysed is the one the TSE published — and lets anyone redo the sums." } as L,
      },
    ],
  },
  versoes: {
    eyebrow: { pt: "O caso que mostra por que isso importa", en: "The case that shows why this matters" } as L,
    title: { pt: "Duas versões do mesmo arquivo do TSE. Qual é a correta?", en: "Two versions of the same TSE file. Which one is correct?" } as L,
    lead: {
      pt: "O arquivo “perfil de comparecimento e abstenção” de 2026 mora num endereço só. O TSE gerou uma versão em 13 de outubro, só com o 1º turno, e outra em 13 de novembro, com os dois turnos. A segunda substituiu a primeira — e o 1º turno não é o mesmo nas duas.",
      en: "The 2026 “turnout and abstention profile” file lives at a single address. The TSE generated one version on 13 October, with round 1 only, and another on 13 November, with both rounds. The second replaced the first — and round 1 is not the same in both.",
    } as L,
    rotulos: {
      antes: { pt: "Versão 1 · só 1º turno", en: "Version 1 · round 1 only" } as L,
      depois: { pt: "Versão 2 · 1º e 2º turno", en: "Version 2 · rounds 1 and 2" } as L,
      gerado: { pt: "gerado pelo TSE em", en: "generated by the TSE on" } as L,
      captura: { pt: "captura no Wayback", en: "Wayback capture" } as L,
      tamanho: { pt: "tamanho", en: "size" } as L,
      linhas: { pt: "linhas no arquivo nacional", en: "rows in the national file" } as L,
      comp1: { pt: "comparecimentos no 1º turno", en: "first-round turnouts" } as L,
      comp2: { pt: "comparecimentos no 2º turno", en: "runoff turnouts" } as L,
      abrir: { pt: "Abrir a cópia arquivada", en: "Open the archived copy" } as L,
      conferida: { pt: "conferida byte a byte com o arquivo que analisamos", en: "checked byte for byte against the file we analysed" } as L,
    },
    diferenca: {
      pt: "No 1º turno, a segunda versão tem 788 comparecimentos a menos do que a primeira, em 31 municípios e 4 cidades de votação no exterior — 216 deles em Belo Horizonte. O número de eleitores aptos é idêntico nas duas. O TSE não publicou nota dizendo o que mudou.",
      en: "In round 1, the second version has 788 fewer turnouts than the first, in 31 municipalities and 4 voting cities abroad — 216 of them in Belo Horizonte. The number of registered voters is identical in both. The TSE published no note saying what changed.",
    } as L,
    pergunta: {
      pt: "Qual das duas é a correta? De fora, não há como saber. A soma dos boletins de urna do 1º turno (125.275.835) fica mais perto da segunda versão, o que sugere uma correção. Mas o que foi corrigido, em quais seções e por quê, só o TSE pode dizer — e é uma das perguntas do nosso modelo de requerimento. Numa base oficial de quem compareceu para votar, duas versões divergentes precisam de explicação.",
      en: "Which of the two is correct? From outside, there is no way to know. The sum of the round-1 ballot-box bulletins (125,275,835) is closer to the second version, which suggests a correction. But what was corrected, in which polling sections and why, only the TSE can say — and it is one of the questions in our model request. In an official record of who turned out to vote, two diverging versions call for an explanation.",
    } as L,
    incompleta: {
      pt: "Também pedimos uma captura em 16 de novembro de 2026. O serviço interrompeu o download dos 450 MB e a cópia ficou incompleta; não a usamos. A cópia íntegra do 2º turno é a de 14 de novembro, cujo resumo é idêntico ao do arquivo que analisamos.",
      en: "We also requested a capture on 16 November 2026. The service cut the 450 MB download short and the copy is incomplete; we do not use it. The intact copy of the runoff version is the one from 14 November, whose digest is identical to that of the file we analysed.",
    } as L,
  },
  conferir: {
    title: { pt: "Como conferir você mesmo", en: "How to check it yourself" } as L,
    passos: [
      { pt: "Abra o link da captura. Se for um arquivo ZIP, o navegador baixa o arquivo exatamente como ele estava naquele dia.", en: "Open the capture link. If it is a ZIP file, the browser downloads the file exactly as it was that day." },
      { pt: "Calcule o SHA-256 do arquivo baixado. No Linux: sha256sum arquivo.zip. No Mac: shasum -a 256 arquivo.zip. No Windows: certutil -hashfile arquivo.zip SHA256.", en: "Compute the SHA-256 of the downloaded file. On Linux: sha256sum file.zip. On Mac: shasum -a 256 file.zip. On Windows: certutil -hashfile file.zip SHA256." },
      { pt: "Compare com o SHA-256 desta página. Se os 64 caracteres forem iguais, o arquivo é idêntico, byte a byte, ao que analisamos.", en: "Compare with the SHA-256 on this page. If all 64 characters match, the file is identical, byte for byte, to the one we analysed." },
      { pt: "Refaça as contas: os comandos estão na página Método e os resultados, na página Dados.", en: "Redo the sums: the commands are on the Method page and the results on the Data page." },
    ] as { pt: string; en: string }[],
  },
  tabela: {
    title: { pt: "Todos os endereços guardados", en: "Every address stored" } as L,
    lead: {
      pt: "Fontes oficiais citadas neste site, com a primeira e a última cópia que existem no Wayback Machine. Conferido em 16 de novembro de 2026; as entradas do perfil do eleitorado, do INSS e do TCU, em 18 de novembro. Parte das capturas foi pedida por esta auditoria; as outras já existiam, feitas por terceiros.",
      en: "Official sources cited on this site, with the first and the latest copy that exist in the Wayback Machine. Checked on 16 November 2026; the voter-profile, INSS and TCU entries on 18 November. Some captures were requested by this audit; the others already existed, made by third parties.",
    } as L,
    cols: {
      fonte: { pt: "Fonte", en: "Source" } as L,
      primeira: { pt: "Primeira cópia", en: "First copy" } as L,
      ultima: { pt: "Última cópia", en: "Latest copy" } as L,
      situacao: { pt: "Situação", en: "Status" } as L,
    },
    original: { pt: "endereço original", en: "original address" } as L,
    todas: { pt: "ver todas as datas", en: "see every date" } as L,
    situacoes: {
      ok: { pt: "guardada", en: "stored" } as L,
      conferida: { pt: "guardada · conferida byte a byte", en: "stored · checked byte for byte" } as L,
      bloqueado: { pt: "o site bloqueia o robô do Internet Archive", en: "the site blocks the Internet Archive's robot" } as L,
      indisponivel: { pt: "endereço não respondeu na tentativa", en: "address did not respond when tried" } as L,
      incompleta: { pt: "captura incompleta — só cópia local", en: "incomplete capture — local copy only" } as L,
      sem_captura: { pt: "sem cópia no Wayback", en: "no copy in the Wayback" } as L,
    } as Record<Situacao | "conferida", L>,
  },
  naoGuardado: {
    title: { pt: "O que não conseguimos guardar", en: "What we could not store" } as L,
    texto: {
      pt: "O site www.tse.jus.br recusa o robô do Internet Archive. Por isso não existe cópia independente da página do pacote de programas de 2026 nem da Resolução 23.673/2021, e outras páginas do TSE só têm cópias antigas. O arquivo de comparecimento de 2022, de 201 MB, também não coube no limite de tempo do serviço. Desses, mantemos cópia local com o SHA-256 publicado: pacote de 2026, b5ac413e…fbafd; comparecimento de 2022, fb4e03d9…a7df. Os arquivos do perfil do eleitorado de 2022 e 2026 — de onde vem a biometria por idade — têm cópia no Wayback, capturada em 20/08/2026: baixamos as duas e o SHA-256 é idêntico ao das nossas. O bloqueio pode ser só uma proteção genérica contra robôs — mas o efeito é que documentos eleitorais oficiais ficam sem cópia independente.",
      en: "The site www.tse.jus.br refuses the Internet Archive's robot. As a result there is no independent copy of the page of the 2026 scripts package or of Resolution 23.673/2021, and other TSE pages only have old copies. The 2022 turnout file, at 201 MB, did not fit within the service's time limit either. For these we keep a local copy with the SHA-256 published: 2026 package, b5ac413e…fbafd; 2022 turnout file, fb4e03d9…a7df. The 2022 and 2026 voter-profile files — the source of the biometrics by age — do have Wayback copies, captured on 20 Aug 2026: we downloaded both and their SHA-256 is identical to ours. The block may be just a generic protection against robots — but the effect is that official electoral documents are left with no independent copy.",
    } as L,
  },
  fontes: [
    { tier: "T0" as const, source: { pt: "Internet Archive · sobre a instituição", en: "Internet Archive · about" } as L, href: "https://archive.org/about/" },
    { tier: "T0" as const, source: { pt: "Internet Archive · como salvar páginas no Wayback Machine", en: "Internet Archive · saving pages in the Wayback Machine" } as L, href: "https://help.archive.org/help/save-pages-in-the-wayback-machine/" },
    { tier: "T0" as const, source: { pt: "Índice público de capturas (CDX) do Internet Archive, consultado em 16 e 18/11/2026", en: "Internet Archive public capture index (CDX), queried on 16 and 18 Nov 2026" } as L, href: "https://web.archive.org/web/2026*/https://cdn.tse.jus.br/estatistica/sead/odsele/perfil_comparecimento_abstencao/perfil_comparecimento_abstencao_2026.zip" },
  ],
};
