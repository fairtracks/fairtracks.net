<template>
  <v-row no-gutters fill-height align-self="center">
    <v-col v-if="buttonToRight" :cols="$vuetify.breakpoint.smAndUp ? 10 : 8">
      <div
        class="text-lg-h3 text-md-h4 mb-3 text-sm-h5 text-h6 font-weight-black"
      >
        {{ carousel.heading }}
      </div>
      <p class="mb-5 text-md-body-1 text-sm-body-2 text-caption">
        {{ carousel.subHeading }}
      </p>
    </v-col>
    <v-col v-if="buttonToRight" :cols="$vuetify.breakpoint.smAndUp ? 2 : 4">
      <UiStyledButton
        :href="carousel.href"
        :text="'More Info'"
        :x-large="$vuetify.breakpoint.mdAndUp"
      />
    </v-col>
    <v-col v-if="!buttonToRight" cols="12">
      <div class="text-md-h4 mb-3 text-sm-h5 text-h6 font-weight-black">
        {{ carousel.heading }}
      </div>
      <p
        class="text-md-body-1 text-sm-body-2 text-caption"
        :class="
          $vuetify.breakpoint.mdAndUp
            ? 'mb-5'
            : $vuetify.breakpoint.smAndUp
            ? 'mb-3'
            : 'mb-2'
        "
      >
        {{ carousel.subHeading }}
      </p>
      <UiStyledButton
        :href="carousel.href"
        :text="'More Info'"
        :x-large="$vuetify.breakpoint.mdAndUp"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    // TODO: improve props validation
    buttonToRight: {
      type: Boolean,
    },
    carousel: {
      type: Object,
    },
  },
}
</script>
