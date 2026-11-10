// Seção: /provas — "O que isto prova". Chrome da página; o conteúdo vem de src/data/prova.ts.
const pt = {
  meta: {
    title: "O que isto prova",
    description: "O que a auditoria prova com dados oficiais, de que lado está o erro, e o que exigir do Estado.",
  },
  ui: {
    tipoLabel: "Tipo de prova",
    verdictLabel: "Veredito",
    baseLegal: "Base",
    erroMedido: "medido",
    erroNecessario: "necessário para o IBGE ser o errado",
    pontosPct: "pontos percentuais",
  },
};
const en: typeof pt = {
  meta: {
    title: "What this proves",
    description: "What the audit proves with official data, which side the error is on, and what to demand from the State.",
  },
  ui: {
    tipoLabel: "Type of proof",
    verdictLabel: "Verdict",
    baseLegal: "Legal basis",
    erroMedido: "measured",
    erroNecessario: "needed for IBGE to be the wrong one",
    pontosPct: "percentage points",
  },
};
export const provas = { pt, en };
