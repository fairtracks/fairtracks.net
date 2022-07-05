<template>
  <UiSmartImgAspectRatioWrapper
    v-if="imageAsset.isSvgImage || $config.optimizeImages"
    :image-asset="imageAsset"
    :img-height="imgHeight"
    :img-width="imgWidth"
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
        v-if="imageAssetInner.isSvgImage"
        :loading="lazyLoad ? 'lazy' : null"
        :class="lazyLoad ? 'lazyload' : null"
        :src="!lazyLoad ? imageAssetInner.optimizedImagePath : null"
        :data-src="lazyLoad ? imageAssetInner.optimizedImagePath : null"
        :alt="altText"
      />
      <picture v-else>
        <source :srcset="imageAssetInner.optimizedWebpImagePath" type="image/webp" />
        <source
          :srcset="imageAssetInner.optimizedImagePath"
          :type="getResponsiveImageType(imageAssetInner.optimizedImagePath)"
        />
        <img
          class="attach-classes transitioned"
          :src="imageAssetInner.optimizedImagePath"
          :height="imgHeight"
          :width="imgWidth"
          :alt="altText"
        />
      </picture>
    </template>
    <template #respImgComponentOuter="{ imageAsset: imageAssetInner, altText, styleText }">
      <picture :data-iesrc="imageAssetInner.optimizedImagePath">
        <source :data-srcSet="imageAssetInner.responsiveWebpImage.srcSet" type="image/webp" />
        <source
          :data-srcSet="imageAssetInner.responsiveImage.srcSet"
          :type="getResponsiveImageType(imageAssetInner.responsiveImage.src)"
        />
        <img
          :id="uniqueId"
          loading="lazy"
          class="attach-classes hide-with-noscript blur-up lazyload"
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
    class="attach-classes transitioned"
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
import { v4 as uuidv4 } from 'uuid'

export default {
  props: {
    imageAsset: { type: Object, required: true },
    imgHeight: { type: String, default: null },
    imgWidth: { type: String, default: null },
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
      uniqueId: uuidv4(),
      transitioned: false,
    }
  },
  computed: {},
  mounted() {
    const eventHandler = (event) => {
      const element = event.target
      if (element.classList.contains('blur-up') && element.id === this.uniqueId) {
        this.onLazyLoadedBlurUp(element)
      }
    }

    document.addEventListener('lazyloaded', eventHandler)
    this.$once('destroyed', () => {
      window.removeEventListener('lazyloaded', eventHandler)
    })
  },
  methods: {
    async onLazyLoadedBlurUp(element) {
      // async function isCached(src) {
      //   let cached = false
      //   if (!cached && 'caches' in window) {
      //     const imgCache = await window.caches.open('fairtracks-net-img-cache')
      //     const match = await imgCache.match(src)
      //     if (match) {
      //       cached = true
      //     }
      //     if (!cached) {
      //       imgCache.put(src, new Response('true')).then(() => {})
      //     }
      //   }
      //   return cached
      // }
      if (
        // (await isCached(element.currentSrc)) ||
        await this.waitUntilMethodIsTrue(this.blurUpImgIsTransitioned, element)
      ) {
        element.classList.add('transitioned')
      }
    },
    getResponsiveImageType(src) {
      let suffix = src.split('.').pop()
      if (suffix === 'jpg') {
        suffix = 'jpeg'
      }
      return `image/${suffix}`
    },
    async waitUntilMethodIsTrue(method, options) {
      const recursiveWait = (x) => {
        return (
          method(options) ||
          new Promise((resolve) => {
            if (x > 20) {
              return resolve(false)
            }
            setTimeout(() => {
              resolve(recursiveWait(++x || 1))
            }, 100)
          })
        )
      }
      if (await recursiveWait()) {
        return true
      }
      return false
    },
    blurUpImgIsTransitioned(element) {
      return window.getComputedStyle(element).getPropertyValue('font-size') === '1px'
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

.blur-up.lazyload + .placeholder,
.blur-up.lazyloading + .placeholder {
  opacity: 1;
  visibility: visible;
}

.blur-up.lazyloaded:not(.transitioned) + .placeholder {
  opacity: 0;
  transition: visibility 95ms ease 0s, opacity 95ms ease 0s;
  visibility: hidden;
}

.blur-up.transitioned + .placeholder {
  opacity: 0;
  visibility: hidden;
}

img.lazyload:not([src]) {
  visibility: hidden;
}

img.blur-up.lazyload,
img.blur-up.lazyloading {
  opacity: 0;
  filter: blur(8px);
  font-size: 0;
}

img.blur-up.lazyloaded:not(.transitioned) {
  opacity: 1;
  filter: blur(0);
  font-size: 1px;
  transition: filter 400ms ease 0s, opacity 20ms ease 0s, font-size 400ms ease 0s;
}

img.blur-up.transitioned {
  opacity: 1;
  filter: blur(0);
  font-size: 1px;
}
</style>
