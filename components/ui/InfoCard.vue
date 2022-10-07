<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :id="card.index"
      :elevation="hover ? (down ? 6 : 12) : 2"
      outlined
      shaped
      width="380px"
      height="500px"
      :class="hover ? (down ? 'halfzoom' : 'zoom') : 'notzoom'"
      class="mx-auto transition-swing pa-2"
      @mousedown="setDownState()"
      @click="openLink(card)"
    >
      <div>
        <v-responsive height="80" class="">
          <v-row no-gutters height="80" class="fill-height py-1">
            <v-col cols="12" class="py-0 px-2" align-self="center">
              <UiSmartImg
                v-if="card.logo"
                contain
                :image-asset="$getImageAssetObjectFromPathArray(card.logo.path)"
                max-height="60px"
                max-width="320px"
                class="ma-auto"
                :img-height="String(card.logo.dimensions.height)"
                :img-width="String(card.logo.dimensions.width)"
                not-responsive
              />
              <h2
                v-else
                class="text-h5 text-center font-weight-black ma-auto"
                v-text="card.title"
              />
            </v-col>
          </v-row>
        </v-responsive>
        <v-responsive height="72" class="py-1 px-2" style="align-items: center">
          <h3 class="text-h6 text-center text- font-weight-bold" style="vertical-align: middle">
            {{ card.subtitle }}
          </h3>
        </v-responsive>
        <v-responsive height="282" class="py-1 px-1">
          <v-list class="pa-0 d-flex flex-column" height="100%">
            <v-list-item
              v-for="(feature, f_index) in card.features"
              :key="`feature-${f_index}`"
              :class="f_index == card.features.length ? 'mt-auto' : 'my-auto'"
              dense
            >
              <v-list-item-icon>
                <UiSmartIcon :name="feature.icon" class="grey--text-2" />
              </v-list-item-icon>
              <v-list-item-content class="py-1">
                <v-list-item-title
                  class="text-wrap text-left grey--text-2"
                  v-text="feature.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-responsive>
        <v-responsive height="50" class="py-1 px-1">
          <v-row>
            <v-col cols="12" align-self="end">
              <v-row
                no-gutters
                :class="card.links.length === 1 ? 'justify-end' : 'justify-space-between'"
              >
                <v-col
                  v-for="(link, l_index) in card.links"
                  :key="'s_' + card.index + '_' + l_index"
                  cols="auto"
                  class="pa-0 ma-0"
                  align-self="end"
                >
                  <UiStyledButton
                    :id="'btn_' + card.index + '_' + l_index"
                    class="text-weight-light"
                    :href="link.href"
                    :text="link.text"
                    :do-hover="hover && l_index + 1 == card.links.length"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-responsive>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    imageAsset: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      componentId: 'ui-info-card',
      down: false,
    }
  },

  mounted() {
    document.addEventListener('mouseup', this.setUpState)
  },
  destroyed() {
    window.removeEventListener('mouseup', this.setUpState)
  },
  methods: {
    openLink(card) {
      if (process.client) {
        window.open(card.links[card.links.length - 1].href, '_blank')
      }
    },
    setDownState() {
      this.down = true
    },
    setUpState() {
      this.down = false
    },
  },
}
</script>

<style scoped>
.zoom {
  transform: scale(1.0125) translate(0, -5px);
  transition: transform 0.1s;
}
.halfzoom {
  transform: scale(1.00625) translate(0, -2.5px);
  transition: transform 0.1s;
}
.notzoom {
  transition: transform 0.1s;
}
.text-h6 {
  line-height: 1.7rem !important;
}
.v-list-item__icon {
  align-self: center;
  align-items: center;
}
.v-list-item__content {
  align-self: center;
  align-items: center;
}
.v-list-item {
  flex: 0;
}
</style>
