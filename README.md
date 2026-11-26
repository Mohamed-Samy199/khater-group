# Khater Group — Enterprise Web Platform

Official modern web platform for **Khater Group**, a premier engineering, sports infrastructure, recreation, landscaping, and arena technology group with **37+ years of landmark excellence** across 27 governorates in Egypt and the MENA region.

---

## 🌟 Executive Overview

Khater Group unites five specialized, industry-leading business divisions executing landmark turnkey projects across the region:

| Sector | Color | Brand Focus | Flagship Scopes |
| :--- | :--- | :--- | :--- |
| **Khater Sports** | `#DE1F26` | Stadiums & Sports Facilities | FIFA Quality Pro hybrid/natural turf, World Athletics running tracks, FIP padel courts, squash, and tennis arenas. |
| **Khater Play** | `#DF72E8` | Playgrounds & Active Recreation | EN 1176/1177 certified children's play hubs, adventure parks, and shock-pad EPDM safety flooring. |
| **Khater Scapes** | `#8DC85B` | Living Landscapes & Hardscapes | Luxury coastal waterfront promenades, residential communities, and sustainable smart irrigation. |
| **Khater Tech** | `#6481BD` | Arena Electronics & Lighting | FIBA-certified LED scoreboards, video cubes, competition touchpad timing, and arena floodlighting. |
| **Khater Aquatics** | `#14C1E2` | Competition Pools & Complexes | Olympic & semi-Olympic competition pools, commercial MEP filtration, and leisure water facilities. |

---

## 🚀 Key Features & Page Architecture

### 1. Home Page (`/`)
- **Cinematic Hero Slider:** Dynamic sector showcase with synchronized brand color themes, high-resolution architectural photography, and typography animations.
- **About Khater Section:** Interactive vector network diagram illustrating the synergy between Khater's five business divisions.
- **Our Services Carousel:** Circular rotating 3D carousel spotlighting turnkey services across all five sectors.
- **Global Presence:** Interactive WebGL 3D Globe (Three.js) with real-time viewport lazy-loading and animated company statistics.
- **Clients & Strategic Partners:** Verified government, military, federation, and commercial enterprise references.

### 2. About Us (`/about`)
- Full-bleed cinematic `64svh` page banner.
- **Who We Are:** Editorial narrative covering 37+ years of engineering heritage (established 1987).
- **Mission & Vision:** Core strategic pillars guiding regional expansion.
- **Our Journey:** Interactive timeline spanning major milestones from 1987 to the present.
- **From Concept to Completion:** Complete lifecycle process workflow.
- **Why Choose Khater Group:** Interactive accordion highlighting accreditations and multi-disciplinary synergy.
- **Our Commitment:** Quality assurance and environmental standards.

### 3. Projects Portfolio (`/projects`)
- **Portfolio Metrics:** Showcases 3,000+ delivered projects across 27 governorates in Egypt and the region.
- **Curated Flagship Case Studies:** 19 landmark projects categorized across all 5 sectors (e.g. *Borg El Arab International Stadium, Alexandria Stadium, ZED Park, Cairo Stadium FIBA Arena, Maadi Club Olympic Pool*).
- **Luxury Floating Navigation Dock (`ProjectsFloatingNav`):** Left-anchored vertical capsule with sector logos and smooth auto-tracking scroll.
- **Case Study Modal (`ProjectDetailModal`):** Detailed modal view featuring high-res photo galleries, engineering specs, scope badges, and client details.

### 4. Specialized Business Sector Pages (`/businesses/:slug`)
- Dedicated portals for each sector:
  - `/businesses/sports`
  - `/businesses/play`
  - `/businesses/scapes`
  - `/businesses/tech`
  - `/businesses/aquatics`
- **Arc Showcases:** Dynamic interactive SVG line-drawings highlighting sector disciplines.
- **Solutions Catalogs:** Category-filtered technical systems and product offerings.
- **International Accreditations:** Compliance matrices for FIFA, World Athletics, FINA/World Aquatics, FIBA, and EN standards.
- **Ecosystem Integration:** Sister sector cross-linking.

### 5. Sports Disciplines Profiles (`/businesses/sports/:disciplineId`)
- 14 dedicated sport-specific deep dives (Football, Padel, Running Tracks, Tennis, Squash, Basketball, Multi-purpose, Volleyball, Handball, Hockey, Landscape, Climbing Walls, Playgrounds, Table Tennis).
- **Approved Surface Systems:** Technical multi-layer cutaway diagrams and system specifications.
- **Delivered Projects Ledger:** Interactive photo ledgers of notable courts and stadiums.
- **Discipline Navigator:** Smooth bidirectional navigation through all 14 sports.

### 6. News & Global Alliances (`/news-clients`)
- Spotlight on mega-developments (e.g., Red Sea Global / Amaala Triple Bay Yacht Club in Saudi Arabia).
- Regional presence across Egypt and Saudi Arabia.
- Strategic alliances with Tier-1 European and American manufacturers.

### 7. Careers Portal (`/careers`)
- **Culture & Growth:** Working environment and engineering leadership pillars.
- **Live Job Board:** Searchable and filterable job listings (by Division, Discipline, and Location).
- **Application Modal:** Multi-step CV and portfolio submission pipeline.
- **General Talent Pool:** Direct resume deposit for upcoming mega-projects.

### 8. Contact & RFPs (`/contact`)
- **Commercial Inquiry & RFP Form:** Division-targeted tender submission with file attachment support.
- **Regional Hubs Directory:** Detailed contact information for Cairo HQ and Saudi offices with Google Maps integration.
- **FAQ Section:** Direct answers regarding bidding procedures, warranties, and site surveys.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Core** | React 18, Vite |
| **Routing** | React Router v6 |
| **Styling & Design System** | Tailwind CSS, Custom Khater Theme, Custom Gradients |
| **Animation & Motion** | GSAP 3 (ScrollTrigger), CSS Keyframe Animations |
| **3D Graphics** | Three.js (WebGL Globe with lazy loading) |
| **Icons & Media** | Lucide React, High-DPI optimized SVG / WebP assets |

---

## 📁 Project Directory Structure

```text
khater-group/
├── public/
│   └── images/                     # Static global media assets
├── src/
│   ├── assets/
│   │   ├── banners/                # High-res page banner artwork
│   │   ├── hero/                   # Home and sector hero backgrounds
│   │   ├── logos/                  # Official group and division logos
│   │   └── services/               # Services section photography
│   ├── components/
│   │   ├── about/                  # About page sections (WhoWeAre, Journey, WhatWeDo...)
│   │   ├── aquatics/               # Khater Aquatics sector components
│   │   ├── careers/                # Careers board, culture, talent pool & modals
│   │   ├── contact/                # Contact form, locations & FAQ
│   │   ├── home/                   # Home hero, services, 3D globe & about
│   │   ├── layout/                 # Navbar, Footer, ScrollToTop
│   │   ├── news-clients/           # Regional alliances & spotlight sections
│   │   ├── play/                   # Khater Play sector components
│   │   ├── projects/               # Projects grid, metrics, modal & floating nav
│   │   ├── scapes/                 # Khater Scapes sector components
│   │   ├── sport-detail/           # Discipline systems, ledger & navigator
│   │   ├── sports/                 # Khater Sports sector components
│   │   ├── tech/                   # Khater Tech sector components
│   │   └── ui/                     # Reusable components (PageBanner, Container, Logo...)
│   ├── constants/
│   │   ├── aquaticsData.js         # Pool systems, standards & specs
│   │   ├── careersData.js          # Open vacancies & department filters
│   │   ├── contactData.js          # Regional offices & FAQ entries
│   │   ├── newsClientsData.js      # Global partner logos & milestone news
│   │   ├── playData.js             # Play systems & safety standards
│   │   ├── projectsData.js         # Verified portfolio of 19 flagship projects
│   │   ├── scapesData.js           # Hardscape & softscape technical specs
│   │   ├── site.js                 # Global navigation, divisions & footer data
│   │   ├── sportsDisciplines.js    # Data for 14 individual sports disciplines
│   │   └── techData.js             # Electronics, video cubes & lighting specs
│   ├── pages/
│   │   ├── businesses/             # Business landing pages & SportDetail
│   │   ├── About.jsx
│   │   ├── Careers.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NewsClients.jsx
│   │   └── Projects.jsx
│   ├── App.jsx                     # Route declarations & global scroll behavior
│   ├── index.css                   # Tailwind imports & custom brand utility classes
│   └── main.jsx                    # Application entry point
├── index.html
├── tailwind.config.js              # Khater color palette, animations & breakpoints
└── vite.config.js                  # Vite build settings & plugins
```

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd khater-group

# Install dependencies
npm install
```

### Development Server
```bash
# Launch the Vite development server with HMR
npm run dev
```
The site will be available at `http://localhost:5173`.

### Production Build
```bash
# Build optimized static production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Design System Highlights

- **Editorial Hierarchy:** Clean, bold typography without redundant eyebrow clutter, delivering immediate impact.
- **Cinematic Aspect Ratios:** PageBanner headers calibrated to `64svh` on desktop viewports.
- **Unified Color Coding:**
  - Group Neutral: `#000000` (Brand Black), `#FFFFFF` (Pure White), `#B3B3B3` / `#5B5B5B` (Muted Silvers).
  - Sports Red: `#DE1F26`
  - Play Purple: `#DF72E8`
  - Scapes Green: `#8DC85B`
  - Tech Blue: `#6481BD`
  - Aquatics Cyan: `#14C1E2`
- **Micro-Interactions:** Custom hover glows, smooth GSAP trigger reveals, and responsive modal transitions.

---

## 📄 License & Rights

Copyright © 2026 Khater Group. All rights reserved.
All logos, photography, project specifications, and brand identities are proprietary to Khater Group and accredited partner institutions.
