<template>
  <v-icon
    :color="color"
    :dense="dense"
    :disabled="disabled"
    :light="light"
    :left="left"
    :right="right"
    :small="small"
    :x-small="xSmall"
    :large="large"
    :x-large="xLarge"
    :size="size"
    :tag="tag"
  >
    {{ path }}
  </v-icon>
</template>

<script>
import { IR_G_GET_SVG_ICON } from '~/store/iconRegister'

export default {
  props: {
    family: {
      type: String,
      default: 'mdiSvg',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: undefined,
    },
    dense: Boolean,
    disabled: Boolean,
    light: Boolean,
    left: Boolean,
    right: Boolean,
    large: Boolean,
    small: Boolean,
    xSmall: Boolean,
    xLarge: Boolean,
    size: {
      type: [Number, String],
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: 'i',
    },
  },
  data() {
    return {
      componentId: 'ui-smart-icon',
    }
  },
  computed: {
    path() {
      return this.$nuxt.context.store.getters[IR_G_GET_SVG_ICON](this.family, this.name)
    },
  },
}
</script>

<style scoped>
svg {
  width: 24px;
  height: 24px;
}
</style>
