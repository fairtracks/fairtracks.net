<template>
  <div>
    <section
      v-for="topLevelMdFile in topLevelFiles.markdownFiles"
      :id="topLevelMdFile.id"
      :key="topLevelMdFile.id"
    >
      <v-row
        v-if="
          !topLevelMdFile.subSection &&
          (topLevelMdFile.title || topLevelMdFile.ingress || topLevelMdFile.info)
        "
        class="pt-16 px-8 pb-8"
      >
        <v-col cols="12">
          <UiMainTitle
            :title="topLevelMdFile.title"
            :ingress="topLevelMdFile.ingress"
            :info="topLevelMdFile.info"
          />
        </v-col>
      </v-row>
      <v-row
        v-if="topLevelMdFile.subSection && topLevelMdFile.title"
        :id="`${topLevelMdFile.id}_title`"
        class="px-8 pt-8 pb-8"
        justify="center"
      >
        <UiMinorTitle :title="topLevelMdFile.title" />
      </v-row>
      <v-row
        v-if="topLevelMdFile.subSection"
        fill-height
        class="pa-0 pb-16 px-4"
        justify="space-around"
      >
        <v-col
          v-for="(mdFile, c_index) in subSectionsContent[topLevelMdFile.id].markdownFiles"
          :id="createCardId(topLevelMdFile.id, c_index)"
          :key="createCardId(topLevelMdFile.id, c_index)"
          cols="auto"
        >
          <slot
            :sub-section-id="topLevelMdFile.id"
            :card-id="createCardId(topLevelMdFile.id, c_index)"
            :card="mdFile"
            :image-asset="
              mdFile.img
                ? subSectionsContent[topLevelMdFile.id].imageAssetObjects[mdFile.img]
                : null
            "
          />
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    topLevelFiles: {
      type: Object,
      required: true,
    },
    subSectionsContent: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    createCardId(subSectionId, cardIndex) {
      return `${subSectionId}_c_${cardIndex}`
    },
  },
  data() {
    return {
      componentId: 'sections-card-matrix-sub-sections',
    }
  },
}
</script>
