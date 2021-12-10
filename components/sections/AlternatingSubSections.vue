<template>
  <section id="subsections-alternating">
    <v-row
      v-for="(subSection, index) in subSections"
      :id="subSection.slug"
      :key="index"
      no-gutters
      :class="{ 'flex-row-reverse': index % 2 === 1 }"
    >
      <v-col cols="12" md="6" class="px-md-8 py-md-16 px-11 py-15 ma-auto">
        <v-img
          v-if="subSection.img"
          :max-height="$vuetify.breakpoint.mdAndUp ? '900' : '500'"
          width="100%"
          contain
          :src="createAssetPath('illustrations', page, subSection.img)"
        >
        </v-img>
        <v-container
          v-if="subSection.caption"
          class="body-2 font-italic text-center pt-8"
          v-html="
            compileMarkdown('Figure ' + (index + 1) + ': ' + subSection.caption)
          "
        >
          Figure {{ index + 1 }}: {{ compileMarkdown(subSection.caption) }}
        </v-container>
      </v-col>
      <v-col
        cols="12"
        md="6"
        align-self="center"
        class="px-md-8 py-md-16 px-4 py-8"
      >
        <v-container>
          <h2
            v-if="subSection.title"
            class="text-h3 text-center font-weight-black"
            v-text="subSection.title"
          />
          <h3
            v-if="subSection.ingress"
            class="text-h5 text-uppercase font-weight-light text-center my-8"
            v-text="subSection.ingress"
          />
          <section>
            <nuxt-content :document="subSection" />
          </section>
        </v-container>
        <v-row v-if="subSection.github_text" class="d-flex justify-center">
          <v-col cols="12" class="d-flex justify-center">
            <v-icon size="24px" class="px-2">mdi-github</v-icon>
            <div class="font-weight-medium">GitHub repository:</div>
          </v-col>
          <v-col
            v-if="subSection.github_link"
            cols="12"
            class="d-flex justify-center"
          >
            <a :href="subSection.github_link"> {{ subSection.github_text }}</a>
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
    page: {
      type: String,
      default: '',
    },
    subSections: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    compileMarkdown(string) {
      return marked.parseInline(string, [])
    },
  },
}
</script>

<style>
.nuxt-content p {
  margin: 16px;
}
</style>
