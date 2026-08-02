# Nhà Web

Next.js landing page deployed to Cloudflare Workers via `@opennextjs/cloudflare`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cloudflare Workers

| Command | Purpose |
|---|---|
| `npm run build:worker` | Build Next.js + OpenNext Worker bundle |
| `npm run preview` | Build and run in the Workers runtime locally |
| `npm run deploy` | Build and deploy to Cloudflare |

### Workers Builds (Git / CI)

In the Cloudflare dashboard → Workers → your project → **Settings → Build**, set:

| Setting | Value |
|---|---|
| **Build command** | `npm run build:worker` |
| **Deploy command** | `npx wrangler deploy` |

Do **not** use `npm run build` as the Cloudflare build command — that only runs `next build` and skips the OpenNext Worker output (`.open-next`), which causes:

`Could not find compiled Open Next config, did you run the build command?`
