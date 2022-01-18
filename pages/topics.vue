<template>
  <section>
    <UiPageHeaderBanner
      :page-header="pageHeader"
      :page-header-images="pageHeaderImages"
    />
    <SectionsAlternatingSubSections
      :page="'topics'"
      :sub-sections="markdownFiles"
      :image-asset-objects="imageAssetObjects"
    />
  </section>
</template>

<script>
export default {
  asyncData({ $content, $loadMarkdownFiles }) {
    return $loadMarkdownFiles('topics', $content)
  },
  data() {
    return {
      pageHeader: 'Topics',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'VP.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'VS.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'SF.svg'),
      ],
    }
  },
  head() {
    return {
      title: 'Topics',
      meta: [
        // // TODO: BioSchemas metadata to appear here?
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content:
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        // },
      ],
    }
  },
}
</script>
