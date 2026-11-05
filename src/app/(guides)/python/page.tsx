// python: moved from python.html to a Next.js route. The live demos run the same scripts as before.
import type { Metadata } from "next";
import GuideScripts from "@/components/guides/GuideScripts";

export const metadata: Metadata = {
  title: "Python (pip) · YuktaiDocs",
  description: "pip install yuktai: add the YuktAI accessibility widget, page tools and data grid to Django, Flask and FastAPI pages in one line.",
};

export default function PythonPage() {
  return (
    <>
      {" "}
<div className={"page-head"}>{" "}
<p className={"kicker"}><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-hub"} /></svg>{"Python (pip)"}</p>{" "}
<h1>{"YuktAI for Python"}</h1><p className={"lead"}>{"The "}<code>{"yuktai"}</code>{" package adds YuktAI to pages made by Django, Flask or FastAPI in one line: the ♿ accessibility widget, the 🛠 page tools and everything in "}<code>{"window.yuktai"}</code>{". YuktAI still runs in the visitor's browser. The package only writes the right script tags for you."}</p></div>{" "}
<ul className={"checks"}>{" "}
<li><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-check"} /></svg><span>{"No dependencies, Python 3.9 or newer."}</span></li>{" "}
<li><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-check"} /></svg><span>{"No API keys, no server calls, no telemetry."}</span></li>{" "}
<li><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-check"} /></svg><span>{"Same features and options as the npm package and the script tag."}</span></li>{" "}
</ul>{" "}
<h2 id={"install"}>{"1. Install"}</h2>{" "}
<div className={"codetabs"}><div className={"codefile"}><div className={"codehead"}><span className={"file"} id={"py-install-name"}>{"Terminal"}</span><button type={"button"} className={"copy-btn"} data-what={"Terminal"}><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-copy"} /></svg><span className={"copy-label"}>{"Copy"}</span><span className={"sr-only"}>{" Terminal"}</span></button></div><pre><code id={"py-install"}>{"pip install yuktai"}</code></pre></div></div>{" "}
<p className={"hint"}>{"On PyPI: "}<a href={"https://pypi.org/project/yuktai/"} target={"_blank"} rel={"noopener noreferrer"}>{"pypi.org/project/yuktai"}<span className={"sr-only"}>{" (opens in a new tab)"}</span></a></p>{" "}
<h2 id={"flask"}>{"2. Flask"}</h2>{" "}
<div className={"codetabs"}><div className={"codefile"}><div className={"codehead"}><span className={"file"} id={"py-flask-name"}>{"app.py"}</span><button type={"button"} className={"copy-btn"} data-what={"app.py"}><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-copy"} /></svg><span className={"copy-label"}>{"Copy"}</span><span className={"sr-only"}>{" app.py"}</span></button></div><pre><code id={"py-flask"}>{"from flask import Flask\nimport yuktai\n\napp = Flask(__name__)\nyuktai.init_app(app, position=\"right\", show_page_tools=True)"}</code></pre></div>{" "}
<div className={"codefile"}><div className={"codehead"}><span className={"file"} id={"py-flask-tpl-name"}>{"templates/base.html (before </body>)"}</span><button type={"button"} className={"copy-btn"} data-what={"templates/base.html (before </body>)"}><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-copy"} /></svg><span className={"copy-label"}>{"Copy"}</span><span className={"sr-only"}>{" templates/base.html (before </body>)"}</span></button></div><pre><code id={"py-flask-tpl"}>{"{{ yuktai_script() }}"}</code></pre></div></div>{" "}
<h2 id={"fastapi"}>{"3. FastAPI"}</h2>{" "}
<div className={"codetabs"}><div className={"codefile"}><div className={"codehead"}><span className={"file"} id={"py-fastapi-name"}>{"main.py"}</span><button type={"button"} className={"copy-btn"} data-what={"main.py"}><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-copy"} /></svg><span className={"copy-label"}>{"Copy"}</span><span className={"sr-only"}>{" main.py"}</span></button></div><pre><code id={"py-fastapi"}>{"from fastapi.templating import Jinja2Templates\nimport yuktai\n\ntemplates = Jinja2Templates(directory=\"templates\")\nyuktai.init_jinja(templates.env, show_page_tools=True)"}</code></pre></div>{" "}
<div className={"codefile"}><div className={"codehead"}><span className={"file"} id={"py-fastapi-tpl-name"}>{"templates/base.html (before </body>)"}</span><button type={"button"} className={"copy-btn"} data-what={"templates/base.html (before </body>)"}><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-copy"} /></svg><span className={"copy-label"}>{"Copy"}</span><span className={"sr-only"}>{" templates/base.html (before </body>)"}</span></button></div><pre><code id={"py-fastapi-tpl"}>{"{{ yuktai_script() }}"}</code></pre></div></div>{" "}
<h2 id={"django"}>{"4. Django"}</h2>{" "}
<div className={"codetabs"}><div className={"codefile"}><div className={"codehead"}><span className={"file"} id={"py-django-name"}>{"settings.py"}</span><button type={"button"} className={"copy-btn"} data-what={"settings.py"}><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-copy"} /></svg><span className={"copy-label"}>{"Copy"}</span><span className={"sr-only"}>{" settings.py"}</span></button></div><pre><code id={"py-django"}>{"INSTALLED_APPS = [\n    # ...\n    \"yuktai\",\n]\n\n# optional defaults for every page\nYUKTAI = {\"position\": \"right\", \"show_page_tools\": True}"}</code></pre></div>{" "}
<div className={"codefile"}><div className={"codehead"}><span className={"file"} id={"py-django-tpl-name"}>{"templates/base.html (before </body>)"}</span><button type={"button"} className={"copy-btn"} data-what={"templates/base.html (before </body>)"}><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-copy"} /></svg><span className={"copy-label"}>{"Copy"}</span><span className={"sr-only"}>{" templates/base.html (before </body>)"}</span></button></div><pre><code id={"py-django-tpl"}>{"{% load yuktai_tags %}\n{% yuktai_script %}"}</code></pre></div></div>{" "}
<p>{"Change options for one page: "}<code>{"{% yuktai_script default_tab=\"ask\" %}"}</code></p>{" "}
<h2 id={"any"}>{"5. Any other Python code"}</h2>{" "}
<div className={"codetabs"}><div className={"codefile"}><div className={"codehead"}><span className={"file"} id={"py-any-name"}>{"any.py"}</span><button type={"button"} className={"copy-btn"} data-what={"any.py"}><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-copy"} /></svg><span className={"copy-label"}>{"Copy"}</span><span className={"sr-only"}>{" any.py"}</span></button></div><pre><code id={"py-any"}>{"import yuktai\n\nhtml = yuktai.script_tag(position=\"right\", show_page_tools=True, voice_lang=\"te-IN\")\n# put html just before </body>"}</code></pre></div></div>{" "}
<p>{"The result is ready HTML: a small "}<code>{"window.YUKTAI_CONFIG"}</code>{" script (only when you pass options) and the YuktAI script from jsDelivr."}</p>{" "}
<h2 id={"options"}>{"Options"}</h2>{" "}
<table className={"ref"}><caption>{"Arguments of "}<code>{"script_tag()"}</code>{" and "}<code>{"yuktai_script"}</code></caption><thead><tr><th scope={"col"}>{"Option"}</th><th scope={"col"}>{"What it does"}</th></tr></thead><tbody><tr><td>{"version"}</td><td>{"YuktAI release to load. The package pins a tested release; "}<code>{"\"latest\""}</code>{" follows new releases."}</td></tr><tr><td>{"position"}</td><td><code>{"\"left\""}</code>{" or "}<code>{"\"right\""}</code></td></tr><tr><td>{"primary_color"}</td><td>{"Button colour, for example "}<code>{"\"#0a4a85\""}</code></td></tr><tr><td>{"title"}</td><td>{"Title of the settings dialog (Telugu works)"}</td></tr><tr><td>{"show_page_tools"}</td><td>{"Adds the 🛠 page tools button"}</td></tr><tr><td>{"default_tab"}</td><td><code>{"copilot"}</code>{", "}<code>{"qa"}</code>{", "}<code>{"forms"}</code>{", "}<code>{"design"}</code>{", "}<code>{"ask"}</code>{" or "}<code>{"voice"}</code></td></tr><tr><td>{"voice_lang"}</td><td>{"Speech language, for example "}<code>{"\"te-IN\""}</code></td></tr><tr><td>{"auto_fix, show_skip_links"}</td><td>{"Accessibility engine options"}</td></tr><tr><td>{"extra"}</td><td>{"Any other "}<code>{"YUKTAI_CONFIG"}</code>{" key, as a dict"}</td></tr><tr><td>{"cdn"}</td><td><code>{"\"jsdelivr\""}</code>{" (default) or "}<code>{"\"unpkg\""}</code></td></tr><tr><td>{"nonce"}</td><td>{"For pages with a Content Security Policy"}</td></tr></tbody></table>{" "}
<h2 id={"safety"}>{"Safe by design"}</h2>{" "}
<div className={"grid2"}>{" "}
<div className={"card"}><h3><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-shieldCheck"} /></svg>{" Safe JSON"}</h3><p>{"Options are written as JSON with "}<code>{"<"}</code>{", "}<code>{">"}</code>{" and "}<code>{"&"}</code>{" escaped, so a value like "}<code>{"</script>"}</code>{" can't break out of the tag."}</p></div>{" "}
<div className={"card"}><h3><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-check"} /></svg>{" Checked values"}</h3><p>{"Position, colour, tab, version, CDN and nonce are checked. A wrong value raises "}<code>{"ValueError"}</code>{" instead of writing broken HTML."}</p></div>{" "}
<div className={"card"}><h3><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-lock"} /></svg>{" CSP ready"}</h3><p>{"Pass "}<code>{"nonce="}</code>{" and both script tags get it. Add "}<code>{"cdn.jsdelivr.net"}</code>{" to "}<code>{"script-src"}</code>{", and "}<code>{"'wasm-unsafe-eval'"}</code>{" for the Rust engines."}</p></div>{" "}
<div className={"card"}><h3><svg className={"i"} aria-hidden={"true"} focusable={"false"}><use href={"/assets/icons.svg#i-code"} /></svg>{" Not escaped twice"}</h3><p>{"The tag is marked safe for Jinja2 and Django, so autoescaping does not turn it into text."}</p></div>{" "}
</div>{" "}
<h2 id={"next"}>{"Coming next"}</h2>{" "}
<p>{"Version 0.2 brings YuktAI's "}<a href={"/rust/"}>{"Rust engines"}</a>{" to Python: fast grid search and the BM25 index for page RAG, with the same results as in the browser."}</p>{" "}

      <GuideScripts scripts={["/assets/js/data.js"]} />
    </>
  );
}
