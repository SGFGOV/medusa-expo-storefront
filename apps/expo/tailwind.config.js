// @ts-check

const { theme } = require('app/design/tailwind/theme')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', '../../packages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    ...theme,
  },
  plugins: [],
}
