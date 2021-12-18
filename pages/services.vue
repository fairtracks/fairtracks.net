<template>
  <section
    class="fill-height"
    :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
  >
    <UiPageHeaderBanner
      :page-header="pageHeader"
      :page-header-images="pageHeaderImages"
    />
    <SectionsInfoCards
      :section-id="coreSectionId"
      :title="title"
      :subtitle="coreSubtitle"
      :ingress="ingress"
      :info="info"
      :cards="coreCards"
    />
    <SectionsInfoCards
      :section-id="connectedSectionId"
      :subtitle="connectedTitle"
      :cards="connectedCards"
    />

    <v-spacer
      :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
    ></v-spacer>
    <v-row></v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageHeader: 'Services',
      pageHeaderImages: [
        this.createAssetPath('illustrations', 'tracktypes', 'P.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'VP.svg'),
        this.createAssetPath('illustrations', 'tracktypes', 'LP.svg'),
      ],
      coreSectionId: 'fairtracks',
      title: 'The FAIRtracks ecosystem',
      ingress:
        'The FAIRtracks ecosystem contains an interconnected group of services built around ' +
        '[the FAIRtracks draft standard](/standards#s01-fairtracks). The services are aimed at ' +
        'gathering, curating, validating, integrating, indexing, and analysing the metadata of genomic tracks.',
      info:
        '(Please refer to the [overview](/overview#ecosystem) page for illustrations of the ' +
        'interconnections between the services, both internally within the FAIRtracks ecosystem, ' +
        'as well as to external services.)',
      coreSubtitle: 'Core services',
      coreCards: [
        {
          logo: ['logos', 'trackfind.png'],
          title: 'TrackFind',
          subtitle: 'Search engine for genome track metadata',
          icon: 'mdi-material-design',
          color: 'green darken-2',
          features: [
            {
              icon: 'mdi-file-tree',
              text: 'Hierarchical browser of the metadata attributes and all values actually present in the database',
            },
            {
              icon: 'mdi-tag-search-outline',
              text: 'Categorical search',
            },
            {
              icon: 'mdi-tools',
              text: 'Graphical builder of SQL-based search queries',
            },
            {
              icon: 'mdi-table',
              text: 'Browse results in table or hierarchical form',
            },
            {
              icon: 'mdi-code-json',
              text: 'Export results in JSON or GSuite formats',
            },
            {
              icon: 'mdi-api',
              text: 'REST API for integration into downstream tools and scripts',
            },
          ],
          services: [
            {
              text: 'REST API',
              link: 'https://app.swaggerhub.com/apis-docs/FAIRtracks/TrackFind/1.0.0',
            },
            { text: 'Web GUI', link: 'https://trackfind.elixir.no/' },
          ],
        },
      ],
      connectedSectionId: 'connected',
      connectedTitle: 'Connected services',
      connectedCards: [
        {
          logo: ['logos', 'gsuite-hyperbrowser.png'],
          title: 'GSuite HyperBrowser',
          subtitle: 'Statistical analysis framework for track data',
          icon: 'mdi-material-design',
          color: 'green darken-2',
          features: [
            {
              icon: 'mdi-chart-timeline',
              text: 'The first general framework for statistical analysis of genomic tracks',
            },
            {
              icon: 'mdi-routes',
              text: 'Created at the crossroads of biology, statistics, and computer science',
            },
            {
              icon: 'mdi-web',
              text: 'Open-ended web server, based on the Galaxy web framework',
            },
            {
              icon: 'mdi-dna',
              text:
                'Can analyse genomic variation, gene regulation, chromatin structure, ' +
                '3D genome organization, and more...',
            },
            {
              icon: 'mdi-screwdriver',
              text: 'Hundreds of precise tools and analyses',
            },
            {
              icon: 'mdi-database-search-outline',
              text:
                'Prototype track search and import tool that inspired FAIRtracks is being replaced by ' +
                'TrackFind client',
            },
          ],
          services: [{ text: 'Web GUI', link: 'https://hyperbrowser.uio.no/' }],
        },
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
