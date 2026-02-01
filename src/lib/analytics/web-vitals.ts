import type { Metric } from 'web-vitals';
import { pushToDataLayer } from './gtm';

/**
 * Reports Core Web Vitals metrics to GTM dataLayer
 * Metrics tracked: CLS, LCP, FID, INP, TTFB, FCP
 */
function reportWebVital(metric: Metric) {
  pushToDataLayer({
    event: 'web_vitals',
    web_vital_name: metric.name,
    web_vital_id: metric.id,
    web_vital_value: metric.value,
    web_vital_delta: metric.delta,
    web_vital_rating: metric.rating,
  });
}

/**
 * Initializes Core Web Vitals tracking
 * Should be called once on app mount
 */
export async function reportWebVitals() {
  if (typeof window === 'undefined') return;

  try {
    const { onCLS, onLCP, onFID, onINP, onTTFB, onFCP } = await import('web-vitals');

    onCLS(reportWebVital);
    onLCP(reportWebVital);
    onFID(reportWebVital);
    onINP(reportWebVital);
    onTTFB(reportWebVital);
    onFCP(reportWebVital);
  } catch (error) {
    // web-vitals library not available, silently fail
    console.warn('Web Vitals tracking not available:', error);
  }
}
