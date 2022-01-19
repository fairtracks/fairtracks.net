<template>
  <v-responsive
    :aspect-ratio="aspectRatio"
    :height="height"
    :width="width"
    :min-height="minHeight"
    :min-width="minWidth"
    :max-height="maxHeight"
    :max-width="maxWidth"
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
      />
    </picture>
  </v-responsive>
</template>
<script>
export default {
  props: {
    alt: { type: String, default: '' },
    imageAsset: { type: Object, required: true },
    aspectRatio: { type: Number, default: null },
    height: { type: String, default: null },
    width: { type: String, default: null },
    minHeight: { type: String, default: null },
    minWidth: { type: String, default: null },
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
    contain: { type: Boolean, default: null },
  },
  computed: {
    altText() {
      return this.alt ? this.alt : this.imageAsset.filename
    },
  },
}
</script>
<style scoped>
img[data-sizes='auto'] {
  display: block;
  width: 100%;
  height: auto;
}
</style>
