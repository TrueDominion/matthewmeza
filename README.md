# matthewmeza.com

Personal site for Matthew Meza. Next.js, exported as a static site, hosted on Cloudflare Pages.
Visual system: **Direction 4B brand guidelines** (Paper / Graphite / Signal Orange / Deep Navy, DM Sans + IBM Plex Mono, truss mark).

## Edit content

| What | Where |
|---|---|
| All copy: hero, metrics, crossings, capabilities, focus areas, About page | `src/content.ts` |
| Colors, type, spacing, light and dark mode | `src/app/globals.css` (tokens at the top) |
| Logo mark and lockup | `src/components/Brand.tsx` |
| Hero bridge illustration and node divider | `src/components/Truss.tsx` |
| Value creation framework (interactive) | `src/components/frameworks/` |
| Portrait, social card, icons | `public/images/`, `public/icon.svg`, `public/favicon.ico`, `public/apple-icon.png` |

`assets/meza-headshot.jpg` is the full resolution original and is not deployed.

### Brand rules worth remembering
- Paper is the primary mode; graphite is the dark mode (toggle in the header).
- Signal Orange is for nodes, accents and buttons with **graphite text**. Never orange text on paper (2.9:1, fails contrast).
- Do not recolor, stretch, rotate or add effects to the mark.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to /out
```

## Deployment (Cloudflare Pages)

- Build command: `npm run build`
- Build output directory: `out`
- Environment variable: `NODE_VERSION` = `22`

Push to `main` and Cloudflare rebuilds automatically. If a change does not appear, purge the Cloudflare cache.
