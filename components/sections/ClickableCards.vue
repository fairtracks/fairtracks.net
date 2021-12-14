 <template>
  <section>
    <v-row no-gutters class="ma-0 pb-4">
      <UiMinorTitle :title="title" />
      <v-col cols="12" class="ma-0">
        <v-hover v-slot="{ hover }">
          <v-card
            v-for="(card, index) in cards"
            :key="'c_' + index"
            :elevation="hover ? 24 : 2"
            :href="card.link"
            :class="hover ? 'zoom' : 'notzoom'"
            class="transition-swing mx-auto"
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
