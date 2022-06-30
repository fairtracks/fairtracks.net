<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
    grey-background
  >
    <!--    <SectionsCardMatrixSubSections :card-matrices="cardMatrices">-->
    <!--      <template #default="{ subSectionId, cardId, card }">-->
    <!--        <UiMaterialCard :sub-section-id="subSectionId" :card-id="cardId" :card="card" />-->
    <!--      </template>-->
    <!--    </SectionsCardMatrixSubSections>-->
  </SectionsPageContainer>
</template>

<script>
import { mdiArrowTopRightBoldBox, mdiDownload, mdiCalendarCheck } from '@mdi/js'

export default {
  data() {
    return {
      pageHeader: 'Material',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'LVP.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LSF.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LF.svg'),
      ],

      cardMatrices: {
        id: 'material',
        title: '',
        ingress:
          'Here you will find a collection of material that showcases work involving FAIRtracks',
        info:
          'If you have used FAIRtracks for your work, let us know and we will be happy to ' +
          'mention it here',
        subsections: [
          {
            id: 'all-material',
            cards: [
              {
                type: 'Publication',
                previewImg: 'f1000-manuscript-2021.png',
                title: 'Recommendations for the FAIRification of genomic track metadata',

                description:
                  'The FAIRtracks paper has been published by F1000Research. The paper describes ' +
                  'particular and general challenges when trying to FAIRify metadata of genomic ' +
                  'tracks and discuss how the FAIRtracks ecosystem can help. Read our article to ' +
                  'learn about how FAIRness of metadata used for genomic tracks. The article ' +
                  'was published on 1 April 2021',
                infoItems: [{ icon: mdiCalendarCheck, text: 'Published on 1 April 2021' }],
                cardButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://f1000research.com/articles/10-268/v1',
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://f1000research.com/articles/10-268/v1',
                  },
                ],
              },
              {
                type: 'Publication',
                previewImg: 'kanduri_colocalisation_2019.png',
                title:
                  'Colocalization analyses of genomic elements: approaches, recommendations and ' +
                  'challenges',

                description:
                  'The paper discusses different approaches and provide recommendations for ' +
                  'performing genomic colocalization analysis, and address the challenges to ' +
                  'obtain a robust and biologically meaningful interpretation of genomic region ' +
                  'set data.',
                infoItems: [
                  {
                    icon: mdiCalendarCheck,
                    text: 'Published on 11 October 2018',
                  },
                ],
                cardButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://academic.oup.com/bioinformatics/article/35/9/1615/5126923',
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://academic.oup.com/bioinformatics/article/35/9/1615/5126923',
                  },
                ],
              },
              {
                type: 'Publication',
                previewImg: 'simovski_coloc-stats_2018.png',
                title:
                  'Coloc-stats: a unified web interface to perform colocalization analysis of ' +
                  'genomic features',

                description:
                  'Coloc-stats provides a unified interface to perform colocalization analysis across various analytical methods and method-specific options (e.g. colocalization measures, resolution, null models). Coloc-stats is freely available at https://hyperbrowser.uio.no/coloc-stats/.',
                infoItems: [{ icon: mdiCalendarCheck, text: 'Published on 5 June 2018' }],
                cardButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://academic.oup.com/nar/article/46/W1/W186/5033159',
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://academic.oup.com/nar/article/46/W1/W186/5033159',
                  },
                ],
              },
              {
                type: 'Publication',
                previewImg: 'simovski_gsuite-hyperbrowser_2017.png',
                title:
                  'GSuite HyperBrowser: integrative analysis of dataset collections across the ' +
                  'genome and epigenome',

                description:
                  'GSuite HyperBrowser is an open-source software system that represents a first comprehensive solution for integrative analysis of track collections across the genome and epigenome. The software is available at: https://hyperbrowser.uio.no',
                infoItems: [
                  {
                    icon: mdiCalendarCheck,
                    text: 'Published on 27 April 2017',
                  },
                ],
                cardButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://academic.oup.com/gigascience/article/6/7/gix032/3777985',
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://academic.oup.com/gigascience/article/6/7/gix032/3777985',
                  },
                ],
              },
              {
                type: 'Publication',
                previewImg: 'sandve_genomic-hyperBrowser_2013.png',
                title: 'The Genomic HyperBrowser: an analysis web server for genome-scale data',

                description:
                  'The Genomic HyperBrowser (http://hyperbrowser.uio.no) is an open-ended web server for the analysis of genomic track data. Through the provision of several highly customizable components for processing and statistical analysis of genomic tracks, the HyperBrowser opens for a range of genomic investigations, related to, e.g., gene regulation, disease association or epigenetic modifications of the genome.',
                infoItems: [
                  {
                    icon: mdiCalendarCheck,
                    text: 'Published on 30 April 2013',
                  },
                ],
                cardButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://academic.oup.com/nar/article/41/W1/W133/1095828',
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://academic.oup.com/nar/article/41/W1/W133/1095828',
                  },
                ],
              },
              {
                type: 'Publication',
                previewImg: 'gundersen_track-types_2011.png',
                title: 'Identifying elemental genomic track types and representing them uniformly',

                description: 'Add description.',
                infoItems: [
                  {
                    icon: mdiCalendarCheck,
                    text: 'Published on 30 December 2011',
                  },
                ],
                cardButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-494',
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-494',
                  },
                ],
              },
              {
                type: 'Publication',
                previewImg: 'sandve_genomic-hyperBrowser_2010.png',
                title: 'The Genomic HyperBrowser: inferential genomics at the sequence level',

                description:
                  'Seminal study about the Genomic HyperBrowser; the paper provides a ' +
                  'collection of generic biological investigations that query pairwise ' +
                  'relations between tracks, represented as mathematical objects, ' +
                  'along the genome.',
                infoItems: [
                  {
                    icon: mdiCalendarCheck,
                    text: 'Published on 23 December 2010',
                  },
                ],
                cardButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-12-r121',
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-12-r121',
                  },
                ],
              },
              {
                type: 'Publication',
                previewImg: 'BLUEPRINT_Cell_2016.png',
                title: 'The BLUEPRINT Data Analysis Portal',

                description: 'Add description.',
                infoItems: [
                  {
                    icon: mdiCalendarCheck,
                    text: 'Published on 15 November 2016',
                  },
                ],
                cardButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://doi.org/10.1016/j.cels.2016.10.021',
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the full article',
                    href: 'https://doi.org/10.1016/j.cels.2016.10.021',
                  },
                ],
              },
              {
                type: 'Blog post',
                previewImg: 'f1000-fairtracks-blog-full.png',
                title: 'FAIRtracks featured in F1000 Article',
                description:
                  'FAIRtracks has been featured in a blog post on the F100Researchjournal web ' +
                  'site! The blog post lays out the vision of the FAIRtracks project and makes ' +
                  'an appeal to the community for involvement.',
                infoItems: [
                  {
                    icon: mdiCalendarCheck,
                    text: 'Published on 1 December 2021',
                  },
                ],
                cardButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Read the blog post',
                    href: 'https://blog.f1000.com/2021/12/07/fairtracks/',
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Open in F1000 blognetwork',
                    href: 'https://blog.f1000.com/2021/12/07/fairtracks/',
                  },
                ],
              },
              {
                type: 'Poster',
                previewImg: 'Gundersen_Elixir_all_hands_2019_FAIRification.png',
                title: 'FAIRtracks presented at ELIXIR All-Hands 2019',
                cardButtons: [
                  {
                    icon: mdiDownload,
                    text: 'Open the full poster [PDF format]',
                    href: this.$getNonImageAssetPath(
                      'materials',
                      'posters',
                      'Gundersen_Elixir_all_hands_2019_FAIRification.pdf'
                    ),
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiDownload,
                    text: 'Open the full poster [PDF format]',
                    href: this.$getNonImageAssetPath(
                      'materials',
                      'posters',
                      'Gundersen_Elixir_all_hands_2019_FAIRification.pdf'
                    ),
                  },
                ],
              },
              {
                type: 'Poster',
                previewImg: 'Kompova_GCC2019_TrackFind.png',
                title: 'TrackFind poster, Galaxy Community Conference 2019',
                cardButtons: [
                  {
                    icon: mdiDownload,
                    text: 'Open the full poster [PDF format]',
                    href: this.$getNonImageAssetPath(
                      'materials',
                      'posters',
                      'Kompova_GCC2019_TrackFind.pdf'
                    ),
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiDownload,
                    text: 'Open the full poster [PDF format]',
                    href: this.$getNonImageAssetPath(
                      'materials',
                      'posters',
                      'Kompova_GCC2019_TrackFind.pdf'
                    ),
                  },
                ],
              },
              {
                type: 'Poster',
                previewImg: 'Gundersen_Elixir_all_hands_2018_HyperBrowser.png',
                title: 'The Genomic HyperBrowser, ELIXIR All-Hands 2018',
                cardButtons: [
                  {
                    icon: mdiDownload,
                    text: 'Open the full poster [PDF format]',
                    href: this.$getNonImageAssetPath(
                      'materials',
                      'posters',
                      'Gundersen_Elixir_all_hands_2018_HyperBrowser.pdf'
                    ),
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiDownload,
                    text: 'Open the full poster [PDF format]',
                    href: this.$getNonImageAssetPath(
                      'materials',
                      'posters',
                      'Gundersen_Elixir_all_hands_2018_HyperBrowser.pdf'
                    ),
                  },
                ],
              },
              {
                type: 'Poster',
                previewImg: 'Gundersen_GCCBOSC_2018_Coloc_stats.png',
                title: 'Coloc-stats poster, Galaxy Community Conference 2018',
                cardButtons: [
                  {
                    icon: mdiDownload,
                    text: 'Open the full poster [PDF format]',
                    href: this.$getNonImageAssetPath(
                      'materials',
                      'posters',
                      'Gundersen_GCCBOSC_2018_Coloc_stats.pdf'
                    ),
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiDownload,
                    text: 'Open the full poster [PDF format]',
                    href: this.$getNonImageAssetPath(
                      'materials',
                      'posters',
                      'Gundersen_GCCBOSC_2018_Coloc_stats.pdf'
                    ),
                  },
                ],
              },
              {
                type: 'Poster',
                previewImg: 'Gundersen_Elixir_all_hands_2017_GTrack.png',
                title: 'The GTrack ecosystem poster, ELIXIR All-Hands 2017',
                cardButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'View the published poster',
                    href: 'https://doi.org/10.7490/f1000research.1115292.1',
                  },
                ],
                dialogButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'View the published poster',
                    href: 'https://doi.org/10.7490/f1000research.1115292.1',
                  },
                ],
              },
              {
                type: 'Presentation',
                previewImg: 'Gundersen_Elixir_all_hands_2019_FAIRification.png',
                title: 'ELIXIR Webinar on FAIRification of Genomic Tracks',
                cardButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Watch the full webinar',
                    url: 'https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks',
                  },
                  { icon: mdiCalendarCheck, text: 'Published on DD MM YYYY' },
                ],
                dialogButtons: [
                  {
                    icon: mdiArrowTopRightBoldBox,
                    text: 'Watch the full webinar',
                    link: 'https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks',
                  },
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
      title: 'Material',
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
