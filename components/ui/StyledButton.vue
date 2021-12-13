<template>
  <v-btn
    :id="id"
    :x-large="xLarge"
    class="secondary"
    :class="shouldHover ? 'custom-hover' : null"
    :href="href"
    @mouseover="setButtonHoverId(id)"
    @mouseleave="unsetButtonHoverId(id)"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    href: {
      type: String,
    },
    text: {
      type: String,
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
  watch: {
    hover() {
      console.log('dsds')
    },
  },
  methods: {
    setButtonHoverId(id) {
      this.prevButtonHoverId = this.buttonHoverId
      this.$store.commit('buttonHover/setButtonHoverId', id)
      console.log(
        this.id +
          ' (mouseover): ' +
          this.prevButtonHoverId +
          ' -> ' +
          this.buttonHoverId
      )
    },
    unsetButtonHoverId() {
      this.prevButtonHoverId = ''
      this.$store.commit('buttonHover/setButtonHoverId', this.prevButtonHoverId)
      console.log(
        this.id +
          ': (mouseleave)' +
          this.prevButtonHoverId +
          ' -> ' +
          this.buttonHoverId
      )
    },
  },
}
</script>
