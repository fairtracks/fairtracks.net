<template>
  <v-row no-gutters align-self="center">
    <v-col cols="12">
      <div
        class="font-weight-black"
        :class="
          selectByComponentWidthUnbound(
            {
              lg: buttonToRight ? 'text-h3' : 'text-h4',
              md: 'text-h4',
              sm: 'text-h5',
            },
            'text-h6',
            carouselWidth
          )
        "
      >
        {{ carousel.heading }}
      </div>
    </v-col>
    <v-col
      v-show="buttonToRight"
      :cols="selectByComponentWidthUnbound({ sm: 9 }, 8, carouselWidth, true)"
    >
      <div
        :class="
          selectByComponentWidthUnbound(
            { md: 'text-body-1', sm: 'text-body-2' },
            'text-caption',
            carouselWidth
          )
        "
      >
        {{ carousel.subHeading }}
      </div>
    </v-col>
    <v-col
      v-show="buttonToRight"
      class="pl-4"
      align-self="center"
      :cols="selectByComponentWidthUnbound({ sm: 3 }, 4, carouselWidth)"
    >
      <UiStyledButton
        :href="carousel.href"
        text="More Info"
        :x-large="
          selectByComponentWidthUnbound({ md: true }, false, carouselWidth)
        "
      />
    </v-col>
    <v-col v-show="!buttonToRight" cols="12">
      <p
        :class="
          selectByComponentWidthUnbound(
            { md: 'text-body-1 mb-5', sm: 'text-body-2 mb-3' },
            'text-caption mb-2',
            carouselWidth
          )
        "
      >
        {{ carousel.subHeading }}
      </p>
      <UiStyledButton
        :href="carousel.href"
        text="More Info"
        :x-large="
          selectByComponentWidthUnbound({ md: true }, false, carouselWidth)
        "
        class="ma-auto"
      />
    </v-col>
  </v-row>
</template>

<script>
import ComponentRelativeGridMethods from '~/mixins/component-relative-grid-methods'

export default {
  mixins: [ComponentRelativeGridMethods],
  props: {
    // TODO: improve props validation
    buttonToRight: {
      type: Boolean,
    },
    carousel: {
      type: Object,
      required: true,
    },
    carouselWidth: { type: Number },
  },
}
</script>
