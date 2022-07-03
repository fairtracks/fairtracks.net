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
      componentId: 'standards',
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
