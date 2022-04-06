<template>
  <section class="py-16" :style="cssVars">
    <v-container grid-list-sm fluid>
      <v-row>
        <v-col class="text-center">
          <h2 class="text-h4 text-md-h3 text-center font-weight-black">
            {{ header }}
          </h2>
          <p class="text-center text-p px-10 py-4">
            {{ introText }}
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="3" class="text-center">
          <v-avatar
            size="100"
            color="primary lighten-1"
            class="font-weight-bold mb-5"
            style="opacity: 1.15"
          >
            <span class="v-avatar-text">{{ card.title }}</span>
          </v-avatar>
          <v-row v-for="(cardItem, itemIndex) in card.items" :key="itemIndex" class="text-center">
            <v-col class="text-center">
              <h3>{{ cardItem.title }}</h3>
              <p>{{ cardItem.description }}</p>
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
    header: {
      type: String,
      required: true,
    },
    introText: {
      type: String,
      default: '',
    },
    cards: {
      type: Array,
      default: () => [],
    },
    backgroundColorState: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssVars() {
      if (this.backgroundColorState === true) {
        return {
          'background-color': 'aliceBlue',
          color: 'black',
        }
      } else {
        return { 'background-color': '' }
      }
    },
  },
}
</script>

<style scoped>
.v-avatar-text {
  color: white;
}
</style>
