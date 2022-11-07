<template>
  <div class="pa-4">
    <v-row>
      <v-col cols="1">
        <UiSmartIcon
          name="format-quote-open"
          x-large
          class="quotation-mark"
          :class="themeBasedClass(true)"
        />
      </v-col>
      <v-col cols="10">
        <p
          :class="themeBasedClass(false)"
          class="quote ma-0 text-h6 font-italic text-center"
          v-text="quote"
        />
      </v-col>
      <v-col cols="1">
        <UiSmartIcon
          name="format-quote-close"
          x-large
          class="quotation-mark"
          :class="themeBasedClass(true)"
        />
      </v-col>
    </v-row>
    <v-row v-if="citation" class="pt-2 px-4 justify-end">
      <p class="body-2 font-italic" v-html="compileMarkdown(citation)"></p>
    </v-row>
  </div>
</template>

<script>
import MarkdownSupport from '~/mixins/markdown-support'
export default {
  mixins: [MarkdownSupport],
  props: {
    quote: {
      type: String,
      default: '',
    },
    citation: {
      type: String,
      default: '',
    },
    noTextColor: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      componentId: 'ui-quote-text',
    }
  },
  methods: {
    themeBasedClass(icon) {
      if (this.noTextColor) {
        return ''
      } else {
        return `grey--text ${
          this.$vuetify.theme.dark
            ? icon
              ? 'text--lighten-1'
              : 'text--lighten-3'
            : icon
            ? 'text--lighten-1'
            : 'text--darken-2'
        }`
      }
    },
  },
}
</script>
