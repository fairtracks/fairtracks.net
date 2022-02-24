<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
    grey-background
  >
    <SectionsCardMatrixSubSections :card-matrices="cardMatrices">
      <template #default="{ subSectionId, cardId, card }">
        <UiMaterialCard
          :sub-section-id="subSectionId"
          :card-id="cardId"
          :card="card"
        />
      </template>
    </SectionsCardMatrixSubSections>
  </SectionsPageContainer>
</template>

<script>
import {
  mdiArrowTopRightBoldBox,
  mdiCalendarCheck,
} from '@mdi/js'

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
        ingress: 'Here you will find a collection of material that showcases work involving FAIRtracks',
        info: 'If you have used FAIRtracks for your work, let us know and we will be happy to mention it here',
        subsections: [
          {
            id: 'publications',
            subtitle: 'Publications',
            cards: [
              {
                previewImg: 'f1000-manuscript-2021.png',
                title:
                  'Recommendations for the FAIRification of genomic track metadata',

                description:
                  'The FAIRtracks paper has been published by F1000Research. The paper describes particular and general challenges when trying to FAIRify metadata of genomic tracks and discuss how the FAIRtracks ecosystem can help. Read our article to learn about how FAIRness of metadata used for genomic tracks. The article was published on 1 April 2021',
                infoItems: [
                  { icon: mdiCalendarCheck, text: 'Published on 1 April 2021'},
                ],
                cardButtons: [
                  { icon: mdiArrowTopRightBoldBox, text: 'Read the full article', url: 'https://f1000research.com/articles/10-268/v1' },
                ],
                dialogButtons: [
                  { text: 'Open', link: 'https://f1000research.com/articles/10-268/v1' },
                ],
              },
              {
                previewImg: 'f1000-blog-post-ad.png',
                title:
                  'FAIRtracks featured in F1000 Article',
                description:
                  'FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.',
                cardButtons: [
                  { icon: mdiArrowTopRightBoldBox, text: 'Read the blog post', url: 'https://blog.f1000.com/2021/12/07/fairtracks/' },
                  { icon: mdiCalendarCheck, text: 'Published on 1 December 2021'},
                ],
                dialogButtons: [
                  { text: 'Open', link: 'https://blog.f1000.com/2021/12/07/fairtracks/' },
                ],
              },
            ],
          },
          {
            id: 'posters',
            subtitle: 'Posters',
            cards: [
              {
                previewImg: 'Gundersen_Elixir_all_hands_2019_FAIRification.png',
                title:
                  'FAIRtracks presented at ELIXIR All-Hands 2019',
                cardButtons: [
                  { icon: mdiArrowTopRightBoldBox, text: 'View the full poster [PDF format]', url: 'https://fairtracks.net/Gundersen_Elixir_all_hands_2019_FAIRification.pdf' },
                ],
                dialogButtons: [
                  { text: 'Open', link: 'https://fairtracks.net/Gundersen_Elixir_all_hands_2019_FAIRification.pdf' },
                ],
              },
              {
                previewImg: 'Kompova_GCC2019_TrackFind.png',
                title:
                  'TrackFind poster, at Galaxy Community Conference 2019',
                cardButtons: [
                  { icon: mdiArrowTopRightBoldBox, text: 'View the full poster [PDF format]', url: 'https://fairtracks.net/Kompova_GCC2019_TrackFind.pdf' },
                ],
                dialogButtons: [
                  { text: 'Open', link: 'https://fairtracks.net/Kompova_GCC2019_TrackFind.pdf' },
                ],
              },
            ],
          },
          {
            id: 'Presentations',
            subtitle: 'Presentations',
            cards: [
              {
                previewImg: 'Gundersen_Elixir_all_hands_2019_FAIRification.png',
                title:
                  'ELIXIR Webinar on FAIRification of Genomic Tracks',
                cardButtons: [
                  { icon: mdiArrowTopRightBoldBox, text: 'Watch full webinar', url: 'https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks' },
                  { icon: mdiCalendarCheck, text: 'Published on DD MM YYYY'},
                ],
                dialogButtons: [
                  { text: 'Open', link: 'https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks' },
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
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        // },
      ],
    }
  },
}
</script>
