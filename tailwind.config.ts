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
          blue: "#2964B3",        // Primary Blue
          navy: "#273146",        // Deep Navy
          green: "#98BB66",       // Fresh Green
          gray: "#C7CECE",        // Cool Gray
          aqua: "#69A0AC",        // Aqua Blue
          teal: "#6AB2A9",        // Soft Teal
          terracotta: "#A95C3C",  // Terracotta
          light: "#F8FAFC",       // Clean light neutral background
          surface: "#FFFFFF",
          muted: "#64748B",
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
