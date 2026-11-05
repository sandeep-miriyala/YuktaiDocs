# YuktaiDocs

Docs and live demos for [YuktAI](https://www.npmjs.com/package/@yuktishaalaa/yuktai) and
[Ask page](https://www.npmjs.com/package/@yuktishaalaa/ask-page), at https://yuktaidocs.netlify.app

- **Next.js** (App Router, static export): `npm run build` writes plain files to `out/`.
- **Netlify** (free) runs the build and serves `out/`. No server, no functions. See `netlify.toml`.
- YuktAI and Ask page come from npm and are bundled into the site.

```
npm install
npm run dev      # http://localhost:3000
npm run build    # writes out/
```

## Where things are

| Path | What |
|---|---|
| `src/data/site.ts` | Versions, numbers, links. Change a release here. |
| `src/app/page.tsx` | Home page |
| `src/app/(guides)/<name>/page.tsx` | The 12 guides (`/grid/`, `/jquery/`, …) |
| `src/lib/docs/pages/<name>.ts` | The live demo on each guide |
| `src/lib/docs/runtime.ts` | Shared demo helpers; loads YuktAI from npm (Rust engines built in) |
| `src/app/manifest.ts`, `public/sw.js`, `src/components/InstallButton.tsx` | Installable app (PWA), works offline |
| `public/_redirects` | Old `.html` addresses → the new routes |

Icons everywhere come from `@yuktishaalaa/yuktai/icons`.
