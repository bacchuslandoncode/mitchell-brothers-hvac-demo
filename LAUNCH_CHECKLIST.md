# Launch Checklist — Mitchell Brothers Heating And Cooling Website

**Repo:** https://github.com/bacchuslandoncode/mitchell-brothers-hvac-demo
**Prepared by:** Landon Bacchus — bacchuslandon@icloud.com

Mark each item complete before treating this as a real, live business site. This demo is currently pitch-ready, not launch-ready.

---

## 1. Decisions & Approvals

- [ ] **Final business approval on all content** — all copy, services, hours, and service-area language reviewed and approved by an authorized representative of Mitchell Brothers.
- [ ] **License/insurance info confirmed** — the "Why Us" page currently shows a "Licensed & insured — pending verification" placeholder. Replace with real license number and insurer once confirmed, or remove the badge.
- [ ] **Review rating reverified** — the "5.0 from 3 reviews" figure reflects a public listing at time of writing. Reverify against the live listing before launch; update `src/data/reviewHighlights.js` if it has changed.

---

## 2. Content Accuracy

- [ ] **Phone number confirmed** — (623) 462-7648, used throughout via `MITCHELL_PHONE` in `src/components/Nav.jsx`.
- [ ] **Address confirmed** — 805 W Baseline Rd, Tempe, AZ 85283, used via `MITCHELL_ADDRESS`.
- [ ] **Hours confirmed** — currently "Open 24 hours, every day" (`src/data/hours.js`).
- [ ] **Service list confirmed** — AC Repair, AC Maintenance, Heating Repair, System Installation, Emergency Service (`src/data/services.js`).
- [ ] **Service-area language confirmed** — Tempe is presented as the confirmed home base; nearby East Valley cities (Chandler, Mesa, Ahwatukee, Guadalupe, South Scottsdale) are presented as general proximity, not an official service-area list. Confirm the real service radius and update `src/data/serviceAreas.js` accordingly.
- [ ] **Business email** — none is published anywhere in this demo. Add one via `src/components/Nav.jsx` and the footer/contact page if the business wants a public email.

---

## 3. Photography & Branding

- [ ] **Replace all stock photography** — every photo in `src/assets/photos/` is generic stock/demo imagery, not real photos of the business, its technicians, or its work. See `TECHNICAL_HANDOFF.md` for the full asset list.
- [ ] **Add a real logo** — the site currently uses a text-based "MB" monogram (`BrandMark` in `src/components/Nav.jsx`) in place of a logo file. Swap in a real logo asset if the business has one.
- [ ] **"Service Scenarios" section** — the home page's illustrative scenario cards use generic stock photography and generic labels (not real past jobs). Replace with real project photos and descriptions if available, or keep clearly generic.

---

## 4. Domain & DNS

- [ ] **Target domain confirmed**
- [ ] **DNS access confirmed**
- [ ] **SSL certificate** — Netlify provisions automatically via Let's Encrypt; confirm it activates after domain points
- [ ] **www redirect configured**
- [ ] **Netlify custom domain added** in Netlify dashboard under Domain Management

---

## 5. Redirects & Routing

- [ ] **`public/_redirects` in place** — `/* /index.html 200` already committed; confirm Netlify picks it up
- [ ] **No broken internal links** — all 7 routes resolve (see `README.md` for the route table)

---

## 6. SEO & Metadata

- [ ] **`<title>` and meta description reviewed** — currently marked as a demo concept in `index.html` (`noindex, nofollow`). Remove the noindex directive and finalize copy before going live.
- [ ] **Open Graph / Twitter card content reviewed**
- [ ] **`robots.txt`** — add one allowing crawlers once ready to go live
- [ ] **Sitemap** — generate and submit `sitemap.xml`
- [ ] **Structured data (LocalBusiness/HVACBusiness JSON-LD)** — intentionally omitted until address/license are fully confirmed; add once verified

---

## 7. Analytics

- [ ] **Analytics provider decided** — none currently installed
- [ ] **Tracking code installed**
- [ ] **Conversion tracking** — track "Call Now" clicks and the Apply/Contact form submissions

---

## 8. Performance & Images

- [ ] **All photos already in `.webp`** — confirmed
- [ ] **Lazy loading confirmed** — non-critical `<img>` tags use `loading="lazy"`
- [ ] **Lighthouse audit run** — not yet run against a deployed URL; target Performance ≥ 90, Accessibility ≥ 90

---

## 9. Mobile & Cross-Browser QA

- [ ] **Mobile QA on a real device** — this demo was checked in an emulated mobile viewport only (see `QA_REPORT.md`); verify on an actual iPhone/Android before launch
- [ ] **Cross-browser check** — Chrome, Safari, Firefox, Edge

---

## 10. Forms

- [ ] **Apply form backend** — `src/sections/Apply.jsx` is a demo form that does not submit anywhere. Connect to Netlify Forms, Formspree, or an email/CRM integration before real use.
- [ ] **Contact page** — currently phone + address only, no contact form. Decide if one is wanted.

---

## 11. Legal & Compliance

- [ ] **License/insurance disclosure** — see item 1 above
- [ ] **Privacy policy page** — add if any form collects user data
- [ ] **ADA / WCAG accessibility** — run an accessibility audit (the project has `audit`/`scan` tooling available) and address critical issues

---

## 12. Post-Launch

- [ ] **Netlify deploy notifications set up**
- [ ] **Uptime monitoring**
- [ ] **Test all routes on the live domain**
