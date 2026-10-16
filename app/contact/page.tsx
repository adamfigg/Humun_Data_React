import type { Metadata } from "next";
import PageHeroSky from "@/components/PageHeroSky";

export const metadata: Metadata = { title: "Contact — HuMun" };

export default function Contact() {
  return (
    <>
      <header className="page-hero">
        <PageHeroSky variant="h" />
        <div className="wrap">
          <p className="eyebrow">Contact us</p>
          <h1>Send a raven.</h1>
          <p className="lede">
            A question, a setup request, or just &quot;where do I start?&quot; &mdash; tell
            us about your business. A human reads every message and replies within
            one business day.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap contact-split">
          <div className="reveal">
            <p className="eyebrow" style={{ marginBottom: "18px" }}>
              Other ways to reach us
            </p>
            <div className="roost">
              <span className="k">Contact</span>
              <a href="mailto:contact@humun.com">contact@humun.com</a>
            </div>
            <div className="roost">
              <span className="k">Support</span>
              <a href="mailto:support@humun.com">support@humun.com</a>
            </div>
            <div className="roost" style={{ borderBottom: "1px solid var(--hairline)" }}>
              <span className="k">Elsewhere</span>
              <a href="#">LinkedIn</a> &nbsp;&middot;&nbsp; <a href="#">GitHub</a>
            </div>
            <p style={{ marginTop: "34px", color: "var(--mist)", fontSize: ".95rem" }}>
              Prefer to talk? Book a free 30&#8209;minute call and we&apos;ll look at
              your setup together.
            </p>
            <p style={{ marginTop: "20px" }}>
              <a className="btn btn-ghost" href="#">
                Book a call
              </a>
            </p>
          </div>
          <div className="reveal">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="f-name">Name</label>
                <input id="f-name" type="text" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="f-company">Company</label>
                <input id="f-company" type="text" autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="f-need">What do you need?</label>
                <select id="f-need" defaultValue="Measurement services">
                  <option>Measurement services</option>
                  <option>Implementation services</option>
                  <option>Reporting &amp; analysis</option>
                  <option>The HuMun platform</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="f-msg">Your message</label>
                <textarea
                  id="f-msg"
                  placeholder="What are you trying to learn from your data?"
                />
              </div>
              <div className="field full">
                <button className="btn btn-bone" type="button">
                  Release the raven
                </button>
                <p className="form-note">
                  Sent in confidence. We reply within one flight &mdash; usually the
                  same day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
