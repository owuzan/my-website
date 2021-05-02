const theme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...theme,
    colors,
    fontFamily: {
      sans: ["Inter", "system-ui"],
      serif: ["Inter", "Georgia"],
      display: ["Inter"],
      body: ["Inter"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
