<template>
  <UiSmartImgAspectRatioWrapper
    v-if="imageAsset.isSvgImage || $config.optimizeImages"
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
    <template #svgImgComponentOuter="{ imageAsset: imageAssetInner, altText }">
      <img
        loading="lazy"
        class="lazyload"
        :src="imageAssetInner.optimizedImagePath"
        :alt="altText"
      />
    </template>
    <template
      #imgComponentOuter="{ imageAsset: imageAssetInner, altText, styleText }"
    >
      <picture :data-iesrc="imageAssetInner.optimizedImagePath">
        <source
          :data-srcSet="imageAssetInner.responsiveWebpImage.srcSet"
          type="image/webp"
        />
        <source :data-srcSet="imageAssetInner.responsiveImage.srcSet" />
        <img
          loading="lazy"
          class="lazyload attach-classes hide-with-noscript"
          data-sizes="auto"
          :src="imageAssetInner.placeholderImagePath"
          :height="imageAssetInner.responsiveImage.height"
          :width="imageAssetInner.responsiveImage.width"
          :alt="altText"
          :style="styleText"
        />
        <UiNoScriptImg
          :image-asset="imageAssetInner"
          :alt-text="altText"
          :style-text="styleText"
        />
      </picture>
    </template>
  </UiSmartImgAspectRatioWrapper>
  <v-img
    v-else
    class="attach-classes"
    :src="imageAsset.optimizedImagePath"
    :alt="alt"
    :style="behind ? 'z-index:-1' : null"
    style="background-size: cover"
    :contain="!cropBottom"
    :height="height"
    :width="width"
    :min-height="minHeight"
    :min-width="minWidth"
    :max-height="maxHeight"
    :max-width="maxWidth"
    position="center top"
  />
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
