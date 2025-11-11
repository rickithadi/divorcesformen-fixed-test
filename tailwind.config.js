/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
  "primary": "#3b82f6",
  "secondary": "#64748b",
  "accent": "#f59e0b",
  "brand-1": "#1e40af", // Deep blue for main branding
  "brand-2": "#2563eb", // Primary blue for text/links
  "brand-3": "#ffffff", // White for backgrounds
  "brand-4": "#f1f5f9", // Light blue-gray for subtle backgrounds
  "brand-5": "#e2e8f0", // Border gray
  "brand-6": "#0f172a", // Dark slate for text
  "law-blue": "#1e40af",
  "law-navy": "#1e3a8a",
  "law-gray": "#64748b",
  "law-light": "#f8fafc"
},
      spacing: {
  "spacing-1": "4px",
  "spacing-2": "8px",
  "spacing-3": "12px",
  "spacing-4": "16px",
  "spacing-5": "20px",
  "spacing-6": "24px",
  "spacing-7": "32px",
  "spacing-8": "40px",
  "spacing-9": "48px",
  "spacing-10": "64px"
},
      fontFamily: {
        body: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      [
  "light",
  "dark",
  "corporate",
  "business",
  "luxury"
],
      {
        "custom": {
  "primary": "#2563eb",
  "secondary": "#64748b", 
  "accent": "#dc2626",
  "neutral": "#334155",
  "base-100": "#ffffff",
  "base-200": "#f8fafc",
  "base-300": "#e2e8f0",
  "info": "#0ea5e9",
  "success": "#059669",
  "warning": "#d97706", 
  "error": "#dc2626"
}
      }
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root",
  },
}
