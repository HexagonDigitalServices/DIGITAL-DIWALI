/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        festive: "#FFD700",
        dimBlue: "#0F172A", 
      },
      fontFamily: {
        festive: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};