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

  generate: {
    fallback: '404.html',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - FAIRtracks',
    title: 'Home',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // // TODO: BioSchemas metadata to appear here?
      // {
      //   hid: 'description',
      //   name: 'description',
      //   content:
      //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm
      // shift client partner network product seilans solve management influencer analytics
      // leverage virality. incubator seed round massmarket. buyer agile development growth hacking
      // business-to-consumer ecosystem', },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      // TODO: Update icons for FAIRtracks
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      // { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/style/global.css'],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/v-tooltip.js' },
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
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/content'],
  content: {
    // Options
  },

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

    extend(config) {
      config.module.rules.push({
        test: /\.pdf$/,
        loader: 'ignore-loader',
      })
      config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { compact: true },
      })
    },
    transpile: ['vuetify'],
  },
}
