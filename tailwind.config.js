/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": {
          100: "#d3d2d2",
          200: "#a6a5a4",
          300: "#7a7777",
          400: "#4d4a49",
          500: "#211d1c",
          600: "#1a1716",
          700: "#141111",
          800: "#0d0c0b",
          900: "#070606",
        },
        "purple": {
          100: "#ddcdfe",
          200: "#bb9bfc",
          300: "#996afb",
          400: "#7738f9",
          500: "#5506f8",
          600: "#4405c6",
          700: "#330495",
          800: "#220263",
          900: "#110132",
        },
        "orange": {
          100: "#f8ddd6",
          200: "#f2bbad",
          300: "#eb9883",
          400: "#e5765a",
          500: "#de5431",
          600: "#b24327",
          700: "#85321d",
          800: "#592214",
          900: "#2c110a",
        },
        "dark-purple": "#061646",
        "light-white": "#2F3B65",
      },
      fontFamily: {
        custom: ["PressStart2P-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
