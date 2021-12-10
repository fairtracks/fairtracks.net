<template>
  <p>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
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
    <v-container class="body-2 font-italic text-center pt-5">
      Table {{ tableNumber }}: {{ tableCaption }}
    </v-container>
    <v-container class="body-2 font-italic text-center">
      {{ tableFootnote }}
    </v-container>
  </p>
</template>

<script>
import { marked } from 'marked'

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
