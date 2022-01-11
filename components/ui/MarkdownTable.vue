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
        :headers="createHeaders(headers)"
        :items="createItems(items)"
        :items-per-page="itemsPerPage"
        height="100%"
        fixed-header
      >
        <template #item="{ item }">
          <tr>
            <td
              v-for="cell in item"
              :key="cell.name"
              v-html="compileMarkdown(cell)"
            />
          </tr>
        </template>
      </v-data-table>
    </v-col>
    <v-col cols="12">
      <p class="body-2 font-italic text-center">
        Table {{ tableNumber }}: {{ tableCaption }}
      </p>
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

export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
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
    }
  },
  methods: {
    createHeaders(headers) {
      return headers.map((x, index) => ({
        text: x,
        value: String(index),
        class: 'table_header',
      }))
    },
    createItems(items) {
      return items.map((item) => Object.assign({}, item))
    },
    compileMarkdown(string) {
      return marked.parseInline(string, [])
    },
  },
}
</script>
<style>
.table_header {
  vertical-align: top;
}
</style>
