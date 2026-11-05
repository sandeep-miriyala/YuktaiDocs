"use client";

import { useEffect } from "react";

// The live demos on the guide pages are the same scripts as on the earlier site.
// They run in order after the page is on screen: settings, the shared helpers
// (which load YuktAI from jsDelivr), then the page's own demo script.
const SHARED = ["/assets/js/config.js", "/assets/js/site-next.js"];

export default function GuideScripts({ scripts }: { scripts: string[] }) {
  useEffect(() => {
    const added: HTMLScriptElement[] = [];
    for (const src of [...SHARED, ...scripts]) {
      if (document.querySelector(`script[data-guide="${src}"]`)) continue;
      const s = document.createElement("script");
      s.src = src;
      s.async = false; // keep the order
      s.dataset.guide = src;
      document.body.appendChild(s);
      added.push(s);
    }
    return () => added.forEach((s) => s.remove());
  }, [scripts]);
  return null;
}
