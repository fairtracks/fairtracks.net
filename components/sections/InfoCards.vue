<template>
  <section
    :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
    class="py-16 fill-height"
  >
    <v-row :id="titleId" class="px-16 pb-8">
      <SectionsMainTitle :title="title" :ingress="ingress" :info="info"
    /></v-row>
    <v-row no-gutters fill-height class="pa-0 px-8 mx-auto">
      <v-col
        v-for="(card, c_index) in cards"
        :id="'c_' + c_index"
        :key="'c_' + c_index"
        cols="12"
        md="6"
        lg="4"
        xl="3"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 24 : 2"
            outlined
            shaped
            max-width="400px"
            min-width="300px"
            :href="card.services.at(-1).link"
            :class="hover ? 'zoom' : 'notzoom'"
            class="py-7 px-6 mx-auto transition-swing"
          >
            <v-col>
              <v-responsive class="ma-auto">
                <div class="pb-4">
                  <v-img
                    v-if="card.logo"
                    :src="
                      createAssetPath(
                        'illustrations',
                        card.logo[0],
                        card.logo[1]
                      )
                    "
                    max-width="200"
                    class="ma-auto"
                  />
                  <h3
                    v-else
                    class="text-h5 text-center font-weight-black ma-auto"
                    v-text="card.title"
                  ></h3>
                </div>
                <div class="text-h6 text-center font-weight-bold mx-8">
                  {{ card.subtitle }}
                </div>
              </v-responsive>
              <v-list class="py-6">
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
              <v-card-actions
                class="simplebutton pa-0"
                :class="
                  card.services.length == 1
                    ? 'justify-end'
                    : 'justify-space-between'
                "
              >
                <div
                  v-for="(service, s_index) in card.services"
                  :key="'s_' + c_index + '_' + s_index"
                >
                  <v-col class="pa-0 my-0 mx-auto">
                    <UiStyledButton
                      :id="'btn_' + c_index + '_' + s_index"
                      class="text-weight-light mt-1 mb-4"
                      :href="service.link"
                      :text="service.text"
                      :do-hover="hover && s_index + 1 == card.services.length"
                    />
                  </v-col></div
              ></v-card-actions>
            </v-col>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      default: '',
    },
    ingress: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
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
</style>
