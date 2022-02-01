<template>
  <section>
    <UiPageHeaderBanner
      :page-header="pageHeader"
      :page-header-images="pageHeaderImages"
    />

    <v-data-iterator :items="repos" item-key="repo">
      <template #default="{ items }">
        <v-container>
          <v-row>
            <v-col
              v-for="(repo, r_index) in items"
              :key="`r_${r_index}`"
              cols="12"
            >
              <v-card>
                <v-card-title>{{ repo.title }} </v-card-title>
                <v-list two-line>
                  <v-list-item
                    v-for="(infoItem, i_index) in repoInfoItems[repo.name]"
                    :key="`i_${r_index}_${i_index}`"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{
                        infoItem.title
                      }}</v-list-item-title>
                      <v-list-item-subtitle>{{
                        infoItem.value
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-data-iterator>
  </section>
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
  asyncData({ store, $dayjs }) {
    const repos = store.getters[GITHUB_G_GET_ALL_REPOS]
    const repoInfoItems = {}
    for (const repo of repos) {
      repoInfoItems[repo.name] = [
        {
          title: 'Repository URL',
          value: store.getters[GITHUB_G_GET_REPO_URL](repo),
        },
        {
          title: 'Open issues',
          value: store.getters[GITHUB_G_GET_REPO_OPEN_ISSUES](repo),
        },
        {
          title: 'Main programming language',
          value: store.getters[GITHUB_G_GET_REPO_LANGUAGE](repo),
        },
        {
          title: 'Time of first commit',
          value: $dayjs(
            store.getters[GITHUB_G_GET_REPO_FIRST_COMMIT_DATE](repo)
          ).fromNow(),
        },
        {
          title: 'Time of most recent commit',
          value: $dayjs(
            store.getters[GITHUB_G_GET_REPO_LAST_COMMIT_DATE](repo)
          ).fromNow(),
        },
        {
          title: repo.parentCommit
            ? `#Commits (children of parent commit "${repo.parentCommit}")`
            : '#Commits (total)',
          value: store.getters[GITHUB_G_GET_REPO_COMMIT_COUNT](repo),
        },
        {
          title: 'Top 3 committers',
          value: store.getters[GITHUB_G_GET_REPO_TOP_COMMITTERS](repo),
        },
      ]
    }
    // console.log(repoInfoItems)
    return { repos, repoInfoItems }
  },
  data() {
    return {
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
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        // },
      ],
    }
  },
}
</script>
