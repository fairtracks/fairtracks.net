<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
    grey-background
  >
    <SectionsCardMatrixSubSections :markdown-files-dir="componentId">
      <template #default="{ cardId, card, imageAsset }">
        <UiInfoCard :card-id="cardId" :card="card" :image-asset="imageAsset" />
      </template>
    </SectionsCardMatrixSubSections>
    <v-spacer :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"></v-spacer>
  </SectionsPageContainer>
</template>

<script>
import PageScrollLogic from '~/mixins/page-scroll-logic'

export default {
  mixins: [PageScrollLogic],
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
