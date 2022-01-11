<template>
  <section>
    <UiPageHeaderBanner
      :page-header="pageHeader"
      :page-header-images="pageHeaderImages"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageHeader: 'Code',
      pageHeaderImages: [
        this.createAssetPath('illustrations', 'tracktypes', 'VS.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'SF.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'F.svg'),
      ],
    }
  },
  head() {
    return {
      title: 'Code',
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
