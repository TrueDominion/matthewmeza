# matthewmeza.com

Personal site for Matthew Meza. Next.js, exported as a static site, hosted on Cloudflare Pages.
Visual system: **Direction 4B brand guidelines** (Paper / Graphite / Signal Orange / Deep Navy, DM Sans + IBM Plex Mono, truss mark).

## Edit content

| What | Where |
|---|---|
| All copy: hero, metrics, crossings, capabilities, focus areas, About page | `src/content.ts` |
| Colors, type, spacing, light and dark mode | `src/app/globals.css` (tokens at the top) |
| Logo mark and lockup | `src/components/Brand.tsx` |
| Logo animation in the hero | `src/components/AnimatedMark.tsx`, clips in `public/media/` |
| Node divider | `src/components/NodeDivider.tsx` |
| Value creation framework (interactive) | `src/components/frameworks/` |
| Photography (generated with Higgsfield) | `public/images/bridge-*`, `crossing-*`, `steel-navy-*` |
| Official logo animation, full length (paper and graphite) | `public/brand/logo-animation-*.mp4` |
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
