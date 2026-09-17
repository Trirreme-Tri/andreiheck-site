# Spec 0001 — Identidade visual (fundação)

> Status: **APROVADO** (aprovado por Wellington / TRIRREME em 2026-09-17)
> Referências: `docs/design.md` §12 (suposições) e §11 (pergunta 3, não bloqueante)

## Problema

As páginas hoje são só placeholders "Em construção", sem nenhuma identidade visual. Antes de estilizar cada página (F1–F9), falta uma base visual compartilhada — cores, tipografia, espaçamento, estilo do menu — para as páginas não ficarem inconsistentes entre si e para não retrabalhar CSS a cada spec de feature.

## Jornada

O visitante abre qualquer página do site e já reconhece a identidade do trabalho do fotógrafo (tons escuros e dramáticos, luz quente, tipografia elegante), mesmo enquanto o conteúdo de cada página ainda é um placeholder.

## Escopo

**Entra:**
- Paleta de cores em custom properties CSS: fundo escuro, texto claro, um acento em tom quente (dourado/âmbar)
- Tipografia: um par de fontes (título com personalidade + corpo legível) e uma escala de tamanhos
- Tokens de espaçamento (uma escala simples, ex.: 4/8/16/24/32/48px)
- Restilo do menu de navegação (`src/app/Layout.tsx`): cores, estado do link ativo, comportamento em largura de celular
- Aplicação dos tokens em `src/styles/global.css`, herdada por todas as páginas sem estilo inline duplicado

**Fora de escopo (fica para a spec de cada feature):**
- Conteúdo e layout específico de Home, Portfólio, Serviços, Sobre, Blog, Agenda, Contato, Admin (F1–F9)
- Logo definitivo — não existe ainda; se precisar de um wordmark provisório, é só tipografia, não uma marca desenhada
- Imagens reais do cliente
- Alternância claro/escuro (o site é escuro por proposta; não foi pedido tema claro)
- Animações e micro-interações elaboradas

## Critérios de aceite (binários)

- [ ] Cor de fundo, cor de texto, cor de acento e ao menos 2 tamanhos de fonte (título/corpo) existem como custom properties CSS centralizadas em `global.css`
- [ ] O menu de navegação usa esses tokens e mostra visualmente qual link está ativo
- [ ] O menu é utilizável e legível em largura de celular (~375px), sem quebrar o layout
- [ ] Todas as páginas herdam fundo e tipografia via `Layout`/`global.css`, sem repetir estilo inline por página
- [ ] Contraste de texto sobre fundo atende WCAG AA (mínimo 4.5:1 para texto normal, 3:1 para texto grande)
- [ ] `npm run check` e `npm run test:e2e` continuam verdes sem alterar as asserções dos testes-semente existentes

## Invariantes

- Não altera rotas, estrutura de pastas ou lógica — só estilo (CSS) e o componente `Layout`
- Não introduz dependência de rede nova sem necessidade (fonte web só se justificada — ver pergunta aberta 2)
- Não contradiz os non-goals do `design.md` (sem back-end, sem dados de produção)

## Dados

Nenhum. Só tokens de design estáticos (CSS), sem estado nem dado dinâmico.

## Segurança

Não aplicável — mudança visual, sem input de usuário, sem novas dependências de execução (só, no máximo, uma folha de fonte estática).

## Plano de verificação

1. `npm run check` verde
2. Abrir cada rota localmente (`npm run dev`) e conferir legibilidade/contraste visualmente
3. Redimensionar para ~375px (DevTools) e conferir que o menu não quebra
4. `npm run test:e2e` verde (garante que a navegação continua funcionando)

## Rollout / rollback

Branch `feat/identidade-visual` → PR → merge. Rollback trivial: reverter o commit (é só CSS/JSX de estilo, sem migração de dados).

## Decisões (respondendo as perguntas abertas)

1. Paleta aprovada como proposta: fundo quase-preto, texto off-white, acento dourado.
2. Tipografia: título em **Playfair Display** (Google Fonts), corpo em fonte de sistema. Único ponto de rede novo: uma `<link>` de stylesheet para `fonts.googleapis.com` (com `preconnect`) em `index.html`.
3. Spec aprovada.
