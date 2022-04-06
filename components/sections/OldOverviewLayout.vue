<template>
  <section :id="sectionId">
    <UiMainTitle :title="sectionTitle" />
    <v-row class="fill-height" justify="space-around">
      <v-col cols="4">
        <p v-html="compileMarkdown(introText)" />
      </v-col>

      <v-col v-for="col_index in [1, 2]" :key="col_index" cols="4">
        <v-row>
          <v-col
            v-for="(referenceList, r_index) in slicedReferenceLists[col_index - 1]"
            :key="r_index"
            cols="12"
          >
            <UiListOfReferences
              :list-header="referenceList.header"
              :reference-list="referenceList.references"
              :reference-store="referenceStore"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { marked } from 'marked'

export default {
  props: {
    sectionId: {
      type: String,
      default: '',
    },
    sectionTitle: {
      type: String,
      default: '',
    },
    introText: {
      type: String,
      default: '',
    },
    referenceLists: {
      type: Array,
      default: () => [],
    },
    referenceStore: {
      type: Object,
      default: () => {},
    },
    listsInSecondCol: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    slicedReferenceLists() {
      return [
        this.referenceLists.slice(0, this.listsInSecondCol),
        this.referenceLists.slice(this.listsInSecondCol),
      ]
    },
  },
  methods: {
    compileMarkdown(string) {
      return marked.parse(string, [])
    },
  },
}
</script>
