<template>
  <v-row fill-height class="pa-0 pb-16 px-4" justify="space-around">
    <v-col
      v-for="(mdFile, c_index) of markdownFiles"
      :id="createCardId(c_index)"
      :key="createCardId(c_index)"
      cols="auto"
    >
      <slot
        :sub-section-id="subsectionId"
        :card-id="createCardId(c_index)"
        :card="mdFile"
        :image-asset="mdFile.img ? $getImageAssetObjectFromPathArray(mdFile.img) : null"
      />
    </v-col>
  </v-row>
</template>

<script>
import MarkdownSupport from '~/mixins/markdown-support'

export default {
  mixins: [MarkdownSupport],
  props: {
    markdownFilesDir: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      componentId: 'ui-card-matrix',
    }
  },
  computed: {
    subsectionId() {
      return this.markdownFilesDir.split('/')[1]
    },
  },
  methods: {
    createCardId(cardIndex) {
      return `${this.subsectionId}_c_${cardIndex}`
    },
  },
}
</script>
