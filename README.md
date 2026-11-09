# Auditoria das Urnas · Auditing the Ballot Boxes

**PT** · Auditoria independente, com dados oficiais (IBGE, TSE, DATASUS, PNS), de dois eixos do sistema eleitoral brasileiro:

1. **Cadastro fantasma** — cinco pilares de evidência de que centenas de milhares de títulos de pessoas falecidas seguem ativos no cadastro eleitoral.
2. **Kit de verificação** — 63 gaps nos scripts e especificações ASN.1 que o TSE distribui para o cidadão verificar os boletins de urna.

**EN** · An independent audit, built on official data (IBGE, TSE, DATASUS, PNS), of two tracks of Brazil's electoral system: the **phantom voter registry** and the **63 gaps in the official verification kit**.

Site: https://hebertclever.github.io/auditoria-urnas/ — português em `/pt/`, English at `/en/`.

> Ceticismo é o método, não a conclusão. · Skepticism is the method, not the conclusion.

## O que este site afirma — e o que não afirma

- Afirma: o cadastro está inflado por títulos de falecidos (comparação Censo × TSE, gap de cancelamento, inversão biológica 1T→2T com grupo de controle, padrão estrutural 2014–2022) e o kit público de verificação não verifica o que diz verificar.
- **Não afirma**: nenhum caso individual comprovado de voto em nome de falecido; nenhuma prova de intenção; nenhuma atribuição a candidato ou partido. Ver `/metodo/#limites`.

## Stack

Next.js 16 (App Router, `output: 'export'`) · React 19 · TypeScript · Tailwind CSS 4 · Motion · d3-scale · next-themes. Rotas por idioma (`/pt`, `/en`) com dicionários tipados em `src/i18n/dictionaries/`. Deploy no GitHub Pages via Actions.

## Rodar localmente

```bash
npm ci
npm run dev        # http://localhost:3000/auditoria-urnas/
npm run build      # export estático em out/
```

## Dados

Os números em `src/data/` derivam de fontes primárias processadas localmente (scripts e recibos preservados no repositório de auditoria de origem). Cada afirmação no site traz tier, fonte, data e link. Correções registradas em `/metodo`.

## Licença

Código sob MIT; textos e gráficos sob [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Dados originais pertencem às fontes citadas.
