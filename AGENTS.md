<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Projeto: Landing Page Pessoal - Thales Campelo

## Descrição geral

Aplicação web de landing page pessoal construída com Next.js 16 e React 19. O site mostra um portfólio simples, seções de sobre, contato, tecnologias e projetos, com suporte a múltiplos idiomas e integração de Google Tag Manager.

## Objetivo do projeto

- Apresentar o perfil profissional de Thales Campelo.
- Expor serviços de criação de landing pages e planos comerciais.
- Demonstrar projetos, tecnologias e contato.
- Ser uma landing page responsiva e visualmente elegante.

## Tecnologias e dependências principais

- `next@^16.2.2`
- `react@^19.2.4`
- `react-dom@^19.2.4`
- `typescript@^5`
- `tailwindcss@^4`
- `lucide-react` para ícones
- `@next/third-parties` para Google Tag Manager
- `eslint@^9` com `eslint-config-next`

## Estrutura relevante do projeto

- `package.json` - scripts básicos de build/dev e dependências.
- `tsconfig.json` - configuração TypeScript com paths `@/* -> ./src/*` e plugin `next`.
- `next.config.ts` - arquivo de configuração Next.js vazio, preservado para futuras opções.
- `src/app/layout.tsx` - layout raiz que carrega fontes `next/font/google`, define metadados e monta `<html>` e `<body>`.
- `src/app/page.tsx` - única página principal da landing page com copy multilíngue e lógica de idioma.
- `src/app/globals.css` - estilos globais e variáveis CSS usando Tailwind CSS e classes utilitárias customizadas.
- `src/app/lib/gtm.ts` - utilitários para empurrar eventos no `dataLayer` do Google Tag Manager.
- `public/` - contém assets públicos, incluindo imagens, bandeiras e arquivos `google-tag.txt` / `gerenciador-de-tag-google.txt`.

## Principais funcionalidades

- Página inteira construída em `app/page.tsx` com renderização do lado do cliente (`use client`).
- Conteúdo multilíngue em Português, Inglês e Espanhol.
- Uso de imagem dinâmica via `next/image` para bandeiras de idioma.
- Rastreio de eventos com `trackEvent` do GTM.
- Design baseado em Tailwind CSS e variáveis CSS globais.
- Layout moderno com fontes importadas e efeitos visuais.

## Como rodar o projeto

- `npm install`
- `npm run dev`
- `npm run build`
- `npm start`

## Pontos importantes para manutenção

- A aplicação ainda mantém o arquivo `src/app/layout_old.tsx`, que parece ser uma versão antiga. Verificar se ele pode ser removido.
- O `next.config.ts` está vazio, mas presente para configurações futuras.
- `globals.css` importa `tailwindcss` e define tokens de design para tema escuro, gradientes e estilos de painel.
- O `page.tsx` contém todos os textos e estrutura de navegação; modificações de conteúdo devem levar em conta a organização multilíngue.

## Problema conhecido

- Em Linux/Ubuntu, o comando `npm run dev` pode falhar com erro de limite de watch (`OS file watch limit reached`).
- Correção recomendada:
  - `sudo sysctl fs.inotify.max_user_watches=524288`
  - `echo 'fs.inotify.max_user_watches=524288' | sudo tee /etc/sysctl.d/99-inotify.conf`
  - `sudo sysctl --system`

## Observações

- Este projeto é uma landing page pessoal e não um aplicativo complexo de múltiplas rotas.
- Qualquer mudança em conteúdo, layout ou novos componentes deve priorizar a manutenção da tradução e a responsividade.
- Garantir que o Google Tag Manager seja configurado apenas se `NEXT_PUBLIC_GTM_ID` estiver definido.
