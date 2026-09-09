import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dentology: {
          blue: "#0E3B27",        // Primary Emerald Green (Updated from Logo)
          emerald: "#0B462D",     // Deep Emerald Green (Logo Background)
          "emerald-dark": "#072B1C",// Darkest Emerald Surface
          gold: "#D4AF37",        // Champagne Gold (Logo Emblem)
          "gold-light": "#E5C278",// Bright Warm Gold
          navy: "#1A252C",        // Deep Navy Slate
          green: "#155D3D",       // Fresh Forest Green
          gray: "#C7CECE",        // Cool Gray
          aqua: "#4A8F79",        // Soft Emerald Aqua
          teal: "#3F8A7C",        // Deep Teal
          terracotta: "#A95C3C",  // Warm Terracotta Accent
          light: "#F0F7F3",       // Clean light neutral emerald canvas
          surface: "#FFFFFF",
          muted: "#5B7065",
        },
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "DM Serif Display", "serif"],
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(39, 49, 70, 0.08)",
        "glass-hover": "0 14px 44px 0 rgba(41, 100, 179, 0.16)",
        card: "0 4px 20px -2px rgba(39, 49, 70, 0.06)",
        glow: "0 0 24px -4px rgba(41, 100, 179, 0.4)",
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "marquee": "marquee 32s linear infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
