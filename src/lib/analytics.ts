export type AnalyticsEvent =
  | "inquiry_form_view" | "inquiry_form_submit" | "inquiry_form_success" | "inquiry_form_error"
  | "partner_cta_click" | "brand_outbound_click" | "brand_view";

type Params = Record<string, string | number | boolean>;
declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } }

export function track(event: AnalyticsEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  if (typeof window.gtag === "function") window.gtag("event", event, params);
}
