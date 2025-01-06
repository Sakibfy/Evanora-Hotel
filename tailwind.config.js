/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Playfair Display", serif'],
        serif: ['"Open Sans", serif'],

      },

    },
  },
  plugins: [require('daisyui')],
}