# Launch Checklist — Davillier Law Group Website

**Demo URL:** https://newdavillierdemo.netlify.app/
**Repo:** https://github.com/bacchuslandon/davillier-website-demo
**Prepared by:** Landon Bacchus — lbacchus@davillierlawgroup.com

Mark each item complete before going live.

---

## 1. Decisions & Approvals

- [ ] **React/Vite vs WordPress decision finalized**
  The demo is built in React/Vite deployed on Netlify. If the firm requires WordPress (for editorial CMS, existing hosting, or third-party plugins), a port will be required before launch. Confirm with Derius and firm leadership.

- [ ] **Final firm approval on all content**
  All copy, attorney names/titles, staff roster, office addresses, phone numbers, and practice area descriptions reviewed and approved by an authorized firm representative.

- [ ] **Derius technical review complete**
  Derius to review codebase, hosting setup, and any integration requirements (CRM, intake forms, analytics) before go-live sign-off.

---

## 2. Domain & DNS

- [ ] **Target domain confirmed** (e.g., `davillierlawgroup.com` or a subdomain)
- [ ] **DNS access confirmed** — whoever manages DNS records has credentials ready
- [ ] **SSL certificate** — Netlify provisions automatically via Let's Encrypt; confirm it activates after domain points
- [ ] **Old site backed up** — full backup of existing website files and database (if WordPress) before any DNS changes
- [ ] **DNS cutover plan in place** — low TTL set in advance; rollback plan documented
- [ ] **www redirect configured** — ensure `www.` redirects to apex or vice versa
- [ ] **Netlify custom domain added** in Netlify dashboard under Domain Management

---

## 3. Redirects & Routing

- [ ] **`public/_redirects` in place** — `/* /index.html 200` already committed; confirm Netlify picks it up
- [ ] **301 redirects for old URLs** — if old site had `/attorneys.html`, `/practice-areas.php`, etc., add redirects in `_redirects` to map old paths to new routes
- [ ] **No broken internal links** — all `/practice-areas/:slug` routes resolve to valid pages

---

## 4. SEO & Metadata

- [ ] **Page titles set per route** — each page sets `document.title` correctly (verify in browser tab for all 8 routes)
- [ ] **Meta description** — add `<meta name="description">` per page (currently not implemented; recommend adding before launch)
- [ ] **Open Graph tags** — `og:title`, `og:description`, `og:image` for social sharing
- [ ] **Canonical URLs** — set canonical `<link>` tags if multiple URLs could resolve to the same content
- [ ] **`robots.txt`** — add `public/robots.txt` allowing all crawlers (or restrict staging URL before launch)
- [ ] **Sitemap** — generate and submit `sitemap.xml`; Netlify plugin or manual generation
- [ ] **Google Search Console** — add property for the live domain; submit sitemap

---

## 5. Analytics

- [ ] **Analytics provider decided** — Google Analytics 4 or Netlify Analytics
- [ ] **Tracking code installed** — add GA4 snippet to `index.html` or via Netlify plugin
- [ ] **Goal/conversion tracking** — track "Request a Consultation" clicks and phone link clicks

---

## 6. Performance & Images

- [ ] **All photos in `.webp` or `.avif`** — most attorney/staff photos already in `.webp`; verify no remaining `.jpg` in active use
- [ ] **Large images compressed** — `staff-denya-ricks.jpg` is ~338 kB; convert to `.webp` before launch
- [ ] **Lazy loading confirmed** — all `<img>` tags in card components use `loading="lazy"`
- [ ] **Lighthouse audit run** — target Performance ≥ 90, Accessibility ≥ 90 on mobile and desktop

---

## 7. Mobile & Cross-Browser QA

- [ ] **Mobile QA on real device** — test on iPhone (Safari) and Android (Chrome)
- [ ] **Tablet layout verified** — 860px breakpoint reviewed
- [ ] **Cross-browser check** — Chrome, Safari, Firefox, Edge

---

## 8. Legal & Compliance

- [ ] **Attorney advertising disclaimer in footer** — already present; confirm wording approved by firm
- [ ] **Privacy policy page** — add if the site collects any user data (forms, analytics)
- [ ] **ADA / WCAG accessibility** — run axe or Lighthouse accessibility audit; address critical issues

---

## 9. Forms & Contact

- [ ] **"Request a Consultation" destination confirmed** — currently links to `/contact` page; confirm whether a form, Calendly, or email link is desired
- [ ] **Contact form (if added)** — connect to Netlify Forms, Formspree, or firm CRM
- [ ] **Email address confirmed** — `info@davillierlawgroup.com` is the correct public contact address

---

## 10. Post-Launch

- [ ] **Netlify deploy notifications set up** — email or Slack alert on deploy failure
- [ ] **Uptime monitoring** — set up UptimeRobot or similar for the live domain
- [ ] **Search Console verified** — confirm crawling begins after DNS propagation
- [ ] **Test all routes on live domain** — repeat QA checklist against production URL
- [ ] **Announce internally** — notify firm staff of new URL
