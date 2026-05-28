import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#f9f9f9",
          100: "#f0f0f0",
          200: "#e0e0e0",
          800: "#1a1a1a",
          900: "#0f0f0f",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
