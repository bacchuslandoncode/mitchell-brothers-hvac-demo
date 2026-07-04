# QA Report — Mitchell Brothers Heating And Cooling Website Demo

**Date:** 2026-07-04
**Prepared by:** Landon Bacchus — bacchuslandon@icloud.com
**Repo:** https://github.com/bacchuslandoncode/mitchell-brothers-hvac-demo

---

## Build & Lint Status

| Check           | Status | Notes |
|------------------|--------|-------|
| `npm run build`  | PASS   | 425 modules transformed, ~415 kB JS (gzip ~126 kB) |
| `npm run lint`   | PASS   | 0 errors, 0 warnings |

There is no automated test suite (no test framework is configured in this project). All QA below is manual/visual, performed via an in-browser preview during development.

---

## Pages Checked (visual QA, desktop + mobile viewports)

| Page             | URL              | Status | Notes |
|-------------------|-------------------|--------|-------|
| Home              | `/`               | PASS   | Hero, emergency strip, review highlights, service scenarios, and closing CTA all render; verified at both mobile (375px) and desktop (1440px) widths |
| Services          | `/services`       | PASS   | 5-card services grid renders with correct photos |
| Why Us            | `/why-us`         | PASS   | Desert-heat stat section and value-proposition grid render |
| Service Area      | `/service-area`   | PASS   | Tempe "home base" pin and nearby-area tags render |
| Contact           | `/contact`        | PASS   | Phone, address, and hours render; no email field present (by design — none is published) |
| Apply             | `/apply`          | PASS   | Demo application form renders; submits nowhere (documented in `TECHNICAL_HANDOFF.md`) |
| Reviews           | `/reviews`        | PASS   | Uses the same `ReviewHighlights` section verified on Home; not separately screenshotted |

---

## Navigation

| Check                              | Status | Notes |
|--------------------------------------|--------|-------|
| Nav wordmark links to `/`            | PASS   | |
| All 6 nav links route correctly      | PASS   | Services, Why Us, Reviews, Service Area, Apply, Contact |
| Mobile hamburger menu toggles open/closed | PASS | Verified via DOM `aria-expanded` state changes and an accessibility-tree snapshot; the in-browser screenshot tool hit a transient timeout during this check and was not used for final visual confirmation of the open drawer |

---

## Links Checked

| Link type                | Status | Notes |
|----------------------------|--------|-------|
| `tel:` links (Call Now buttons) | PASS | Point to `tel:+16234627648`, matches displayed (623) 462-7648 |
| Internal nav/route links   | PASS   | All 7 routes resolve without 404 |

No `mailto:` links exist anywhere in the site — no business email address was available to publish.

---

## Content Integrity

| Check                                        | Status       | Notes |
|-----------------------------------------------|--------------|-------|
| Business name, phone, address                 | PASS         | Matches confirmed source info |
| Hours ("Open 24 hours, every day")            | PASS         | Matches confirmed source info |
| Service list (5 services)                     | PASS         | Matches confirmed source info |
| Review rating ("5.0 from 3 reviews")          | PENDING RECHECK | Reflects the public listing at time of writing; reverify before launch |
| Review highlight themes (7 themes)            | PASS         | Summarized from public review themes, not quoted — no fabricated testimonials |
| Service-area "nearby" city list               | NEEDS BUSINESS CONFIRMATION | Presented as general proximity copy, explicitly not an official service-area list |
| License/insurance claim                       | PENDING      | Shown as "pending verification" placeholder, not asserted |
| No original-template branding remaining       | PASS         | See cleanup pass below |

---

## No Regressions From Cleanup Pass (2026-07-04)

A repo-wide search for residual references to the project's original template (business name, phone number, old section/route names, old client-property names) turned up only internal, non-visible items — see the commit message and PR notes for the full list. All were either renamed (asset filenames, internal exports) or confirmed to be unrelated coincidental substring matches (e.g. version numbers in `package-lock.json`, SVG path coordinates in `public/icons.svg`). No visible/user-facing content required further changes.

Fixed two pre-existing `react-refresh/only-export-components` ESLint errors (unrelated to branding) by moving shared constants out of component files:
- `staggerContainer`/`staggerItem` moved from `Reveal.jsx` to `src/components/motionVariants.js`
- `hoursRows` moved from `Footer.jsx` to `src/data/hours.js`

No visual or behavioral change resulted from either fix.

---

## Known Remaining Items Requiring Business Input

1. Real photography to replace all stock/demo images.
2. A real logo file, if one exists, to replace the text-based "MB" wordmark.
3. License/insurance number, if the business wants it displayed.
4. Confirmed service-area radius (which nearby cities are actually served).
5. A business email address, if one should be published.
6. Reverification of the review rating/count against the live listing.
7. A backend for the Apply form (currently submits nowhere).
8. Real-device mobile QA (this report reflects emulated-viewport QA only).
