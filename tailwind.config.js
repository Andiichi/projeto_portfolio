/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/css/**/*.css",
  ],
  theme: {
    colors: {
      'color-primary': '#E6CBB6',
      'color-secondary': '#BB7D58',
      'color-primary-title': '#422815',
      'color-secondary-subtitle': '#D16210',
      'color-detalhes': '#F5F6F5',
      'red': {
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
      }
    },

    fontFamily: {
      playwrite: ['Playwrite CU', 'cursive', '400'],
      gotu: ['Gotu', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
}

