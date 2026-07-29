import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          blue: "#4a90e2",
          violet: "#667eea",
          purple: "#764ba2",
        },
        ink: "#1a1a2e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
