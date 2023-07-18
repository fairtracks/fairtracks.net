<template>
  <GeneralButton :id="id" :do-hover="doHover" :to="to" :href="href">
    <template #default="{ to }">
      <v-btn
        :large="large"
        :x-large="xLarge"
        :small="small"
        :x-small="xSmall"
        :class="`${$vuetify.theme.dark ? 'primary' : 'secondary'}`"
        :to="to"
        :ripple="false"
        :nuxt="to ? true : null"
      >
        <UiSmartIcon v-if="icon" :name="icon" class="pr-3 center" />
        {{ text }}
      </v-btn>
    </template>
  </GeneralButton>
</template>

<script>
import GeneralButton from '~/components/ui/GeneralButton.vue'

export default {
  components: { GeneralButton },
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
      componentId: 'ui-styled-button',
      prevButtonHoverId: '',
    }
  },
}
</script>
