<template>
  <v-row no-gutters class="px-4">
    <v-col cols="12">
      <v-card-title>
        <v-text-field
          v-model="search"
          :append-icon="mdiMagnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    </v-col>
    <v-col cols="12">
      <v-data-table
        dense
        :search="search"
        :headers="headers"
        :items="data"
        :items-per-page="itemsPerPage"
        height="100%"
        fixed-header
        :mobile-breakpoint="getMobileBreakpoint()"
      >
        <template #body="{ items }">
          <tbody>
            <tr v-for="(item, item_index) in items" :key="item_index">
              <td v-for="(header, header_index) in headers" :key="header_index">
                <div v-if="isLargeList(item[header.value])">
                  <v-tooltip bottom transition="transition-duration: 1s">
                    <template #activator="{ on, attrs }">
                      <span v-bind="attrs" style="text-align: center" v-on="on"
                        >Multiple <v-icon small>{{ mdiAsteriskCircleOutline }}</v-icon></span
                      >
                    </template>
                    <div class="d-flex flex-column" style="text-align: center">
                      <span
                        v-for="(columnInfo, columnIndex) in item[header.value]"
                        :key="columnIndex"
                        >{{ columnInfo }},</span
                      >
                    </div>
                  </v-tooltip>
                </div>
                <div v-else-if="isArray(item[header.value])">
                  <span>{{ parseArrayToString(item[header.value]) }}</span>
                </div>
                <div v-else>
                  <span v-html="compileMarkdown(item[header.value])"></span>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-col>
    <v-col cols="12">
      <p class="body-2 font-italic text-center">Table {{ tableNumber }}: {{ tableCaption }}</p>
    </v-col>
    <v-col cols="12">
      <p class="body-2 font-italic text-center">
        {{ tableFootnote }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
import { marked } from 'marked'
import { mdiMagnify, mdiAsteriskCircleOutline } from '@mdi/js'
import {
  DATA_G_GET_CONTENTS_BODY_ALL_HEADERS,
  DATA_G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS,
} from '~/store/data/constants'

import MarkdownSupport from '~/mixins/markdown-support'

export default {
  mixins: [MarkdownSupport],
  props: {
    baseFileName: {
      type: String,
      required: true,
    },
    delimiter: {
      type: String,
      default: '',
    },
    tableNumber: {
      type: Number,
      default: 1,
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
      default: 5,
    },
  },
  data() {
    return {
      componentId: 'ui-markdown-table',
      mdiMagnify,
      mdiAsteriskCircleOutline,
      search: '',
    }
  },
  computed: {
    baseFilePath() {
      return '/data/tables/' + this.baseFileName
    },
    headers() {
      return this.createHeaders(
        this.$nuxt.context.store.getters[DATA_G_GET_CONTENTS_BODY_ALL_HEADERS](this.baseFilePath)
      )
    },
    data() {
      return this.$nuxt.context.store.getters[DATA_G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS](
        this.baseFilePath,
        this.delimiter
      )
    },
  },
  methods: {
    htmlDecode(input) {
      const doc = new DOMParser().parseFromString(input, 'text/html')
      return doc.documentElement.textContent
    },
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
    compileMarkdown(cellContent) {
      if (typeof cellContent === 'string') {
        return marked.parseInline(cellContent, [])
      } else {
        return cellContent
      }
    },
    isLargeList(data) {
      if (Array.isArray(data)) {
        return data.length > 3
      }
      return false
    },
    parseArrayToString(list) {
      return list.join(', ')
    },
    isArray(list) {
      return Array.isArray(list)
    },
  },
}
</script>
<style>
a {
  text-decoration: none;
}
</style>
