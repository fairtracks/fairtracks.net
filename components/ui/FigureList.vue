<template>
  <v-col
    cols="12"
    lg="6"
    class="px-md-15 px-11 py-2"
    :class="
      subSection.tables && !subSection.links
        ? 'vl-and-up-align-self-end-else-center'
        : 'align-self-center'
    "
  >
    <figure
      v-for="(figure, figIndex) in subSection.figures"
      :key="figIndex"
      :class="`${figIndex === 0 ? 'pt-lg-0' : ''} ${
        figIndex > 0 && subSection.spaceBetweenFigures ? 'pt-16' : 'pt-7'
      } ${
        figIndex + 1 === subSection.figures.length
          ? ''
          : subSection.spaceBetweenFigures
          ? 'pb-16'
          : 'pb-7'
      }`"
    >
      <UiSmartImg
        v-show="!figure.zoomable"
        :max-width="figure.maxWidth ? figure.maxWidth : '600px'"
        contain
        :image-asset="$getImageAssetObjectFromPathArray(figure.path)"
      />
      <UiZoomableImage
        v-show="figure.zoomable"
        :max-width="figure.maxWidth ? figure.maxWidth : '600px'"
        contain
        :image-asset="$getImageAssetObjectFromPathArray(figure.path)"
        :caption-html="figureCaptionHtml(figIndex, figure)"
      />
      <figcaption
        class="mx-auto"
        :style="figure.maxWidth ? `max-width: ${figure.maxWidth}` : 'max-width: 600px'"
      >
        <p
          v-show="figure.caption"
          class="body-2 font-italic text-center pt-6"
          :max-width="figure.maxWidth ? figure.maxWidth : '600px'"
          v-html="figureCaptionHtml(figIndex, figure)"
        />
      </figcaption>
    </figure>
  </v-col>
</template>

<script>
import MarkdownSupport from '~/mixins/markdown-support'

export default {
  mixins: [MarkdownSupport],
  props: {
    subSection: {
      type: Object,
      required: true,
    },
    subSectionIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      componentId: 'ui-figure-list',
    }
  },
  methods: {
    figureCaptionHtml(figIndex, figure) {
      return this.compileMarkdown(
        `Figure ${this.subSectionIndex + 1}.${figIndex + 1}: ${figure.caption}`
      )
    },
  },
}
</script>

<style scoped>
/* Custom styling for custom breakpoint vl ("very large") == 1640px*/
@media (min-width: 1640px) {
  .vl-and-up-align-self-end-else-center {
    align-self: end;
  }
}
@media (max-width: 1639px) {
  .vl-and-up-align-self-end-else-center {
    align-self: center;
  }
}
</style>
