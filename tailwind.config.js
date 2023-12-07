/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          100: "#000000",
          500: "#1D2235"
        },
        white: {
          DEFAULT: "#fff",
          100: "#ffffff"
        },
        blue: {
          500: "#2b77e7"
        },
        purple: {
          DEFAULT: "#5D3EBC",
          500: "#081448"
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

