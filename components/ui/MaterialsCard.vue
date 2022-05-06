<template>
  <v-card id="post-card" max-width="450" class="mx-auto" elevation="1" height="500px">
    <p class="card-category my-0" :class="`${post.category}`">{{ post.category }}</p>
    <v-responsive height="162" width="100%">
      <UiZoomableImage
        :image-asset="$getImageAssetObject('materials', 'previews', post.previewImg)"
        max-height="160px"
        width="100%"
        :dialog-buttons="post.dialogButtons"
        crop-bottom
        class="thin-border-bottom"
      />
    </v-responsive>
    <v-card-subtitle class="pb-0">
      <v-btn text small disabled class="px-0 primary--text">
        <div class="primary--text mr-1">{{ categoryToDateText(post.category) }}:</div>
        <div class="text--primary" style="opacity: 60%">{{ post.date }}</div>
      </v-btn>
    </v-card-subtitle>

    <v-responsive height="200px" class="pa-0 mb-4">
      <v-card-text class="title font-weight-bold pb-0 text--primary" style="line-height: 1.6rem">
        {{ post.title }}
      </v-card-text>

      <v-card-text class="text--primary" style="opacity: 85%">
        {{ post.description }}
      </v-card-text>
    </v-responsive>
    <v-btn text color="primary" class="ml-3 px-1">
      <a target="_blank" :href="`${post.link}`" style="text-decoration: none">
        <v-icon class="mr-2">{{ post.external ? mdiOpenInNew : mdiDownload }}</v-icon>
        {{ categoryToLinkText(post.category) }}
      </a>
    </v-btn>
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
  methods: {
    categoryToDateText(category) {
      switch (category) {
        case 'presentation':
          return 'Presented on'
        case 'workshop':
          return 'Conducted on'
        default:
          return 'Published on'
      }
    },
    categoryToLinkText(category) {
      switch (category) {
        case 'poster':
          return 'Open poster [pdf]'
        case 'blog':
          return 'Read blog post'
        case 'presentation':
          return 'View slides [pdf]'
        default:
          return 'Read full text'
      }
    },
    categoryToLinkIcon(external) {
      switch (category) {
        case 'poster':
          return mdiDownload
        case 'blog':
          return mdiOpenInNew
        case 'presentation':
          return 'View slides [pdf]'
        default:
          return 'Read full text'
      }
    },
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
  background-color: #387572;
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
