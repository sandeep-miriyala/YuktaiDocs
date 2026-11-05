/* Ask this page: the @yuktishaalaa/ask-page panel on every docs page.
 * The docs answer questions about themselves, with the source highlighted,
 * and nothing leaves the visitor's device.
 *
 * assets/js/ask-page.global.js is a self-hosted copy of the package build
 * (yuktai repo: ask-page/ask-page.global.js). After the package is on npm it
 * can load from jsDelivr instead; self-hosting also keeps it working offline.
 *
 * Opened from the "Ask" button in the top bar or Ctrl + /. The floating
 * launcher is off because the ♿ / 🛠 buttons and "back to top" already
 * use the corners.
 */
(function () {
  "use strict";

  window.YuktaiAskConfig = {
    launcher: false,
    title: "Ask these docs",
    // the docs content; live demos hold sample inputs and outputs, not docs
    root: "main",
    exclude: [".demo", ".out", "[aria-live]"],
    questions: [
      { path: "/", text: "How do I install YuktAI?" },
      { path: "/index.html", text: "How do I install YuktAI?" },
      { path: "/ask", text: "How do I add the Ask page panel?" },
      { path: "/ask.html", text: "How do I add the Ask page panel?" },
      { path: "/grid", text: "How do I add the data grid?" },
      { path: "/grid.html", text: "How do I add the data grid?" },
      { path: "/accessibility", text: "What does the accessibility widget do?" },
      { path: "/accessibility.html", text: "What does the accessibility widget do?" }
    ]
  };

  function panel() { return document.querySelector("yuktai-ask"); }

  function theme() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t === "dark" || t === "light") return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function syncTheme() {
    var el = panel();
    if (el) el.setAttribute("theme", theme());
  }

  document.addEventListener("click", function (e) {
    if (!e.target.closest) return;
    var el = panel();
    if (!el) return;
    if (e.target.closest("#ask-btn") && el.openPanel) el.openPanel();
    // "Try" buttons on the Ask page: open the panel and ask
    var q = e.target.closest("[data-ask]");
    if (q && el.askQuestion) el.askQuestion(q.getAttribute("data-ask"));
  });
  // Home hero: the big "Ask anything" box sends its question to the panel
  document.addEventListener("submit", function (e) {
    var form = e.target.closest && e.target.closest("#hero-ask");
    if (!form) return;
    e.preventDefault();
    var input = form.querySelector("input"), q = input.value.trim(), el = panel();
    if (!el) return;
    if (q && el.askQuestion) { el.askQuestion(q); input.value = ""; }
    else if (el.openPanel) el.openPanel();
  });
  // Ctrl + K (⌘ K on Mac) opens Ask from any page, like most modern docs
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && (e.key === "k" || e.key === "K")) {
      var el = panel();
      if (!el || !el.openPanel) return;
      e.preventDefault();
      el.openPanel();
    }
  });
  document.addEventListener("docs:theme", syncTheme);
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) mq.addEventListener("change", syncTheme);
  }
  // the panel is added by ask-page.global.js on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () { setTimeout(syncTheme, 0); });
  window.addEventListener("load", syncTheme);
})();
