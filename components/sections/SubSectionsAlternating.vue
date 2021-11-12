<template>
  <section id="subsections-alternating">
    <v-row
      v-for="(subSection, index) in subSections"
      :id="subSection.slug"
      :key="index"
      no-gutters
      :class="{ 'flex-row-reverse': index % 2 === 1 }"
    >
      <v-col cols="12" md="6" align-self="center">
        <v-img
          max-height="400"
          width="100%"
          contain
          :src="createImgPath(page, subSection.img)"
        >
        </v-img>
      </v-col>
      <v-col
        cols="12"
        md="6"
        align-self="center"
        class="pa-lg-16 pa-md-10 px-4 py-16"
      >
        <v-container>
          <h2
            class="text-h3 text-center font-weight-black"
            v-text="subSection.title"
          />
          <h3
            class="text-h5 text-uppercase font-weight-thin text-center my-8"
            v-text="subSection.ingress"
          />
          <section>
            <nuxt-content :document="subSection" />
          </section>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: '',
    },
    subSections: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    createImgPath(page, img) {
      return require(`@/assets/illustrations/${page}/${img}`)
    },
  },
}
</script>

<style lang="scss">
.gradient-fill-header .v-responsive__content {
  background: linear-gradient(
    to bottom,
    rgba(var(--v-accent-rgb), 0.9),
    rgba(var(--v-anchor-rgb), 0.9)
  );
}

.nuxt-content p {
  padding: 16px;
}
</style>
