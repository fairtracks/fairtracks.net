<template>
  <section>
    <v-row no-gutters class="ma-0 pb-4">
      <UiMinorTitle :title="title" />
      <v-col cols="12" class="ma-0">
        <slot></slot>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      componentId: 'sections-sub-section',
    }
  },
}
</script>
