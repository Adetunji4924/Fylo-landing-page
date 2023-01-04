/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        sans: ['Open Sans']
      },
      fontSize: {
        x: ['0.55rem', { lineHeight: '1rem' }],
      },
      colors: {
        primary: {
          100: 'hsl(217, 28%, 15%)',
          200: 'hsl(218, 28%, 13%)',
          300: 'hsl(216, 53%, 9%)',
          400: 'hsl(219, 30%, 18%)',
        },
        accent: {
          cyan: 'hsl(176, 68%, 64%)',
          blue: 'hsl(198, 60%, 50%)',
          lightred: 'hsl(0, 100%, 63%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
        }
      },
      screens: {
        smx: '290px',
      }
    },
  },
  plugins: [],
}
