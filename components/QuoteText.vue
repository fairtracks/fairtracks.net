<template>
  <p>
    <v-row>
      <v-col cols="1">
        <v-row>
          <v-icon x-large class="grey--text text--lighten-1"
            >mdi-format-quote-open
          </v-icon>
        </v-row>
      </v-col>
      <v-col cols="10">
        <v-row
          :class="
            $vuetify.theme.dark ? 'black' : 'white grey--text text--darken-2'
          "
          class="ma-0 text-h6 font-italic text-center"
        >
          {{ quote }}
        </v-row>
      </v-col>
      <v-col cols="1">
        <v-row>
          <v-icon x-large class="grey--text text--lighten-1"
            >mdi-format-quote-close
          </v-icon>
        </v-row>
      </v-col>
    </v-row>
  </p>
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
