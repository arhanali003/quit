import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // All driven by CSS variables set from the DB-backed Theme engine.
        primary: "rgb(var(--qk-primary) / <alpha-value>)",
        secondary: "rgb(var(--qk-secondary) / <alpha-value>)",
        accent: "rgb(var(--qk-accent) / <alpha-value>)",
        surface: "rgb(var(--qk-card) / <alpha-value>)",
        pagebg: "rgb(var(--qk-page-bg) / <alpha-value>)",
        ink: "rgb(var(--qk-text) / <alpha-value>)",
        muted: "rgb(var(--qk-text-muted) / <alpha-value>)",
        btn: "rgb(var(--qk-btn) / <alpha-value>)",
        btnhover: "rgb(var(--qk-btn-hover) / <alpha-value>)",
        edge: "rgb(var(--qk-border) / <alpha-value>)",
      },
      borderRadius: {
        qk: "var(--qk-radius)",
      },
      fontFamily: {
        sans: ["var(--qk-font)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        qk: "var(--qk-shadow)",
        glow: "0 0 24px rgb(var(--qk-accent) / 0.35)",
      },
      keyframes: {
        twinkle: {
          "0%,100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgb(var(--qk-accent) / 0.4)" },
          "50%": { boxShadow: "0 0 22px 4px rgb(var(--qk-accent) / 0.25)" },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        slideUp: "slideUp .45s ease both",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
