<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsPageHeaderBanner
          :page-header="pageHeader"
          :page-header-images="pageHeaderImages"
        />
        <v-container class="py-16">
          <h2
            class="text-h4 text-md-h3 text-center font-weight-black text-capitalize"
          >
            The FAIRtracks ecosystem
          </h2>
          <a id="a" />
          <p class="text-h6 text-uppercase font-weight-light text-center my-16">
            Some text here
          </p>
          <v-row>
            <v-col
              v-for="(card, index) in cards"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              xl="2"
              class="text-center"
            >
              <v-card>
                <v-avatar
                  v-if="card.icon"
                  size="80"
                  class="mb-5"
                  color="primary"
                >
                  <v-icon dark large>
                    {{ card.icon }}
                  </v-icon>
                </v-avatar>
                <v-img
                  v-if="card.img"
                  :src="
                    createAssetPath('illustrations', card.img[0], card.img[1])
                  "
                  max-width="200"
                  class="ma-auto"
                />
                <v-card-title
                  class="title mt-1 mb-4"
                  v-text="card.title"
                ></v-card-title>

                <v-card-text>
                  <nuxt-content :document="card" class="text-left" />
                </v-card-text>
                <v-card-actions
                  ><v-btn
                    v-for="(service_text, index) in card.services_texts"
                    key="'s' + index"
                    class="text-weight-light mt-1 mb-4"
                    :href="card.services_links[index]"
                    text
                  >
                    {{ service_text }}
                  </v-btn>
                </v-card-actions>
                <v-row no-gutters>
                  <v-col cols="12"> </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const cards = await $content('services').sortBy('slug', 'asc').fetch()
    return { cards }
  },
  data() {
    return {
      pageHeader: 'Services',
      pageHeaderImages: [
        this.createAssetPath('illustrations', 'tracktypes', 'P.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'VP.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'LP.svg'),
      ],
      // cards: [
      //   {
      //     title: 'TrackFind (Web GUI)',
      //     text: '
      //     href: 'https://trackfind.elixir.no',
      //     img: ['logos', 'trackfind.png'],
      //   },
      //   {
      //     title: 'TrackFind (API)',
      //     href: 'https://trackfind.elixir.no/api',
      //   },
      //   {
      //     title: 'GSuite HyperBrowser (TF client)',
      //     href: 'https://hyperbrowser.uio.no/',
      //   },
      //   {
      //     title: 'BLUEPRINT / EPICO Data Analysis Portal (TF client)',
      //     href: 'http://blueprint-data.bsc.es/',
      //   },
      //   {
      //     title: 'Track Hub Registry (Web GUI)',
      //     href: 'https://trackhubregistry.org/',
      //   },
      //   {
      //     title: 'Track Hub Registry (API)',
      //     href: 'https://trackhubregistry.org/docs/apis',
      //   },
      //   {
      //     title: 'FAIRtracks validator service (API)',
      //     href: 'http://fairtracks.bsc.es/api/',
      //   },
      //   {
      //     title: 'FAIRtracks augmentation service (API)',
      //     href: 'https://fairtracks.elixir.no/api/#api-Augmentation-augment',
      //   },
      //   {
      //     title: 'FAIRtracks JSON-to-GSuite converter (API)',
      //     href: 'https://fairtracks.elixir.no/api/#api-Conversion-json2gsuite',
      //   },
      // ],
    }
  },
  head() {
    return {
      title: 'Services',
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
