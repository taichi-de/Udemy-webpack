module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    // require('postcss-nested'),
    // require('postcss-custom-properties'),
    // require('autoprefixer'),
  ]
}
