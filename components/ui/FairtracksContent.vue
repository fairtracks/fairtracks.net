<template>
  <div class="fairtracks-content" :class="$vuetify.theme.dark ? 'dark' : 'light'" :style="cssVars">
    <v-responsive max-width="180" min-width="180" class="pb-4">
      <UiSmartImg :image-asset="logoAssetObject" img-height="100" img-width="320" not-responsive />
    </v-responsive>
    <slot />
  </div>
</template>

<script>
import createRgbVarsForThemes from '~/mixins/create-rgb-vars-for-themes'

export default {
  mixins: [createRgbVarsForThemes],
  data() {
    return {
      componentId: 'ui-plain-logo',
    }
  },
  computed: {
    logoAssetObject() {
      if (this.$vuetify.theme.dark) {
        return this.$getImageAssetObject(
          'images',
          'logos',
          'FAIRtracks-logo-light-white-180-[fixed].png'
        )
      } else {
        return this.$getImageAssetObject(
          'images',
          'logos',
          'FAIRtracks-logo-transparent-180-[fixed].png'
        )
      }
    },
  },
}
</script>

<style>
.nuxt-content > .fairtracks-content.light {
  padding: 16px;
  background-color: rgba(var(--v-primary-rgb), 0.15);
}
.nuxt-content > .fairtracks-content.dark {
  padding: 16px;
  background-color: var(--v-primary-base);
}
</style>
