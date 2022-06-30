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
    :not-responsive="notResponsive"
  >
    <template #nonRespImgComponentOuter="{ imageAsset: imageAssetInner, altText, lazyLoad }">
      <img
        :loading="lazyLoad ? 'lazy' : null"
        class="attach-classes"
        :class="lazyLoad ? 'lazyload' : null"
        :src="imageAssetInner.optimizedImagePath"
        :alt="altText"
      />
    </template>
    <template #respImgComponentOuter="{ imageAsset: imageAssetInner, altText, styleText }">
      <picture :data-iesrc="imageAssetInner.optimizedImagePath">
        <source :data-srcSet="imageAssetInner.responsiveWebpImage.srcSet" type="image/webp" />
        <source :data-srcSet="imageAssetInner.responsiveImage.srcSet" />
        <img
          loading="lazy"
          class="attach-classes hide-with-noscript blur-up"
          :class="waitUntilTransition() && transitioned ? 'transitioned lazyloaded' : 'lazyload'"
          data-sizes="auto"
          :height="imageAssetInner.responsiveImage.height"
          :width="imageAssetInner.responsiveImage.width"
          :alt="altText"
          :style="styleText"
        />
        <div
          class="full-size center-background attach-classes hide-with-noscript placeholder"
          :class="cropBottom ? 'cover-background' : 'contain-background'"
          :style="
            `background-image:url(&quot;${imageAssetInner.placeholderImagePath}&quot;); ` +
            ` ${styleText}`
          "
          :height="imageAssetInner.responsiveImage.height"
          :width="imageAssetInner.responsiveImage.width"
          :alt="altText"
        />
        <UiNoScriptImg :image-asset="imageAssetInner" :alt-text="altText" :style-text="styleText" />
      </picture>
    </template>
  </UiSmartImgAspectRatioWrapper>
  <v-img
    v-else
    class="attach-classes"
    :src="imageAsset.optimizedImagePath"
    :alt="alt"
    :style="behind ? 'z-index:-1' : null"
    :contain="!cropBottom"
    :height="height"
    :width="width"
    :min-height="minHeight"
    :min-width="minWidth"
    :max-height="maxHeight ? maxHeight : 'auto'"
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
    notResponsive: { type: Boolean, default: false },
  },
  data() {
    return {
      componentId: 'ui-smart-img',
      transitioned: false,
    }
  },
  methods: {
    waitUntilTransition() {
      if (this.transitioned) {
        return true
      } else {
        return new Promise((resolve) => {
          setTimeout(() => {
            this.transitioned = true
            resolve(true)
          }, 1000)
        })
      }
    },
  },
}
</script>

<style scoped>
.cover-background {
  background-size: cover;
}

.contain-background {
  background-size: contain;
  background-color: white;
}

.full-size {
  height: 100% !important;
  width: 100% !important;
}

.lazyload + .placeholder,
.lazyload + .placeholder {
  opacity: 1;
  visibility: visible;
}

.lazyloaded + .placeholder,
.transitioned + .placeholder {
  opacity: 0;
  transition: visibility 95ms ease 0s, opacity 95ms ease 0s;
  visibility: hidden;
}

img.lazyload:not([src]) {
  visibility: hidden;
}

img.blur-up.lazyload,
img.blur-up.lazyloading {
  opacity: 0;
  filter: blur(8px);
}

img.blur-up.lazyloaded:not(.transitioned) {
  opacity: 1;
  filter: blur(0);
  transition: filter 400ms ease 0s, opacity 20ms ease 0s;
}

img.blur-up.transitioned {
  opacity: 1;
}
</style>
