/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "'Outfit', sans-serif;",
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
        blueShadow: "inset 0px -0.5rem 0px #118c87",
        yellowShadow: "inset 0px -0.5rem 0px #cc8b13",
        navyShadow: "inset 0px -0.5rem 0px #10212a",
      },
    },
  },
  plugins: [],
};
