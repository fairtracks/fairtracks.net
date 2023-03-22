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
    <UiNumberedFigure
      v-for="(figure, figIndex) in subSection.figures"
      :key="figIndex"
      :figure-obj="figure"
      :fig-index="figIndex"
      :fig-name="figure.name"
      :sub-section-index="subSectionIndex"
      :class="`${figIndex === 0 ? 'pt-lg-0' : ''} ${
        figIndex > 0 && subSection.spaceBetweenFigures
          ? 'pt-16'
          : figIndex > 0 && subSection.littleSpaceBetweenFigures
          ? 'pt-lg-2 pt-7'
          : 'pt-7'
      } ${
        figIndex + 1 === subSection.figures.length
          ? ''
          : subSection.spaceBetweenFigures
          ? 'pb-16'
          : subSection.littleSpaceBetweenFigures
          ? 'pb-lg-2 pb-7'
          : 'pb-7'
      }`"
    />
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
