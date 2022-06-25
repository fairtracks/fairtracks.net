<template>
  <SectionsPageContainer :page-header="pageHeader" :page-header-images="pageHeaderImages">
    <SectionsAlternatingSubSections :page="componentId" />
  </SectionsPageContainer>
</template>

<script>
export default {
  data() {
    return {
      componentId: 'topics',
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
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm'
        // },
      ],
    }
  },
}
</script>
