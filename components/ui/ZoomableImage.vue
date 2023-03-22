<template>
  <div>
    <v-hover v-slot="{ hover }">
      <div class="image-box" :class="hover ? 'image-hover' : null" @click="showDialog = true">
        <v-overlay absolute opacity="0" style="z-index: 3">
          <UiSmartIcon name="magnify-expand" x-large color="black" style="transition: all 0.3s" />
        </v-overlay>

        <UiSmartImg
          :image-asset="imageAsset"
          :height="height"
          :width="width"
          :min-height="minHeight"
          :min-width="minWidth"
          :max-height="maxHeight"
          :max-width="maxWidth"
          :crop-bottom="cropBottom"
          :alt="alt"
        />
      </div>
    </v-hover>
    <UiPopupDialog
      v-model="showDialog"
      max-width="80vw"
      :image-asset="imageAsset"
      :crop-bottom="cropBottom"
      :buttons="dialogButtons"
      :caption-html="captionHtml"
    />
  </div>
</template>

<script>
export default {
  props: {
    imageAsset: { type: Object, required: true },
    name: { type: String, default: null },
    height: { type: String, default: null },
    width: { type: String, default: null },
    minHeight: { type: String, default: null },
    minWidth: { type: String, default: null },
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
    cropBottom: { type: Boolean, default: null },
    captionHtml: { type: String, default: null },
    dialogButtons: {
      type: Array,
      default: () => {},
    },
    alt: { type: String, default: '' },
  },
  data() {
    return {
      componentId: 'ui-zoomable-imaged',
      showDialog: false,
    }
  },

  created() {
    this.$nuxt.$on('queryChanged', () => {
      if (this.$route.query.zoom === this.name) {
        this.showDialog = true
      } else {
        this.showDialog = false
      }
    })
    this.$nuxt.$emit('queryChanged')
  },
  activated() {
    this.$nuxt.$emit('queryChanged')
  },
  beforeDestroy() {
    // removes event listener
    this.$nuxt.$off('queryChanged')
  },
}
</script>

<style>
.image-box {
  box-sizing: border-box;
  position: relative;
  margin: auto;
  overflow: hidden;
}

.image-box .attach-classes.transitioned {
  display: block;
  transform: scale(1);
  transition: transform 0.3s, opacity 0.3s;
}

.image-hover .attach-classes.transitioned {
  max-width: 100%;
  transform: scale(1.05);
  opacity: 0.5 !important;
}

.image-box .v-icon {
  transition: transform 0.3s, opacity 0.3s;
  display: block;
  opacity: 0;
}

.image-hover .v-icon {
  opacity: 0.25;
}
</style>
