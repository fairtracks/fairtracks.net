<template>
  <v-row class="pa-4">
    <v-col cols="1">
      <v-icon x-large :class="themeBasedClass(true)">
        {{ mdiFormatQuoteOpen }}
      </v-icon>
    </v-col>
    <v-col cols="10">
      <p
        :class="themeBasedClass(false)"
        class="ma-0 text-h6 font-italic text-center"
        v-text="quote"
      />
    </v-col>
    <v-col cols="1">
      <v-icon x-large :class="themeBasedClass(true)">
        {{ mdiFormatQuoteClose }}
      </v-icon>
    </v-col>
  </v-row>
</template>

<script>
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js'

export default {
  props: {
    quote: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      mdiFormatQuoteOpen,
      mdiFormatQuoteClose,
    }
  },
  methods: {
    themeBasedClass(icon) {
      return `grey--text ${
        this.$vuetify.theme.dark
          ? icon
            ? 'text--lighten-1'
            : 'text--lighten-3'
          : icon
          ? 'text--lighten-1'
          : 'text--darken-2'
      }`
    },
  },
}
</script>
