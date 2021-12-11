<template>
  <section>
    <v-row class="ma-0 pt-16">
      <div class="text-h4 font-weight-bold mb-5">
        {{ title }}
      </div>
    </v-row>
    <v-responsive
      :aspect-ratio="$vuetify.breakpoint.mdAndUp ? 0.35 : 0.7"
      max-height="1000"
    >
      <v-row class="ma-0 pt-0 fill-height d-flow align-content-space-around">
        <v-col
          v-for="(logo, i) in logos"
          :key="logo"
          cols="6"
          class="pa-8 my-auto"
        >
          <v-img
            :src="createAssetPath('illustrations', 'logos', logo)"
            contain
            max-width="200"
            class="ma-auto"
          />
        </v-col>
        <v-spacer />
      </v-row>
    </v-responsive>
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
