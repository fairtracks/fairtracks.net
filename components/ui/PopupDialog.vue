<template>
  <v-dialog v-model="show" width="90vw">
    <v-card>
      <v-row no-gutters fill-height>
        <v-col cols="12">
          <v-overlay absolute opacity="0" class="full-overlay" z-index="1">
            <v-responsive height="100%">
              <v-row
                fill-height
                no-gutters
                align="start"
                justify="end"
                class="mb-auto"
              >
                <v-col cols="auto" class="pa-2 ma-0" align-self="start">
                  <div class="simplebutton">
                    <v-btn
                      class="pa-0"
                      width="24px"
                      height="24px"
                      min-width="24px"
                      :ripple="false"
                      @click="show = false"
                    >
                      <v-icon>{{ mdiClose }}</v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-responsive>
          </v-overlay>
          <UiSmartImg
            :image-asset="imageAsset"
            :alt="alt"
            max-height="calc(90vh - 180px)"
            :crop-bottom="cropBottom"
          />
        </v-col>
      </v-row>

      <v-card-actions>
        <v-row no-gutters justify="center">
          <v-col
            v-for="(button, b_index) in buttons"
            :key="'s_' + b_index"
            cols="auto"
            class="pa-2 ma-0"
            align-self="end"
          >
            <UiStyledButton
              :id="'btn_' + b_index"
              class="text-weight-light above-overlay"
              :href="button.link"
              :text="button.text"
              x-large
              @btn-click="button.link ? null : (show = false)"
            />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mdiClose } from '@mdi/js'

export default {
  props: {
    value: Boolean,
    imageAsset: { type: Object, required: true },
    alt: { type: String, default: '' },
    buttons: {
      type: Array,
      default: () => [],
    },
    cropBottom: { type: Boolean, default: false },
  },
  data() {
    return { mdiClose }
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style>
.full-overlay > .v-overlay__content {
  width: 100%;
  height: 100%;
}
.above-overlay > .v-btn {
  z-index: 2;
}
</style>
