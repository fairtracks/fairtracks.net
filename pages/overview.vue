<template>
  <SectionsPageContainer :page-header="pageHeader" :page-header-images="pageHeaderImages">
    <SectionsFairtracksIntro />
  </SectionsPageContainer>
</template>

<script>
export default {
  data() {
    return {
      pageHeader: 'Overview',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'S.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'F.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LGP.svg'),
      ],
    }
  },
  head() {
    return {
      title: 'Overview',
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
