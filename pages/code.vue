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
                    v-for="(infoItem, i_index) in repo.info"
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
  async asyncData({ $octokit, $gatherAllChildCommits }) {
    const repos = [
      {
        title: 'The FAIRtracks.net web site',
        owner: 'fairtracks',
        name: 'fairtracks.net',
        branch: '',
        parentCommit: '',
      },
      // {
      //   title: 'TrackFind',
      //   owner: 'elixir-oslo',
      //   name: 'trackfind',
      //   branch: '',
      //   parentCommit: '',
      // },
      // {
      //   title: 'The Genomic HyperBrowser (TrackFind API Client)',
      //   owner: 'hyperbrowser',
      //   name: 'genomic-hyperbrowser',
      //   branch: 'ft_trackfindclient/elixir_delivery',
      //   parentCommit: '',
      // },
      // {
      //   title: 'Track Hub Registry (FAIRtracks branch)',
      //   owner: 'Ensembl',
      //   name: 'trackhub-registry',
      //   branch: 'fairtracks',
      //   parentCommit: '',
      // },
      // {
      //   title: 'FAIRtracks validator',
      //   owner: 'fairtracks',
      //   name: 'fairtracks_validator',
      //   branch: '',
      //   parentCommit: '',
      // },
      {
        title: 'FAIRtracks augmentation service',
        owner: 'fairtracks',
        name: 'fairtracks_augment',
        branch: '',
        parentCommit: 'c426864deb125459ea08d2151717e78da2b4a91f',
      },
      // {
      //   title: 'FAIRtracks JSON-to-GSuite converter',
      //   owner: 'fairtracks',
      //   name: 'fairtracks_json_to_gsuite',
      //   branch: '',
      //   parentCommit: '',
      // },
      // {
      //   title: 'uniFAIR (under development)',
      //   owner: 'fairtracks',
      //   name: 'unifair',
      //   branch: '',
      //   parentCommit: '',
      // },
    ]
    for (const repo of repos) {
      // console.log($octokit.auth)
      const repoInfo = await $octokit.request('GET /repos/{owner}/{name}', {
        owner: repo.owner,
        name: repo.name,
        type: 'public',
      })
      // console.log(repoInfo)
      const allCommits = await $gatherAllChildCommits(
        $octokit,
        repo.owner,
        repo.name,
        repo.parentCommit
      )
      // console.log(allCommits)
      repo.info = []
      repo.info.push({ title: 'Repository URL', value: repoInfo.data.html_url })
      repo.info.push({ title: 'Open issues', value: repoInfo.data.open_issues })
      repo.info.push({
        title: 'Programming language',
        value: repoInfo.data.language,
      })
      repo.info.push({
        title: 'Time of creation',
        value: repoInfo.data.created_at,
      })
      repo.info.push({
        title: 'Time of last update',
        value: repoInfo.data.updated_at,
      })
      repo.info.push({
        title: repo.parentCommit
          ? `#Commits (children of parent commit "${repo.parentCommit}")`
          : '#Commits (total)',
        value: `${allCommits.size()}`,
      })
    }
    return { repos }
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
