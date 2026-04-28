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

Because the repository is currently `kongyanye/hanling.github.io`, GitHub Pages serves it as a project site:

```text
https://kongyanye.github.io/hanling.github.io/
```

For this deployment path, `vite.config.ts` uses:

```ts
base: "/hanling.github.io/"
```

If the site is moved to the root user-site repository `kongyanye/kongyanye.github.io`, change the Vite base back to `/`.
