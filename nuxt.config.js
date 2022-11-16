function isProd() {
  return process.env.NODE_ENV === 'production'
}

function isDev() {
  return process.env.NODE_ENV === 'development'
}

function basePath() {
  return isDev() ? process.env.BASE_URL : '/'
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
    base: basePath(),
    trailingSlash: true,
    parseQuery(q) {
      return require('qs').parse(q)
    },
    stringifyQuery(q) {
      const r = require('qs').stringify(q)
      return r ? '?' + r : ''
    },
  },

  generate: {
    fallback: '404.html',
    exclude: ['/modevue-demo/all-sections/', '/code/', '/contact/'],
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
    githubUseProdReposInDev: process.env.FAIRTRACKS_USE_PROD_GITHUB_REPOS_IN_DEV,
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

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    // '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxt/content',
    '@nuxtjs/redirect-module',
    '@nuxtjs/dayjs',
    '@nuxtjs/vuetify',
    ['nuxt-storm', { nested: true }],
    'nuxt-webpack-optimisations',
    [
      'nuxt-purgecss',
      {
        paths: [
          'components/**/*.vue',
          'layouts/**/*.vue',
          'pages/**/*.vue',
          'plugins/**/*.js',
          // 'nuxt.config.js',
          'node_modules/@nuxtjs/vuetify/**/*.ts',
          'node_modules/@nuxt/vue-app/template/**/*.html',
          'node_modules/@nuxt/vue-app/template/**/*.vue',
        ],
        whitelist: [
          'body',
          'html',
          'nuxt-progress',
          '__nuxt',
          '__layout',
          'nuxt__build_indicator',
          'v-application ul',
          'container--fluid',
        ],
        whitelistPatterns: [
          /-(leave|enter|appear)(|-(to|from|active))$/, // Normal transitions
          /^nuxt-link(|-exact)-active$/, // Nuxt link classes
          /^(?!cursor-move).+-move$/, // Move transitions
          /data-v-.*/, // Keep scoped styles
          // /^v-.*/,
          /^v-app-bar.*$/,
          /^v-application.*$/,
          /^v-avatar.*$/,
          /^v-avatar-text.*$/,
          /^v-btn.*$/,
          /^v-card.*$/,
          /^v-carousel.*$/,
          /^v-chip.*$/,
          /^v-chip-group.*$/,
          /^v-data-footer.*$/,
          /^v-data-iterator.*$/,
          /^v-data-table.*$/,
          /^v-data-table-header.*$/,
          /^v-dialog.*$/,
          /^v-divider.*$/,
          /^v-footer.*$/,
          /^v-icon.*$/,
          /^v-image.*$/,
          /^v-img.*$/,
          /^v-input.*$/,
          /^v-item.*$/,
          /^v-item-group.*$/,
          /^v-label.*$/,
          /^v-list.*$/,
          /^v-list-group.*$/,
          /^v-list-item.*$/,
          /^v-list-item-group.*$/,
          /^v-main.*$/,
          /^v-menu.*$/,
          /^v-navigation-drawer.*$/,
          /^v-overlay.*$/,
          /^v-responsive.*$/,
          /^v-select.*$/,
          /^v-sheet.*$/,
          /^v-size.*$/,
          /^v-slide-group.*$/,
          /^v-text-field.*$/,
          /^v-toolbar.*$/,
          /^v-tooltip.*$/,
          /^v-window.*$/,
          /^v-window-item.*$/,
          /^col.*/,
          /^row.*/,
          /^spacer.*/,
          /^li.*/,
          /^ul.*/,
          /^theme--light.*/,
          /^theme--dark.*/,
          /^rounded-.*/,
          /^(primary|secondary|anchor|accent|error|info|success|warning|background)--text$/,
          /^(white|grey|black)--text$/,
          /^text--(primary|secondary|disabled)$/,
          /^text--darken-[1-4]$/,
          /^text--lighten-[1-4]$/,
          /^font-weight-.*$/,
          /^align-.*$/,
          /^justify-.*$/,
          /^elevation-.*$/,
        ],
        // whitelistPatternsChildren: [/^v-input/],
        //     whitelistPatternsChildren: [/^ls-/],
        whitelistPatternsChildren: [
          /^menuable.*$/,
          /^v-data-table.*$/,
          /^v-data-table-header.*$/,
          /^slot-.*$/,
          /^blur-up$/,
          // /^v-text-field.*/,
          // /^v-select.*/,
          /^ls-/,
        ],
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        display: 'block',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        overwriting: false,
        base64: true,
        inject: true,
        families: {
          Roboto: { wght: [100, 300, 400, 500, 700, 900] },
          'Walter Turncoat': { wght: [400] },
        },
        stylePath: 'fonts/fonts.css',
        subtypes: ['latin', 'latin-ext'],
      },
    ],
  ].concat(OPTIMIZE_IMAGES ? ['@aceforth/nuxt-optimized-images'] : []),

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/sitemap'],

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

  // @nuxt/sitemap configuration
  sitemap: {
    hostname: 'https://fairtracks.net',
    exclude: ['/modevue-demo/all-sections/', '/code/', '/contact/', '/presenting/'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/style/variables.scss'],
    defaultAssets: false,
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
          anchor: '#FFD000',
          accent: '#DEC349',
          error: '#966591',
          info: '#4B3C36',
          success: '#B39200',
          warning: '#FFD000',
          background: '#183332',
        },
        light: {
          primary: '#2A5755',
          secondary: '#183332',
          anchor: '#A68700',
          accent: '#DEC349',
          error: '#966591',
          info: '#4B3C36',
          success: '#B39200',
          warning: '#FFD000',
          background: '#FFFFFF',
        },
      },
    },
    treeShake: { components: ['VDataTable'] },

    // Commented out until https://github.com/nuxt-community/vuetify-module/issues/208 is fixed
    // treeShake: { loaderOptions: { registerStylesSSR: True } },
  },

  // nuxt-webpack-optimisations configuration

  webpackOptimisations: {
    debug: true,
    measure: false,
    features: {
      postcssNoPolyfills: isDev(),
      esbuildLoader: isDev() && !OPTIMIZE_IMAGES,
      esbuildMinifier: false,
      imageFileLoader: isDev() && !OPTIMIZE_IMAGES,
      webpackOptimisations: true,
      cacheLoader: false,
      hardSourcePlugin: isDev() && !OPTIMIZE_IMAGES,
      parallelPlugin: false,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)

  build: {
    analyze: false,
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
          targets = {}
        }

        return isProd() || OPTIMIZE_IMAGES
          ? [
              [
                '@nuxt/babel-preset-app',
                {
                  buildTarget: isServer ? 'server' : 'client',
                  corejs: { version: '3.22' },
                  // From https://cli.vuejs.org/guide/browser-compatibility.html
                  useBuiltIns: 'usage', // 'entry',
                  configPath: __dirname, // To import .browserslistrc
                  targets,
                },
              ],
            ]
          : []
      },
    },
    corejs: 3,
    extractCSS: false,

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
        },
      },
      order: 'presetEnvAndCssnanoLast',
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

    transpile: isProd()
      ? [
          ({ isLegacy }) => isLegacy && 'vuetify',
          ({ isLegacy }) => isLegacy && 'vue.runtime',
          ({ isLegacy }) => isLegacy && 'vue-router',
          ({ isLegacy }) => isLegacy && 'vuex',
          ({ isLegacy }) => isLegacy && 'vuex-orm',
          ({ isLegacy }) => isLegacy && 'v-tooltip',
          ({ isLegacy }) => isLegacy && 'vue-resize',
        ]
      : [],

    // Commented out until https://github.com/nuxt-community/vuetify-module/issues/208 is fixed
    // vueStyle: { manualInject: process.env.NODE_ENV === 'production' },
  },
}
