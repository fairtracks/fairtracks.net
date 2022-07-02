<template>
  <UiSmartImgFileTypesWrapper
    v-if="imageAsset.isSvgImage || $config.optimizeImages"
    :image-asset="imageAsset"
    :height="height"
    :width="width"
    :min-height="minHeight"
    :alt="alt"
    behind
    :not-responsive="notResponsive"
  >
    <template #nonRespImgComponent="{ imageAsset: imageAssetInner, styleText, lazyLoad }">
      <div
        class="fill-height center-background attach-classes hide-with-noscript"
        :class="getDynamicClasses(contain, lazyLoad)"
        :data-bgset="lazyLoad ? imageAssetInner.optimizedImagePath : null"
        :style="
          lazyLoad
            ? styleText
            : `background-image: url(&quot;${imageAsset.optimizedImagePath}&quot;); ${styleText}`
        "
      />
      <UiNoScriptBackgroundImg
        class="fill-height slot-center-background"
        :class="contain ? 'slot-contain-background' : 'slot-cover-background'"
        :image-asset="imageAssetInner"
        :style-text="styleText"
      />
    </template>
    <template #respImgComponent="{ imageAsset: imageAssetInner, styleText }">
      <div
        class="lazyload fill-height center-background attach-classes hide-with-noscript"
        :class="contain ? 'contain-background' : 'cover-background'"
        :data-bgset="`${imageAssetInner.responsiveWebpImage.srcSet} [type: image/webp] |
                      ${imageAssetInner.responsiveImage.srcSet}`"
        data-sizes="auto"
        :style="styleText"
      />
      <UiNoScriptBackgroundImg
        class="slot-center-background"
        :class="contain ? 'slot-contain-background' : 'slot-cover-background'"
        :image-asset="imageAssetInner"
        :style-text="styleText"
      />
    </template>
  </UiSmartImgFileTypesWrapper>
  <v-img
    v-else
    :src="imageAsset.optimizedImagePath"
    :alt="alt"
    style="z-index: -1"
    :contain="contain"
    :class="contain ? 'full-size' : 'auto-size'"
    :min-height="minHeight"
  />
</template>

<script>
export default {
  props: {
    imageAsset: { type: Object, required: true },
    height: { type: String, default: null },
    width: { type: String, default: null },
    minHeight: { type: String, default: null },
    alt: { type: String, default: '' },
    contain: { type: Boolean, default: false },
    notResponsive: { type: Boolean, default: false },
  },
  data() {
    return {
      componentId: 'ui-smart-background-img',
    }
  },

  methods: {
    getDynamicClasses(contain, lazyLoad) {
      const classes = []
      if (contain) {
        classes.push('contain-background')
      } else {
        classes.push('cover-background')
      }
      if (lazyLoad) {
        classes.push('lazyload')
      }
      return classes.join(' ')
    },
  },
}
</script>

<style>
.center-background,
.slot-center-background .attach-classes {
  background-position: center center;
}

.cover-background,
.slot-cover-background .attach-classes {
  background-size: cover;
}

.contain-background,
.slot-contain-background .attach-classes {
  background-size: contain;
  background-color: white;
}

.full-size {
  height: 100%;
  width: 100%;
}

.auto-size {
  height: auto;
  width: auto;
}
</style>
