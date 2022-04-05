// import colors from 'vuetify/es5/util/colors'

function shouldOptimizeImages() {
  const optimize =
    process.env.NODE_ENV === 'development'
      ? process.env.OPTIMIZE_IMAGES_IN_DEV === 'true'
      : true
  console.log(
    `Images are ${optimize ? '' : 'not '}optimized` +
      `${
        optimize
          ? ' using "@aceforth/nuxt-optimized-images" and related libraries/'
          : ''
      }.`
  )
  if (!optimize) {
    console.log(
      'Add "OPTIMIZE_IMAGES_IN_DEV = true" to ".env" file to ' +
        'optimize images also in development builds.'
    )
  }
  return optimize
}

const OPTIMIZE_IMAGES = shouldOptimizeImages()

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

  publicRuntimeConfig: {
    optimizeImages: OPTIMIZE_IMAGES,
  },

  privateRuntimeConfig: {
    githubAuthToken: process.env.FAIRTRACKS_GITHUB_AUTH_TOKEN,
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/lazysizes.client.js',
    '~/plugins/load-image-assets.js',
    '~/plugins/load-nonimage-assets.js',
    '~/plugins/minify-css-string.js',
    '~/plugins/octokit.js',
    '~/plugins/v-tooltip.js',
    // '~/plugins/vue-async-computed.js',
    '~/plugins/vue-cookie-law.client.js',
    '~/plugins/vue-if-bot.js',
    '~/plugins/vuetify-theme-cache.js',
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
  ].concat(
    OPTIMIZE_IMAGES
      ? ['@aceforth/nuxt-optimized-images']
      : ['nuxt-webpack-optimisations']
  ),

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/redirect-module',
    'nuxt-webfontloader',
    '@nuxtjs/dayjs',
  ],

  // @nuxt/content configuration
  content: {
    // Options
  },

  // @nuxt/redirect-module configuration
  redirect: [{ from: '^/contact', to: '/community' }],

  // @nuxtjs/dayjs configuration
  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    plugins: ['relativeTime.js'],
  },

  // @aceforth/nuxt-optimized-images configuration
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    responsive: {
      adapter: require('responsive-loader/sharp'),
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/style/variables.scss'],
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
          background: '#183332',
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
          background: '#FFFFFF',
        },
      },
    },
    treeShake: true,
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
        return process.env.NODE_ENV === 'production'
          ? [
              [
                '@nuxt/babel-preset-app',
                {
                  corejs: { version: 3 },
                  // From https://cli.vuejs.org/guide/browser-compatibility.html
                  useBuiltIns: 'entry',
                },
              ],
            ]
          : []
      },
    },
    cache: true,
    corejs: 3,
    extractCSS: false,

    extend(config, { _isDev, isClient, loaders: { vue } }) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'ignore-loader',
      })
      config.module.rules.push({
        test: /\.pdf$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: '[path][name].[ext]',
        },
      })
      if (isClient) {
        config.node = {
          fs: 'empty',
        }
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

    postcss: { whitelistPatternsChildren: [/^ls-/] },

    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },

    transpile: process.env.NODE_ENV === 'production' ? ['vuetify'] : [],
  },
}
