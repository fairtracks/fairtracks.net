<template>
  <v-hover v-slot="{ hover }">
    <v-card
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
      <UiSmartImg :image-asset="card.img"> </UiSmartImg>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {},
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
  transform: scale(1.00625) translate(0, -2.5px);
  transition: transform 0.1s;
}

.notzoom {
  transition: transform 0.1s;
}
</style>
