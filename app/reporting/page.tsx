import type { Metadata } from "next";
import Link from "next/link";
import PageHeroSky from "@/components/PageHeroSky";

export const metadata: Metadata = { title: "Reporting — HuMun" };

export default function Reporting() {
  return (
    <>
      <header className="page-hero">
        <PageHeroSky variant="h" />
        <div className="wrap">
          <p className="eyebrow">Reporting &amp; analysis</p>
          <h1>Reports you&apos;ll actually read.</h1>
          <p className="lede">
            Not dashboards. Not forty-page PDFs. A two-minute daily note, a
            monthly summary in plain English, and a real answer whenever you ask
            &quot;why?&quot;
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">What you get</p>
            <h2>Answers on three schedules</h2>
          </div>
          <div className="grounds reveal">
            <div className="ground">
              <h3>The morning brief</h3>
              <p>
                Daily, two minutes: what changed, why, and the move. Delivered to
                email or Slack before your day starts.
              </p>
            </div>
            <div className="ground">
              <h3>Monthly business review</h3>
              <p>
                The month on one page, in plain English: what worked, what
                didn&apos;t, and what to double down on.
              </p>
            </div>
            <div className="ground">
              <h3>Deep dives on demand</h3>
              <p>
                &quot;Why is churn up?&quot; &quot;Which ads actually pay?&quot; One question in, one
                clear investigation back.
              </p>
            </div>
            <div className="ground">
              <h3>Numbers for investors</h3>
              <p>
                Clean, consistent figures for pitch decks, updates, and loan
                applications &mdash; ready when they ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section flight-day">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">The cadence</p>
            <h2>A rhythm that fits a founder&apos;s week</h2>
          </div>
          <div className="trio reveal">
            <div className="cell">
              <span className="rune" style={{ color: "var(--huginn)" }} aria-hidden="true">
                &#5817;
              </span>
              <h3>Daily &middot; 2 minutes</h3>
              <p>
                The brief, with your coffee. Skim, act on anything urgent, move on
                with your day.
              </p>
            </div>
            <div className="cell">
              <span className="rune" style={{ color: "var(--bone)" }} aria-hidden="true">
                &#5847;
              </span>
              <h3>Monthly &middot; 20 minutes</h3>
              <p>
                The one-page review. Enough to plan the month without drowning in
                charts.
              </p>
            </div>
            <div className="cell">
              <span className="rune" style={{ color: "var(--muninn)" }} aria-hidden="true">
                &#5850;
              </span>
              <h3>Quarterly &middot; 1 hour</h3>
              <p>
                Sit down with the trend lines, see what&apos;s compounding, and set
                direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap whisper">
          <div className="whisper-copy reveal">
            <p className="eyebrow">See one</p>
            <h2>Written like a smart friend, backed like an audit</h2>
            <p>
              Every claim names its cause and links to the data behind it.
              Skeptical? Click through and check the work &mdash; that option is the
              whole point.
            </p>
          </div>
          <div
            className="brief reveal"
            role="img"
            aria-label="Example monthly review excerpt showing a repeat-purchase gain and an ad efficiency drop, each with cause and recommendation"
          >
            <div className="brief-bar">
              <span className="who">humun &middot; monthly review</span>
              <span>june &middot; p.1</span>
            </div>
            <div className="brief-body">
              <span className="delta-up">&#9650; repeat purchases 18% &rarr; 23%</span>
              <br />
              <span className="k">cause:</span> the June welcome-email flow
              <br />
              <span className="k">memory:</span>{" "}
              <span className="mem">best repeat rate since the holiday campaign</span>
              <br />
              <span className="k">move:</span> extend the flow to all past buyers
              &middot; <span className="hl">view the data &rarr;</span>
              <hr />
              <span className="delta-down">&#9660; return on ad spend &minus;22% on Meta</span>
              <br />
              <span className="k">cause:</span> new campaign overlaps your existing
              audience
              <br />
              <span className="k">move:</span> exclude recent purchasers &middot;{" "}
              <span className="hl">view the data &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      <section className="last">
        <p className="eyebrow reveal">Start small</p>
        <h2 className="reveal">Your first brief this week.</h2>
        <p className="reveal">
          Start with the daily brief alone or the full cadence &mdash; either way,
          setup takes days, not months.
        </p>
        <div className="cta-row reveal" style={{ justifyContent: "center" }}>
          <Link className="btn btn-bone" href="/contact">
            Get started
          </Link>
          <Link className="btn btn-ghost" href="/measurement">
            First: Get your numbers right
          </Link>
        </div>
      </section>
    </>
  );
}
