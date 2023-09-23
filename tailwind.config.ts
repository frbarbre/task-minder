import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "grad-green": "#76FCAA",
        "grad-light-blue": "#7FD7FF",
        "grad-dark-blue": "#6E8EFF",
        "grad-yellow": "#FFFF7B",
        primary: "#5F33E1",
        "primary-light": "#B6A1FF",
        "pale-red": "#FFA5A5",
        "pale-green": "#94FFB8",
      },
      boxShadow: {
        dark: "0px 4px 32px rgba(0, 0, 0, 0.04)",
        action: "0px 4px 4px 0px rgba(0, 0, 0, 0.04)",
      },
      gridTemplateColumns: {
        center: "34px 1fr 34px",
      },
    },
  },
  plugins: [],
};
export default config;
