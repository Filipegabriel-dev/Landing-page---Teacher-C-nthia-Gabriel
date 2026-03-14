# Cínthia Gabriel - Inglês Online

Landing page moderna e responsiva para professora de inglês online.

## Visualização rápida

Abra o arquivo `index.html` diretamente no navegador. O projeto usa Tailwind via CDN e funciona sem build.

## Estrutura do projeto

```
cinthia-gabriel-landing/
├── index.html
├── tailwind.config.js
├── package.json
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── images/  (placeholders)
└── README.md
```

## Imagem do Hero

Para usar o banner personalizado (layout split com azul/landmarks), salve a imagem como `hero-banner.png` em `assets/images/` e atualize o `src` no `index.html`. Atualmente usa `DSC_2986.jpg` como fundo.

## Build opcional (Tailwind local)

Para usar Tailwind via build em vez do CDN:

```bash
npm install
npm run build
```

O arquivo compilado será gerado em `dist/output.css`. Atualize o `index.html` para referenciá-lo.
