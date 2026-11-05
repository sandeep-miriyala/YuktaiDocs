import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { LINKS, VERSIONS } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "YuktaiDocs: docs that answer you, right in your browser",
  description:
    "YuktAI: open-source accessibility widget, data grid, page Q&A and agents with Rust search in WebAssembly. One script tag, no server, no API key.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icons/favicon.svg", apple: "/icons/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#08081a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* the saved light / dark choice, before first paint (same key as the guide pages) */}
        <script src="/theme.js" />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Providers>
          <Header />
          <main id="main" tabIndex={-1}>{children}</main>
          <footer className="footer">
            <div className="wrap footer-in">
              <span>YuktaiDocs · YuktAI {VERSIONS.yuktai} · Ask page {VERSIONS.askPage} · runs in your browser</span>
              <span>
                <a href={LINKS.github}>GitHub</a> · <a href={LINKS.npmYuktai}>npm</a> · <a href={LINKS.npmAsk}>Ask page on npm</a>
              </span>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
