<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 24 : 2"
      outlined
      shaped
      width="380px"
      height="586px"
      :href="card.services[card.services.length - 1].link"
      :class="hover ? 'zoom' : 'notzoom'"
      class="py-4 px-4 mx-auto transition-swing"
      ><div>
        <v-responsive height="170" class="pt-3 px-1">
          <v-row no-gutters class="fill-height pa-0">
            <v-col cols="12" class="pa-0">
              <UiSmartImg
                v-if="card.logo"
                contain
                :image-asset="
                  $getImageAssetObject('images', card.logo[0], card.logo[1])
                "
                max-height="75"
                class="ma-auto"
              />
              <h2
                v-else
                class="text-h5 text-center font-weight-black ma-auto"
                v-text="card.title"
              ></h2>
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
                  v-for="(feature, ik) in card.features"
                  :key="`feature-${ik}`"
                  dense
                >
                  <v-list-item-icon>
                    <v-icon class="grey--text-2">
                      {{ feature.icon }}
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
                :class="
                  card.services.length == 1
                    ? 'justify-end'
                    : 'justify-space-between'
                "
              >
                <v-col
                  v-for="(service, s_index) in card.services"
                  :key="'s_' + cardId + '_' + s_index"
                  cols="auto"
                  class="pa-0 ma-0"
                  align-self="end"
                >
                  <UiStyledButton
                    :id="'btn_' + cardId + '_' + s_index"
                    class="text-weight-light"
                    :href="service.link"
                    :text="service.text"
                    :do-hover="hover && s_index + 1 == card.services.length"
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
    cardId: {
      type: Number,
      required: true,
    },
    card: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.zoom {
  transform: scale(1.025) translate(0, -10px);
  transition: transform 0.2s;
}
.notzoom {
  transition: transform 0.2s;
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
