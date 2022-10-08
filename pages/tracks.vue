<template>
  <SectionsPageContainer :page-header="pageHeader" :page-header-images="pageHeaderImages">
    <SectionsAlternatingSubSections :page="pageName" />
  </SectionsPageContainer>
</template>

<script>
import PageScrollLogic from '~/mixins/page-scroll-logic'

export default {
  mixins: [PageScrollLogic],
  data() {
    return {
      componentId: 'tracks',
      pageHeader: 'Tracks',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'VP.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'VS.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'SF.svg'),
      ],
    }
  },
  head() {
    return {
      title: 'Tracks',
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
