<template>
  <UiSmartImgFileTypesWrapper
    :image-asset="imageAsset"
    :height="height"
    :width="width"
    :min-height="minHeight"
    :alt="alt"
    behind
  >
    <template #svgImgComponent="{ imageAsset, altText }">
      <div
        class="lazyload fill-height center-background"
        :class="contain ? 'contain-background' : 'cover-background'"
        :data-bgset="imageAsset.optimizedImagePath"
        data-sizes="auto"
        :alt="altText"
      />
    </template>
    <template #imgComponent="{ imageAsset, altText, styleText }">
      <div
        class="lazyload fill-height attach-classes center-background"
        :class="contain ? 'contain-background' : 'cover-background'"
        :data-bgset="`${imageAsset.responsiveWebpImage.srcSet} [type: image/webp] | ${imageAsset.responsiveImage.srcSet}`"
        data-sizes="auto"
        :style="styleText"
        :alt="altText"
      />
    </template>
  </UiSmartImgFileTypesWrapper>
</template>

<script>
export default {
  props: {
    imageAsset: { type: Object, required: true },
    height: { type: String, default: null },
    width: { type: String, default: null },
    minHeight: { type: String, default: null },
    alt: { type: String, default: '' },
    contain: { type: Boolean, default: false },
  },
}
</script>

<style scoped>
.center-background {
  background-position: center center;
}

.cover-background {
  background-size: cover;
}

.contain-background {
  background-size: contain;
  background-color: white;
}
</style>
