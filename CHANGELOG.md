# Changelog — Davillier Law Group Website Demo

All notable changes to this project are documented here.

---

## [Unreleased] — Pre-Launch

Changes pending firm approval and go-live decision.

---

## 2026-06-30

### Maintenance
- Resolved all 12 `react-hooks/exhaustive-deps` ESLint warnings across 7 files
  - Added correct dependency arrays (`[ref, delay]`, `[ref, animation]`, `[i]`) to all one-shot intersection observer hooks
  - No behavior changes; all hooks remain fire-once scroll-reveal patterns
  - Build and lint now pass with 0 errors and 0 warnings
- Initialized git repository; set branch to `main`
- Set repo-local git identity (Landon Bacchus / lbacchus@davillierlawgroup.com)
- Added `.env`, `.env.local`, `.env.production`, `.vite`, `.netlify` to `.gitignore`
- Created professional handoff documentation: `README.md`, `TECHNICAL_HANDOFF.md`, `QA_REPORT.md`, `LAUNCH_CHECKLIST.md`, `CHANGELOG.md`
- Pushed initial commit to GitHub: https://github.com/bacchuslandon/davillier-website-demo

---

## 2026-06 (Design & Build Phase)

### Homepage Redesign
- Rebuilt homepage from scratch with a premium editorial layout targeting a high-end law firm aesthetic
- Deep navy (`#0C1438`) primary background with bronze/gold accent system (`--accent`, `--accent-light`, `--accent-dim`)
- Section-by-section scroll reveal animations using `IntersectionObserver`
- Consistent typographic system: display serif (Cormorant Garamond), mono (JetBrains Mono), body (Inter)

### Hero Section
- Full-screen hero with large editorial headline and italic display type
- Replaced stock imagery approach with firm-specific photography
- Added animated entrance for headline, subline, and CTA buttons
- Refined headline copy to lead with firm identity and scale

### Color & Background Updates
- Established CSS custom property system in `index.css` for all colors, spacing, and typography
- Created section-to-section color bridges using gradient overlays (navy → cream → navy transitions)
- Warm paper tone (`#F4EDE1`) used for office/CTA sections; deep navy for team/about sections

### Practice Areas Section
- Redesigned as an editorial two-tier layout: featured 3-column cards + numbered archive index
- Featured cards show index number, sub-label, title, and body copy with hover lift effect
- Archive index rows show practice number, title, sub-label, and arrow indicator
- Practice area detail pages added for 10 areas via `/practice-areas/:slug` routing

### Attorneys Section & Dropdown
- Built staggered photo card grid for partners (6-col) and associates/counsel (6-col)
- Attorneys navigation dropdown added to `Nav.jsx` with full roster, titles, and individual links
- Dropdown accessible on hover (desktop) and tap (mobile)
- Cards use `IntersectionObserver` stagger timing (`i * 55ms`) for cascade reveal

### Support Staff Page
- Dedicated `/staff` route and page (`StaffPage.jsx`)
- 4-column photo grid with same stagger animation system as attorneys
- Text-only card variant for staff without photos

### CTA / Contact Section
- Redesigned contact section with two-column layout: copy + office panel
- Office panel shows all three locations with city, state, and phone number
- "Request a Consultation" button routes to `/contact` page
- `CTAAlt.jsx` alternate layout preserved in `src/alt/` for reference

### Offices Section
- Asymmetric photo grid: New Orleans featured (spans 2 rows left), Phoenix and Sandpoint stacked right
- Cards reveal with staggered `IntersectionObserver` timing
- Hover: image scale, silver top bar expand, address opacity increase

### Footer Cleanup
- Simplified footer: firm name, state bar license line, and attorney advertising disclaimer
- Removed extraneous links and columns; clean mono typography

### Solai Feedback Revisions
- Adjusted attorney card photo positioning for Solai Wyman (`objectPosition: 'center top'`)
- Reviewed staff grid ordering and photo crop consistency

### Readability Improvements
- Increased body copy font size across interior pages to 18–19px
- Tightened line heights on hero headings (0.93–0.95)
- Improved contrast on muted text (`--text-muted`) in dark sections
- Added letter-spacing to mono labels for improved legibility at small sizes

### Process Section
- Added "How We Work" three-step process section between About and Team
- Features Daniel Davillier business photo on right column
- Steps use numbered vertical tick layout

### About Section
- Redesigned with oversized pull quote, editorial left-border treatment
- Two-column layout: body copy left, firm identity checklist right
- Three-pillar grid at bottom (Local Knowledge, National Experience, Client-Centered)
- `teaser` prop allows compact version reuse on homepage vs full version on `/about`
