<template>
  <v-responsive max-width="180" min-width="180">
    <nuxt-link to="/"
      ><UiSmartImg
        contain
        :image-asset="
          $getImageAssetObject(
            'images',
            'logos',
            'FAIRtracks-logo-light-white.png'
          )
        "
      />
    </nuxt-link>
  </v-responsive>
</template>
