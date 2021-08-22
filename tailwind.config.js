const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.teal,
      gray: colors.gray,
      white: colors.white,
      transparent: colors.transparent,
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      rotate: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
