import type { Tier } from "@/components/ui/source-tag";
import type { L } from "@/i18n/config";

export type Fonte = { nome: L; tier: Tier; dado: L; periodo: L; url: string };

export const fontes: Fonte[] = [
  {
    nome: { pt: "IBGE · Censo 2022 (SIDRA 9514)", en: "IBGE · 2022 Census (SIDRA table 9514)" },
    tier: "T0",
    dado: { pt: "População por município, sexo e faixa etária (contagem direta)", en: "Population by municipality, sex and age group (direct count)" },
    periodo: { pt: "ref. 1º ago 2022", en: "ref. 1 Aug 2022" },
    url: "https://sidra.ibge.gov.br/tabela/9514",
  },
  {
    nome: { pt: "IBGE · Estimativas populacionais (SIDRA 6579)", en: "IBGE · Population estimates (SIDRA table 6579)" },
    tier: "T0",
    dado: { pt: "População estimada por município", en: "Estimated population by municipality" },
    periodo: { pt: "2026", en: "2026" },
    url: "https://sidra.ibge.gov.br/tabela/6579",
  },
  {
    nome: { pt: "TSE · Comparecimento e abstenção por perfil", en: "TSE · Turnout and abstention by voter profile" },
    tier: "T0",
    dado: { pt: "Aptos, comparecimento e abstenção por município, zona e faixa etária, 1º e 2º turnos", en: "Registered, turnout and abstention by municipality, zone and age group, rounds 1 and 2" },
    periodo: { pt: "2014, 2018, 2022, 2026 (1T)", en: "2014, 2018, 2022, 2026 (round 1)" },
    url: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2022",
  },
  {
    nome: { pt: "TSE · Boletim de urna (BWEB)", en: "TSE · Ballot box bulletins (BWEB)" },
    tier: "T0",
    dado: { pt: "Resultados por seção eleitoral, aptos e comparecimento", en: "Results per polling section, registered and turnout" },
    periodo: { pt: "2022, 2024, 2026", en: "2022, 2024, 2026" },
    url: "https://dadosabertos.tse.jus.br/dataset/resultados-2026-boletim-de-urna",
  },
  {
    nome: { pt: "TSE · Arquivos transmitidos para totalização", en: "TSE · Files transmitted for tallying" },
    tier: "T0",
    dado: { pt: "BU, RDV, logs e assinaturas de cada urna; kit de scripts e specs ASN.1", en: "BU, RDV, logs and signatures of every machine; script kit and ASN.1 specs" },
    periodo: { pt: "2026", en: "2026" },
    url: "https://dadosabertos.tse.jus.br/dataset/resultados-2026-arquivos-transmitidos-para-totalizacao",
  },
  {
    nome: { pt: "DATASUS · SIM/CID-10", en: "DATASUS · SIM/ICD-10 mortality system" },
    tier: "T0",
    dado: { pt: "Declarações de óbito por município de residência, idade e data", en: "Death certificates by municipality of residence, age and date" },
    periodo: { pt: "2020–2024", en: "2020–2024" },
    url: "https://datasus.saude.gov.br/transferencia-de-arquivos/",
  },
  {
    nome: { pt: "IBGE · PNS 2019 (SIDRA 8375/8376)", en: "IBGE · National Health Survey 2019 (SIDRA 8375/8376)" },
    tier: "T0",
    dado: { pt: "Limitação funcional (AVD/AIVD) e acamamento por grupo de idade", en: "Functional limitation (ADL/IADL) and bedridden status by age group" },
    periodo: { pt: "2019", en: "2019" },
    url: "https://sidra.ibge.gov.br/tabela/8375",
  },
  {
    nome: { pt: "TSE · Cancelamentos de título 2022", en: "TSE · Voter registration cancellations 2022" },
    tier: "T0",
    dado: { pt: "793.776 títulos cancelados em 2022, 787.825 por falecimento", en: "793,776 registrations cancelled in 2022, 787,825 due to death" },
    periodo: { pt: "mai 2023", en: "May 2023" },
    url: "https://www.tse.jus.br/comunicacao/noticias/2023/Maio/justica-eleitoral-cancelou-quase-800-mil-titulos-em-2022",
  },
  {
    nome: { pt: "TSE · Resolução 23.659/2021", en: "TSE · Resolution 23.659/2021" },
    tier: "T0",
    dado: { pt: "Gestão do cadastro eleitoral; art. 23 define domicílio eleitoral", en: "Voter registry management; art. 23 defines electoral domicile" },
    periodo: { pt: "2021", en: "2021" },
    url: "https://www.tse.jus.br/legislacao/compilada/res/2021/resolucao-no-23-659-de-26-de-outubro-de-2021",
  },
  {
    nome: { pt: "TSE · Resolução 22.166/2006", en: "TSE · Resolution 22.166/2006" },
    tier: "T0",
    dado: { pt: "Cruzamento do cadastro com registros de óbito (ASE 019)", en: "Cross-check of the registry against death records (ASE 019)" },
    periodo: { pt: "2006", en: "2006" },
    url: "https://www.tse.jus.br/legislacao/compilada/res/2006/resolucao-no-22-166-de-9-de-marco-de-2006",
  },
  {
    nome: { pt: "Ministério da Defesa · Relatório EFASEV/2022", en: "Ministry of Defence · EFASEV/2022 report" },
    tier: "T0",
    dado: { pt: "Pedido de correspondência código-fonte × binário da urna (nunca atendido)", en: "Request for source-code-to-binary correspondence of the voting machine (never fulfilled)" },
    periodo: { pt: "nov 2022", en: "Nov 2022" },
    url: "https://www.gov.br/defesa/pt-br/acesso-a-informacao/atuacao-das-forcas-armadas-em-apoio-ao-tse-no-aprimoramento-da-seguranca-e-transparencia-do-processo-eleitoral/documentos/oficio-do-ministro-da-defesa-e-relatorio-das-forcas-armadas.pdf",
  },
  {
    nome: { pt: "Lima, Souza Jr. & Teixeira · Rev. Bras. Geriatr. Gerontol.", en: "Lima, Souza Jr. & Teixeira · Braz. J. Geriatr. Gerontol." },
    tier: "T1",
    dado: { pt: "Prevalência de acamamento em idosos, PNS 2019 (n = 22.728)", en: "Prevalence of bedridden status among the elderly, PNS 2019 (n = 22,728)" },
    periodo: { pt: "2024", en: "2024" },
    url: "https://www.scielo.br/j/rbgg/a/BYxNrspkzg8KkZFBfhp8cyf/?lang=pt",
  },
  {
    nome: { pt: "ONU · World Population Prospects", en: "UN · World Population Prospects" },
    tier: "T1",
    dado: { pt: "Centenários por 100 mil habitantes por país", en: "Centenarians per 100,000 inhabitants by country" },
    periodo: { pt: "2024", en: "2024" },
    url: "https://population.un.org/wpp/",
  },
  {
    nome: { pt: "Pref. Aomori · comparecimento por idade", en: "Aomori Prefecture · turnout by age" },
    tier: "T2",
    dado: { pt: "Turnout 80+ no Japão (33,3%)", en: "Turnout of voters 80+ in Japan (33.3%)" },
    periodo: { pt: "2026", en: "2026" },
    url: "https://www.pref.aomori.lg.jp/soshiki/senkan/files2/voter_turnout_by_agegroup2026.pdf",
  },
];
