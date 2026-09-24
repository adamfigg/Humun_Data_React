import type { Metadata } from "next";
import Link from "next/link";
import PageHeroSky from "@/components/PageHeroSky";

export const metadata: Metadata = { title: "Measurement — HuMun" };

export default function Measurement() {
  return (
    <>
      <header className="page-hero">
        <PageHeroSky variant="h" />
        <div className="wrap">
          <p className="eyebrow">Measurement services</p>
          <h1>Know your numbers are right.</h1>
          <p className="lede">
            Half of small-business analytics is broken before it starts &mdash;
            double-counted sales, tags that never fired, ten versions of
            &quot;revenue.&quot; We set up your tracking properly and define the numbers
            that matter, so every decision stands on solid ground.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">What we set up</p>
            <h2>A foundation you can trust</h2>
          </div>
          <div className="grounds reveal">
            <div className="ground">
              <h3>Tracking setup &amp; cleanup</h3>
              <p>
                GA4, pixels, and events configured correctly &mdash; or untangled if
                a past setup left them a mess.
              </p>
            </div>
            <div className="ground">
              <h3>The numbers that matter</h3>
              <p>
                We help you pick the 5&ndash;10 metrics that actually run your
                business, each with one clear, written definition.
              </p>
            </div>
            <div className="ground">
              <h3>Data health check</h3>
              <p>
                We find the double-counting, missing orders, and broken tags
                silently skewing your numbers today.
              </p>
            </div>
            <div className="ground">
              <h3>Store &amp; funnel tracking</h3>
              <p>
                Every step from ad click to paid order, measured &mdash; so you can
                see exactly where buyers drop off.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section flight-day">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">The process</p>
            <h2>Done in one to two weeks</h2>
          </div>
          <div className="day-grid four reveal">
            <div className="day-step">
              <p className="time">
                <span className="dot"></span>01 &middot; Review
              </p>
              <h3>See what you have</h3>
              <p>
                We audit your current tracking and find where your numbers
                disagree with each other.
              </p>
            </div>
            <div className="day-step">
              <p className="time">
                <span className="dot"></span>02 &middot; Agree
              </p>
              <h3>Pick your metrics</h3>
              <p>
                One working session to settle definitions, owners, and targets
                &mdash; no jargon, no committees.
              </p>
            </div>
            <div className="day-step">
              <p className="time">
                <span className="dot"></span>03 &middot; Set up
              </p>
              <h3>We do the work</h3>
              <p>
                Everything configured and fixed by us, and written down so it
                isn&apos;t locked in anyone&apos;s head.
              </p>
            </div>
            <div className="day-step">
              <p className="time">
                <span className="dot"></span>04 &middot; Verify
              </p>
              <h3>Prove it&apos;s right</h3>
              <p>
                Numbers reconciled against your actual payouts before anyone signs
                off.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap whisper">
          <div className="whisper-copy reveal">
            <p className="eyebrow">The deliverable</p>
            <h2>Every number, defined in writing</h2>
            <p>
              You leave with a simple metrics sheet that you, your team, and HuMun
              all share &mdash; so &quot;revenue&quot; means one thing forever, and the
              agent watches the right numbers from day one.
            </p>
          </div>
          <div
            className="runecard reveal"
            role="img"
            aria-label="Example metric definition showing checkout conversion defined in plain terms"
          >
            <div className="brief-bar">
              <span className="who">metrics / checkout_conversion</span>
              <span>reviewed &#10003;</span>
            </div>
            <div className="brief-body">
              <span className="key">metric:</span>{" "}
              <span className="val">checkout conversion</span>
              <br />
              <span className="key">definition:</span>{" "}
              <span className="val">paid orders &divide; checkout starts</span>
              <br />
              <span className="key">watched:</span>{" "}
              <span className="val">daily, against your seasonal normal</span>
              <br />
              <span className="key">verified:</span>{" "}
              <span className="val">matches Stripe payouts</span>
              <br />
              <span className="c"># context</span>
              <br />
              <span className="amber">2 past incidents linked &middot; owner: you</span>
            </div>
          </div>
        </div>
      </section>

      <section className="last">
        <p className="eyebrow reveal">First things first</p>
        <h2 className="reveal">Fix the foundation, then automate on top of it.</h2>
        <p className="reveal">
          One to two weeks, a fixed price, and numbers you&apos;ll never argue about
          again.
        </p>
        <div className="cta-row reveal" style={{ justifyContent: "center" }}>
          <Link className="btn btn-bone" href="/contact">
            Get started
          </Link>
          <Link className="btn btn-ghost" href="/implementation">
            Next: Implementation
          </Link>
        </div>
      </section>
    </>
  );
}
