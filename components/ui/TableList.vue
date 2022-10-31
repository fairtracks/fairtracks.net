<template>
  <v-row v-if="subSection.tables" class="px-md-16 pb-md-16 px-8 pb-8 pt-0" justify="center">
    <div
      v-for="(table, t_index) in subSection.tables"
      :key="t_index"
      :style="'max-width:' + table.maxWidth"
    >
      <UiMarkdownTable
        class="mx-auto"
        :csv-base-file-name="table.csvBaseFileName"
        :delimiter="table.delimiter ? table.delimiter : null"
        :collapse-large-lists="table.collapseLargeLists ? table.collapseLargeLists : null"
        :table-caption="`Table ${subSectionIndex + 1}.${t_index + 1}: ${table.caption}`"
        :table-footnote="table.footnote ? table.footnote : null"
        :items-per-page="table.itemsPerPage ? table.itemsPerPage : 5"
      />
    </div>
  </v-row>
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
      componentId: 'ui-table-list',
    }
  },
}
</script>
