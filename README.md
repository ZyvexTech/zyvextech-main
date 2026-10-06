# Zyvex Tech — main website

Source, build toolchain and deployable output for the main agency site
(live at **https://zyvextech-nu.vercel.app**, Vercel project `zyvextech`).

- **Repository:** [`ZyvexTech/zyvextech-main`](https://github.com/ZyvexTech/zyvextech-main)
- **Production branch:** `master`
- **Main source:** `src/index.html`
- **Build:** `npm run build` generates the `dist/` output

---

## Deployment workflow

The Vercel project `zyvextech` is connected to the GitHub repository
`ZyvexTech/zyvextech-main`, and Production tracks the `master` branch.
**Pushing to `master` automatically deploys the production site.**
Do not deploy manually or create a separate Vercel project.

```
Local changes → commit → push to master → Vercel automatically deploys
```

1. Edit `src/index.html` (the only source file; never hand-edit `dist/`).
2. Run `npm run build` to regenerate `dist/`.
3. Commit the source **and** the regenerated `dist/` output.
4. `git push origin master` — Vercel picks up the push and deploys.

---

## Tech stack

| Layer | What it is |
|---|---|
| Framework | **None.** Vanilla JavaScript, no build-time framework, no npm dependencies in the site itself |
| Source form | A **single self-contained HTML file** (`src/index.html`, ~2.5 MB) holding all markup, CSS, JS, fonts and images |
| Rendering | Client-side SPA router, plus **static prerendering** so every route is a real HTML file |
| Routing | Dual-mode: History API on the live site, hash routing for previews, selected by a `window.__ZYVEX_HASH__` flag |
| Styling | Hand-written CSS with custom properties, no Tailwind or preprocessor |
| Typography | **Runalto** display serif, embedded as a woff file; system sans for body text |
| Icons & diagrams | Inline SVG, drawn in code |
| Build | Python 3 (`rebuild.py`) orchestrating Node (`prerender.js`) |
| Hosting | Vercel static hosting, `cleanUrls: true`, long-cache headers on `/assets/*` |
| Analytics / tracking | None on this site by design (the ad-funnel tracking lives on the India landing site) |

**Why one file.** Everything is inline in the source so the site can be
previewed as a single artifact. The build step pulls the inline data URIs
back out into real cached asset files for production, so visitors never
download a 2.5 MB document.

---

## Folder layout

```
zyvextech-main-site/
├── src/
│   └── index.html          ← THE source of truth. Edit this and nothing else.
├── static/                 ← copied into dist/ verbatim by the build
│   ├── works.html, works/<slug>.html   ← the portfolio, imported from the landing site
│   └── lp/                 ← landing-site assets (case images, client logos, team, reels…)
├── build/
│   ├── rebuild.py          ← build orchestrator (run this)
│   ├── prerender.js        ← static route generator
│   └── import_landing_works.py ← re-imports the portfolio and home sections from the landing site
├── dist/                   ← generated. Do not hand-edit; it is overwritten.
│   ├── index.html          ← prerendered home
│   ├── services.html  services/<slug>.html      (10 services)
│   ├── works.html     works/<slug>.html         (15 case studies, from static/)
│   ├── blog.html      blog/<slug>.html          (5 posts)
│   ├── contact.html   contact/<slug>.html       (10 per-service contact pages)
│   ├── our-story.html, 404.html
│   ├── assets/             ← app.css, app.js, runalto.woff, logo.png, extracted images
│   ├── lp/                 ← from static/lp
│   ├── vercel.json, robots.txt, sitemap.xml
└── scripts-archive/        ← one-off patch scripts, already applied. Reference only.
```

**30 prerendered routes plus 16 static portfolio pages.** Each is a complete HTML document with its own
`<title>`, meta description, canonical URL and Open Graph tags, so the site
indexes properly and deep links work without JavaScript. Once loaded, the
client-side router takes over and navigation happens with no page reload.

---

## How to run locally

To start the local development server with instant preview, clean URL routing, and automatic rebuilding when you edit `src/index.html`:

```bash
npm run dev
# or: node dev-server.js
```

Then open **http://localhost:3000** in your browser.
To preview the single-file hash-routed artifact variant, open **http://localhost:3000/artifact**.

---

## How to build

Requires Python 3 and Node.

```bash
npm run build
# or: python build/rebuild.py
```

That does six things:

1. Writes `index.artifact.html` — the self-contained page with hash routing switched on, for offline or standalone previewing.
2. Extracts every inline `data:` URI into `dist/assets/`, deduplicated by content hash, and splits the inline `<style>` and `<script>` into `app.css` and `app.js`.
3. Runs `prerender.js`, which loads `app.js` inside a Node `vm` sandbox with a stubbed `window`/`document`, calls each page function, and writes one HTML file per route plus `sitemap.xml`. Routes that exist in `static/` (the portfolio) are skipped there and only listed in the sitemap.
4. Copies `static/` into `dist/`.
5. Writes `vercel.json`, `serve.json`, and `robots.txt`.
6. Generates a production deployment zip (`dist.zip`).

Output lands in `dist/`. Commit it and push to `master` to deploy (see Deployment workflow above).

To preview the built production bundle:

```bash
npm run preview
```

---

## How to edit content

Everything lives in plain data arrays near the top of `src/index.html`:

| Constant | Controls |
|---|---|
| `COMPANY` | name, contact details, tagline, positioning |
| `SERVICES` | the 10 service pages — summary, description, process, FAQs |
| `WORKS` / `WORKS_ORDER` | the 14 case studies, their stats, country flags and running order |
| `BLOG_POSTS` | the 5 articles |
| `TESTIMONIALS` / `WORK_REVIEWS` | old SPA quote slots (the pages now show the landing testimonials) |
| `APPROACH` | the four How We Work steps and their diagrams |
| `STATS`, `VALUES`, `TOOLS_ADVISED`, `TECH_PARTNERS` | the supporting blocks |
| `TEAM_PHOTO`, `FOUNDER_PHOTO`, `TEAM_MEETING_PHOTO`, `CLIENT_LOGOS` | image slots (**placeholders**) |

Change the data, run the build, commit, and push to `master`.

### Content shared with the landing site

The design is the landing site's light theme (white, ink text, teal accents).
Three things come straight from the landing site (`ZyvexTech/zyvex-landing-page`):

- **The portfolio** (`/works`, `/works/<slug>`) is the landing site's portfolio, as static pages in `static/`.
- **Home-page sections** (client logos, results, connected tools, reporting, founder, team, why us, client reels, testimonials) live in `src/index.html` as `LP_HOME`, between `<lp-home>` markers, with their CSS between `<lp-home-css>` markers. The team, client logos, reels and testimonials are also used on Our Story.
- **Service extras** (`SERVICE_EXTRAS` in `src/index.html`): the "In practice" checklists, Shopify build inclusions, ad-spend note and extra FAQs.

To pull in landing-site changes to the portfolio or home sections, re-run the importer, then build:

```bash
python build/import_landing_works.py /path/to/zyvex-landing-page
npm run build
```

The importer swaps in this site's navigation and footer, moves landing assets under `/lp/`, and strips the landing site's Meta Pixel / lead-form tracking. Do not hand-edit the generated parts; change the landing site and re-import.

---

## Known gaps

- **Old SPA case-study pages** (`pageWorks`, `pageWorkDetail`, `WORKS` data) are now only used by the single-file preview artifact (hash mode); the live site serves the imported portfolio. The home page, service pages and blog still use `WORKS` for thumbnails and related-work rows.
- **Preview artifact** (`index.artifact.html`) does not include the `/lp/` assets, so landing-sourced images and videos do not show there.
- **Logos.** The home page Core Expertise cards show full-colour Shopify, Meta and Google logos (Meta and Google from the CC0 `gilbarbara/logos` set). The How We Work diagram uses the full-colour Shopify and Meta logos.

---

## Related

- **India landing site** — separate codebase, `in.zyvextech.co`, repo `ZyvexTech/zyvex-landing-page`
- **Preview artifact for this site** — https://claude.ai/artifact/Pcc1UijTgf91sqT4dnY5a3
