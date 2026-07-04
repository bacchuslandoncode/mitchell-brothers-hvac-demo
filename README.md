# Davillier Law Group — Website Demo

Premium law firm website demo built for Davillier Law Group (DLG), a full-service firm headquartered in New Orleans with offices in Phoenix and Sandpoint.

---

## Live Demo

**https://newdavillierdemo.netlify.app/**

## GitHub Repository

**https://github.com/bacchuslandon/davillier-website-demo**

---

## Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Framework   | React 19                |
| Bundler     | Vite 8                  |
| Routing     | React Router v7         |
| Styling     | CSS custom properties (inline + global) |
| Deployment  | Netlify                 |
| Lint        | ESLint + react-hooks    |

> **Note:** This demo is built in React/Vite — not WordPress. See `TECHNICAL_HANDOFF.md` for the CMS decision discussion.

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

| Path                          | Page                          |
|-------------------------------|-------------------------------|
| `/`                           | Home                          |
| `/about`                      | About the Firm                |
| `/attorneys`                  | Attorneys                     |
| `/staff`                      | Support Staff                 |
| `/practice-areas`             | Practice Areas (all)          |
| `/practice-areas/:slug`       | Practice Area Detail          |
| `/contact`                    | Contact                       |
| `*`                           | 404 Not Found                 |

---

## Project Contacts

- **Landon Bacchus** — lbacchus@davillierlawgroup.com
