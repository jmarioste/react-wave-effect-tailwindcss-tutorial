/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": {
            backgroundPositionX: "1278px",
          },
          "100%": {
            backgroundPositionX: "0px",
          },
        },
      },
      animation: {
        wave: "wave linear infinite",
      },
    },
  },
  plugins: [],
};
