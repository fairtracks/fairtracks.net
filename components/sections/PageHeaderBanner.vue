<template>
  <section id="page-header-banner">
    <v-row class="ma-0">
      <v-img height="100%" width="100%" :aspect-ratio="567 / 56.3" contain>
        <v-row class="ma-0">
          <v-img
            v-for="(imgSrc, i) in pageHeaderImages"
            :key="i"
            width="33%"
            height="100%"
            :aspect-ratio="189 / 56.3"
            contain
            :src="imgSrc"
            class="gradient-fill-header"
            dark
          />
        </v-row>
        <v-overlay absolute opacity="0">
          <h1
            class="text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"
          >
            {{ pageHeader.toUpperCase() }}
          </h1>
        </v-overlay>
      </v-img>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    pageHeader: {
      type: String,
    },
    pageHeaderImages: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.gradient-fill-header .v-responsive__content {
  background: linear-gradient(
    to bottom,
    rgba(var(--v-accent-rgb), 0.9),
    rgba(var(--v-anchor-rgb), 0.9)
  );
}
</style>
