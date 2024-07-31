/** @type {import('tailwindcss').Config} */
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
      }
    },
    fontFamily: {
      sans: ['"SoDoSans", sans-serif'],
      lander: 'LanderGrande',
    }
  },
  plugins: [],
}