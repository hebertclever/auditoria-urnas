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
      pt: "Na versão de 2022, o script usava uma chave que estava dentro do próprio BU para verificar o BU. Quem forja o BU controla a chave que o “verifica”. Isso foi removido em 2024 — sem aviso, sem changelog.",
      en: "In the 2022 version, the script used a key stored inside the BU itself to verify the BU. Whoever forges the BU controls the key that “verifies” it. This was removed in 2024 — no notice, no changelog.",
    },
    analogia: { pt: "Pedir para o réu ser seu próprio juiz.", en: "Asking the defendant to be their own judge." },
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
    pt: "É como um contador que comete 63 erros na sua declaração de imposto — e todos os 63 reduzem o que ele deve. Nenhum vai na outra direção. Ou um árbitro que erra 63 lances — todos contra o mesmo time. Em termos de probabilidade: 3.700 vezes mais raro que ganhar na Mega-Sena duas vezes seguidas",
    en: "Like an accountant who makes 63 errors on your tax return — and all 63 reduce what they owe. Not one goes the other way. Or a referee who gets 63 calls wrong — all against the same team. In probability terms: 3,700 times rarer than winning the Mega-Sena lottery twice in a row",
  } as L,
  ressalva: {
    pt: "Assume independência entre gaps, o que não é totalmente verdade: falhas em um componente podem causar falhas em outro. Mesmo relaxando essa premissa, a probabilidade segue astronômica. A pergunta não é se o padrão é significativo — é. A pergunta é se é intencional ou negligência estrutural.",
    en: "Assumes independence between gaps, which is not entirely true: a flaw in one component can cause flaws in another. Even relaxing that assumption, the probability stays astronomical. The question is not whether the pattern is significant — it is. The question is whether it is intentional or structural negligence.",
  } as L,
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
