<template>
  <v-col cols="12" class="px-4 py-1" align-self="center">
    <UiSmartIcon :name="linkObj.icon" size="30px" />
    <a v-if="linkObj.href" class="ml-2 my-auto" :href="linkObj.href"> {{ linkObj.text }}</a>
    <nuxt-link v-if="linkObj.to" class="ml-2 my-auto" :to="linkObj.to">
      {{ linkObj.text }}</nuxt-link
    >
  </v-col>
</template>

<script>
import LateRenderer from '~/mixins/late-renderer'

export default {
  mixins: [LateRenderer],
  props: {
    linkObj: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      componentId: 'ui-icon-link',
    }
  },
}
</script>
