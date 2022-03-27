<template>
  <section class="primary white--text py-16">
    <v-container grid-list-sm fluid>
      <v-row>
        <v-col class="text-center">
          <h2 class="text-h4 text-md-h3 text-center font-weight-black">
            Overview for {{ overviewHeader }}
          </h2>
          <p class="text-center text-p px-10 py-4">
            {{ overviewIntroText }}
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="3"
          class="text-center"
        >
          <v-avatar
            size="100"
            class="white font-weight-bold primary--text mb-5"
            style="opacity: 1.15"
          >
            {{ card.title }}
          </v-avatar>
          <v-row
            v-for="(cardItem, itemIndex) in card.items"
            :key="itemIndex"
            class="text-center"
          >
            <v-col class="text-center">
              <h3>{{ cardItem.itemTitle }}</h3>
              <p>{{ cardItem.itemDescription }}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    overviewHeader: {
      type: String,
      required: true,
    },
    overviewIntroText: {
      type: String,
      default: '',
    },
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
</style>