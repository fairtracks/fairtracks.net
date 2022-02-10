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
        class="lazyload fill-height cover-background"
        :data-bgset="imageAsset.optimizedImagePath"
        data-sizes="auto"
        :alt="altText"
      />
    </template>
    <template #imgComponent="{ imageAsset, altText }">
      <div
        class="lazyload fill-height attach-classes cover-background"
        :data-bgset="`${imageAsset.responsiveWebpImage.srcSet} [type: image/webp] | ${imageAsset.responsiveImage.srcSet}`"
        data-sizes="auto"
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
  },
}
</script>

<style scoped>
.cover-background {
  background-size: cover;
  background-position: center center;
}
</style>
