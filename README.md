# daivikgoel.com

Personal link-in-bio site — a bento-style grid of everything I'm working on:
Shor (YC S25), The Building Blocks Podcast, Founders Brew, writing, projects,
city recommendations, and photography.

## Structure

- `site/` — the live site. Plain static HTML/CSS, no build step.
  - `index.html` / `styles.css` — the page
  - `assets/` — images
  - `CNAME` — custom-domain binding for GitHub Pages (must stay in this folder)
  - `service-worker.js` — kill switch that evicts the old React site's cached service worker
- `src/`, `config/`, `scripts/` — the previous React portfolio, kept for history.

## Develop

```bash
npm start
```

Serves `site/` at http://localhost:4173.

## Deploy

```bash
npm run deploy
```

Publishes `site/` to the `gh-pages` branch, which GitHub Pages serves at
[daivikgoel.com](https://daivikgoel.com).
