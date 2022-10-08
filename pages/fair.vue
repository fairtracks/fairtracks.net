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
      componentId: 'fair',
      pageHeader: 'FAIR',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'S.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'S.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'S.svg'),
      ],
    }
  },
  head() {
    return {
      title: 'FAIR',
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
