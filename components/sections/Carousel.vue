<template>
  <section>
    <v-hover v-slot="{ hover }">
      <v-carousel
        id="carousel"
        height="calc(100vh - 64px)"
        dark
        :cycle="!hover"
        interval="7000"
        class="simplebutton"
        show-arrows-on-hover
        draggable="true"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(carousel, carindex) in carouselsData"
          :key="carindex"
          class="gradient-fill-carousel"
          :src="hasFullPageImg(carousel) ? carousel.src : ''"
          dark
        >
          <v-row v-if="hasFullPageImg(carousel)" no-gutters class="fill-height">
            <v-col cols="12" md="12" align-self="end">
              <CarouselText :bottom-aligned="true" :carousel="carousel" />
            </v-col>
          </v-row>
          <v-row
            v-if="hasLeftToRightImg(carousel)"
            no-gutters
            class="fill-height"
          >
            <v-col cols="12" md="12" class="fill-height">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-img
                    :max-height="
                      $vuetify.breakpoint.mdAndUp
                        ? 'calc(66vh - 42px)'
                        : 'calc(50vh - 32px)'
                    "
                    :src="carousel.src"
                    :contain="containImage(carousel)"
                    align-self="start"
                    style="z-index: -1"
                    :class="carousel.topToBottomImg ? 'cropImgBottom' : null"
                  />
                </v-col>
              </v-row>
              <CarouselText
                :bottom-aligned="$vuetify.breakpoint.mdAndUp ? true : false"
                :carousel="carousel"
                class="pt-12"
              />
            </v-col>
          </v-row>
          <v-row
            v-if="hasTopToBottomImg(carousel)"
            no-gutters
            class="fill-height"
          >
            <v-col cols="12" md="6" align-self="center">
              <v-img
                :src="carousel.src"
                :max-height="'calc(100vh - 64px)'"
                max-width="100vw"
                :class="carousel.topToBottomImg ? 'cropImgBottom' : null"
                style="z-index: -1"
              />
            </v-col>
            <v-col cols="12" md="6" align-self="center" class="pa-12">
              <CarouselText :bottom-aligned="false" :carousel="carousel" />
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-hover>
  </section>
</template>

<script>
export default {
  props: {
    // TODO: improve props validation
    carouselsData: {
      type: Array,
    },
  },
  methods: {
    hasFullPageImg(carouselItem) {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return carouselItem.topToBottomImg && carouselItem.leftToRightImg
      } else {
        return false
      }
    },
    hasLeftToRightImg(carouselItem) {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return !carouselItem.topToBottomImg && carouselItem.leftToRightImg
      } else {
        return true
      }
    },
    hasTopToBottomImg(carouselItem) {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return carouselItem.topToBottomImg && !carouselItem.leftToRightImg
      } else {
        return false
      }
    },
    containImage(carouselItem) {
      if (!carouselItem.topToBottomImg) {
        return true
      } else {
        return null
      }
    },
  },
}
</script>

<style>
.cropImgBottom .v-image__image--cover {
  background-position: center top !important;
}

.gradient-fill-carousel > .v-responsive {
  background: var(--v-primary-base);
}

.gradient-fill-carousel > .v-responsive > .v-responsive__content {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.1)
  );
}
</style>
