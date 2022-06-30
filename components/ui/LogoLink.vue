<template>
  <v-responsive max-width="180" min-width="180">
    <nuxt-link to="/">
      <UiSmartImg
        contain
        :image-asset="
          $getImageAssetObject('images', 'logos', 'FAIRtracks-logo-light-white-320.png')
        "
        not-responsive
      />
    </nuxt-link>
  </v-responsive>
</template>

<script>
export default {
  data() {
    return {
      componentId: 'ui-logo-link',
    }
  },
}
</script>
