<template>
  <v-card width="380" class="mx-auto">
    <v-responsive height="280">
      <v-row justify="center" no-gutters class="ma-2">
        <v-col cols="6">
          <UiZoomableImage
            :image-asset="
              $getImageAssetObject('materials', 'previews', card.previewImg)
            "
            max-height="300"
          />
        </v-col>
        <v-col cols="6">
          <v-card-title
            class="text-subtitle-1 text-left font-weight-bold card-title"
          >
            {{ card.title }}
          </v-card-title>
        </v-col>
      </v-row>
    </v-responsive>
  </v-card>
</template>

<script>
export default {
  props: {
    subSectionId: {
      type: String,
      required: true,
    },
    card: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.card-title {
  word-break: normal;
  line-height: 1.7rem !important;
}
</style>
