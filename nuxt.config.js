// import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
    base:
      process.env.NODE_ENV === 'development'
        ? process.env.BASE_URL
        : '/fairtracks.net/',
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
  env: {
    loadSqipPlaceholders:
      process.env.IMAGE_OPT_IN_DEV || process.env.NODE_ENV !== 'development',
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/globals.js',
    '~/plugins/v-tooltip.js',
    { src: '~/plugins/vue-cookie-law.js', mode: 'client' },
    '~/plugins/vue-if-bot.js',
    '~/plugins/vuetify-theme-cache.js',
    '~/plugins/minify-css-string.js',
    '~/plugins/lazysizes.client.js',
    '~/plugins/load-image-assets.js',
    '~/plugins/load-nonimage-assets.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,
  components: [
    '~/components', // shortcut to { path: '~/components' }
    { path: '~/components/modevue-demo/', prefix: 'demo' },
    { path: '~/components/modevue-demo/sections', prefix: 'demo-sections' },
    { path: '~/components/modevue-demo/ui', prefix: 'demo-ui' },
    { path: '~/components/sections/', prefix: 'sections' },
    { path: '~/components/ui/', prefix: 'ui' },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    ['nuxt-storm', { nested: true }],
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/content', '@nuxtjs/redirect-module', 'nuxt-webfontloader'],

  // @nuxt/content configuration
  content: {
    // Options
  },

  // @nuxt/redirect-module configuration
  redirect: [{ from: '^/contact', to: '/community' }],

  // @aceforth/nuxt-optimized-images configuration
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: process.env.IMAGE_OPT_IN_DEV,
  },

  responsive: {
    adapter: require('responsive-loader/sharp'),
    disable:
      !process.env.IMAGE_OPT_IN_DEV || process.env.NODE_ENV === 'development',
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Roboto',
      },
      icons: false,
    },
    icons: {
      iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
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

  // nuxt-webfontloader configuration
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900'],
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)

  build: {
    analyze: false,
    babel: {
      cacheDirectory: true,
      compact: true,
      // @nuxt/babel-preset-app configuration
      presets() {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: { version: 3 },
              // From https://cli.vuejs.org/guide/browser-compatibility.html
              useBuiltIns: 'entry',
            },
          ],
        ]
      },
    },
    cache: true,
    corejs: 3,
    extractCSS: false,

    extend(config, { isDev, isClient, loaders: { vue } }) {
      config.module.rules.push({
        test: /\.pdf$/,
        loader: 'ignore-loader',
      })
      config.module.rules.push({
        test: /\.md$/,
        loader: 'ignore-loader',
      })
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
    hardSource: false,

    // https://www.voorhoede.nl/en/blog/10x-faster-nuxt-builds-on-netlify/
    html: {
      minify: {
        minifyCSS: false,
        minifyJS: false,
      },
    },
    parallel: false,

    transpile: ['vuetify'],
  },
}
