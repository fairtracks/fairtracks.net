const allRepos = [
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

export const state = () => ({
  repos: {},
})

function createRepoId(owner, name) {
  return `${owner}/${name}`
}

export const mutations = {
  addRepo(state, payload) {
    state.repos[createRepoId(payload.repo.owner, payload.repo.name)] =
      payload.repo
  },
  addRepoSummary(state, payload) {
    // console.log('State:')
    // console.log(state)
    // console.log('Payload:')
    // console.log(payload)
    state.repos[createRepoId(payload.owner, payload.name)].summaries.push({
      title: payload.title,
      value: payload.value,
    })
  },
  addChildCommits(state, payload) {
    // console.log('State:')
    // console.log(state)
    // console.log('Payload:')
    // console.log(payload)
    state.repos[createRepoId(payload.owner, payload.name)].childCommits =
      payload.childCommits
  },
}

export const actions = {
  async gatherRepoInfo(context) {
    for (const repo of allRepos) {
      const repoInfo = await this.$getRepoInfo(
        this.$octokit,
        repo.owner,
        repo.name
      )
      context.commit('addRepo', {
        repo: {
          title: repo.title,
          owner: repo.owner,
          name: repo.name,
          parentCommit: repo.parentCommit,
          info: repoInfo,
          summaries: [],
        },
      })
    }
  },
  async gatherChildCommits(context, payload) {
    const childCommits = await this.$gatherAllChildCommits(
      this.$octokit,
      payload.owner,
      payload.name,
      payload.parentCommit
    )
    context.commit('addChildCommits', {
      owner: payload.owner,
      name: payload.name,
      childCommits,
    })
  },
  addRepoSummary({ commit }, payload) {
    commit('addRepoSummary', payload)
  },
}
