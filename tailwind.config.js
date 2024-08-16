/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },

    fontFamily: {
      heading: 'Sawarabi Mincho',
      body: 'Sawarabi Mincho',
    },

    fontWeight: {
      normal: '400',
      bold: '700',
    },

    extend: {
      colors: {
        'text': '#e8fbfc',
        'background': '#010c0c',
        'primary': '#89edf0',
        'secondary': '#221398',
        'accent': '#9341e7',
        'dark-accent': '#6B2BAD',
        'white': '#fff',
        'gray': '#494949',
        'lightblue': '#0D99FF',
        'black': '#000',
        'project': '#12161D',
        'transparent': '##00FFFFFF'
      },
    },
  },
  plugins: [],
}

