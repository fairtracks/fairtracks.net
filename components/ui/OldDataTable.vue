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
      <!-- Domains -->
      <template #item.domains="{ item }">
        <span> {{ formatDomain(item.domains) }}</span>
      </template>
      <!-- Organisms -->
      <template #item.organisms="{ item }">
        <div v-if="isMultiple(item.organisms) === 'Multiple'">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on"
                >{{ isMultiple(item.organisms) }}
                <v-icon small>{{ mdiInformationOutline }}</v-icon></span
              >
            </template>
            <div class="d-flex flex-column" style="text-align: center">
              <span v-for="organism in item.organisms" :key="organism">{{ organism }}</span>
            </div>
          </v-tooltip>
        </div>
        <div v-else>
          <span>{{ parseArray(item.organisms) }}</span>
        </div>
      </template>
      <!-- Assays -->
      <template #item.assays="{ item }">
        <div v-if="isMultiple(item.assays) === 'Multiple'">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on"
                >{{ isMultiple(item.assays) }}
                <v-icon small>{{ mdiInformationOutline }}</v-icon></span
              >
            </template>
            <span>{{ parseArray(item.assays) }}</span>
          </v-tooltip>
        </div>
        <div v-else>
          <span>{{ parseArray(item.assays) }}</span>
        </div>
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
    parseArray(list) {
      return list.join(', ')
    },
    isMultiple(list) {
      return list.length > 1 ? 'Multiple' : list.join(', ')
    },
    formatDomain(list) {
      return list.length > 1 ? list.join(', ') : list[0]
    },
  },
}
</script>
