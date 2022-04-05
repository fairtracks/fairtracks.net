<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
    section-id="fairtracks"
    set-margins
  >
    <SectionsFairtracksIntro />
    <SectionsOverviewEndUsers />
    <SectionsOverviewDataProviders />
    <SectionsOverviewDevelopers />
    <SectionsOverviewFairCommunity />
  </SectionsPageContainer>
</template>

<script>
export default {
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
}
</script>
