/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "'Outfit', sans-serif;",
      },
      fontSize: {
        large: ["1.25rem", "1.5rem"],
        medium: ["1rem", "1.375rem"],
        small: ["0.75rem", "1.375rem"],
      },
      colors: {
        primary1: "#202225",
        primary2: "#292B2F",
        primary3: "#2F3136",
        primary4: "#36393f",
        primary5: "#40444b",
        primary6: "#42464D",
        text1: "#96989d",
        text2: "#dcddde",
        text3: "#ffffff",
        button1: "#9e9e9e",
        button2: "#e0e0e0",
        button3: "#f5f5f5",
      },
      boxShadow: {
        noShadow: "none !important",
        buttonShadow1: "inset 0px -0.5rem 0px #9e9e9e",
        buttonShadow2: "inset 0px -0.25rem 0px #9e9e9e",
      },
    },
  },
  plugins: [],
};
