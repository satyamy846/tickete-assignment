/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'roboto':['Roboto', 'sans-serif']
    },
    flex:{
      '3/12': '1 1 25%',
      '9/12':'1 1 75%',

    },
    extend: {},
  },
  plugins: [],
}