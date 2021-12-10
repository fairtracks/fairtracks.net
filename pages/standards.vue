<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsPageHeaderBanner
          :page-header="pageHeader"
          :page-header-images="pageHeaderImages"
        />
      </v-col>
    </v-row>
    <SectionsAlternatingSubSections
      :page="'standards'"
      :sub-sections="markdownFiles"
    />
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const markdownFiles = await $content('standards')
      .sortBy('slug', 'asc')
      .fetch()
    return { markdownFiles }
  },
  data() {
    return {
      pageHeader: 'Standards',
      pageHeaderImages: [
        this.createAssetPath('illustrations', 'tracktypes', 'S.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'VS.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'LVS.svg'),
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
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        // },
      ],
    }
  },
}
</script>
