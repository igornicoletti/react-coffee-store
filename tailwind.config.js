/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'in-dark': '#282A36',
        'in-white': '#F8F8F2',
        'in-thumb': '#F8F8F210',
        'in-track': '#64748b29',
      }
    },
    fontFamily: {
      sans: ['SoDoSans', ...defaultTheme.fontFamily.sans],
      lander: 'LanderGrande',
    }
  },
  plugins: []
}