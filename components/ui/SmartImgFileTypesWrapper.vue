<template>
  <div
    v-if="notResponsive || imageAsset.isSvgImage"
    :class="getDynamicClasses(!imageAsset.isSvgImage, cropBottom, true)"
    :height="height"
    :width="width"
    :style="behindStyle"
  >
    <slot
      name="nonRespImgComponent"
      :image-asset="imageAsset"
      :alt-text="altText"
      :lazy-load="!notResponsive"
    />
  </div>
  <div v-else :class="getDynamicClasses(true, cropBottom, $config.optimizeImages)">
    <slot
      name="respImgComponent"
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
    notResponsive: { type: Boolean, default: false },
  },
  data() {
    return {
      componentId: 'ui-smart-img-file-types-wrapper',
    }
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
  methods: {
    getDynamicClasses(slottedClasses, cropBottom, optimizeImages) {
      const classes = []
      const pushFunc = slottedClasses
        ? (classes, classStr) => {
            classes.push('slot-' + classStr)
          }
        : (classes, classStr) => {
            classes.push(classStr)
          }

      pushFunc(classes, 'img-container')
      pushFunc(classes, 'contain-width')

      if (cropBottom) {
        pushFunc(classes, 'auto-height')
      } else {
        pushFunc(classes, 'contain-height')
      }

      if (optimizeImages) {
        pushFunc(classes, 'absolute')
      }

      return classes.join(' ')
    },
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
