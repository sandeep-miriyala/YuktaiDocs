import Link from "next/link";
import type { Metadata, Viewport } from "next";
import config from "@config";
import Analytics from "@/components/ui/Analytics";
import Header from "@/components/yuktai/Header";
import Providers from "@/components/yuktai/Providers";
import BackToTop from "@/components/yuktai/BackToTop";
import { INSTALL_SCRIPT, THEME_SCRIPT } from "@/components/yuktai/theme";
import { MOTION_SCRIPT, SPLASH_SCRIPT } from "@yuktishaalaa/yuktai/head";
import { YuktaiSplash } from "@yuktishaalaa/yuktai/experience";
import { LINKS, VERSIONS } from "@/data/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: { default: "YuktaiDocs: docs that answer you, right in your browser", template: `%s · ${config.title}` },
  description: config.description,
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000633" },
    { media: "(prefers-color-scheme: dark)", color: "#08081a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT + MOTION_SCRIPT + SPLASH_SCRIPT + INSTALL_SCRIPT }} />
      </head>
      <body>
        {/* Loading screen: the banner and "Welcome" in 7 languages, once per tab */}
        <YuktaiSplash
          title={config.title}
          logo={
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="hero-banner-light" src="/brand/yuktai-logo-light.svg" alt="" width={588} height={176} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="hero-banner-dark" src="/brand/yuktai-logo-dark.svg" alt="" width={620} height={208} />
            </>
          }
        />
        <a className="skip" href="#main">Skip to content</a>
        <Providers>
          <Header />
          <main id="main" tabIndex={-1}>{children}</main>
          <footer className="footer">
            <div className="wrap footer-in">
              <span>YuktaiDocs · YuktAI {VERSIONS.yuktai} · Ask page {VERSIONS.askPage} · made with <code>npx yuktai init</code></span>
              <span>
                <Link href="/about/">How this site is built</Link> · <a href={LINKS.github}>GitHub</a> · <a href={LINKS.npmYuktai}>npm</a> · <a href={LINKS.npmAsk}>Ask page on npm</a>
              </span>
            </div>
          </footer>
          <BackToTop />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
