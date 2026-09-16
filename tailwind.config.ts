import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#050811", // Deep Obsidian Black
          surface: "#0B132B", // Midnight Navy Surface
          card: "#0D1836",    // Navy Blue Card Background
          raised: "#132247",  // Elevated Navy Accent
          border: "rgba(56, 189, 248, 0.12)",
          "border-hover": "rgba(0, 245, 155, 0.35)",
        },
        ink: {
          DEFAULT: "#F8FAFC", // Crisp Bright Slate White
          muted: "#94A3B8",   // Clean Slate Silver
          faint: "#64748B",   // Subtle Slate
        },
        signal: {
          amber: "#FF6B00",   // Vibrant Electric Orange (Primary Action)
          ember: "#00F59B",   // Cyber Neon / Emerald Green (Accent / Status)
          gold: "#38BDF8",    // Radiant Sky/Cyan Blue
          orange: "#FF6B00",
          green: "#00F59B",
          navy: "#1E3A8A",
        },
        neon: {
          green: "#00F59B",
          emerald: "#10B981",
          orange: "#FF6B00",
          amber: "#FF8A3D",
          blue: "#3B82F6",
          navy: "#1E3A8A",
          cyan: "#06B6D4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,8,17,0) 0%, #050811 90%)",
        aurora:
          "radial-gradient(ellipse 65% 55% at 15% 15%, rgba(0, 245, 155, 0.14) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 20%, rgba(255, 107, 0, 0.14) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 50% 65%, rgba(30, 58, 138, 0.28) 0%, transparent 70%)",
        "mesh-glow":
          "radial-gradient(at 0% 0%, rgba(11, 19, 43, 0.8) 0, transparent 50%), radial-gradient(at 50% 0%, rgba(0, 245, 155, 0.1) 0, transparent 50%), radial-gradient(at 100% 0%, rgba(255, 107, 0, 0.1) 0, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(255, 107, 0, 0.4)",
        "glow-ember": "0 0 35px -5px rgba(0, 245, 155, 0.35)",
        "glow-green": "0 0 35px -5px rgba(0, 245, 155, 0.35)",
        "glow-orange": "0 0 35px -5px rgba(255, 107, 0, 0.4)",
        "glow-navy": "0 0 45px -5px rgba(30, 58, 138, 0.5)",
        "card-hover": "0 14px 40px -10px rgba(0, 245, 155, 0.2), 0 0 25px -4px rgba(255, 107, 0, 0.15)",
      },
      animation: {
        "spin-slow": "spin 16s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        radar: "radar 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.05)" },
        },
        radar: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
