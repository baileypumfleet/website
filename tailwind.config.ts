import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
