/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,astro}'],
  prefix: '',
  theme: {
    extend: {
      colors: {
        'dark-void': '#151419',
        'bright-gray': '#ececec',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
