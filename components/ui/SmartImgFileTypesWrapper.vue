<template>
  <div :style="`min-height: ${minHeight}`">
    <div
      v-if="imageAsset.isSvgImage"
      class="img-container contain-height contain-width"
      :height="height"
      :width="width"
      :style="behind ? 'z-index:-1' : null"
    >
      <slot name="svgImgComponent" :imageAsset="imageAsset" :alt="altText" />
    </div>
    <div
      v-if="!imageAsset.isSvgImage"
      class="slot-img-container slot-contain-height slot-contain-width"
    >
      <slot name="imgComponent" :imageAsset="imageAsset" :alt="altText" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageAsset: { type: Object, required: true },
    height: { type: String, default: null },
    width: { type: String, default: null },
    minHeight: { type: String, default: null },
    alt: { type: String, default: '' },
    behind: { type: Boolean, default: false },
  },
  computed: {
    altText() {
      return this.alt ? this.alt : this.imageAsset.filename
    },
  },
  beforeMount() {
    if (this.imageAsset.isSvgImage) {
      if (this.height === null || this.width === null) {
        console.error(
          `SVG image file '${this.imageAsset.filename}' does not have complete dimension metadata
          (height: ${this.height}, width: ${this.width}).`
        )
      }
    } else if (this.height !== null || this.width !== null) {
      console.error(
        `Image file '${this.imageAsset.filename}' has hardcoded dimension metadata
          (height: ${this.height}, width: ${this.width}). Hardcoded dimension metadata should
          only be used for SVG files.`
      )
    }
  },
}
</script>

<style>
.img-container,
.slot-img-container .attach-classes {
  object-fit: contain;
  position: absolute;
}

.contain-height,
.slot-contain-height .attach-classes {
  height: 100%;
}

.auto-height,
.slot-auto-height .attach-classes {
  height: auto;
}

.contain-width,
.slot-contain-width .attach-classes {
  width: 100%;
}

.auto-width,
.slot-auto-height .attach-classes {
  height: auto;
}
</style>
