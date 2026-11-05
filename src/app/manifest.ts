import type { MetadataRoute } from "next";

// The installable app (PWA). Next.js writes this to /manifest.webmanifest at build time.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const icon192 = { src: "/icons/icon-192.png", sizes: "192x192" };
  return {
    name: "YuktaiDocs: YuktAI documentation",
    short_name: "YuktaiDocs",
    description: "YuktAI docs with live demos: accessibility, data grid, agents, page Q&A, page tools, icons and Rust engines. Works offline.",
    lang: "en",
    dir: "ltr",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#08081a",
    theme_color: "#4a1fb8",
    categories: ["developer", "productivity", "education"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icons/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    shortcuts: [
      { name: "Data grid", url: "/grid/", icons: [icon192] },
      { name: "Ask page", url: "/ask/", icons: [icon192] },
      { name: "Icon studio", url: "/icons/", icons: [icon192] },
    ],
  };
}
