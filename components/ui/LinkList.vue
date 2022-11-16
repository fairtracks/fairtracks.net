<template>
  <v-row class="px-3 pt-6 pb-9">
    <UiIconLink v-for="(link, linkIndex) in links" :key="linkIndex" :link-obj="link" />
  </v-row>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      componentId: 'ui-link-list',
    }
  },
}
</script>
