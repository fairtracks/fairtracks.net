<template>
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
      max-width="180"
    />
  </nuxt-link>
</template>
