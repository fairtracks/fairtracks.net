<template>
  <div
    :id="id"
    class="simplebutton"
    :class="`${shouldHover ? ' custom-hover' : ''}`"
    @mouseover="setButtonHoverId(id)"
    @mouseout="unsetButtonHoverId()"
    @mousedown.stop=""
    @click="onClick(href)"
  >
    <slot :to="to" />
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
    doHover: { type: Boolean, default: false },
  },
  data() {
    return {
      componentId: 'ui-general-button',
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
    onClick(href) {
      if (href) {
        this.openLink(href)
      }
      this.$emit('btn-click', true)
    },
    openLink(href) {
      if (process.client) {
        window.open(href, '_blank')
      }
    },
  },
}
</script>
