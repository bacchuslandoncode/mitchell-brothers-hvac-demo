# Changelog — Mitchell Brothers Heating And Cooling Website Demo

All notable changes to this project are documented here.

---

## [Unreleased] — Pre-Launch

Changes pending review and go-live decision. Not yet deployed as a real business site.

---

## 2026-07-04

### Project Origin

This repository started as a copy of an existing single-page HVAC contractor demo template (same tech stack: React, Vite, React Router, Framer Motion, CSS custom properties). It has since been fully rebranded and restructured for Mitchell Brothers Heating And Cooling. No content, contact info, reviews, or project history from the original template client carried over — see "Rebrand" below for what changed.

### Rebrand — Mitchell Brothers Heating And Cooling

- Replaced the entire color system: brass/copper accent (`#A8672E` family) over charcoal/graphite dark sections (`#1B1815` family), replacing the template's electric-blue/navy palette
- Swapped the display typeface to Fraunces (serif) for a warmer, trade-heritage feel; kept DM Sans (body) and DM Mono (labels)
- Rebuilt the homepage hero as a two-column layout with a framed, bordered photo card and a "24-Hour Emergency Service" badge, replacing the template's full-bleed photo hero
- Replaced all business info with Mitchell Brothers' confirmed details: name, phone `(623) 462-7648`, address `805 W Baseline Rd, Tempe, AZ 85283`, "open 24 hours every day" hours, and a 5-item service list (AC Repair, AC Maintenance, Heating Repair, System Installation, Emergency Service)
- Replaced the template's real customer testimonials (verbatim quotes scraped from the original client's site) with a theme-based "Review Highlights" section (`ReviewHighlights.jsx` / `reviewHighlights.js`) summarizing public review themes plus a 5.0/3-review rating badge — no invented quotes
- Replaced the template's named real client properties ("Projects" section) with a generic, clearly-labeled "Service Scenarios" section (`ServiceScenarios.jsx`) — illustrative scenario cards, not real past jobs, with no property names
- Rewrote the service-area section around Tempe as the confirmed home base, with nearby East Valley cities presented explicitly as general-proximity copy, not a confirmed service list
- Replaced the template's real logo image with a text-based "MB" wordmark (`BrandMark` in `Nav.jsx`) — no logo asset exists for this business
- Removed the business email address entirely (none was available) rather than inventing one
- Renamed routes/components away from the original template's naming: the "Why Us" route and its section/page files, the desert-heat section, the projects section (now Service Scenarios), and the reviews section/data (now Review Highlights) — see `TECHNICAL_HANDOFF.md` for the current file map
- Updated `index.html` metadata (title, description, Open Graph/Twitter tags) and `package.json` name

### Repo Cleanup (pre-GitHub pass)

- Searched the full repo for residual references to the original template's business name, phone number, old route/component names, and old named client properties
- Renamed 4 stock photo asset files that were still internally named after the original template's real client properties (e.g. a named apartment complex) to neutral, generic filenames; updated their imports
- Rewrote `README.md`, `TECHNICAL_HANDOFF.md`, `LAUNCH_CHECKLIST.md`, and `QA_REPORT.md`, which had been left over from an unrelated earlier project template and did not reflect this codebase at all
- Fixed two pre-existing `react-refresh/only-export-components` ESLint errors (unrelated to branding) by moving shared values out of component files: Framer Motion stagger variants into `src/components/motionVariants.js`, and footer hours data into `src/data/hours.js`
- Confirmed `npm run build` and `npm run lint` both pass clean (0 errors, 0 warnings)
