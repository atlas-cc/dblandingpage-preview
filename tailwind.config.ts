import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070806",
        coal: "#10120e",
        ash: "#8d9287",
        chalk: "#f2f5ea",
        line: "rgba(242, 245, 234, 0.13)",
        acid: "#d8ff57",
        mint: "#b7f3c7",
        rust: "#d77b55"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Consolas", "monospace"]
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(216, 255, 87, 0.22)"
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: [typography]
};

export default config;
