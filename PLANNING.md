# The Inspection Academy - Website Modernization Plan

## Executive Summary

This document outlines the complete plan to modernize The Inspection Academy website from its current WordPress/SeedProd implementation to a modern Next.js 14 React application with improved design, content structure, and user experience.

---

## Table of Contents

1. [Current State Analysis](#current-state-analysis)
2. [Technical Architecture](#technical-architecture)
3. [Design System](#design-system)
4. [Site Structure & Navigation](#site-structure--navigation)
5. [Page-by-Page Implementation](#page-by-page-implementation)
6. [Component Library](#component-library)
7. [Content Strategy](#content-strategy)
8. [Implementation Phases](#implementation-phases)
9. [File Structure](#file-structure)

---

## Current State Analysis

### Existing Website Overview

**URL:** https://theinspectionacademy.com/

**Current Technology Stack:**
- WordPress CMS
- SeedProd Landing Page Builder
- TalentLMS (external course delivery)
- NitroCDN for optimization
- Google Calendar for scheduling

### Identified Issues

| Category | Issue | Impact |
|----------|-------|--------|
| **Design** | Outdated visual aesthetic | Low trust, high bounce rate |
| **Design** | Inconsistent typography/spacing | Unprofessional appearance |
| **Design** | Visible "Made with SeedProd" branding | Reduces credibility |
| **Content** | Text-heavy walls of content | Poor readability, low engagement |
| **Content** | Repetitive CTAs ("CALL NOW" x7+) | CTA fatigue |
| **Content** | Information overload on homepage | Decision paralysis |
| **UX** | No navigation on landing page | Difficult to find information |
| **UX** | Intrusive scholarship popup | Negative first impression |
| **UX** | Important info buried in paragraphs | Missed conversions |
| **Technical** | 403 errors on resources | Broken functionality |
| **Technical** | Multiple external dependencies | Fragmented experience |

### Content Inventory (Current Site)

**Homepage Sections:**
1. Scholarship popup banner
2. TREC approval badge + hero heading
3. Problem statement (50% fail rate)
4. What other schools do wrong
5. TIA's teaching approach
6. 3-step learning process
7. 15% discount promotion
8. Cost of failure section
9. Benefits of passing
10. Subscription payment plans
11. Foreign language support
12. Spectora software training
13. Financing CTA
14. Meeting/catalog links
15. Footer with contact

**Other Pages:**
- `/texas-home-inspector-training/` - Detailed course information
- `/the-inspection-academy-subscriptions/` - Payment plan details
- External: TalentLMS course catalog
- External: Promo/scholarship page

---

## Technical Architecture

### New Technology Stack

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND                              │
├─────────────────────────────────────────────────────────┤
│  Framework:     Next.js 14 (App Router)                 │
│  Language:      TypeScript                              │
│  Styling:       Tailwind CSS                            │
│  Components:    shadcn/ui (Radix UI primitives)         │
│  Icons:         Lucide React                            │
│  Animations:    Framer Motion                           │
│  Forms:         React Hook Form + Zod                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    HOSTING                               │
├─────────────────────────────────────────────────────────┤
│  Platform:      Vercel (recommended) or Netlify         │
│  CDN:           Built-in Edge Network                   │
│  Analytics:     Vercel Analytics or Plausible           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                 INTEGRATIONS                             │
├─────────────────────────────────────────────────────────┤
│  LMS:           TalentLMS (existing - link out)         │
│  Scheduling:    Cal.com or Calendly embed               │
│  Email:         Resend or SendGrid                      │
│  CRM:           Optional HubSpot/Pipedrive              │
└─────────────────────────────────────────────────────────┘
```

### Key Technical Decisions

1. **Static Generation (SSG)** - Pages are pre-rendered at build time for maximum performance
2. **Server Components** - Reduce client-side JavaScript bundle
3. **Image Optimization** - Next.js Image component with automatic WebP conversion
4. **SEO Optimized** - Built-in metadata API, structured data, sitemap generation

---

## Design System

### Color Palette

```css
/* Primary - Trust & Professionalism */
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-500: #3b82f6;
--primary-600: #2563eb;
--primary-700: #1d4ed8;
--primary-900: #1e3a8a;

/* Secondary - Growth & Success */
--secondary-50: #f0fdf4;
--secondary-100: #dcfce7;
--secondary-500: #22c55e;
--secondary-600: #16a34a;
--secondary-700: #15803d;

/* Accent - Energy & Action */
--accent-500: #f59e0b;
--accent-600: #d97706;

/* Neutral - Text & Backgrounds */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-500: #6b7280;
--gray-700: #374151;
--gray-900: #111827;

/* Semantic */
--success: #22c55e;
--warning: #f59e0b;
--error: #ef4444;
```

### Typography

```css
/* Font Family */
--font-heading: 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

### Spacing Scale

```css
/* Based on 4px grid */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Component Styles

**Buttons:**
```
Primary:   Blue background, white text, rounded-lg, shadow-sm
Secondary: White background, blue border, blue text
Ghost:     Transparent, gray text, hover background
```

**Cards:**
```
Background: White
Border:     1px gray-200
Radius:     rounded-xl (12px)
Shadow:     shadow-sm, hover:shadow-md
Padding:    p-6 or p-8
```

**Badges:**
```
Success:  Green background, green text
Info:     Blue background, blue text
Warning:  Amber background, amber text
```

---

## Site Structure & Navigation

### Information Architecture

```
The Inspection Academy
│
├── Home (/)
│   └── Main landing page with all key sections
│
├── Courses (/courses)
│   ├── Overview of all courses
│   ├── Texas Professional Inspector Bundle (/courses/texas-professional-inspector)
│   └── Texas Real Estate Inspector Bundle (/courses/texas-real-estate-inspector)
│
├── How It Works (/how-it-works)
│   └── Detailed explanation of learning methodology
│
├── Pricing (/pricing)
│   ├── Course bundle pricing
│   ├── Subscription payment plans
│   └── Financing options
│
├── About (/about)
│   ├── Our story
│   ├── Teaching philosophy
│   └── Instructor credentials
│
├── Resources (/resources)
│   ├── Blog/articles
│   ├── FAQ
│   └── Free study guide (lead magnet)
│
└── Contact (/contact)
    ├── Contact form
    ├── Phone/email
    └── Schedule meeting embed
```

### Navigation Structure

**Primary Navigation (Header):**
```
[Logo]  Courses  How It Works  Pricing  About  [Schedule Call - Button]
```

**Mobile Navigation:**
```
[Logo]                                           [Hamburger Menu]
                    ↓
┌─────────────────────────────────────┐
│  Courses                         →  │
│  How It Works                       │
│  Pricing                            │
│  About                              │
│  Resources                       →  │
│  Contact                            │
│  ─────────────────────────────────  │
│  [Schedule a Call]                  │
│  Call: 281-917-7360                 │
└─────────────────────────────────────┘
```

**Footer:**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]              Quick Links    Resources    Contact        │
│                      Courses        FAQ          281-917-7360   │
│  TREC Approved       How It Works   Blog         Email Us       │
│  Provider #701080    Pricing        Free Guide   Schedule Call  │
│                      About                                      │
│─────────────────────────────────────────────────────────────────│
│  © 2026 The Inspection Academy LLC. All Rights Reserved.        │
│  Privacy Policy  |  Terms of Service                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Page-by-Page Implementation

### Homepage (/)

**Section 1: Hero**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Navigation Bar]                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     [TREC APPROVED BADGE]                                       │
│                                                                 │
│     Pass Your Texas Home Inspector                              │
│     Exam on the First Try                                       │
│                                                                 │
│     We help aspiring home inspectors pass their licensing       │
│     exams using proven Adult Learning Theory—not boring         │
│     lectures that don't stick.                                  │
│                                                                 │
│     [Start Your Training →]    [Schedule a Call]                │
│                                                                 │
│     ✓ TREC Approved  ✓ 0% Financing  ✓ Multi-language Support  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Section 2: Problem Statement**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     The Problem With Traditional Home Inspector Schools         │
│                                                                 │
│  ┌──────────────────────┐    ┌──────────────────────┐          │
│  │  TRADITIONAL SCHOOLS │    │  THE INSPECTION      │          │
│  │  ───────────────────│    │  ACADEMY             │          │
│  │  ✗ Rushed classroom  │    │  ───────────────────│          │
│  │    sessions          │    │  ✓ Self-paced       │          │
│  │  ✗ Passive video     │    │    online learning  │          │
│  │    lectures          │    │  ✓ Interactive      │          │
│  │  ✗ "Good luck" with  │    │    exercises        │          │
│  │    textbooks         │    │  ✓ Adaptive test    │          │
│  │  ✗ 58.79% avg pass   │    │    prep included    │          │
│  │    rate              │    │  ✓ Built to help    │          │
│  │                      │    │    you pass         │          │
│  └──────────────────────┘    └──────────────────────┘          │
│                                                                 │
│     58.79% — The average passing rate for Texas home            │
│     inspector schools. That means nearly half of all            │
│     students fail their first attempt.                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Section 3: How It Works**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              How TIA Gets You Licensed                          │
│                                                                 │
│     ┌─────────┐         ┌─────────┐         ┌─────────┐        │
│     │    1    │         │    2    │         │    3    │        │
│     │  [📚]   │ ──────► │  [🎯]   │ ──────► │  [🎓]   │        │
│     │         │         │         │         │         │        │
│     │ Complete│         │   Use   │         │  Pass & │        │
│     │  Your   │         │Bulletproof        │ Launch  │        │
│     │ Courses │         │Test Prep│         │  Your   │        │
│     │         │         │         │         │Business │        │
│     └─────────┘         └─────────┘         └─────────┘        │
│                                                                 │
│     Active learning      Adaptive tech      First-time pass    │
│     with built-in        targets YOUR       and start your     │
│     activities           weak areas         new career         │
│                                                                 │
│                    [See How It Works →]                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Section 4: Course Bundles**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    Choose Your Path                             │
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │  TEXAS PROFESSIONAL     │  │  TEXAS REAL ESTATE      │      │
│  │  INSPECTOR BUNDLE       │  │  INSPECTOR BUNDLE       │      │
│  │  ─────────────────────  │  │  ─────────────────────  │      │
│  │  $2,495                 │  │  $1,795                 │      │
│  │  or $104/mo for 24 mo   │  │  or $75/mo for 24 mo    │      │
│  │                         │  │                         │      │
│  │  All 6 TREC-required    │  │  4 TREC-required        │      │
│  │  courses:               │  │  courses:               │      │
│  │                         │  │                         │      │
│  │  ✓ Property & Building  │  │  ✓ Property & Building  │      │
│  │    Inspection I         │  │    Inspection I         │      │
│  │  ✓ Property & Building  │  │  ✓ Property & Building  │      │
│  │    Inspection II        │  │    Inspection II        │      │
│  │  ✓ Analysis & Reporting │  │  ✓ Business Operations  │      │
│  │  ✓ Business Operations  │  │  ✓ Texas Standards      │      │
│  │  ✓ Texas Standards      │  │                         │      │
│  │  ✓ Texas Law            │  │  [MOST POPULAR]         │      │
│  │                         │  │                         │      │
│  │  [Get Started →]        │  │  [Get Started →]        │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
│                                                                 │
│     💰 Use code tia2026 for 15% off (first 15 students)        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Section 5: Why TIA is Different**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│           Why Students Choose The Inspection Academy            │
│                                                                 │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐       │
│  │  [🎓]         │  │  [🔬]         │  │  [💡]         │       │
│  │               │  │               │  │               │       │
│  │  Educators    │  │  Science-     │  │  Real         │       │
│  │  First        │  │  Based        │  │  Inspectors   │       │
│  │               │  │               │  │               │       │
│  │  Led by a     │  │  Built on     │  │  Created by   │       │
│  │  Master's in  │  │  Adult        │  │  licensed TX  │       │
│  │  Education    │  │  Learning     │  │  professional │       │
│  │               │  │  Theory       │  │  inspectors   │       │
│  └───────────────┘  └───────────────┘  └───────────────┘       │
│                                                                 │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐       │
│  │  [🌍]         │  │  [📱]         │  │  [💳]         │       │
│  │               │  │               │  │               │       │
│  │  25+          │  │  Spectora     │  │  0% Interest  │       │
│  │  Languages    │  │  Integration  │  │  Financing    │       │
│  │               │  │               │  │               │       │
│  │  Learn in     │  │  Train with   │  │  12, 18, or   │       │
│  │  your native  │  │  industry-    │  │  24-month     │       │
│  │  language     │  │  leading      │  │  payment      │       │
│  │               │  │  software     │  │  plans        │       │
│  └───────────────┘  └───────────────┘  └───────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Section 6: Cost of Failure**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     The True Cost of Choosing the Wrong School                  │
│                                                                 │
│     Failing the exam doesn't just cost you $200.                │
│     It costs you everything.                                    │
│                                                                 │
│     ┌─────────────────────────────────────────────────┐        │
│     │  $2,000-$4,000   Inadequate training            │        │
│     │  $200-$600       Exam retakes                   │        │
│     │  $100-$300       Emergency test prep materials  │        │
│     │  $3,000-$8,000   Lost income PER MONTH          │        │
│     │  ─────────────────────────────────────────────  │        │
│     │  Priceless       Time with family               │        │
│     │                  Confidence in your abilities   │        │
│     │                  Your dream of being your own   │        │
│     │                  boss                           │        │
│     └─────────────────────────────────────────────────┘        │
│                                                                 │
│     Don't gamble on your future. Invest in training             │
│     that's designed to help you pass.                           │
│                                                                 │
│                [Start Your Training Today →]                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Section 7: Social Proof / Testimonials**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              What Our Students Say                              │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  "The adaptive test prep was a game-changer. I knew     │   │
│  │   exactly what I needed to focus on and passed on my    │   │
│  │   first try."                                           │   │
│  │                                                         │   │
│  │   — [Photo] John D., Licensed TX Inspector              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  [Testimonial Carousel with 3-5 testimonials]                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Section 8: Final CTA**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     Ready to Start Your New Career?                             │
│                                                                 │
│     Pass your exam. Get licensed. Build the life you want.      │
│                                                                 │
│     [Start Your Training →]     or     [Schedule a Free Call]   │
│                                                                 │
│     Questions? Call us: 281-917-7360                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Courses Page (/courses)

Overview page showing both course bundles with comparison table and detailed breakdowns of what's included in each.

### Course Detail Pages (/courses/[slug])

Individual pages for each bundle with:
- Full course descriptions
- Module breakdowns
- Time requirements
- What you'll learn
- Pricing and payment options
- Enrollment CTA

### How It Works Page (/how-it-works)

Detailed explanation of:
- Adult Learning Theory approach
- The 3-step process in depth
- Bulletproof Test Prep explanation
- Spectora integration
- Sample course interface screenshots

### Pricing Page (/pricing)

- Side-by-side bundle comparison
- Subscription payment calculator
- Financing options
- Money-back guarantee (if applicable)
- FAQ about payments

### About Page (/about)

- Founder story
- Teaching philosophy
- TREC credentials
- Mission statement
- Contact information

### Contact Page (/contact)

- Contact form
- Phone number
- Email
- Embedded calendar for scheduling
- Office hours
- FAQ

---

## Component Library

### Core Components

```typescript
// Layout Components
├── Header
├── Footer
├── Navigation
├── MobileMenu
├── Container
├── Section

// UI Components
├── Button (primary, secondary, ghost, outline)
├── Card
├── Badge
├── Input
├── Textarea
├── Select
├── Checkbox
├── Radio
├── Modal
├── Accordion
├── Tabs

// Feature Components
├── HeroSection
├── FeatureGrid
├── ComparisonTable
├── PricingCard
├── TestimonialCard
├── TestimonialCarousel
├── StepProcess
├── StatCard
├── CTASection
├── ContactForm
├── ScheduleEmbed

// Icons (Lucide React)
├── CheckCircle
├── XCircle
├── Phone
├── Mail
├── Calendar
├── BookOpen
├── GraduationCap
├── Target
├── Award
├── Globe
├── CreditCard
├── ChevronRight
```

### Component Examples

**Button Component:**
```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}
```

**PricingCard Component:**
```tsx
interface PricingCardProps {
  title: string;
  price: number;
  monthlyPrice?: number;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaHref: string;
}
```

**TestimonialCard Component:**
```tsx
interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  image?: string;
  rating?: number;
}
```

---

## Content Strategy

### Tone of Voice

- **Professional** but approachable
- **Confident** but not arrogant
- **Educational** but not condescending
- **Empathetic** to student struggles
- **Action-oriented** with clear next steps

### Key Messages

1. **Primary:** Pass your exam on the first try
2. **Secondary:** We're educators who know how to teach
3. **Tertiary:** Flexible payment options available
4. **Supporting:** Multi-language, Spectora integration, TREC approved

### Content Guidelines

**DO:**
- Use bullet points and short paragraphs
- Lead with benefits, follow with features
- Include specific numbers and stats
- Use active voice
- Keep CTAs clear and singular per section

**DON'T:**
- Write walls of text
- Repeat the same CTA multiple times
- Use jargon without explanation
- Make unsubstantiated claims
- Overwhelm with information

### SEO Keywords

**Primary:**
- Texas home inspector training
- Home inspector licensing Texas
- TREC approved home inspector courses
- Texas home inspector exam prep

**Secondary:**
- How to become a home inspector in Texas
- Home inspector school Texas
- NHIE exam prep
- Texas professional inspector license

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
- [x] Create planning document
- [x] Initialize Next.js 14 project
- [x] Configure Tailwind CSS
- [x] Set up shadcn/ui
- [x] Create design tokens
- [x] Build basic layout components (Header, Footer)

### Phase 2: Homepage (Week 2)
- [x] Hero section
- [x] Problem/Solution section
- [x] How It Works section
- [x] Course bundles section
- [x] Why TIA section
- [x] Cost of failure section
- [x] Testimonials section
- [x] Final CTA section

### Phase 3: Interior Pages (Week 3)
- [x] Courses overview page
- [x] Course detail pages
- [x] How It Works page
- [x] Pricing page
- [x] About page
- [x] Contact page
- [x] FAQ page

### Phase 4: Polish & Launch (Week 4)
- [ ] Responsive testing
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Analytics setup
- [ ] Form integrations
- [ ] Final QA
- [ ] Deployment

---

## File Structure

```
the-inspection-academy/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── trec-badge.png
│   │   ├── hero-bg.jpg
│   │   ├── testimonials/
│   │   └── icons/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # Homepage
│   │   ├── globals.css
│   │   ├── courses/
│   │   │   ├── page.tsx                # Courses overview
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Course detail
│   │   ├── how-it-works/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── resources/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/                         # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── navigation.tsx
│   │   │   ├── mobile-menu.tsx
│   │   │   ├── container.tsx
│   │   │   └── section.tsx
│   │   │
│   │   └── sections/
│   │       ├── hero.tsx
│   │       ├── problem-solution.tsx
│   │       ├── how-it-works.tsx
│   │       ├── course-bundles.tsx
│   │       ├── features.tsx
│   │       ├── cost-of-failure.tsx
│   │       ├── testimonials.tsx
│   │       ├── cta.tsx
│   │       └── contact-form.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts                    # Utility functions
│   │   └── constants.ts                # Site constants
│   │
│   ├── data/
│   │   ├── courses.ts                  # Course data
│   │   ├── testimonials.ts             # Testimonial data
│   │   └── features.ts                 # Feature data
│   │
│   └── types/
│       └── index.ts                    # TypeScript types
│
├── .env.local                          # Environment variables
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Data Structures

### Course Data

```typescript
// src/data/courses.ts

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  price: number;
  monthlyPrice: number;
  months: number;
  popular?: boolean;
  courses: string[];
  features: string[];
}

export const courses: Course[] = [
  {
    id: 'texas-professional',
    slug: 'texas-professional-inspector',
    title: 'Texas Professional Inspector Bundle',
    shortTitle: 'Professional Inspector',
    description: 'Complete training for the Texas Professional Inspector license',
    price: 2495,
    monthlyPrice: 104,
    months: 24,
    popular: false,
    courses: [
      'Property & Building Inspection I',
      'Property & Building Inspection II',
      'Analysis of Findings & Reporting',
      'Business Operations & Professional Responsibilities',
      'Texas Standards of Practice',
      'Texas Law',
    ],
    features: [
      'All 6 TREC-required courses',
      'Bulletproof Test Prep included',
      'Spectora software training',
      '25+ language options',
      'Unlimited practice exams',
      '12-month course access',
    ],
  },
  {
    id: 'texas-real-estate',
    slug: 'texas-real-estate-inspector',
    title: 'Texas Real Estate Inspector Bundle',
    shortTitle: 'Real Estate Inspector',
    description: 'Training for the Texas Real Estate Inspector license',
    price: 1795,
    monthlyPrice: 75,
    months: 24,
    popular: true,
    courses: [
      'Property & Building Inspection I',
      'Property & Building Inspection II',
      'Business Operations & Professional Responsibilities',
      'Texas Standards of Practice',
    ],
    features: [
      'All 4 TREC-required courses',
      'Bulletproof Test Prep included',
      'Spectora software training',
      '25+ language options',
      'Unlimited practice exams',
      '12-month course access',
    ],
  },
];
```

### Testimonial Data

```typescript
// src/data/testimonials.ts

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  image?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'The adaptive test prep was a game-changer...',
    author: 'John D.',
    title: 'Licensed TX Inspector',
    rating: 5,
  },
  // ... more testimonials
];
```

### Site Constants

```typescript
// src/lib/constants.ts

export const SITE_CONFIG = {
  name: 'The Inspection Academy',
  tagline: 'Pass Your Home Inspector Exam on the First Try',
  phone: '281-917-7360',
  email: 'mwarner@theinspectionacademy.com',
  trecNumber: '701080',

  links: {
    courseCatalog: 'https://theinspectionacademy.talentlms.com/plus/external-catalog',
    scheduleCall: 'https://calendar.app.google/H7MFRvzTW8JGNZXB8',
    scholarship: 'https://promo.theinspectionacademy.com',
  },

  promo: {
    code: 'tia2026',
    discount: '15%',
    limit: 15,
    description: 'First 15 students in 2026',
  },

  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },
};
```

---

## Deployment Checklist

### Pre-Launch

- [ ] All pages responsive (mobile, tablet, desktop)
- [ ] Forms working and sending to correct destination
- [ ] All links working (internal and external)
- [ ] Images optimized and loading correctly
- [ ] Meta tags and OG images set for all pages
- [ ] Favicon and app icons configured
- [ ] 404 page created
- [ ] Analytics configured
- [ ] Performance score > 90 on Lighthouse
- [ ] Accessibility audit passed

### Launch

- [ ] DNS configured for domain
- [ ] SSL certificate active
- [ ] Redirects from old URLs configured (if needed)
- [ ] Search console submitted
- [ ] Sitemap generated and submitted

### Post-Launch

- [ ] Monitor analytics for issues
- [ ] Check form submissions working
- [ ] Test on real devices
- [ ] Gather initial feedback
- [ ] Fix any reported issues

---

## Notes & Decisions

### Kept As-Is

- **Coupon codes:** Keeping existing codes (tia2025, tia2026) as requested
- **External LMS:** Continuing to use TalentLMS for course delivery
- **Google Calendar:** Keeping for scheduling (could upgrade to Cal.com later)

### Open Questions

1. Do you have high-resolution logo files?
2. Do you have professional photos for testimonials?
3. Are there specific testimonials/reviews to include?
4. Do you want a blog section for SEO content?
5. Integration preferences for contact form (email, CRM)?

---

*Document created: January 4, 2026*
*Last updated: January 4, 2026*
