# andreiheck-site

Site-portfólio de demonstração para o fotógrafo Andrei Heck (casamentos, ensaios e vídeo). Fase atual: **DEMO**, sem back-end — os dados vivem só no navegador.

Contexto completo do projeto, regras de git e áreas proibidas: [`CLAUDE.md`](./CLAUDE.md).
Mapa do produto e decisões: [`docs/design.md`](./docs/design.md) e [`docs/adr/`](./docs/adr/).

## Como rodar

```bash
npm install
npm run dev
```

## Scripts

| Script                            | O que faz                                   |
| --------------------------------- | ------------------------------------------- |
| `npm run dev`                     | Sobe o servidor de desenvolvimento          |
| `npm run build`                   | Checa tipos e gera o build de produção      |
| `npm run preview`                 | Serve o build gerado                        |
| `npm run format` / `format:check` | Formata / confere formatação (Prettier)     |
| `npm run lint`                    | Lint estrito (ESLint)                       |
| `npm run typecheck`               | Checagem de tipos (TypeScript strict)       |
| `npm run test`                    | Testes unitários (Vitest + Testing Library) |
| `npm run test:e2e`                | Teste de fumaça ponta a ponta (Playwright)  |
| `npm run check`                   | Roda todos os gates em sequência            |
