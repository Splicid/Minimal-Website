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
      fontSize: {
        sm: '2.8rem',
        base: '1rem',
        xl: '6.25rem',
        xl2: '4.563rem',
        xl3: '5.953rem',
        xl4: '6.25rem',
        xl5: '7.052rem',
      },
      screens: {
        'sm': '360px',
        'md': '820px',
        'lg': '1024px',
        'xl': '1580px',
        '2xl': '1936px',
      }
    },
  },
  plugins: [],
}
