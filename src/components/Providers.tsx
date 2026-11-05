"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { YuktAIWrapper } from "@yuktishaalaa/yuktai";
import { ask, askPanel } from "./ask";

function currentTheme() {
  const t = document.documentElement.getAttribute("data-theme");
  if (t === "dark" || t === "light") return t;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * YuktAI on every page, straight from npm:
 *  • @yuktishaalaa/yuktai  → ♿ accessibility and 🛠 page tools (YuktAIWrapper) on the home page.
 *    The guides load the vanilla build for their live demos, and it adds the same buttons there.
 *  • @yuktishaalaa/ask-page → "Ask these docs" panel, opened by the header, the hero or Ctrl + K
 */
export default function Providers({ children }: { children: ReactNode }) {
  const home = usePathname() === "/";
  useEffect(() => {
    let cancelled = false;
    import("@yuktishaalaa/ask-page").then(({ mountAskPage }) => {
      if (cancelled || askPanel()) return;
      const el = mountAskPage({
        launcher: false,
        title: "Ask these docs",
        root: "main",
        // live demos hold sample inputs and outputs, not docs
        exclude: [".no-ask", "[aria-hidden=true]", ".demo", ".out", "[aria-live]"],
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
    // "Try" buttons on the guides: <button data-ask="question">
    const onClick = (e: MouseEvent) => {
      const b = (e.target as Element | null)?.closest?.("[data-ask]");
      if (b) ask(b.getAttribute("data-ask") ?? "");
    };
    // offline support: the whole site works after the first visit
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    document.addEventListener("docs:theme", sync);
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    mq.addEventListener("change", sync);
    return () => {
      cancelled = true;
      document.removeEventListener("docs:theme", sync);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      mq.removeEventListener("change", sync);
    };
  }, []);

  if (!home) return <>{children}</>;
  return (
    <YuktAIWrapper position="left" launcher showAccessibility showPageTools engine="rust">
      {children}
    </YuktAIWrapper>
  );
}
