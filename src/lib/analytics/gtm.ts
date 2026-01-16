export function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

export function getGTMId(): string | undefined {
  return process.env.NEXT_PUBLIC_GTM_ID;
}
