<template>
  <SectionsPageContainer :page-header="pageHeader" :page-header-images="pageHeaderImages">
    <SectionsAlternatingSubSections
      :page="'standards'"
      :sub-sections="markdownFiles"
      :image-asset-objects="imageAssetObjects"
    />
  </SectionsPageContainer>
</template>

<script>
export default {
  asyncData({ $content, $loadMarkdownFiles }) {
    return $loadMarkdownFiles('pages/standards', $content)
  },
  data() {
    return {
      pageHeader: 'Standards',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'S.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'VS.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LVS.svg'),
      ],
    }
  },
  head() {
    return {
      title: 'Standards',
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
}
</script>
