# Collins Anyanwu — Portfolio

Personal portfolio of **Collins Anyanwu**, a GIS Developer & Enterprise Administrator with 19+
years across geospatial delivery, enterprise data platforms and automation in energy and
infrastructure — ArcGIS Enterprise, PostgreSQL/PostGIS, Python and AWS.

🔗 **Live:** https://portfolio-collins-anyanwu.vercel.app

## ✨ Highlights

- **Modern, animated single-page experience** — constellation hero, aurora gradients, scroll-reveal
  animations, animated counters, a 3D-tilt project gallery and a scroll-progress navbar.
- **Interactive dashboard previews** — faithful, animated recreations of three live enterprise
  platforms built for Ikeja Electric, rendered inside browser-frame mockups:
  - [IE Smart QR Asset Registry](https://ie-smart-assets.vercel.app/dashboard)
  - [IE Asset Dashboard](https://ie-asset-dashboard.vercel.app/)
  - [IDB 3.0 Assets Dashboard](https://idb-assets-dashboard-v3.vercel.app/)
- **Fully responsive** and accessible, with `prefers-reduced-motion` support.

## 🛠️ Tech Stack

| Area        | Tooling                                   |
| ----------- | ----------------------------------------- |
| Framework   | React 18 + TypeScript                     |
| Build       | Vite 5                                     |
| Styling     | Tailwind CSS 3                             |
| Animation   | Framer Motion 11                          |
| Icons       | lucide-react                              |

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build for production → dist/
npm run preview  # preview the production build locally
```

## 📁 Structure

```
src/
├── assets/            # profile image
├── components/        # section components (Hero, About, Skills, Projects, …)
│   └── ui/            # reusable primitives (Counter, Reveal, TiltCard, DashboardPreview, …)
├── data/content.ts    # single source of truth for all site content
├── hooks/             # custom hooks (active-section tracking)
└── index.css          # Tailwind layers + design tokens
```

All copy, skills, projects, experience and contact details live in
[`src/data/content.ts`](src/data/content.ts) — update that one file to change site content.

## 📫 Contact

- **Email:** collins.tochi@gmail.com
- **LinkedIn:** [in/collinsanyanwu](https://linkedin.com/in/collinsanyanwu)
- **GitHub:** [collins-geodev](https://github.com/collins-geodev)

---

© 2026 Collins Anyanwu. Built with React, TypeScript, Tailwind CSS & Framer Motion.
