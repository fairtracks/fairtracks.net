<template>
  <v-dialog
    v-model="show"
    :content-class="
      cropBottom ? 'size-from-contents max-height-95' : 'size-from-contents no-max-height'
    "
  >
    <v-card>
      <v-row no-gutters fill-height>
        <v-col cols="12">
          <v-overlay absolute opacity="0" class="full-overlay" z-index="1">
            <v-responsive height="100%">
              <v-row fill-height no-gutters align="start" justify="end" class="mb-auto">
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
                      <UiSmartIcon name="close" />
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-responsive>
          </v-overlay>
          <UiSmartImg
            :class="cropBottom ? 'mx-10 mt-10 overflow-y-auto thin-border above-overlay' : 'mt-4'"
            :image-asset="imageAsset"
            :alt="alt"
            :max-height="cropBottom ? 'calc(95vh - 151px)' : 'calc(95vh - 110px)'"
            :width="cropBottom ? 'calc(95vw - 82px)' : '95vw'"
            :crop-bottom="cropBottom"
          />
        </v-col>
        <v-col v-show="captionHtml" cols="12" class="px-10 overflow-y-auto">
          <figcaption>
            <p class="body-2 font-italic text-center pt-8 pb-2" v-html="captionHtml" />
          </figcaption>
        </v-col>
      </v-row>

      <v-card-actions v-show="buttons.length > 0">
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
              :href="button.href"
              :to="button.to"
              :text="button.text"
              :icon="button.icon"
              x-large
              @btn-click="show = false"
            />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    imageAsset: { type: Object, required: true },
    alt: { type: String, default: '' },
    captionHtml: { type: String, default: null },
    buttons: {
      type: Array,
      default: () => [],
    },
    cropBottom: { type: Boolean, default: false },
  },
  data() {
    return {
      componentId: 'ui-popup-dialog',
    }
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

.above-overlay,
.above-overlay > .v-btn,
.above-overlay > .v-responsive__content {
  z-index: 2;
}

.size-from-contents:not(.v-dialog--fullscreen) {
  width: auto;
  overflow: hidden;
}

.no-max-height.v-dialog:not(.v-dialog--fullscreen) {
  max-height: none;
  margin: 0;
}

.max-height-95.v-dialog:not(.v-dialog--fullscreen) {
  max-height: 95%;
  margin: 0;
}

.thin-border {
  border: 1px solid lightgray;
}

.thin-border-bottom {
  border-bottom: 1px solid lightgray;
}
</style>
