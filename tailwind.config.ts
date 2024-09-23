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
        background: "var(--background)",
        foreground: "var(--foreground)",
        paragraphColor: "#D4D8DD",
      },
      keyframes: {
        wiggle: {
          "0%": {
            "-webkit-transform": "scale3d(1, 1, 1)",
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            "-webkit-transform": "scale3d(1.25, 0.75, 1)",
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            "-webkit-transform": "scale3d(0.75, 1.25, 1)",
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            "-webkit-transform": "scale3d(1.15, 0.85, 1)",
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            "-webkit-transform": "scale3d(0.95, 1.05, 1)",
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "75%": {
            "-webkit-transform": "scale3d(1.05, 0.95, 1)",
            transform: "scale3d(1.05, 0.95, 1)",
          },
          "100%": {
            "-webkit-transform": "scale3d(1, 1, 1)",
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s linear",
      },
    },
  },
  plugins: [],
};
export default config;
