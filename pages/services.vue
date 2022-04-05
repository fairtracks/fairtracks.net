<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
    grey-background
  >
    <SectionsCardMatrixSubSections :card-matrices="cardMatrices">
      <template #default="{ cardId, card }">
        <UiInfoCard :card-id="cardId" :card="card" />
      </template>
    </SectionsCardMatrixSubSections>
    <v-spacer :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"></v-spacer>
  </SectionsPageContainer>
</template>

<script>
import {
  mdiApi,
  mdiBookAlphabet,
  mdiChartBar,
  mdiChartTimeline,
  mdiCodeJson,
  mdiCompass,
  mdiDatabaseSearchOutline,
  mdiDna,
  mdiDoorSlidingOpen,
  mdiExport,
  mdiFileTree,
  mdiIdentifier,
  mdiImport,
  mdiInformationVariant,
  mdiLabel,
  mdiMarker,
  mdiMaterialDesign,
  mdiPlusCircleOutline,
  mdiRoutes,
  mdiScrewdriver,
  mdiServer,
  mdiSwapHorizontal,
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
          'gathering, curating, validating, integrating, indexing, and analyzing the metadata ' +
          'of genomic tracks.',
        info:
          '(Please refer to the [overview](/overview#ecosystem) page for images of the ' +
          'interconnections between the services, both internally within the FAIRtracks ' +
          'ecosystem, as well as to external services.)',
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
                    text:
                      'Hierarchical browser of the metadata attributes and all values ' +
                      'actually present in the database',
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
                    text: 'RESTful API for automatized augmentation of minimum information',
                  },
                  {
                    icon: mdiImport,
                    text: 'Import a FAIRtracks-annotated JSON file with a minimal set of fields',
                  },
                  {
                    icon: mdiExport,
                    text:
                      'Export a JSON file with augmented human-readable fields of ' +
                      'relevance of downstream users ',
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
                    text:
                      'Implementation based on standard JSON Schema validation libraries ' +
                      'with additional custom extensions',
                  },
                  {
                    icon: mdiBookAlphabet,
                    text: 'Validation of ontology terms against specific ontology versions',
                  },
                  {
                    icon: mdiIdentifier,
                    text:
                      'Validation of CURIEs against entries of the Identifiers.org ' +
                      'Resolution Service',
                  },
                  {
                    icon: mdiPlusCircleOutline,
                    text:
                      'Support for document-set restrictions e.g. "unique" constraints ' +
                      'enforcement and "foreignProperty" checks',
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
                logo: ['logos', 'gsuite.png'],
                title: 'JSON-to-GSuite converter',
                subtitle: 'FAIRtracks JSON to GSuite format conversion service',
                icon: mdiMaterialDesign,
                color: 'green darken-2',
                features: [
                  {
                    icon: mdiTable,
                    text:
                      'GSuite is a tabular text format describing a collection ' +
                      'of genomic tracks',
                  },
                  {
                    icon: mdiInformationVariant,
                    text:
                      'GSuite contains information about track pre-processing, ' +
                      'possible data analysis strategies, and reference genome',
                  },
                  {
                    icon: mdiApi,
                    text:
                      'RESTful API for conversion of FAIRtracks JSON files into ' +
                      'the GSuite format',
                  },
                  {
                    icon: mdiExport,
                    text:
                      'Enabling the TrackFind client in the GSuite HyperBrowser ' +
                      'to output track metadata in the GSuite format',
                  },
                  {
                    icon: mdiTools,
                    text:
                      'Making track collections from particular search queries ' +
                      'consumable by manipulation and analysis tools in the FAIRtracks ' +
                      'ecosystem',
                  },
                ],
                services: [
                  {
                    text: 'REST API',
                    link: 'https://fairtracks.elixir.no/api/#api-Conversion',
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
                      'Can analyze genomic variation, gene regulation, chromatin structure, ' +
                      '3D genome organization, and more...',
                  },
                  {
                    icon: mdiScrewdriver,
                    text: 'Hundreds of precise tools and analyses',
                  },
                  {
                    icon: mdiDatabaseSearchOutline,
                    text:
                      'Prototype track search and import tool that inspired FAIRtracks is ' +
                      'being replaced by TrackFind client',
                  },
                ],
                services: [{ text: 'Web GUI', link: 'https://hyperbrowser.uio.no/' }],
              },
              {
                logo: ['logos', 'trackhub-logo.png'],
                title: 'The Track Hub Registry',
                subtitle: 'A global centralized collection of publicly accessible track hubs',
                icon: mdiMaterialDesign,
                color: 'green darken-2',
                features: [
                  {
                    icon: mdiDoorSlidingOpen,
                    text:
                      'A common point of entry to register data collections into Ensembl ' +
                      'and UCSC genome browsers',
                  },
                  {
                    icon: mdiSwapHorizontal,
                    text:
                      'The exchange format is a set of text files collectively referred ' +
                      'to as a track hub',
                  },
                  {
                    icon: mdiInformationVariant,
                    text:
                      ' Each track is assigned information such as its URL and reference genome. ' +
                      'Additional attributes, including experimental metadata, can be attached',
                  },
                  {
                    icon: mdiMarker,
                    text:
                      'We propose highlighting FAIRtracks-compliant entries and making ' +
                      'them easily available to downstream tools',
                  },
                  {
                    icon: mdiApi,
                    text: 'RESTful API for remote content querying',
                  },
                ],
                services: [
                  { text: 'Webpage', link: 'https://trackhubregistry.org/' },
                  {
                    text: 'REST API',
                    link: 'https://www.trackhubregistry.org/docs/apis',
                  },
                ],
              },
              {
                logo: ['logos', 'blueprint-logo.jpeg'],
                title: 'The BLUEPRINT/EPICO Data Analysis Portal',
                subtitle: 'The BLUEPRINT/EPICO Data Analysis Portal',
                icon: mdiMaterialDesign,
                color: 'green darken-2',
                features: [
                  {
                    icon: mdiCompass,
                    text:
                      'Enables exploration of the behaviour of candidate genes, pathways ' +
                      'or genome regions across the BLUEPRINT datasets',
                  },
                  {
                    icon: mdiChartBar,
                    text: 'Provides insightful views of genomic tracks based on various analyses',
                  },
                  {
                    icon: mdiDna,
                    text: 'Supports different reference genomic assemblies and organisms',
                  },
                  {
                    icon: mdiServer,
                    text:
                      'Designed following the client-server paradigm, which supports ' +
                      'different pluggable data backends at its REST API',
                  },
                  {
                    icon: mdiSwapHorizontal,
                    text:
                      'Integration with the FAIRtracks ecosystem via a dedicated backend ' +
                      'enabling interoperability of queries and data model with the Track Hub API',
                  },
                ],
                services: [
                  { text: 'Webpage', link: 'http://blueprint-data.bsc.es/#!/' },
                  // {
                  //  text: 'REST API',
                  // link: 'https://www.trackhubregistry.org/docs/apis',
                  // },
                ],
              },
            ],
          },
        ],
      },
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
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm'
        // },
      ],
    }
  },
}
</script>
