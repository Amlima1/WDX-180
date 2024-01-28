/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', "components/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000'
      },
    },
  },
  plugins: [],
}

