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
      :img-height="imgHeight"
      :img-width="imgWidth"
      :crop-bottom="cropBottom"
      :behind="behind"
      :alt="alt"
      :not-responsive="notResponsive"
    >
      <template #nonRespImgComponent="{ imageAsset: imageAssetInner, altText, lazyLoad }">
        <slot
          name="nonRespImgComponentOuter"
          :image-asset="imageAssetInner"
          :alt-text="altText"
          :lazy-load="lazyLoad"
        />
      </template>

      <template #respImgComponent="{ imageAsset: imageAssetInner, altText, styleText }">
        <slot
          name="respImgComponentOuter"
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
    imgHeight: { type: String, default: null },
    imgWidth: { type: String, default: null },
    height: { type: String, default: null },
    width: { type: String, default: null },
    minHeight: { type: String, default: null },
    minWidth: { type: String, default: null },
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
    cropBottom: { type: Boolean, default: null },
    behind: { type: Boolean, default: false },
    alt: { type: String, default: '' },
    notResponsive: { type: Boolean, default: false },
  },
  data() {
    return {
      componentId: 'ui-smart-img-aspect-ratio-wrapper',
    }
  },
  computed: {
    assuredImgHeight() {
      return this.hasFetchedImgHeightWidth && !this.imageAsset.isSvgImage && !this.notResponsive
        ? this.imageAsset.responsiveImage.height
        : parseInt(this.imgHeight)
    },
    assuredImgWidth() {
      return this.hasFetchedImgHeightWidth && !this.imageAsset.isSvgImage && !this.notResponsive
        ? this.imageAsset.responsiveImage.width
        : parseInt(this.imgWidth)
    },
    imgAspectRatio() {
      return this.assuredImgWidth / this.assuredImgHeight
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
