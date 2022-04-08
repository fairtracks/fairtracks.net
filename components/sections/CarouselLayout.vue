<template>
  <section>
    <v-hover v-slot="{ hover }">
      <div ref="carousel-section" :key="componentKey">
        <v-carousel
          :id="carouselId"
          v-tooltip="{
            content: 'Tip: move mouse pointer away from carousel to resume auto-cycling of slides',
            delay: { show: 1000 },
            placement: 'bottom',
          }"
          dark
          :cycle="!hover"
          show-arrows-on-hover
          draggable="true"
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="(slideData, slideIndex) in slidesData"
            :key="slideIndex"
            class="gradient-fill-carousel"
            :class="$vuetify.theme.dark ? 'background-dark' : 'background-light'"
            :src="
              showFullPageImg(slideData) && !$config.optimizeImages
                ? slideData.img.optimizedImagePath
                : null
            "
            dark
          >
            <div v-show="showFullPageImg(slideData)" class="v-responsive fill-height">
              <UiSmartBackgroundImg v-show="$config.optimizeImages" :image-asset="slideData.img" />
              <v-row no-gutters class="fill-height">
                <v-col cols="12" align-self="end">
                  <UiCarouselText
                    :button-to-right="true"
                    :slide-data="slideData"
                    :carousel-width="componentWidth"
                    :class="
                      selectByComponentWidth({ md: 'px-12 pb-12', sm: 'px-8 pb-8' }, 'px-4 pb-4')
                    "
                  />
                </v-col>
              </v-row>
            </div>
            <v-row v-show="showLeftToRightImg(slideData)" no-gutters class="fill-height">
              <v-col cols="12">
                <UiSmartImg
                  :max-height="
                    selectByComponentWidth(
                      {
                        sm: componentHorizontal
                          ? calcComponentHeightAsString(0.6, 0)
                          : calcComponentHeightAsString(0.75, 0),
                      },
                      calcComponentHeightAsString(0.5, 0)
                    )
                  "
                  :image-asset="slideData.img"
                  align-self="start"
                  :crop-bottom="slideData.topToBottomImg ? true : null"
                  behind
                />
              </v-col>
              <v-col cols="12">
                <UiCarouselText
                  :button-to-right="componentHorizontal"
                  :slide-data="slideData"
                  :carousel-width="componentWidth"
                  :class="selectByComponentWidth({ md: 'pa-12', sm: 'pa-8' }, 'pa-4')"
                />
              </v-col>
            </v-row>
            <v-row v-show="showTopToBottomImg(slideData)" no-gutters class="fill-height">
              <v-col cols="6" align-self="center">
                <UiSmartImg
                  :image-asset="slideData.img"
                  :max-height="calcComponentHeightAsString(1)"
                  :class="slideData.topToBottomImg ? null : 'cropImgBottom'"
                  contain
                  behind
                />
              </v-col>
              <v-col
                cols="6"
                align-self="center"
                :class="selectByComponentWidth({ md: 'pa-12' }, 'pa-4')"
              >
                <UiCarouselText
                  :button-to-right="false"
                  :slide-data="slideData"
                  :carousel-width="componentWidth"
                />
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-hover>
  </section>
</template>

<script>
import componentRelativeGrid from '~/mixins/component-relative-grid'

export default {
  mixins: [componentRelativeGrid],
  props: {
    // TODO: improve props validation
    carouselId: {
      type: String,
      required: true,
    },
    slidesData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      componentRef: 'carousel-section',
    }
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
        if (this.componentHorizontal) {
          layoutType = 'fullPage'
        } else {
          layoutType = 'imgAtTop'
        }
      } else if (carouselItem.topToBottomImg) {
        if (this.componentHorizontal) {
          layoutType = 'sideBySide'
        } else {
          layoutType = 'imgAtTop'
        }
      } else if (carouselItem.leftToRightImg) {
        if (this.componentHorizontalAndVeryWide) {
          layoutType = 'sideBySide'
        } else {
          layoutType = 'imgAtTop'
        }
      }
      return layoutType
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

.background-light > .v-responsive {
  background: var(--v-primary-lighten1);
}

.background-dark > .v-responsive {
  background: var(--v-primary-base);
}

.gradient-fill-carousel > .v-responsive > .v-responsive__content {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), 70%, rgba(0, 0, 0, 0.2));
}
</style>
