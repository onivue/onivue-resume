const colors = require('tailwindcss/colors')
const animations = require('./tailwind/animations')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './stores/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          ...colors.amber,
        },
        dark: { 100: '#2c2c2e', 200: '#1e1f24' },
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
