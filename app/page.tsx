import Link from "next/link";
import HeroSky from "@/components/HeroSky";

export default function Home() {
  return (
    <>
      <header>
        <HeroSky />
        <div className="wrap hero-content">
          <p className="eyebrow">Agentic analytics</p>
          <h1>
            Wake to <em className="t">answers</em>, not dashboards.
          </h1>
          <p className="lede">
            HuMun is a senior data analyst that never sleeps: an AI agent with
            ten&#8209;plus years of judgment built in, watching your site, store,
            and ad data around the clock. Every morning it tells you{" "}
            <strong>what changed, why, and what to do about it.</strong> No
            dashboards to decode. No analyst to hire.
          </p>
          <div className="cta-row">
            <a className="btn btn-bone" href="#start">
              Start free
            </a>
            <a className="btn btn-ghost" href="#brief">
              See a morning brief
            </a>
          </div>
        </div>
      </header>

      <section className="quote">
        <div className="quote-inner reveal">
          <p className="big">
            Google Analytics hands you <span className="h">charts</span>. You&apos;re
            still stuck being the <span className="m">analyst</span>.
          </p>
          <p className="attr">Why free analytics isn&apos;t free</p>
          <p className="gloss">
            Free tools cost the one thing you can&apos;t buy back: your time. HuMun
            does the analyst&apos;s job for you &mdash; reads the data, finds what
            matters, and tells you the move in plain English.
          </p>
        </div>
      </section>

      <section className="section" id="ravens">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Meet your analyst</p>
            <h2>Ten years of experience, on duty every night.</h2>
          </div>
          <div className="ravens reveal">
            <div className="raven-col hug">
              <span className="rune" aria-hidden="true">
                &#5818;
              </span>
              <h3>Huginn</h3>
              <p className="sub">The analysis engine</p>
              <p>
                The judgment of a veteran analyst, working around the clock.
                Huginn watches your traffic, sales, and funnels &mdash; and when
                something moves, it digs until it knows why.
              </p>
              <ul>
                <li>
                  Ask questions in plain English &mdash; &quot;why did sales dip on
                  Tuesday?&quot;
                </li>
                <li>Finds the cause behind every spike and drop, not just an alert</li>
                <li>Watches ad spend, conversion, and checkout health nightly</li>
                <li>No SQL, no report-building, no dashboards to learn</li>
              </ul>
            </div>
            <div className="raven-col mun">
              <span className="rune" aria-hidden="true">
                &#5847;
              </span>
              <h3>Muninn</h3>
              <p className="sub">The memory engine</p>
              <p>
                The context a new hire takes a year to absorb. Muninn remembers
                your seasonality, your past incidents, and your best campaigns
                &mdash; so every answer accounts for your history.
              </p>
              <ul>
                <li>Knows what &quot;normal&quot; looks like for your business specifically</li>
                <li>Recalls past issues: &quot;this looks like the March checkout bug&quot;</li>
                <li>Keeps one honest definition of every number you track</li>
                <li>Your institutional memory, even as the team changes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section flight-day" id="flight">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">How it works</p>
            <h2>
              Five minutes to set up. Two minutes a day to stay on top of
              everything.
            </h2>
          </div>
          <div className="day-grid reveal">
            <div className="day-step">
              <p className="time">
                <span className="dot"></span>01 &middot; Connect
              </p>
              <h3>Plug in your tools</h3>
              <p>
                Link Google Analytics, Shopify, Stripe, and your ad accounts
                &mdash; a few clicks each. No code, no engineer, no migration.
              </p>
            </div>
            <div className="day-step">
              <p className="time">
                <span className="dot"></span>02 &middot; Watch
              </p>
              <h3>It works while you sleep</h3>
              <p>
                Every night, HuMun checks your numbers against what&apos;s normal for
                your business and investigates anything that moved &mdash; down to
                the cause.
              </p>
            </div>
            <div className="day-step">
              <p className="time">
                <span className="dot"></span>03 &middot; Decide
              </p>
              <h3>Read your morning brief</h3>
              <p>
                A short note in your inbox or Slack: what changed, why, and the
                suggested move. Skim it with your coffee, then get back to running
                the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="brief">
        <div className="wrap whisper">
          <div className="whisper-copy reveal">
            <p className="eyebrow">The morning brief</p>
            <h2>Every day starts with answers</h2>
            <p>
              No dashboards, no digging. The three things that matter, the cause
              behind each, and what to do &mdash; with the evidence one click away
              whenever you want to check the work.
            </p>
          </div>
          <div
            className="brief reveal"
            role="img"
            aria-label="Example morning brief showing a conversion drop, its root cause, a matched past incident, and a suggested fix"
          >
            <div className="brief-bar">
              <span className="who">humun &middot; morning brief</span>
              <span>tue 08:00</span>
            </div>
            <div className="brief-body">
              <span className="delta-down">&#9660; checkout conversion 4.1% &rarr; 3.4%</span>{" "}
              since Friday&apos;s site update
              <br />
              <span className="k">cause:</span> payment step slowed by{" "}
              <span className="delta-down">+620ms</span> on mobile
              <br />
              <span className="k">memory:</span>{" "}
              <span className="mem">same pattern as the 12 Mar theme update</span>
              <br />
              <span className="k">move:</span> roll back Friday&apos;s change{" "}
              <span className="hl">&middot; view the data &rarr;</span>
              <hr />
              <span className="delta-up">&#9650; signups +18% this week</span>, driven by
              organic search
              <br />
              <span className="k">cause:</span> your how-to pages are ranking for 3
              new searches
              <br />
              <span className="k">move:</span> nothing to fix &mdash; worth doubling
              down on content
              <hr />
              <span className="k">also checked:</span> 214 numbers steady &middot; ad
              spend on track
            </div>
          </div>
        </div>
      </section>

      <section className="section flight-day">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">The honest comparison</p>
            <h2>Keep Google Analytics. Quit doing its job.</h2>
          </div>
          <div className="ravens reveal" style={{ background: "var(--night)" }}>
            <div className="raven-col hug" style={{ background: "var(--night)" }}>
              <h3>Google Analytics</h3>
              <p className="sub">Free &mdash; plus your evenings</p>
              <ul>
                <li>Charts and tables you interpret yourself</li>
                <li>Problems surface only if you go looking for them</li>
                <li>Sees your website &mdash; not your sales and ad spend together</li>
                <li>No memory of your goals &mdash; every session starts from zero</li>
                <li>Built for analysts; most owners use 5% of it</li>
              </ul>
            </div>
            <div className="raven-col mun" style={{ background: "var(--night)" }}>
              <h3>HuMun</h3>
              <p className="sub">Your analyst, hired</p>
              <ul>
                <li>Plain-English answers with the cause attached</li>
                <li>Problems find you overnight, already explained</li>
                <li>One picture: site + store + payments + ads</li>
                <li>Remembers your business and its whole history</li>
                <li>Built for owners; reads like a text from your analyst</li>
              </ul>
            </div>
          </div>
          <p className="prose reveal" style={{ marginTop: "28px" }}>
            And no, you don&apos;t have to choose: HuMun plugs into the Google
            Analytics you already have and reads it for you. Keep the free tool as
            the data source &mdash; retire yourself from the analyst job.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Why it pays for itself</p>
            <h2>The problems it catches are the ones that cost you</h2>
          </div>
          <div className="grounds reveal">
            <div className="ground">
              <h3>The checkout that broke on Friday</h3>
              <p>
                A site update quietly kills payments for mobile buyers. Nothing
                calls you about it. HuMun flags it the next morning &mdash; with the
                cause.
              </p>
            </div>
            <div className="ground">
              <h3>The ad campaign burning money</h3>
              <p>
                Spend keeps flowing to an audience that stopped converting weeks
                ago. Caught overnight, not in the month-end statement.
              </p>
            </div>
            <div className="ground">
              <h3>The bestseller that stalled</h3>
              <p>
                Your top product&apos;s page slowly stops converting. HuMun notices
                the trend before the revenue dip forces you to.
              </p>
            </div>
            <div className="ground">
              <h3>The traffic drop with a reason</h3>
              <p>
                Search ranking shift, broken link, slow page? You get the why
                &mdash; not just a smaller number and a bad feeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="last" id="start">
        <p className="eyebrow reveal">Start tonight</p>
        <h2 className="reveal">Stop guessing. Start knowing.</h2>
        <p className="reveal">
          Connect your data in five minutes and get your first morning brief
          tomorrow. Free for 14 days &mdash; no card, no setup calls, cancel
          anytime.
        </p>
        <div className="cta-row reveal" style={{ justifyContent: "center" }}>
          <a className="btn btn-bone" href="#">
            Start free
          </a>
          <Link className="btn btn-ghost" href="/contact">
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
