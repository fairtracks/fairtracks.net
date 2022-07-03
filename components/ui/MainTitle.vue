<template>
  <div>
    <h2
      v-show="title"
      class="text-h4 text-center font-weight-black mt-4 mb-8"
      :class="scaleDownAtSm ? 'text-sm-h3' : 'text-md-h3'"
      :style="titleStyle"
      v-text="title"
    />
    <h3
      v-show="subtitle"
      class="text-h6 font-weight-medium font-italic text-center mb-8"
      :class="scaleDownAtSm ? 'text-sm-h5' : 'text-md-h5'"
      :style="subtitleStyle"
      v-text="subtitle"
    />
    <h4
      v-show="ingress"
      class="text-h6 text-center mb-4"
      :class="subtitle ? 'font-weight-light' : 'font-weight-medium font-italic'"
      :style="ingressStyle"
      v-html="compileMarkdown(ingress)"
    />
    <h4
      v-show="!ingress"
      class="text-h6 text-center mb-4"
      :class="subtitle ? 'font-weight-light' : 'font-weight-medium font-italic'"
      :style="ingressStyle"
    >
      <slot name="ingress" />
    </h4>
    <p
      v-show="info"
      class="text-subtitle-1 font-weight-light text-center mb-4"
      :style="infoStyle"
      v-html="compileMarkdown(info)"
    />
    <p v-show="!info" class="text-subtitle-1 font-weight-light text-center mb-4" :style="infoStyle">
      <slot name="info" />
    </p>
  </div>
</template>

<script>
import MarkdownSupport from '~/mixins/markdown-support'

export default {
  mixins: [MarkdownSupport],
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
    titleStyle: {
      type: String,
      default: '',
    },
    subtitleStyle: {
      type: String,
      default: '',
    },
    ingressStyle: {
      type: String,
      default: '',
    },
    infoStyle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      componentId: 'ui-main-title',
    }
  },
}
</script>
