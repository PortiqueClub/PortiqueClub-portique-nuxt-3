const twColors = require('tailwindcss/colors')

delete twColors.lightBlue // Avoid warning during build.
delete twColors.warmGray
delete twColors.trueGray
delete twColors.coolGray
delete twColors.blueGray

module.exports = {
  ...twColors,
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  yellow: {
    light: '#efbb33',
    // light: '#FFFCD3', light version
    ...twColors.yellow,
  },
  orange: {
    ...twColors.orange,
    'primary': '#f0ba33'
  },
  blue: {
    light: '#74B2FB',
    ...twColors.blue,
    dark: '#1C3657',
  },
}
