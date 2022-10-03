<template>
  <v-col
    cols="12"
    lg="6"
    class="px-md-8 px-11 py-0"
    :align-self="subSection.tables ? 'end' : 'center'"
  >
    <figure
      v-for="(figure, f_index) in subSection.figures"
      :key="f_index"
      class="pb-lg-4 py-7"
      :class="f_index > 0 ? 'pt-lg-16' : 'pt-lg-0'"
    >
      <UiSmartImg
        class="mx-auto"
        :max-width="figure.maxWidth ? figure.maxWidth : '600px'"
        contain
        :image-asset="$getImageAssetObjectFromPathArray(figure.path)"
      />
      <figcaption>
        <p
          v-show="figure.caption"
          class="body-2 font-italic text-center pt-8"
          v-html="
            compileMarkdown(`Figure ${subSectionIndex + 1}.${f_index + 1}: ${figure.caption}`)
          "
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
}
</script>
