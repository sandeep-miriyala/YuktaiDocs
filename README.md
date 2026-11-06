# YuktaiDocs

Docs and live demos for [YuktAI](https://www.npmjs.com/package/@yuktishaalaa/yuktai) and
[Ask page](https://www.npmjs.com/package/@yuktishaalaa/ask-page), at https://yuktaidocs.netlify.app

Made with `npx yuktai init yuktaidocs --stack next-rust --template docs --features page-tools --host netlify`.

- **Next.js** (static export) + **Rust → WebAssembly** (`rust/`), built by `yuktai build`
- **Netlify** (free) builds it and serves `out/`. No server, no functions. See `netlify.toml`.
- YuktAI, Ask page and TanStack come from npm and are bundled into the site.

```
npm install
npm run dev      # http://localhost:3000
npm run build    # Rust → WASM, then static files in out/
npm test         # checks the built site
```

| Path | What |
|---|---|
| `yuktai.config.ts` | Name, colours, features |
| `src/data/site.ts` | Versions, numbers, menu, guides. Change a release here. |
| `src/app/page.tsx` | Home page |
| `src/app/(guides)/<name>/page.tsx` | The 13 guides (`/create/`, `/grid/`, …) |
| `src/app/about/page.tsx` | How this site is built (TanStack Table + Query) |
| `src/components/yuktai/` | Header, widget, Ask, install, theme |
| `src/lib/docs/pages/<name>.ts` | The live demo on each guide |
| `rust/src/lib.rs` | The site's Rust core (word count, live check on About) |
| `src/styles/` | `tokens.css` (colours), `globals.css`, `guides.css` |
| `public/_redirects` | Old `.html` addresses → the new routes |

Icons everywhere come from `@yuktishaalaa/yuktai/icons`.
