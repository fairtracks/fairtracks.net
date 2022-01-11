<template>
  <v-row class="pa-4">
    <v-col cols="1">
      <v-icon x-large class="grey--text text--lighten-1">
        {{ mdiFormatQuoteOpen }}
      </v-icon>
    </v-col>
    <v-col cols="10">
      <p
        :class="
          $vuetify.theme.dark ? 'black' : 'white grey--text text--darken-2'
        "
        class="ma-0 text-h6 font-italic text-center"
        v-text="quote"
      />
    </v-col>
    <v-col cols="1">
      <v-icon x-large class="grey--text text--lighten-1">
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
}
</script>
