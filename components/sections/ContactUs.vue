<template>
  <section>
    <v-row no-gutters class="ma-0">
      <UiMinorTitle :title="title" />
      <v-col cols="12">
        <v-list two-line class="transparent" max-width="100%">
          <v-list-item v-for="(contactPoint, index) in contactPoints" :key="'c_' + index">
            <v-list-item-icon>
              <v-icon :color="$vuetify.theme.dark ? 'accent' : 'primary'">
                {{ contactPoint.icon }}</v-icon
              >
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-wrap">
                {{ contactPoint.title }}
              </v-list-item-title>
              <v-list-item-title class="text-wrap">
                <a :href="contactPoint.link">
                  {{ contactPoint.linkText }}
                </a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="githubIssues">
            <v-list-item-icon>
              <v-icon :color="$vuetify.theme.dark ? 'accent' : 'primary'">
                {{ githubIssues.icon }}</v-icon
              >
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-wrap">
                {{ githubIssues.title }}
              </v-list-item-title>
              <v-list-item-title
                v-for="(repo, index) in githubIssues.repos"
                :key="'r_' + index"
                class="text-wrap"
              >
                <a :href="repo.issuesLink">
                  {{ repo.title }}
                </a>
              </v-list-item-title>
              <v-list-item-title class="text-wrap">
                {{ githubIssues.endComment }}
                <nuxt-link :to="githubIssues.endCommentPageLink">
                  {{ githubIssues.endCommentPageText }}
                </nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
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
    contactPoints: {
      type: Array,
      default: () => [],
    },
    githubIssues: {
      type: Object,
      default: null,
    },
  },
}
</script>
