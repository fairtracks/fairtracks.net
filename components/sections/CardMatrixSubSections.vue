<template>
  <section :id="cardMatrices.id">
    <v-row
      v-if="cardMatrices.title || cardMatrices.ingress || cardMatrices.info"
      class="pt-16 px-8 pb-8"
    >
      <v-col cols="12">
        <UiMainTitle
          :title="cardMatrices.title"
          :ingress="cardMatrices.ingress"
          :info="cardMatrices.info"
        />
      </v-col>
    </v-row>
    <section
      v-for="subSection in cardMatrices.subsections"
      :id="subSection.id"
      :key="subSection.id"
    >
      <v-row
        v-if="subSection.subtitle"
        :id="`${subSection.id}_subtitle`"
        class="px-8 pt-8 pb-8"
        justify="center"
      >
        <UiMinorTitle :title="subSection.subtitle" />
      </v-row>
      <v-row fill-height class="pa-0 pb-16 px-4" justify="space-around">
        <v-col
          v-for="(card, c_index) in subSection.cards"
          :id="createCardId(subSection.id, c_index)"
          :key="createCardId(subSection.id, c_index)"
          cols="auto"
        >
          <slot
            :sub-section-id="subSection.id"
            :card-id="createCardId(subSection.id, c_index)"
            :card="card"
          />
        </v-col>
      </v-row>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    cardMatrices: {
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

