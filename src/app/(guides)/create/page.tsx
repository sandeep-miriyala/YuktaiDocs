import type { Metadata } from "next";
import Link from "next/link";
import GuideDemo from "@/components/guides/GuideDemo";

export const metadata: Metadata = {
  title: "Create an app",
  description: "npx yuktai init my-app --yes: a Next.js + Rust app with a 10 lakh row grid, QA report, icons guide, lifecycle hooks, Ask this page and an installable PWA, in one command.",
};

const OPTIONS: [string, string, string][] = [
  ["--stack", "next-rust, next", "next-rust"],
  ["--template", "docs, starter", "docs"],
  ["--features", "grid, page-tools, icons (comma-separated), or none", "all"],
  ["--host", "netlify, github-pages, none", "netlify"],
  ["--accent", "blue, violet, teal, orange", "blue"],
  ["--title", "any text", "from the folder name"],
  ["--yes", "everything on, no questions", ""],
  ["--no-install, --no-git", "skip npm install or git init", ""],
];

const TREE = `my-app/
├── yuktai.config.ts        settings: name, colours, features
├── rust/                   Rust core → WebAssembly
├── src/
│   ├── app/
│   │   ├── (guides)/       getting started, configuration, lifecycle, deploy
│   │   ├── grid/           10 lakh rows data grid
│   │   ├── qa/             QA report
│   │   ├── icons/          icons guide
│   │   └── about/
│   ├── components/yuktai/  header, logo, widget, Ask, install, theme, lifecycle
│   ├── components/ui/      your components
│   ├── lib/core.ts         calls the Rust core, TypeScript fallback
│   ├── data/               menu and links, orders.ts (sample rows)
│   └── styles/             tokens.css (colours), globals.css
├── public/                 service worker, app icons
├── tests/                  checks for the built site
├── README.md               written for the choices you made
└── netlify.toml  or  .github/workflows/deploy.yml`;

export default function CreatePage() {
  return (
    <>
      <div className="page-head">
        <p className="kicker">Create an app</p>
        <h1>One command, a ready app</h1>
        <p className="lead">
          <code>npx yuktai init</code> makes a Next.js + Rust app with the YuktAI accessibility widget, Ask this page
          (Ctrl + K), 163 icons and an installable PWA. It builds to plain files, so hosting is free. This site was made with it.
        </p>
      </div>

      <h2 id="start">1. Create</h2>
      <pre><code>{`npx yuktai init my-app --yes
cd my-app
npm run dev        # http://localhost:3000`}</code></pre>
      <p>
        <code>--yes</code> skips the questions and turns everything on. Without it you choose the stack, template, features, hosting
        and colour; Enter keeps the recommended choice.
      </p>
      <table className="ref">
        <caption className="sr-only">Pages you get with --yes</caption>
        <thead><tr><th scope="col">Page</th><th scope="col">What it does</th></tr></thead>
        <tbody>
          <tr><td>/grid/</td><td>10 lakh (1,000,000) sample orders made in the browser. Six columns, five data types: text, badge, number, date, yes/no. Search and sort every column in Rust, well under a second.</td></tr>
          <tr><td>/qa/</td><td>15 WCAG 2.2 checks, a score, what to fix and a Markdown report. A practice area with mistakes to try it on.</td></tr>
          <tr><td>/icons/</td><td>Every YuktAI icon: search, size, outline or filled, colour with a contrast check, copy the code.</td></tr>
          <tr><td>/lifecycle/</td><td>The three moments of every part: <code>onStart</code>, <code>onChange</code>, <code>onEnd</code>.</td></tr>
          <tr><td>Every page</td><td>Ask this page (Ctrl + K), the ♿ widget, the 🛠 page tools, Install, light and dark.</td></tr>
        </tbody>
      </table>

      <h2 id="lifecycle">Lifecycle</h2>
      <p>Every part of a YuktAI app has three moments. The hook is in <code>src/components/yuktai/lifecycle.ts</code>:</p>
      <pre><code>{`const life = useLifecycle({
  part: "grid",
  onStart: () => console.log("ready"),      // on the page and ready
  onChange: (what) => console.log(what),    // the visitor changed something
  onEnd: () => console.log("bye"),          // leaving the page: free memory
});

<YuktaiGrid data={rows} columns={columns} onSearchTime={life.change} />`}</code></pre>

      <h2 id="options">2. Options</h2>
      <table className="ref">
          <caption className="sr-only">Options for yuktai init</caption>
          <thead><tr><th scope="col">Option</th><th scope="col">Values</th><th scope="col">Default</th></tr></thead>
          <tbody>
            {OPTIONS.map(([o, v, d]) => (
              <tr key={o}><td>{o}</td><td>{v}</td><td>{d}</td></tr>
            ))}
          </tbody>
      </table>
      <pre><code>{`npx yuktai init shop --template starter --features grid --host github-pages --accent teal`}</code></pre>

      <h2 id="structure">3. What you get</h2>
      <pre><code>{TREE}</code></pre>

      <h2 id="commands">4. Commands inside the app</h2>
      <table className="ref">
          <caption className="sr-only">Commands</caption>
          <thead><tr><th scope="col">Command</th><th scope="col">What it does</th></tr></thead>
          <tbody>
            <tr><td>npm run dev</td><td>Rust → WebAssembly (when <code>rust/</code> exists), then the Next.js dev server</td></tr>
            <tr><td>npm run build</td><td>Rust → WebAssembly, then static files in <code>out/</code></td></tr>
            <tr><td>npm test</td><td>Checks the built site: every page, manifest, language, title, skip link</td></tr>
          </tbody>
      </table>

      <h2 id="rust">5. Rust</h2>
      <p>
        The Rust core lives in <code>rust/src/lib.rs</code>. <code>yuktai build</code> compiles it to WebAssembly and
        <code> src/lib/core.ts</code> calls it, with a TypeScript fallback, so the app always works. To build the Rust part, install
        Rust from rustup.rs once and add the WebAssembly target:
      </p>
      <pre><code>{`rustup target add wasm32-unknown-unknown`}</code></pre>

      <h2 id="deploy">6. Deploy for free</h2>
      <p>
        <strong>Netlify:</strong> push to GitHub and add the repository in Netlify; <code>netlify.toml</code> is already there.{" "}
        <strong>GitHub Pages:</strong> push, then Settings → Pages → Source: GitHub Actions. See also <Link href="/nextjs/">Next.js setup</Link>.
      </p>
      <GuideDemo page="create" />
    </>
  );
}
