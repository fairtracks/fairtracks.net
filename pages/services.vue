<template>
  <section fluid class="fill-height">
    <SectionsPageHeaderBanner
      :page-header="pageHeader"
      :page-header-images="pageHeaderImages"
    />
    <SectionsInfoCards
      :cards="cards"
      :title="title"
      :title-id="titleId"
      :ingress="ingress"
      :info="info"
    />
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
      title: 'FAIRtracks services',
      titleId: 'fairtracks',
      ingress:
        'The FAIRtracks ecosystem contains an interconnected group of services built around ' +
        '[the FAIRtracks draft standard](/standards#s01-fairtracks). The services are aimed at ' +
        'gathering, curating, validating, integrating, and indexing the metadata of genomic tracks.',
      info:
        '(Please refer to the [overview](/overview#ecosystem) page for illustrations of the ' +
        'interconnections between the services, both internally within the FAIRtracks ecosystem, ' +
        'as well as to external services.)',
      cards: [
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
