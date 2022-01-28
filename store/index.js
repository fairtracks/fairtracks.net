import githubActions from '~/store/github/actions'

export const actions = {
  async nuxtServerInit(store, context) {
    console.assert(process.server)
    await githubActions.nuxtServerInit(store, context)
  },
}
