/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-black': '#000000',
        'main-blue': '#031C30',
        'main-yellow': '#FCA311',
        'main-white': '#E5E5E5',
        'main-gray': '#e1e1e1',
        'secondary-gray': '#B4B4B4',
        'pure-white': '#fafafa',
        'dm-primary': '#031C30',
        'dm-secondary': '#667A8A',
        'lm-primary': '#FDFDFD',
        'lm-secondary': '#F5FFFA',
      },
    },
  },
  plugins: [],
}
