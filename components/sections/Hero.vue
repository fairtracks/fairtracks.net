<template>
  <section id="hero">
    <v-carousel
      height="calc(100vh - 64px)"
      dark
      cycle
      show-arrows-on-hover
      draggable="true"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(carousel, carindex) in carouselsData"
        :key="carindex"
        :src="carousel.src"
        class="gradient-fill-carousel"
        dark
      >
        <v-container fill-height>
          <div style="max-width: 500px">
            <div class="text-md-h2 mb-3 text-sm-h3 text-h5 font-weight-black">
              {{ carousel.heading }}
            </div>
            <p class="mb-5">{{ carousel.subHeading }}</p>
            <v-btn :x-large="$vuetify.breakpoint.smAndUp" class="my-3 secondary"
              >More Info</v-btn
            >
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carouselsData: [
        {
          src: require('@/assets/illustrations/new_rirs_2021.jpeg'),
          heading: 'FAIRtracks: Recommended by ELIXIR',
          subHeading:
            'Feb. 15, 2021: The FAIRtracks ecosystem was selected as one of ' +
            'four new "Recommended Interoperability Resources by ELIXIR Europe!"',
        },
      ],
    }
  },
}
</script>

<style>
.gradient-fill-carousel .v-responsive__content {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3)
  );
}
</style>
