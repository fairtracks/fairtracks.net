<template>
  <div>
    <section v-for="markdownFile in markdownFiles" :id="markdownFile.id" :key="markdownFile.id">
      <v-row
        v-if="
          !markdownFile.subSection &&
          (markdownFile.title || markdownFile.ingress || markdownFile.info)
        "
        class="pt-16 px-8 pb-8"
      >
        <v-col cols="12">
          <UiMainTitle
            :title="markdownFile.title"
            :ingress="markdownFile.ingress"
            :info="markdownFile.info"
          />
        </v-col>
      </v-row>
      <v-row
        v-if="markdownFile.subSection && markdownFile.title"
        :id="`${markdownFile.id}_title`"
        class="px-8 pt-8 pb-8"
        justify="center"
      >
        <UiMinorTitle :title="markdownFile.title" />
      </v-row>
      <UiCardMatrix
        v-if="markdownFile.subSection"
        :markdown-files-dir="[markdownFilesDir, markdownFile.id].join('/')"
      >
        <template #default="{ cardId, card, imageAsset }">
          <slot :card-id="cardId" :card="card" :image-asset="imageAsset" />
        </template>
      </UiCardMatrix>
    </section>
  </div>
</template>

<script>
import MarkdownSupport from '~/mixins/markdown-support'

export default {
  mixins: [MarkdownSupport],
  props: {
    markdownFilesDir: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      componentId: 'sections-card-matrix-sub-sections',
    }
  },
}
</script>
