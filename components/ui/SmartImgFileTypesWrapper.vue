<template>
  <div
    v-if="imageAsset.isSvgImage"
    class="img-container contain-width"
    :class="(cropBottom ? 'auto-height' : 'contain-height').concat(' absolute')"
    :height="height"
    :width="width"
    :style="behindStyle"
  >
    <slot name="svgImgComponent" :image-asset="imageAsset" :alt-text="altText" />
  </div>
  <div
    v-else
    class="slot-img-container slot-contain-height slot-contain-width"
    :class="
      `${cropBottom ? 'slot-auto-height' : 'slot-contain-height'}` +
      `${$config.optimizeImages ? ' slot-absolute' : ''}`
    "
  >
    <slot
      name="imgComponent"
      :image-asset="imageAsset"
      :alt-text="altText"
      :style-text="behindStyle"
    />
  </div>
</template>

<script>
export default {
  props: {
    imageAsset: { type: Object, required: true },
    height: { type: String, default: null },
    width: { type: String, default: null },
    minHeight: { type: String, default: null },
    cropBottom: { type: Boolean, default: null },
    behind: { type: Boolean, default: false },
    alt: { type: String, default: '' },
  },
  computed: {
    altText() {
      return this.alt ? this.alt : this.imageAsset.filename
    },
    behindStyle() {
      return this.behind ? 'z-index:-1' : null
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
}

.absolute,
.slot-absolute .attach-classes {
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
.slot-auto-width .attach-classes {
  width: auto;
}
</style>
