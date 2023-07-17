<template>
  <v-card :id="post.slug" :key="post.slug" elevation="1" height="500px" width="100%">
    <p class="card-category my-0" :class="`${post.category.toLowerCase()}`">{{ post.category }}</p>
    <v-responsive height="162" class="mx-auto">
      <UiZoomableImage
        :image-asset="$getImageAssetObject('materials', 'previews', post.previewImg)"
        max-height="160px"
        width="100%"
        :dialog-buttons="[dialogButton]"
        crop-bottom
        class="thin-border-bottom"
        :name="post.name"
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
      <v-chip-group class="px-4" multiple column active-class="error--text">
        <v-chip
          v-for="tag in post.tags"
          :key="tag"
          class="px-1"
          disabled
          outlined
          x-small
          style="opacity: 0.9"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-responsive>
    <v-btn text color="primary" class="ml-3 px-1">
      <a target="_blank" :href="dialogButton.href" style="text-decoration: none">
        <UiSmartIcon :name="dialogButton.icon" class="mr-2" />
        {{ dialogButton.text }}
      </a>
    </v-btn>
  </v-card>
</template>

<script>
const BLOG = 'Blog'
const IMAGE = 'Image'
const POSTER = 'Poster'
const PRESENTATION = 'Presentation'
const WORKFLOW = 'Workflow'
// const PUBLICATION = 'Publication'
const NA = 'NA'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      componentId: 'ui-materials-card',
      locale: null,
    }
  },
  computed: {
    dialogButton() {
      return {
        icon: this.post.external ? 'open-in-new' : 'download',
        text: this.categoryToLinkText(this.post.category, this.post.external),
        href: this.post.staticPath ? this.getStaticPath(this.post) : this.post.href,
      }
    },
  },
  mounted() {
    this.locale = window.navigator.userLanguage || window.navigator.language
  },
  methods: {
    categoryToDateText(category) {
      switch (category) {
        case PRESENTATION:
          return 'Presented on'
        case POSTER:
          return 'Presented on'
        case WORKFLOW:
          return 'Conducted on'
        default:
          return 'Published on'
      }
    },
    categoryToLinkText(category, external) {
      switch (category) {
        case IMAGE:
          if (external) {
            return 'View image'
          } else {
            return 'Download image [png]'
          }
        case POSTER:
          if (external) {
            return 'View poster'
          } else {
            return 'Download poster [pdf]'
          }
        case BLOG:
          return 'Read blog post'
        case PRESENTATION:
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
        return NA
      }
    },
    getStaticPath(post) {
      return this.$router.options.base + post.staticPath.join('/')
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

.image {
  background-color: #555555;
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
