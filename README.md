# Mitchell Brothers Heating And Cooling — Website Demo

A demo website concept for Mitchell Brothers Heating And Cooling, an HVAC contractor based in Tempe, AZ. Built to show a modern, conversion-focused site for a 24-hour residential HVAC business.

This is a **pitch/demo project**, not the business's live site. Content is based on publicly available business information and should be verified with the business before any real launch.

---

## Tech Stack

| Layer       | Technology                                 |
|-------------|---------------------------------------------|
| Framework   | React 19                                    |
| Bundler     | Vite 8                                      |
| Routing     | React Router v7                             |
| Animation   | Framer Motion 11                            |
| Styling     | CSS custom properties (inline + global), no Tailwind |
| Deployment  | Netlify (SPA redirect in `public/_redirects`) |
| Lint        | ESLint + react-hooks + react-refresh        |

There is no CMS or backend. Copy and data live directly in `src/data/` and component files.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Production build (outputs to dist/)
npm run build

# Lint
npm run lint
```

---

## Routes

| Path             | Page                                  |
|------------------|----------------------------------------|
| `/`              | Home                                   |
| `/services`      | Services (AC repair, maintenance, heating, installation, emergency) |
| `/why-us`        | Why Mitchell Brothers                  |
| `/reviews`       | Review highlights                      |
| `/service-area`  | Service area (Tempe + East Valley)     |
| `/apply`         | Careers / job application (demo form)  |
| `/contact`       | Contact                                |

---

## Business Info Used In This Demo

- **Name:** Mitchell Brothers Heating And Cooling
- **Category:** HVAC contractor
- **Phone:** (623) 462-7648
- **Address:** 805 W Baseline Rd, Tempe, AZ 85283
- **Hours:** Open 24 hours, every day
- **Service focus:** Tempe and the East Valley
- **Services:** AC Repair, AC Maintenance, Heating Repair, System Installation, Emergency Service

No business email address is published anywhere in this demo (none was available at time of writing). No license/insurance number is asserted — the site shows this as "pending verification." See `TECHNICAL_HANDOFF.md` for what else still needs confirming before a real launch.

---

## Project Contacts

- **Landon Bacchus** — bacchuslandon@icloud.com
