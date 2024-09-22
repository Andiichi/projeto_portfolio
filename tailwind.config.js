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
      'color-primary-tittle': '#422815',
      'color-secondary-subtittle': '#D16210',
      'color-detalhes': '#F5F6F5',
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

