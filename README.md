# Pronto!

Landing page do MVP **Pronto!** — app que automatiza o aviso de retirada de pedidos em restaurantes, quiosques e praças de alimentação.

Projeto de Extensão — ENGETEC 2026.1.

## Stack

- [TanStack Start](https://tanstack.com/start) (React + Vite)
- Tailwind CSS v4

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Build de produção

```bash
npm run build
npm run preview
```

## Docker

```bash
docker compose up --build
```

Acesse http://localhost:8080.

## Rotas

Este projeto usa roteamento baseado em arquivos (file-based routing).
Cada arquivo `.tsx` em `src/routes/` é uma rota.

| Arquivo | URL |
| --- | --- |
| `src/routes/index.tsx` | `/` |
| `src/routes/__root.tsx` | layout raiz da aplicação |

`src/routeTree.gen.ts` é gerado automaticamente — não edite manualmente.
