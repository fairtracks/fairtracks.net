<template>
  <v-card>
    <v-card-title>
      {{ tableTitle }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-data-table :headers="tableHeaders" :items="tableData" class="elevation-1" :search="search">
      <template #body="{ items }">
        <tbody>
          <tr v-for="(item, item_index) in items" :key="item_index">
            <td v-for="(header, header_index) in tableHeaders" :key="header_index">
              <div v-if="isLargeList(item[header.value])">
                <v-tooltip bottom transition="transition-duration: 1s">
                  <template #activator="{ on, attrs }">
                    <span v-bind="attrs" style="text-align: center" v-on="on"
                      >Multiple <v-icon small>{{ mdiInformationOutline }}</v-icon></span
                    >
                  </template>
                  <div class="d-flex flex-column" style="text-align: center">
                    <span v-for="(columnInfo, columnIndex) in item[header.value]" :key="columnIndex"
                      >{{ columnInfo }},</span
                    >
                  </div>
                </v-tooltip>
              </div>
              <div v-else-if="isArray(item[header.value])">
                <span>{{ parseArrayToString(item[header.value]) }}</span>
              </div>
              <div v-else>
                <span>{{ item[header.value] }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiInformationOutline } from '@mdi/js'

export default {
  props: {
    tableTitle: {
      type: String,
      default: '',
    },
    tableHeaders: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      search: '',
      mdiInformationOutline,
    }
  },
  methods: {
    isArray(list) {
      return Array.isArray(list)
    },
    parseArray(list) {
      return list.join(', ')
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
  },
}
</script>
