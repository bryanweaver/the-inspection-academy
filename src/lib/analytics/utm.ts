import type { StoredAttribution } from './types';

const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
const STORAGE_KEY = 'tia_attribution';
const COOKIE_DAYS = 30;

export function parseUTMsFromURL(): Partial<StoredAttribution> {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utms: Partial<StoredAttribution> = {};

  UTM_PARAMS.forEach((param) => {
    const value = params.get(param);
    if (value) {
      utms[param] = value;
    }
  });

  return utms;
}

export function storeAttribution(attribution: StoredAttribution) {
  if (typeof window === 'undefined') return;

  // Session storage for current session
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));

  // Cookie for cross-session (30 days)
  const expires = new Date();
  expires.setDate(expires.getDate() + COOKIE_DAYS);
  document.cookie = `${STORAGE_KEY}=${encodeURIComponent(JSON.stringify(attribution))};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

export function getStoredAttribution(): StoredAttribution | null {
  if (typeof window === 'undefined') return null;

  // Try session storage first
  const sessionData = sessionStorage.getItem(STORAGE_KEY);
  if (sessionData) {
    try {
      return JSON.parse(sessionData);
    } catch {
      // Invalid JSON, continue to cookie
    }
  }

  // Fall back to cookie
  const cookies = document.cookie.split(';');
  const attrCookie = cookies.find((c) => c.trim().startsWith(`${STORAGE_KEY}=`));
  if (attrCookie) {
    const value = attrCookie.split('=')[1];
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch {
      return null;
    }
  }

  return null;
}

export function captureAttributionOnLoad() {
  if (typeof window === 'undefined') return;

  // Only capture if we don't already have attribution (first-touch)
  if (getStoredAttribution()) return;

  const utms = parseUTMsFromURL();

  // Only store if we have UTMs or a referrer
  if (Object.keys(utms).length === 0 && !document.referrer) return;

  const attribution: StoredAttribution = {
    utm_source: utms.utm_source || null,
    utm_medium: utms.utm_medium || null,
    utm_campaign: utms.utm_campaign || null,
    utm_content: utms.utm_content || null,
    utm_term: utms.utm_term || null,
    landing_page: window.location.pathname,
    first_touch: new Date().toISOString(),
    referrer: document.referrer || null,
  };

  storeAttribution(attribution);
}
