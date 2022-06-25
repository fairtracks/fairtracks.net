<template>
  <section :id="sectionId" :class="$vuetify.theme.dark ? null : 'light-background'">
    <v-row no-gutters align="center">
      <v-col cols="12" lg="6" class="pt-8 pa-0">
        <v-responsive class="mx-auto text-center" max-width="600">
          <v-avatar color="primary" size="70" class="mb-8">
            <v-icon x-large dark>{{ mdiWeb }}</v-icon>
          </v-avatar>
          <UiMainTitle
            :title="markdownFile.title"
            :subtitle="markdownFile.subtitle"
            scale-down-at-sm
          >
            <template #ingress>
              <nuxt-content :document="markdownFile" />
            </template>
          </UiMainTitle>
        </v-responsive>
      </v-col>
      <v-col cols="12" lg="6" class="pt-8 pb-0">
        <div
          class="thin-border"
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
          <SectionsCarouselLayout
            :slides-files="newsSlidesFiles"
            carousel-id="news"
            height="500px"
          />
        </div>
      </v-col>
    </v-row>

    <v-row class="py-8" justify="space-around">
      <v-col
        v-for="(introCardMdFile, index) in introCardFiles.markdownFiles"
        :key="index"
        cols="12"
        lg="4"
        md="6"
        class="pa-4"
      >
        <v-responsive max-width="500px" class="mx-auto">
          <v-row no-gutters justify="space-between" class="px-4 px-lg-8">
            <v-col :cols="introCardMdFile.callout ? 10 : 12">
              <div class="pr-2">
                <div class="text--disabled" v-text="introCardMdFile.subtitle" />
                <h4
                  class="text-uppercase mt-1 mb-4"
                  style="letter-spacing: 0.15em"
                  v-text="introCardMdFile.title"
                />
                <!--                <p v-html="introCardFile.text" />-->
                <nuxt-content :document="introCardMdFile" />
              </div>
            </v-col>
            <v-col v-if="introCardMdFile.callout" cols="2">
              <v-row no-gutters justify="end">
                <span
                  class="text-h3 text-right font-weight-bold grey--text"
                  :style="`opacity: ${$vuetify.theme.dark ? '0.5' : '0.2'}`"
                  >{{ introCardMdFile.callout }}
                </span></v-row
              >
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mdiWeb } from '@mdi/js'

export default {
  props: {
    sectionId: {
      type: String,
      required: true,
    },
    markdownFile: {
      type: Object,
      required: true,
    },
    introCardFiles: {
      type: Object,
      default: () => {},
    },
    carouselId: {
      type: String,
      default: '',
    },
    newsSlidesFiles: {
      type: Object,
      default: () => {},
    },
    darkBackground: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      componentId: 'sections-overview-intro',
      mdiWeb,
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
