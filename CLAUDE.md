# Contexto do projeto — andreiheck-site

> Fatos operacionais curtos. O que é o produto está em `docs/design.md` (APROVADO — não repetir aqui).
> Processo: seguir `docs/padrao-engenharia-ia.md` (política da TRIRREME — **não editar**).
> Decisões duráveis: `docs/adr/`.
> Se algo aqui conflitar com um pedido, **sinalizar**, nunca resolver em silêncio.

## Identidade (nomes oficiais — não inventar outros)

| Item                        | Valor                                                                        |
| --------------------------- | ---------------------------------------------------------------------------- |
| Empresa responsável         | TRIRREME                                                                     |
| Cliente                     | Andrei Heck (fotógrafo — casamentos, ensaios e vídeo)                        |
| Nome do projeto             | `andreiheck-site`                                                            |
| Repositório GitHub          | `https://github.com/Trirreme-Tri/andreiheck-site.git` (dono: `Trirreme-Tri`) |
| Conta que faz commit e push | `Trirreme` (https://github.com/Trirreme)                                     |
| Projeto na Vercel           | `andreiheck-site`                                                            |
| Fase atual                  | **DEMO** (sem contrato; sem back-end)                                        |

Não existe outro repositório, projeto ou ambiente para este cliente. Se um nome diferente aparecer, parar e perguntar.

## Regra de Git (obrigatória)

- O código é escrito no PC do Wellington, que está logado na conta `Trirreme`.
- **Todo commit e todo push usam só a identidade `Trirreme`.**
- Antes do primeiro commit de cada sessão, rodar `git config user.name` e `git config user.email`.
  Se não forem da conta `Trirreme`, ou se estiverem vazios, **parar e perguntar**. Não inventar e-mail.
- Se precisar configurar, fazer só neste repositório (`git config` sem `--global`).
- Fluxo, branches e mensagens: padrão §12 (Conventional Commits, em inglês).
  Exceção única: o bootstrap inicial pode ir direto para `main`.

## Stack

- React + TypeScript + Vite + React Router (ADR 0001)
- Hospedagem: Vercel (ADR 0002)
- Dados da demo: só no navegador (ADR 0003). **Proibido** adicionar banco, servidor ou API.

## Ambientes

| Ambiente       | Onde                              | Risco                          |
| -------------- | --------------------------------- | ------------------------------ |
| local          | PC do Wellington                  | R1                             |
| demo (preview) | Vercel, projeto `andreiheck-site` | R2 — deploy só com autorização |
| produção       | não existe nesta fase             | —                              |

## Comandos

Scripts reais do `package.json`. Não usar comandos que não estejam listados aqui.

| Script                 | O que faz                                   |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento                 |
| `npm run build`        | Checa tipos e gera o build de produção      |
| `npm run preview`      | Serve o build gerado                        |
| `npm run format`       | Formata com Prettier                        |
| `npm run format:check` | Confere formatação, sem alterar             |
| `npm run lint`         | Lint estrito (ESLint)                       |
| `npm run typecheck`    | Checagem de tipos (TypeScript, `strict`)    |
| `npm run test`         | Testes unitários (Vitest + Testing Library) |
| `npm run test:e2e`     | Teste de fumaça ponta a ponta (Playwright)  |
| `npm run check`        | Roda todos os gates em sequência            |

## Áreas proibidas / cuidados

- Não usar links diretos de imagens do Instagram: as mídias ficam salvas dentro do projeto.
- Não gravar nem enviar dados do formulário (ele só abre o WhatsApp).
- Não usar botão flutuante verde de WhatsApp.
- Não editar `docs/padrao-engenharia-ia.md` nem `docs/design.md` sem pedido.
- Não fazer deploy na Vercel sem autorização explícita.
- Nenhuma feature (F1–F9) começa sem spec aprovada em `docs/specs/`.

## Gates

Ordem (padrão §15): `format:check` → `lint` → `typecheck` → `test` → `build` → `test:e2e`.
Rodar tudo com `npm run check` (não inclui `test:e2e`, que precisa dos navegadores do Playwright instalados).
CI (`.github/workflows/ci.yml`) roda `npm ci` e `npm run check` em pull requests e push na `main`.
