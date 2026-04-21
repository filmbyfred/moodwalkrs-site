# moodwalkrs-site

AI Creative Studio — Quality driven.
Static Astro site, GSAP + Lenis, black / acid-green design system.

## Quick start

```bash
npm install
npm run dev     # local preview at http://localhost:4321
npm run build   # production build → dist/
npm run preview # serve the production build
```

## Update workflow (same as filmbyfred-site)

The homepage is driven by two data files. Edit them, build, push — no other code to touch for 95 % of updates.

| What you want to change           | File                          |
|-----------------------------------|-------------------------------|
| Homepage editorial blocks         | `content/home/home.json`      |
| Projects, case studies, galleries | `src/data/projects.ts`        |
| Nav, socials, contact info        | `src/data/site.ts`            |
| Capabilities, crew, awards copy   | `content/home/home.json` (`meta.*`) |
| Visuals                           | `public/images/**`            |

Then:

```bash
npm run build
git add -A
git commit -m "update: ..."
git push origin main
```

## Deployment

GitHub Pages (or any static host). The repo is set up for `output: 'static'` with a sitemap and `assets: '_assets'` bundling.

## Architecture in 30 seconds

```
moodwalkrs-site/
├── content/home/home.json   # editorial block list driving index.astro
├── src/
│   ├── data/
│   │   ├── projects.ts      # ALL projects (title, slug, cover, credits, gallery, ...)
│   │   └── site.ts          # nav, socials, contact, brand
│   ├── layouts/BaseLayout.astro
│   ├── components/          # Nav, Hero, Marquee, Manifesto, WorkGrid, Crew, ...
│   ├── pages/
│   │   ├── index.astro      # homepage (reads home.json + projects.ts)
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── contact.astro
│   │   └── project/[slug].astro
│   ├── scripts/             # gsap-setup, lenis, cursor (vanilla TS)
│   └── styles/              # global, typography, components
├── public/images/           # static assets
├── astro.config.mjs
└── package.json
```

See `CLAUDE.md` for the full developer / AI-assistant brief.
