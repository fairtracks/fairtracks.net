<template>
  <v-card id="post-card" elevation="1" max-width="420px">
    <p class="card-category">{{ post.category }}</p>
    <v-responsive height="162" width="100%">
      <UiZoomableImage
        :image-asset="$getImageAssetObject('materials', 'previews', post.previewImg)"
        max-height="160px"
        width="100%"
        :dialog-buttons="post.dialogButtons"
        crop-bottom
        class="mx-4 thin-border"
      />
    </v-responsive>
    <v-card-title class="justify-center"> {{ post.title }}</v-card-title>

    <v-card-text>{{ post.description }}</v-card-text>
    <v-row align="baseline" class="d-flex justify-space-between px-5">
      <v-btn text color="primary">Read full</v-btn>
      <p>{{ post.date }}</p>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.card-category {
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: #966591;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
}
</style>
