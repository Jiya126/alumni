/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],  theme: {
    extend: {
      colors: {
        'clg-blue': '#0369a1',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

