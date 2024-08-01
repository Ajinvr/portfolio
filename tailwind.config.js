/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#D5FF3F',
        'Black-Blue': '#161B22',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'Bebas-Neue': ['Bebas Neue', 'sans-serif'],
        'Anton':['Anton', 'sans-serif']
      },
      fontSize: {
        '10xl': '11rem',
        '11xl': '13rem',
      },
    },
  },
  plugins: [],
}
