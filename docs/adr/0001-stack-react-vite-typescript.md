# ADR 0001 — Stack: React + Vite + TypeScript + React Router

- **Status:** React decidido pelos sócios · Vite, TypeScript e React Router **propostos** (validar)
- **Data:** 2026-09-17

## Contexto

Demo de site-portfólio sem back-end, com várias páginas (incluindo `/blog/:slug`) e um painel simulado.
Os sócios querem uma base que possa crescer para um produto maior depois do contrato.

## Opções

| Opção                                 | Prós                                           | Contras                                        |
| ------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| HTML/CSS/JS puro                      | Menor e mais simples                           | Difícil de crescer para painel real            |
| **React + Vite (SPA)**                | Base que cresce; build rápido; comum na equipe | Precisa de configuração de rotas na hospedagem |
| Framework com servidor (ex.: Next.js) | SEO e servidor prontos                         | Mais complexo que a demo precisa               |

## Decisão

React com Vite, TypeScript e React Router.

## Razões

React é decisão dos sócios. Vite é o caminho simples para um app React sem servidor.
TypeScript habilita o gate de checagem de tipos exigido pelo padrão. React Router resolve as páginas e o `/blog/:slug`.

## Trade-offs aceitos

- Uma SPA tem SEO mais fraco que um site renderizado no servidor. Aceitável para uma demo.
- Precisa de regra de reescrita na hospedagem para links diretos (ver ADR 0002).

## Gatilhos para revisitar

- Contrato fechado com necessidade forte de SEO ou de back-end → avaliar framework com servidor.
