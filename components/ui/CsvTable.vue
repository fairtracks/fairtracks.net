<template>
  <v-row no-gutters class="px-4">
    <v-col cols="12">
      <v-card-title>
        <v-text-field v-model="search" label="Search" single-line hide-details>
          <template #append>
            <UiSmartIcon name="magnify" />
          </template>
        </v-text-field>
      </v-card-title>
    </v-col>
    <v-col cols="12">
      <v-data-table
        dense
        :search="search"
        :headers="headers"
        :items="items"
        :items-per-page="itemsPerPage"
        height="100%"
        fixed-header
        :mobile-breakpoint="getMobileBreakpoint()"
      >
        <template #item="{ item }">
          <tr>
            <td v-for="cell in item" :key="cell.name">
              <v-tooltip v-if="isLargeList(cell)" bottom transition="transition-duration: 1s">
                <template #activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    style="text-align: center; text-decoration: underline dotted"
                    v-on="on"
                  >
                    Multiple
                  </span>
                </template>
                <div class="d-flex flex-column" style="text-align: center">
                  <span v-html="parseArrayToString(cell)" />
                </div>
              </v-tooltip>
              <span v-else-if="isArray(cell)" v-html="parseArrayToString(cell)" />
              <span v-else v-html="compileMarkdown(cell)" />
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-col>
    <v-col cols="12">
      <p
        v-show="tableCaption"
        class="body-2 font-italic text-center pt-6"
        v-html="compileMarkdown(tableCaption)"
      />
    </v-col>
    <v-col cols="12">
      <p class="body-2 font-italic text-center pt-6">
        {{ tableFootnote }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
import {
  DATA_G_GET_CONTENTS_BODY_ALL_HEADERS,
  DATA_G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS,
} from '~/store/data/constants'

import MarkdownSupport from '~/mixins/markdown-support'
import LateRenderer from '~/mixins/late-renderer'

export default {
  mixins: [MarkdownSupport, LateRenderer],
  props: {
    csvBaseFileName: {
      type: String,
      required: true,
    },
    delimiter: {
      type: String,
      default: '',
    },
    collapseLargeLists: {
      type: Boolean,
      default: true,
    },
    tableCaption: {
      type: String,
      default: '',
    },
    tableFootnote: {
      type: String,
      default: '',
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      componentId: 'ui-csv-table',
      search: '',
    }
  },
  computed: {
    baseFilePath() {
      return '/data/tables/' + this.csvBaseFileName
    },
    headers() {
      return this.createHeaders(
        this.$nuxt.context.store.getters[DATA_G_GET_CONTENTS_BODY_ALL_HEADERS](this.baseFilePath)
      )
    },
    items() {
      return this.$nuxt.context.store.getters[DATA_G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS](
        this.baseFilePath,
        this.delimiter
      )
    },
  },
  methods: {
    getMobileBreakpoint() {
      return process.server ? '0' : null
    },
    createHeaders(rawHeaders) {
      return rawHeaders.map((x) => ({
        text: x,
        value: x,
        class: 'table_header',
      }))
    },
    isLargeList(data) {
      if (this.collapseLargeLists && Array.isArray(data)) {
        return data.length > 3
      }
      return false
    },
    parseArrayToString(list) {
      return this.compileMarkdown(list.join(',\n'))
    },
    isArray(list) {
      return Array.isArray(list)
    },
  },
}
</script>
<style>
.table_header {
  vertical-align: top;
}
</style>
