import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./core/**/*.{js,ts,jsx,tsx,mdx}",

    // #nextui
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
        mono: ["var(--font-noto-sans-mono)"]
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()]
} satisfies Config;
