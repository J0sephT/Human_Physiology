/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-green': '#00FF00',
        'pink': {
          100: '#FFF0F5',
          300: '#FFA07A',
          500: '#FF69B4',
          600: '#DB7093',
        },
        'lavender': {
          200: '#E6E6FA',
          300: '#D8BFD8',
        },
        'purple': {
          600: '#8A2BE2',
          700: '#4B0082',
        },
      },
    },
  },
  plugins: [],
};
