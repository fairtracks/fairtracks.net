<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsPageHeaderBanner
          :page-header="pageHeader"
          :page-header-images="pageHeaderImages"
        />
        <v-container class="py-16">
          <v-row>
            <v-col
              v-for="n in 120"
              :key="n"
              class="d-flex child-flex"
              cols="4"
              xl="3"
            >
              <v-img
                :src="`https://picsum.photos/700?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2 rounded-lg"
              >
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageHeader: 'Material',
      pageHeaderImages: [
        this.createAssetPath('illustrations', 'tracktypes', 'LVP.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'LSF.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'LF.svg'),
      ],
    }
  },
  head() {
    return {
      title: 'Material',
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
