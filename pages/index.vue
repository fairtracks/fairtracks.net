<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
    section-id="fairtracks"
  >
    <div v-for="(indexMdFile, index) in indexFiles.markdownFiles" :key="index">
      <SectionsOverviewIntro
        v-if="indexMdFile.type === 'intro'"
        :section-id="indexMdFile.slug"
        :markdown-file="indexMdFile"
        :intro-card-files="introCardFiles"
        :news-slides-files="newsSlideFiles"
        :carousel-id="`${indexMdFile.slug}-carousel`"
        :dark-background="isOdd(index) ? true : null"
      />
      <SectionsOverviewRelatedContent
        v-if="indexMdFile.type === 'related_content'"
        :section-id="indexMdFile.slug"
        :markdown-file="indexMdFile"
        :dark-background="isOdd(index) ? true : null"
      />
    </div>
  </SectionsPageContainer>
</template>

<script>
export default {
  async asyncData({ $content, $loadMarkdownFiles }) {
    const [indexFiles, introCardFiles, newsSlideFiles] = await Promise.all([
      $loadMarkdownFiles('index', $content),
      $loadMarkdownFiles('index/intro-cards', $content),
      $loadMarkdownFiles('index/news-slides', $content),
    ])
    return { indexFiles, introCardFiles, newsSlideFiles }
  },
  data() {
    return {
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
  methods: {
    isOdd(n) {
      return Math.abs(n % 2) === 1
    },
  },
}
</script>
