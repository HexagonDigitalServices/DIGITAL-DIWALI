/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowCustom: "#FFC107",
      },
      fontFamily: {
        festive: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};