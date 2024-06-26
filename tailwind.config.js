/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      tajawal: ["Tajawal", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#377553",
        secondary: "#edf3f0",
      },
    },
  },
  plugins: [],
};
