# HuMun React — build roadmap

The marketing-site rebuild is done. This tracks what's next, in order. The rule
holds: **build each piece and get it working before starting the next.**

## Now / near-term

- [ ] **Copy remaining brand assets** into `public/` from `../Humun_Data/brand`
      (`favicon.ico`, `apple-touch-icon.png`, `favicon-16/32/192/512.png`).
- [ ] **Signup flow — skeleton first.** Landing "Start free" → sign-up page →
      "Connect Google Analytics" → confirmation. Build it as a clickable skeleton
      with stubbed steps before wiring any real integration. This is where
      "as few steps as possible" gets designed.
      **Order decision (settled): sign-up FIRST, payment SECOND** — confirm we can
      read a customer's analytics before charging them.

## Deferred — tracked, not built yet

1. **Google OAuth ("Sign in with Google")** — the real analytics-access step.
   One click → Google consent → our server receives a token → we pull GA data on
   a schedule. Uses the Google Analytics Data API + OAuth 2.0. Tokens and the
   client secret are server-side only (Next API routes), never in browser code.

2. **Google OAuth verification** — required before ~100 users, and to remove the
   "unverified app" warning on the consent screen. Needs a **privacy policy URL,
   a demo video, and domain verification**. Slow (days–weeks). Start it as soon as
   OAuth works. **Explicitly deferred for now** at Adam's direction.

3. **Privacy policy + terms pages** — needed for #2 and for any product that reads
   customer analytics. State plainly: never sell data; hold nothing about
   visitors as people.

4. **CSV free-trial test run** — optional manual CSV upload → one sample report,
   as a conversion hook (fine if people reuse it — it drives sign-ups). Build
   after the real OAuth flow is solid.

5. **Stripe payment (Stripe Checkout)** — the "second" build. Stripe hosts the
   payment page so card data never touches our servers.

6. **"HuMun" brand / domain check** — the site already uses `humun.io` email
   addresses. Confirm the domain and trademark are secured before launch.

## Product constraints (inherited from the analytics engine repo)

- Audience: small businesses that want to run their business, not learn analytics.
- Never sell data; hold nothing about visitors as people; read-only access the
  customer can revoke.
- Positioning: built for small — when you outgrow us, we'll help you leave.
