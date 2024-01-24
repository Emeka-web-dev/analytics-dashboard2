/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#34CAA5",
        secondary: "#0D062D",
        grey: "#F7F8FA",
        lightGrey: "#FAFAFA",
        mainDark: "#0D0F11",
        subDark: "#191D23",
        textDefault: "#26282C"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

