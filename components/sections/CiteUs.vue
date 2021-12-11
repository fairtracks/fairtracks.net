<template>
  <section>
    <v-row class="ma-0 pt-16">
      <div class="text-h4 font-weight-bold mb-5">{{ title }}</div>
    </v-row>
    <v-row class="ma-0 pt-0">
      <p class="font-italic">
        {{ text }}
      </p>
      <v-list>
        <v-list-item
          v-for="(reference, index) in references"
          :key="'r_' + index"
        >
          <v-list-item-icon>
            <v-icon color="primary"> {{ reference.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-wrap">
              {{ reference.text }}
              <a v-if="reference.doi" :href="'https://doi.org/' + reference.doi"
                >doi: {{ reference.doi }}</a
              >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
    text: {
      type: String,
      default: '',
    },
    references: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
