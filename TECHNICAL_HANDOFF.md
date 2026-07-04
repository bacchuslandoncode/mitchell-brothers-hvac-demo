# Technical Handoff — Mitchell Brothers Heating And Cooling Website Demo

**Prepared by:** Landon Bacchus — bacchuslandon@icloud.com
**Repo:** https://github.com/bacchuslandoncode/mitchell-brothers-hvac-demo

---

## Stack Note

This site is built in **React + Vite**, deployed as a static SPA. No CMS, no backend, no database. All content lives in source files.

---

## Folder Structure

```
mitchell-brothers-hvac-demo/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── _redirects          # Netlify SPA routing fallback
├── src/
│   ├── assets/
│   │   ├── photos/          # Stock/demo photography
│   │   └── textures/        # Background texture assets
│   ├── components/          # Shared layout + UI components
│   ├── data/                 # Content data files (services, service area, reviews, hours)
│   ├── pages/                # Full page components (one per route)
│   ├── sections/             # Homepage and reusable page sections
│   ├── App.jsx                # Route definitions
│   ├── main.jsx                # React entry point
│   └── index.css                # Global CSS custom properties (design tokens) and base styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json               # Vercel SPA fallback (unused if deploying to Netlify)
└── vite.config.js
```

---

## Where Things Live

### Components (`src/components/`)

| File                    | Purpose                                                      |
|-------------------------|---------------------------------------------------------------|
| `Nav.jsx`               | Top nav bar, mobile menu, `BrandMark` wordmark, `CallNowButton`, phone/address constants |
| `Footer.jsx`            | Site-wide footer — brand, contact, hours, services, disclaimer |
| `Layout.jsx`            | Wraps Nav + Footer around page content via `<Outlet />`        |
| `PageHeader.jsx`        | Reusable dark hero banner used on interior pages               |
| `FirstLoadOverlay.jsx`  | Brief fade-in overlay shown once per session on first load     |
| `ImageSlot.jsx`         | Image wrapper that renders a labeled placeholder if no `src` is passed |
| `Reveal.jsx`            | Scroll-triggered fade/rise wrapper (Framer Motion `whileInView`) |
| `motionVariants.js`     | Shared `staggerContainer` / `staggerItem` Framer Motion variants |

### Sections (`src/sections/`)

Reused across `src/pages/`.

| File                  | Section                                                  |
|-----------------------|-------------------------------------------------------------|
| `Hero.jsx`            | Homepage hero — headline, CTAs, framed photo, trust badges |
| `EmergencyStrip.jsx`  | "Sound familiar?" symptom checklist strip                  |
| `Services.jsx`        | Services grid (5 cards, sourced from `data/services.js`)    |
| `DesertHeat.jsx`      | "Why timing matters" — desert heat stat progression         |
| `WhyMitchellBrothers.jsx` | Value-proposition grid                                  |
| `Process.jsx`         | Three-step "how it works" section                            |
| `MaintenanceCTA.jsx`  | Maintenance plan / financing CTA strip                        |
| `ReviewHighlights.jsx`| Rating badge + theme-based review highlight cards            |
| `ServiceScenarios.jsx`| Generic illustrative service-scenario cards (not real jobs)  |
| `ServiceArea.jsx`     | Tempe home-base pin + nearby East Valley area tags            |
| `Apply.jsx`           | Careers application form (demo — does not submit anywhere)   |
| `FinalCTA.jsx`        | Closing call-to-action, reused at the bottom of every page    |

### Pages (`src/pages/`)

| File                          | Route             |
|-------------------------------|--------------------|
| `HomePage.jsx`                | `/`                |
| `ServicesPage.jsx`            | `/services`        |
| `WhyMitchellBrothersPage.jsx` | `/why-us`          |
| `ReviewsPage.jsx`             | `/reviews`         |
| `ServiceAreaPage.jsx`         | `/service-area`    |
| `ApplyPage.jsx`               | `/apply`           |
| `ContactPage.jsx`             | `/contact`         |

---

## Data Files (`src/data/`)

| File                   | Exports                          | Notes |
|-------------------------|-----------------------------------|-------|
| `services.js`           | `services` (5 entries)            | AC Repair, AC Maintenance, Heating Repair, System Installation, Emergency Service |
| `serviceAreas.js`       | `primaryArea`, `nearbyAreas`       | Tempe is the confirmed base; nearby cities are presented as general proximity, not a confirmed service list |
| `reviewHighlights.js`   | `reviewSummary`, `reviewHighlights`| Rating/count and theme summaries from the business's public review listing — **not quoted testimonials** |
| `hours.js`              | `hoursRows`                        | Currently a single "Open 24 hours, every day" row |

**To update business info:** phone/address live as constants in `src/components/Nav.jsx` (`MITCHELL_PHONE`, `MITCHELL_PHONE_TEL`, `MITCHELL_ADDRESS`). There is no business email address anywhere in the codebase — none was available at time of writing.

---

## Images (`src/assets/photos/`)

All photography is stock/demo imagery, not real photos of Mitchell Brothers jobs, staff, or property. Filenames describe the generic subject, not a real property or client (e.g. `scenario-multi-family.webp`, not a named apartment complex). **Every photo should be swapped for real photography before any real launch.**

There is no logo asset. The brand mark is a text-based "MB" monogram (`BrandMark` in `Nav.jsx`), used in the nav, footer, and closing CTA. Swap in a real logo file if/when the business provides one.

---

## Deployment (Netlify)

`public/_redirects` contains:
```
/*    /index.html   200
```
This ensures React Router handles all routes correctly on Netlify (prevents 404s on direct URL access).

### Manual deploy steps
1. Run `npm run build` locally to verify the build passes.
2. Push changes to `main`.
3. Connect the repo in Netlify (build command `npm run build`, publish directory `dist`).

### Environment variables
None required. The Apply form does not submit anywhere yet — wire it to Netlify Forms, Formspree, or an email/CRM integration before real use.

---

## Known Gaps To Close Before A Real Launch

See `LAUNCH_CHECKLIST.md` and `QA_REPORT.md` for the full list — in short: real photography, a real logo, license/insurance confirmation, a working Apply/contact form backend, and reverification of the review rating, service-area list, and hours against the business's current listing.
