import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B5CF6",
        "primary-dark": "#4445D8",
        "soft-purple": "#EEF0FF",
        ink: "#111827",
        muted: "#6B7280",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        border: "#E5E7EB",
        page: "#F6F7FB",
      },
      boxShadow: {
        soft: "0 16px 45px rgba(17, 24, 39, 0.08)",
        glow: "0 20px 60px rgba(91, 92, 246, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
