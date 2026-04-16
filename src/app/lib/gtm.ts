export function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  const w = window as Window & {
    dataLayer?: Record<string, unknown>[];
  };

  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(data);
}

export function trackEvent(
  event: string,
  params: Record<string, unknown> = {},
) {
  pushToDataLayer({
    event,
    ...params,
  });
}
