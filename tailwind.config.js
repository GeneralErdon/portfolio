/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple": "#061646",
        "light-white": "#2F3B65",
      }
    },
  },
  plugins: [],
}

