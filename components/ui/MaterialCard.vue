<template>
  <v-card width="540" height="auto" class="mx-auto-center">
    <v-row justify="center" no-gutters class="ma-0">
      <v-responsive
        height="40"
        width="100%"
        :class="`gradient-material-header-${card.type
          .toLowerCase()
          .replace(' ', '-')} mx-0 px-0 mb-4`"
      >
        <v-overlay absolute opacity="0" z-index="3">
          <h5 class="text-h5 font-weight-black text-center">{{ card.type }}</h5>
        </v-overlay>
      </v-responsive>
      <v-responsive height="162" width="100%">
        <UiZoomableImage
          :image-asset="
            $getImageAssetObject('materials', 'previews', card.previewImg)
          "
          max-height="160px"
          width="100%"
          :dialog-buttons="card.dialogButtons"
          crop-bottom
          class="mx-4 thin-border"
        />
      </v-responsive>
      <v-card-title
        class="text-subtitle-1 text-center font-weight-bold card-title px-4 py-5"
      >
        {{ card.title }}
      </v-card-title>
      <v-responsive height="48" width="100%">
        <v-card-text class="px-4 py-0">
          {{ card.description }}
        </v-card-text>
      </v-responsive>
      <v-responsive height="64" width="100%">
        <v-list class="transparent pa-0" max-width="100%">
          <v-list-item
            v-for="(infoItem, index) in card.infoItems"
            :key="'c_' + index"
          >
            <v-list-item-icon class="my-5">
              <v-icon
                :color="$vuetify.theme.dark ? 'accent' : 'primary'"
                v-text="infoItem.icon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-wrap" v-text="infoItem.text" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-responsive>
    </v-row>
    <v-card-actions class="pa-4 pt-0">
      <v-col cols="12" align-self="end" class="pa-0">
        <v-row
          no-gutters
          :class="
            card.cardButtons.length == 1
              ? 'justify-start'
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
              :href="button.href"
              :to="button.to"
              :text="button.text"
              :icon="button.icon"
              small
            />
            {{ button.to }}
          </v-col>
        </v-row>
      </v-col></v-card-actions
    >
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

<style>
.card-title {
  word-break: normal;
  line-height: 1.7rem !important;
}

.gradient-material-header-publication > .v-responsive__content {
  background: linear-gradient(
    to bottom,
    var(--v-primary-lighten3),
    var(--v-primary-lighten1)
  );
}

.gradient-material-header-poster > .v-responsive__content {
  background: linear-gradient(
    to bottom,
    var(--v-accent-base),
    var(--v-anchor-base)
  );
}

.gradient-material-header-presentation > .v-responsive__content {
  background: linear-gradient(
    to bottom,
    var(--v-secondary-lighten2),
    var(--v-secondary-base)
  );
}

.gradient-material-header-workshop > .v-responsive__content {
  background: linear-gradient(to bottom, #bdbdbd, #757575);
}

.gradient-material-header-blog-post > .v-responsive__content {
  background: linear-gradient(
    to bottom,
    var(--v-error-lighten2),
    var(--v-error-base)
  );
}
</style>
