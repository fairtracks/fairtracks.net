<template>
  <section :id="topMatter.id">
    <v-row v-if="topMatter.title || topMatter.ingress || topMatter.info" class="pt-16 px-8 pb-8">
      <v-col cols="12">
        <UiMainTitle :title="topMatter.title" :ingress="topMatter.ingress" :info="topMatter.info" />
      </v-col>
    </v-row>
    <section v-for="subSection in topMatter.subSections" :id="subSection.id" :key="subSection.id">
      <v-row
        v-if="subSection.title"
        :id="`${subSection.id}_title`"
        class="px-8 pt-8 pb-8"
        justify="center"
      >
        <UiMinorTitle :title="subSection.title" />
      </v-row>
      <v-row fill-height class="pa-0 pb-16 px-4" justify="space-around">
        <v-col
          v-for="(mdFile, c_index) in subSectionsContent[subSection.id].markdownFiles"
          :id="createCardId(subSection.id, c_index)"
          :key="createCardId(subSection.id, c_index)"
          cols="auto"
        >
          <slot
            :sub-section-id="subSection.id"
            :card-id="createCardId(subSection.id, c_index)"
            :card="mdFile"
            :image-asset="
              mdFile.img ? subSectionsContent[subSection.id].imageAssetObjects[mdFile.img] : null
            "
          />
        </v-col>
      </v-row>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    topMatter: {
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
}
</script>
