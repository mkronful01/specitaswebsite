# Specitas Group Website

Premium single-page marketing site for Specitas Group — a multidisciplinary consultancy consortium across the Middle East.

## Stack

- Vite
- React 19
- TypeScript
- CSS Modules + brand design tokens
- Netlify-ready static build

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content

Site copy lives in `src/content/siteContent.ts`. Update contact email, company links, and section text there.

## Brand assets

- Official logo: `public/assets/brand/specitas-group-logo.png`
- Vector mark (nav/favicon): `public/assets/brand/specitas-mark.svg`
- Vector full logo: `public/assets/brand/specitas-group-logo.svg`

To re-import the uploaded brand PNG from Cursor assets:

```bash
node scratchedspace/copy-brand-logo.mjs
```

## Self-contained HTML

Single file (no server, logos embedded):

- [`Specitas-Group-Share.html`](Specitas-Group-Share.html) (project root)
- [`public/specitas-group.html`](public/specitas-group.html)

Regenerate after logo/content updates:

```bash
node scratchedspace/generate-self-contained.mjs
```

## Deploy (Netlify)

1. Connect the repository to Netlify, or drag the `dist` folder after `npm run build`.
2. Build command: `npm run build`
3. Publish directory: `dist`

`netlify.toml` is included for SPA routing.
