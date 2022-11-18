/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ['Bellefair', 'sans-serif'],
        barlow: ['Barlow Condensed', 'sans-serif']
      }
    }
  },
  plugins: []
}
