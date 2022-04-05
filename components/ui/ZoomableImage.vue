<template>
  <div>
    <v-hover v-slot="{ hover }">
      <div
        class="image-box"
        :class="hover ? 'image-hover' : null"
        @click="showDialog = true"
      >
        <v-overlay absolute opacity="0">
          <v-icon x-large color="black" style="transition: all 0.3s">
            {{ mdiMagnifyExpand }}</v-icon
          >
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
    />
  </div>
</template>

<script>
import { mdiMagnifyExpand } from '@mdi/js'

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
      mdiMagnifyExpand,
    }
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

.image-box .attach-classes {
  transition: all 0.3s;
  display: block;
  transform: scale(1);
}

.image-hover .attach-classes {
  max-width: 100%;
  transform: scale(1.1);
  opacity: 0.5;
}

.image-box .v-icon {
  transition: all 0.3s;
  display: block;
  opacity: 0;
}

.image-hover .v-icon {
  opacity: 0.25;
}
</style>
