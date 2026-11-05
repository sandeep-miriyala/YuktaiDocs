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
| `src/components/` | Header, hero, charts, Ask panel and YuktAI setup |
| `src/app/(guides)/<name>/page.tsx` | The 12 guides (`/grid/`, `/jquery/`, …) |
| `public/assets/js/pages/*.js` | The live demo for each guide |
| `public/_redirects` | Old `.html` addresses → the new routes |
