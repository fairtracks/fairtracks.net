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
      <template #default="{ subSectionId, cardId, card }">
        <UiMaterialCard
          :sub-section-id="subSectionId"
          :card-id="cardId"
          :card="card"
        />
      </template>
    </SectionsCardMatrixSubSections>
    <v-spacer
      :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
    ></v-spacer>
  </section>
</template>

<script>
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
        title: 'Header?',
        ingress: 'Some text here?',
        info: 'Some text here?',
        subsections: [
          {
            id: 'publications',
            subtitle: 'Publications',
            cards: [
              {
                previewImg: 'f1000-manuscript-2021.png',
                title:
                  'Recommendations for the FAIRification of genomic track metadata',
                cardButtons: [
                  { text: 'Open', link: 'https://www.elixir-europe.org' },
                ],
                dialogButtons: [
                  { text: 'Open', link: 'https://www.elixir-europe.org' },
                ],
              },
              {
                previewImg: 'f1000-manuscript-2021.png',
                title:
                  'Recommendations for the FAIRification of genomic track metadata',
                cardButtons: [
                  { text: 'Open', link: 'https://www.elixir-europe.org' },
                ],
                dialogButtons: [
                  { text: 'Open', link: 'https://www.elixir-europe.org' },
                ],
              },
              {
                previewImg: 'f1000-manuscript-2021.png',
                title:
                  'Recommendations for the FAIRification of genomic track metadata',
                cardButtons: [
                  { text: 'Open', link: 'https://www.elixir-europe.org' },
                ],
                dialogButtons: [
                  { text: 'Open', link: 'https://www.elixir-europe.org' },
                ],
              },
            ],
          },
          {
            id: 'posters',
            subtitle: 'Posters',
            cards: [
              {
                previewImg: 'f1000-manuscript-2021.png',
                title:
                  'Recommendations for the FAIRification of genomic track metadata',
                cardButtons: [
                  { text: 'Open', link: 'https://www.elixir-europe.org' },
                ],
                dialogButtons: [
                  { text: 'Open', link: 'https://www.elixir-europe.org' },
                ],
              },
              {
                previewImg: 'f1000-manuscript-2021.png',
                title:
                  'Recommendations for the FAIRification of genomic track metadata',
                cardButtons: [
                  { text: 'Open', link: 'https://www.elixir-europe.org' },
                ],
                dialogButtons: [
                  { text: 'Open', link: 'https://www.elixir-europe.org' },
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
