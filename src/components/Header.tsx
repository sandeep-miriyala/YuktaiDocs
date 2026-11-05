"use client";

import { useEffect, useState } from "react";
import { ChatIcon, MoonIcon, SunIcon } from "@yuktishaalaa/yuktai/icons";
import { LINKS, VERSIONS } from "@/data/site";
import { ask } from "./ask";

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme");
    setDark(t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  function toggleTheme() {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("docs-theme", next); } catch {}
    setDark(!dark);
    document.dispatchEvent(new Event("docs:theme"));
  }

  return (
    <header className="topbar">
      <div className="topbar-in">
        <a className="brand" href="/">
          <span className="brandmark" aria-hidden="true">Y</span>
          <span>YuktaiDocs</span>
        </a>
        <span className="ver-chip">YuktAI {VERSIONS.yuktai} · Ask page {VERSIONS.askPage}</span>
        <nav className="topnav" aria-label="Main">
          <a href="/#guides">Docs</a>
          <a href="/#stacks">Languages</a>
          <a href="/#why">Why YuktAI</a>
          <a href={LINKS.github}>GitHub</a>
        </nav>
        <div className="tools">
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
