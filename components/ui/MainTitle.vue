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
      v-if="ingress"
      class="text-h6 text-center mb-4"
      :class="subtitle ? 'font-weight-light' : 'font-weight-medium font-italic'"
      v-html="compileMarkdown(ingress)"
    />
    <h4
      v-else
      class="text-h6 text-center mb-4"
      :class="subtitle ? 'font-weight-light' : 'font-weight-medium font-italic'"
    >
      <slot name="ingress" />
    </h4>
    <p
      v-if="info"
      class="text-subtitle-1 font-weight-light text-center mb-4"
      v-html="compileMarkdown(info)"
    />
    <p v-else class="text-subtitle-1 font-weight-light text-center mb-4">
      <slot name="info" />
    </p>
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
  data() {
    return {
      componentId: 'ui-main-title',
    }
  },
  methods: {
    compileMarkdown(string) {
      return marked.parseInline(string, [])
    },
  },
}
</script>
