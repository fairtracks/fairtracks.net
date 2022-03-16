<template>
  <v-card>
    <v-list dense>
      <v-subheader>{{ listHeader }}</v-subheader>
      <v-list-item v-for="(reference, index) in referenceList" :key="index">
        <v-list-item-content>
          <v-list-item-title>
            <nuxt-link to="referenceStore[listItem.id].to">
              {{ referenceStore[reference.id].title }}
            </nuxt-link>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ reference.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    listHeader: {
      type: String,
      default: '',
    },
    referenceList: {
      type: Array,
      default: () => [],
    },
    referenceStore: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
