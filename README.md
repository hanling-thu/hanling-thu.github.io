# Hanling Wang Academic Homepage

Personal academic homepage for Hanling Wang, built with React, Vite, TypeScript, and Tailwind CSS.

## Development

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

The production output is generated in `dist/`.

## Deployment

This repository is configured for GitHub Pages via GitHub Actions. Pushes to `main` or `master` run `.github/workflows/deploy.yml`, build the site, and publish `dist/`.

Because the repository is currently `hanling-thu/hanling-thu.github.io`, GitHub Pages serves it as a root user site:

```text
https://hanling-thu.github.io/
```

For this deployment path, `vite.config.ts` uses:

```ts
base: "/"
```
