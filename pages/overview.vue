<template>
  <section>
    <UiPageHeaderBanner
      :page-header="pageHeader"
      :page-header-images="pageHeaderImages"
    />
    <v-container>
      <SectionsFairtracksIntro />
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageHeader: 'Overview',
      pageHeaderImages: [
        this.createAssetPath('illustrations', 'tracktypes', 'S.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'F.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'LGP.svg'),
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
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        // },
      ],
    }
  },
}
</script>
