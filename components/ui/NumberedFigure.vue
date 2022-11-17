<template>
  <figure>
    <div v-if="figureObj.path">
      <UiSmartImg
        v-show="!figureObj.zoomable"
        :max-width="figureObj.maxWidth ? figureObj.maxWidth : '600px'"
        contain
        :image-asset="$getImageAssetObjectFromPathArray(figureObj.path)"
      />
      <UiZoomableImage
        v-show="figureObj.zoomable"
        :max-width="figureObj.maxWidth ? figureObj.maxWidth : '600px'"
        contain
        :image-asset="$getImageAssetObjectFromPathArray(figureObj.path)"
        :caption-html="figureCaptionHtml(figIndex, figureObj)"
      />
    </div>
    <UiTechNote v-if="figureObj.note" :note-name="figureObj.note" />
    <figcaption
      class="mx-auto"
      :style="figureObj.maxWidth ? `max-width: ${figureObj.maxWidth}` : 'max-width: 600px'"
    >
      <p
        v-show="figureObj.caption"
        class="body-2 font-italic text-center pt-6"
        :max-width="figureObj.maxWidth ? figureObj.maxWidth : '600px'"
        v-html="figureCaptionHtml(figIndex, figureObj)"
      />
    </figcaption>
  </figure>
</template>

<script>
import MarkdownSupport from '~/mixins/markdown-support'
import LateRenderer from '~/mixins/late-renderer'

export default {
  mixins: [MarkdownSupport, LateRenderer],
  props: {
    figureObj: {
      type: Object,
      required: true,
    },
    figIndex: {
      type: Number,
      default: 0,
    },
    subSectionIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      componentId: 'ui-numbered-figure',
    }
  },
  methods: {
    figureCaptionHtml(figIndex, figure) {
      const newFigIndex = figure.indexMinus ? figIndex - figure.indexMinus : figIndex
      return this.compileMarkdown(
        `${figure.note ? '' : `Figure ${this.subSectionIndex + 1}.${newFigIndex + 1}:`} ${
          figure.caption
        }`
      )
    },
  },
}
</script>
