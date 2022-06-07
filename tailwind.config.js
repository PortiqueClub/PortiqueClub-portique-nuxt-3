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
      spacing: {
        // Each key is equivalent to the pixel value
        // ie: 4 = 0.25rem = 4px
        0: '0px',
        4: '0.25rem',
        6: '0.375rem',
        8: '0.5rem',
        12: '0.75rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        24: '1.5rem',
        28: '1.75rem',
        32: '2rem',
        40: '2.5rem',
        48: '3rem',
        56: '3.5rem',
        64: '4rem',
        80: '5rem',
        96: '6rem',
        106: '6.625rem',
        116: '7.25rem',
        128: '8rem',
        148: '9.25rem',
        160: '10rem',
        176: '11rem',
        180: '11.25rem',
        192: '12rem',
        224: '14rem',
        256: '16rem',
        288: '18rem',
        400: '25rem',
        450: '28.125rem',
        500: '31.25rem',
        550: '34.375rem',
        600: '37.5rem',
        700: '43.75rem',
      },
    },
  },
  plugins: [],
}
