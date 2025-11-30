# Estox One - Vite + React (SPA)

This repository contains the frontend SPA ready for deployment on Vercel.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, “Add New Project” → import the repo.
3. Framework Preset: Vite
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Root Directory: `Estox-One` (if choosing monorepo mode)
7. Rewrites handled via `vercel.json` to support SPA routing.

## Notes
- Tailwind is via CDN; no postcss build needed.
- SPA routing is supported with `vercel.json` rewrite to `index.html`.


