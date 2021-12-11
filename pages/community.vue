<template>
  <section>
    <SectionsPageHeaderBanner
      :page-header="pageHeader"
      :page-header-images="pageHeaderImages"
    />
    <v-row no-gutters class="pa-0">
      <v-col md="6" cols="12" class="pa-16 pr-md-8">
        <v-row class="ma-0 pb-8">
          <div class="text-h4 font-weight-bold mb-5">
            Fill out our community survey!
          </div>
          <v-card class="mt-8" href="https://fairtracks.net/survey">
            <v-img
              :src="
                createAssetPath(
                  'illustrations',
                  'media',
                  'FAIRtracks-survey-ad-webpage.png'
                )
              "
            >
            </v-img>
          </v-card>
        </v-row>
        <v-row class="ma-0 pt-16">
          <div class="text-h4 font-weight-bold mb-5">Contact us!</div>
        </v-row>
        <v-row class="ma-0 pt-0">
          <v-list two-line class="transparent" max-width="100%">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-bullhorn-variant</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  Join the FAIRtracks announcement mailing list
                </v-list-item-title>
                <v-list-item-title class="text-wrap">
                  <a
                    href="https://sympa.uio.no/elixir.no/subscribe/fairtracks-info"
                  >
                    Subscribe here
                  </a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-twitter</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  Follow us on Twitter
                </v-list-item-title>
                <v-list-item-title class="text-wrap">
                  <a href="https://twitter.com/fairtracks"> @fairtracks </a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-email</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  Send an e-mail to the international FAIRtracks team
                </v-list-item-title>
                <v-list-item-title class="text-wrap">
                  <a href="mailto:fairtracks@elixir.no">
                    fairtracks@elixir.no
                  </a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-github</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  Submit an issue to a GitHub repo:
                </v-list-item-title>
                <v-list-item-title class="text-wrap">
                  <a
                    href="https://github.com/fairtracks/fairtracks_standard/issues"
                  >
                    The FAIRtracks draft standard
                  </a>
                </v-list-item-title>
                <v-list-item-title class="text-wrap">
                  <a href="https://github.com/elixir-oslo/trackfind/issues">
                    TrackFind
                  </a>
                </v-list-item-title>
                <v-list-item-title class="text-wrap">
                  <a
                    href="https://github.com/fairtracks/fairtracks_validator/issues"
                  >
                    The FAIRtracks validator
                  </a>
                </v-list-item-title>
                <v-list-item-title class="text-wrap">
                  ...or any of the others listed on the
                  <nuxt-link to="/code">source code page</nuxt-link>
                  .
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>
        <v-row class="ma-0 pt-16">
          <div class="text-h4 font-weight-bold mb-5">Cite us!</div>
        </v-row>
        <v-row class="ma-0 pt-0">
          <p class="font-italic">
            Please cite our primary publication in any research that uses or
            extends FAIRtracks:
          </p>
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-school</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  Gundersen, S. et al. Recommendations to the FAIRification of
                  genomic track metadata. F1000Res 10, ELIXIR-268 (2021).
                  <a href="https://doi.org/10.12688/f1000research.28449.1"
                    >doi: 10.12688/f1000research.28449.1</a
                  >
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>
        <v-row class="ma-0 pt-16">
          <div class="text-h4 font-weight-bold mb-5">
            Funding / Acknowledgements
          </div>
        </v-row>
        <v-responsive
          :aspect-ratio="$vuetify.breakpoint.mdAndUp ? 0.35 : 0.7"
          max-height="1000"
        >
          <v-row
            class="ma-0 pt-0 fill-height d-flow align-content-space-around"
          >
            <v-col
              v-for="(logo, i) in logos"
              :key="logo"
              cols="6"
              class="pa-8 my-auto"
            >
              <v-img
                :src="createAssetPath('illustrations', 'logos', logo)"
                contain
                max-width="200"
                class="ma-auto"
              />
            </v-col>
            <v-spacer />
          </v-row>
        </v-responsive>
      </v-col>
      <v-col md="6" cols="12" class="pt-16 pt-md-0">
        <SectionsTeamColumn
          :our-team="ourTeam"
          :team-name="'The FAIRtracks team'"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ourTeam: [
        {
          group:
            'ELIXIR Norway at the Centre for Bioinformatics, University of Oslo (UiO)',
          members: [
            {
              name: 'Sveinung Gundersen',
              position: '',
              photo: 'sveinung-gundersen.png',
            },
            {
              name: 'Dmytro Titov*',
              position: '',
              photo: 'dmytro-titov.png',
            },
            {
              name: 'Radmila Kompova*',
              position: '',
              photo: 'radmila-kompova.png',
            },
            {
              name: 'Ahmed Ghanem',
              position: '',
              photo: 'ahmed-ghanem.png',
            },
            {
              name: 'Nazeefa Fatima',
              position: '',
              photo: 'nazeefa-fatima.png',
            },
            {
              name: 'Federico Bianchini',
              position: '',
              photo: 'federico-bianchini.png',
            },
            {
              name: 'Eivind Hovig',
              position: '',
              photo: 'eivind-hovig.png',
            },
          ],
        },
        {
          group:
            'ELIXIR Spain at the Life Sciences Department from the Barcelona Supercomputer Centre (BSC)',
          members: [
            {
              name: 'José Mariá Fernández',
              position: '',
              photo: 'jose-maria-fernandez.png',
            },
            {
              name: 'Salvador Capella Gutierrez',
              position: '',
              photo: 'salvador-capella-gutierrez.png',
            },
          ],
        },
        {
          group: 'The Track Hub Registry group at EMBL-EBI, Hinxton, UK',
          members: [
            {
              name: 'Sanjay Boddu',
              position: '',
              photo: 'sanjay-boddu.png',
            },
            {
              name: 'Peter Harrison',
              position: '',
              photo: 'peter-harrison.png',
            },
            {
              name: 'Kieron Taylor*',
              position: '',
              photo: 'kieron-taylor.png',
            },
            {
              name: 'Daniel Zerbino*',
              position: '',
              photo: 'daniel-zerbino.png',
            },
          ],
        },
        {
          group:
            'ELIXIR Norway at the Computational Biology Unit, University of Bergen (UiB)',
          members: [
            {
              name: 'Matúš Kalaš',
              position: '',
              photo: 'matus-kalas.png',
            },
          ],
        },
        {
          group:
            'ELIXIR Norway at the Department of Clinical and Molecular Medicine, Norwegian University of Science and Technology (NTNU)',
          members: [
            {
              name: 'Finn Drabløs',
              position: '',
              photo: 'finn-drablos.png',
            },
          ],
        },
      ],
      pageHeader: 'Community',
      pageHeaderImages: [
        this.createAssetPath('illustrations', 'tracktypes', 'LP.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'LS.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'LBP.svg'),
      ],
      logos: [
        'elixir-norway.png',
        'elixir-spain.png',
        'embl-ebi.svg',
        'inb.png',
        'bsc.jpeg',
        'rcn.png',
        'uio.png',
        'uib.png',
        'ntnu.png',
      ],
    }
  },
  head() {
    return {
      title: 'Community',
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

<style scoped>
#footer-top {
  display: none !important;
}

.team-column {
  max-width: 350px;
  min-width: 3 50px;
}
</style>
