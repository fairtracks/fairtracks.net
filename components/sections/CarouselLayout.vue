<template>
  <section>
    <v-hover v-slot="{ hover }">
      <v-carousel
        id="carousel"
        v-tooltip="{
          content:
            'Tip: move mouse pointer away from carousel to resume auto-cycling of slides',
          delay: { show: 2000 },
          placement: 'top',
        }"
        height="calc(100vh - 64px)"
        dark
        :cycle="!hover"
        class="simplebutton"
        show-arrows-on-hover
        draggable="true"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(carousel, carindex) in carouselsData"
          :key="carindex"
          class="gradient-fill-carousel"
          :src="showFullPageImg(carousel) ? carousel.src : ''"
          dark
        >
          <v-row
            v-if="showFullPageImg(carousel)"
            no-gutters
            class="fill-height"
          >
            <v-col cols="12" md="12" align-self="end">
              <UiCarouselText
                :button-to-right="true"
                :carousel="carousel"
                class="fill-height"
                :class="
                  $vuetify.breakpoint.mdAndUp
                    ? 'px-12 pb-12'
                    : $vuetify.breakpoint.smAndUp
                    ? 'px-8 pb-8'
                    : 'px-4 pb-4'
                "
              />
            </v-col>
          </v-row>
          <v-row
            v-if="showLeftToRightImg(carousel)"
            no-gutters
            class="fill-height"
          >
            <v-col cols="12" md="12" class="fill-height">
              <v-row no-gutters>
                <v-img
                  :max-height="
                    $vuetify.breakpoint.smAndUp
                      ? viewportHorizontal()
                        ? 'calc(66vh - 42px)'
                        : 'calc(75vh - 48px)'
                      : 'calc(50vh - 32px)'
                  "
                  :src="carousel.src"
                  :contain="containImage(carousel)"
                  align-self="start"
                  style="z-index: -1"
                  :class="carousel.topToBottomImg ? 'cropImgBottom' : null"
                />
              </v-row>
              <UiCarouselText
                :button-to-right="viewportHorizontal()"
                :carousel="carousel"
                :class="
                  $vuetify.breakpoint.mdAndUp
                    ? 'pa-12'
                    : $vuetify.breakpoint.smAndUp
                    ? 'pa-8'
                    : 'pa-4'
                "
              />
            </v-col>
          </v-row>
          <v-row
            v-if="showTopToBottomImg(carousel)"
            no-gutters
            class="fill-height"
          >
            <v-col cols="6" align-self="center">
              <v-img
                :src="carousel.src"
                :max-height="'calc(100vh - 64px)'"
                max-width="100vw"
                :class="carousel.topToBottomImg ? 'cropImgBottom' : null"
                style="z-index: -1"
              />
            </v-col>
            <v-col
              cols="6"
              align-self="center"
              :class="$vuetify.breakpoint.mdAndUp ? 'pa-12' : 'pa-4'"
            >
              <UiCarouselText :button-to-right="false" :carousel="carousel" />
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
      default: () => [],
    },
  },
  methods: {
    showFullPageImg(carouselItem) {
      return (
        this.viewportHorizontal() &&
        carouselItem.topToBottomImg &&
        carouselItem.leftToRightImg
      )
    },
    showLeftToRightImg(carouselItem) {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return !carouselItem.topToBottomImg || !this.viewportHorizontal()
      } else {
        return !this.viewportHorizontal()
      }
    },
    showTopToBottomImg(carouselItem) {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return (
          carouselItem.topToBottomImg &&
          !carouselItem.leftToRightImg &&
          this.viewportHorizontal()
        )
      } else {
        return this.viewportHorizontal()
      }
    },
    viewportHorizontal() {
      if (typeof window !== 'undefined') {
        return window.innerHeight < window.innerWidth
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
