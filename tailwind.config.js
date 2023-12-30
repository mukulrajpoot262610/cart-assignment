/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#F8F9FB',
          200: '#E7ECF0',
          300: '#C5CDD2',
          400: '#A9B4BC',
          500: '#606D76',
          600: '#354349',
          700: '#1B262E',
        },
        light: {
          100: '#FFC83A',
          200: '#F9B023',
          300: '#153075',
          400: '#2A4BA0',
        },
      },
      fontFamily: {
        manrope: 'Manrope',
      },
    },
  },
  plugins: [],
};
