/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        xs: '48px',
      }
    }, 
  },
  plugins: [
    require('tailwindcss'),
    require('daisyui')
  ], 
  daisyui: {
    themes: ['light'], 
  },
};
