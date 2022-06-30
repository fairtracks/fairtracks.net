<template>
  <section>
    <v-row no-gutters class="ma-0 pt-16">
      <UiMinorTitle :title="title" />
      <v-col cols="12">
        <v-row class="ma-0 pt-0 fill-height d-flow align-content-space-around">
          <v-col
            v-for="(logo, i) in logos"
            :key="i"
            sm="6"
            md="12"
            lg="6"
            cols="12"
            class="px-16 py-8 px-sm-8 py-sm-16 px-md-16 py-md-8 px-lg-8 py-lg-16 my-auto"
          >
            <UiSmartImg
              :image-asset="$getImageAssetObject('images', 'logos', logo.filename)"
              contain
              max-width="200"
              :img-width="logo.width"
              :img-height="logo.height"
              class="ma-auto"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    logos: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      componentId: 'sections-logo-list',
    }
  },
}
</script>
