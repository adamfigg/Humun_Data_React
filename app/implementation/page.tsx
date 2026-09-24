import type { Metadata } from "next";
import Link from "next/link";
import PageHeroSky from "@/components/PageHeroSky";

export const metadata: Metadata = { title: "Implementation — HuMun" };

export default function Implementation() {
  return (
    <>
      <header className="page-hero">
        <PageHeroSky variant="m" />
        <div className="wrap">
          <p className="eyebrow">Implementation services</p>
          <h1>Set up for you, start to finish.</h1>
          <p className="lede">
            No time to wire up another tool? We connect your site, store,
            payments, and ads, teach HuMun your business, and hand you a running
            system &mdash; most setups finish inside two weeks.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">What we handle</p>
            <h2>You run the business. We run the setup.</h2>
          </div>
          <div className="grounds reveal">
            <div className="ground">
              <h3>Connect everything</h3>
              <p>
                Website, Shopify or WooCommerce, Stripe, ad accounts, email tools
                &mdash; linked, verified, and pulling data.
              </p>
            </div>
            <div className="ground">
              <h3>Teach the agent</h3>
              <p>
                Your goals, seasonality, and standing questions configured, so the
                very first brief is about your business &mdash; not generic.
              </p>
            </div>
            <div className="ground">
              <h3>Escape the spreadsheet</h3>
              <p>
                Your history imported, so HuMun&apos;s memory starts with years of
                context instead of a blank page.
              </p>
            </div>
            <div className="ground">
              <h3>Train the team</h3>
              <p>
                One hour with you and anyone who&apos;ll use it: how to read the brief,
                ask follow-ups, and trust-but-verify.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section flight-day">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">The process</p>
            <h2>Running inside two weeks</h2>
          </div>
          <div className="day-grid four reveal">
            <div className="day-step">
              <p className="time">
                <span className="dot"></span>01 &middot; Plan
              </p>
              <h3>A short call</h3>
              <p>
                We map the tools you use and what you most need to know each
                morning.
              </p>
            </div>
            <div className="day-step">
              <p className="time">
                <span className="dot"></span>02 &middot; Connect
              </p>
              <h3>We wire it up</h3>
              <p>
                Secure, read-only connections to your accounts &mdash; you can see
                and revoke every one.
              </p>
            </div>
            <div className="day-step">
              <p className="time">
                <span className="dot"></span>03 &middot; Test
              </p>
              <h3>A week of dry runs</h3>
              <p>
                Daily briefs checked against what you know is true, and tuned until
                they&apos;re right.
              </p>
            </div>
            <div className="day-step">
              <p className="time">
                <span className="dot"></span>04 &middot; Handoff
              </p>
              <h3>Yours to run</h3>
              <p>
                Plain-language docs, and we stay one message away if anything comes
                up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Our standard</p>
            <h2>Set up like we&apos;ll never see it again</h2>
          </div>
          <div className="trio reveal">
            <div className="cell">
              <span className="rune" style={{ color: "var(--huginn)" }} aria-hidden="true">
                &#5866;
              </span>
              <h3>Read-only &amp; secure</h3>
              <p>
                HuMun only reads your data. Access is visible in your own accounts
                and revocable by you, any time.
              </p>
            </div>
            <div className="cell">
              <span className="rune" style={{ color: "var(--muninn)" }} aria-hidden="true">
                &#5809;
              </span>
              <h3>No lock-in</h3>
              <p>
                Your data stays in your accounts. Leave whenever you like and lose
                nothing.
              </p>
            </div>
            <div className="cell">
              <span className="rune" style={{ color: "var(--bone)" }} aria-hidden="true">
                &#5850;
              </span>
              <h3>Proven before live</h3>
              <p>
                Nothing counts as done until the numbers match the reality you
                already know &mdash; your bank deposits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="last">
        <p className="eyebrow reveal">Hand it off</p>
        <h2 className="reveal">Two weeks from &quot;too busy&quot; to &quot;handled.&quot;</h2>
        <p className="reveal">
          Tell us what you use today, and we&apos;ll return a plan and a fixed price
          within two business days.
        </p>
        <div className="cta-row reveal" style={{ justifyContent: "center" }}>
          <Link className="btn btn-bone" href="/contact">
            Get started
          </Link>
          <Link className="btn btn-ghost" href="/reporting">
            Next: Reporting
          </Link>
        </div>
      </section>
    </>
  );
}
