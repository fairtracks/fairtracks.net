<template>
  <v-card id="post-card" elevation="1" height="500px" width="100%">
    <p class="card-category my-0" :class="`${post.category}`">{{ post.category }}</p>
    <v-responsive height="162" class="mx-auto">
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
        <div class="text--primary" style="opacity: 60%">
          {{ dateAsStr(locale, post) }}
        </div>
      </v-btn>
    </v-card-subtitle>

    <v-responsive height="96px" class="pa-0">
      <v-card-text class="subtitle-1 font-weight-bold text--primary" style="line-height: 1.6rem">
        {{ post.title }}
      </v-card-text>
    </v-responsive>
    <v-responsive height="120px" class="pa-0">
      <v-chip-group class="pa-4" multiple column active-class="error--text">
        <v-chip v-for="tag in post.tags" :key="tag" disabled outlined x-small style="opacity: 0.9">
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-responsive>
    <v-btn text color="primary" class="ml-3 px-1">
      <a target="_blank" :href="`${post.link}`" style="text-decoration: none">
        <UiSmartIcon :name="post.external ? 'open-in-new' : 'download'" class="mr-2" />
        {{ categoryToLinkText(post.category, post.external) }}
      </a>
    </v-btn>
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
  data() {
    return {
      componentId: 'ui-materials-card',
      locale: null,
    }
  },
  mounted() {
    this.locale = window.navigator.userLanguage || window.navigator.language
  },
  methods: {
    categoryToDateText(category) {
      switch (category) {
        case 'presentation':
          return 'Presented on'
        case 'poster':
          return 'Presented on'
        case 'workshop':
          return 'Conducted on'
        default:
          return 'Published on'
      }
    },
    categoryToLinkText(category, external) {
      switch (category) {
        case 'poster':
          if (external) {
            return 'View poster'
          } else {
            return 'Download poster [pdf]'
          }
        case 'blog':
          return 'Read blog post'
        case 'presentation':
          if (external) {
            return 'View presentation'
          } else {
            return 'Download slides [pdf]'
          }
        default:
          return 'Read full text'
      }
    },
    dateAsStr(locale, post) {
      if (locale && post.date) {
        return new Date(post.date).toLocaleDateString(locale, { dateStyle: 'medium' })
      } else {
        return 'NA'
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
