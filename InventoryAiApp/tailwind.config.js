/** @type {import('tailwindcss').Config} */

const { theme } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.html', './**/*.razor'],  // Important that purge has changed to content from 3.0 onwards
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: '#00b1ff', // Customize this as needed
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

