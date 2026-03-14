/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.{js,css}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0F2B5C",
        "secondary-blue": "#0A04BF",
        "accent-red": "#F22B3A",
        "light-gray": "#D9D9D9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "soft": "0 4px 20px rgba(15, 43, 92, 0.08)",
        "soft-lg": "0 10px 40px rgba(15, 43, 92, 0.12)",
      },
    },
  },
  plugins: [],
};
