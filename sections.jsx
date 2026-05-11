// Sinocircuit — section components. Loaded after copy.js and React/Babel.
const { useState, useEffect, useMemo } = React;

const Eyebrow = ({ children }) =>
<div className="sc-eyebrow">
    <span className="sc-eyebrow__dot"></span>
    <span>{children}</span>
  </div>;


const SectionMast = ({ kicker, title, sub, num }) =>
<header className="sc-mast">
    <div className="sc-mast__row">
      <span className="sc-mast__num">{num}</span>
      <span className="sc-mast__kicker">{kicker}</span>
    </div>
    <h2 className="sc-mast__title">{title}</h2>
    {sub && <p className="sc-mast__sub">{sub}</p>}
  </header>;


// ---------- HERO ----------
function Hero({ t, onBook }) {
  return (
    <section className="sc-hero" data-screen-label="01 Hero">
      <div className="sc-hero__grid">
        <div className="sc-hero__left">
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <h1 className="sc-hero__title">
            <span className="sc-hero__t1">{t.hero.titleA}</span>
            <span className="sc-hero__t2"> {t.hero.titleB}</span>
          </h1>
          <p className="sc-hero__lede">{t.hero.lede}</p>
          <div className="sc-hero__ctas">
            <button className="sc-btn sc-btn--primary" onClick={onBook}>{t.hero.ctaPrimary} <span aria-hidden="true">→</span></button>
            <a className="sc-btn sc-btn--ghost" href="#cases">{t.hero.ctaSecondary}</a>
          </div>
        </div>
        <aside className="sc-hero__right" aria-hidden="true">
          <div className="sc-globe-frame" aria-hidden="true">
            <iframe title="Desk globe animation" src="globe.html" frameBorder="0" scrolling="no"></iframe>
          </div>
          <div className="sc-card sc-card--ledger">
            <div className="sc-ledger__head">
              <span>SC / DESK LEDGER</span>
              <span>2026 · Q2</span>
            </div>
            <ul className="sc-ledger__list">
              <li><span className="sc-ledger__k">SZX</span><span className="sc-ledger__v">Active engagements · 9</span></li>
              <li><span className="sc-ledger__k">GBA</span><span className="sc-ledger__v">Site visits this month · 14</span></li>
              <li><span className="sc-ledger__k">FX</span><span className="sc-ledger__v">USD / CNY · 7.18</span></li>
              <li><span className="sc-ledger__k">CTR</span><span className="sc-ledger__v">Contracts in arbitration · 0</span></li>
              <li><span className="sc-ledger__k">REF</span><span className="sc-ledger__v">Vetted factory roster · 142</span></li>
            </ul>
            <div className="sc-ledger__foot">
              <span className="sc-pulse"></span>
              <span>On the ground · Shenzhen</span>
            </div>
          </div>
        </aside>
      </div>
      <figure className="sc-hero__sky" aria-hidden="true">
        <img src="assets/shenzhen-dusk.jpg" alt="Shenzhen skyline at dusk" />
        <div className="sc-hero__sky-tick">
          <span>22.5431° N · 114.0579° E</span>
          <span>· Shenzhen / Futian</span>
        </div>
        <figcaption className="sc-hero__sky-cap">
          <span><b>The desk</b> · Pearl River Delta</span>
          <span>Live · GMT+8</span>
        </figcaption>
      </figure>
      <div className="sc-stats">
        {[
        [t.hero.stat1V, t.hero.stat1L],
        [t.hero.stat2V, t.hero.stat2L],
        [t.hero.stat3V, t.hero.stat3L],
        [t.hero.stat4V, t.hero.stat4L]].
        map(([v, l], i) =>
        <div className="sc-stat" key={i}>
            <div className="sc-stat__v">{v}</div>
            <div className="sc-stat__l">{l}</div>
          </div>
        )}
      </div>
    </section>);

}

// ---------- PILLARS ----------
function Pillars({ t }) {
  return (
    <section className="sc-section" id="services" data-screen-label="02 Services">
      <SectionMast num="§ 01" kicker={t.pillars.kicker} title={t.pillars.title} sub={t.pillars.sub} />
      <div className="sc-pillars">
        {t.pillars.items.map((it, i) =>
        <article className="sc-pillar" key={i}>
            <header className="sc-pillar__head">
              <span className="sc-pillar__n">{it.n}</span>
              <span className="sc-pillar__tag">{it.tag}</span>
            </header>
            <h3 className="sc-pillar__h">{it.h}</h3>
            <p className="sc-pillar__p">{it.p}</p>
            <ul className="sc-pillar__list">
              {it.deliverables.map((d, j) =>
            <li key={j}><span className="sc-pillar__bullet">▸</span>{d}</li>
            )}
            </ul>
          </article>
        )}
      </div>
    </section>);

}

// ---------- SHOWPIECE 1: DIAGNOSTIC ----------
function Diagnostic({ t }) {
  const samples = ["Luoyang Gaohua Env. Cooling", "Shenzhen Yixin Tech", "Changzhou VRcooler Refrig."];
  const [name, setName] = useState(samples[0]);
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    setRevealed(0);
    const id = setInterval(() => {
      setRevealed((r) => r >= t.diag.checks.length ? r : r + 1);
    }, 180);
    return () => clearInterval(id);
  }, [name, t]);

  const show = revealed >= t.diag.checks.length;

  return (
    <section className="sc-section sc-section--ink" id="diag" data-screen-label="03 Diagnostic">
      <SectionMast num="§ 02" kicker={t.diag.kicker} title={t.diag.title} sub={t.diag.sub} />
      <div className="sc-diag">
        <div className="sc-diag__controls">
          <label className="sc-diag__label">Supplier</label>
          <div className="sc-diag__pills">
            {samples.map((s) =>
            <button
              key={s}
              onClick={() => setName(s)}
              className={"sc-diag__pill " + (s === name ? "is-on" : "")}>
              {s}</button>
            )}
          </div>
        </div>
        <div className="sc-card sc-card--report">
          <div className="sc-report__head">
            <div>
              <div className="sc-report__name">{name}</div>
              <div className="sc-report__meta">{t.diag.mock}</div>
            </div>
            <div className="sc-report__id">
              <span>FILE</span>
              <span>SC‑{(name.length * 31 + 1041).toString().padStart(4, "0")}</span>
            </div>
          </div>
          <ul className="sc-checks">
            {t.diag.checks.map((c, i) =>
            <li key={i} className={"sc-check sc-check--" + c.t + (i < revealed ? " is-in" : "")}>
                <span className="sc-check__mark" aria-hidden="true">{c.t === "ok" ? "✓" : "!"}</span>
                <span className="sc-check__k">{c.k}</span>
                <span className="sc-check__v">{c.v}</span>
              </li>
            )}
          </ul>
          <div className={"sc-verdict " + (show ? "is-in" : "")}>
            <div className="sc-verdict__row">
              <span className="sc-verdict__chip">{t.diag.verdict}</span>
              <span className="sc-verdict__next">{t.diag.next} →</span>
            </div>
            <p className="sc-verdict__p">{t.diag.verdictSub}</p>
          </div>
        </div>
      </div>
    </section>);

}

// ---------- CASE STUDY ----------
function CaseStudy({ t }) {
  return (
    <section className="sc-section" id="cases" data-screen-label="04 Case study">
      <SectionMast num="§ 03" kicker={t.cases.kicker} title={t.cases.title} sub={t.cases.sub} />
      <div className="sc-case">
        <aside className="sc-case__brief">
          <dl className="sc-brief">
            {Object.entries(t.cases.brief).map(([k, v]) =>
            <React.Fragment key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </React.Fragment>
            )}
          </dl>
        </aside>
        <ol className="sc-timeline">
          {t.cases.timeline.map((row, i) =>
          <li className="sc-tl" key={i}>
              <div className="sc-tl__rail"><span className="sc-tl__dot"></span></div>
              <div className="sc-tl__body">
                <div className="sc-tl__head">
                  <span className="sc-tl__d">{row.d}</span>
                  <span className="sc-tl__h">{row.h}</span>
                </div>
                <p className="sc-tl__p">{row.p}</p>
              </div>
            </li>
          )}
        </ol>
      </div>
      <div className="sc-outcomes">
        {t.cases.outcomes.map((o, i) =>
        <div className="sc-outcome" key={i}>
            <div className="sc-outcome__v">{o.v}</div>
            <div className="sc-outcome__l">{o.l}</div>
          </div>
        )}
      </div>
      <blockquote className="sc-quote">
        <p>&ldquo;{t.cases.quote}&rdquo;</p>
        <footer>— {t.cases.quoteAttr}</footer>
      </blockquote>
    </section>);

}

// ---------- SHOWPIECE 2: TRIP ----------
function Trip({ t }) {
  const [active, setActive] = useState(0);
  const day = t.trip.days[active];
  const dayImages = [
  "assets/shenzhen-day.jpg",
  "assets/shenzhen-dusk.jpg",
  "assets/shenzhen-night.jpg",
  "assets/shenzhen-day.jpg",
  "assets/shenzhen-dusk.jpg",
  "assets/shenzhen-night.jpg",
  "assets/shenzhen-day.jpg"];

  return (
    <section className="sc-section sc-section--paper2" id="trip" data-screen-label="05 China program">
      <SectionMast num="§ 04" kicker={t.trip.kicker} title={t.trip.title} sub={t.trip.sub} />
      <div className="sc-trip">
        <div className="sc-trip__left">
          <div className="sc-trip__nav" role="tablist" aria-label={t.trip.pickLabel}>
            {t.trip.days.map((d, i) =>
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              className={"sc-trip__day " + (active === i ? "is-on" : "")}
              onClick={() => setActive(i)}>
              
                <span className="sc-trip__dn">D{d.n}</span>
                <span className="sc-trip__dl">{d.label}</span>
              </button>
            )}
          </div>
          <article className="sc-card sc-card--day" key={active}>
            <header className="sc-day__head">
              <span className="sc-day__num">Day {day.n}</span>
              <span className="sc-day__city">{day.city}</span>
            </header>
            <ol className="sc-day__sched">
              {day.schedule.map((s, i) =>
              <li key={i}>
                  <span className="sc-day__t">{s.t}</span>
                  <span className="sc-day__a">{s.a}</span>
                </li>
              )}
            </ol>
          </article>
        </div>
        <div className="sc-trip__right">
          <figure className="sc-trip__photo" key={active}>
            <img src={dayImages[active]} alt={day.city} style={{ width: "600px" }} />
            <figcaption>
              <span className="sc-trip__cap-k">Day {day.n} · {day.city}</span>
              <span className="sc-trip__cap-v">{day.label}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>);

}

// ---------- ABOUT ----------
function About({ t }) {
  return (
    <section className="sc-section" id="about" data-screen-label="06 About">
      <SectionMast num="§ 05" kicker={t.about.kicker} title={t.about.title} />
      <div className="sc-about">
        <aside className="sc-about__side">
          <div className="sc-portrait sc-portrait--photo" aria-label="Matias Otero Johansson" style={{ width: "300px", height: "400.5px" }}>
            <img src="assets/matias.jpg" alt="Matias Otero Johansson" style={{ height: "400px" }} />
          </div>
          <div className="sc-about__meta">
            <div className="sc-about__role">{t.about.role}</div>
            <div className="sc-about__loc">{t.about.loc}</div>
          </div>
          <dl className="sc-facts">
            {t.about.facts.map(([k, v], i) =>
            <React.Fragment key={i}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </React.Fragment>
            )}
          </dl>
        </aside>
        <div className="sc-about__body">
          {t.about.body.map((p, i) => <p key={i}>{p}</p>)}
          <blockquote className="sc-principle">{t.about.principle}</blockquote>
        </div>
      </div>
    </section>);

}

// ---------- BOOKING ----------
function Booking({ t, openRef }) {
  const today = new Date();
  const days = useMemo(() => {
    const out = [];
    let added = 0,cursor = 1;
    while (added < 8) {
      const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + cursor);
      const dow = d.getDay();
      if (dow !== 0 && dow !== 6) {out.push(d);added++;}
      cursor++;
    }
    return out;
  }, []);
  const slots = ["09:00", "10:30", "13:00", "15:00", "16:30"];
  const [dayI, setDayI] = useState(0);
  const [slot, setSlot] = useState(null);
  const [email, setEmail] = useState("");
  const [ctx, setCtx] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {setSlot(null);}, [dayI]);

  const fmtDay = (d, lang) => d.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", { weekday: "short", month: "short", day: "numeric" });
  const lang = t === window.SC_COPY.es ? "es" : "en";

  return (
    <section className="sc-section" id="book" data-screen-label="07 Book" ref={openRef}>
      <SectionMast num="§ 06" kicker={t.book.kicker} title={t.book.title} sub={t.book.sub} />
      {sent ?
      <div className="sc-card sc-book sc-book--done">
          <div className="sc-book__doneicon">✓</div>
          <p className="sc-book__donep">{t.book.success}</p>
        </div> :

      <div className="sc-card sc-book">
          <div className="sc-book__left">
            <div className="sc-book__meta">
              <div className="sc-book__row"><span>⏱</span><span>{t.book.dur}</span></div>
              <div className="sc-book__row"><span>◐</span><span>{t.book.tz}</span></div>
            </div>
            <div className="sc-book__pickerlbl">{t.book.pick}</div>
            <div className="sc-book__days">
              {days.map((d, i) =>
            <button
              key={i}
              className={"sc-book__day " + (dayI === i ? "is-on" : "")}
              onClick={() => setDayI(i)}>
              
                  <span className="sc-book__dow">{d.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", { weekday: "short" })}</span>
                  <span className="sc-book__dnum">{d.getDate()}</span>
                  <span className="sc-book__dmon">{d.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", { month: "short" })}</span>
                </button>
            )}
            </div>
            <div className="sc-book__slots">
              {slots.map((s) =>
            <button key={s} className={"sc-book__slot " + (slot === s ? "is-on" : "")} onClick={() => setSlot(s)}>{s}</button>
            )}
            </div>
          </div>
          <div className="sc-book__right">
            <div className="sc-book__sum">
              <div className="sc-book__sumlbl">{slot ? t.book.pickedReady : t.book.pickedNone}</div>
              {slot &&
            <div className="sc-book__sumtime">
                  <span className="sc-book__sumd">{fmtDay(days[dayI], lang)}</span>
                  <span className="sc-book__sumt">{slot}</span>
                </div>
            }
            </div>
            <label className="sc-field">
              <span>{t.book.noEmail}</span>
              <input type="email" placeholder={t.book.emailPh} value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="sc-field">
              <span>{t.book.formCtx}</span>
              <textarea rows="3" placeholder={t.book.contextPh} value={ctx} onChange={(e) => setCtx(e.target.value)} />
            </label>
            <button
            className="sc-btn sc-btn--primary sc-btn--block"
            disabled={!slot || !email}
            onClick={() => setSent(true)}>
            {t.book.confirm} →</button>
          </div>
        </div>
      }
    </section>);

}

function ManufacturingStrip({ t }) {
  const s = t && t.strip || {};
 ;

}

Object.assign(window, { Hero, Pillars, Diagnostic, CaseStudy, Trip, About, Booking, ManufacturingStrip });