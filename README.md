# Siribrand Zanzibar Tours & Experiences

> **Discover Zanzibar. Experience More.**  
> A boutique luxury web application for **Siribrand Agency TZ** (`https://siribrandagency.click`), delivering high-end marine excursions, curated island packages, and authentic Stone Town accommodations matching the refined editorial aesthetic of Lala Salama Serengeti.

---

## 🌟 Key Features

- **Lala Salama Luxury Aesthetic:** Refined typography with *Great Vibes*, *Playfair Display*, and *Inter*, warm alabaster background (`#FAF8F5`), forest green accents (`#44534C`), and champagne gold highlights (`#C5A880`).
- **Interactive 3D Book Page Turn:** An authentic 3D perspective page flip showcasing the luxury island sanctuary.
- **Bespoke Luxury DatePicker:** Custom popover calendar opening upwards with month-by-month navigation, weekday tracking, and zero default browser calendar clutter.
- **Sideways Motion Carousels:** Smooth horizontal auto-sliding carousels with drag/touch gesture support for Luxury Suites and Curated Tour Packages.
- **Pure Visual 3-Photo Mosaic:** High-definition photography grid inspired by premier safari lodges without inner text clutter.
- **Editorial Guest Praise:** Borderless, minimalist quotes featuring verified travelers (including Peter Joseph, Osmunda Joseph, and international guests).
- **Modern Floating WhatsApp Concierge:** Instant 24/7 direct inquiry channel with official vector branding.
- **Top 10 Universal UX State Patterns:** Built-in offline detector, draft preservation (`localStorage`), field-by-field inline form validation, and reassuring 3-step inquiry confirmation.
- **Enterprise Security Headers:** Full suite of hardened HTTP headers (`CSP`, `HSTS`, `X-Frame-Options: SAMEORIGIN`, `nosniff`, `Referrer-Policy`) ready for Cloudflare Pages, Netlify (`public/_headers`), Vercel (`vercel.json`), and Nginx (`nginx-security.conf`).

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite 6](https://vite.dev/) (Sub-second HMR & optimized chunking)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Hosting / CDN:** Edge-ready (Cloudflare Pages, Netlify, Vercel, Nginx)

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18+) is installed on your system.

### 2. Installation
```bash
# Clone the repository
git clone git@github.com:Peter0707-ctrl/zanzibar-Tour-Experience.git

# Enter project directory
cd zanzibar-Tour-Experience

# Install dependencies
npm install
```

### 3. Local Development
```bash
npm run dev
```
Open your browser at `http://localhost:5174/` to explore the live website.

### 4. Production Build
```bash
npm run build
npm run preview
```
Production output will be generated inside the `dist/` directory (~105 KB gzip compressed).

---

## 🚢 Deployment

### Cloudflare Pages & Netlify
The repository contains `public/_headers` which is automatically copied to `dist/_headers` during build to enforce all enterprise security headers.

### Vercel
Deploy directly via GitHub integration. Configuration is pre-wired in `vercel.json`.

### Nginx (VPS Linux)
Refer to the included `nginx-security.conf` file for production SSL, gzip compression, and security header rules.

---

## 📞 Contact & Inquiries

- **Agency:** Siribrand Agency TZ
- **Location:** Stone Town Historic District, Zanzibar, Tanzania
- **WhatsApp Concierge:** [+255 692 590 012](https://wa.me/255692590012)
- **Official Domain:** [https://siribrandagency.click](https://siribrandagency.click)
- **Developer Credit:** Developed by [Peterjoh](https://wa.me/255673190931)

---
© 2026 Siribrand Agency TZ. All Rights Reserved.
