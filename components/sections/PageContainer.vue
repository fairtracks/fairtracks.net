<template>
  <section
    :id="sectionId"
    :class="
      greyBackground
        ? $vuetify.theme.dark
          ? 'primary'
          : 'grey lighten-4'
        : null
    "
  >
    <UiPageHeaderBanner
      class="white"
      :page-header="pageHeader"
      :page-header-images="pageHeaderImages"
    />
    <v-container class="pa-0" fluid style="max-width: 1700px">
      <slot />
    </v-container>
  </section>
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
    greyBackground: { type: Boolean, default: false },
    sectionId: {
      type: String,
      default: null,
    },
  },
}
</script>
