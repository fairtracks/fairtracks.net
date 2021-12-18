<template>
  <div>
    <h2
      v-if="title"
      class="text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8"
      v-text="title"
    />
    <h3
      v-if="subtitle"
      class="text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8"
      v-text="subtitle"
    />
    <h4
      v-if="ingress"
      class="text-h6 font-weight-medium font-italic text-center mb-4"
      v-html="compileMarkdown(ingress)"
    />
    <p
      v-if="info"
      class="text-subtitle-1 font-weight-light text-center mb-4"
      v-html="compileMarkdown(info)"
    />
  </div>
</template>

<script>
import { marked } from 'marked'

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    ingress: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
  },
  methods: {
    compileMarkdown(string) {
      return marked.parseInline(string, [])
    },
  },
}
</script>
