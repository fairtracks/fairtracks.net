<template>
  <div>
    <section v-for="(subSection, index) in markdownFiles" :id="subSection.slug" :key="index">
      <v-row class="pa-0 pt-md-16 pt-8" />
      <v-row no-gutters :class="{ 'flex-row-reverse': index % 2 === 1 }">
        <v-col
          cols="12"
          lg="6"
          class="px-md-8 pt-md-0 pb-md-4 px-11 py-7"
          :align-self="subSection.table ? 'end' : 'center'"
        >
          <figure v-if="subSection.img">
            <UiSmartImg
              class="mx-auto"
              :max-width="subSection.img.maxWidth ? subSection.img.maxWidth : '600px'"
              contain
              :image-asset="$getImageAssetObjectFromPathArray(subSection.img.path)"
            />
            <figcaption>
              <p
                v-show="subSection.img.caption"
                class="body-2 font-italic text-center pt-8"
                v-html="compileMarkdown('Figure ' + (index + 1) + ': ' + subSection.img.caption)"
              />
            </figcaption>
          </figure>
        </v-col>
        <v-col cols="12" lg="6" align-self="center" class="px-md-8 px-4 pb-0">
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
                    <UiSmartIcon name="github" size="24px" class="px-2" />
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
      <v-row>
        <v-col class="px-md-16 pb-md-16 px-8 pb-8 pt-0">
          <v-row justify="center">
            <div v-if="subSection.table" :style="'max-width:' + subSection.table.maxWidth">
              <UiMarkdownTable
                class="mx-auto"
                :csv-base-file-name="subSection.table.csvBaseFileName"
                :delimiter="subSection.table.delimiter ? subSection.table.delimiter : null"
                :table-caption="'Table ' + subSection.table.index + ': ' + subSection.table.caption"
                :table-footnote="
                  subSection.table.tableFootnote ? subSection.table.tableFootnote : null
                "
                :items-per-page="subSection.table.itemsPerPage ? subSection.table.itemsPerPage : 5"
              />
            </div>
          </v-row>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
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
      curFigureIndex: 0,
      curTableIndex: 0,
    }
  },
}
</script>
