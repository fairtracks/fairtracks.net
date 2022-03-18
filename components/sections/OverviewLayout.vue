<template>
  <section :id="sectionId">
    <UiMainTitle :title="sectionTitle" />
    <div id="overview" class="px-xs-2 mx-auto">
      <v-row class="fill-height" justify="space-around" align="center">
        <v-col cols="3">
          <p v-html="compileMarkdown(introText)" />
        </v-col>

        <v-col
          v-for="col_index in [1, 2]"
          :key="col_index"
          :cols="$vuetify.breakpoint.mdAndUp ? 4 : 6"
        >
          <v-row>
            <v-col
              v-for="(referenceList, r_index) in slicedReferenceLists[
                col_index - 1
              ]"
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
    </div>
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
      return marked.parseInline(string, [])
    },
  },
}
</script>

<style scoped>
div#overview {
  max-width: 1000px;
  padding: 2%;
}
</style>
