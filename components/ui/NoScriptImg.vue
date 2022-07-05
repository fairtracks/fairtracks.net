<template>
  <noscript inline-template>
    <img
      loading="lazy"
      class="lazyload attach-classes transitioned"
      :src="imageAsset.optimizedImagePath"
      :height="imageAsset.responsiveImage.height"
      :width="imageAsset.responsiveImage.width"
      :alt="altText"
      :style="styleText"
    />
  </noscript>
</template>

<script>
export default {
  props: {
    imageAsset: { type: Object, required: true },
    altText: { type: String, default: '' },
    styleText: { type: String, default: '' },
  },
  data() {
    return {
      componentId: 'ui-no-script-img',
    }
  },
}
</script>
