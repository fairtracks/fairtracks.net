<template>
  <div>
    <h2
      v-show="title"
      class="text-h4 text-center font-weight-black mt-4 mb-8"
      :class="scaleDownAtSm ? 'text-sm-h3' : 'text-md-h3'"
      v-text="title"
    />
    <h3
      v-show="subtitle"
      class="text-h6 font-weight-medium font-italic text-center mb-8"
      :class="scaleDownAtSm ? 'text-sm-h5' : 'text-md-h5'"
      v-text="subtitle"
    />
    <h4
      v-show="ingress"
      class="text-h6 text-center mb-4"
      :class="subtitle ? 'font-weight-light' : 'font-weight-medium font-italic'"
      v-html="compileMarkdown(ingress)"
    />
    <p
      v-show="info"
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
    scaleDownAtSm: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    compileMarkdown(string) {
      return marked.parseInline(string, [])
    },
  },
}
</script>
