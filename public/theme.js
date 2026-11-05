/* Apply the saved theme before first paint (no flash). Shared with the guide pages. */
document.documentElement.classList.add("js");
try {
  var t = localStorage.getItem("docs-theme");
  if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
} catch (e) {}
