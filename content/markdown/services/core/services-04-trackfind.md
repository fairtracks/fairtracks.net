---
title: TrackFind
subtitle: Search engine for genomic track metadata
img:
  - images
  - logos
  - trackfind-194-[fixed].png
imgDimensions:
  height: 84
  width: 194
features:
  - icon: mdiFileTree
    text:
      Hierarchical browser of the metadata attributes and all values actually present in the
      database
  - icon: mdiTagSearchOutline
    text: Categorical search
  - icon: mdiTools
    text: Graphical builder of SQL-based search queries
  - icon: mdiTable
    text: Browse results in table or hierarchical form
  - icon: mdiCodeJson
    text: Export results in JSON or GSuite formats
  - icon: mdiApi
    text: REST API for integration into downstream tools and scripts
links:
  - id: api
    text: REST API
    href: https://app.swaggerhub.com/apis-docs/FAIRtracks/TrackFind/1.0.0
  - id: web
    text: Web GUI
    href: https://trackfind.elixir.no/
---

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
