const { fontFamily } = require("tailwindcss/defaultTheme");
// const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans],
      },
      colors: {
        darkBG: "#232946",
        darkParagraph: "#b8c1ec",
        darkComponent: "#eebbc3",
        darkComponentHover: "#d197a0",
        darkText: "#232946",
      },
    },
  },
  plugins: [],
};
