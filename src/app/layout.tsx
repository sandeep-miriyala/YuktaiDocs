import Link from "next/link";
import type { Metadata, Viewport } from "next";
import config from "@config";
import Analytics from "@/components/ui/Analytics";
import Header from "@/components/yuktai/Header";
import Providers from "@/components/yuktai/Providers";
import { THEME_SCRIPT } from "@/components/yuktai/theme";
import { LINKS, VERSIONS } from "@/data/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: { default: "YuktaiDocs: docs that answer you, right in your browser", template: `%s · ${config.title}` },
  description: config.description,
  manifest: "/manifest.json",
  icons: {
    icon: [
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
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
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
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
