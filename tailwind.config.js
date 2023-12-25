const colors = require('tailwindcss/colors');
const animations = require('./tailwind/animations');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './stores/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          ...colors.slate,
        },
        dark: { 200: '#161b22', 100: '#0d1117' },
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
};
