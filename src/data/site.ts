// Everything the site states in one place: versions, numbers, links.
// Change a release here and every page follows.

export const VERSIONS = {
  yuktai: "5.4.0",
  askPage: "1.0.0",
  cli: "1.0.1",
} as const;

export const LINKS = {
  github: "https://github.com/sandeep-miriyala/yuktai",
  npmYuktai: "https://www.npmjs.com/package/@yuktishaalaa/yuktai",
  npmAsk: "https://www.npmjs.com/package/@yuktishaalaa/ask-page",
  npmCli: "https://www.npmjs.com/package/yuktai",
  w3techs: "https://w3techs.com/technologies/overview/javascript_library",
} as const;

export type IconKey =
  | "accessibility" | "grid" | "robot" | "chat" | "tools" | "code" | "hub"
  | "layout" | "wand" | "star" | "dataObject" | "speed" | "install";

// The guides (src/app/(guides)/<name>/page.tsx)
export const GUIDES: { href: string; title: string; text: string; icon: IconKey }[] = [
  { href: "/create/", title: "Create an app", text: "npx yuktai@latest init my-app --yes: Next.js + Rust, a 10 lakh row grid, QA report, icons, lifecycle, Ask and a PWA in one command.", icon: "install" },
  { href: "/accessibility/", title: "Accessibility", text: "Floating ♿ button: contrast, text size, dyslexia font, colour-blind filters, reduced motion, speak on focus.", icon: "accessibility" },
  { href: "/grid/", title: "Data grid", text: "Search, sort, pages, selection, CSV, five themes and keyboard navigation, with the engine and time shown.", icon: "grid" },
  { href: "/agents/", title: "Grid agents", text: "Ask the data in plain words, multi-step tasks, custom rules, WebMCP tools for browser agents.", icon: "robot" },
  { href: "/ask/", title: "Ask page (RAG)", text: "Answers from the page itself with the source highlighted. Nothing is sent anywhere.", icon: "chat" },
  { href: "/page-tools/", title: "Page tools", text: "Copilot, QA report with 15 WCAG checks, form review, design review and voice commands.", icon: "tools" },
  { href: "/nextjs/", title: "Next.js setup", text: "Pick the buttons you want and copy a ready YuktAIWrapper layout for the App Router.", icon: "code" },
  { href: "/python/", title: "Python (pip)", text: "pip install yuktai adds the widget and page tools to Django, Flask and FastAPI.", icon: "hub" },
  { href: "/php/", title: "PHP (Composer)", text: "composer require yuktishaalaa/yuktai for plain PHP, Laravel and WordPress.", icon: "layout" },
  { href: "/jquery/", title: "jQuery", text: "Two script tags on any jQuery site. Live demo with jQuery 1.12 to 4.0.", icon: "wand" },
  { href: "/icons/", title: "Icon studio", text: "Every YuktAI icon at any size and colour. Copy React or HTML, download PNG or SVG.", icon: "star" },
  { href: "/playground/", title: "Function playground", text: "Run the core functions on your own input and copy the call.", icon: "dataObject" },
  { href: "/rust/", title: "Rust engines", text: "Rust compiled to WebAssembly for grid search and page RAG. Time it against TypeScript.", icon: "speed" },
];

// Six ways in. One line each.
export const STACKS = [
  { badge: "JS", name: "JavaScript / HTML", code: `<script src="https://cdn.jsdelivr.net/npm/@yuktishaalaa/yuktai@${VERSIONS.yuktai}/vanilla/index.min.js"></script>`, href: "/#start", tone: "js" },
  { badge: "TS", name: "React / Next.js", code: `npm i @yuktishaalaa/yuktai@${VERSIONS.yuktai}`, href: "/nextjs/", tone: "ts" },
  { badge: "$", name: "jQuery 1.12 – 4.0", code: `yuktai.renderGrid($("#staff")[0], { data, columns })`, href: "/jquery/", tone: "jq" },
  { badge: "Py", name: "Python", code: "pip install yuktai", href: "/python/", tone: "py" },
  { badge: "PHP", name: "PHP / Laravel / WordPress", code: "composer require yuktishaalaa/yuktai", href: "/php/", tone: "php" },
  { badge: "Rs", name: "Rust → WebAssembly", code: `engine: "rust"   // the default since 5.3.11`, href: "/rust/", tone: "rs" },
] as const;

// W3Techs, share of all websites (November 2026)
export const WEB_SHARE = [
  { name: "jQuery", value: 64.2, how: "Two script tags" },
  { name: "Bootstrap", value: 14.5, how: "One script tag" },
  { name: "React", value: 6.0, how: "React components" },
] as const;

// Automated tests run before a release
export const TESTS = [
  { name: "TypeScript unit (Vitest)", value: 59, tone: "c1" },
  { name: "Rust (cargo)", value: 13, tone: "c2" },
  { name: "Browser end-to-end", value: 16, tone: "c3" },
  { name: "Strict CSP + extension", value: 4, tone: "c4" },
] as const;
export const TEST_TOTAL = TESTS.reduce((n, t) => n + t.value, 0);

export const STATS = [
  { value: String(STACKS.length), label: "languages and stacks" },
  { value: String(TEST_TOTAL), label: "automated tests per release" },
  { value: "163", label: "accessible icons" },
  { value: "0", label: "servers, API keys or tracking" },
];

export const STEPS = [
  { title: "Reads the page", text: "Headings, paragraphs, lists and tables" },
  { title: "Searches with BM25", text: "Rust compiled to WebAssembly" },
  { title: "Quotes the best part", text: "With the source highlighted" },
  { title: "Stays on the device", text: "0 bytes sent anywhere" },
];

export const COMPARE: [string, string, string][] = [
  ["Where it runs", "Visitor's browser", "Vendor's servers"],
  ["Cost", "Free, open source", "Monthly plan or per-question fees"],
  ["API key", "None", "Required"],
  ["Visitor data sent", "Nothing", "Questions and page text"],
  ["Works offline", "After the first load", "No"],
  ["Strict CSP sites", "Trusted Types ready", "Often blocked"],
  ["Accessibility widget", "Included", "Usually separate"],
];

export const QUESTIONS = [
  { label: "How do I install?", ask: "How do I install YuktAI?" },
  { label: "Is my data safe?", ask: "Is my data sent to a server?" },
  { label: "Works with jQuery?", ask: "Does it work with jQuery?" },
  { label: "Why Rust?", ask: "Why does YuktAI use Rust?" },
];

// The npm packages: the CLI that made this site, and the two libraries it runs on (all in package.json)
export const PACKAGES: readonly {
  name: string; version: string; text: string; install: string; npm: string; onThisSite: string; icon: IconKey;
  cdn?: string; guide?: string; cli?: boolean;
}[] = [
  {
    name: "yuktai",
    version: VERSIONS.cli,
    text: "Create a YuktAI app in one command: Next.js + Rust, a 10 lakh row grid with the Grid AI Assistant (🎤 voice, 24 languages, WebMCP), QA report, icons guide, 🎨 colour and font picker, lifecycle hooks, Ask this page and a complete PWA. Host it anywhere for free.",
    install: "npx yuktai@latest init my-app --yes",
    npm: LINKS.npmCli,
    guide: "/create/",
    onThisSite: "this site was created with it",
    icon: "install",
    cli: true,
  },
  {
    name: "@yuktishaalaa/yuktai",
    version: VERSIONS.yuktai,
    text: "Accessibility, AI and data toolkit for Next.js, React and plain HTML: WCAG 2.2 auto-fix, agentic data grid, accessibility copilot, QA reports, page RAG and 163 icons. Rust engines in WebAssembly. Zero API keys.",
    install: `npm i @yuktishaalaa/yuktai@${VERSIONS.yuktai}`,
    npm: LINKS.npmYuktai,
    cdn: `https://www.jsdelivr.com/package/npm/@yuktishaalaa/yuktai`,
    onThisSite: "♿ and 🛠 buttons, the data grid, agents, icon studio, every icon",
    icon: "accessibility",
  },
  {
    name: "@yuktishaalaa/ask-page",
    version: VERSIONS.askPage,
    text: "Ask any web page. A side panel that answers from the page itself with sources highlighted. Rust/WASM search, on-device AI, WebMCP tools, nothing sent anywhere.",
    install: `npm i @yuktishaalaa/ask-page@${VERSIONS.askPage}`,
    npm: LINKS.npmAsk,
    cdn: `https://www.jsdelivr.com/package/npm/@yuktishaalaa/ask-page`,
    onThisSite: "\"Ask these docs\", the hero box and Ctrl + K",
    icon: "chat",
  },
];

// The header menu (src/components/yuktai/Header.tsx)
export const NAV = [
  { href: "/#guides", label: "Docs" },
  { href: "/create/", label: "Create an app" },
  { href: "/#packages", label: "Packages" },
  { href: "/#why", label: "Why YuktAI" },
  { href: "/about/", label: "How it's built" },
  { href: LINKS.github, label: "GitHub" },
];
