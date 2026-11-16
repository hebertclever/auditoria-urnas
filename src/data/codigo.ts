import type { L, Locale } from "@/i18n/config";
import gapsPt from "./gaps63.json";
import gapsEn from "./gaps63.en.json";

export type Gap = { id: string; tipo: "A" | "B" | "C" | "D"; descricao: string; arquivo: string };
export const gaps63Pt: Gap[] = gapsPt as Gap[];
export const gaps63En: Gap[] = gapsEn as Gap[];
export const getGaps = (lang: Locale): Gap[] => (lang === "pt" ? gaps63Pt : gaps63En);

export const tipoLabel: Record<Gap["tipo"], { nome: L; curto: L; tone: "rose" | "amber" | "slate" | "fg" }> = {
  A: { nome: { pt: "Crítico — torna a verificação impossível", en: "Critical — makes verification impossible" }, curto: { pt: "Crítico", en: "Critical" }, tone: "rose" },
  B: { nome: { pt: "Alto — enfraquece gravemente a verificação", en: "High — severely weakens verification" }, curto: { pt: "Alto", en: "High" }, tone: "amber" },
  C: { nome: { pt: "Médio — falha de design que reduz cobertura", en: "Medium — design flaw that reduces coverage" }, curto: { pt: "Médio", en: "Medium" }, tone: "slate" },
  D: { nome: { pt: "Baixo — descuido ou falha menor", en: "Low — oversight or minor flaw" }, curto: { pt: "Baixo", en: "Low" }, tone: "fg" },
};

export const contagemPorTipo = (["A", "B", "C", "D"] as const).map((t) => ({
  tipo: t,
  n: gaps63Pt.filter((g) => g.tipo === t).length,
}));

export const kit = { linhas: 2_852, gaps: 63, linhasPorGap: 45, versoes: 3, scripts: 10, specs: 3 };

export const componentes = [
  { arquivo: "mr_util.py", linhas: 984, gaps: 12 },
  { arquivo: "bu_assinatura_tuplas.py", linhas: 200, gaps: 6 },
  { arquivo: "assinatura_hash.py", linhas: 130, gaps: 5 },
  { arquivo: "verifica_qrcode.py", linhas: 276, gaps: 7 },
  { arquivo: "bu.asn1", linhas: 355, gaps: 9 },
  { arquivo: "rdv.asn1", linhas: 284, gaps: 6 },
  { arquivo: "assinatura.asn1", linhas: 113, gaps: 5 },
  { arquivo: "requirements.txt", linhas: 4, gaps: 5 },
].map((c) => ({ ...c, densidade: c.linhas / c.gaps }));

export type Grave = { n: number; ids: string[]; titulo: L; leigo: L; analogia: L; anim: "trava" | "caneta" | "certificado" | "juiz" | "formularios" | "fase" };

export const graves: Grave[] = [
  {
    n: 1,
    ids: ["GAP-ZIP-45"],
    titulo: { pt: "A ferramenta do QR Code não funciona", en: "The QR Code tool does not work" },
    leigo: {
      pt: "Cada BU impresso tem um QR Code que poderia ser conferido contra o arquivo digital. O TSE distribui verifica_qrcode.py para isso. Mas o script precisa de certificados que não estão no pacote. Ele sempre falha — e o erro é engolido em silêncio, devolvendo “não verificado” em vez de avisar que faltam peças.",
      en: "Every printed BU carries a QR Code that could be checked against the digital file. The TSE ships verifica_qrcode.py for that. But the script needs certificates that are not in the package. It always fails — and the error is swallowed silently, returning “not verified” instead of warning that parts are missing.",
    },
    analogia: { pt: "Uma trava de segurança vendida sem a chave. Parece funcional, nunca tranca.", en: "A security lock sold without its key. Looks functional, never locks." },
    anim: "trava",
  },
  {
    n: 2,
    ids: ["GAP-ZIP-09", "GAP-ZIP-40"],
    titulo: { pt: "Metade das assinaturas é inverificável", en: "Half of the signatures cannot be verified" },
    leigo: {
      pt: "Cada BU tem duas assinaturas: hardware e software. A de software usa um algoritmo proprietário do governo (CEPESC), sem padrão público. Nenhum script sequer tenta verificá-la.",
      en: "Each BU has two signatures: hardware and software. The software one uses a proprietary government algorithm (CEPESC) with no public standard. No script even attempts to verify it.",
    },
    analogia: { pt: "Assinar um documento com uma caneta invisível que só quem assinou consegue ler.", en: "Signing a document with invisible ink that only the signer can read." },
    anim: "caneta",
  },
  {
    n: 3,
    ids: ["GAP-ZIP-04", "GAP-ZIP-05"],
    titulo: { pt: "O certificado expirou 99 dias antes da eleição", en: "The certificate expired 99 days before the election" },
    leigo: {
      pt: "O kit traz embutido o certificado “AC URNA”. Ele expirou em 18 de julho de 2026 — 99 dias antes do 2º turno. Nenhum script confere a data de validade.",
      en: "The kit embeds the “AC URNA” certificate. It expired on 18 July 2026 — 99 days before the runoff. No script checks the validity date.",
    },
    analogia: { pt: "Aceitar um RG vencido porque ninguém olha a data.", en: "Accepting an expired ID because nobody looks at the date." },
    anim: "certificado",
  },
  {
    n: 4,
    ids: ["GAP-EVO-01"],
    titulo: { pt: "Em 2022, a verificação era falsa", en: "In 2022, the verification was fake" },
    leigo: {
      pt: "O programa oficial de 2022 (bu_assinatura_tuplas.py, linhas 69–71) tirava a chave de conferência de dentro do próprio boletim de urna (campo chaveAssinaturaVotosVotavel, bu.asn1 linha 165) e com ela conferia as assinaturas do mesmo boletim. A chave é verdadeira, mas a verificação é falsa: quem falsificasse o boletim colocaria ali a própria chave, e o programa responderia “assinatura OK”. O pacote de 2022 não trazia nenhum programa que conferisse essa chave contra um certificado do TSE. Em 2024 o campo saiu da especificação e a chave passou a vir do certificado da urna — sem nota de mudança. No pacote atual, esse programa ainda usa a chave sem validar a cadeia do certificado; a validação existe, mas em outro programa (assinatura_hash.py).",
      en: "The official 2022 script (bu_assinatura_tuplas.py, lines 69–71) took the verification key from inside the ballot-box bulletin itself (field chaveAssinaturaVotosVotavel, bu.asn1 line 165) and used it to check that same bulletin’s signatures. The key is genuine, but the verification is fake: anyone forging the bulletin would put their own key there, and the script would answer “signature OK”. The 2022 package shipped no script that checked that key against a TSE certificate. In 2024 the field left the specification and the key started coming from the machine’s certificate — with no change note. In the current package this script still uses the key without validating the certificate chain; the validation exists, but in another script (assinatura_hash.py).",
    },
    analogia: { pt: "Um cadeado vendido com a chave pendurada: a chave é verdadeira e abre, mas a segurança é falsa.", en: "A padlock sold with the key hanging from it: the key is real and opens it, but the security is fake." },
    anim: "juiz",
  },
  {
    n: 5,
    ids: ["GAP-ZIP-14", "GAP-ZIP-24"],
    titulo: { pt: "BU e RDV falam línguas diferentes", en: "BU and RDV speak different languages" },
    leigo: {
      pt: "O BU (totais) e o RDV (votos individuais) usam o mesmo nome para valores diferentes: nominal=1 no BU, nominal=2 no RDV. E nenhuma ferramenta oficial cruza os dois arquivos.",
      en: "The BU (totals) and the RDV (individual votes) use the same name for different values: nominal=1 in the BU, nominal=2 in the RDV. And no official tool cross-checks the two files.",
    },
    analogia: { pt: "Dois formulários do mesmo órgão onde “Sim = 1” em um e “Sim = 2” no outro. Ninguém percebe se ninguém compara.", en: "Two forms from the same agency where “Yes = 1” on one and “Yes = 2” on the other. Nobody notices if nobody compares." },
    anim: "formularios",
  },
  {
    n: 6,
    ids: ["GAP-ZIP-07", "GAP-ZIP-17"],
    titulo: { pt: "O campo “simulado / oficial” nunca é verificado", en: "The “simulated / official” field is never checked" },
    leigo: {
      pt: "Todo BU tem um campo fase que diz se veio de simulação, treinamento ou eleição oficial. Nenhum script lê esse campo. Um BU de simulado passaria como oficial.",
      en: "Every BU has a fase field saying whether it came from a simulation, training or the official election. No script reads that field. A simulation BU would pass as official.",
    },
    analogia: { pt: "Uma prova de treino corrigida como se fosse a prova final.", en: "A practice test graded as if it were the final exam." },
    anim: "fase",
  },
];

export const timeline: { ano: L; titulo: L; detalhe: L }[] = [
  {
    ano: { pt: "Antes de 2022", en: "Before 2022" },
    titulo: { pt: "Nenhum kit público", en: "No public kit" },
    detalhe: {
      pt: "Nenhuma spec ou script de verificação publicado pelo TSE. Eleições de 2018 e anteriores sem ferramentas públicas de auditoria. Confirmado via Wayback Machine.",
      en: "No spec or verification script published by the TSE. The 2018 election and earlier had no public audit tools. Confirmed via the Wayback Machine.",
    },
  },
  {
    ano: { pt: "Set 2022 · v1", en: "Sep 2022 · v1" },
    titulo: { pt: "Verificação tautológica", en: "Tautological verification" },
    detalhe: {
      pt: "Primeiro pacote público: 33 arquivos, sem mr_util.py. A chave embutida no BU “verifica” o próprio BU.",
      en: "First public package: 33 files, no mr_util.py. The key embedded in the BU “verifies” the BU itself.",
    },
  },
  {
    ano: { pt: "2024 · v2.0", en: "2024 · v2.0" },
    titulo: { pt: "Remoção silenciosa", en: "Silent removal" },
    detalhe: {
      pt: "Verificação tautológica removida sem changelog nem nota de segurança. Entra mr_util.py (984 linhas) e hash chain SHA-512.",
      en: "Tautological verification removed with no changelog or security note. mr_util.py (984 lines) and a SHA-512 hash chain are added.",
    },
  },
  {
    ano: { pt: "Out 2026 · v2.1", en: "Oct 2026 · v2.1" },
    titulo: { pt: "QR quebrado, 63 gaps", en: "Broken QR, 63 gaps" },
    detalhe: {
      pt: "Entra verifica_qrcode.py (que não funciona). Modelos antigos removidos. Enum com semântica alterada. Total: 63 gaps.",
      en: "verifica_qrcode.py arrives (and does not work). Old models removed. An enum changes meaning. Total: 63 gaps.",
    },
  },
];

export const probabilidade = {
  gaps: 63,
  mesmaDirecao: 63,
  p: Math.pow(0.5, 63), // ≈ 1,08e-19
  umEm: { pt: "9,2 quintilhões", en: "9.2 quintillion" } as L,
  comparacao: {
    pt: "É como um contador que comete 63 erros na sua declaração de imposto — e nenhum deles faz você pagar a mais. Ou um árbitro que marca 63 lances duvidosos — e nenhum a favor do mesmo time. Em termos de probabilidade, se cada falha fosse um cara ou coroa: mais difícil do que pegar, de olhos fechados e na primeira tentativa, um grão de areia marcado entre todos os grãos de todas as praias da Terra",
    en: "Like an accountant who makes 63 errors on your tax return — and not one of them makes you pay more. Or a referee who makes 63 doubtful calls — and not one in favour of the same team. In probability terms, if each flaw were a coin toss: harder than picking, blindfolded and at the first try, one marked grain of sand out of every grain on every beach on Earth",
  } as L,
  ressalva: {
    pt: "A conta trata cada falha como um cara ou coroa independente — e não é bem assim. Catorze das 63 são falhas menores (entre elas, erros de digitação e de documentação). E uma falha que trava a conferência costuma aparecer no primeiro teste e ser corrigida, enquanto a que deixa passar só aparece quando alguém procura. Contando só as 27 falhas críticas e altas, todas para o mesmo lado, a chance seria de 1 em 134 milhões — quase três vezes mais difícil do que acertar a Mega-Sena com um único jogo. O número exato importa menos do que a pergunta que ele levanta: quem testou este material antes de publicar?",
    en: "The sum treats each flaw as an independent coin toss — and that is not quite so. Fourteen of the 63 are minor flaws (among them typos and documentation errors). And a flaw that blocks the check tends to show up in the first test and get fixed, while one that lets things through only shows up when someone goes looking. Counting only the 27 critical and high flaws, all on the same side, the chance would be 1 in 134 million — almost three times harder than winning Brazil's Mega-Sena lottery with a single ticket. The exact number matters less than the question it raises: who tested this material before publishing it?",
  } as L,
};

// O mesmo teste em três profissões que todo mundo conhece — e a pergunta "quem conferiu?".
// Fatos sobre os pacotes: listagem integral dos arquivos e busca textual nos três pacotes oficiais (v1/2022, v2.0/2024,
// v2.1/2026), inclusive nos READMEs: nenhum nome de autor ou responsável, nenhum teste automatizado, nenhuma nota de mudança.
// Carreira: Lei 11.416/2006, arts. 7º e 8º, I (ingresso por concurso; nível superior para Analista Judiciário).
export type CasoProfissional = { id: "contador" | "arbitro" | "engenheiro"; quem: L; perfil: L; erro: L; depois: L; confere: L };
export const profissional = {
  casos: [
    {
      id: "contador",
      quem: { pt: "O contador", en: "The accountant" },
      perfil: { pt: "Formado, registrado no conselho, concursado, cinco anos de casa. Cuida da declaração de imposto de uma grande empresa.", en: "Qualified, registered with the professional board, hired by public exam, five years on the job. Handles the tax return of a large company." },
      erro: { pt: "A declaração sai com 63 erros. Nenhum deles faz a empresa pagar imposto a mais.", en: "The return goes out with 63 errors. Not one of them makes the company pay more tax." },
      depois: { pt: "A declaração cai na malha fina e os livros são abertos. Ninguém precisou acusar o contador de nada: só não dá para aceitar o resultado sem conferir.", en: "The return is flagged for audit and the books are opened. Nobody had to accuse the accountant of anything: the result simply cannot be accepted unchecked." },
      confere: { pt: "Receita Federal · auditor independente", en: "Tax authority · independent auditor" },
    },
    {
      id: "arbitro",
      quem: { pt: "O árbitro", en: "The referee" },
      perfil: { pt: "Do quadro da federação, anos de carreira, escalado para uma final.", en: "On the federation's roster, years of career, appointed to a final." },
      erro: { pt: "Marca 63 lances duvidosos. Nenhum a favor do mesmo time.", en: "Makes 63 doubtful calls. Not one in favour of the same team." },
      depois: { pt: "O jogo vai para o VAR. Pedir o VAR não é chamar o juiz de ladrão — é o mínimo.", en: "The match goes to the video referee. Asking for a review is not calling the referee a cheat — it is the bare minimum." },
      confere: { pt: "VAR · comissão de arbitragem", en: "Video review · referees' committee" },
    },
    {
      id: "engenheiro",
      quem: { pt: "O engenheiro", en: "The engineer" },
      perfil: { pt: "Com registro no CREA, assina o projeto de um prédio e a ART — o documento que diz quem responde pela obra.", en: "Licensed, signs the design of a building and the liability record — the document that says who answers for the work." },
      erro: { pt: "A revisão encontra 63 erros de cálculo. Nenhum deles põe ferro ou concreto a mais.", en: "The review finds 63 calculation errors. Not one of them adds steel or concrete." },
      depois: { pt: "A obra é embargada até a perícia. Ninguém espera o prédio cair para conferir.", en: "Construction is halted until an expert examination. Nobody waits for the building to fall before checking." },
      confere: { pt: "CREA · prefeitura · perito", en: "Licensing board · city hall · expert" },
    },
  ] as CasoProfissional[],
  tse: {
    quem: { pt: "E no material do TSE?", en: "And in the TSE's material?" } as L,
    perfil: { pt: "A Justiça Eleitoral tem carreira própria de analistas de tecnologia da informação: cargo de nível superior, preenchido por concurso público. São profissionais formados — com os mesmos requisitos do contador e do engenheiro dos exemplos.", en: "The Electoral Justice has its own career of information-technology analysts: a degree-level position filled by public examination. They are qualified professionals — with the same requirements as the accountant and the engineer in the examples." } as L,
    erro: { pt: "63 falhas em 2.852 linhas. Nenhuma erra para o lado de conferir demais; as 27 mais graves afrouxam a conferência.", en: "63 flaws in 2,852 lines. Not one errs on the side of checking too much; the 27 most serious ones loosen the check." } as L,
    depois: { pt: "Quem escreveu? Quem revisou? Quem testou? Quem aprovou a publicação? Os três pacotes (2022, 2024 e 2026) não respondem: não trazem nome de autor nem de responsável técnico, não trazem um único teste automatizado e não trazem nota do que mudou de uma versão para a outra.", en: "Who wrote it? Who reviewed it? Who tested it? Who approved its publication? The three packages (2022, 2024 and 2026) do not say: they carry no author or technical lead, not a single automated test, and no note of what changed from one version to the next." } as L,
    confere: { pt: "Ninguém de fora, até agora. É isso que a perícia independente do kit e a abertura do código pedem.", en: "No outsider, so far. That is what an independent examination of the kit and the opening of the code call for." } as L,
  },
  fecho: {
    pt: "Em qualquer profissão, erro que só vai para um lado dispara uma conferência independente. Não é acusação: é procedimento. Se alguém se aproveitou das falhas, isso é outra etapa — e se apura com investigação.",
    en: "In any profession, errors that only go one way trigger an independent check. It is not an accusation: it is procedure. Whether anyone took advantage of the flaws is another step — and it takes an investigation.",
  } as L,
  fontes: [
    { tier: "T0" as const, source: { pt: "Pacotes oficiais do TSE de 2022, 2024 e 2026 — lista de arquivos e busca textual, inclusive nos READMEs", en: "Official TSE packages of 2022, 2024 and 2026 — file listing and text search, READMEs included" } as L, date: "15/11/2026", href: "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/formato-arquivos-de-bu-rdv-e-assinatura-digital" },
    { tier: "T0" as const, source: { pt: "Lei 11.416/2006, arts. 7º e 8º — carreiras do Judiciário da União: concurso público e nível superior para analista", en: "Law 11.416/2006, arts. 7 and 8 — federal judiciary careers: public examination and a degree for analysts" } as L, date: "2006", href: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11416.htm" },
  ],
};

export const verificavel: { item: L; status: "sim" | "parcial" | "nao"; obs: L }[] = [
  { item: { pt: "Totais somam corretamente no BU", en: "Totals add up correctly in the BU" }, status: "sim", obs: { pt: "Soma correta não prova que os votos foram contados certo", en: "A correct sum does not prove the votes were counted correctly" } },
  { item: { pt: "Hash do arquivo bate", en: "File hash matches" }, status: "sim", obs: { pt: "Atacante competente gera hashes corretos sobre dados falsos", en: "A competent attacker produces correct hashes over false data" } },
  { item: { pt: "Assinatura de hardware válida", en: "Hardware signature valid" }, status: "parcial", obs: { pt: "Certificado expirado não é verificado (GAP-ZIP-04/05)", en: "Expired certificate is not checked (GAP-ZIP-04/05)" } },
  { item: { pt: "Assinatura de software válida", en: "Software signature valid" }, status: "nao", obs: { pt: "Algoritmo proprietário CEPESC, inverificável (GAP-ZIP-09)", en: "Proprietary CEPESC algorithm, unverifiable (GAP-ZIP-09)" } },
  { item: { pt: "QR Code físico = BU digital", en: "Physical QR Code = digital BU" }, status: "nao", obs: { pt: "Ferramenta quebrada (GAP-ZIP-45)", en: "Tool is broken (GAP-ZIP-45)" } },
  { item: { pt: "BU = RDV (votos individuais)", en: "BU = RDV (individual votes)" }, status: "nao", obs: { pt: "Nenhuma ferramenta cruza (GAP-ZIP-24)", en: "No tool cross-checks them (GAP-ZIP-24)" } },
  { item: { pt: "Código da urna = código inspecionado", en: "Machine code = inspected code" }, status: "nao", obs: { pt: "EFASEV/2022 pediu, nunca atendido", en: "Requested by EFASEV/2022, never delivered" } },
  { item: { pt: "Voto impresso para recontagem", en: "Printed ballot for recount" }, status: "nao", obs: { pt: "Não existe no sistema atual", en: "Does not exist in the current system" } },
];
