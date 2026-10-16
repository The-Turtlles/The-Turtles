# Changelog — THT Turtles v3

Esta etapa adiciona ícones, animações pontuais com Motion e suporte opcional a imagens. O layout, os textos principais, a paleta e o deploy existente foram preservados.

## 1. Ícones — Phosphor Icons
- Adicionada a dependência `@phosphor-icons/react` em `package.json`.
- Criado `src/components/ui/Icon.tsx`, com mapa tipado de ícones, `currentColor`, rótulo acessível opcional e pesos configuráveis.
- Atualizado `src/components/Icons.tsx` para mapear os cinco serviços a ícones Phosphor distintos.
- Substituídas setas de interface por ícones em `Hero.tsx`, `ProjectCard.tsx`, `About.tsx`, `Contact.tsx`, `Process.tsx`, `Footer.tsx` e `FinalCta.tsx`. Logo e padrão de casco continuam SVGs próprios.

## 2. Animações de componentes — Motion
- Adicionada a dependência `motion` em `package.json`.
- `Projects.tsx`: transições de entrada/saída e layout dos cartões ao filtrar, usando `AnimatePresence` e `useReducedMotion`.
- `Faq.tsx`: altura animada do acordeão e rotação do ícone +/−, com suporte a movimento reduzido.
- `Header.tsx`: menu móvel com transição de entrada/saída e suporte a movimento reduzido.
- `WhatsAppFloat.tsx`: aparece após 600 px de rolagem, com transição e suporte a movimento reduzido.
- GSAP, ScrollTrigger, SplitText e Lenis continuam no fluxo existente para as animações relacionadas à rolagem.

## 3. Sistema de imagens
- Adicionado o tipo opcional `ImageAsset` em `src/types/index.ts`; projetos e membros agora aceitam `image` com `src`, `alt`, `width` e `height`.
- `src/data/site.ts` continua como fonte única dos dados e deixa os slots de imagem explicitamente opcionais.
- `ProjectCard.tsx` usa `next/image` quando há imagem; sem imagem, preserva o mockup atual.
- `About.tsx` usa `next/image` quando há foto; sem foto, mostra a inicial e a legenda “foto em breve”.
- Criado `src/components/ui/ImageFilters.tsx` com filtro SVG duotone verde/creme, inserido no layout. O filtro é removido no hover e desativado com movimento reduzido.
- Criadas `public/img/projetos/`, `public/img/equipe/` e `public/img/texturas/`, cada uma com `.gitkeep`.
- Criado `docs/IMAGENS.md` com orientação sobre fontes, licença, compressão, texto alternativo e cadastro no arquivo de dados.

## Compatibilidade e limites
- Mantido `.github/workflows/deploy.yml` sem alterações.
- Mantidos `next.config.ts` e `images.unoptimized` para exportação estática.
- Corrigida a expressão regular em `src/app/robots.ts` e `src/app/sitemap.ts` para usar uma única barra invertida (`/\/$/`).
- Nenhuma foto externa foi baixada ou adicionada.
- A revisão realizada é estática; não houve instalação de dependências nem build real nesta execução.
