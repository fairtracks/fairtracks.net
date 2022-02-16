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
        show-arrows-on-hover
        draggable="true"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(carousel, carindex) in carouselsData"
          :key="carindex"
          class="gradient-fill-carousel"
          dark
        >
          <div
            v-show="showFullPageImg(carousel)"
            class="v-responsive fill-height"
          >
            <UiSmartBackgroundImg :image-asset="carousel.img" />
            <v-row no-gutters class="fill-height">
              <v-col cols="12" md="12" align-self="end">
                <UiCarouselText
                  :button-to-right="true"
                  :carousel="carousel"
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
          </div>
          <v-row
            v-show="showLeftToRightImg(carousel)"
            no-gutters
            class="fill-height"
          >
            <v-col cols="12" md="12">
              <v-row no-gutters height="100%">
                <v-col cols="12">
                  <UiSmartImg
                    :max-height="
                      $vuetify.breakpoint.smAndUp
                        ? viewportHorizontal
                          ? 'calc(66vh - 42px)'
                          : 'calc(75vh - 48px)'
                        : 'calc(50vh - 32px)'
                    "
                    :image-asset="carousel.img"
                    align-self="start"
                    :crop-bottom="carousel.topToBottomImg ? true : null"
                    behind
                  />
                </v-col>
                <v-col cols="12">
                  <UiCarouselText
                    :button-to-right="viewportHorizontal"
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
            </v-col>
          </v-row>
          <v-row
            v-show="showTopToBottomImg(carousel)"
            no-gutters
            class="fill-height"
          >
            <v-col cols="6" align-self="center">
              <UiSmartImg
                :image-asset="carousel.img"
                :max-height="'calc(100vh - 64px)'"
                :class="carousel.topToBottomImg ? null : 'cropImgBottom'"
                contain
                behind
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
import { useWindowSize } from 'vue-window-size'

export default {
  props: {
    // TODO: improve props validation
    carouselsData: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { width, height } = useWindowSize()
    return {
      windowWidth: width,
      windowHeight: height,
    }
  },
  computed: {
    viewportHorizontal() {
      return this.windowHeight < this.windowWidth
    },
    viewportHorizontalAndVeryWide() {
      return 1.7 * this.windowHeight < this.windowWidth
    },
  },
  methods: {
    showFullPageImg(carouselItem) {
      return this._calcLayoutType(carouselItem) === 'fullPage'
    },
    showLeftToRightImg(carouselItem) {
      return this._calcLayoutType(carouselItem) === 'imgAtTop'
    },
    showTopToBottomImg(carouselItem) {
      return this._calcLayoutType(carouselItem) === 'sideBySide'
    },
    _calcLayoutType(carouselItem) {
      let layoutType = null
      if (carouselItem.topToBottomImg && carouselItem.leftToRightImg) {
        if (this.viewportHorizontal) {
          layoutType = 'fullPage'
        } else {
          layoutType = 'imgAtTop'
        }
      } else if (carouselItem.topToBottomImg) {
        if (this.viewportHorizontal) {
          layoutType = 'sideBySide'
        } else {
          layoutType = 'imgAtTop'
        }
      } else if (carouselItem.leftToRightImg) {
        if (this.viewportHorizontalAndVeryWide) {
          layoutType = 'sideBySide'
        } else {
          layoutType = 'imgAtTop'
        }
      }
      return layoutType
    },
    containImage(carouselItem) {
      if (!carouselItem.topToBottomImg) {
        console.log(carouselItem.heading)
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
  background: var(--v-primary-lighten1);
}

.gradient-fill-carousel > .v-responsive > .v-responsive__content {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    20%,
    rgba(0, 0, 0, 0.05)
  );
}
</style>
