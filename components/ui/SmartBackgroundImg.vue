<template>
  <div style="">
    <div
      v-if="imageAsset.isSvgImage"
      class="lazyload fill-height"
      :data-bgset="imageAsset.optimizedImagePath"
      data-sizes="auto"
      :style="fullCoverStyle"
    ></div>
    <div
      v-if="!imageAsset.isSvgImage"
      class="lazyload fill-height"
      :data-bgset="`${imageAsset.responsiveWebpImage.srcSet} [type: image/webp] | ${imageAsset.responsiveImage.srcSet}`"
      data-sizes="auto"
      :style="fullCoverStyle"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    imageAsset: { type: Object, required: true },
  },
  data() {
    return {
      fullCoverStyle:
        'background-position: center center; ' +
        'position: absolute; ' +
        'background-size: cover; ' +
        'width: 100%;' +
        'object-fit: contain;' +
        'z-index: -1',
    }
  },
  computed: {
    altText() {
      return this.alt ? this.alt : this.imageAsset.filename
    },
  },
}
</script>
