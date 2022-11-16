<template>
  <v-responsive max-height="125px" min-height="75px" class="gradient-fill-header" :style="cssVars">
    <v-responsive :aspect-ratio="567 / 56.3" max-width="1258.9" class="mx-auto">
      <v-row class="ma-0" no-gutters>
        <v-col v-for="(imgSrc, i) in pageHeaderImages" :key="i" cols="4">
          <v-row no-gutters justify="center">
            <v-responsive
              width="33%"
              height="100%"
              :aspect-ratio="189 / 56.3"
              max-height="150px"
              min-height="75px"
              class="gradient-fill-header top-level"
              :style="cssVars"
            >
              <UiSmartBackgroundImg
                img-height="56.3"
                img-width="189"
                :image-asset="imgSrc"
                contain
                not-responsive
              />
            </v-responsive>
          </v-row>
        </v-col>
      </v-row>
    </v-responsive>
    <v-overlay
      v-show="$vuetify.theme.dark"
      absolute
      z-index="3"
      class="black"
      style="opacity: 0.3"
    />
    <v-overlay absolute opacity="0" z-index="3">
      <h1 class="text-md-h2 text-sm-h4 text-h5 font-weight-black text-center">
        {{ pageHeader }}
      </h1>
    </v-overlay>
  </v-responsive>
</template>

<script>
import createRgbVarsForThemes from '~/mixins/create-rgb-vars-for-themes'

export default {
  mixins: [createRgbVarsForThemes],
  props: {
    pageHeader: {
      type: String,
      required: true,
    },
    pageHeaderImages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      componentId: 'ui-page-header-banner',
    }
  },
}
</script>

<style>
.gradient-fill-header > .v-responsive__content {
  background: linear-gradient(
    to bottom,
    rgba(var(--v-accent-rgb), 0.9),
    rgba(var(--v-success-rgb), 0.9)
  );
}

.top-level {
  z-index: 2;
}

.banner {
  max-height: 150px;
}
</style>
