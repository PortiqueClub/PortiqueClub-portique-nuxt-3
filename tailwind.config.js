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
  safelist: [
    ...(Object.keys(colors).reduce((acc, name) => {
      acc.push(`border-${name}-800`)
      acc.push(`border-${name}-600`)
      acc.push(`bg-${name}-800`)
      acc.push(`bg-${name}-700`)
      acc.push(`bg-${name}-600`)
      acc.push(`bg-${name}-500`)
      acc.push(`bg-${name}-400`)
      acc.push(`bg-${name}-100`)
      acc.push(`hover:bg-${name}-600`)
      acc.push(`hover:bg-${name}-800`)
      acc.push(`bg-${name}-100`)
      acc.push(`ring-${name}-600`)
      acc.push(`text-${name}-600`)
      acc.push(`focus:outline-${name}-800`)
      return acc
    }, [])),
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
