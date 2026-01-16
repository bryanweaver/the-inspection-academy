import { pushToDataLayer } from './gtm';
import { getStoredAttribution } from './utm';
import type { LandingPageEventName, EventParams } from './types';

export function trackEvent(eventName: LandingPageEventName, params: EventParams = {}) {
  const attribution = getStoredAttribution();

  pushToDataLayer({
    event: eventName,
    ...params,
    ...(attribution || {}),
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    timestamp: new Date().toISOString(),
  });
}

export function trackCTAClick(
  buttonText: string,
  buttonLocation: string,
  variant: 'primary' | 'secondary' | 'tertiary'
) {
  trackEvent('cta_click', {
    button_text: buttonText,
    button_location: buttonLocation,
    button_variant: variant,
  });
}

export function trackEnrollClick(buttonLocation: string) {
  trackEvent('enroll_click', {
    button_location: buttonLocation,
  });
}

export function trackScheduleCall(buttonLocation: string) {
  trackEvent('schedule_call', {
    button_location: buttonLocation,
  });
}

export function trackCompareClick(buttonLocation: string) {
  trackEvent('compare_click', {
    button_location: buttonLocation,
  });
}

export function trackFAQExpand(questionText: string, questionIndex: number) {
  trackEvent('faq_expand', {
    question_text: questionText,
    question_index: questionIndex,
  });
}

export function trackScrollDepth(percent: number) {
  trackEvent('scroll_depth', {
    percent_scrolled: percent,
  });
}

export function trackOutboundClick(destinationUrl: string, linkText: string) {
  trackEvent('outbound_click', {
    destination_url: destinationUrl,
    link_text: linkText,
  });
}
