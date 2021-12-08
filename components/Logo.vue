<template>
  <nuxt-link
    to="/"
    contain
    height="100%"
    :aspect-ratio="1532 / 480"
    tag="img"
    :src="
      createAssetPath(
        'illustrations',
        'logos',
        'FAIRtracks-logo-light-white.png'
      )
    "
  />
</template>
