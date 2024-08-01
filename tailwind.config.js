/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

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
  plugins: [
    plugin(({ addUtilities }) =>
      addUtilities({
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            width: '0.75rem',
            backgroundColor: 'transparent'
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '2rem',
            backgroundColor: '#F4F4EE'
          }
        }
      })
    )
  ]
}