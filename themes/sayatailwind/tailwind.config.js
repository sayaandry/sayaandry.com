/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'layouts/**/*.html',
  ],
  theme: {
    fontFamily: {
      'sans': 'Helvetica, Arial, sans-serif',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

