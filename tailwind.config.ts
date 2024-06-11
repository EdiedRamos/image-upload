import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cc-royal-blue": "#3662E3",
        "cc-very-light-azure": "#C2DAF9",
        "cc-eerie-black": "#121826",
        "cc-platinum": "#E5E7EB",
        "cc-white": "#FFFFFF",
        "cc-ghost-white": "#F9FAFB",
        "cc-midnight-blue": "#212936",
        "cc-outer-space": "#4D5562",
        "cc-outer-space-light": "#454d5c",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "loading-bar": {
          "0%": { transform: "translate(-100%)" },
          "100%": { transform: "translate(300%)" },
        },
      },
      animation: {
        "loading-bar": "loading-bar 2s linear infinite",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
