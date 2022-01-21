<template>
  <v-responsive
    :min-height="minHeightComp"
    :min-width="minWidthComp"
    :max-height="maxHeightComp"
    :max-width="maxWidthComp"
  >
    <!-- SVG images are not lazyloaded due to lacking placeholder, width and height-->
    <!--<img
        v-if="imageAsset.isSvgImage"
        class="lazyload"
        data-sizes="auto"
        :data-src="imageAsset.optimizedImagePath"
        :style="contain ? 'object-fit: contain' : null"
        :alt="altText"
      />-->
    <img
      v-if="imageAsset.isSvgImage"
      :src="imageAsset.optimizedImagePath"
      :style="contain ? 'object-fit: contain' : null"
      :alt="altText"
    />
    <picture
      v-if="!imageAsset.isSvgImage"
      :data-iesrc="imageAsset.optimizedImagePath"
      :style="contain ? 'object-fit: contain' : null"
    >
      <source
        :data-srcSet="imageAsset.responsiveWebpImage.srcSet"
        type="image/webp"
      />
      <source :data-srcSet="imageAsset.responsiveImage.srcSet" />
      <img
        class="lazyload"
        data-sizes="auto"
        :src="imageAsset.placeholderImagePath"
        :width="imageAsset.responsiveImage.width"
        :height="imageAsset.responsiveImage.height"
        :alt="altText"
        :style="cssVars"
      />
    </picture>
  </v-responsive>
</template>
<script>
export default {
  props: {
    imageAsset: { type: Object, required: true },
    minHeight: { type: String, default: null },
    minWidth: { type: String, default: null },
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
    contain: { type: Boolean, default: null },
    cover: { type: Boolean, default: null },
    alt: { type: String, default: '' },
  },
  computed: {
    height() {
      return this.imageAsset.isSvgImage
        ? null
        : this.imageAsset.responsiveImage.height
    },
    width() {
      return this.imageAsset.isSvgImage
        ? null
        : this.imageAsset.responsiveImage.width
    },
    aspectRatio() {
      return this.imageAsset.isSvgImage ? null : this.width / this.height
    },
    minHeightPixels() {
      return typeof this.minHeight === 'string'
        ? this.convertToPixels(this.minHeight)
        : null
    },
    minWidthPixels() {
      return typeof this.minWidth === 'string'
        ? this.convertToPixels(this.minWidth)
        : null
    },
    maxHeightPixels() {
      return typeof this.maxHeight === 'string'
        ? this.convertToPixels(this.maxHeight)
        : null
    },
    maxWidthPixels() {
      return typeof this.maxWidth === 'string'
        ? this.convertToPixels(this.maxWidth)
        : null
    },
    minHeightComp() {
      return this.calcDimensions(
        this.minHeightPixels,
        this.minWidthPixels,
        this.aspectRatio,
        true
      )
    },
    minWidthComp() {
      return this.calcDimensions(
        this.minWidthPixels,
        this.minHeightPixels,
        this.aspectRatio,
        false
      )
    },
    maxHeightComp() {
      return this.calcDimensions(
        this.maxHeightPixels,
        this.maxWidthPixels,
        this.aspectRatio,
        true
      )
    },
    maxWidthComp() {
      return this.calcDimensions(
        this.maxWidthPixels,
        this.maxHeightPixels,
        this.aspectRatio,
        false
      )
    },
    cssVars() {
      return {
        '--min-height':
          typeof this.minHeightComp === 'number'
            ? this.minHeightComp + 'px'
            : null,
        '--min-width':
          typeof this.minWidthComp === 'number'
            ? this.minWidthComp + 'px'
            : null,
        '--max-height':
          typeof this.maxHeightComp === 'number'
            ? this.maxHeightComp + 'px'
            : null,
        '--max-width':
          typeof this.maxWidthComp === 'number'
            ? this.maxWidthComp + 'px'
            : null,
        '--object-fill': this.contain
          ? 'contain'
          : this.cover
          ? 'cover'
          : 'fill',
      }
    },
    altText() {
      return this.alt ? this.alt : this.imageAsset.filename
    },
  },
  methods: {
    convertToPixels(cssValue) {
      if (typeof cssValue === 'string') {
        if (!isNaN(cssValue)) {
          cssValue = `${cssValue}px`
        }
        return require('to-px')(`${cssValue}`)
      }
    },

    calcDimensions(first, second, aspectRatio, divide) {
      if (typeof first === 'number') {
        return first
      } else if (
        typeof second === 'number' &&
        typeof aspectRatio === 'number'
      ) {
        if (divide) {
          return second / aspectRatio
        } else {
          return second * aspectRatio
        }
      } else {
        return null
      }
    },
  },
}
</script>
<style scoped>
img[data-sizes='auto'] {
  display: block;
  width: 100%;
  height: auto;
  min-height: var(--min-height, 0);
  min-width: var(--min-width, 0);
  max-height: var(--max-height, none);
  max-width: var(--max-width, none);
}
</style>
