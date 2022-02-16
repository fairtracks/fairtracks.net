<template>
  <UiSmartImgAspectRatioWrapper
    :image-asset="imageAsset"
    :height="height"
    :width="width"
    :min-height="minHeight"
    :min-width="minWidth"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :crop-bottom="cropBottom"
    :behind="behind"
    :alt="alt"
  >
    <template #svgImgComponentOuter="{ imageAsset, altText }">
      <img
        class="lazyload"
        :src="imageAsset.optimizedImagePath"
        :alt="altText"
      />
    </template>
    <template #imgComponentOuter="{ imageAsset, altText, styleText }">
      <picture :data-iesrc="imageAsset.optimizedImagePath">
        <source
          :data-srcSet="imageAsset.responsiveWebpImage.srcSet"
          type="image/webp"
        />
        <source :data-srcSet="imageAsset.responsiveImage.srcSet" />
        <img
          class="lazyload attach-classes"
          data-sizes="auto"
          :src="imageAsset.placeholderImagePath"
          :width="imageAsset.responsiveImage.width"
          :height="imageAsset.responsiveImage.height"
          :alt="altText"
          :style="styleText"
        />
      </picture>
    </template>
  </UiSmartImgAspectRatioWrapper>
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
}
</script>
