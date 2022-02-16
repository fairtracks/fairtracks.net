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
            :dialog-buttons="card.dialogButtons"
            crop-bottom
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
    <v-card-actions>
      <v-col cols="12" align-self="end">
        <v-row
          no-gutters
          :class="
            card.cardButtons.length == 1
              ? 'justify-end'
              : 'justify-space-between'
          "
        >
          <v-col
            v-for="(button, b_index) in card.cardButtons"
            :key="'b_' + cardId + '_' + b_index"
            cols="auto"
            class="pa-0 ma-0"
            align-self="end"
          >
            <UiStyledButton
              :id="'btn_' + cardId + '_' + b_index"
              class="text-weight-light"
              :href="button.link"
              :text="button.text"
            />
          </v-col>
        </v-row> </v-col
    ></v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    subSectionId: {
      type: String,
      required: true,
    },
    cardId: {
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
