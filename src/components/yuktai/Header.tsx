"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChatIcon, GlobeIcon } from "@yuktishaalaa/yuktai/icons";
import { YuktaiPreferences, useUiText } from "@yuktishaalaa/yuktai/experience";
import config from "@config";
import { NAV } from "@/data/site";
import { SITE_TEXT } from "@/data/uiText";
import { ask } from "./ask";
import InstallButton from "./InstallButton";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const path = usePathname();
  const { t, lang } = useUiText(SITE_TEXT);
  const here = (href: string) => href.startsWith("/") && !href.includes("#") && href !== "/" && path.startsWith(href);
  return (
    <header className="topbar" data-lang={lang}>
      <div className="topbar-in">
        <Link className="brand" href="/">
          <Logo />
          <span>{config.title}</span>
        </Link>
        <nav className="topnav" aria-label="Main" lang={lang}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={here(n.href) ? "page" : undefined}>{t(n.key)}</Link>
          ))}
        </nav>
        <div className="tools" lang={lang}>
          {config.features.pwa && <InstallButton />}
          {config.features.ask && (
            <button type="button" className="ask-btn" onClick={() => ask()} aria-keyshortcuts="Control+K" aria-label={t("askThisPage")}>
              <ChatIcon size={18} aria-hidden="true" />
              <span className="ask-text">{t("askThisPage")}</span>
              <kbd className="kbd" aria-hidden="true">Ctrl K</kbd>
            </button>
          )}
          {/* Site language (English + 6 Indian languages) and animations: the visitor decides */}
          <YuktaiPreferences icon={<GlobeIcon size={18} aria-hidden="true" />} text={SITE_TEXT} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
