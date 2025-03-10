/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors : {
        primary: {
          5:'#fff8f7',
          10:'#fff1ef',
          25:'#ffdbd7',
          50:'#ffb7b0',
          75:'#ff9388',
          100:'#ff6f61',
        },
        black: {
          5:'#eaeef5',
          10:'#e0e3eb',
          25:'#bfc4cc',
          50:'#8a9098',
          75:'#545c65',
          100:'#1e2832',
        },
        white: {
          5:'#162447',
          10:'#222f50',
          25:'#47526e',
          50:'#848b9e',
          75:'#c2c5cf',
          100:'#ffffff',
        },
        dark: {
          5:'#f2f2f2',
          10:'#e5e5e5',
          25:'#bfbfbf',
          50:'#808080',
          75:'#404040',
          100:'#000000',
        },
        },
      },
      fontSize: {
        'h1': '67px',
        'h2': '50px',
        'h3': '37px',
        'h4': '28px',
        'h5': '21px',
        'h6': '16px',
        'subtitle1': '16px',
        'subtitle2': '14px',
        'body': '74px',
        'body2': '34px',
        'button': '18px',
        'button-large': '18px',
        'button-small': '16px',
        'span': '16px',
        'span2': '14px',
        'span3': '16px',
        'a': '16px',
        'a2': '14px',
        'input-text': '16px',
        'overline': '16px',
      },
      
      fontFamily: {
        sans: ['Poppins']
      },

      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semi-bold': 600,
      },
    },
  plugins: [],
}