<template>
  <section
    :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
    class="py-16 fill-height"
  >
    <v-row :id="titleId" class="px-8 pb-4">
      <SectionsMainTitle :title="title" :ingress="ingress" :info="info"
    /></v-row>
    <v-row fill-height class="pa-0 px-8" justify="left">
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
            width="380px"
            height="614px"
            :href="card.services[card.services.length - 1].link"
            :class="hover ? 'zoom' : 'notzoom'"
            class="py-4 px-6 mx-auto transition-swing"
          >
            <v-responsive height="170" class="pt-3 px-1">
              <v-row
                no-gutters
                class="fill-height pa-0"
                align="content-space-between"
              >
                <v-col cols="12" class="pa-0">
                  <v-img
                    v-if="card.logo"
                    contain
                    :src="
                      createAssetPath(
                        'illustrations',
                        card.logo[0],
                        card.logo[1]
                      )
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
                <v-col cols="12" class="pa-0">
                  <h3 class="text-h6 text-center font-weight-bold mx-8">
                    {{ card.subtitle }}
                  </h3>
                </v-col>
              </v-row>
            </v-responsive>
            <v-responsive height="408" class="pt-5 pb-3 px-1">
              <v-row
                no-gutters
                class="fill-height"
                align="content-space-between"
              >
                <v-col cols="12">
                  <v-list class="">
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
                <v-col cols="12" class="simplebutton">
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
                      :key="'s_' + c_index + '_' + s_index"
                      cols="auto"
                      class="pa-0 ma-0"
                      align-self="end"
                    >
                      <UiStyledButton
                        :id="'btn_' + c_index + '_' + s_index"
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
