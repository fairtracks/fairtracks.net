<template>
  <div class="simplebutton">
    <v-btn
      :id="id"
      :large="large"
      :x-large="xLarge"
      :small="small"
      :x-small="xSmall"
      :class="`${$vuetify.theme.dark ? 'primary' : 'secondary'}${
        shouldHover ? ' custom-hover' : ''
      }`"
      :href="href"
      :to:="to"
      :ripple="false"
      @mouseover="setButtonHoverId(id)"
      @mouseout="unsetButtonHoverId()"
      @click.stop=""
      @mousedown.stop=""
    >
      <v-icon v-if="icon" class="pr-3 center">
        {{ icon }}
      </v-icon>
      {{ text }}
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { BUTTON_HOVER_M_SET_ID } from '~/store/buttonHover'

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
    ...mapState({
      buttonHoverId: (state) => state.buttonHover.buttonHoverId,
    }),
    shouldHover() {
      return this.doHover && this.buttonHoverId === ''
    },
  },
  mounted() {
    document.addEventListener('mouseup', this.unsetButtonHoverId)
  },
  destroyed() {
    document.removeEventListener('mouseup', this.unsetButtonHoverId)
  },
  methods: {
    setButtonHoverId(id) {
      this.prevButtonHoverId = this.buttonHoverId
      this.$store.commit(BUTTON_HOVER_M_SET_ID, id)
    },
    unsetButtonHoverId() {
      this.prevButtonHoverId = ''
      this.$store.commit(BUTTON_HOVER_M_SET_ID, this.prevButtonHoverId)
    },
  },
}
</script>
