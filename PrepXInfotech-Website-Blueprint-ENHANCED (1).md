# PrepX Infotech — Enhanced Website Blueprint & Build Specification
### Version 2.0 — Full Detail Edition

> **How to use this document:** This is a complete, developer/designer-ready specification. Every section includes exact copy, visual direction, illustration descriptions, animation specs, component structure, and code-level implementation notes. Hand this to a developer, designer, or AI website builder as the single source of truth.

---

## TABLE OF CONTENTS

1. [Company Snapshot & Positioning](#1-company-snapshot)
2. [Brand System — Colors, Typography, Motion](#2-brand-system)
3. [Illustration & Visual Language](#3-illustration--visual-language)
4. [Animation Specification](#4-animation-specification)
5. [Sitemap & Navigation Architecture](#5-sitemap--navigation-architecture)
6. [Page-by-Page Content & Component Spec](#6-page-by-page-content)
   - 6.1 Home Page (Full)
   - 6.2 About Us
   - 6.3 Services Overview
   - 6.4 Individual Service Pages (3 primary)
   - 6.5 Hire Developers
   - 6.6 MVP & Startup Product Development
   - 6.7 Products (SaaS Portfolio)
   - 6.8 Portfolio / Case Studies
   - 6.9 Careers
   - 6.10 Contact Us
   - 6.11 Blog / Insights
   - 6.12 FAQ Page
   - 6.13 Pricing & Engagement Models
   - 6.14 Process / How We Work
   - 6.15 Industries We Serve
   - 6.16 Legal Pages
7. [Component Library Spec](#7-component-library-spec)
8. [SEO & Metadata Strategy](#8-seo--metadata-strategy)
9. [Technical Requirements & Stack](#9-technical-requirements--stack)
10. [Footer & Global Elements](#10-footer--global-elements)
11. [Performance & Accessibility Checklist](#11-performance--accessibility)
12. [Content Checklist — What's Needed From You](#12-content-checklist)

---

## 1. COMPANY SNAPSHOT

| Field | Detail |
|---|---|
| **Company Name** | PrepX Infotech |
| **Tagline (Recommended)** | *"Code That Ships. Teams That Scale."* |
| **Industry** | Software Development & IT Services |
| **Primary Services** | Mobile App Development · Staff Augmentation · MVP Development |
| **Secondary Services** | Custom Software · SaaS Products · Enterprise Solutions · IT Consulting · AI & Automation · UI/UX |
| **Contact Email** | hello@prepxinfotech.com |
| **Phone / WhatsApp** | +91 95040 07442 |
| **WhatsApp Link** | https://wa.me/919504007442 |
| **LinkedIn** | https://www.linkedin.com/company/prepxinfotech/ |

### Positioning Statement (use across meta descriptions and hero)
> PrepX Infotech is a mobile-first software development company helping startups and enterprises build products, scale engineering teams, and launch MVPs fast — backed by full-stack capability, transparent delivery, and our own live SaaS portfolio.

### Value Pillars (recurring across all pages)
| Pillar | Hook | Supporting Line |
|---|---|---|
| ⚡ Speed to Market | MVP in weeks, not months | Agile sprints, milestone-based delivery, no waterfall delays |
| 🔧 Flexible Talent | Your team, extended overnight | Dedicated devs, augmented teams, or freelancers — your choice |
| 📱 Mobile-First DNA | Android, iOS, cross-platform | We live and breathe mobile. React Native, Flutter, Swift, Kotlin |
| 🏗️ Full-Stack Capability | UI to cloud, everything in one place | Frontend, backend, DevOps, QA — under one roof |
| 🚀 Product Thinking | We build our own SaaS too | We're not just coders — we're product owners who understand your world |
| 🤝 Founder-Friendly | Transparent pricing, milestone payments | No hidden retainers. You see every sprint, every deliverable |

---

## 2. BRAND SYSTEM

### 2.1 Color Palette

```
PRIMARY (Backgrounds & Structure)
  --color-ink:        #0B1120    Deep Space Navy — primary background, headers
  --color-surface:    #131C2E    Card backgrounds, elevated surfaces
  --color-border:     #1E2D45    Subtle borders, dividers

ACCENT (CTAs & Highlights)
  --color-electric:   #2F80ED    Electric Blue — primary CTAs, links, active states
  --color-glow:       #5BA3FF    Lighter blue — hover states, glows, gradients
  --color-teal:       #0FF4C6    Mint Teal — accent highlights, badges, icons on dark bg

NEUTRALS
  --color-white:      #FFFFFF
  --color-fog:        #F0F4FF    Near-white — light mode sections, alt bg strips
  --color-slate:      #8CA0BC    Body text on dark backgrounds
  --color-muted:      #4A6080    Placeholder text, captions

SEMANTIC
  --color-success:    #10B981    Green — for "Live" badges, success states
  --color-warning:    #F59E0B    Amber — "Beta" badges, warnings
  --color-error:      #EF4444    Red — form errors

GRADIENT (signature effect — used on hero, CTA banners, section dividers)
  Hero gradient:  linear-gradient(135deg, #2F80ED 0%, #0FF4C6 100%)
  Card shimmer:   linear-gradient(120deg, #131C2E 0%, #1E3A5F 50%, #131C2E 100%)
```

### 2.2 Typography

```
DISPLAY FACE:   "Sora" — weights 700, 800
                Used for: Hero headlines (h1), section eyebrows, product names
                Character: geometric, modern, slightly futuristic — matches tech + speed
                Load: @import from Google Fonts

HEADING FACE:   "Inter" — weights 400, 500, 600, 700
                Used for: h2–h4, card titles, navigation, CTAs
                Character: clean, legible, trustworthy — standard of the tech industry

BODY FACE:      "Inter" — weights 300, 400
                Used for: p, li, captions, form labels

CODE/MONO:      "JetBrains Mono" — weight 400
                Used for: tech stack pills, code snippets, badges

TYPE SCALE (desktop):
  Display:    72px / line-height 1.1 / letter-spacing -1.5px / Sora 800
  H1:         56px / 1.15 / -1px / Sora 700
  H2:         40px / 1.2 / -0.5px / Sora 700
  H3:         28px / 1.3 / 0 / Inter 600
  H4:         20px / 1.4 / 0 / Inter 600
  Body L:     18px / 1.7 / 0 / Inter 400
  Body:       16px / 1.7 / 0 / Inter 400
  Caption:    13px / 1.5 / 0.2px / Inter 400, color: --color-slate
  Mono:       13px / 1.4 / 0.5px / JetBrains Mono

TYPE SCALE (mobile, ≤768px):
  Display → 40px
  H1 → 32px
  H2 → 26px
  H3 → 20px
```

### 2.3 Spacing & Layout

```
Base unit: 8px (all spacing is multiples of 8)
Max content width: 1200px
Gutter (desktop): 24px
Gutter (mobile): 16px

Section vertical padding: 96px desktop / 64px mobile
Card padding: 32px desktop / 24px mobile
Border radius: 
  - Cards: 16px
  - Buttons: 8px
  - Badges/pills: 999px (full round)
  - Icons: 12px
Box shadow (cards): 0 4px 24px rgba(0,0,0,0.3), 0 0 1px rgba(255,255,255,0.05)
Box shadow (hover): 0 8px 40px rgba(47,128,237,0.25)
```

---

## 3. ILLUSTRATION & VISUAL LANGUAGE

### 3.1 Illustration Style
All illustrations should follow a consistent aesthetic:

**Style:** Dark-mode isometric tech illustrations with subtle gradient fills and glowing edges. Think "dark glassmorphism meets product UI mockup" — not cartoon, not stock photo.

**Characteristics:**
- Dark translucent panels with electric blue / teal edge glows
- 3D-tilted device mockups (phones, laptops, tablets) with real UI screens inside
- Floating particles, dot grids, and circuit-board-like line patterns in background
- Color range: deep navy base, electric blue and teal accents, white highlights
- Human silhouettes if used: minimalist line-art, not realistic stock photo

### 3.2 Illustration Placement Per Page

| Location | Illustration Type | Description |
|---|---|---|
| **Hero (Homepage)** | Hero centerpiece | A 3D isometric collage: a smartphone showing a mobile app UI, a laptop with a dashboard, floating code snippets, and a dark cloud infrastructure diagram — all arranged in a floating cluster with a teal-to-blue radial glow emanating from center. Subtle animated floating effect. |
| **About Us — Our Story** | Team/office scene | Minimalist line-art illustration: diverse team around a table with laptops, mobile devices on the table, idea boards in background. Deep navy with electric blue accents. |
| **Services Overview** | Category icons | Each service category gets a custom 64×64px icon in the PrepX palette — glowing on dark. Not generic Flaticon. Design a consistent set: e.g., a phone with lightning bolt for mobile dev, puzzle pieces for staff aug, rocket for MVP. |
| **Hire Developers** | Process diagram | Visual 4-step horizontal stepper illustration with connecting animated dashed lines. Each step has a small icon: clipboard → magnifying glass → handshake → rocket launch. |
| **MVP Page** | Roadmap visual | A horizontal timeline illustration showing the 6 MVP phases, each with a mini icon and connector line. Glowing active state on current step. |
| **Technology Stack** | Logo grid with glow | Tech logos displayed on individual dark cards with subtle glow on hover. Not a flat logo wall — each has a dark glassmorphic card. |
| **Portfolio cards** | Screen mockups | Each project card includes a device mockup (phone or browser frame) showing a placeholder screenshot. Consistent frame style throughout. |
| **Careers** | Culture visual | Illustration of remote workers connected by dotted lines on a world map. Or an abstract team-in-sprint scene. |
| **Contact** | Communication visual | Abstract illustration: envelope + chat bubble + phone, connected by animated flowing lines, in the brand palette. |
| **404 Page** | Broken robot | A friendly cartoon robot with a cracked screen or missing piece — on-brand, not generic. |

### 3.3 Photography / Stock Guidance
- **Avoid:** Generic stock photos of people shaking hands, generic "coding" stock shots, or light/white backgrounds mixed with dark brand.
- **Use if needed:** Dark-toned editorial tech photography — laptop screens glowing in dim rooms, developer close-ups with screens reflected in glasses, team whiteboard sessions (dark room lighting preferred).
- **Recommended source:** Unsplash (pexels as backup) — search "dark tech workspace", "developer coding dark" for tone-matching shots.

---

## 4. ANIMATION SPECIFICATION

### 4.1 Global Animation Tokens

```css
/* Easing */
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);   /* snappy reveal */
--ease-in-out:    cubic-bezier(0.45, 0, 0.55, 1);   /* smooth transitions */
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1); /* subtle overshoot */

/* Duration */
--dur-fast:    150ms;   /* hover state changes */
--dur-mid:     300ms;   /* button interactions, tooltip opens */
--dur-slow:    600ms;   /* section reveals, card entrances */
--dur-crawl:   1200ms;  /* hero entrance, page load sequence */

/* Delay (for staggering groups) */
--stagger:     80ms;    /* between nth-child items */
```

### 4.2 Page Load / Hero Sequence

```
Timeline (on page load, 0ms start):
  0ms     — Background gradient begins fading in (opacity 0→1, 800ms)
  200ms   — Nav bar slides down from top (translateY(-20px)→0, 400ms, ease-out-expo)
  400ms   — Hero eyebrow text fades in + slides up (translateY(10px)→0, 500ms)
  600ms   — Hero h1 fades in + slides up (translateY(16px)→0, 600ms)
  900ms   — Hero subheadline fades in (500ms)
  1100ms  — CTA buttons appear with scale (scale(0.95)→1, opacity 0→1, 400ms)
  1300ms  — Trust bar stats count up animation begins
  1500ms  — Hero illustration floats in from right (translateX(40px)→0, 700ms, ease-out-expo)
  2000ms  — Floating/breathing animation starts on hero illustration (infinite, 4s cycle)
```

### 4.3 Scroll-Triggered Animations

All scroll animations use Intersection Observer API. Trigger threshold: 15% visible.

```
FADE UP (default for most elements):
  Initial: opacity: 0; transform: translateY(24px);
  Final: opacity: 1; transform: translateY(0);
  Duration: 600ms; Easing: ease-out-expo

FADE IN (for images, illustrations):
  Initial: opacity: 0; transform: scale(0.97);
  Final: opacity: 1; transform: scale(1);
  Duration: 700ms; Easing: ease-out

SLIDE LEFT (for left-column content in 2-col layouts):
  Initial: opacity: 0; transform: translateX(-30px);
  Final: opacity: 1; transform: translateX(0);
  Duration: 600ms

SLIDE RIGHT (for right-column illustrations):
  Initial: opacity: 0; transform: translateX(30px);
  Final: opacity: 1; transform: translateX(0);
  Duration: 600ms

STAGGER (for grids of cards):
  Each nth-child delayed by --stagger (80ms) × index
  Max 8 staggered children (after that, no additional delay)

COUNT UP (for stats):
  Number counts from 0 to target value
  Duration: 1500ms; Easing: ease-out
  Start when element enters viewport
```

### 4.4 Micro-Interactions

```
BUTTONS (Primary CTA):
  Default: background electric-blue, white text
  Hover: background slightly lighter + box-shadow 0 4px 20px rgba(47,128,237,0.5)
         + translateY(-1px) — 200ms transition
  Active: translateY(0) + shadow reduced — 100ms
  Focus: visible 2px offset outline in --color-glow (accessibility)

CARDS (Service, Portfolio, Team):
  Default: border 1px solid --color-border
  Hover: border color transitions to --color-electric (30% opacity)
         + box-shadow glow + translateY(-4px)
         Duration: 250ms, ease-out

NAV LINKS:
  Hover: color transitions to white + a thin electric-blue underline slides in from left
         Width 0→100%, Duration 200ms

TECH STACK LOGOS (in logo strip):
  Hover on individual logo: scale(1.08) + opacity 1 (others dim to 0.5)

HERO ILLUSTRATION:
  Infinite floating: translateY(0px) ↔ translateY(-12px), 4s cycle, ease-in-out
  Subtle rotation: rotate(-1deg) ↔ rotate(1deg), 8s cycle

MOBILE APP MOCKUP (on hire developers / MVP page):
  Screen content auto-scrolls slowly to simulate a real app
  Duration: 8s infinite loop

PROCESS STEPS (stepper):
  Connector line between steps draws from left to right on scroll enter
  SVG stroke-dashoffset animation, 800ms per segment

NUMBER COUNTER (trust bar stats):
  Count from 0 to value with easeOut over 1500ms
  Include a subtle "pulse" on landing at final value

TESTIMONIAL CAROUSEL:
  Auto-advance: 5s interval
  Transition: crossfade + slight scale (previous fades out, next fades in + scales 0.97→1)
  Pause on hover

BACKGROUND PARTICLE SYSTEM (Hero only):
  ~30 floating particles in the hero section
  Random slow drift (CSS keyframe, each particle unique timing 8s-20s)
  Colors: --color-electric at 10-20% opacity, small dots (2-4px)
  Performance: CSS only, no canvas, respects prefers-reduced-motion
```

### 4.5 Performance & Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
- All animations are CSS/JS based (no heavy libraries)
- Lazy-load illustrations below the fold
- Use `will-change: transform` only on active animated elements, remove after

---

## 5. SITEMAP & NAVIGATION ARCHITECTURE

### Full Sitemap

```
prepxinfotech.com/
│
├── / (Home)
├── /about
├── /services
│   ├── /services/mobile-app-development
│   ├── /services/staff-augmentation
│   ├── /services/mvp-development
│   ├── /services/custom-software
│   ├── /services/full-stack-web-development
│   ├── /services/ecommerce-development
│   ├── /services/erp-development
│   ├── /services/crm-development
│   ├── /services/saas-development
│   ├── /services/ui-ux-design
│   ├── /services/enterprise-application-development
│   ├── /services/it-consulting
│   ├── /services/digital-transformation
│   └── /services/ai-automation
├── /hire-developers
├── /products
├── /portfolio
│   └── /portfolio/[case-study-slug]
├── /process
├── /pricing
├── /industries
├── /careers
│   └── /careers/[job-slug]
├── /about
├── /contact
├── /blog
│   └── /blog/[post-slug]
├── /faq
├── /privacy-policy
├── /terms-of-service
└── /404
```

### Header Navigation

```
[PrepX Logo]     Services ▾   Hire Developers   Products   Portfolio   About      [Get Free Quote ↗]
                                                                          Contact ▾  (Electric blue button)

Services mega-dropdown:
┌─────────────────────────────────────────────────────────────────┐
│  BUILD                    HIRE                TRANSFORM          │
│  Mobile App Dev           Staff Augmentation  IT Consulting      │
│  MVP Development          Dedicated Teams     Digital Transform  │
│  Custom Software          Hire Developers     AI & Automation    │
│  SaaS Development                                                │
│  Full-Stack Dev           DESIGN              PLATFORMS          │
│  Enterprise Apps          UI/UX Design        E-commerce Dev     │
│                           Website Design      ERP Development    │
│                                               CRM Development    │
│                                                                  │
│  [→ View All Services]                                          │
└─────────────────────────────────────────────────────────────────┘

Sticky behavior: 
- On scroll down 80px: nav gets backdrop-blur + dark bg + subtle border-bottom
- Always visible. Height: 72px desktop / 64px mobile
- Mobile: hamburger → full-screen menu with smooth slide-in from right
```

---

## 6. PAGE-BY-PAGE CONTENT

---

### 6.1 HOME PAGE

**URL:** `/` | **Meta Title:** `PrepX Infotech — Mobile App Development, Staff Augmentation & MVP Development Company`

**Meta Description:** `PrepX Infotech is a full-stack software development company specializing in mobile app development, staff augmentation, and rapid MVP delivery. Hire developers in 48 hours or launch your MVP in 8 weeks.`

---

#### SECTION 1: HERO

**Layout:** Full viewport height. Left: text content. Right: hero illustration. Dark background with particle system.

**Background:** `--color-ink` with subtle radial gradient from center-right: `radial-gradient(ellipse at 70% 50%, rgba(47,128,237,0.12) 0%, transparent 60%)`

**Eyebrow tag** (above h1, pill badge):
`🚀  Trusted by startups & enterprises`

**H1:**
```
We Build Mobile Apps,
Scale Your Team,
and Launch MVPs — Fast.
```
*(three lines on desktop, large display type)*

**Subheadline (body L):**
```
PrepX Infotech is a full-stack software development company helping startups and enterprises 
hire skilled developers, build mobile-first products, and go from idea to MVP in weeks — not months.
```

**CTAs (side by side):**
- Primary: `[ Hire Developers → ]` — Electric blue filled button, 52px height
- Secondary: `[ Start Your MVP ]` — Ghost/outlined button, same size

**Below CTAs — Social proof micro-row:**
```
★★★★★  Rated 4.9/5 · 50+ Projects Delivered · Available in 48 hrs
```
(small text, with a subtle divider between items)

**Hero Illustration (right panel):**
An isometric tech cluster illustration. Center: a dark-glass smartphone angled at 25° showing a mobile dashboard UI (charts, stats, navigation). Behind it: a laptop at an angle showing a web dashboard. Surrounding: floating code snippet cards (`</>`, `{ }`, `npm install`, etc.) in translucent glass cards. Bottom: cloud infrastructure icons connected by thin glowing lines. The whole cluster has a soft electric-blue radial glow behind it. 

Animated: continuous slow float (translateY -12px to 0, 4s loop). Particles drift in background.

---

#### SECTION 2: TRUST BAR (full-width strip, slightly lighter bg)

```
Background: --color-surface
4 stats, centered, with dividers between:

  [  50+  ]         [  15+  ]         [  3+  ]          [  12+  ]
  Projects         Developers         Years              Countries
  Delivered        on Bench           Active             Served
```
Each number animates on scroll (count-up, 1500ms). Replace bracketed numbers with real data.

---

#### SECTION 3: CORE SERVICES SNAPSHOT

**Eyebrow:** `WHAT WE DO`
**H2:** `Everything You Need to Build, Ship & Scale`
**Subtext:** From day-one mobile development to enterprise platforms — we cover the full technology stack.

**Grid layout:** 3 columns × 2 rows on desktop, 1 col on mobile. 6 service cards.

Each card contains:
- Icon (64×64, glowing teal/blue on dark card bg)
- Service Title (H3)
- 2-line description
- `Learn More →` link

```
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│  📱 Mobile App Dev  │  │  👥 Staff Aug &     │  │  🚀 MVP & Startup   │
│                     │  │     Dedicated Teams │  │     Product Dev     │
│ Native & cross-     │  │ Scale your team in  │  │ Idea to live MVP    │
│ platform apps built │  │ days. Pre-vetted    │  │ in 6–8 weeks.       │
│ for performance.    │  │ developers, your    │  │ Agile. Fixed scope. │
│                     │  │ workflow.           │  │                     │
│ Learn More →        │  │ Learn More →        │  │ Learn More →        │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘

┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│  💻 Custom Software │  │  ☁️ SaaS Development │  │  🤖 IT Consulting   │
│     Development     │  │                     │  │     & AI Automation │
│ Tailor-built        │  │ Multi-tenant,        │  │ Strategic tech       │
│ software around     │  │ subscription-ready  │  │ guidance + AI-       │
│ your exact needs.   │  │ SaaS from scratch.  │  │ powered workflows.  │
│                     │  │                     │  │                     │
│ Learn More →        │  │ Learn More →        │  │ Learn More →        │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘
```

Cards have hover lift effect + glowing border. Staggered scroll-reveal on entry.

**Below grid:** `[ View All 15+ Services → ]` — ghost button, centered

---

#### SECTION 4: "WHY PREPX INFOTECH" — VALUE PROPS

**Layout:** Left: large bold statement. Right: 6 feature pills/rows.

**Left column:**
```
H2: Why 50+ Teams Choose PrepX
    to Build Their Products

Body: We combine the speed of a startup studio,
      the reliability of an enterprise partner, 
      and the product-thinking of a founder — 
      all in one team.
      
[See Our Work →]  [Meet the Team →]
```

**Right column — 6 feature rows:**
Each row: Icon + Bold label + Description line

```
⚡ Speed Without Sacrifice
   Agile delivery. Weekly sprint demos. No slow waterfall.

📱 Mobile-First, Always
   Android + iOS + cross-platform. We live in the mobile layer.

🔄 Flexible Engagement Models
   Dedicated teams, hourly devs, project-based — you choose.

🏗️ Full-Stack Under One Roof
   UI/UX → Backend → DevOps → QA. Zero vendor juggling.

🎯 Product Thinkers, Not Just Coders
   We run our own SaaS products. We understand product-market fit.

🤝 Dedicated PM on Every Engagement
   One point of contact. Transparent Jira/Notion boards. Weekly calls.
```

**Background:** Alternate section bg — thin grid dot pattern overlay on --color-ink for texture.

---

#### SECTION 5: HIRE DEVELOPERS STRIP

**Layout:** Dark gradient banner (electric blue → teal, low opacity) spanning full width.

```
Headline: Need to Scale Your Engineering Team — Fast?
Subtext:  Add pre-vetted developers to your workflow in as little as 48 hours.
          No recruitment overhead. No long contracts. Pure talent, on demand.

[  Dedicated Developers  ]  [  Full Engineering Teams  ]  [  Time & Material  ]
     (3 pill tags)

                     [ Browse Engagement Models → ]
```

---

#### SECTION 6: FEATURED PRODUCTS

**Eyebrow:** `OUR SAAS PRODUCTS`
**H2:** `We Don't Just Build for Clients — We Ship Our Own Products`
**Subtext:** Proof that we think in products, not just projects. Here's what we've built and launched ourselves.

**Layout:** 2–3 product cards in a row (or 4 in a 2×2 grid if more products).

Each product card:
```
┌──────────────────────────────────────┐
│  [Product Logo / Icon]   ● LIVE      │
│  Product Name                        │
│  Tagline — one line                  │
│  ─────────────────────────────────   │
│  Short description (2 lines max)     │
│                                      │
│  Feature 1 · Feature 2 · Feature 3  │
│                                      │
│  [ Visit Website ↗ ]                │
└──────────────────────────────────────┘
```
Cards use glassmorphism style: semi-transparent surface, border with slight glow, backdrop-blur if supported.

*(Placeholder: "SaaS Product Placeholder — add your product details here")*

**Below cards:** `[ View All Products → ]`

---

#### SECTION 7: PORTFOLIO / CASE STUDIES

**Eyebrow:** `SELECTED WORK`
**H2:** `Products We've Designed, Built & Shipped`
**Subtext:** From fintech apps to healthcare platforms — each project is a story of a problem solved.

**Layout:** 3 cards in a row on desktop, masonry or 1-col on mobile.

Per project card:
```
┌──────────────────────────────────────┐
│  [Device mockup or screenshot]       │
│  ──────────────────────────────────  │
│  FinTech · Mobile App                │  ← category tags (pills)
│  Project Name                        │
│  One-line outcome: "Reduced payment  │
│  processing time by 60%"             │
│  [ View Case Study → ]              │
└──────────────────────────────────────┘
```

Cards reveal with stagger on scroll. On hover: screenshot zooms slightly (scale 1→1.03) with smooth transition.

**Below:** `[ View All Case Studies → ]`

---

#### SECTION 8: TECHNOLOGY STACK

**Eyebrow:** `TECHNOLOGIES WE USE`
**H2:** `Built With the Stack the World Runs On`

**Layout:** Scrolling horizontal logo strip (auto-scroll, infinite loop, pauseable on hover) on mobile. Static grid on desktop.

Categories shown above the logo strip as filter tabs:
`All · Mobile · Frontend · Backend · Database · Cloud · DevOps`

**Technologies:**
- Mobile: React Native, Flutter, Swift, Kotlin/Java, Expo
- Frontend: React, Next.js, Angular, Vue, TypeScript, Tailwind CSS
- Backend: Node.js, Python/Django, Laravel/PHP, Java/Spring, .NET, FastAPI
- Database: PostgreSQL, MongoDB, MySQL, Firebase, Redis, Supabase
- Cloud: AWS, Google Cloud, Azure, DigitalOcean, Vercel
- DevOps: Docker, Kubernetes, GitHub Actions, Terraform, Jenkins
- AI/ML: OpenAI API, LangChain, TensorFlow, Hugging Face

Each logo is on a small dark pill card. Hover: glow + scale effect.

---

#### SECTION 9: INDUSTRIES WE SERVE

**Eyebrow:** `INDUSTRIES`
**H2:** `Domain Expertise Across Sectors`

**Layout:** 4-column icon grid on desktop (2 on mobile).

```
🏥 Healthcare & MedTech    🏦 FinTech & Banking
🛒 E-Commerce & Retail     📚 EdTech & E-Learning  
🚚 Logistics & Supply Chain  🏠 Real Estate & PropTech
📊 SaaS & B2B Software     🎯 Startups & Scale-ups
```

Each tile: icon + label + "See Projects →" micro-link (appears on hover).
Subtle hover state: tile gets a thin electric-blue border.

---

#### SECTION 10: TESTIMONIALS

**Eyebrow:** `CLIENT STORIES`
**H2:** `What Our Clients Say`

**Layout:** Carousel (auto-advance, 5s, pause on hover). Indicators (dot row) below.

Per testimonial:
```
"  [Full quote — 2–4 sentences about the engagement, outcome, and team]  "

   [Client Photo]   Client Name
                    Role, Company Name
                    [LinkedIn icon] (optional)
```

Background: slightly lighter card on dark bg, with a large open-quote mark decorative element in --color-electric at 8% opacity behind the quote text.

*Placeholders: Add 4–6 real client testimonials. Format as above.*

---

#### SECTION 11: FINAL CTA BANNER

**Layout:** Full-width, high-contrast. Background: gradient from --color-electric to deep navy. Or: dark with a glowing radial from center.

```
Have a Project in Mind?
Let's Build It Together.

Whether you're validating an idea, scaling a team, or modernizing 
a legacy platform — PrepX Infotech is your engineering partner.

[ Get a Free Consultation → ]     [ View Our Work ]
```

**Below CTAs:** A row of trust signals:
```
✓ No commitment required   ✓ Response within 24 hours   ✓ NDA available on request
```

---

### 6.2 ABOUT US PAGE

**URL:** `/about` | **Meta Title:** `About PrepX Infotech — Our Story, Team & Mission`

---

#### SECTION 1: HERO

```
Eyebrow: ABOUT US
H1: We're a Team of Engineers
    Who Build Products People Love.

Body: PrepX Infotech was founded on a simple belief: great software should 
      be accessible to every startup and enterprise — not just the big ones 
      with massive budgets. We built this company to be the engineering partner 
      we always wished existed.

[Meet the Team ↓]   [See Our Work →]
```

Background: same dark brand bg with a subtle illustrated background — faint circuit-board line pattern, very low opacity.

---

#### SECTION 2: OUR STORY (2-column)

**Left:** Text
```
H2: How PrepX Infotech Began

Our story starts with a familiar frustration. Founders couldn't find mobile 
development teams that were both technically excellent and actually available 
to small and early-stage companies. Enterprise firms were too slow. Freelancers 
were too unpredictable. The gap was obvious.

PrepX Infotech was built to fill that gap — a studio that combines the quality 
and structure of an enterprise software partner with the speed, flexibility, 
and founder-friendliness of a startup agency.

Today, we serve clients ranging from first-time founders in pre-seed to 
engineering teams at growing enterprises — across industries from FinTech 
to EdTech to Healthcare.

And we don't just build for clients. We build our own SaaS products too — 
because we believe the best product builders are the ones who've felt the 
pain of shipping a product themselves.
```

**Right:** Illustration — a stylized founding moment: a laptop screen, a notepad with sketched wireframes, and a glowing lightbulb. Minimal, line-art style in brand palette.

---

#### SECTION 3: MISSION, VISION & VALUES

**Three tall cards, side by side:**

```
┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐
│  🎯 Our Mission         │  │  🔭 Our Vision          │  │  💎 Our Values          │
│                         │  │                         │  │                         │
│  To help startups and   │  │  To become a trusted    │  │  · Speed — move fast    │
│  businesses turn ideas  │  │  global technology      │  │    without breaking     │
│  into reliable,         │  │  partner known for      │  │    quality.             │
│  scalable software —    │  │  mobile-first           │  │  · Transparency — open  │
│  fast — by combining    │  │  engineering,           │  │    boards, no black     │
│  dedicated talent with  │  │  dependable staff       │  │    boxes.               │
│  proven product         │  │  augmentation, and      │  │  · Ownership — your     │
│  processes.             │  │  rapid MVP delivery.    │  │    success is ours.     │
│                         │  │                         │  │  · Quality — every PR   │
│                         │  │                         │  │    reviewed, every      │
│                         │  │                         │  │    build tested.        │
│                         │  │                         │  │  · Partnership — long-  │
│                         │  │                         │  │    term, not transact.  │
└─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘
```

---

#### SECTION 4: WHAT MAKES US DIFFERENT (2-col list)

**H2:** Not Just a Dev Shop — We're Your Product Engineering Partner

```
Column 1:                              Column 2:
✦ Mobile-First DNA                     ✦ We Ship Our Own SaaS Products
  Android, iOS, and cross-platform       We're product owners, not just
  is not a secondary service. It's       contractors. This means we think 
  what we were built to do.              about retention, conversion, and 
                                         user experience — not just lines of
✦ Hybrid Model                           code.
  Agency + staffing + product 
  company. We adapt to your needs     ✦ Founder-Friendly Pricing
  — whether you need a team,            Milestone-based payments. Fixed-
  a developer, or a full product        scope engagements. No surprise
  partner.                               invoices.

✦ Agile-Native                        ✦ Direct Developer Access
  2-week sprints. Bi-weekly demos.      No account manager relay. You speak
  Working software shipped every        directly to the engineers building
  cycle.                                your product.
```

---

#### SECTION 5: OUR PROCESS (full-width, animated stepper)

**H2:** How We Work — From Discovery to Delivery

**Layout:** Horizontal animated stepper with 5 steps. On scroll, connector lines draw one at a time with an SVG stroke animation.

```
[ Discover ] ──────── [ Design ] ──────── [ Develop ] ──────── [ Deploy ] ──────── [ Support ]
     01                   02                   03                   04                  05

Under each step — expanded description:

01 Discover
   We deep-dive into your business goals, user needs, and technical landscape.
   Deliverable: Scope document, technical spec, and project roadmap.

02 Design
   Wireframes → interactive prototypes → pixel-perfect UI in your brand.
   Deliverable: Figma prototype reviewed and approved before development begins.

03 Develop
   Agile 2-week sprints. Daily standups. GitHub-based version control.
   Deliverable: Working code, deployed to staging, with weekly demo calls.

04 Deploy
   CI/CD pipeline, cloud deployment, app store submission (if mobile).
   Deliverable: Live product on production infrastructure with monitoring.

05 Support
   Bug fixes, performance monitoring, feature roadmap planning.
   Deliverable: Ongoing support retainer or handover to your in-house team.
```

---

#### SECTION 6: TEAM / LEADERSHIP

**H2:** Meet the People Building PrepX

**Layout:** Photo cards in a row (or 2-row grid if larger team).

Per team member card:
```
┌──────────────────────┐
│   [Photo — circular  │
│    crop, dark bg]    │
│   Name               │
│   Title / Role       │
│   2-line bio         │
│   [LinkedIn icon]    │
└──────────────────────┘
```
Hover: card lifts, border glows, LinkedIn icon brightens.

*Placeholder: Add founder and key team member photos, names, bios, and LinkedIn URLs.*

---

#### SECTION 7: STATS STRIP (repeat from home, or extend)

```
  50+          15+          3+         12+          8 Weeks
Projects     Engineers   Years of    Countries    Avg. MVP
Delivered   Available    Experience   Served       Delivery
```

---

#### SECTION 8: ABOUT PAGE CTA

```
Ready to Work Together?

Whether you're a founder with an idea, a CTO who needs 3 extra developers, 
or an enterprise team looking to modernize — we'd love to talk.

[ Start a Conversation → ]   [ Explore Open Roles ]
```

---

### 6.3 SERVICES OVERVIEW PAGE

**URL:** `/services` | **Meta Title:** `Software Development Services — PrepX Infotech`

**Meta Description:** `Explore PrepX Infotech's full range of software development services: mobile app development, staff augmentation, MVP development, SaaS, ERP, CRM, UI/UX, AI automation, and more.`

---

**Hero:**
```
Eyebrow: OUR SERVICES
H1: From Idea to Enterprise —
    We've Got the Service for It.

Body: Explore PrepX Infotech's complete range of software development, 
      staffing, design, and consulting services. Whether you're building 
      from scratch or scaling an existing product — there's a service here 
      for your stage.

[ Get a Free Consultation ]
```

---

**Services Grid — Filterable by Category**

Filter tabs: `All · Mobile · Product & MVP · Hire Devs · Web & Software · Platforms · Design · Consulting`

Each card: Icon + Title + 1-line description + "Learn More →"

##### A. Product & MVP Development
| Icon | Service | Description |
|---|---|---|
| 🚀 | **MVP Development** | Validate your idea fast with a lean, functional MVP in 4–8 weeks. |
| 💡 | **Startup Product Development** | End-to-end builds for early-stage founders — concept to investor-ready product. |
| 🔄 | **End-to-End Product Development** | Full lifecycle: discovery, design, dev, QA, deploy, and iteration. |
| ⚙️ | **Product Engineering** | Scalable architecture, clean codebases, and engineering best practices. |
| 🔧 | **Product Modernization** | Re-architect legacy systems, upgrade stacks, and provide ongoing maintenance. |

##### B. Mobile Development
| Icon | Service | Description |
|---|---|---|
| 📱 | **Mobile App Development** | Native and cross-platform apps built for performance and scale. |
| 🤖 | **Android App Development** | Kotlin/Java native Android apps optimized for the Google Play Store. |
| 🍎 | **iPhone App Development** | Swift-based native iOS apps built to Apple's human interface guidelines. |
| 🔀 | **Cross-Platform Development** | React Native / Flutter apps for faster, cost-efficient multi-platform launches. |

##### C. Staff Augmentation & Hiring
| Icon | Service | Description |
|---|---|---|
| 👥 | **Staff Augmentation** | Add skilled developers to your existing team within days, on flexible terms. |
| 🏢 | **Dedicated Engineering Teams** | Full pod — devs, QA, PM — working exclusively on your product. |
| 🧑‍💻 | **Hire Developers** | Pre-vetted developers by skill, seniority, and engagement duration. |
| 🎯 | **Hire Freelancers** | On-demand freelance talent for short-term or project-based work. |

##### D. Web & Software Development
| Icon | Service | Description |
|---|---|---|
| 💻 | **Custom Software Development** | Tailor-built software designed around your exact business workflows. |
| 🌐 | **Full Stack Development** | Frontend, backend, database, and DevOps under one team. |
| 🖥️ | **Web Application Development** | Scalable, secure web apps with modern frameworks. |
| 🎨 | **Website Design** | Responsive, conversion-focused websites for businesses of all sizes. |
| 🏗️ | **Enterprise Application Development** | Large-scale, secure, integration-ready applications for enterprises. |

##### E. Business Platforms
| Icon | Service | Description |
|---|---|---|
| 🛒 | **E-commerce Development** | Custom stores and marketplace platforms with payment & inventory integrations. |
| 📊 | **ERP Development** | Centralized systems managing operations, finance, HR, and supply chain. |
| 🤝 | **CRM Development** | Custom CRM platforms to manage leads, pipelines, and customer relationships. |
| ☁️ | **SaaS Development** | Multi-tenant, subscription-based SaaS platforms built for scale and growth. |

##### F. Design
| Icon | Service | Description |
|---|---|---|
| 🎨 | **UI/UX Design** | User research, wireframing, prototyping, and pixel-perfect interface design. |
| 📐 | **Website Design** | Brand-aligned, mobile-responsive website design that converts visitors. |

##### G. Consulting & Strategy
| Icon | Service | Description |
|---|---|---|
| 💼 | **IT Consulting** | Technology audits, architecture planning, and tooling recommendations. |
| 🗺️ | **Technology Consulting** | Strategic guidance on tech stack, scalability, and build-vs-buy decisions. |
| 🔄 | **Digital Transformation** | Modernize legacy operations with digital workflows and automation. |
| 🤖 | **AI & Intelligent Automation** | AI features, chatbots, workflow automation, and intelligent integrations. |

---

**Bottom CTA:**
```
Not Sure Which Service You Need?
Let's figure it out together — for free.

[ Book a Free 30-Min Consultation ]
```

---

### 6.4 PRIMARY SERVICE PAGES

Each primary service page follows this template:

```
[1] HERO
    Eyebrow tag (category)
    H1: Outcome-focused headline
    Subtext: 2-3 lines describing the service and who it's for
    CTAs: Primary + Secondary
    Hero visual: relevant illustration

[2] THE PROBLEM
    "The Challenge Clients Face Before Working With Us"
    3 pain-point cards — common client frustrations this service solves

[3] OUR SOLUTION / APPROACH
    How PrepX specifically addresses the problem
    May include a process diagram or method description

[4] DELIVERABLES / WHAT YOU GET
    Concrete list of what the client receives

[5] TECHNOLOGY / TOOLS
    Stack relevant to this service

[6] WHY PREPX FOR THIS SERVICE
    3–4 specific differentiators for this service category

[7] RELATED CASE STUDIES
    2–3 project cards relevant to this service

[8] CTA
    Service-specific call to action
```

**Mobile App Development page (`/services/mobile-app-development`):**
- H1: `Native & Cross-Platform Mobile Apps Built to Scale`
- Problem: Long dev cycles, poor UX on mobile, high costs of maintaining separate codebases
- Stack: Swift, Kotlin, React Native, Flutter, Firebase, AWS, Expo
- CTA: "Get a Mobile App Quote"

**Staff Augmentation page (`/services/staff-augmentation`):**
- H1: `Add Expert Developers to Your Team in 48 Hours`
- Problem: Slow hiring, skills gaps blocking delivery, recruitment overhead
- Process: Share requirement → Shortlist → Interview → Onboard
- CTA: "Tell Us What You Need"

**MVP Development page (`/services/mvp-development`):**
- H1: `Your MVP in 6–8 Weeks. Validated. Deployed. Ready to Pitch.`
- Problem: Wasted runway, over-engineered first versions, missed market windows
- Process: The 6-step MVP process (see Section 6.6 for full detail)
- CTA: "Book a Free MVP Scoping Call"

---

### 6.5 HIRE DEVELOPERS PAGE

**URL:** `/hire-developers` | **Meta Title:** `Hire Pre-Vetted Developers — PrepX Infotech`

**Meta Description:** `Hire dedicated developers from PrepX Infotech in 48 hours. Choose from mobile, frontend, backend, and full-stack engineers on flexible engagement models.`

---

**Hero:**
```
Eyebrow: HIRE DEVELOPERS
H1: Hire Pre-Vetted Developers
    in 48 Hours.

Body: Scale your engineering team without the overhead of hiring. 
      Choose dedicated developers, augmented teams, or freelancers — 
      on your timeline, on your terms.

[ Tell Us What You Need ]    [ See How It Works ↓ ]
```

**Hero visual:** Split-screen illustration — left side shows a traditional long hiring funnel (greyed out, crossed out), right side shows the PrepX process: 4 simple steps with glowing connectors.

---

**Engagement Models (comparison cards):**

```
H2: Choose Your Engagement Model

┌────────────────────────┐  ┌────────────────────────┐  ┌────────────────────────┐  ┌────────────────────────┐
│  👤 Dedicated Dev      │  │  🏢 Dedicated Team     │  │  🔌 Staff Augmentation │  │  🎯 Hire Freelancers   │
│                        │  │                        │  │                        │  │                        │
│  1 developer, full-    │  │  Full pod: devs +       │  │  Add devs to your      │  │  Short-term or         │
│  time, embedded in     │  │  QA + PM. Exclusive     │  │  existing workflow     │  │  project-based         │
│  your team.            │  │  focus on your product. │  │  on flexible terms.    │  │  on-demand work.       │
│                        │  │                        │  │                        │  │                        │
│  Best For:             │  │  Best For:             │  │  Best For:             │  │  Best For:             │
│  Long-term feature     │  │  Full product builds    │  │  Skills gaps, sprint   │  │  Specific features,    │
│  development           │  │  & ongoing sprints      │  │  acceleration          │  │  quick turnaround      │
│                        │  │                        │  │                        │  │                        │
│  Engagement: Monthly   │  │  Engagement: Monthly   │  │  Engagement: Monthly   │  │  Engagement: Hourly    │
│  Billing: Monthly      │  │  Billing: Monthly      │  │  Billing: Monthly/hr   │  │  Billing: Hourly       │
│                        │  │                        │  │                        │  │                        │
│  [ Get Started ]       │  │  [ Get Started ]       │  │  [ Get Started ]       │  │  [ Get Started ]       │
└────────────────────────┘  └────────────────────────┘  └────────────────────────┘  └────────────────────────┘
```

---

**Our 4-Step Hiring Process:**

```
H2: From Requirement to Onboarded Developer — In Under a Week

Step 1 — Share Your Requirement (Day 1)
Tell us what you need: skills, seniority, timezone, stack, and duration.
Use our quick form or hop on a 15-min call.

Step 2 — We Shortlist Matches (Within 48 Hours)
Our team hand-picks 2–5 pre-vetted candidates from our talent pool.
You receive profiles with portfolios, technical assessments, and availability.

Step 3 — Interview & Select (Day 3–4)
Interview your shortlisted candidates directly — no middleman. 
Technical round, culture fit, communication check. You decide.

Step 4 — Onboard & Start (Day 5–7)
We handle the paperwork. You get access to your developer.
They join your Slack, your Jira, your standups — and they're off.
```

Illustration: horizontal 4-step process with SVG connector line that draws in on scroll.

---

**Technology Expertise Grid:**

```
H2: What You Can Hire

Mobile          Frontend          Backend           Database
─────────       ─────────         ─────────         ─────────
Android         React             Node.js           PostgreSQL
iOS (Swift)     Next.js           Python/Django     MongoDB
React Native    Angular           Java/Spring       MySQL
Flutter         Vue.js            PHP/Laravel       Firebase
                TypeScript        .NET / C#         Redis

Cloud & DevOps      AI/ML              QA & Testing
────────────────    ──────────         ─────────────
AWS                 ML Engineers       Manual QA
Google Cloud        AI/LLM Integration Automation QA
Docker/Kubernetes   Data Engineers     Selenium/Cypress
CI/CD               OpenAI/LangChain   Test Planning
```

Each tech shown as a pill tag. Hoverable for brief tooltip.

---

**Why Hire From PrepX:**

```
H2: Why 50+ Companies Hire Their Developers Through PrepX

✓ Pre-Vetted Talent Pool
  Every developer in our network has passed a technical assessment, 
  portfolio review, and communication evaluation. No surprises.

✓ Flexible Contracts
  Monthly, hourly, or project-based. Scale up or down as your 
  needs change — no 12-month lock-ins.

✓ Zero Recruitment Overhead
  No job postings. No screening rounds. No recruiter fees.
  You brief us, we deliver talent.

✓ Direct Communication
  You talk directly to your developers — in your tools, 
  on your calls. No account manager relay.

✓ Free Replacement Guarantee
  If a developer isn't the right fit within the first 2 weeks, 
  we replace them at no additional cost.

✓ India-Based Rates, Global Standards
  Cost-effective hourly rates without compromising quality.
  Most clients save 50–70% vs. hiring locally.
```

---

**Pricing Cards (India / International):**

```
H2: Transparent, Flexible Pricing

Developer Type       India Rate (INR)    International Rate (USD)
─────────────────    ──────────────────  ────────────────────────
Junior Developer     ₹35,000/month       $800–$1,200/month
Mid-Level Developer  ₹60,000/month       $1,500–$2,200/month
Senior Developer     ₹90,000/month       $2,500–$3,500/month
Tech Lead / Arch     ₹1,20,000/month     $3,500–$5,000/month
Full Team (5-member) Custom              Custom

Note: Rates are indicative. Final pricing based on skills, seniority, and engagement type.
```

**CTA:**
```
[ Tell Us Your Requirements → ]     [ Download Hiring Guide PDF ]

Or WhatsApp us directly:  [ 💬 Chat on WhatsApp ]
```

---

### 6.6 MVP & STARTUP PRODUCT DEVELOPMENT PAGE

**URL:** `/services/mvp-development`

---

**Hero:**
```
Eyebrow: MVP DEVELOPMENT
H1: From Idea to Investor-Ready MVP
    in as Little as 6–8 Weeks.

Body: Don't burn your runway building the wrong product. 
      PrepX Infotech uses a lean, sprint-based approach to help founders 
      validate ideas fast, ship a working product, and attract early users 
      or investor interest — without overbuilding.

[ Book a Free MVP Scoping Call ]    [ See MVP Projects →]
```

---

**The MVP Trap (problem section):**

```
H2: Most First-Time Products Fail Because They Over-Build.

3 pain cards:
┌────────────────────────────┐  ┌────────────────────────────┐  ┌────────────────────────────┐
│ ❌ Building Too Much       │  │ ❌ Building Too Slow        │  │ ❌ Building the Wrong Thing│
│ Engineering teams that     │  │ 6–12 months to launch      │  │ No user validation before  │
│ add feature after feature  │  │ a product that could have  │  │ building = months of work  │
│ before anyone uses it.     │  │ shipped in 8 weeks.        │  │ no one actually wants.     │
└────────────────────────────┘  └────────────────────────────┘  └────────────────────────────┘
```

---

**Our MVP Process (detailed, animated):**

```
H2: The PrepX MVP Framework — 6 Phases, 0 Guesswork

Phase 1: Discovery & Scoping (Week 1)
We align on your business goal, define the "core job to be done," and map 
the minimum viable feature set. What must it do to get your first 100 users?
Deliverable: Scope doc, user stories, feature prioritization matrix.

Phase 2: UI/UX Prototyping (Week 2)
Clickable Figma prototype built before a single line of code is written.
Test the experience. Refine the flows. Get stakeholder sign-off.
Deliverable: High-fidelity prototype, design system (colors, type, components).

Phase 3: Sprint-Based Development (Weeks 3–6)
2-week agile sprints. Every sprint ends with a demo you can actually click.
GitHub-based versioning, Jira/Notion for tracking, Slack for daily comms.
Deliverable: Working, tested software deployed to staging environment.

Phase 4: QA & Testing (Week 6–7)
Functional testing, device testing (for mobile), performance benchmarking.
We break it so your users don't.
Deliverable: QA report, bug-fix sprint, regression-tested build.

Phase 5: Launch (Week 7–8)
Production deployment. App store submissions (if mobile). Domain setup.
Monitoring and alerting configured.
Deliverable: Live product on production infrastructure.

Phase 6: Iterate & Grow
Post-launch feature roadmap, user feedback loops, analytics integration.
We become your ongoing development partner as you scale.
```

Visual: Animated horizontal timeline with milestone markers. Connector lines animate on scroll. Active phase has a glowing indicator.

---

**MVP Packages:**

```
H2: MVP Packages — Pick Your Starting Point

┌─────────────────────────┐   ┌─────────────────────────┐   ┌─────────────────────────┐
│     LEAN MVP            │   │    STANDARD MVP         │   │    ADVANCED MVP         │
│  ──────────────────     │   │  ──────────────────     │   │  ──────────────────     │
│  Best for: Single-      │   │  Best for: Multi-       │   │  Best for: Complex      │
│  feature validation     │   │  feature product with   │   │  platforms — SaaS,      │
│  & early user testing   │   │  auth, payments, dash   │   │  marketplace, multi-    │
│                         │   │                         │   │  role apps              │
│  Timeline: 4–6 weeks    │   │  Timeline: 8–12 weeks   │   │  Timeline: 12–16 weeks  │
│  Includes:              │   │  Includes:              │   │  Includes:              │
│  · Discovery            │   │  Everything in Lean +   │   │  Everything in Std. +   │
│  · UX prototype         │   │  · Auth system          │   │  · Multi-role access    │
│  · Core feature         │   │  · Payment integration  │   │  · Advanced integrations│
│  · Mobile or Web        │   │  · Dashboard UI         │   │  · Scalable architecture│
│  · 1 platform           │   │  · 2 platforms          │   │  · DevOps setup         │
│  · Basic QA             │   │  · Full QA              │   │  · API documentation    │
│                         │   │                         │   │                         │
│  [Get a Quote →]        │   │  [Get a Quote →]        │   │  [Get a Quote →]        │
└─────────────────────────┘   └─────────────────────────┘   └─────────────────────────┘
```

---

### 6.7 PRODUCTS PAGE (SaaS Portfolio)

**URL:** `/products`

---

**Hero:**
```
Eyebrow: OUR PRODUCTS
H1: Software We've Built & Ship Ourselves.

Body: Beyond client work, PrepX Infotech builds and operates its own SaaS 
      products. This is our proof of concept — that we don't just understand 
      code, we understand what it takes to build a product people actually use.
```

**Product Cards Grid (glassmorphism style):**

Each card:
```
┌──────────────────────────────────────────────────┐
│  [Product Icon/Logo]                  ● LIVE     │
│                                                  │
│  Product Name                                    │
│  Tagline — crisp value proposition in one line  │
│                                                  │
│  Description: 2–3 sentences on what it does,    │
│  who it's for, and what problem it solves.       │
│                                                  │
│  ─────────────────────────────────────────────  │
│                                                  │
│  ✓ Feature One         ✓ Feature Four           │
│  ✓ Feature Two         ✓ Feature Five           │
│  ✓ Feature Three                                │
│                                                  │
│  [Product Screenshot / Mockup]                  │
│                                                  │
│  [ Visit Website ↗ ]    [ Learn More ]          │
└──────────────────────────────────────────────────┘
```

*(Add your actual SaaS products here. Placeholder content shown. Include product name, tagline, description, 3–5 features, screenshot, live URL, and status badge — Live / Beta / Coming Soon)*

---

### 6.8 PORTFOLIO / CASE STUDIES PAGE

**URL:** `/portfolio`

**Hero:**
```
Eyebrow: OUR WORK
H1: Products We've Designed, Built & Shipped.

Body: Every project here is a problem solved, a deadline met, and a product 
      shipped. Browse by industry or service type.

Filters: [ All · Mobile Apps · Web Apps · SaaS · E-commerce · ERP/CRM · Enterprise ]
```

**Project Cards:**

```
┌──────────────────────────────────┐
│  [Device Mockup — Phone/Browser] │
│  (screenshot fills the frame)    │
├──────────────────────────────────┤
│  FinTech · Mobile App            │  ← category pill tags
│                                  │
│  Project Name                    │
│                                  │
│  The challenge in one sentence.  │
│  The outcome in one number.      │
│                                  │
│  Stack: React Native · Node.js   │
│         AWS · PostgreSQL         │
│                                  │
│  [ View Case Study → ]          │
└──────────────────────────────────┘
```

**Individual Case Study Template (`/portfolio/[slug]`):**

```
[HERO]
Client: [Name or "Confidential — FinTech"]
Service: Mobile App Development
Industry: FinTech
Timeline: 10 weeks

[OVERVIEW — 3 stat boxes]
10 Weeks · 3-Person Team · 40% Faster Processing

[THE CHALLENGE]
1–2 paragraphs describing the client's problem.

[OUR APPROACH]
How PrepX tackled it — process, decisions, tools.

[TECH STACK]
Pills showing each technology used.

[KEY SCREENS / VISUALS]
Screenshot gallery — device mockups showing the actual UI.

[RESULTS]
3–4 outcome metrics in large bold numbers:
  40%        2 weeks     4.8★         3x
  Faster     to App      App Store    Revenue
  Processing Store       Rating       Growth

[TESTIMONIAL]
Quote from the client (if available).

[RELATED PROJECTS]
2 other portfolio cards below.

[CTA]
"Have a Similar Challenge? Let's Talk."
[ Start a Conversation ]
```

---

### 6.9 CAREERS PAGE

**URL:** `/careers`

**Hero:**
```
Eyebrow: JOIN THE TEAM
H1: Build Your Career at PrepX Infotech.
    We're building products people love — join us.

Body: We're a small, fast-moving team of engineers, designers, and product 
      thinkers who care deeply about what we ship. If you're passionate 
      about mobile apps, SaaS products, and working with real ownership — 
      this is your place.

[ See Open Roles ↓ ]   [ Send Your Resume ]
```

**Background:** Illustration of remote team members connected by glowing lines across a world map (line-art, brand palette).

---

**Why Work With Us:**

```
H2: Life at PrepX Infotech

┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│ 🌍 Remote-First   │  │ 🚀 Real Ownership │  │ 📚 Learning Cult. │  │ 💰 Competitive Pay│
│                   │  │                   │  │                   │  │                   │
│ Work from         │  │ You'll build real │  │ Courses, conf-    │  │ Market-rate comp- │
│ anywhere.         │  │ products used by  │  │ erences, and time │  │ ensation with     │
│ Flexible hours.   │  │ real people. No   │  │ for 20% personal  │  │ performance       │
│ Output-focused.   │  │ toy projects.     │  │ project time.     │  │ reviews.          │
└───────────────────┘  └───────────────────┘  └───────────────────┘  └───────────────────┘
```

---

**Application Process:**

```
H2: How We Hire

Apply Online → Screening Call (15 min) → Technical Round → Founder/Culture Fit → Offer

1. Apply Online — Submit your resume and a short note on why PrepX.
2. Screening Call — 15 minutes with our HR lead. Quick culture and role fit check.
3. Technical Round — A practical challenge relevant to the role. No whiteboard tricks.
4. Final Round — A conversation with our founder/tech lead. 30 minutes.
5. Offer — If it's a fit, you'll have an offer within 3 business days.
```

---

**Open Positions (CMS-driven, repeat template):**

```
H2: Open Roles

[Job Listing Card]
┌──────────────────────────────────────────────────────────┐
│  Senior React Native Developer              Engineering   │
│  🌍 Remote · Full-time · 3–6 Years Experience           │
│                                                          │
│  We're looking for a senior React Native dev to lead    │
│  mobile feature development for 2 client products...   │
│                                                          │
│  Requirements: React Native · Redux · REST APIs ·       │
│                Firebase · 3+ years experience           │
│                                                          │
│  [ View Full Job Description ]    [ Apply Now → ]       │
└──────────────────────────────────────────────────────────┘
```

*(Repeat for each open role. If no open roles, display: "No current openings, but we're always looking for great people. Send your resume to hello@prepxinfotech.com")*

---

**Unlisted Roles CTA:**
```
Don't see a role that fits?
Send your resume and a short intro to hello@prepxinfotech.com 
We keep all applications on file and reach out when a matching role opens.

[ Send Resume → ]
```

---

### 6.10 CONTACT US PAGE

**URL:** `/contact`

---

**Hero:**
```
H1: Let's Build Something Great Together.
Body: Whether you have a detailed project brief or just an idea on a napkin — 
      we'd love to hear from you. We'll respond within 24 hours.
```

**Two-column layout:**

**Left — Contact Info:**
```
📧 Email
   hello@prepxinfotech.com

📞 Phone / WhatsApp
   +91 95040 07442
   [ 💬 Chat on WhatsApp → ]

💼 LinkedIn
   /company/prepxinfotech
   [ Connect on LinkedIn → ]

🕐 Response Time
   We typically respond within 24 business hours.
   For urgent inquiries, WhatsApp is fastest.

[Optional: Office address + Google Maps embed if applicable]
```

**Right — Contact Form:**
```
Full Name *                    [___________________________]
Email Address *                [___________________________]
Phone Number                   [___________________________]
I'm interested in... *         [Dropdown ▾]
  → General Inquiry
  → Hire Developers
  → MVP Development  
  → Staff Augmentation / Dedicated Team
  → Custom Software Development
  → SaaS / Platform Development
  → IT Consulting
  → Partnership / Collaboration
  → Careers / Job Application

Budget Range (optional)        [Dropdown ▾]
  → Under $5,000 / ₹4 Lakh
  → $5,000–$15,000 / ₹4–12 Lakh
  → $15,000–$50,000 / ₹12–40 Lakh
  → $50,000+ / ₹40 Lakh+
  → Let's discuss

Tell us about your project *   [_________________________]
                               [_________________________]
                               [_________________________]
                               (minimum 20 characters)

[ ✓ I agree to the Privacy Policy ]

[    Send Message →    ]
```

Form behavior:
- Real-time field validation with friendly error messages
- On submit: spinner on button, then success state slides in: "✓ Message received! We'll be in touch within 24 hours."
- Send form data to hello@prepxinfotech.com via form backend (Formspree / Netlify Forms / custom endpoint)

---

### 6.11 BLOG / INSIGHTS PAGE

**URL:** `/blog`

**Hero:**
```
Eyebrow: INSIGHTS & PERSPECTIVES
H1: Our Thinking on Mobile, Product & Engineering.

Body: Articles, guides, and case study breakdowns from the PrepX Infotech team.
      Practical content for founders, CTOs, and product teams.

[ Browse by Topic ▾ ]  → All · Mobile Dev · Staff Aug · MVP · AI · SaaS · Career
```

**Blog Post Card:**
```
┌──────────────────────────────────┐
│  [Featured Image / Illustration] │
│  ──────────────────────────────  │
│  Mobile Dev · 5 min read         │
│                                  │
│  Article Title: How We Built     │
│  an MVP in 6 Weeks for a         │
│  FinTech Startup                 │
│                                  │
│  Short excerpt (2 lines max)     │
│                                  │
│  Author · Date                   │
│                                  │
│  [ Read Article → ]             │
└──────────────────────────────────┘
```

**Recommended first 8 blog topics:**
1. *How to Build an MVP in 8 Weeks Without Burning Your Runway*
2. *React Native vs Flutter in 2025: Which Should You Choose?*
3. *Staff Augmentation vs Dedicated Team — Which Model Is Right for Your Startup?*
4. *5 Signs You're Ready to Scale Your Engineering Team*
5. *How We Approach UI/UX for Mobile-First Products*
6. *The Hidden Costs of Hiring In-House vs Outsourcing Your Dev Team*
7. *What Makes a Good MVP? A Framework for First-Time Founders*
8. *How AI Automation Is Changing the Way We Build SaaS Products*

---

### 6.12 FAQ PAGE

**URL:** `/faq`

Organized by category. Each item uses an accordion (expand/collapse). Smooth animation on open/close.

**General:**
- What services does PrepX Infotech offer?
- Where is PrepX Infotech based?
- Do you work with clients outside India?
- What industries have you worked with?
- Can I sign an NDA before sharing my project details?

**Hiring & Staff Augmentation:**
- How long does it take to hire a developer through PrepX?
- What is staff augmentation and how is it different from a dedicated team?
- Can I interview developers before committing?
- What if the developer isn't a good fit?
- Do you provide developers for short-term projects?
- What time zones do your developers work in?

**MVP & Product Development:**
- How long does it take to build an MVP?
- What's included in your MVP development service?
- Can you take on projects mid-way if we've already started?
- Do you provide post-launch support?

**Pricing & Contracts:**
- How do you price your services?
- Do you offer fixed-price or hourly engagements?
- What payment terms do you offer?
- Do you require a deposit to get started?
- Is your pricing in USD or INR?

**Technical:**
- What tech stack do you work with?
- Do you help with cloud hosting and DevOps?
- Can you help with an existing codebase?
- Do you provide source code ownership?

---

### 6.13 PRICING & ENGAGEMENT MODELS PAGE

**URL:** `/pricing`

---

**Hero:**
```
H1: Transparent Pricing for Every Stage.
Body: No hidden retainers. No surprise invoices. Choose the engagement 
      model that fits your budget, timeline, and goals.
```

---

**Three Engagement Models:**

```
┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐
│  FIXED PRICE            │  │  TIME & MATERIAL        │  │  DEDICATED TEAM         │
│  ─────────────────      │  │  ─────────────────      │  │  ─────────────────      │
│  Best for:              │  │  Best for:              │  │  Best for:              │
│  Well-defined projects  │  │  Evolving requirements  │  │  Long-term product      │
│  with clear scope.      │  │  & ongoing development. │  │  development & scaling. │
│                         │  │                         │  │                         │
│  How it works:          │  │  How it works:          │  │  How it works:          │
│  Scope → Quote →        │  │  Monthly hours/team     │  │  Full team on a monthly │
│  Milestone payments.    │  │  billed at fixed rates. │  │  retainer. Scale up/    │
│  Final on delivery.     │  │  Weekly time logs.      │  │  down as needed.        │
│                         │  │                         │  │                         │
│  Typical Use:           │  │  Typical Use:           │  │  Typical Use:           │
│  MVP, defined feature   │  │  Ongoing dev support,   │  │  Product startups,      │
│  build, redesign.       │  │  staff augmentation.    │  │  scale-ups, enterprises.|
│                         │  │                         │  │                         │
│  [ Get a Quote → ]     │  │  [ Discuss Rates → ]   │  │  [ Build Your Team → ] │
└─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘
```

---

**Service-Level Pricing Guide:**

```
SERVICE                     STARTING FROM         TYPICAL RANGE
──────────────────────────  ──────────────────    ─────────────────────
MVP Development (Lean)      ₹3.5L / $4,500        ₹3.5L–₹7L / $4.5K–$9K
MVP Development (Standard)  ₹7L / $9,000          ₹7L–₹18L / $9K–$22K
Mobile App (Cross-Platform) ₹5L / $6,000          ₹5L–₹20L / $6K–$25K
Custom Web Application      ₹4L / $5,000          ₹4L–₹15L / $5K–$18K
Dedicated Developer         ₹35K/mo / $800/mo     Depends on seniority
Full Stack Team (3-member)  ₹2L/mo / $4,500/mo    Custom
UI/UX Design (App)          ₹80K / $1,000         ₹80K–₹3L / $1K–$4K
IT Consulting               ₹15K/hr / $200/hr     Fixed project rates available

All prices are indicative. Final pricing provided after project scoping.
```

**Payment Terms section:**
```
✓ Milestone-Based Payments   — Pay as each project milestone is completed
✓ Transparent Cost Tracking  — Weekly billing summaries for T&M engagements
✓ No Lock-in Contracts       — Monthly rolling contracts for staff augmentation
✓ NDA First                  — Sign an NDA before sharing any project details
✓ Refund Policy              — If a developer doesn't work out in week 1, you don't pay for that time
```

---

### 6.14 PROCESS / HOW WE WORK PAGE

**URL:** `/process`

This is the full expanded process page (the About page has a summary version).

**Hero:**
```
H1: How PrepX Infotech Works — From First Call to Shipped Product.

Body: We've refined our delivery process across 50+ projects. Here's 
      exactly what happens when you work with us.
```

**Detailed 5-phase process (each phase gets a full section):**

```
PHASE 01: DISCOVERY & ALIGNMENT
What happens:
A 30-minute call to understand your goals, timeline, and budget. 
We'll ask about your business model, target users, and existing tech.
We don't just ask "what do you want to build" — we ask "what problem 
are you solving and for whom?"

Our deliverables after Discovery:
→ Project scope document (what's in, what's out)
→ Technical feasibility notes
→ High-level project roadmap
→ Pricing proposal (fixed or T&M)
Timeline: 3–5 business days

PHASE 02: DESIGN (UI/UX)
What happens:
Our designers translate your scope into wireframes, then a full 
interactive prototype in Figma. You see and click the product 
before we write a single line of code.
Revisions: Up to 2 rounds of revisions included.

Our deliverables after Design:
→ User flow diagrams
→ Wireframes (low-fidelity)
→ High-fidelity Figma prototype
→ Design system (colors, typography, components)
Timeline: 1–2 weeks depending on scope

PHASE 03: DEVELOPMENT (AGILE SPRINTS)
What happens:
2-week sprint cycles. Every sprint ends with working software 
you can test. Daily async standups. Weekly demo calls.
You're involved without being overwhelmed.

Our deliverables per sprint:
→ Deployed build on staging environment
→ Sprint demo video or live call
→ Updated Jira/Notion board
→ GitHub PR log (if you want technical detail)
Timeline: Depends on scope (4–16 weeks)

PHASE 04: QA & TESTING
What happens:
Dedicated QA round after dev freeze. Functional testing, 
edge case testing, performance testing, device testing (for mobile), 
and accessibility checks.

Our deliverables after QA:
→ QA test report
→ Bug-fix sprint (1 week)
→ Regression-tested build ready for production
Timeline: 1–2 weeks

PHASE 05: DEPLOYMENT & HANDOVER
What happens:
We deploy to your production environment. For mobile apps, we handle 
App Store and Google Play submissions. We configure monitoring, 
alerting, and basic analytics.

Our deliverables at launch:
→ Live product on production infrastructure
→ Deployment documentation
→ Admin credentials handover
→ Recorded walkthrough of the codebase (optional)
→ 2-week post-launch bug-fix support window included
Timeline: 3–5 business days

PHASE 06 (OPTIONAL): ONGOING SUPPORT
Monthly retainer for:
→ Bug fixes & maintenance
→ Feature additions
→ Infrastructure monitoring
→ Developer availability for questions
```

---

### 6.15 INDUSTRIES WE SERVE PAGE

**URL:** `/industries`

**Hero:**
```
H1: Software Built for Your Industry.
Body: Every industry has unique workflows, compliance requirements, and user expectations. 
      We've built across 8+ verticals — here's what we bring to yours.
```

**Per industry section (8 sections with icons, description, relevant services, and "See projects" CTA):**

1. **🏥 Healthcare & MedTech** — Patient apps, telemedicine, EMR integrations, HIPAA-aware
2. **🏦 FinTech & Banking** — Payment platforms, wallets, trading dashboards, KYC flows
3. **🛒 E-Commerce & Retail** — Custom storefronts, marketplace platforms, inventory management
4. **📚 EdTech & E-Learning** — LMS platforms, live classroom tools, course marketplaces
5. **🚚 Logistics & Supply Chain** — Fleet tracking, dispatch management, warehouse apps
6. **🏠 Real Estate & PropTech** — Property portals, booking systems, agent dashboards
7. **📊 SaaS & B2B Software** — Multi-tenant SaaS, billing integration, team collaboration tools
8. **🎯 Startups & Scale-ups** — MVP-first approach, investor pitch support, rapid iteration

---

### 6.16 LEGAL PAGES

**Privacy Policy (`/privacy-policy`):**
Cover: what data is collected, how it's used, cookies, third-party tools, contact for data requests. Comply with GDPR and IT Act 2000 (India).

**Terms of Service (`/terms-of-service`):**
Cover: service scope, payment terms, IP ownership (client retains all IP from client work), limitation of liability, governing law (India), dispute resolution.

**Note:** Have a lawyer draft or review both documents before publishing, especially if your SaaS products collect user data.

---

## 7. COMPONENT LIBRARY SPEC

### Buttons
```
Primary:    bg-electric, white text, border-none, border-radius 8px, px-28 py-14
Secondary:  bg-transparent, white text, border 1.5px solid electric, same sizing
Ghost:      bg-transparent, white/60 text, no border, underline on hover
Danger:     bg-error for destructive actions
Small:      Same styles, px-20 py-10, font-size 14px
Icon:       Square button with icon only, 40×40px

All: transition all 200ms ease, hover effect as specified in Section 4.4
```

### Cards
```
Service Card:       16px radius, 1px border --color-border, 32px pad, hover glow
Portfolio Card:     Image top (16px rad top only), content below, no border on image
Testimonial Card:   Slightly larger radius 20px, quote mark decorative element
Product Card:       Glassmorphism: backdrop-blur-sm, bg rgba(19,28,46,0.8), border glow
Team Card:          Photo circular crop, centered content, LinkedIn on hover
Job Card:           Horizontal on desktop, info left + CTA right
Stat Card:          Large number + label + optional icon, minimal border
```

### Navigation
```
Desktop Nav:        Flex, height 72px, sticky, blur on scroll
Mobile Nav:         Hamburger → full-screen overlay, slide from right
Dropdown:           Mega-menu (services), max-width 640px, positioned below nav
Active link:        Underline + bright white color
```

### Forms
```
Input:              Dark surface bg, --color-border border, white text, 48px height
                    Focus: border transitions to --color-electric, subtle glow
Label:              Small caps, slate color, font-size 12px, font-weight 500
Error state:        Border red, error message below in --color-error
Success state:      Border green, green check icon
Dropdown:           Custom styled to match input, with custom arrow
Textarea:           Same as input, min-height 120px, resize: vertical
Submit button:      Primary button, full-width on mobile, auto-width on desktop
```

### Badges / Pills
```
Category tag:   px-12 py-4, border-radius 999px, bg rgba(47,128,237,0.15), text --color-glow, font-size 12px
Status LIVE:    bg rgba(16,185,129,0.15), text --color-success
Status BETA:    bg rgba(245,158,11,0.15), text --color-warning
Tech pill:      Mono font, dark bg, text slate, border --color-border
```

---

## 8. SEO & METADATA STRATEGY

### Page-Level SEO Mapping

| Page | Primary Keyword | Secondary Keywords |
|---|---|---|
| Home | `mobile app development company india` | `staff augmentation`, `hire developers` |
| Hire Developers | `hire developers india` | `hire react native developer`, `dedicated developer` |
| Staff Augmentation | `staff augmentation services india` | `dedicated engineering team` |
| MVP Development | `mvp development company` | `startup product development`, `build mvp` |
| Mobile App Dev | `mobile app development company` | `android ios app development` |
| Services Overview | `software development services` | `custom software development` |
| SaaS Development | `saas development company india` | `saas product development` |
| Portfolio | `mobile app development portfolio` | `case studies software development` |
| Careers | `software developer jobs india` | `react native developer remote jobs` |
| Blog | varies by post | long-tail keywords |

### Global Technical SEO
- `sitemap.xml` — auto-generated, submitted to Google Search Console
- `robots.txt` — allow all except `/admin/`, staging subdomains
- `canonical` tags on all pages
- `hreflang` if multilingual is added later
- Schema markup:
  - `Organization` on all pages
  - `JobPosting` on each career listing
  - `FAQPage` on `/faq`
  - `BreadcrumbList` on service/portfolio pages
  - `Review`/`AggregateRating` if testimonials meet schema requirements
- Open Graph + Twitter Card tags on all pages
- Page load target: Largest Contentful Paint < 2.5s, FID < 100ms

### Meta Template (all pages)
```html
<title>[Page Title] | PrepX Infotech</title>
<meta name="description" content="[150-160 char description with primary keyword]">
<meta property="og:title" content="[Same as title]">
<meta property="og:description" content="[Same as description]">
<meta property="og:image" content="https://prepxinfotech.com/og/[page].jpg">  <!-- 1200×630px -->
<meta property="og:url" content="https://prepxinfotech.com/[path]">
<meta name="twitter:card" content="summary_large_image">
```

---

## 9. TECHNICAL REQUIREMENTS & STACK

### Recommended Tech Stack

| Layer | Recommended | Alternative |
|---|---|---|
| **Frontend Framework** | Next.js 14+ (App Router) | Astro (for mostly static) |
| **Styling** | Tailwind CSS + CSS Variables | Styled Components |
| **Animations** | Framer Motion + CSS | GSAP (if budget allows) |
| **CMS (Blog/Careers)** | Sanity.io or Contentful | Notion API |
| **Contact Form** | Resend + React Hook Form | Formspree |
| **Hosting** | Vercel | Netlify |
| **Analytics** | Google Analytics 4 | Plausible (privacy-first) |
| **Icons** | Lucide React | Phosphor Icons |
| **Illustrations** | Custom SVG (see Section 3) | Storyset / unDraw (as fallback) |

### Performance Requirements
```
Core Web Vitals targets:
  LCP (Largest Contentful Paint):  < 2.5s
  CLS (Cumulative Layout Shift):   < 0.1
  FID / INP:                       < 100ms

Image strategy:
  - WebP format with JPEG fallback
  - Next.js Image component (auto-optimize)
  - Lazy-load all below-fold images
  - Hero illustration: inline SVG (no HTTP request)
  
Bundle strategy:
  - Code split per route (Next.js default)
  - Preload fonts in <head>
  - Self-host Sora and Inter (no Google Fonts runtime)
  - Defer non-critical JS (analytics, chat widgets)
```

### Integrations
- **WhatsApp click-to-chat:** `https://wa.me/919504007442?text=Hi%20PrepX%2C%20I%27d%20like%20to%20discuss%20a%20project`
- **LinkedIn:** `https://www.linkedin.com/company/prepxinfotech/`
- **Google Analytics 4:** Add GA4 tracking ID in `.env`
- **Contact form backend:** Resend API (email delivery) — configure `hello@prepxinfotech.com` as recipient
- **CRM webhook (optional):** Connect form submission to HubSpot, Pipedrive, or Notion database via Zapier
- **WhatsApp/Live chat widget:** WATI, Tidio, or a simple floating WA button (recommended for cost)

---

## 10. FOOTER & GLOBAL ELEMENTS

### Footer Structure

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                      │
│  [PrepX Infotech Logo]                                                               │
│  Building mobile-first products, scaling engineering teams,                          │
│  and launching MVPs — one sprint at a time.                                          │
│                                                                                      │
│  [LinkedIn icon]  [WhatsApp icon]  [Email icon]                                     │
│                                                                                      │
│  ──────────────────────────────────────────────────────────────────────────────────  │
│                                                                                      │
│  COMPANY              SERVICES                HIRE                RESOURCES          │
│  ─────────────        ───────────────         ─────────────       ───────────────    │
│  About Us             Mobile App Dev          Hire Developers     Blog / Insights    │
│  Our Process          Staff Augmentation      Dedicated Teams     FAQ                │
│  Products             MVP Development         Staff Augmentation  Case Studies       │
│  Portfolio            Custom Software         Hire Freelancers    Process            │
│  Careers              SaaS Development                            Pricing            │
│  Contact              IT Consulting                               Privacy Policy     │
│                       AI & Automation                             Terms of Service   │
│                                                                                      │
│  ──────────────────────────────────────────────────────────────────────────────────  │
│                                                                                      │
│  GET IN TOUCH                                                                        │
│  📧 hello@prepxinfotech.com · 📞 +91 95040 07442 · 💬 WhatsApp                    │
│                                                                                      │
│  ──────────────────────────────────────────────────────────────────────────────────  │
│                                                                                      │
│  © 2025 PrepX Infotech Pvt. Ltd. All rights reserved.                              │
│  Made with ❤️ in India                                                              │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### Floating Elements (always visible)
- **WhatsApp button:** Fixed bottom-right, 56×56px, WhatsApp green, WA icon, subtle bounce animation on first load. Tooltip on hover: "Chat with us on WhatsApp". Link: `https://wa.me/919504007442`
- **Back to Top button:** Appears after user scrolls 400px. Fixed bottom-right (above WA button). 40×40px, icon only, dark surface with border.
- **Cookie consent banner:** Appears on first visit. Simple, non-intrusive. Two options: Accept / Preferences.

### 404 Page
```
H1: Oops. This page doesn't exist.
Body: Looks like you wandered into uncharted territory. 
      No worries — let's get you back on track.

[ → Back to Home ]    [ → View Our Services ]    [ → Contact Us ]

Illustration: Friendly glitching robot or a "404" in the brand palette
```

---

## 11. PERFORMANCE & ACCESSIBILITY CHECKLIST

### Before Launch
- [ ] All pages responsive on: 375px, 768px, 1024px, 1440px viewports
- [ ] All images have descriptive `alt` attributes
- [ ] Color contrast ratios meet WCAG AA (minimum 4.5:1 for body text)
- [ ] All interactive elements reachable by keyboard (Tab order logical)
- [ ] Focus indicators visible on all focusable elements
- [ ] No `outline: none` without a custom focus style replacement
- [ ] All form fields have associated `<label>` elements
- [ ] Error messages programmatically associated with fields
- [ ] ARIA roles/labels on icon-only buttons
- [ ] Heading hierarchy: h1 → h2 → h3 (no skipping levels)
- [ ] `lang="en"` on `<html>` tag
- [ ] Skip-to-main-content link at top of page (visually hidden, shown on focus)
- [ ] `prefers-reduced-motion` media query implemented (see Section 4.5)
- [ ] sitemap.xml submitted to Google Search Console
- [ ] robots.txt configured
- [ ] All pages have unique meta title and description
- [ ] Open Graph images: 1200×630px for each key page
- [ ] GA4 tracking confirmed working on all pages
- [ ] Contact form tested: submit, error states, success state
- [ ] WhatsApp link tested on both mobile and desktop
- [ ] SSL certificate active (`https://`)
- [ ] Core Web Vitals measured and passing (use PageSpeed Insights)

---

## 12. CONTENT CHECKLIST — WHAT'S NEEDED FROM YOU

To move from this blueprint to a fully live, populated site, please provide:

| Item | Where Used | Priority |
|---|---|---|
| ✦ **Logo files** (SVG + PNG, light + dark versions) | Header, Footer, OG Images, Favicon | 🔴 Critical |
| ✦ **Company stats** (projects delivered, team size, years active, countries, client count) | Home trust bar, About stats, hero eyebrow | 🔴 Critical |
| ✦ **SaaS product details** — name, tagline, description, 3–5 features, screenshot, URL, status | Products page, Home featured products section | 🔴 Critical |
| ✦ **Portfolio projects** — at minimum 3–6 entries with: project name, industry, service, challenge, solution, stack, outcome/metrics, and screenshot/mockup | Portfolio page + case study pages | 🔴 Critical |
| ✦ **Team/founder info** — photo, name, title, 2-sentence bio, LinkedIn URL | About page team section | 🔴 Critical |
| ✦ **Client testimonials** — 4–6 quotes with: quote, client name, role, company, and optional photo/logo | Home testimonials, portfolio case studies | 🔴 Critical |
| ✦ **Open job roles** — title, department, type, experience, responsibilities, requirements | Careers page | 🟡 High |
| ✦ **Client logos** (if permission granted) — for logo strip / trust strip | Home trust bar, About page | 🟡 High |
| ✦ **Office address** (if applicable) — for contact page and footer | Contact page, footer | 🟡 High |
| ✦ **Blog posts** — at least 2–3 written articles for launch | Blog page | 🟡 High |
| ✦ **Pricing specifics** — your actual engagement rates or whether to show ranges | Hire Developers pricing table, Pricing page | 🟡 High |
| ✦ **Social proof numbers** — verified stats to replace placeholder `[X]` values | Home trust bar, About stats | 🟡 High |
| ✦ **Privacy Policy & Terms of Service** — drafted/reviewed by legal | Legal pages | 🟠 Medium |
| ✦ **NDA template** — if you offer NDA-first policy | FAQ, Pricing page trust section | 🟠 Medium |

---

## QUICK-START BUILD ORDER (for developers)

1. Set up Next.js project with Tailwind + design tokens (colors, type scale)
2. Build global components: Header (with mega-menu), Footer, Button, Card primitives
3. Build Home page — hero, trust bar, services, stack, CTA
4. Build Hire Developers page — highest commercial intent
5. Build MVP Development page — second highest intent
6. Build Services Overview page
7. Build About, Contact, Careers
8. Build Portfolio (grid page + case study template)
9. Build Products page
10. Build Blog structure + FAQ + Pricing + Process + Industries
11. Legal pages
12. 404 page
13. Animation pass — add all scroll reveals, hover states, hero sequence
14. SEO pass — metadata, schema, sitemap, OG images
15. Accessibility audit + performance optimization
16. Cross-browser testing (Chrome, Safari, Firefox, Edge)
17. Mobile device testing (iPhone SE, iPhone 14, Pixel 7, Samsung S23)
18. Go live + submit to Google Search Console

---

*PrepX Infotech Enhanced Website Blueprint v2.0*
*Document prepared for: PrepX Infotech — hello@prepxinfotech.com*
*Prepared with full section detail, visual direction, illustration specs, animation tokens, and component guidance.*
*→ Hand this single document to any developer, designer, or AI website builder to begin production.*
