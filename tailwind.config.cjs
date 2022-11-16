/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "'Outfit', sans-serif;",
      },
      fontSize: {
        h1: ["2.5rem", "3.125rem"],
        h2: ["1.5rem", "1.875rem"],
        h3: ["1.25rem", "1.5625rem"],
        h4: ["1rem", "1.25rem"],
        text: ["0.875rem", "1.125rem"],
      },
      colors: {
        blueDark: "#1769aa",
        blue: "#2196f3",
        blueLight: "#4dabf5",
        yellowDark: "#cc8b13",
        yellow: "#f2b137",
        yellowLight: "#ffc860",
        silverDark: "#90a4ae",
        silver: "#b0bec5",
        silverLight: "#cfd8dc",
        greyDark: "#212121",
        grey: "#424242",
        greyLight: "#616161",
      },
      boxShadow: {
        noShadow: "none !important",
        blueShadow: "inset 0px -0.5rem 0px #1769aa",
        yellowShadow: "inset 0px -0.5rem 0px #cc8b13",
        silverShadow: "inset 0px -0.5rem 0px #90a4ae",
      },
    },
  },
  plugins: [],
};
