function sendToDatalayer(event: string, action: string, category: string, label: string) {
  if(typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    action,
    category,
    label,
  });
}

export { sendToDatalayer };