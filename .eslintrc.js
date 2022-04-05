module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/recommended',
    'plugin:prettier-vue/recommended',
    'prettier',
    'plugin:nuxt/recommended',
  ],

  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        /**
         * Use prettier to process `<template>` blocks or not
         *
         * If set to `false`, you may need to enable those vue rules that are disabled by
         * `eslint-config-prettier`,
         * because you need them to lint `<template>` blocks
         *
         * @default true
         */
        template: true,

        /**
         * Use prettier to process `<script>` blocks or not
         *
         * If set to `false`, you may need to enable those rules that are disabled by
         * `eslint-config-prettier`,
         * because you need them to lint `<script>` blocks
         *
         * @default true
         */
        script: true,

        /**
         * Use prettier to process `<style>` blocks or not
         *
         * @default true
         */
        style: true,

        // Settings for how to process custom blocks
        customBlocks: {
          // Treat the `<docs>` block as a `.markdown` file
          docs: { lang: 'markdown' },

          // Treat the `<config>` block as a `.json` file
          config: { lang: 'json' },

          // Treat the `<module>` block as a `.js` file
          module: { lang: 'js' },

          // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
          comments: false,

          // Other custom blocks that are not listed here will be ignored
        },
      },

      // Use prettierrc for prettier options or not (default: `true`)
      usePrettierrc: true,

      // Set the options for `prettier.getFileInfo`.
      // @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
      fileInfoOptions: {
        // Path to ignore file (default: `'.prettierignore'`)
        // Notice that the ignore file is only used for this plugin
        ignorePath: '.testignore',

        // Process the files in `node_modules` or not (default: `false`)
        withNodeModules: false,
      },
    },
  },

  rules: {
    'no-console': 'off',
    'import/no-named-as-default': 'off',
    'prettier-vue/prettier': [
      'error',
      {
        // Override all options of `prettier` here
        // @see https://prettier.io/docs/en/options.html
        // printWidth: 100,
        // singleQuote: true,
        // semi: false,
        // trailingComma: 'es5',
      },
    ],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
      },
    ],
  },

  ignorePatterns: ['**/modevue-demo/**'],
}
