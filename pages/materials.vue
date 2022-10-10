<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
    grey-background
    set-margins
  >
    <SectionsCardLayout :markdown-files-dir="markdownFilesDir" sort-categories>
      <template #default="{ post }">
        <UiMaterialsCard :post="post" />
      </template>
    </SectionsCardLayout>

    <v-spacer :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"></v-spacer>
  </SectionsPageContainer>
</template>

<script>
import PageScrollLogic from '~/mixins/page-scroll-logic'

export default {
  mixins: [PageScrollLogic],
  data() {
    return {
      markdownFilesDir: 'materials',
      componentId: 'materials',
      pageHeader: 'Materials',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'S.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'F.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LGP.svg'),
      ],
    }
  },
}
</script>

<style scoped></style>
