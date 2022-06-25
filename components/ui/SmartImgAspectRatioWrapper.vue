<template>
  <v-responsive
    class="ma-auto"
    :height="heightWidth.height"
    :width="heightWidth.width"
    :min-height="minHeightWidth.height"
    :min-width="minHeightWidth.width"
    :max-height="maxHeightWidth.height"
    :max-width="maxHeightWidth.width"
    :crop-bottom="cropBottom"
    :aspect-ratio="imgAspectRatio"
  >
    <UiSmartImgFileTypesWrapper
      :image-asset="imageAsset"
      :height="height"
      :width="width"
      :crop-bottom="cropBottom"
      :behind="behind"
      :alt="alt"
    >
      <template #svgImgComponent="{ imageAsset: imageAssetInner, altText }">
        <slot name="svgImgComponentOuter" :image-asset="imageAssetInner" :alt-text="altText" />
      </template>

      <template #imgComponent="{ imageAsset: imageAssetInner, altText, styleText }">
        <slot
          name="imgComponentOuter"
          :image-asset="imageAssetInner"
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
  data() {
    return {
      componentId: 'ui-smart-img-aspect-ratio-wrapper',
    }
  },
  computed: {
    imgHeight() {
      return this.hasFetchedImgHeightWidth && !this.imageAsset.isSvgImage
        ? this.imageAsset.responsiveImage.height
        : this.height
    },
    imgWidth() {
      return this.hasFetchedImgHeightWidth && !this.imageAsset.isSvgImage
        ? this.imageAsset.responsiveImage.width
        : this.width
    },
    imgAspectRatio() {
      return this.imgWidth / this.imgHeight
    },
    heightWidth() {
      return this.fillMissingHeightWidth(this.height, this.width)
    },
    maxHeightWidth() {
      return this.fillMissingHeightWidth(this.maxHeight, this.maxWidth)
    },
    minHeightWidth() {
      return this.fillMissingHeightWidth(this.minHeight, this.minWidth)
    },
    hasFetchedImgHeightWidth({ $config }) {
      return $config.optimizeImages
    },
    shouldFillMissingHeightWidth() {
      return this.hasFetchedImgHeightWidth && !this.cropBottom
    },
  },
  methods: {
    fillMissingHeightWidth(height, width) {
      const newHeight = height
        ? `calc(${height})`
        : width && this.shouldFillMissingHeightWidth
        ? this.calcUsingAspectRatio(width, true)
        : null
      const newWidth = width
        ? `calc(${width})`
        : height && this.shouldFillMissingHeightWidth
        ? this.calcUsingAspectRatio(height, false)
        : null
      return { height: newHeight, width: newWidth }
    },
    calcUsingAspectRatio(cssString, division) {
      if (cssString.startsWith('calc(') && cssString.endsWith(')')) {
        cssString = cssString.substring(4)
      }
      return `calc(${cssString} ${division ? '/' : '*'} ${this.imgAspectRatio})`
    },
  },
}
</script>
