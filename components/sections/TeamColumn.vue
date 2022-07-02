<template>
  <section :class="$vuetify.theme.dark ? 'primary' : 'grey lighten-4'" class="pa-16">
    <v-row no-gutters>
      <UiMinorTitle :title="teamName" />
      <v-col v-for="(group, i) in ourTeam" :key="`group-${i}`" cols="12">
        <h4 class="text-h5 text-center pb-5 pt-15 px-5">{{ group.group }}</h4>

        <v-row>
          <v-col v-for="(item, j) in group.members" :key="`person-${j}`" cols="12">
            <v-row class="mx-auto team-column py-0" :class="{ 'flex-row-reverse': j % 2 === 1 }">
              <v-col cols="6" class="pa-0">
                <UiSmartImg
                  :image-asset="$getImageAssetObject('images', 'team', item.photo)"
                  :class="j % 2 === 1 ? 'mr-auto' : 'ml-auto'"
                  not-responsive
                  :img-height="imgDimensions ? imgDimensions.height : null"
                  :img-width="imgDimensions ? imgDimensions.width : null"
                />
              </v-col>
              <v-col cols="6" class="my-auto">
                <v-row class="pa-4" :class="j % 2 === 1 ? 'text-right' : 'text-left'">
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
      </v-col>
      <v-col cols="12">
        <h4 class="text-h6 font-italic font-weight-light text-center pb-5 pt-15 px-5">
          * Has changed affiliation since contributing to FAIRtracks
        </h4>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    teamName: {
      type: String,
      default: '',
    },
    ourTeam: {
      type: Array,
      default: () => [],
    },
    imgDimensions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      componentId: 'sections-team-column',
    }
  },
}
</script>

<style scoped>
.team-column {
  max-width: 250px;
  min-width: 250px;
}
</style>
