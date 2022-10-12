<template>
  <v-col
    cols="12"
    lg="6"
    class="px-md-8 px-11 py-0"
    :align-self="subSection.tables ? 'end' : 'center'"
  >
    <figure
      v-for="(figure, figIndex) in subSection.figures"
      :key="figIndex"
      class="pb-lg-4 py-7"
      :class="figIndex > 0 ? 'pt-lg-16' : 'pt-lg-0'"
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
      <figcaption>
        <p
          v-show="figure.caption"
          class="body-2 font-italic text-center pt-4"
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
      componentId: 'sections-figure-list',
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
