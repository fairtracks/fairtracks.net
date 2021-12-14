<template>
  <v-row class="pa-4">
    <v-col cols="1">
      <v-icon x-large class="grey--text text--lighten-1"
        >mdi-format-quote-open
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
      <v-icon x-large class="grey--text text--lighten-1"
        >mdi-format-quote-close
      </v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      default: '',
    },
  },
}
</script>
