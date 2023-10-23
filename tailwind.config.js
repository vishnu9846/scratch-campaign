/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "bot" :['Artifika', 'serif'],
        "bot1":['Montserrat', 'sans-serif']
      },
      colors: {
        'primary': '#62C4A4',
        'back' : '#2C2C2C',
        'light' : '#E0F3ED',
        'neutrallight' : '#BBC3BC',
        'bg_black' : '#1D1F1E',
        'black_3' : '#171717',
        'gray' : '#999'
      },

    },
  },
  plugins: [],
}

