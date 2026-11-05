"use client";

import { useEffect, type ReactNode } from "react";
import { YuktAIWrapper } from "@yuktishaalaa/yuktai";
import { ask, askPanel } from "./ask";

function currentTheme() {
  const t = document.documentElement.getAttribute("data-theme");
  if (t === "dark" || t === "light") return t;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * YuktAI on every page, straight from npm:
 *  • @yuktishaalaa/yuktai  → ♿ accessibility and 🛠 page tools (YuktAIWrapper)
 *  • @yuktishaalaa/ask-page → "Ask these docs" panel, opened by the header, the hero or Ctrl + K
 */
export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    let cancelled = false;
    import("@yuktishaalaa/ask-page").then(({ mountAskPage }) => {
      if (cancelled || askPanel()) return;
      const el = mountAskPage({
        launcher: false,
        title: "Ask these docs",
        root: "main",
        exclude: [".no-ask", "[aria-hidden=true]"],
      });
      el.setAttribute("theme", currentTheme());
    });

    const sync = () => askPanel()?.setAttribute("theme", currentTheme());
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        ask();
      }
    };
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    document.addEventListener("docs:theme", sync);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", sync);
    return () => {
      cancelled = true;
      document.removeEventListener("docs:theme", sync);
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", sync);
    };
  }, []);

  return (
    <YuktAIWrapper position="left" launcher showAccessibility showPageTools engine="rust">
      {children}
    </YuktAIWrapper>
  );
}
