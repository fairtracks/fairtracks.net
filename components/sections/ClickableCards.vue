 <template>
  <section>
    <v-row class="ma-0 pb-8">
      <div class="text-h4 font-weight-bold mb-5">
        {{ title }}
      </div>
      <v-card
        v-for="(card, index) in cards"
        :key="'c_' + index"
        class="mt-8"
        :href="card.link"
      >
        <v-img
          :src="createAssetPath('illustrations', card.img[0], card.img[1])"
        >
        </v-img>
      </v-card>
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
