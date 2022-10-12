<template>
  <v-responsive max-width="180" min-width="180">
    <nuxt-link to="/">
      <UiSmartImg
        :image-asset="
          $getImageAssetObject('images', 'logos', 'FAIRtracks-logo-light-white-320-[fixed].png')
        "
        img-height="100"
        img-width="320"
        not-responsive
        class="slot-absolute"
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
