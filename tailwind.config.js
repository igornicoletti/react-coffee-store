/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'in-dark': '#282A36',
        'in-white': '#F8F8F2',
      }
    },
    fontFamily: {
      sans: ['SoDoSans', ...defaultTheme.fontFamily.sans],
      lander: 'LanderGrande',
    }
  },
  plugins: []
}