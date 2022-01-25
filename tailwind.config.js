const colors = require('tailwindcss/colors')
const animations = require('./tailwind/animations')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './stores/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.amber,
        },
      },
      ...animations,
      boxShadow: {
        bold: '4px 4px 0px',
        bolder: '8px 8px 0px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
