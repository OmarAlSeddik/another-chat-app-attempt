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
        blueDark: "#118c87",
        blue: "#31c3bd",
        blueLight: "#65e9e4",
        yellowDark: "#cc8b13",
        yellow: "#f2b137",
        yellowLight: "#ffc860",
        navyDark: "#10212a",
        navy: "#1a2a33",
        navyLight: "#1f3641",
        silverDark: "#6b8997",
        silver: "#a8bfc9",
        silverLight: "#dbe8ed",
        silverTransparent: "#a8bfc90d",
      },
      boxShadow: {
        noShadow: "none !important",
        blueShadow: "inset 0px -0.5rem 0px #118c87",
        yellowShadow: "inset 0px -0.5rem 0px #cc8b13",
        navyShadow: "inset 0px -0.5rem 0px #10212a",
      },
    },
  },
  plugins: [],
};
