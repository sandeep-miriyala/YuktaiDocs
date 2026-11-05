import { CheckIcon, ArrowRightIcon } from "@yuktishaalaa/yuktai/icons";
import {
  COMPARE, GUIDES, LINKS, STACKS, STATS, STEPS, TESTS, TEST_TOTAL, VERSIONS, WEB_SHARE,
} from "@/data/site";
import { GuideIcon } from "../Icon";

function Kicker({ children }: { children: string }) {
  return <p className="kicker">{children}</p>;
}

export function Stats() {
  return (
    <section className="wrap stats" aria-label="At a glance">
      {STATS.map((s) => (
        <div key={s.label} className="stat">
          <span className="num grad">{s.value}</span>
          <span>{s.label}</span>
        </div>
      ))}
    </section>
  );
}

export function Stacks() {
  return (
    <section id="stacks" className="band">
      <div className="wrap">
        <Kicker>Languages</Kicker>
        <h2>One toolkit, six ways in</h2>
        <p className="lead">The same core runs everywhere. Pick your stack and copy one line.</p>
        <ul className="stack-grid">
          {STACKS.map((s) => (
            <li key={s.name} className={`stack ${s.tone === "rs" ? "is-rust" : ""}`}>
              <a href={s.href}>
                <span className={`badge t-${s.tone}`} aria-hidden="true">{s.badge}</span>
                <strong>{s.name}</strong>
                <ArrowRightIcon size={18} aria-hidden="true" />
              </a>
              <code>{s.code}</code>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Charts() {
  return (
    <section id="why" className="wrap charts">
      <figure className="panel">
        <h3>Works where the web already is</h3>
        <figcaption>Share of all websites using each library. YuktAI plugs into all three.</figcaption>
        <ul className="bars">
          {WEB_SHARE.map((b) => (
            <li key={b.name}>
              <div className="bar-head"><strong>{b.name}</strong><span>{b.value.toFixed(1)}%</span></div>
              <div className="bar-track" aria-hidden="true"><div className="bar-fill" style={{ width: `${b.value}%` }} /></div>
              <span className="bar-note">{b.how}</span>
            </li>
          ))}
        </ul>
        <p className="source">Source: <a href={LINKS.w3techs}>W3Techs</a>, November 2026</p>
      </figure>

      <figure className="panel">
        <h3>Tested before every release</h3>
        <figcaption>{TEST_TOTAL} automated tests across Rust, TypeScript and real Chromium.</figcaption>
        <div className="stack-bar" aria-hidden="true">
          {TESTS.map((t) => (
            <div key={t.name} className={t.tone} style={{ width: `${(t.value / TEST_TOTAL) * 100}%` }} />
          ))}
        </div>
        <ul className="legend">
          {TESTS.map((t) => (
            <li key={t.name}><span className={`sw ${t.tone}`} aria-hidden="true" /><span>{t.name}</span><strong>{t.value}</strong></li>
          ))}
        </ul>
      </figure>
    </section>
  );
}

export function Pipeline() {
  return (
    <section className="wrap">
      <Kicker>How it works</Kicker>
      <h2>How an answer is made</h2>
      <ol className="steps">
        {STEPS.map((s, i) => (
          <li key={s.title} className={i === STEPS.length - 1 ? "last" : ""}>
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            <strong>{s.title}</strong>
            <span>{s.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Compare() {
  return (
    <section className="wrap">
      <Kicker>Why YuktAI</Kicker>
      <h2>AI help on your site, without sending anything away</h2>
      <div className="table-box">
        <table className="compare">
          <thead>
            <tr><td /><th scope="col" className="us">YuktAI</th><th scope="col">Typical cloud AI widget</th></tr>
          </thead>
          <tbody>
            {COMPARE.map(([row, us, them]) => (
              <tr key={row}>
                <th scope="row">{row}</th>
                <td><span className="yes"><CheckIcon size={16} aria-hidden="true" />{us}</span></td>
                <td className="them">{them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Guides() {
  return (
    <section id="guides" className="wrap">
      <Kicker>Guides</Kicker>
      <h2>Pick what you need</h2>
      <ul className="guide-grid">
        {GUIDES.map((g) => (
          <li key={g.href}>
            <a className="guide" href={g.href}>
              <span className="iconbox"><GuideIcon name={g.icon} /></span>
              <strong>{g.title}</strong>
              <span>{g.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Start() {
  return (
    <section id="start" className="wrap">
      <div className="cta">
        <div>
          <h2>Add it in two lines</h2>
          <p>Free on npm and jsDelivr. This site is Next.js, hosted free on Netlify.</p>
        </div>
        <pre><code>{`<script src="https://cdn.jsdelivr.net/npm/@yuktishaalaa/yuktai@${VERSIONS.yuktai}/vanilla/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuktishaalaa/ask-page@${VERSIONS.askPage}/dist/ask-page.global.js"></script>`}</code></pre>
      </div>
    </section>
  );
}
