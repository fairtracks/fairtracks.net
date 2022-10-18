<template>
  <div>
    <section v-for="(subSection, s_index) in markdownFiles" :id="subSection.slug" :key="s_index">
      <v-row class="pa-0 pt-md-16 pt-8" />
      <v-row no-gutters :class="{ 'flex-row-reverse': s_index % 2 === 1 }">
        <UiFigureList class="lg-and-up" :sub-section="subSection" :sub-section-index="s_index" />
        <v-col cols="12" lg="6" align-self="center" class="px-md-8 px-4 pb-0">
          <v-row no-gutters justify="center" class="pa-3">
            <v-col cols="12">
              <UiMainTitle :title="subSection.title" :ingress="subSection.ingress" />
            </v-col>
            <v-col cols="12">
              <nuxt-content :document="subSection" />
            </v-col>
            <UiLinkList v-if="subSection.links" :links="subSection.links" />
          </v-row>
        </v-col>
      </v-row>
      <UiFigureList class="md-and-down" :sub-section="subSection" :sub-section-index="s_index" />
      <UiTableList :sub-section="subSection" :sub-section-index="s_index" />
    </section>
  </div>
</template>

<script>
import MarkdownSupport from '~/mixins/markdown-support'

export default {
  mixins: [MarkdownSupport],
  props: {
    page: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      componentId: 'sections-alternating-sub-sections',
      markdownFilesDir: this.page, // Used by MarkdownSupport mixin to load Markdown files
    }
  },
}
</script>

<style scoped>
@media (min-width: 1264px) {
  .lg-and-up {
    display: block;
  }
}

@media (max-width: 1263px) {
  .lg-and-up {
    display: none;
  }
}

@media (min-width: 1264px) {
  .md-and-down {
    display: none;
  }
}

@media (max-width: 1263px) {
  .md-and-down {
    display: block;
  }
}
</style>
