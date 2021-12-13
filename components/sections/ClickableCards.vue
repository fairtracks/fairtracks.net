 <template>
  <section>
    <v-row class="ma-0 pb-4">
      <div class="text-h4 font-weight-bold">
        {{ title }}
      </div></v-row
    >

    <v-row class="ma-0 pb-8">
      <v-hover v-slot="{ hover }">
        <v-card
          v-for="(card, index) in cards"
          :key="'c_' + index"
          :elevation="hover ? 24 : 2"
          :href="card.link"
          :class="hover ? 'zoom' : 'notzoom'"
          class="mt-8 transition-swing mx-auto"
          :max-width="card.max - width ? card.max - width : null"
        >
          <v-img
            contain
            :src="createAssetPath('illustrations', card.img[0], card.img[1])"
            class="ma-6"
          >
          </v-img>
        </v-card>
      </v-hover>
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
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.zoom {
  transform: scale(1.025) translate(0, -10px);
  transition: transform 0.2s;
}
.notzoom {
  transition: transform 0.2s;
}
</style>
