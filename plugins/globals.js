import Vue from 'vue'

Vue.mixin({
  mounted() {
    this.createRgbVarsForThemes(this.$vuetify.theme.themes)
  },
  methods: {
    isObject(arg) {
      return Object.prototype.toString.call(arg) === '[object Object]'
    },

    // Modified from: https://github.com/vuetifyjs/vuetify/issues/9282#issuecomment-735378004
    hexToRgb(h) {
      let r = 0
      let g = 0
      let b = 0

      if (h.length === 4) {
        r = '0x' + h[1] + h[1]
        g = '0x' + h[2] + h[2]
        b = '0x' + h[3] + h[3]
      } else if (h.length === 7) {
        r = '0x' + h[1] + h[2]
        g = '0x' + h[3] + h[4]
        b = '0x' + h[5] + h[6]
      }
      return `${+r}, ${+g}, ${+b}`
    },
    generateRgbVar(name, color) {
      const colorRgb = this.hexToRgb(color)
      if (!colorRgb.includes('NaN')) {
        document.documentElement.style.setProperty(`--v-${name}-rgb`, colorRgb)
      }
    },
    createRgbVarsForThemes(themes) {
      for (const theme of Object.values(themes)) {
        for (const [key, colors] of Object.entries(theme)) {
          if (this.isObject(colors)) {
            for (const [colorKey, color] of Object.entries(colors)) {
              this.generateRgbVar(`${key}-${colorKey}`, color)
            }
          } else {
            this.generateRgbVar(key, colors)
          }
        }
      }
    },
    createAssetPath(type, page, img) {
      return require(`@/assets/${type}/${page}/${img}`)
    },
  },
})
