/** @type {import('tailwindcss').Config} */
module.exports = {
  content:['./**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        overlay:'#00000070'
      }
    },
    container: {
      center:true,
    },
  },
  plugins: [],
}

