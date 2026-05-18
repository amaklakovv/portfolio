export function isAnalyticsReady() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

export function trackEvent(action, label, category = 'engagement', value = 1, params = {}) {
  if (!isAnalyticsReady()) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    ...params,
  });
}

export function trackLinkClick(label) {
  trackEvent('click', label, 'link', 1, { link_label: label });
}

export function trackButtonClick(label) {
  trackEvent('button_click', label, 'button', 1, { button_label: label });
}

export function trackSectionView(sectionName) {
  trackEvent('section_view', sectionName, 'section', 1, { section_name: sectionName });
}

export function trackScrollDepth(depthPercent) {
  trackEvent('scroll_depth', `${depthPercent}%`, 'scroll', depthPercent, { scroll_percent: depthPercent });
}
