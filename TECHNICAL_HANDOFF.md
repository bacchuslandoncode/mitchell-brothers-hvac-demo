# Technical Handoff — Davillier Law Group Website Demo

**Date:** 2026-06-30
**Prepared by:** Landon Bacchus — lbacchus@davillierlawgroup.com
**Repo:** https://github.com/bacchuslandon/davillier-website-demo
**Live Demo:** https://newdavillierdemo.netlify.app/

---

## Stack Note

This site is built in **React + Vite**, not WordPress. Before launch, the firm should decide whether to:

1. **Keep React/Vite** — deploy to Netlify or Vercel, fast and low-maintenance.
2. **Port to WordPress** — higher editorial flexibility but requires a developer build-out.

This document assumes React/Vite. See `LAUNCH_CHECKLIST.md` for the decision checkpoint.

---

## Folder Structure

```
davillier-premium/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── _redirects          # Netlify SPA routing fallback
├── src/
│   ├── alt/                # Alternate layout experiments (not in production routing)
│   ├── assets/
│   │   ├── davillier/      # All firm photos and logos
│   │   └── custom/         # Supplemental stock images
│   ├── components/         # Shared layout components
│   ├── data/               # Firm content data files
│   ├── pages/              # Full page components (one per route)
│   ├── sections/           # Homepage and reusable page sections
│   ├── App.jsx             # Route definitions
│   ├── AppAlt.jsx          # Alternate layout (not in use)
│   ├── main.jsx            # React entry point
│   └── index.css           # Global CSS custom properties and base styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json             # Vercel SPA routing fallback (if switching hosts)
└── vite.config.js
```

---

## Where Things Live

### Components (`src/components/`)

| File                    | Purpose                                              |
|-------------------------|------------------------------------------------------|
| `Nav.jsx`               | Top navigation bar, mobile menu, attorneys dropdown  |
| `Footer.jsx`            | Site-wide footer with offices and legal disclaimer   |
| `Layout.jsx`            | Wraps Nav + Footer around page content               |
| `PageHero.jsx`          | Reusable hero banner used on interior pages          |
| `FirstLoadOverlay.jsx`  | Animated intro overlay shown on first page load      |

### Sections (`src/sections/`)

These are used inside `Home.jsx` and reused on interior pages.

| File           | Section                                         |
|----------------|-------------------------------------------------|
| `Hero.jsx`     | Full-screen homepage hero with headline + CTAs  |
| `About.jsx`    | Firm overview — pull quote, body copy, pillars  |
| `Practice.jsx` | Practice area cards + numbered archive index    |
| `Process.jsx`  | "How We Work" three-step process section        |
| `Team.jsx`     | Partners grid + Associates & Counsel grid       |
| `Offices.jsx`  | Asymmetric photo grid of three office locations |
| `CTA.jsx`      | Contact/consultation CTA with office panel      |

### Pages (`src/pages/`)

| File                   | Route                        |
|------------------------|------------------------------|
| `Home.jsx`             | `/`                          |
| `AboutPage.jsx`        | `/about`                     |
| `AttorneysPage.jsx`    | `/attorneys`                 |
| `StaffPage.jsx`        | `/staff`                     |
| `PracticeAreasPage.jsx`| `/practice-areas`            |
| `PracticeDetailPage.jsx`| `/practice-areas/:slug`     |
| `ContactPage.jsx`      | `/contact`                   |
| `NotFoundPage.jsx`     | `*` (404)                    |

---

## Data Files (`src/data/`)

### Attorney Data — `src/data/attorneys.js`

Exports two arrays:
- `partners` — managing partners and named partners
- `associates` — associates and counsel

Each entry has: `id`, `name`, `title`, `img` (imported asset).

**To add or update an attorney:**
1. Add their photo to `src/assets/davillier/` (use `.webp` for best performance).
2. Import it at the top of `attorneys.js`.
3. Add or edit their entry in the `partners` or `associates` array.

### Staff Data — `src/data/staff.js`

Exports `supportStaff` array. Same structure: `id`, `name`, `title`, `img`.

**To add or update staff:**
Same process as attorneys — add photo, import, update array.

### Practice Area Data — `src/data/practiceAreas.js`

Exports an array of practice area objects. Each entry has:
- `slug` — URL path segment (e.g., `business-corporate`)
- `title`, `sub`, `index`, `body`
- `detail` — expanded copy shown on the detail page

**To add a practice area:**
Add an entry to the array and ensure `slug` matches the card in `Practice.jsx`.

---

## Images (`src/assets/davillier/`)

| File pattern                        | Used for              |
|-------------------------------------|-----------------------|
| `attorney-[name].webp`              | Attorney photos       |
| `staff-[name].jpg` / `.webp`        | Staff photos          |
| `office-[city].webp`                | Office location photos|
| `logo-dlg-white.avif`               | Nav logo              |
| `logo-dlg-transparent.png`          | Alternate logo use    |
| `daniel-business.webp`              | Process section photo |
| `conference-our-people.webp`        | Team/About photo      |
| `exchange-centre.jpg`               | New Orleans office    |

Prefer `.webp` or `.avif` for new images — smaller file sizes and better performance.

---

## How to Update Content

### Update attorney name or title
Edit `src/data/attorneys.js` — find the entry by `id` and update `name` or `title`.

### Swap an attorney photo
1. Add the new photo to `src/assets/davillier/`.
2. Update the import at the top of `attorneys.js`.
3. Point the attorney's `img` field to the new import.

### Update body copy
Most copy lives directly in the section/page component files under `src/sections/` and `src/pages/`. Search for the text string and edit in place.

### Update phone numbers or office addresses
Edit `src/sections/CTA.jsx` (contact panel) and `src/sections/Offices.jsx` (office cards). The nav dropdown phone numbers live in `src/components/Nav.jsx`.

### Update practice area descriptions
Edit `src/data/practiceAreas.js`.

---

## Deployment (Netlify)

The site is currently deployed at **https://newdavillierdemo.netlify.app/**.

### Auto-deploy from GitHub
Netlify is connected to the `main` branch of this repo. Every push to `main` triggers a new deploy automatically.

### Manual deploy steps
1. Run `npm run build` locally to verify the build passes.
2. Push changes to `main`.
3. Netlify picks it up within ~60 seconds.

### SPA routing
`public/_redirects` contains:
```
/*    /index.html    200
```
This ensures React Router handles all routes correctly on Netlify (prevents 404s on direct URL access).

### Environment variables
No environment variables are required for the current build. If analytics or form handling is added later, add them in the Netlify dashboard under **Site Settings → Environment Variables**.

---

## Alt Files (`src/alt/`)

`CTAAlt.jsx`, `HeroAlt.jsx`, `NavAlt.jsx`, `PracticeAlt.jsx` and `AppAlt.jsx` are experimental alternate layouts explored during the design process. They are **not active in production routing** and can be removed before launch if desired.
