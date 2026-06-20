# Student Affairs Portal

[![Next.js Version](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React Version](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.0-ff007f?style=for-the-badge&logo=framer-motion)](https://www.framer.com/motion/)

The **Student Affairs Portal** is a modern, interactive web application serving as the central digital hub for student welfare, campus housing, counseling, scholarship management, activities, emergency contacts, and announcements.

---

## UI & UX Features

- **Scroll-Triggered Expanding Hero (`ScrollExpandMedia`)** — A cinematic landing section that scales to full-screen viewport as the user scrolls.
- **Vertical Journey Map (`ScrollPath`)** — A scroll-triggered SVG path tracker that grows downward and dynamically highlights section cards (About, Vision, Responsibilities, Initiatives).
- **3D Circular Testimonial Carousel (`CircularTestimonials`)** — Showcases student quotes and campus photos using 3D perspective, Y-axis rotations, and word-by-word text animation.
- **Minimalist Interactive Dock (`MinimalistDock`)** — A floating nav bar that expands active and hovered links via Framer Motion transitions.
- **Notice Ticker Marquee** — A continuous, hardware-accelerated scrolling marquee in the header for emergency announcements and admin notices.
- **Seamless Theme Integration** — Built-in Light/Dark mode using Tailwind v4 post-processing with custom styling retained across components.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with `ScrollExpandMedia` hero and `ScrollPath` navigator |
| `/about` | Alternating visual grid linking to administrative sub-divisions |
| `/vision` | Core guiding principles and four pillars: Empowerment, Wellbeing, Integrity, Inclusion |
| `/responsibilities` | Office duties organized by Welfare, Residential Life, Financial Aid, and Extracurriculars |
| `/initiatives` | MindSpace, OneCampus, LeadNext, Green Campus programs with a 2021–2026 milestone timeline |
| `/welfare` | Tab-based service console with a counseling appointment booking form |
| `/team` | Faculty/staff directory and 3D testimonial gallery |
| `/resources` | Dashboard linked to the Students' Welfare Board Workbook with Google Sheets integration |
| `/contact` | Emergency hotlines with WhatsApp integration, automated mailer, embedded map, and FAQ accordion |

---

## Project Structure

```
Student_Affairs/
├── app/                      # Next.js App Router root
│   ├── about/
│   ├── api/                  # Serverless API routes (e.g. contact logger)
│   ├── campus-life/
│   ├── contact/
│   ├── gallery/
│   ├── initiatives/
│   ├── notices/
│   ├── resources/
│   ├── responsibilities/
│   ├── team/
│   ├── vision/
│   ├── welfare/
│   ├── globals.css
│   └── layout.js             # Root layout (Navbar, Footer, Theme provider)
├── components/
│   ├── ui/                   # Modular navbar components
│   ├── AboutUsSection.js
│   ├── CircularTestimonials.js
│   ├── FacultyDirectory.js
│   ├── MinimalistDock.js
│   ├── Navbar.js
│   ├── ScrollExpandMedia.js
│   ├── ScrollPath.js
│   └── ThemeProvider.js
├── lib/
│   └── notices.js            # Announcement arrays for notice ticker
└── public/
    └── assets/               # Images, icons, and office workbook
```

---

## Getting Started

**Prerequisites:** Node.js v18+ and npm.

```bash
# Clone and install
git clone https://github.com/your-repo/Student_Affairs.git
cd Student_Affairs
npm install

# Development
npm run dev
# Open http://localhost:3000

# Production
npm run build
npm run start
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Geist, Geist Mono, Merriweather |

> The portal is optimized for all screen sizes from mobile to ultra-wide, following W3C accessibility and responsive design guidelines.
