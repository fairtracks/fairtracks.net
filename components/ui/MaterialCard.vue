<template>
  <v-card width="550" height="auto" class="mx-auto-center">
      <v-row justify="center" no-gutters class="ma-2">
    <v-responsive height="400">

          <UiZoomableImage
            :image-asset="
              $getImageAssetObject('materials', 'previews', card.previewImg)
            "
            max-height="200px"
            :dialog-buttons="card.dialogButtons"
            crop-bottom
          />
          <v-card-title
            class="text-subtitle-1 text-center font-weight-bold card-title"
          >
      {{ card.title }}
          </v-card-title>
          <v-card-text>
      {{ card.description }}
          </v-card-text>
        </v-responsive>
        <v-responsive height="100" width="100%">
          <v-list class="transparent pa-0" max-width="100%">
          <v-list-item
            v-for="(infoItem, index) in card.infoItems"
            :key="'c_' + index"
          >
            <v-list-item-icon>
              <v-icon :color="$vuetify.theme.dark ? 'accent' : 'primary'" v-text="infoItem.icon"/>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-wrap" v-text="infoItem.text"/>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-responsive>
      </v-row>
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
              :icon="button.icon"
              small
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
