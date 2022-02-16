<template>
  <div>
    <v-hover v-slot="{ hover }">
      <div
        class="image-box"
        :class="hover ? 'image-hover' : null"
        @click="showDialog = true"
      >
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
    minWidth: { type: String, default: null },
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
    cropBottom: { type: Boolean, default: null },
    dialogButtons: { type: Array, default: () => {} },
    alt: { type: String, default: '' },
  },
  data() {
    return {
      showDialog: false,
    }
  },
}
</script>

<style >
.image-box {
  box-sizing: border-box;
  position: relative;
  margin: auto;
  overflow: hidden;
}

.image-box img {
  transition: all 0.3s;
  display: block;
  transform: scale(1);
}

.image-hover img {
  max-width: 100%;
  transform: scale(1.1);
  opacity: 50%;
}
</style>
