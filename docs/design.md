# Design — Site-portfólio Andrei Heck (DEMO)

> Status: **APROVADO — v1.0** (aprovado por Wellington / TRIRREME em 2026-09-17)
> Data: 2026-09-17 · Aprovação: TRIRREME
> Fontes: respostas do cliente (via Wellington) + referências jackelinikil.com.br e heartfotografia.com.br/contato
> v1.0: aprovação. v0.3: formulário abre o WhatsApp (decidido). v0.2: agenda visual, blog de exemplo, formulário, WhatsApp discreto, stack React, hospedagem Vercel, regra de Git.

---

## 1. Fronteira do produto

Site-portfólio de **demonstração** para o fotógrafo **Andrei Heck** (base: Alto Paraíso), com foco principal em
**fotografia de casamento** e foco secundário em ensaios e vídeo.
O objetivo da demo é convencer o cliente a fechar contrato. Ela não é a versão de produção.

**Ação principal do visitante:** pedir orçamento, pelo WhatsApp ou pelo formulário.

## 2. Non-goals (fora da demo)

- Banco de dados, servidor ou back-end de qualquer tipo
- Login real e autenticação segura
- Domínio próprio e deploy de produção
- Formulário que envia e-mail ou grava dados
- **Agenda funcional** (na demo ela é só visual)
- **Blog real** (na demo os posts são modelos de exemplo)
- Pagamento, área do cliente, entrega de galerias e vários idiomas

Tudo o que não está neste documento está **fora de escopo por padrão**.

## 3. Papéis

| Papel                             | O que faz na demo                             |
| --------------------------------- | --------------------------------------------- |
| Visitante (noiva, noivo, família) | Vê portfólio, serviços e blog; pede orçamento |
| Fotógrafo (Andrei)                | Usa o painel simulado para editar conteúdo    |

## 4. Fluxo central

```
Instagram / indicação → Home → (Portfólio | Serviços | Blog | Sobre | Agenda)
                      → Orçamento (WhatsApp ou formulário) → conversa no WhatsApp
```

## 5. Mapa de features (backlog)

| ID  | Feature                 | Resumo                                                                                                                      | Depende de     |
| --- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------- |
| F1  | Home                    | Foto de destaque em tela cheia, frase de impacto, "sobre" curto, destaques, depoimentos, chamada final                      | F2, F5         |
| F2  | Portfólio               | Galeria por categoria (Casamentos em destaque, Ensaios, Vídeos) com visualização ampliada                                   | —              |
| F3  | Serviços                | Casamento, ensaios e vídeo. Avisos: **taxa de locomoção** fora da cidade; **aluguel de estúdio à parte**                    | —              |
| F4  | Sobre                   | Foto do Andrei, história, forma de trabalhar                                                                                | —              |
| F5  | Contato / Orçamento     | Link de WhatsApp **discreto** (no menu, no rodapé e ao fim das seções; **sem botão flutuante verde**) + formulário (ver F9) | —              |
| F6  | Painel simulado         | Editar textos, fotos, posts e depoimentos; salva **só no navegador**; botão "restaurar padrão"                              | F1–F9          |
| F7  | Blog (modelos)          | Lista de posts de exemplo → página própria de cada post (`/blog/:slug`) com fotos, texto, vídeo e links                     | —              |
| F8  | Agenda (visual)         | Calendário com datas "disponível/ocupada" **fictícias**; nenhum clique agenda nada; aviso "demonstração"                    | —              |
| F9  | Formulário de orçamento | Campos do pedido; ao enviar, **monta a mensagem e abre o WhatsApp**                                                         | F5             |
| F10 | _Futuro (pós-contrato)_ | Painel real, blog real, agenda real, domínio, produção                                                                      | Contrato + ADR |

## 6. Modelo de dados global

Os dados vivem no navegador. O site carrega **valores padrão** de arquivos do projeto e aplica por cima o que foi editado no painel.

| Entidade     | Campos                                                                                                    |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| `Perfil`     | nome, frase de impacto, bio curta, bio completa, cidade base, whatsapp, e-mail, instagram, facebook, foto |
| `Foto`       | id, categoria (casamento · ensaio), imagem, legenda, destaque, ordem                                      |
| `Video`      | id, título, link, capa                                                                                    |
| `Servico`    | id, título, descrição, observação                                                                         |
| `Depoimento` | id, nome do casal, texto, foto (opcional)                                                                 |
| `Post`       | id, slug, título, data, capa, resumo, blocos de conteúdo (texto · foto · galeria · vídeo · link)          |
| `DataAgenda` | data, status (disponível · ocupada) — fictícia                                                            |

**Armazenamento:** textos e listas em `localStorage`; imagens enviadas pelo painel em `IndexedDB`, redimensionadas antes de salvar.
Motivo: o `localStorage` tem pouco espaço (poucos MB por site, varia por navegador).

## 7. Integrações

| Integração           | Uso                    | Observação                                                                                                                                     |
| -------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| WhatsApp (`wa.me`)   | Orçamento e formulário | Número: +55 69 9951-6147 (confirmado pelo cliente). Testar o link antes da apresentação                                                        |
| Instagram / Facebook | Links no rodapé        | Só links, sem incorporar o feed                                                                                                                |
| Fotos e vídeos       | Conteúdo da demo       | Copiados do Instagram dele e **salvos dentro do projeto** (não usar link direto do Instagram). Origem final (Drive) será decidida pelo cliente |
| Vercel               | Hospedagem             | Deploy é R2 e exige autorização                                                                                                                |

## 8. Invariantes

1. O contato por WhatsApp funciona em todas as páginas, no celular e no computador, sem botão flutuante verde.
2. O site funciona completo **sem** nada salvo no navegador (usa os padrões).
3. Painel, agenda e blog mostram que são **demonstração**.
4. Nenhum dado digitado no formulário é gravado ou enviado para servidor; ele só vira mensagem de WhatsApp.
5. As imagens são otimizadas, e a Home carrega bem em celular com internet móvel.
6. "Restaurar padrão" apaga só os dados da demo.
7. Toda página (inclusive `/blog/:slug`) abre direto pelo link, sem erro 404.
8. Commits e pushes saem **somente** com a identidade da TRIRREME.

## 9. Dados pessoais

- O formulário pede dados pessoais (nome, telefone, data do evento), mas **não guarda nada**: só monta a mensagem.
- Fotos de casais: o cliente declarou ter autorização. Guardar a confirmação por escrito antes de publicar.
- Depoimentos e posts de exemplo usam **nomes fictícios** ou autorizados.
- A senha do painel simulado **não é segurança** e não deve ser apresentada como proteção.

## 10. Decisões (registradas em `docs/adr/`)

| #   | Decisão                                                    | Status               |
| --- | ---------------------------------------------------------- | -------------------- |
| 1   | Stack: **React** (motivo: preparar para crescer)           | ADR 0001 (decidido)  |
| 2   | Hospedagem: **Vercel**                                     | ADR 0002 (decidido)  |
| 3   | Build, linguagem e rotas: Vite + TypeScript + React Router | ADR 0001 (proposto)  |
| 4   | Armazenamento local: `localStorage` + `IndexedDB`          | ADR 0003 (proposto)  |
| 5   | Git: commits e push só pela conta `Trirreme`               | Regra em `CLAUDE.md` |

## 11. Perguntas abertas

| #   | Pergunta                                                                                           | Bloqueia?                                                    |
| --- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 1   | E-mail de commit configurado no PC é o da conta `Trirreme`? (conferir com `git config user.email`) | **Sim**, para o primeiro commit                              |
| 2   | Alto Paraíso de **Rondônia**? (suposição pelo DDD 69)                                              | Não                                                          |
| 3   | Tem logo ou identidade visual?                                                                     | Não; proposta: fundo escuro, luz quente, tipografia elegante |

## 12. Suposições registradas

- A estética segue o feed do Instagram: tons escuros e dramáticos, com luz dourada e fotos em preto e branco.
- Os posts do blog e as datas da agenda são inventados, apenas para mostrar o formato.
