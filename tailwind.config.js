/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        deepwave: '#05061B',
        twilightcore: '#0D0F35',
        mistlayer: '#323558',
        echobyte: '#6858D5',
        bottondark: '#7F337D',
        bottonlight: '#8D41D9',
        // mistlayerlight:'#9C91CC',
        mistlayerlight:'#AA9AD9',
        voidlight: '#FCFDFF',

      },
      fontFamily:{
        tipographyTexto: ['Montserrat', 'sans-serif'],
        tipographyTitulo: ['Orbitron', 'sans-serif'],
        tipographyTextoTwo: ['Lato','sans-serif']
      },
      boxShadow: {
        neonWhite: '0 0 1px #F2F2F2, 0 0 10px #F2F2F2, 0 0 30px #F2F2F2',
        neonSmall: '0 0 10px #8f3dca, 0 0 20px #8f3dca, 0 0 30px #8f3dca',
        neonBig: '0 0 13px #8f3dca, 0 0 23px #8f3dca, 0 0 33px #8f3dca',
      },
      textShadow: {
        neon: '0 0 5px #8f3dca, 0 0 10px #8f3dca, 0 0 20px #8f3dca',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

