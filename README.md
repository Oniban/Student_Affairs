# Student Affairs Portal

[![Next.js Version](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React Version](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.0-ff007f?style=for-the-badge&logo=framer-motion)](https://www.framer.com/motion/)

The **Student Affairs Portal** is a modern, responsive, and interactive web application serving as the central digital hub for student welfare, campus housing, counseling, scholarship management, activities, emergency contacts, and announcements.

---

## UI & UX Features

- **Notice Ticker Marquee** — A continuous, hardware-accelerated scrolling marquee in the header for emergency announcements and administrative notices.
- **Scroll-Triggered Expanding Hero (`ScrollExpandMedia`)** — A cinematic landing section that scales to full-screen viewport as the user scrolls, unlocking the rest of the page.
- **Vertical Journey Map (`ScrollPath`)** — A scroll-triggered SVG path tracker that grows downward and dynamically highlights active section cards.
- **3D Circular Testimonial Carousel (`CircularTestimonials`)** — Showcases student quotes and campus photos using 3D perspective, Y-axis rotations, and word-by-word text animation.
- **Minimalist Interactive Dock (`MinimalistDock`)** — A floating navigation bar that expands active and hovered links via Framer Motion transitions.
- **Floating Action Menu (`FloatingActionMenu`)** — A mobile-only, expandable floating shortcut menu offering quick access to all essential pages.
- **Seamless Theme Integration** — Built-in Light/Dark mode using Tailwind v4 post-processing with custom styling retained across all components.

---

## Pages & Features Directory

Here is a comprehensive breakdown of all pages in the project, including a description and details on their key interactive features:

### 1. Landing Page (`/`)
* **Description:** The entry point of the portal designed with scroll-triggered animations and immersive visuals that present the portal's core categories.
* **Features:**
  * **Scroll-Triggered Hero:** Implements `ScrollExpandMedia` to scale a video/media layout as the user scrolls down.
  * **Journey Roadmap:** Tracks scroll depth using `ScrollPath`, lighting up a vertical SVG line that highlights key sections (About, Vision, Responsibilities, Initiatives).
  * **Mobile Navigation Overlay:** Displays a floating action menu on smaller screens to quickly traverse the application.

### 2. About Us (`/about`)
* **Description:** Provides an outline of the Student Affairs Office, highlighting its bridging role between students and university administration.
* **Features:**
  * **Alternating Services Grid:** Displays structural info about Vision, Key Responsibilities, and Initiatives with clean hover card effects and instant redirects.
  * **Dynamic Parallax Backgrounds:** Renders organic floating circles that translate on scroll to create a sense of depth.
  * **Departmental Contact CTA:** An integrated action panel that links directly to the emergency contact directory.

### 3. Vision & Mission (`/vision`)
* **Description:** Outlines the core principles, guiding philosophy, and pillars of action governing the Student Affairs Office.
* **Features:**
  * **Philosophy Boards:** Features custom glassmorphic panels detailing the office's core Vision and Mission statements.
  * **Pillars of Action:** Uses cards to break down the four main pillars: Student Empowerment, Holistic Wellbeing, Ethical Integrity, and Inclusive Community.

### 4. Key Responsibilities (`/responsibilities`)
* **Description:** Details the specific administrative duties of the office organized by key domains of student campus life.
* **Features:**
  * **Domain Cards:** Segregates duties into Student Welfare, Residential Life, Financial Aid, and Extracurricular Activities.
  * **Core Duties Checklists:** Shows sub-task lists under each category with customized checklists utilizing dynamic SVGs.

### 5. Major Initiatives (`/initiatives`)
* **Description:** Presents active, structural welfare campaigns and details the historical timeline of student-led projects.
* **Features:**
  * **Initiatives Deck:** Focuses on *MindSpace* (Mental Health), *OneCampus* (Inclusion), *LeadNext* (Leadership), and *Green Campus* (Sustainability) with milestone stats.
  * **Milestone Progress Tracker:** Displays specific accomplishments (e.g. ₹8L grants disbursed, 12,000+ sessions held) in highlighted panels.
  * **Vertical Milestone Timeline:** An interactive timeline tracking program evolutions chronologically from 2021 to 2026.

### 6. Student Welfare (`/welfare`)
* **Description:** The primary service console facilitating counseling requests, housing information, scholarship criteria, and career workshops.
* **Features:**
  * **Interactive Service Switcher:** A sidebar navigation layout to toggle details for Counseling, Housing, Financial Aid, and Career Guidance.
  * **Counseling Appointment Form:** An inline reservation form enabling students to request specific counseling dates, times, and details.

### 7. Faculty & Staff / Team (`/team`)
* **Description:** A searchable directory of advisors, deans, and hostel wardens paired with a student testimonials gallery.
* **Features:**
  * **Search & Category Filters:** Real-time search by name/role combined with category pills (e.g. Dean, Associate Dean, Warden).
  * **Faculty Detail Modal:** Shows full academic background, publications, research interests, and includes an inline query submission form.
  * **3D Testimonials Carousel:** A circular Y-axis 3D rotating slideshow showcasing student quotes and photos with auto-play and keyboard controls.

### 8. Resources & Support (`/resources`)
* **Description:** A utility dashboard containing downloadable official forms and live Excel workbook integrations.
* **Features:**
  * **Google Sheets Workbook Tabs:** Direct external links referencing specific tabs of the Students' Welfare Board Workbook (Bus Services, Gymkhana Team, Social Media, etc.).
  * **Excel Workbook Downloads:** Allows downloading the local XLSX workbook file directly to the user's computer.

### 9. Contact & Emergency (`/contact`)
* **Description:** A centralized directory for hotlines, WhatsApp shortcuts, physical office mapping, and support inquiries.
* **Features:**
  * **SWB Helpline Cards:** Displays prominent buttons for emergency numbers with built-in touch dialers and WhatsApp chat redirections.
  * **Interactive Map Card:** A responsive map block pointing to the IIT Patna Admin Block with coordinates that open directly in Google Maps.
  * **Query Submission Form:** Submits student issues asynchronously via a serverless API while preparing a pre-filled client-side mailto draft.
  * **FAQ Accordion:** An interactive Q&A interface resolving common concerns using smooth accordion slide animations.

### 10. Campus Life (`/campus-life`)
* **Description:** Highlights student dormitories, clubs, sports facilities, and social hubs with responsive layout grids.
* **Features:**
  * **Alternating Layout Cards:** Presents information on Hostels, Clubs, Sports, and Canteen spaces.
  * **Touch-Friendly Mobile Gallery:** Uses a touch-scrollable swipe gallery with a progress tracker on mobile.
  * **Scroll-Hijacked Desktop Gallery:** Translates a horizontal photo strip across the viewport dynamically matching vertical scroll progress.

### 11. Photo Gallery (`/gallery`)
* **Description:** A filterable media gallery showcasing moments from campus celebrations, athletic meets, and student events.
* **Features:**
  * **Interactive Categories:** Allows filtering images by Events, Campus, Sports, and Welfare.
  * **Lightbox View:** Clicking a photo opens a fullscreen modal with navigation controls supporting mouse clicks, arrows, and Escape key listeners.

### 12. All Notices (`/notices`)
* **Description:** A centralized, chronological page logging all announcements published through the header ticker marquee.
* **Features:**
  * **Notice Archive Cards:** Shows all active alerts complete with dates, categories, descriptive details, and status tags.
  * **Back-to-Home Redirection:** A dedicated back button linking easily back to the main landing page.

---

## Project Structure

```
Student_Affairs/
├── app/                      # Next.js App Router root
│   ├── about/                # About Page
│   ├── api/                  # Serverless API routes (e.g. contact logger)
│   ├── campus-life/          # Campus Life Page
│   ├── contact/              # Contact Page with FAQ
│   ├── gallery/              # Photo Gallery Page
│   ├── initiatives/          # Initiatives & Timeline Page
│   ├── notices/              # Notice Archive Page
│   ├── resources/            # Resources & Workbook Page
│   ├── responsibilities/     # Key Responsibilities Page
│   ├── team/                 # Faculty Directory & Testimonials Page
│   ├── vision/               # Vision & Mission Page
│   ├── welfare/              # Student Welfare & Booking Form Page
│   ├── globals.css           # Global Tailwind style overrides
│   └── layout.js             # Root layout (Navbar, Footer, Theme provider)
├── components/               # Shared components
│   ├── ui/                   # Sub-menu & Navbar items
│   ├── AboutUsSection.js     # About layout section
│   ├── CircularTestimonials.js # 3D testimonial slider
│   ├── FAQAccordion.js       # FAQ Accordion component
│   ├── FacultyDirectory.js   # Searchable faculty cards & modals
│   ├── FloatingActionMenu.js # Mobile quick action overlay
│   ├── Footer.js             # Foot navigation & details
│   ├── HostelCarousel.js     # Carousel for student housing
│   ├── InteractiveGallery.js # Filterable gallery & lightbox
│   ├── MinimalistDock.js     # Desktop dock nav
│   ├── Navbar.js             # Navigation header & marquee notice
│   ├── ScrollExpandMedia.js  # Expanding landing page header
│   ├── ScrollPath.js         # Roadpath SVG tracker
│   ├── ThemeProvider.js      # Light/Dark mode context provider
│   └── ThemeToggle.js        # Navbar theme switch button
├── lib/
│   └── notices.js            # Announcement array database
└── public/
    └── assets/               # Local images, logo, and spreadsheet workbooks
```

---

## Getting Started

**Prerequisites:** Node.js v18+ and npm installed.

```bash
# Clone the repository
git clone https://github.com/your-repo/Student_Affairs.git
cd Student_Affairs

# Install dependencies
npm install

# Run the local development server
npm run dev
# Open http://localhost:3000 in your browser

# Build the production bundle
npm run build
npm run start
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Core Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Geist, Geist Mono, Merriweather |

> Designed and optimized to align with responsive web guidelines, ensuring a fluid experience from mobile viewports to ultra-wide desktop monitors.
