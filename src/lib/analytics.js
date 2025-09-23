// lib/analytics.js
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'YOUR_PIXEL_ID';

// Google Analytics functions
export const gtag = {
  pageview: (url) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  },
  event: ({ action, category, label, value }) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }
};

// Facebook Pixel functions
export const fbPixel = {
  pageview: () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  },
  event: (name, options = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', name, options);
    }
  },
  // Marketing site specific events for Lasting Sales
  trackLead: (leadData) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Lasting Sales Info Site Lead',
        source: 'marketing_site',
        ...leadData
      });
    }
  },
  trackContact: (contactData) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'Lasting Sales Contact Form',
        source: 'info_site',
        ...contactData
      });
    }
  },
  trackDemo: () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Schedule', {
        content_name: 'Lasting Sales Demo Request'
      });
    }
  },
  trackPricing: () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Pricing Page',
        content_type: 'pricing'
      });
    }
  },
  trackFeatures: () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Features Page',
        content_type: 'features'
      });
    }
  }
};