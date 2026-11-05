"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { ChatIcon, MoonIcon, NamaskarIcon, SunIcon } from "@yuktishaalaa/yuktai/icons";
import InstallButton from "./InstallButton";
import { LINKS } from "@/data/site";
import { ask } from "./ask";

// The theme lives on <html data-theme>; this reads it and follows changes.
function isDark() {
  const t = document.documentElement.getAttribute("data-theme");
  return t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function subscribe(onChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  document.addEventListener("docs:theme", onChange);
  mq.addEventListener("change", onChange);
  return () => {
    document.removeEventListener("docs:theme", onChange);
    mq.removeEventListener("change", onChange);
  };
}

export default function Header() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  function toggleTheme() {
    const next = isDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("docs-theme", next); } catch {}
    document.dispatchEvent(new Event("docs:theme"));
  }

  return (
    <header className="topbar">
      <div className="topbar-in">
        <Link className="brand" href="/">
          <span className="brandmark" aria-hidden="true"><NamaskarIcon size={22} /></span>
          <span>YuktaiDocs</span>
        </Link>
        <nav className="topnav" aria-label="Main">
          <Link href="/#guides">Docs</Link>
          <Link href="/#packages">Packages</Link>
          <Link href="/#stacks">Languages</Link>
          <Link href="/#why">Why YuktAI</Link>
          <Link href="/about/">How it&apos;s built</Link>
          <a href={LINKS.github}>GitHub</a>
        </nav>
        <div className="tools">
          <InstallButton />
          <button type="button" className="ask-btn" onClick={() => ask()} aria-keyshortcuts="Control+K">
            <ChatIcon size={18} aria-hidden="true" />
            <span className="ask-text">Ask these docs…</span>
            <kbd className="kbd" aria-hidden="true">Ctrl K</kbd>
          </button>
          <button type="button" className="icon-btn" onClick={toggleTheme} aria-pressed={dark} aria-label="Dark theme">
            {dark ? <SunIcon size={20} aria-hidden="true" /> : <MoonIcon size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
