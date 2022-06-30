<template>
  <div>
    <section v-for="(subSection, index) in markdownFiles" :id="subSection.slug" :key="index">
      <v-row no-gutters :class="{ 'flex-row-reverse': index % 2 === 1 }">
        <v-col cols="12" md="6" class="px-md-8 py-md-16 px-11 py-15" align-self="center"
          ><figure>
            <UiSmartImg
              v-if="subSection.img"
              class="mx-auto"
              :max-height="$vuetify.breakpoint.mdAndUp ? '900px' : '600px'"
              contain
              :image-asset="$getImageAssetObjectFromPathArray(subSection.img)"
            />
            <figcaption>
              <p
                v-show="subSection.caption"
                class="body-2 font-italic text-center pt-8"
                v-html="compileMarkdown('Figure ' + (index + 1) + ': ' + subSection.caption)"
              >
                Figure {{ index + 1 }}:
                {{ compileMarkdown(subSection.caption) }}
              </p>
            </figcaption>
          </figure>
        </v-col>
        <v-col cols="12" md="6" align-self="center" class="px-md-8 py-md-16 px-4 py-8">
          <v-row no-gutters justify="center" class="pa-3">
            <v-col cols="12">
              <UiMainTitle :title="subSection.title" :ingress="subSection.ingress" />
            </v-col>
            <v-col cols="12">
              <nuxt-content :document="subSection" />
            </v-col>
            <v-col v-show="subSection.github_text" cols="12">
              <v-row justify="center" class="pa-3">
                <v-col cols="12">
                  <v-row no-gutters justify="center">
                    <v-icon size="24px" class="px-2">{{ mdiGithub }}</v-icon>
                    <div class="font-weight-medium">GitHub repository:</div>
                  </v-row>
                </v-col>
                <v-col v-show="subSection.github_link" cols="12" class="pb-6" justify="center">
                  <v-row no-gutters justify="center">
                    <a :href="subSection.github_link"> {{ subSection.github_text }}</a>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import { mdiGithub } from '@mdi/js'
import MarkdownSupport from '~/mixins/markdown-support'

export default {
  mixins: [MarkdownSupport],
  props: {
    page: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      componentId: 'sections-alternating-sub-sections',
      markdownFilesDir: this.page, // Used by MarkdownSupport mixin to load Markdown files
      mdiGithub,
      content: { markdownFiles: [], imageAssetObjects: {} },
    }
  },
  async fetch() {
    this.content = await this.$loadMarkdownFiles(`pages/${this.page}`, this.$content)
  },
}
</script>
