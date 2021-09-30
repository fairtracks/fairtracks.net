// import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
    base:
      process.env.NODE_ENV === 'development'
        ? process.env.BASE_URL
        : '/fairtracks-new.github.io/',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - ModeVue',
    title: 'Home',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'ModeVue — is a carefully crafted multi-purpose, responsive, and gorgeous theme. Built with Vue.js and Nuxt.js, it comes with the features you need to quickly start developing your application.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-cookie-law.js', mode: 'client' },
    { src: '~/plugins/vue-if-bot.js' },
    { src: '~/plugins/vuetify-theme-cache.js' },
    { src: '~/plugins/minify-css-string.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,
  components: [
    '~/components', // shortcut to { path: '~/components' }
    { path: '~/components/sections/', prefix: 'sections' },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true,
      },
      dark: false,
      themes: {
        dark: {
          primary: '#2A5755',
          secondary: '#183332',
          anchor: '#B39200',
          accent: '#DEC349',
          error: '#966591',
          info: '#FFFFFF',
          success: '#D7E8D1',
          warning: '#FFF7F2',
        },
        light: {
          primary: '#2A5755',
          secondary: '#183332',
          anchor: '#B39200',
          accent: '#DEC349',
          error: '#966591',
          info: '#FFFFFF',
          success: '#D7E8D1',
          warning: '#FFF7F2',
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)

  build: {
    extractCSS: true,
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      })
    },
  },
}
