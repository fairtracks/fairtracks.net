import { browserslist } from './package.json'

// import colors from 'vuetify/es5/util/colors'
function isProd() {
  return process.env.NODE_ENV === 'production'
}

function isDev() {
  return process.env.NODE_ENV === 'development'
}

function shouldOptimizeImages() {
  let optimize = false
  if (isDev()) {
    optimize = process.env.FAIRTRACKS_OPTIMIZE_IMAGES_IN_DEV === 'true'
    if (!optimize) {
      console.log(
        'Add "FAIRTRACKS_OPTIMIZE_IMAGES_IN_DEV = true" to ".env" file to ' +
          'optimize images also in development builds.'
      )
    }
  }

  if (isProd()) {
    optimize = !(process.env.FAIRTRACKS_DISABLE_OPTIMIZE_IMAGES_IN_PROD === 'true')
    if (optimize) {
      console.log(
        'Add "FAIRTRACKS_DISABLE_OPTIMIZE_IMAGES_IN_PROD = true" to ".env" file to ' +
          'disable optimization of images in production.'
      )
    }
  }

  console.log(
    `Images are ${optimize ? '' : 'not '}optimized` +
      `${optimize ? ' using "@aceforth/nuxt-optimized-images" and related libraries/' : ''}.`
  )

  return optimize
}

const OPTIMIZE_IMAGES = shouldOptimizeImages()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
    base: isDev() ? process.env.BASE_URL : '/fairtracks.net/',
    trailingSlash: true,
  },

  generate: {
    fallback: '404.html',
    exclude: [/^\/modevue-demo\/.*/],
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
    githubUseRepoInfoSampleIfMissing: process.env.FAIRTRACKS_USE_GITHUB_REPO_INFO_SAMPLE_IF_MISSING,
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/lazysizes.client.js',
    '~/plugins/load-files.js',
    '~/plugins/minify-css-string.js',
    '~/plugins/octokit.js',
    '~/plugins/persisted-state.client.js',
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

  // watchers: {
  //   webpack: {
  //     aggregateTimeout: 300,
  //     poll: 1000,
  //   },
  // },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    ['nuxt-storm', { nested: true }],
    'nuxt-webpack-optimisations',
    // [
    //   'nuxt-purgecss',
    //   {
    //     // paths: [
    //     //   'node_modules/@nuxtjs/vuetify/**/*.ts',
    //     //   'node_modules/@nuxt/vue-app/template/**/*.html',
    //     //   'node_modules/@nuxt/vue-app/template/**/*.vue',
    //     // ],
    //     whitelist: ['container', 'row', 'spacer', 'col', 'v-application p'],
    //     whitelistPatterns: [
    //       /^v-.*/,
    //       /^col-.*/,
    //       /^theme-light.*/,
    //       /^theme-dark.*/,
    //       /^rounded-.*/,
    //       /^(primary|secondary|anchor|accent|error|info|success|warning|background)--text$/,
    //       /^(white|grey|black)--text$/,
    //       /^text--(primary|secondary|disabled)$/,
    //       /^text--darken-[1-4]$/,
    //       /^text--lighten-[1-4]$/,
    //       /^font-weight-.*$/,
    //     ],
    //     whitelistPatternsChildren: [/^v-input/, /^v-text-field.*/, /^v-select.*/],
    //   },
    // ],
  ].concat(OPTIMIZE_IMAGES ? ['@aceforth/nuxt-optimized-images'] : []),

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/content', '@nuxtjs/redirect-module', 'nuxt-webfontloader', '@nuxtjs/dayjs'],

  // @nuxt/content configuration
  content: {
    csv: { delimiter: '\t' },
  },

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
    mozjpeg: { quality: 40 },
    pngquant: { speed: 8, quality: [0.3, 0.4] },
    sqip: {
      numberOfPrimitives: 40,
      mode: 0,
      blur: 12,
      // background: 'ffffff00',
    },
  },

  // @nuxt/redirect-module configuration
  redirect: [
    {
      // eslint-disable-next-line
      from: '^([^\\?]*)(?<!\\.(png|jpg|gif|svg|css))(?<!\\/)(\\?.*)?$',
      to: (_from, req) => req.url + '/',
    },
  ],

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
          info: '#4B3C36',
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
          info: '#4B3C36',
          success: '#D7E8D1',
          warning: '#FFF7F2',
          background: '#FFFFFF',
        },
      },
    },
    treeShake: { components: ['VDataTable'] },

    // Commented out until https://github.com/nuxt-community/vuetify-module/issues/208 is fixed
    // treeShake: { loaderOptions: { registerStylesSSR: True } },
  },

  // nuxt-webfontloader configuration
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900'],
    },
  },

  // nuxt-webpack-optimisations configuration

  webpackOptimisations: {
    debug: true,
    measure: false,
    features: {
      postcssNoPolyfills: isDev(),
      esbuildLoader: isDev() && !OPTIMIZE_IMAGES,
      esbuildMinifier: isProd() && !OPTIMIZE_IMAGES,
      imageFileLoader: isDev() && !OPTIMIZE_IMAGES,
      webpackOptimisations: true,
      cacheLoader: false, // isDev() && !OPTIMIZE_IMAGES,
      hardSourcePlugin: isDev() && !OPTIMIZE_IMAGES,
      parallelPlugin: false,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)

  build: {
    // analyze: {
    //   analyzerMode: 'static',
    // },
    babel: {
      cacheDirectory: true,
      compact: true,
      // @nuxt/babel-preset-app configuration

      presets({ isServer, isModern, isClient }) {
        let targets
        if (isServer) {
          targets = { node: 'current' }
        } else if (isModern) {
          targets = { esmodules: true }
        } else if (isClient) {
          targets = browserslist
        }

        return isProd() || OPTIMIZE_IMAGES
          ? [
              [
                '@nuxt/babel-preset-app',
                {
                  debug: false,
                  corejs: { version: 3 },
                  // From https://cli.vuejs.org/guide/browser-compatibility.html
                  useBuiltIns: 'entry',
                  targets,
                },
              ],
            ]
          : []
      },
    },
    // cache: !(OPTIMIZE_IMAGES || isProd()),
    corejs: 3,
    extractCSS: isProd(),

    extend(config, { isClient, loaders: { vue } }) {
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

    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: {},
          browsers: browserslist,
        },
      },
      order: 'presetEnvAndCssnanoLast',
      whitelistPatternsChildren: [/^ls-/],
    },

    quiet: false, // important for waitforserve scripts in GitHub Actions

    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: isProd() && OPTIMIZE_IMAGES,
        },
      },
    },

    transpile: isProd() ? [({ isLegacy }) => isLegacy && 'vuetify'] : [],

    // Commented out until https://github.com/nuxt-community/vuetify-module/issues/208 is fixed
    // vueStyle: { manualInject: process.env.NODE_ENV === 'production' },
  },
}
