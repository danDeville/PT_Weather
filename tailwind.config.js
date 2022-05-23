const { themeGeneral } = require('./src/themes/bridge')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': themeGeneral.primary,
        'secondary': themeGeneral.secondary,
        'tertiary': '#0F0E17',
        'quaternary': '#0E3FA9',
        'background': themeGeneral.background,
        'white': '#FFFFFF',
        'black': '#000000',
      },
    },
  },
  plugins: [],
}