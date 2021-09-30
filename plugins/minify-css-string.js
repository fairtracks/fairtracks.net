import minifyTheme from 'minify-css-string'

export default (ctx) => {
  ctx.$vuetify.theme.options.minifyTheme = minifyTheme
}
