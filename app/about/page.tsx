import type { Metadata } from "next";
import Link from "next/link";
import PageHeroSky from "@/components/PageHeroSky";

export const metadata: Metadata = { title: "About — HuMun" };

export default function About() {
  return (
    <>
      <header className="page-hero">
        <PageHeroSky variant="m" />
        <div className="wrap">
          <p className="eyebrow">About us</p>
          <h1>Big-company answers for small teams.</h1>
          <p className="lede">
            Every Fortune 500 has a floor of analysts watching its numbers. Your
            business deserves the same watchfulness &mdash; without the payroll.
            That&apos;s what we built.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Why we built it</p>
            <h2>We were the analysts big companies hire</h2>
          </div>
          <div className="prose reveal">
            <p>
              We spent a decade doing this job inside large companies: watching
              the metrics, chasing the anomalies, writing the morning summary for
              executives. The tools were expensive and the hours were long, but
              the outcome was simple &mdash; leaders started every day knowing
              exactly where they stood.
            </p>
            <p>
              Small businesses run closer to the edge with none of that. The owner{" "}
              <strong>is</strong> the analyst &mdash; at 11pm, squinting at Google
              Analytics. So we packaged the job itself into an agent:{" "}
              <strong>
                the watching, the judgment, and the memory of someone who has done
                this for ten-plus years.
              </strong>{" "}
              The name comes from Odin&apos;s two ravens &mdash; thought and memory,
              who flew out each morning and came back with the news. That&apos;s the
              product, minus the feathers.
            </p>
          </div>
        </div>
      </section>

      <section className="section flight-day">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">What we promise</p>
            <h2>Three commitments</h2>
          </div>
          <div className="trio reveal">
            <div className="cell">
              <span className="rune" style={{ color: "var(--huginn)" }} aria-hidden="true">
                &#5818;
              </span>
              <h3>Plain English, always</h3>
              <p>
                If a sentence needs a data dictionary to understand, we rewrite
                the sentence &mdash; not you.
              </p>
            </div>
            <div className="cell">
              <span className="rune" style={{ color: "var(--muninn)" }} aria-hidden="true">
                &#5847;
              </span>
              <h3>Show the work</h3>
              <p>
                Every claim links to the numbers behind it. You never have to take
                a finding on faith.
              </p>
            </div>
            <div className="cell">
              <span className="rune" style={{ color: "var(--bone)" }} aria-hidden="true">
                &#5794;
              </span>
              <h3>Priced for small business</h3>
              <p>
                A tool every startup needs has to be priced like one &mdash; a small
                line item, not a hire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">The short version</p>
            <h2>What it takes to have an analyst on staff</h2>
          </div>
          <div className="stat-row reveal">
            <div className="stat">
              <div className="n h">10+ yrs</div>
              <div className="l">
                of analyst experience and judgment built into the agent
              </div>
            </div>
            <div className="stat">
              <div className="n">5 min</div>
              <div className="l">to connect your data and put it on the job</div>
            </div>
            <div className="stat">
              <div className="n m">2 min</div>
              <div className="l">
                each morning to know exactly where your business stands
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="last">
        <p className="eyebrow reveal">Put it to work</p>
        <h2 className="reveal">Put an analyst on your business tonight.</h2>
        <p className="reveal">
          Free for 14 days. If the first week of morning briefs doesn&apos;t earn its
          keep, walk away &mdash; your data never left your accounts.
        </p>
        <div className="cta-row reveal" style={{ justifyContent: "center" }}>
          <Link className="btn btn-bone" href="/#start">
            Start free
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Ask us anything
          </Link>
        </div>
      </section>
    </>
  );
}
