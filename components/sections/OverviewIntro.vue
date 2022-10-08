<template>
  <section :id="sectionId" :class="$vuetify.theme.dark ? null : 'light-background'">
    <v-row no-gutters align="center">
      <v-col cols="12" lg="6" class="pt-8 pa-0">
        <v-responsive class="px-16 px-sm-8 mx-auto" max-width="600">
          <UiSmartImg
            :image-asset="
              $vuetify.theme.dark
                ? $getImageAssetObject(
                    'images',
                    'logos',
                    'FAIRtracks-logo-light-white-640-[fixed].png'
                  )
                : $getImageAssetObject('images', 'logos', 'FAIRtracks-logo-640-[fixed].png')
            "
            img-height="100"
            img-width="320"
            not-responsive
          />
          <UiMainTitle
            id="toptext"
            class="text-center"
            :title="mainMarkdownFile.title"
            :subtitle="mainMarkdownFile.subtitle"
            :subtitle-style="$vuetify.theme.dark ? 'color: white;' : 'color: var(--v-info-base);'"
            scale-down-at-sm
          >
            <template #ingress>
              <nuxt-content :document="mainMarkdownFile" />
            </template>
          </UiMainTitle>
        </v-responsive>
      </v-col>
      <v-col cols="12" lg="6" class="pt-8 pb-0">
        <div
          class="thin-border mx-8"
          :style="`border-color: ${
            $vuetify.theme.dark ? 'var(--v-primary-lighten1)' : 'var(--secondary)'
          }`"
        >
          <v-responsive
            height="40"
            width="100%"
            class="ma-0 px-0"
            :class="$vuetify.theme.dark ? 'primary lighten-1' : 'secondary'"
          >
            <v-overlay absolute opacity="0" z-index="3">
              <h5 class="text-h5 font-weight-black text-center">News</h5>
            </v-overlay>
          </v-responsive>
          <SectionsCarouselLayout slides-files-dir="index/news" carousel-id="news" height="456px" />
        </div>
      </v-col>
    </v-row>

    <v-row class="py-8 px-4" justify="space-around">
      <v-col
        v-for="(introCardMdFile, index) in markdownFiles"
        :key="index"
        cols="12"
        lg="4"
        md="6"
        class="py-4 px-0"
      >
        <v-responsive max-width="500px" class="mx-auto">
          <v-row no-gutters justify="space-between" class="px-4 px-lg-8">
            <v-col cols="12">
              <h4
                class="secondary--test text-uppercase mt-1 mb-4"
                style="letter-spacing: 0.15em"
                v-text="introCardMdFile.subtitle"
              />
              <v-responsive
                height="40"
                width="100%"
                class="ma-0 px-0"
                :class="$vuetify.theme.dark ? 'primary lighten-1' : 'secondary'"
              >
                <v-overlay absolute opacity="0" z-index="3">
                  <h5
                    class="text-h5 font-weight-black text-center"
                    v-text="introCardMdFile.title"
                  />
                </v-overlay>
              </v-responsive>
              <nuxt-content :document="introCardMdFile" />
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import MarkdownSupport from '~/mixins/markdown-support'

export default {
  mixins: [MarkdownSupport],
  props: {
    sectionId: {
      type: String,
      required: true,
    },
    mainMarkdownFile: {
      type: Object,
      required: true,
    },
    carouselId: {
      type: String,
      default: '',
    },
    darkBackground: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      componentId: 'sections-overview-intro',
      markdownFilesDir: 'index/intro', // Used by MarkdownSupport mixin to load Markdown files
    }
  },
}
</script>

<style scoped>
.v-avatar-text {
  color: white;
}

.darker-background {
  background-color: var(--v-primary-darken1);
  color: white;
}

.dark-background {
  background-color: var(--v-primary-base);
  color: white;
}

.light-background {
  background-color: white;
  color: black;
}
</style>
