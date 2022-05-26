<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
    grey-background
  >
    <SectionsCardMatrixSubSections
      :top-matter="indexMdFile"
      :sub-sections-content="subSectionsContent"
    >
      <template #default="{ cardId, card, imageAsset }">
        <UiInfoCard :card-id="cardId" :card="card" :image-asset="imageAsset" />
      </template>
    </SectionsCardMatrixSubSections>
    <v-spacer :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"></v-spacer>
  </SectionsPageContainer>
</template>

<script>
export default {
  async asyncData({ $content, $loadMarkdownFiles }) {
    const [topLevelFiles] = await Promise.all([$loadMarkdownFiles('services', $content)])
    console.assert(
      topLevelFiles.markdownFiles.length === 1 && topLevelFiles.markdownFiles[0].slug === 'index',
      'The "content/services" directory should only contain a single file "index.md", ' +
        'as well as subsection directories.'
    )
    console.log(topLevelFiles.markdownFiles)
    const indexMdFile = topLevelFiles.markdownFiles[0]
    const subSectionsContent = {}
    for (const subSection of indexMdFile.subSections) {
      const [subSectionFiles] = await Promise.all([
        $loadMarkdownFiles(`services/${subSection.id}`, $content),
      ])
      subSectionsContent[subSection.id] = subSectionFiles
    }
    return { indexMdFile, subSectionsContent }
  },
  data() {
    return {
      pageHeader: 'Services',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'P.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'VP.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LP.svg'),
      ],
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
