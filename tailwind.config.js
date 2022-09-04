/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#6640FF",
          200: "#5730F6",
        },
        highlight: "#FFF0D9",
      },
      fontFamily: {
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
        heading: ["Clash Display", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        default: "0 2px 15px rgba(0,0,0,0.16)",
        darker: "0 2px 15px rgba(0,0,0,0.32)",
        primary: "0 55px 64px rgba(102,64,255,0.16)",
      },
    },
  },
  plugins: [],
};
