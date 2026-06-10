# Continuidade do projeto — Pronto!

Este arquivo resume o estado atual do projeto para quem for continuar o trabalho
(equipe ENGETEC 2026.1). Para instruções de instalação/execução, veja o `README.md`.

## Status atual

A landing page do MVP **Pronto!** está pronta como projeto React/TanStack Start
(Vite 8 + Tailwind v4), rodando localmente e via Docker.

### O que já está implementado

- **Estrutura do projeto**: TanStack Start (file-based routing) + Vite + Tailwind v4.
  - `src/routes/index.tsx` — página única com todas as seções da landing.
  - `src/styles.css` — tema, cores da marca, animações e utilitários Tailwind v4.
  - `src/routes/__root.tsx`, `src/main.tsx` — bootstrap do router.
- **Conteúdo da landing**: Navbar, Hero, Problema, Solução (4 passos), Benefícios,
  Validação, Roadmap, Equipe, CTA e Footer — todos com texto e dados reais do projeto.
- **Ícones**: todos os emojis foram substituídos por SVGs inline estilo Lucide
  (ver componentes `Icon*` no topo de `src/routes/index.tsx`).
- **Animações**:
  - `animate-float` — flutuação suave dos mockups de celular.
  - `animate-push` — notificação push aparecendo/desaparecendo no celular.
  - `animate-shake` — celular "vibra" quando o pedido fica pronto.
  - `animate-success` / `animate-success-check` — tela cheia verde com check
    e mensagem "Pedido pronto! Obrigado pelo pedido!" (ciclo de 8s).
  - `ExpandablePhone` — ao clicar em qualquer mockup de celular (hero, CTA ou
    os 4 mini-phones da seção Solução), ele faz um efeito 3D de "espiral"
    (rotaciona e aumenta de escala, `--phone-expand-scale`) e o restante da
    página entra em cascata com blur (`body.phone-expanded main > *`).
    Suporta `Esc` para fechar e respeita `prefers-reduced-motion`.
- **Docker**: `Dockerfile` (multi-stage, build com Node 22 + serve via nginx),
  `nginx.conf`, `docker-compose.yml` e `.dockerignore` — testados com
  `docker compose up --build` (porta 8080).
- **Git**: repositório local inicializado, commit inicial feito.

### Pendências

- [ ] **Commit das mudanças atuais** (ícones, animações de sucesso/vibração,
  expansão de celular) — ainda não commitadas.
- [ ] **Push para o GitHub**: criar repositório vazio no GitHub e enviar o
  código (aguardando URL do repositório).
- [ ] **Docker Hub**: publicar a imagem (`pronto-landing`) — aguardando dados
  de login/repositório (foi adiado de propósito).

### Próximos passos do projeto (conforme Roadmap exibido na página)

1. ~~Análise do problema~~ — concluído
2. ~~Levantamento de requisitos~~ — concluído
3. ~~Protótipo (interface + fluxo)~~ — concluído (esta landing page)
4. **Lógica (códigos, status, notificações)** — próximo passo: implementar a
   geração real de código/QR Code, status de pedido e notificações (push/chamada).
5. **Testes** — testar o fluxo completo com usuários reais.
6. **Apresentação** — preparar demonstração final do MVP.

## Como continuar o desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000

npm run build    # build de produção
npm run preview

docker compose up --build   # http://localhost:8080
```

Arquivos principais para mexer no conteúdo/visual:
- `src/routes/index.tsx` — todas as seções e componentes da landing.
- `src/styles.css` — cores, fontes, animações (Tailwind v4 via `@theme`/`@utility`).
