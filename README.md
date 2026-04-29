# khaopad-website

Marketing website for [Khao Pad](https://github.com/codustry/khaopad) — the open-source website platform for Cloudflare. Drives a non-ecommerce site end-to-end: content, SEO, analytics, navigation, and engagement.

Live: `https://khaopad-website.<your-subdomain>.workers.dev`

## Stack

Same shape as the product itself, intentionally:

- **SvelteKit 2 + Svelte 5** (runes)
- **Cloudflare Workers** via `@sveltejs/adapter-cloudflare`
- **Tailwind CSS 4** with custom design tokens
- **Inlang Paraglide JS 2** — compile-time i18n (EN + TH)

## Local dev

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173 — language switches via the `EN/TH` toggle in the nav, and the URL gains a `/th` prefix when you switch.

## Deploy

CI deploys on every push to `main` via `.github/workflows/deploy.yml`. Required secrets:

- `CLOUDFLARE_API_TOKEN` — scoped to Workers Scripts edit
- `CLOUDFLARE_ACCOUNT_ID`

Manual deploy:

```bash
pnpm deploy
```

## Structure

```
src/
├─ routes/
│  ├─ +layout.svelte      # global shell + scroll-reveal observer
│  └─ +page.svelte        # the landing page (one route, many sections)
├─ lib/components/        # Hero, Stats, Features, Demo, Stack, CTA, Footer, Nav, LangToggle
├─ app.css                # design tokens, utility classes, animations
└─ hooks.server.ts        # Paraglide middleware
messages/                 # en.json + th.json (hand-edited)
project.inlang/           # Paraglide config
```

## License

MIT — same as the product.
