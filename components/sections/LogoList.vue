<template>
  <section>
    <v-row no-gutters class="ma-0 pt-16">
      <UiMinorTitle :title="title" />
      <v-col cols="12">
        <v-responsive
          :aspect-ratio="$vuetify.breakpoint.mdAndUp ? 0.35 : 0.7"
          max-height="1000"
        >
          <v-row
            class="ma-0 pt-0 fill-height d-flow align-content-space-around"
          >
            <v-col
              v-for="(logo, i) in logos"
              :key="logo"
              cols="6"
              class="pa-8 my-auto"
            >
              <UiSmartImg
                :image-asset="$getImageAssetObject('images', 'logos', logo)"
                contain
                max-width="200"
                class="ma-auto"
              />
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    logos: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
