<template>
  <v-row no-gutters justify="center" align-content="center">
    <v-col cols="12" align-self="center">
      <v-responsive
        :min-height="minHeight"
        :min-width="minWidth"
        :max-height="maxHeight"
        :max-width="maxWidth"
        :aspect-ratio="aspectRatio"
      >
        <UiSmartImgFileTypesWrapper
          :image-asset="imageAsset"
          :height="height"
          :width="width"
          :alt="alt"
        >
          <template #svgImgComponent="{ imageAsset, altText }">
            <slot
              name="svgImgComponent"
              :imageAsset="imageAsset"
              :alt="altText"
            />
          </template>

          <template #imgComponent="{ imageAsset, altText }">
            <slot name="imgComponent" :imageAsset="imageAsset" :alt="altText" />
          </template>
        </UiSmartImgFileTypesWrapper>
      </v-responsive>
    </v-col>
  </v-row>
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
