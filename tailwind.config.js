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
        tipographyTitulo: ['Orbitron', 'sans-serif']
      }
    },
  },
  plugins: [],
}

