export interface StoredAttribution {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  landing_page: string;
  first_touch: string;
  referrer: string | null;
}

export type LandingPageEventName =
  | 'page_view'
  | 'cta_click'
  | 'enroll_click'
  | 'schedule_call'
  | 'compare_click'
  | 'scroll_depth'
  | 'faq_expand'
  | 'outbound_click'
  | 'phone_call';

export interface EventParams {
  [key: string]: string | number | boolean | undefined | null;
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
