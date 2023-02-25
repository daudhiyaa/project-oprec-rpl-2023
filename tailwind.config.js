const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        // darkComponent: "#eebbc3",
        darkComponent: "#ffd803",
        darkComponentHover: "#ffe44f",
        darkText: "#232946",

        lightBG: "#fffffe",
        lightParagraph: "#2d334a",
        lightComponent: "#ffd803",
        lightText: "#272343",
      },
    },
  },
  plugins: [],
};
