# HuMun — marketing site (React / Next.js)

A faithful React rebuild of the original hand-built static site (`../Humun_Data/static-site`).
Same design, same copy, same animations — now componentized in Next.js (App Router,
TypeScript) so the signup + payment flow can live in the same app.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run typecheck`.

## Structure

```
app/
  layout.tsx           html shell, fonts, favicons; renders Nav + Footer + ScrollReveal
  globals.css          the complete design system (verbatim from the original)
  page.tsx             home            (was humun.html)
  measurement/page.tsx                 (was measurement.html)
  implementation/page.tsx              (was implementation.html)
  reporting/page.tsx                   (was reporting.html)
  about/page.tsx                       (was about.html)
  contact/page.tsx                     (was contact.html)
components/
  Nav.tsx, Footer.tsx  shared chrome
  RunesMark.tsx        the two-rune wordmark glyph
  HeroSky.tsx          animated home-hero night sky (twinkling stars + flying ravens)
  PageHeroSky.tsx      subpage hero sky (variant "h" = Huginn blue, "m" = Muninn amber)
  ScrollReveal.tsx     client component; reproduces the .reveal fade-in on scroll
public/
  favicon.svg          copy the rest of the brand assets from ../Humun_Data/brand
```

## What changed in the conversion (and why)

- **`.html` pages → App Router routes.** Internal links became `/measurement`,
  `/about`, etc. Same-page anchors (`#start`, `#brief`) stayed as anchors.
- **Shared nav/footer → components** in `layout.tsx`, so they exist once.
- **The inline `<script>` IntersectionObserver → `ScrollReveal.tsx`**, a client
  component that re-scans on route change (client-side navigation needs that).
- **Fonts** load via the same Google Fonts `<link>` under their real family names,
  so the CSS is unchanged.
- **`.fly-h` / `.fly-m` raven paths** use the home page's values (the only page
  where the moving ravens appear).

Everything else — colors, type, spacing, copy, SVG art — is carried over as-is.

## Brand assets to copy

`public/favicon.svg` is included. Copy the remaining files from
`../Humun_Data/brand` into `public/`: `favicon.ico`, `apple-touch-icon.png`,
`favicon-16/32/192/512.png`.

## What's next

See `TODO.md` for the deferred build steps (signup, Google OAuth, Stripe, etc.).
