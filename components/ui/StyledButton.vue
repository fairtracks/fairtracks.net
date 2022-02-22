<template>
  <div class="simplebutton">
    <v-btn
      :id="id"
      :x-large="xLarge"
      :class="
        $vuetify.theme.dark
          ? shouldHover
            ? 'custom-hover primary'
            : 'primary'
          : shouldHover
          ? 'custom-hover secondary'
          : 'secondary'
      "
      :href="href"
      :ripple="false"
      @mouseover="setButtonHoverId(id)"
      @mouseleave="unsetButtonHoverId(id)"
      @click.stop="$emit('btn-click', true)"
    >
      {{ text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: '',
    },
    xLarge: { type: Boolean, default: false },
    doHover: { type: Boolean, default: false },
  },
  data() {
    return {
      prevButtonHoverId: '',
    }
  },
  computed: {
    buttonHoverId() {
      return this.$store.state.buttonHover.buttonHoverId
    },
    shouldHover() {
      return this.doHover && this.buttonHoverId === ''
    },
  },
  methods: {
    setButtonHoverId(id) {
      this.prevButtonHoverId = this.buttonHoverId
      this.$store.commit('buttonHover/setButtonHoverId', id)
    },
    unsetButtonHoverId() {
      this.prevButtonHoverId = ''
      this.$store.commit('buttonHover/setButtonHoverId', this.prevButtonHoverId)
    },
  },
}
</script>
