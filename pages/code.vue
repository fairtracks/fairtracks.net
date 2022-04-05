<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
    grey-background
  >
    <v-data-iterator :items="repos" item-key="repo">
      <template #default="{ items }">
        <v-row class="mt-4 mx-4">
          <v-col v-for="(repo, r_index) in items" :key="`r_${r_index}`" cols="12">
            <v-card>
              <v-card-title>{{ repo.title }} </v-card-title>
              <v-list two-line>
                <v-list-item
                  v-for="(infoItem, i_index) in repoInfoItems[repo.name]"
                  :key="`i_${r_index}_${i_index}`"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ infoItem.title }}</v-list-item-title>
                    <v-list-item-subtitle v-if="!infoItem.clientRender">{{
                      infoItem.value
                    }}</v-list-item-subtitle>
                    <v-list-item-subtitle v-else-if="infoItem.clientRender === 'relativeDate'">
                      <client-only
                        :key="`i_${r_index}_${i_index}_${keyUpdateIndex}`"
                        placeholder="Loading..."
                      >
                        {{ renderRelativeDate(infoItem.value) }}
                      </client-only>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </SectionsPageContainer>
</template>

<script>
import {
  GITHUB_G_GET_ALL_REPOS,
  GITHUB_G_GET_REPO_URL,
  GITHUB_G_GET_REPO_OPEN_ISSUES,
  GITHUB_G_GET_REPO_LANGUAGE,
  GITHUB_G_GET_REPO_COMMIT_COUNT,
  GITHUB_G_GET_REPO_FIRST_COMMIT_DATE,
  GITHUB_G_GET_REPO_LAST_COMMIT_DATE,
  GITHUB_G_GET_REPO_TOP_COMMITTERS,
} from '../store/github/constants'

export default {
  asyncData({ store }) {
    const repos = store.getters[GITHUB_G_GET_ALL_REPOS]
    const repoInfoItems = {}
    for (const repo of repos) {
      repoInfoItems[repo.name] = [
        {
          title: 'Repository URL',
          value: store.getters[GITHUB_G_GET_REPO_URL](repo),
          clientRender: false,
        },
        {
          title: 'Open issues',
          value: store.getters[GITHUB_G_GET_REPO_OPEN_ISSUES](repo),
          clientRender: false,
        },
        {
          title: 'Main programming language',
          value: store.getters[GITHUB_G_GET_REPO_LANGUAGE](repo),
          clientRender: false,
        },
        {
          title: 'Time of first commit',
          value: store.getters[GITHUB_G_GET_REPO_FIRST_COMMIT_DATE](repo),
          clientRender: 'relativeDate',
        },
        {
          title: 'Time of most recent commit',
          value: store.getters[GITHUB_G_GET_REPO_LAST_COMMIT_DATE](repo),
          clientRender: 'relativeDate',
        },
        {
          title: repo.parentCommit
            ? `#Commits (children of parent commit "${repo.parentCommit}")`
            : '#Commits (total)',
          value: store.getters[GITHUB_G_GET_REPO_COMMIT_COUNT](repo),
          clientRender: false,
        },
        {
          title: 'Top 3 committers',
          value: store.getters[GITHUB_G_GET_REPO_TOP_COMMITTERS](repo),
          clientRender: false,
        },
      ]
    }
    // console.log(repoInfoItems)
    return { repos, repoInfoItems }
  },
  data() {
    return {
      keyUpdateIndex: 0,
      pageHeader: 'Code',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'VS.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'SF.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'F.svg'),
      ],
    }
  },
  head() {
    return {
      title: 'Code',
      meta: [
        // // TODO: BioSchemas metadata to appear here?
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content:
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm'
        // },
      ],
    }
  },
  created() {
    this.timer = setInterval(this.forceRerender, 60000)
  },
  mounted() {
    this.forceRerender()
  },
  methods: {
    renderRelativeDate(date) {
      return this.$dayjs(date).fromNow()
    },
    forceRerender() {
      this.keyUpdateIndex += 1
    },
  },
}
</script>
