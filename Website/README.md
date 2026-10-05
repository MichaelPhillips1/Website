# Michael Phillips — Resume Site

A from-scratch React/Vite resume and portfolio site for Michael Phillips.

## Run locally

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

This repository includes `.github/workflows/deploy.yml`.

1. Push the project to the `updated-site`, `scientific-site`, or `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push a commit. The workflow will build and publish the site.

The existing custom domain is preserved through `public/CNAME`:

`michael-phillips.org`

## Update resume content

Most text content is centralized in:

`src/data/resume.js`

The downloadable PDF is:

`public/resume.pdf`
