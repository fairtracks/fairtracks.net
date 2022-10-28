<template>
  <v-row class="px-3 pt-2 pb-9">
    <v-col
      v-for="(link, linkIndex) in links"
      :key="linkIndex"
      cols="12"
      class="px-4 py-1"
      align-self="center"
    >
      <UiSmartIcon :name="link.icon" size="30px" />
      <a v-if="link.href" class="ml-2 my-auto" :href="link.href"> {{ link.text }}</a>
      <nuxt-link v-if="link.to" class="ml-2 my-auto" :to="link.to"> {{ link.text }}</nuxt-link>
    </v-col>
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
