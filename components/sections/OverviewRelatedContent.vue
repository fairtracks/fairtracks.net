<template>
  <section
    :id="sectionId"
    class="py-16"
    :class="
      darkBackground
        ? $vuetify.theme.dark
          ? 'darker-background'
          : 'dark-background'
        : $vuetify.theme.dark
        ? null
        : 'light-background'
    "
  >
    <v-container grid-list-sm fluid>
      <v-row>
        <v-col class="text-center">
          <h2 class="text-h4 text-md-h3 text-center font-weight-black">
            {{ markdownFile.title }}
          </h2>
          <div
            class="text-left text-p px-10 py-10 my-0"
            :class="$vuetify.breakpoint.mdAndUp ? 'two-column' : null"
          >
            <nuxt-content :document="markdownFile" />
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          v-for="(refList, index) in markdownFile.refLists"
          :key="index"
          cols="12"
          sm="3"
          class="text-center"
        >
          <v-avatar
            size="100"
            color="primary lighten-2"
            class="font-weight-bold mb-5"
            style="opacity: 1.15"
          >
            <span class="v-avatar-text">{{ refList }}</span>
          </v-avatar>
          <v-row v-for="(ref, refIndex) in references[refList]" :key="refIndex" class="text-center">
            <v-col class="text-center">
              <h3>
                <nuxt-link
                  :to="{
                    path: ref.generalDescription.page + '/',
                    hash: ref.generalDescription.slug,
                  }"
                >
                  {{ ref.generalDescription.title }}
                </nuxt-link>
              </h3>
              <p>{{ ref.generalDescription.generalDescription }}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    sectionId: {
      type: String,
      required: true,
    },
    markdownFile: {
      type: Object,
      required: true,
    },
    darkBackground: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    references() {
      const refs = {}
      if (this.markdownFile.refLists) {
        for (const refList of this.markdownFile.refLists) {
          refs[refList] = this.$store
            .$db()
            .model('user-type')
            .query()
            .withAllRecursive()
            .whereId(this.sectionId.split('-').slice(2).join('-'))
            .first()
            .references.filter((ref) => ref.generalDescription.page === refList)
        }
      }
      return refs
    },
  },
}
</script>

<style scoped>
.two-column {
  column-count: 2;
  column-gap: 40px;
}

.v-avatar-text {
  color: white;
}

.v-avatar-text::first-letter {
  text-transform: capitalize;
}

.darker-background {
  background-color: var(--v-primary-darken1);
  color: white;
}

.dark-background {
  background-color: var(--v-primary-base);
  color: white;
}

.light-background {
  background-color: white;
  color: black;
}
</style>

<style>
.two-column .nuxt-content > p:first-child {
  margin-top: 0px;
}
</style>
