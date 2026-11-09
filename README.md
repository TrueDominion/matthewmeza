# matthewmeza.com

Personal site built on [Magic Portfolio](https://once-ui.com/products/magic-portfolio) by Once UI (Next.js), exported as a static site and hosted on Cloudflare Pages.

## Edit content

| What | Where |
|---|---|
| Name, role, email, socials, home page copy, metrics, audiences, About page (experience, education, capabilities) | `src/resources/content.tsx` |
| Theme, colors, fonts, enabled pages, domain | `src/resources/once-ui.config.ts` |
| Case studies (Work page) | `src/app/work/projects/*.mdx` (one file per case study; newest `publishedAt` lists first) |
| Images (avatar, social share card, case study covers) | `public/images/` |

`assets/meza-headshot.jpg` is the full resolution original and is not deployed. Web versions live in `public/images/`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to /out
```

## Deployment (Cloudflare Pages)

Project settings → Builds & deployments:

- Framework preset: **None** (or Next.js (Static HTML Export))
- Build command: `npm run build`
- Build output directory: `out`
- Environment variable: `NODE_VERSION` = `22`

Push to `main` and Cloudflare rebuilds automatically.

## License

The template is licensed CC BY-NC 4.0 (see `LICENSE`). The "Build your portfolio with Once UI" footer credit is required unless a Once UI Pro license is purchased.
