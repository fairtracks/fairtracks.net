<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :id="cardId"
      :elevation="hover ? (down ? 6 : 12) : 2"
      outlined
      shaped
      width="380px"
      height="586px"
      :href="card.links[card.links.length - 1].href"
      :class="hover ? (down ? 'halfzoom' : 'zoom') : 'notzoom'"
      class="py-4 px-4 mx-auto transition-swing"
      @mousedown="setDownState()"
    >
      <div>
        <v-responsive height="170" class="pt-3 px-1">
          <v-row no-gutters class="fill-height pa-0">
            <v-col cols="12" class="pa-0">
              <UiSmartImg
                v-if="imageAsset"
                contain
                :image-asset="imageAsset"
                max-height="75px"
                class="ma-auto"
              />
              <h2
                v-else
                class="text-h5 text-center font-weight-black ma-auto"
                v-text="card.title"
              />
            </v-col>
            <v-col cols="12" class="pa-0" ali>
              <h3 class="text-h6 text-center font-weight-bold">
                {{ card.subtitle }}
              </h3>
            </v-col>
          </v-row>
        </v-responsive>
        <v-responsive height="380" class="pt-0 pb-3 px-1">
          <v-row no-gutters class="fill-height">
            <v-col align-self="center" cols="12">
              <v-list class="pa-0">
                <v-list-item
                  v-for="(feature, f_index) in card.features"
                  :key="`feature-${f_index}`"
                  dense
                >
                  <v-list-item-icon>
                    <div v-if="$fetchState.pending" class="grey--text-2">...</div>
                    <v-icon v-else class="grey--text-2">
                      {{ icons[feature.icon] }}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      class="text-wrap text-left grey--text-2"
                      v-text="feature.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" align-self="end">
              <v-row
                no-gutters
                :class="card.links.length === 1 ? 'justify-end' : 'justify-space-between'"
              >
                <v-col
                  v-for="(links, l_index) in card.links"
                  :key="'s_' + cardId + '_' + l_index"
                  cols="auto"
                  class="pa-0 ma-0"
                  align-self="end"
                >
                  <UiStyledButton
                    :id="'btn_' + cardId + '_' + l_index"
                    class="text-weight-light"
                    :href="links.href"
                    :text="links.text"
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
import FetchLogic from '~/mixins/fetch-logic'

export default {
  mixins: [FetchLogic],
  props: {
    cardId: {
      type: String,
      required: true,
    },
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
      fetchKeyBase: this.cardId, // Required for FetchLogin mixin
      down: false,
      icons: {},
    }
  },
  async fetch() {
    for (const feature of this.card.features) {
      const { [feature.icon]: icon } = await import('@mdi/js')
      this.icons[feature.icon] = icon
    }
  },
  fetchDelay: 0,

  mounted() {
    document.addEventListener('mouseup', this.setUpState)
  },
  destroyed() {
    window.removeEventListener('mouseup', this.setUpState)
  },
  methods: {
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
</style>
