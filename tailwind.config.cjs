/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '6.25rem',
      },
      fontFamily:{
        inter: ['inter', 'serif']
      },
    },
  },
  plugins: [],
}
