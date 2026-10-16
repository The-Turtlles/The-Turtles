# THT Turtles — Portfólio

Site institucional estático para a THT Turtles, um estúdio digital independente. Feito com Next.js App Router, React, TypeScript strict, CSS Modules e animações opcionais com GSAP/ScrollTrigger/SplitText e Lenis.

## 1. O que instalar

- Node.js 20 ou mais novo
- npm (incluído com o Node.js)
- Git, caso queira publicar pelo GitHub

## 2. Rodar localmente

Abra um terminal na pasta do projeto e execute:

```bash
npm install
npm run dev
```

Acesse http://localhost:3000. O primeiro `npm install` criará o `package-lock.json`; ele não foi incluído neste ZIP.

## 3. Gerar o site estático

```bash
npm run build
```

O Next exporta o site para a pasta `out/`. O conteúdo dessa pasta pode ser hospedado em um serviço de arquivos estáticos. Como o projeto usa `output: "export"`, não há servidor nem rotas de API.

## 4. Onde editar

**Edite `src/data/site.ts` para trocar a marca, contatos, textos principais, serviços, projetos, equipe e FAQ.** Os componentes consomem esses dados sem duplicar contatos ou nomes. Atualize também o domínio no mesmo arquivo.

- **Cores:** `src/app/globals.css`, nas variáveis `--wine`, `--green` e `--cream`.
- **Textos e contatos:** `src/data/site.ts`.
- **Projetos:** altere a lista `projects` no mesmo arquivo. Troque os títulos `[PREENCHER: ...]`, descrições, tecnologias e URLs por projetos reais. Os seis cards atuais são exemplos e não representam clientes.
- **Fotos da equipe:** substitua os blocos de placeholder em `src/components/About.tsx` por imagens próprias com texto alternativo.
- **Logo e favicon:** `public/logo.svg` e `public/favicon.svg`.
- **Padrão geométrico:** `public/padrao-casco.svg`.
- **Imagem Open Graph:** crie `public/og.png` com dimensões de 1200 × 630 px antes de divulgar o link nas redes sociais.
- **SEO e domínio:** atualize `metadataBase` em `src/app/layout.tsx` e as URLs em `src/app/robots.ts` e `src/app/sitemap.ts` para o domínio real.

## 5. Publicar de graça no GitHub Pages

1. Crie um repositório no GitHub e envie os arquivos para a branch `main`.
2. No repositório, abra **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` instala as dependências, gera a pasta `out` e publica o conteúdo.
4. Se for o site de uma organização/usuário, o repositório deve se chamar `<nome-da-organização>.github.io`.

> Observação: para um repositório de projeto comum, o GitHub Pages publica em um subcaminho. Este projeto usa links absolutos para arquivos públicos e navegação por âncoras; para um repositório que não seja `<usuario>.github.io`, revise o caminho-base de assets antes de publicar. O mais simples é usar um repositório de usuário/organização ou hospedagem estática com domínio raiz.

## 6. Ligar um domínio próprio

Configure o domínio no provedor DNS conforme as instruções atuais do GitHub Pages ou do serviço de hospedagem escolhido. No repositório, adicione um arquivo `public/CNAME` com o domínio, caso o provedor peça isso. Ative HTTPS no painel da hospedagem. Depois, substitua `example.com` e o marcador de domínio nos arquivos de SEO pelo domínio final.

## 7. Se aparecer um erro

- Confira `node -v` e `npm -v`; use Node 20 ou superior.
- Apague `node_modules` e rode `npm install` novamente se a instalação ficar inconsistente.
- Se `next/font/google` falhar no build, verifique a conexão de internet: as fontes são baixadas durante o build.
- Confira o terminal para ver o primeiro erro, não apenas a última linha.
- Execute `npm run lint` para checar regras de código.
- O formulário abre o WhatsApp com a mensagem preenchida; não envia dados para um backend. Permita pop-ups para este site caso o navegador bloqueie a janela.

## Acessibilidade e movimento

O site inclui navegação mobile, foco visível, formulário com mensagens acessíveis e FAQ por teclado. Se `prefers-reduced-motion` estiver ativado, as animações e a rolagem suave são desativadas. O conteúdo textual existe no HTML renderizado pelo Next antes das animações.

## Observações

- Nenhum depoimento, cliente, resultado, prêmio ou preço foi inventado.
- Os links de projeto apontam temporariamente para a seção de contato até que URLs reais sejam preenchidas.
- O site não inclui `node_modules`, `.next`, `out` nem `package-lock.json`.
