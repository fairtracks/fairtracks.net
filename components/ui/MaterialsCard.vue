<template>
  <v-card id="post-card" elevation="1">
    <p class="card-category" :class="`${post.category}`">{{ post.category }}</p>
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
    <p v-if="post.category === 'presentation'" class="mx-5 mt-5 mb-0 text--secondary">
      <v-icon> {{ mdiCalendar }} </v-icon> Presented on: {{ post.date }}
    </p>
    <p v-else-if="post.category === 'workshop'" class="mx-5 mt-5 mb-0 text--secondary">
      <v-icon> {{ mdiCalendar }} </v-icon> Conducted on: {{ post.date }}
    </p>
    <p v-else class="mx-5 mt-5 mb-0 text--secondary">
      <v-icon> {{ mdiCalendar }} </v-icon> Published on: {{ post.date }}
    </p>
    <v-card-title class="justify-center"> {{ post.title }}</v-card-title>

    <v-card-text>{{ post.description }}</v-card-text>
    <v-row class="px-3">
      <v-btn v-if="post.category === 'poster'" text color="primary">
        <v-icon class="mr-2">{{ mdiDownload }}</v-icon> Open poster [pdf]</v-btn
      >
      <v-btn v-else-if="post.category === 'blog'" text color="primary">
        <v-icon class="mr-2">{{ mdiOpenInNew }}</v-icon> Read blog post</v-btn
      >
      <v-btn v-else-if="post.category === 'presentation'" text color="primary">
        <v-icon class="mr-2">{{ mdiDownload }}</v-icon> View slides [pdf]</v-btn
      >
      <v-btn v-else text color="primary">
        <v-icon class="mr-2">{{ mdiOpenInNew }}</v-icon> Read full text</v-btn
      >
    </v-row>
  </v-card>
</template>

<script>
import { mdiOpenInNew, mdiDownload, mdiCalendar } from '@mdi/js'

export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      mdiOpenInNew,
      mdiDownload,
      mdiCalendar,
    }
  },
}
</script>

<style scoped>
.card-category {
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
}

.blog {
  background-color: #966591;
}
.poster {
  background-color: #dec349;
}
.publication {
  background-color: #2a5755;
}
.presentation {
  background-color: #bdbdbd;
}
.workshop {
  background-color: #966591;
}
.media {
  background-color: #966591;
}
</style>
