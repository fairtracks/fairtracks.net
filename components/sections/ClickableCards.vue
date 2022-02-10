 <template>
  <section>
    <v-row no-gutters class="ma-0 pb-4">
      <UiMinorTitle :title="title" />
      <v-col cols="12" class="ma-0">
        <v-hover v-slot="{ hover }">
          <v-card
            v-for="(card, index) in cards"
            :key="'c_' + index"
            :elevation="hover ? (down ? 6 : 12) : 2"
            :href="card.link ? card.link : null"
            :ripple="false"
            :class="hover ? (down ? 'halfzoom' : 'zoom') : 'notzoom'"
            class="transition-swing mx-auto"
            :max-width="card.maxWidth ? card.maxWidth : null"
            style="z-index: 2"
            @mousedown="down = true"
            @mouseup="down = false"
            @mouseleave="down = false"
            @click="$emit('btn-click', true)"
          >
            <UiSmartImg
              contain
              :image-asset="
                $getImageAssetObject('images', card.img[0], card.img[1])
              "
              class="ma-6"
            >
            </UiSmartImg>
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
  data() {
    return { down: false }
  },
}
</script>

<style scoped>
.zoom {
  transform: scale(1.0125) translate(0, -5px);
  transition: transform 0.1s;
}
.halfzoom {
}
transform: scale(1.00625) translate(0, -2.5px);
transition: transform 0.1s;

.notzoom {
  transition: transform 0.1s;
}
</style>
