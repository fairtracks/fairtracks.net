<template>
  <SectionsPageContainer
    :page-header="'Materials'"
    :page-header-images="pageHeaderImages"
    grey-background
    set-margins
  >
    <SectionsMaterialsLayout />
  </SectionsPageContainer>
</template>

<script>
export default {
  data() {
    return {
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'S.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'F.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LGP.svg'),
      ],
    }
  },
}
</script>

<style scoped>

</style>
