<template>
  <v-btn
    :x-large="$vuetify.breakpoint.mdAndUp"
    class="ma-3 secondary"
    :href="href"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
    },
    text: {
      type: String,
    },
  },
}
</script>
