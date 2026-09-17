# ADR 0002 — Hospedagem: Vercel

- **Status:** Decidido pelos sócios
- **Data:** 2026-09-17

## Contexto

A demo precisa de um link para apresentar ao cliente. Não há domínio próprio.

## Decisão

Hospedar na Vercel, projeto `andreiheck-site`.

## Consequências

- Todo deploy é **R2**: só com autorização explícita.
- Por ser SPA, o projeto precisa de uma regra de reescrita (`vercel.json`) que mande qualquer rota para `index.html`.
  Sem ela, abrir `/blog/<post>` direto pode dar 404. Conferir o formato na documentação da Vercel ao configurar.
- Headers de segurança básicos também ficam no `vercel.json`.

## Gatilhos para revisitar

- Contrato fechado → domínio próprio, ambientes staging/produção e alertas (padrão §10, passo 6).
