<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
    section-id="fairtracks"
  >
    <div v-for="(indexMdFile, index) in markdownFiles" :key="index">
      <SectionsOverviewIntro
        v-if="indexMdFile.type === 'intro'"
        :section-id="indexMdFile.slug"
        :main-markdown-file="indexMdFile"
        :carousel-id="`${indexMdFile.slug}-carousel`"
        :dark-background="isOdd(index) ? true : null"
      />
      <!--      <SectionsUserTypeRelevantSections-->
      <!--        v-if="indexMdFile.type === 'relevant_sections'"-->
      <!--        :section-id="indexMdFile.slug"-->
      <!--        :markdown-file="indexMdFile"-->
      <!--        :dark-background="isOdd(index) ? true : null"-->
      <!--      />-->
    </div>
  </SectionsPageContainer>
</template>

<script>
import PageScrollLogic from '~/mixins/page-scroll-logic'
import MarkdownSupport from '~/mixins/markdown-support'

export default {
  mixins: [PageScrollLogic, MarkdownSupport],
  data() {
    return {
      componentId: 'index',
      pageHeader: 'The FAIRtracks ecosystem',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'S.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'F.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LGP.svg'),
      ],
    }
  },
  head() {
    return {
      title: 'Home',
      meta: [
        // // TODO: BioSchemas metadata to appear here?
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content:
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm'
        // },
      ],
    }
  },
  computed: {
    // Used by MarkdownSupport mixin to load Markdown files
    markdownFilesDir() {
      return this.componentId
    },
  },
  methods: {
    isOdd(n) {
      return Math.abs(n % 2) === 1
    },
  },
}
</script>
