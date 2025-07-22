type GtagFunction = (action: string, params: Record<string, unknown>) => void;

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: GtagFunction;
  }
}

export function initializeGtag(): void {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  window.gtag = function gtag(action: string, params: Record<string, unknown>) {
    window.dataLayer.push({ action, ...params });
  };

  const trackingId = import.meta.env.VITE_GOOGLE_TAG_ID;
  if (!trackingId) {
    console.error(
      "O ID de rastreamento do Google Tag Manager não está definido."
    );
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  window.gtag("js", { timestamp: new Date().toISOString() });
  window.gtag("config", { trackingId });
}

initializeGtag();
