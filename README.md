# Alwin Joseph — Portfolio Website

A clean, fast, and responsive single-page personal portfolio website for **Alwin Joseph**, Aspiring Data Scientist & AI Engineer. Built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack
- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS (Custom Morflax-inspired 3D palette and radii)
- **Icons:** Lucide React & custom SVG icons
- **Animations:** Framer Motion (subtle scroll reveals, respecting `prefers-reduced-motion`)
- **Content:** Fully centralized in [`src/data/content.ts`](./src/data/content.ts)

## 🎨 Design Philosophy
- **Look:** Morflax-style soft 3D, glossy feel with rounded shapes (24–32px radii) and multi-layered soft drop shadows.
- **Palette:** Light off-white `#F7F5FF`, deep navy `#14123A`, and signature accent gradient `#7C5CFF` → `#4F8BFF` → `#FF7AC6`.
- **Typography:** Plus Jakarta Sans for headings, Inter for body text.
- **Hero Visual:** Lightweight floating 3D spheres, cubes, and torus rings generated with pure SVG and CSS animations.

## 📁 Project Structure
```
alwin-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── BrandIcons.tsx       # Crisp SVGs for GitHub and LinkedIn
│   │   ├── FloatingShapes.tsx   # Glossy 3D floating SVG objects
│   │   ├── Navbar.tsx           # Sticky minimal navbar with mobile menu
│   │   ├── Hero.tsx             # Hero section with 3D background & CTA buttons
│   │   ├── About.tsx            # Engineering summary and background
│   │   ├── Skills.tsx           # Categorized skill cards with interactive chips
│   │   ├── Experience.tsx       # Vertical timeline of professional roles
│   │   ├── Projects.tsx         # 3 Featured large cards + More Projects grid
│   │   ├── Education.tsx        # Education & Certifications 2-column layout
│   │   ├── Contact.tsx          # Direct contact links (Email, LinkedIn, GitHub)
│   │   └── Footer.tsx           # Copyright, credits, and back-to-top button
│   ├── data/
│   │   └── content.ts           # Central source of truth for all content & links
│   ├── App.tsx                  # App layout & scroll reveal wrapper
│   ├── main.tsx                 # React DOM entry point
│   └── index.css                # Tailwind directives, animations & custom glass styles
├── DESIGN.md                    # Detailed design system specification
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## 🛠️ Getting Started

### Prerequisites
Node.js (v18+) and npm installed.

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized, production-ready bundle in `dist/`.

## 🚢 Deployment
- **Vercel:** Connect the repository and set framework preset to `Vite`. Root directory: `./` (or `alwin-portfolio`).
- **GitHub Pages:** Deploy the `dist` directory using `gh-pages` or GitHub Actions.
