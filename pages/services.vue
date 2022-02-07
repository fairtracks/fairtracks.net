<template>
  <section
    class="fill-height"
    :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
  >
    <UiPageHeaderBanner
      :page-header="pageHeader"
      :page-header-images="pageHeaderImages"
    />
    <SectionsCardMatrixSubSections :card-matrices="cardMatrices">
      <template #default="{ cardId, card }">
        <UiInfoCard :card-id="cardId" :card="card" />
      </template>
    </SectionsCardMatrixSubSections>
    <v-spacer
      :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
    ></v-spacer>
  </section>
</template>

<script>
import {
  mdiApi,
  mdiBookAlphabet,
  mdiChartTimeline,
  mdiCodeJson,
  mdiDatabaseSearchOutline,
  mdiDna,
  mdiExport,
  mdiFileTree,
  mdiIdentifier,
  mdiImport,
    mdiLanguagePython,
    mdiLabel,
  mdiMaterialDesign,
  mdiPlusCircleOutline,
  mdiRoutes,
  mdiScrewdriver,
  mdiTable,
  mdiTagSearchOutline,
  mdiTools,
  mdiWeb,
} from '@mdi/js'

export default {
  data() {
    return {
      pageHeader: 'Services',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'P.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'VP.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LP.svg'),
      ],

      cardMatrices: {
        id: 'fairtracks',
        title: 'The FAIRtracks ecosystem',
        ingress:
          'The FAIRtracks ecosystem contains an interconnected group of services built around ' +
          '[the FAIRtracks draft standard](standards#s01-fairtracks). The services are aimed at ' +
          'gathering, curating, validating, integrating, indexing, and analysing the metadata of genomic tracks.',
        info:
          '(Please refer to the [overview](/overview#ecosystem) page for images of the ' +
          'interconnections between the services, both internally within the FAIRtracks ecosystem, ' +
          'as well as to external services.)',
        subsections: [
          {
            id: 'core',
            subtitle: 'Core services',
            cards: [
              {
                logo: ['logos', 'trackfind.png'],
                title: 'TrackFind',
                subtitle: 'Search engine for genomic track metadata',
                icon: mdiMaterialDesign,
                color: 'green darken-2',
                features: [
                  {
                    icon: mdiFileTree,
                    text: 'Hierarchical browser of the metadata attributes and all values actually present in the database',
                  },
                  {
                    icon: mdiTagSearchOutline,
                    text: 'Categorical search',
                  },
                  {
                    icon: mdiTools,
                    text: 'Graphical builder of SQL-based search queries',
                  },
                  {
                    icon: mdiTable,
                    text: 'Browse results in table or hierarchical form',
                  },
                  {
                    icon: mdiCodeJson,
                    text: 'Export results in JSON or GSuite formats',
                  },
                  {
                    icon: mdiApi,
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

              {
                logo: ['logos', 'FAIRtracks-logo.png'],
                title: 'FAIRtracks augmentation service',
                subtitle: 'Metadata augmentation service',
                icon: mdiMaterialDesign,
                color: 'green darken-2',
                features: [
                  {
                    icon: mdiApi,
                    text: 'RESTful API for automatised augmentation of minimum information',
                  },
                  {
                    icon: mdiImport,
                    text: 'Import a FAIRtracks-annotated JSON file with a minimal set of fields',
                  },
                  {
                    icon: mdiExport,
                    text: 'Export a JSON file with augmented human-readable fields of relevance of downstream users ',
                  },
		    {
			icon: mdiBookAlphabet,
			text: 'Automated retrieve of most recent ontology versions',
                    },
                  {
                    icon: mdiLabel,
                    text: 'Automated generation of human-readable ontology labels',
                  },
                ],
                services: [
                  {
                    text: 'REST API',
                    link: 'https://fairtracks.elixir.no/api/',
                  },
                ],
              },

              {
                logo: ['logos', 'FAIRtracks-logo.png'],
                title: 'FAIRtracks validation service',
                subtitle: 'Metadata validation service',
                icon: mdiMaterialDesign,
                color: 'green darken-2',
                features: [
                  {
                    icon: mdiApi,
                    text: 'RESTful API for validation of JSON files against the FAIRtracks schema',
                  },
                  {
                    icon: mdiCodeJson,
                    text: 'Implementation based on standard JSON Schema validation libraries with additional custom extensions.',
                  },
                  {
                    icon: mdiBookAlphabet,
                    text: 'Validation of ontology terms against specific ontology versions',
                  },
                  {
                    icon: mdiIdentifier,
                    text: 'Validation of CURIEs against entries of the Identifiers.org Resolution Service',
                  },
                  {
                    icon: mdiPlusCircleOutline,
                    text: 'Support for document-set restrictions e.g. "unique" constraints enforcement and "foreignProperty" checks.',
                  },
                ],
                services: [
                  {
                    text: 'REST API',
                    link: 'http://fairtracks.bsc.es/api/',
                  },
                ],
              },
              {
                // logo: ['logos', 'gsuite-hyperbrowser.png'],
                title: 'JSON-to-GSuite converter',
                subtitle:
                  'Convert genomic track metadata to a format compatible with the genomic hyperbrowser',
                icon: mdiMaterialDesign,
                color: 'green darken-2',
                features: [
                  {
                    icon: mdiApi,
                    text: 'TODO',
                  },
                  {
                    icon: mdiCodeJson,
                    text: 'TODO',
                  },
                  {
                    icon: mdiLanguagePython,
                    text: 'TODO',
                  },
                  {
                    icon: mdiBookAlphabet,
                    text: 'TODO',
                  },
                ],
                services: [
                  {
                    text: 'REST API',
                    link: 'http://fairtracks.bsc.es/api/',
                  },
                ],
              },
            ],
          },
          {
            id: 'connected',
            subtitle: 'Connected services',
            cards: [
              {
                logo: ['logos', 'gsuite-hyperbrowser.png'],
                title: 'GSuite HyperBrowser',
                subtitle: 'Statistical analysis framework for track data',
                icon: mdiMaterialDesign,
                color: 'green darken-2',
                features: [
                  {
                    icon: mdiChartTimeline,
                    text: 'The first general framework for statistical analysis of genomic tracks',
                  },
                  {
                    icon: mdiRoutes,
                    text: 'Created at the crossroads of biology, statistics, and computer science',
                  },
                  {
                    icon: mdiWeb,
                    text: 'Open-ended web server, based on the Galaxy web framework',
                  },
                  {
                    icon: mdiDna,
                    text:
                      'Can analyse genomic variation, gene regulation, chromatin structure, ' +
                      '3D genome organization, and more...',
                  },
                  {
                    icon: mdiScrewdriver,
                    text: 'Hundreds of precise tools and analyses',
                  },
                  {
                    icon: mdiDatabaseSearchOutline,
                    text:
                      'Prototype track search and import tool that inspired FAIRtracks is being replaced by ' +
                      'TrackFind client',
                  },
                ],
                services: [
                  { text: 'Web GUI', link: 'https://hyperbrowser.uio.no/' },
                ],
              },
            ],
          },
        ],
      },

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
