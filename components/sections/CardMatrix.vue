<template>
  <section
    :id="sectionId"
    :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
  >
    <v-row v-if="title" :id="sectionId + '_' + 'title'" class="pt-16 px-8 pb-8">
      <UiMainTitle :title="title" :ingress="ingress" :info="info"
    /></v-row>
    <v-row
      v-if="subtitle"
      :id="sectionId + '_' + 'subtitle'"
      class="px-8 pt-8 pb-8"
      justify="center"
    >
      <UiMinorTitle :title="subtitle" />
    </v-row>
    <v-row fill-height class="pa-0 pb-16 px-8" justify="start">
      <v-col
        v-for="(card, c_index) in cards"
        :id="sectionId + '_c_' + c_index"
        :key="'c_' + c_index"
        cols="12"
        md="6"
        lg="4"
        xl="3"
      >
        <slot :cIndex="c_index" :card="card" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    sectionId: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    ingress: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

