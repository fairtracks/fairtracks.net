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
        :items="items"
        :items-per-page="itemsPerPage"
        height="100%"
        fixed-header
      >
        <template #item="{ item }">
          <tr>
            <td v-for="cell in item" :key="cell.name" v-html="compileMarkdown(cell)" />
          </tr>
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
import { mdiMagnify } from '@mdi/js'
import {
  DATA_G_GET_CONTENTS_BODY_ALL_HEADERS,
  DATA_G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS,
} from '~/store/data/constants'

export default {
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
      mdiMagnify,
      search: '',
      headers: [],
      items: [],
    }
  },
  async fetch() {
    const getters = this.$nuxt.context.store.getters

    const baseFilePath = '/data/tables/' + this.baseFileName

    this.headers = this.createHeaders(
      await getters[DATA_G_GET_CONTENTS_BODY_ALL_HEADERS](baseFilePath)
    )

    this.items = await getters[DATA_G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS](
      baseFilePath,
      this.delimiter
    )
  },
  methods: {
    htmlDecode(input) {
      const doc = new DOMParser().parseFromString(input, 'text/html')
      return doc.documentElement.textContent
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
  },
}
</script>
<style>
.table_header {
  vertical-align: top;
}
</style>
