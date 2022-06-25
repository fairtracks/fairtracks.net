<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
    grey-background
  >
    <SectionsCardMatrixSubSections
      :top-level-files="topLevelFiles"
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
    const [topLevelFiles] = await Promise.all([$loadMarkdownFiles('pages/services', $content)])
    const subSectionsContent = {}
    for (const topLevelMdFile of topLevelFiles.markdownFiles) {
      if (topLevelMdFile.subSection) {
        console.log(topLevelMdFile.id)
        const [subSectionFiles] = await Promise.all([
          $loadMarkdownFiles(`pages/services/${topLevelMdFile.id}`, $content),
        ])
        subSectionsContent[topLevelMdFile.id] = subSectionFiles
      }
    }
    return { topLevelFiles, subSectionsContent }
  },
  data() {
    return {
      componentId: 'services',
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
