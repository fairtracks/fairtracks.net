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
                    v-for="(infoItem, i_index) in repo.summaries"
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
export default {
  async asyncData({ app, params, store }) {
    await store.dispatch('githubRepos/gatherRepoInfo')
    for (const repo of Object.values(store.state.githubRepos.repos)) {
      await store.dispatch('githubRepos/gatherChildCommits', {
        owner: repo.owner,
        name: repo.name,
        parentCommit: repo.parentCommit,
      })
    }

    // Double for loop, as repo needs to be reloaded after gatherChildCommits
    for (const repo of Object.values(store.state.githubRepos.repos)) {
      await store.dispatch('githubRepos/addRepoSummary', {
        owner: repo.owner,
        name: repo.name,
        title: 'Repository URL',
        value: repo.info.data.html_url,
      })

      await store.dispatch('githubRepos/addRepoSummary', {
        owner: repo.owner,
        name: repo.name,
        title: 'Open issues',
        value: repo.info.data.open_issues,
      })

      await store.dispatch('githubRepos/addRepoSummary', {
        owner: repo.owner,
        name: repo.name,
        title: 'Programming language',
        value: repo.info.data.language,
      })

      await store.dispatch('githubRepos/addRepoSummary', {
        owner: repo.owner,
        name: repo.name,
        title: 'Time of creation',
        value: repo.info.data.created_at,
      })

      await store.dispatch('githubRepos/addRepoSummary', {
        owner: repo.owner,
        name: repo.name,
        title: 'Time of last update',
        value: repo.info.data.updated_at,
      })

      await store.dispatch('githubRepos/addRepoSummary', {
        owner: repo.owner,
        name: repo.name,
        title: repo.parentCommit
          ? `#Commits (children of parent commit "${repo.parentCommit}")`
          : '#Commits (total)',
        value: `${repo.childCommits.size()}`,
      })
    }
    return { repos: Object.values(store.state.githubRepos.repos) }
    // /repos/{owner}/{repo}/releases/latest
    //     has_wiki: true,
    //     language: 'Python',
    //     open_issues_count: 19,
    //     size: 372405,

    //     created_at: '2021-05-10T10:23:33Z',

    //     updated_at: '2022-01-20T13:39:06Z',
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
