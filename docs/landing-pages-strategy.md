# Landing Pages & Ad Tracking Strategy

This document outlines the strategy for creating alternative landing pages and tracking their performance for The Inspection Academy.

---

## Table of Contents

- [URL Structure](#url-structure)
- [File Organization](#file-organization)
- [UTM Parameter Strategy](#utm-parameter-strategy)
- [Tracking Stack](#tracking-stack)
- [Events to Track](#events-to-track)
- [Implementation Architecture](#implementation-architecture)
- [UTM Persistence](#utm-persistence)
- [Performance Metrics](#performance-metrics)
- [Privacy & Consent](#privacy--consent)

---

## URL Structure

We use Next.js App Router **route groups** to organize landing pages with clean, semantic URLs.

### Directory Structure

```
/src/app/
├── (main)/
│   └── page.tsx                    → / (current homepage)
├── (landing-pages)/
│   ├── layout.tsx                  → Optional shared LP layout
│   ├── career-change/page.tsx      → /career-change
│   ├── veterans/page.tsx           → /veterans
│   └── texas-inspectors/page.tsx   → /texas-inspectors
```

### Benefits

- **Clean, semantic URLs** - Easy to remember, good for ads
- **Grouped organization** - Landing pages separated in codebase
- **Flexible layouts** - Can use different header/footer for LPs
- **Easy analytics filtering** - Filter by path pattern in reports

---

## File Organization

### Component Structure

```
/src/components/
├── sections/              → Existing shared sections
└── landing-pages/
    ├── heroes/
    │   ├── career-change-hero.tsx
    │   ├── veterans-hero.tsx
    │   └── texas-inspectors-hero.tsx
    └── shared/
        └── lp-cta.tsx     → LP-specific CTA components
```

### Data Files

```
/src/data/
└── landing-pages/
    ├── career-change.ts   → Copy, testimonials, features for this audience
    ├── veterans.ts
    └── texas-inspectors.ts
```

---

## UTM Parameter Strategy

### Standard UTM Structure

All ad campaigns must use this standardized UTM format:

| Parameter | Purpose | Example Values |
|-----------|---------|----------------|
| `utm_source` | Traffic source | `google`, `facebook`, `linkedin`, `instagram` |
| `utm_medium` | Marketing medium | `cpc`, `social`, `email`, `display` |
| `utm_campaign` | Campaign identifier | `career-change-q1-2026`, `veterans-spring` |
| `utm_content` | Ad/creative variant | `video-ad-1`, `carousel-testimonial`, `static-image-a` |
| `utm_term` | Search keywords (search ads only) | `home-inspector-training`, `trec-certification` |

### Example URLs

**Facebook Ad - Career Changers:**
```
https://theinspectionacademy.com/career-change?utm_source=facebook&utm_medium=cpc&utm_campaign=career-changers-jan2026&utm_content=video-ad-1
```

**Google Search Ad - Veterans:**
```
https://theinspectionacademy.com/veterans?utm_source=google&utm_medium=cpc&utm_campaign=veterans-q1-2026&utm_term=gi-bill-home-inspector-training
```

**LinkedIn Ad - Realtors:**
```
https://theinspectionacademy.com/realtors?utm_source=linkedin&utm_medium=cpc&utm_campaign=realtors-career-pivot&utm_content=income-comparison-ad
```

### Campaign Naming Convention

Use this format: `{audience}-{descriptor}-{timeframe}`

Examples:
- `career-changers-testimonial-jan2026`
- `veterans-gi-bill-q1-2026`
- `realtors-income-spring2026`

---

## Tracking Stack

### Recommended Tools

| Tool | Purpose | Priority |
|------|---------|----------|
| **Google Tag Manager** | Centralized tag management | Required |
| **Google Analytics 4** | Core analytics, audience insights | Required |
| **Google Ads Conversion Tag** | Google Ads optimization | Required (if using Google Ads) |
| **Facebook/Meta Pixel** | FB/IG ad optimization | Required (if using Meta Ads) |
| **Microsoft Clarity** | Heatmaps, session recordings | Recommended (free) |
| **Hotjar** | Heatmaps, surveys, recordings | Alternative to Clarity |
| **PostHog** | Privacy-friendly, self-hosted analytics | Optional |

### Tag Manager Container Structure

```
GTM Container
├── Tags
│   ├── GA4 Configuration
│   ├── GA4 Event Tags (per event type)
│   ├── Google Ads Conversion
│   ├── Meta Pixel Base Code
│   └── Meta Pixel Events
├── Triggers
│   ├── Page View
│   ├── Form Submission
│   ├── CTA Clicks
│   ├── Scroll Depth
│   └── Custom Events
└── Variables
    ├── UTM Parameters
    ├── Page Path
    ├── Click Classes/IDs
    └── Data Layer Variables
```

---

## Events to Track

### Conversion Events (High Priority)

These events directly measure business outcomes:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `generate_lead` | Form submission | `form_name`, `landing_page`, `utm_*` |
| `schedule_call` | Calendly/booking CTA click | `landing_page`, `button_location` |
| `phone_call_click` | Phone number click | `landing_page` |
| `begin_checkout` | Start purchase flow | `course_name`, `value` |
| `purchase` | Completed purchase | `transaction_id`, `value`, `course_name` |

### Engagement Events (Medium Priority)

These events measure content engagement:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `scroll_depth` | 25%, 50%, 75%, 100% scroll | `percent_scrolled`, `landing_page` |
| `video_start` | Video play begins | `video_title`, `landing_page` |
| `video_complete` | Video watched to end | `video_title`, `watch_time` |
| `cta_click` | Any CTA button click | `button_text`, `button_location`, `landing_page` |
| `time_on_page` | 30s, 60s, 120s thresholds | `time_threshold`, `landing_page` |
| `faq_expand` | FAQ accordion opened | `question_text` |

### Navigation Events (Lower Priority)

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `course_view` | Course detail page view | `course_name`, `course_price` |
| `outbound_click` | External link click | `destination_url` |

---

## Implementation Architecture

### File Structure

```
/src/lib/
├── analytics/
│   ├── index.ts           → Main analytics API exports
│   ├── gtm.ts             → Google Tag Manager utilities
│   ├── events.ts          → Event type definitions & tracking functions
│   └── utm.ts             → UTM parsing, storage, and retrieval

/src/components/
├── providers/
│   └── analytics-provider.tsx  → Analytics context + GTM initialization
├── tracking/
│   ├── track-click.tsx         → HOC/wrapper for click tracking
│   └── track-scroll.tsx        → Scroll depth tracking component
```

### Analytics API Usage

```typescript
// Example usage in components
import { trackEvent } from '@/lib/analytics';

// Track a CTA click
trackEvent('cta_click', {
  button_text: 'Schedule a Call',
  button_location: 'hero',
  landing_page: '/career-change'
});

// Track form submission
trackEvent('generate_lead', {
  form_name: 'contact_form',
  landing_page: '/career-change'
});
```

---

## UTM Persistence

### Why Persist UTMs?

Users may navigate away from the landing page before converting. Storing UTM data ensures conversions are attributed to the correct campaign.

### Storage Strategy

Store UTM data in both `sessionStorage` (current session) and a cookie (cross-session attribution):

```typescript
interface StoredAttribution {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  landing_page: string;
  first_touch: string;  // ISO timestamp
  referrer: string | null;
}
```

### Attribution Window

- **Session storage**: Current browsing session
- **Cookie**: 30-day attribution window (configurable)
- **First-touch attribution**: Store the first UTM values, don't overwrite

### Implementation

```typescript
// On landing page load
const attribution = {
  ...parseUTMsFromURL(),
  landing_page: window.location.pathname,
  first_touch: new Date().toISOString(),
  referrer: document.referrer
};

// Store if not already present (first-touch)
if (!getStoredAttribution()) {
  storeAttribution(attribution);
}
```

---

## Performance Metrics

### Primary KPIs (Per Landing Page)

| Metric | Description | Target |
|--------|-------------|--------|
| **Conversion Rate** | Leads / Sessions | 3-5% |
| **Cost per Lead** | Ad Spend / Leads | Varies by channel |
| **Bounce Rate** | Single-page sessions | < 50% |
| **Avg. Session Duration** | Time engaged | > 2 minutes |

### Secondary Metrics

| Metric | Description | Why It Matters |
|--------|-------------|----------------|
| **Scroll Depth** | % of page viewed | Content engagement |
| **CTA Click Rate** | CTA clicks / Sessions | Offer appeal |
| **Video Completion Rate** | Completions / Starts | Content quality |
| **Pages per Session** | Avg pages viewed | Site exploration |

### Reporting Dashboard

Create a custom GA4 report or Looker Studio dashboard with:

1. **Overview**: Total sessions, leads, conversion rate by landing page
2. **Channel Performance**: Metrics broken down by utm_source
3. **Campaign Performance**: Metrics broken down by utm_campaign
4. **Creative Performance**: Metrics broken down by utm_content
5. **Funnel Visualization**: Landing page → CTA click → Form submission → Purchase

---

## Privacy & Consent

### Requirements

- **GDPR** (EU users): Explicit consent before tracking
- **CCPA** (California users): Opt-out option required
- **General**: Clear privacy policy explaining data collection

### Implementation

1. **Cookie Consent Banner**: Show on first visit
2. **Consent Mode**: Use GA4's consent mode for privacy-safe measurement
3. **Conditional Loading**: Only load tracking pixels after consent

### Consent States

| State | Behavior |
|-------|----------|
| **No interaction** | Only essential cookies, no analytics |
| **Accepted** | Full tracking enabled |
| **Declined** | No tracking, consent mode modeling only |

### GA4 Consent Mode

Even when users decline cookies, GA4 consent mode can:
- Model conversions based on consented users
- Provide directional data without personal tracking
- Maintain campaign optimization capabilities

---

## Checklist: Launching a New Landing Page

- [ ] Create page in `/src/app/(landing-pages)/{slug}/page.tsx`
- [ ] Add page metadata (title, description) for SEO
- [ ] Create audience-specific hero and sections
- [ ] Add data file in `/src/data/landing-pages/{slug}.ts`
- [ ] Implement CTA tracking on all buttons
- [ ] Test UTM parameter capture
- [ ] Set up campaign in ad platform with proper UTMs
- [ ] Create GA4 custom report for the page
- [ ] Test conversion tracking end-to-end
- [ ] Document target audience and campaign goals

---

## Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google Tag Manager Documentation](https://developers.google.com/tag-platform/tag-manager)
- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [GA4 Consent Mode](https://support.google.com/analytics/answer/9976101)
