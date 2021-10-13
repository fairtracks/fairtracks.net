<template>
  <section id="carousel">
    <v-carousel
      height="calc(100vh - 64px)"
      dark
      cycle
      class="simplebutton"
      show-arrows-on-hover
      draggable="true"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(carousel, carindex) in carouselsData"
        :key="carindex"
        class="gradient-fill-carousel"
        :src="isFullPageCarouselItem(carousel) ? carousel.src : ''"
        dark
      >
        <v-row
          v-if="isFullPageCarouselItem(carousel)"
          no-gutters
          class="fill-height"
        >
          <v-col cols="12" md="12" align-self="end" class="pa-12">
            <v-row class="fill-height">
              <v-col cols="10">
                <div
                  class="
                    text-lg-h3 text-md-h4
                    mb-3
                    text-sm-h5 text-h5
                    font-weight-black
                  "
                >
                  {{ carousel.heading }}
                </div>
                <p class="mb-5">{{ carousel.subHeading }}</p>
              </v-col>
              <v-col cols="2">
                <v-btn
                  :x-large="$vuetify.breakpoint.smAndUp"
                  class="my-3 secondary"
                  :href="carousel.href"
                >
                  More Info
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row v-else no-gutters class="fill-height">
          <v-col
            cols="12"
            md="6"
            :align-self="$vuetify.breakpoint.mdAndUp ? 'center' : 'top'"
          >
            <v-img
              :src="carousel.src"
              :height="
                $vuetify.breakpoint.mdAndUp
                  ? 'calc(100vh - 64px)'
                  : 'calc(50vh - 64px)'
              "
              :class="carousel.cropImgBottom ? 'cropImgBottom' : ''"
            />
          </v-col>
          <v-col cols="12" md="6" align-self="center" class="pa-12">
            <div class="text-md-h3 mb-3 text-sm-h4 text-h5 font-weight-black">
              {{ carousel.heading }}
            </div>
            <p class="mb-5">{{ carousel.subHeading }}</p>
            <v-btn
              :x-large="$vuetify.breakpoint.smAndUp"
              class="my-3 secondary"
              :href="carousel.href"
            >
              More Info
            </v-btn>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  props: {
    // TODO: improve props validation
    carouselsData: {
      type: Object,
    },
  },
  methods: {
    isFullPageCarouselItem(carouselItem) {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return carouselItem.sideBySide === false
      } else {
        return false
      }
    },
  },
}
</script>

<style>
.cropImgBottom .v-image__image--cover {
  background-position: center top !important;
}

.gradient-fill-carousel .v-responsive {
  background: var(--v-primary-base);
}

.gradient-fill-carousel .v-responsive__content {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.1)
  );
}
</style>
