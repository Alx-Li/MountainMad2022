module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        '3xl': '10px 10px rgba(0, 0, 0, 20%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
 };
