const colors = require('./colors')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
