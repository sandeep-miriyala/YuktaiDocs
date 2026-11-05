"use client";

import { useEffect } from "react";
import { startDocs } from "@/lib/docs/runtime";
import setupData from "@/lib/docs/data";

// Each guide's live demo, bundled by Next.js (src/lib/docs/pages/<name>.ts).
const DEMOS: Record<string, () => Promise<{ default: () => void }>> = {
  accessibility: () => import("@/lib/docs/pages/accessibility"),
  grid: () => import("@/lib/docs/pages/grid"),
  agents: () => import("@/lib/docs/pages/agents"),
  ask: () => import("@/lib/docs/pages/ask"),
  "page-tools": () => import("@/lib/docs/pages/page-tools"),
  nextjs: () => import("@/lib/docs/pages/nextjs"),
  jquery: () => import("@/lib/docs/pages/jquery"),
  icons: () => import("@/lib/docs/pages/icons"),
  playground: () => import("@/lib/docs/pages/playground"),
  rust: () => import("@/lib/docs/pages/rust"),
};

const ran = new Set<string>();

export default function GuideDemo({ page }: { page: string }) {
  useEffect(() => {
    if (ran.has(page)) return; // once per page load (React may run effects twice in development)
    ran.add(page);
    if (!window.DocsData) setupData();
    startDocs().then(async () => {
      const load = DEMOS[page];
      if (load) (await load()).default();
    });
  }, [page]);
  return null;
}
