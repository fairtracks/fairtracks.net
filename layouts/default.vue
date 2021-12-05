<template>
  <v-app light>
    <siteHeader />
    <v-main>
      <nuxt />
    </v-main>
    <Notification />
    <siteFooter />
  </v-app>
</template>

<script>
import siteHeader from '~/components/siteHeader.vue'
import siteFooter from '~/components/siteFooter.vue'

export function isObject(arg) {
  return Object.prototype.toString.call(arg) === '[object Object]'
}

// Modified from: https://github.com/vuetifyjs/vuetify/issues/9282#issuecomment-735378004

export const hexToRgb = (h) => {
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
}

export const generateRgbVar = (name, color) => {
  const colorRgb = hexToRgb(color)
  if (!colorRgb.includes('NaN')) {
    document.documentElement.style.setProperty(`--v-${name}-rgb`, colorRgb)
  }
}

export const createRgbVarsForThemes = (themes) => {
  for (const theme of Object.values(themes)) {
    for (const [key, colors] of Object.entries(theme)) {
      if (isObject(colors)) {
        for (const [colorKey, color] of Object.entries(colors)) {
          generateRgbVar(`${key}-${colorKey}`, color)
        }
      } else {
        generateRgbVar(key, colors)
      }
    }
  }
}

export default {
  components: {
    siteHeader,
    siteFooter,
  },
  // head() {
  //   return {
  //     script: [
  //       {
  //         src: 'https://www.googletagmanager.com/gtag/js?id=G-0DYDMZEYDZ',
  //       },
  //     ],
  //   }
  // },
  mounted() {
    createRgbVarsForThemes(this.$vuetify.theme.themes)
  },
}
</script>

<style></style>
