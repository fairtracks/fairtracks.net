<template>
  <v-responsive
    max-height="125px"
    min-height="75px"
    class="gradient-fill-header"
  >
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
              style="z-index: 2"
              class="gradient-fill-header"
            >
              <UiSmartBackgroundImg
                height="56.3"
                width="189"
                min-height="75"
                :image-asset="imgSrc"
                contain
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
      <h1 class="text-md-h2 text-sm-h3 text-h4 font-weight-black text-center">
        {{ pageHeader }}
      </h1>
    </v-overlay>
  </v-responsive>
</template>

<script>
export default {
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
}
</script>

<style>
.gradient-fill-header > .v-responsive__content {
  background: linear-gradient(
    to bottom,
    rgba(var(--v-accent-rgb), 0.9),
    rgba(var(--v-anchor-rgb), 0.9)
  );
}

.banner {
  max-height: 150px;
}
</style>
