<template>
  <section
    :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
    class="pa-16"
  >
    <v-col>
      <v-row class="text-h4 font-weight-black"> The FAIRtracks team </v-row>
      <v-row v-for="(group, i) in ourTeam" :key="`group-${i}`">
        <h4 class="text-h5 text-center pb-5 pt-15 px-5">{{ group.group }}</h4>

        <v-col
          v-for="(item, j) in group.members"
          :key="`person-${j}`"
          cols="12"
        >
          <v-row
            class="mx-auto team-column py-0"
            :class="{ 'flex-row-reverse': j % 2 === 1 }"
          >
            <v-col cols="6" class="pa-0">
              <v-img
                :src="createImgPath('team', item.photo)"
                :lazy-src="createImgPath('team', item.photo)"
                height="135"
                width="102"
                :class="j % 2 === 1 ? 'mr-auto' : 'ml-auto'"
              />
            </v-col>
            <v-col cols="6" class="my-auto">
              <v-row
                class="pa-4"
                :class="j % 2 === 1 ? 'text-right' : 'text-left'"
              >
                <div class="text-h6 font-weight-bold">
                  {{ item.name }}
                </div>
                <div v-if="item.position" class="text-uppercase">
                  {{ item.position }}
                </div>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <h4
        class="
          text-h6
          font-italic font-weight-light
          text-center
          pb-5
          pt-15
          px-5
        "
      >
        * Has changed affiliation since contributing to FAIRtracks
      </h4>
    </v-col>
  </section>
</template>

<script>
export default {
  props: {
    ourTeam: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    createImgPath(page, img) {
      return require(`@/assets/illustrations/${page}/${img}`)
    },
  },
}
</script>

<style scoped>
.team-column {
  max-width: 250px;
  min-width: 250px;
}
</style>
