<template>
  <v-row
    v-if="bottomAligned"
    no-gutters
    class="fill-height px-12 pb-12"
    align-self="end"
  >
    <v-col cols="10">
      <div
        class="text-lg-h3 text-md-h4 mb-3 text-sm-h5 text-h5 font-weight-black"
      >
        {{ carousel.heading }}
      </div>
      <p class="mb-5">{{ carousel.subHeading }}</p>
    </v-col>
    <v-col cols="2">
      <v-btn
        :x-large="$vuetify.breakpoint.smAndUp"
        class="ma-3 secondary"
        :href="carousel.href"
      >
        More Info
      </v-btn>
    </v-col>
  </v-row>
  <v-row
    v-else
    no-gutters
    align-self="center"
    :class="$vuetify.breakpoint.mdAndUp ? null : 'pa-12'"
  >
    <div class="text-md-h3 mb-3 text-sm-h4 text-h5 font-weight-black">
      {{ carousel.heading }}
    </div>
    <p class="mb-5">{{ carousel.subHeading }}</p>
    <v-btn
      :x-large="$vuetify.breakpoint.smAndUp"
      class="ma-3 secondary"
      :href="carousel.href"
    >
      More Info
    </v-btn>
  </v-row>
</template>

<script>
export default {
  props: {
    // TODO: improve props validation
    bottomAligned: {
      type: Boolean,
    },
    carousel: {
      type: Object,
    },
  },
}
</script>
