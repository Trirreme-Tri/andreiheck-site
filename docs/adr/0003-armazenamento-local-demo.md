# ADR 0003 — Dados da demo só no navegador

- **Status:** Proposto (validar)
- **Data:** 2026-09-17

## Contexto

O painel simulado (opção B, escolhida pelos sócios) precisa "salvar" edições sem banco de dados.
Imagens ocupam muito espaço.

## Opções

| Opção                                                               | Prós                              | Contras                                    |
| ------------------------------------------------------------------- | --------------------------------- | ------------------------------------------ |
| Só `localStorage`                                                   | Muito simples                     | Pouco espaço (alguns MB); imagens estouram |
| **`localStorage` (textos) + `IndexedDB` (imagens redimensionadas)** | Cabe fotos; continua sem servidor | Um pouco mais de código                    |
| Banco real (ex.: Supabase)                                          | Dados reais e compartilhados      | Fora do escopo da demo                     |

## Decisão

Textos e listas em `localStorage`; imagens enviadas pelo painel em `IndexedDB`, redimensionadas antes de salvar.
O site sempre funciona com os dados padrão do projeto quando não há nada salvo.

## Trade-offs aceitos

- As edições valem só naquele navegador e somem se os dados do site forem limpos.
- A "senha" do painel não é segurança.

## Gatilhos para revisitar

- Contrato fechado com painel real → ADR nova para banco e autenticação.
