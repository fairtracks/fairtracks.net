<template>
  <div class="simplebutton">
    <v-btn
      :id="id"
      :large="large"
      :x-large="xLarge"
      :small="small"
      :x-small="xSmall"
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
      :to:="to"
      :ripple="false"
      @mouseover="setButtonHoverId(id)"
      @mouseleave="unsetButtonHoverId(id)"
      @click.stop="$emit('btn-click', true)"
    >
      <v-icon v-if="icon" class="pr-3 center">
        {{ icon }}
      </v-icon>
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
    to: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    large: { type: Boolean, default: false },
    xLarge: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    xSmall: { type: Boolean, default: false },
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
