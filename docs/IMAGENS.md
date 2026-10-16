# Guia de imagens da THT Turtles

## Onde encontrar imagens

Você pode procurar imagens em [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/) e [Pixabay](https://pixabay.com/). Confira a licença e as condições de uso de cada arquivo antes de publicar; as regras podem variar e mudar. Prefira fotos de lugares, ambientes e objetos a fotos de pessoas identificáveis, especialmente quando não houver autorização clara.

Para projetos reais, prefira capturas de tela dos próprios sites que vocês desenvolveram e têm autorização para mostrar.

## Preparação recomendada

- Prefira WebP, com até 1600 px de largura e aproximadamente 200 KB por arquivo quando a qualidade permitir.
- Comprima as imagens antes de adicioná-las ao repositório. O site usa exportação estática e `images.unoptimized`, então a otimização precisa acontecer antes do upload.
- Use nomes em minúsculas, sem espaços, com hífens: `site-clinica-home.webp`.
- Capas de projetos: proporção 4:3. Fotos da equipe: proporção 4:5.
- Coloque arquivos de projeto em `public/img/projetos/`, fotos da equipe em `public/img/equipe/` e texturas opcionais em `public/img/texturas/`.

## Texto alternativo (alt)

Descreva o que a imagem acrescenta à página, com linguagem direta. Evite começar com “imagem de” e não encha o texto de palavras-chave. Se a imagem for apenas decorativa, o ideal é usar `alt` vazio; para imagens cadastradas neste sistema, informe uma descrição útil e objetiva.

## Cadastrar uma imagem

Edite `src/data/site.ts`, que continua sendo a fonte única dos projetos e membros. Adicione `image` ao objeto desejado com o caminho público, uma descrição alternativa e as dimensões reais:

```ts
{
  id: "01",
  title: "[PREENCHER: nome do projeto]",
  // mantenha os demais campos já existentes
  image: {
    src: "/img/projetos/site-clinica-home.webp",
    alt: "Página inicial do site da clínica com menu e apresentação dos serviços",
    width: 1200,
    height: 900,
  },
}
```

Para uma pessoa da equipe, use o mesmo formato no objeto correspondente, guardando o arquivo em `public/img/equipe/`. Sem `image`, os projetos continuam mostrando o mockup ilustrativo e a equipe mantém a moldura com a inicial.

## Texturas opcionais

A pasta `public/img/texturas/` está preparada para texturas próprias. O uso de textura está desligado por padrão; se for ativado depois, mantenha a opacidade baixa para não prejudicar o contraste e a leitura.
