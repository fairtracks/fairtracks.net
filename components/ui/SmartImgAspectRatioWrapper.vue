<template>
  <v-responsive
    class="ma-auto"
    :min-height="minHeight"
    :min-width="minWidth"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :crop-bottom="cropBottom"
    :aspect-ratio="aspectRatio"
  >
    <UiSmartImgFileTypesWrapper
      :image-asset="imageAsset"
      :height="height"
      :width="width"
      :crop-bottom="cropBottom"
      :behind="behind"
      :alt="alt"
    >
      <template #svgImgComponent="{ imageAsset, altText }">
        <slot
          name="svgImgComponentOuter"
          :image-asset="imageAsset"
          :alt-text="altText"
        />
      </template>

      <template #imgComponent="{ imageAsset, altText, styleText }">
        <slot
          name="imgComponentOuter"
          :image-asset="imageAsset"
          :alt-text="altText"
          :style-text="styleText"
        />
      </template>
    </UiSmartImgFileTypesWrapper>
  </v-responsive>
</template>
<script>
export default {
  props: {
    imageAsset: { type: Object, required: true },
    height: { type: String, default: null },
    width: { type: String, default: null },
    minHeight: { type: String, default: null },
    minWidth: { type: String, default: null },
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
    cropBottom: { type: Boolean, default: null },
    behind: { type: Boolean, default: false },
    alt: { type: String, default: '' },
  },
  computed: {
    getHeight() {
      return this.imageAsset.isSvgImage
        ? this.height
        : this.imageAsset.responsiveImage.height
    },
    getWidth() {
      return this.imageAsset.isSvgImage
        ? this.width
        : this.imageAsset.responsiveImage.width
    },
    aspectRatio() {
      return this.imageAsset.isSvgImage
        ? this.getWidth / this.getHeight
        : this.getWidth / this.getHeight
    },
  },
}
</script>
