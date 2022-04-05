import githubActions from '~/store/github/actions'

export const actions = {
  async nuxtServerInit(store, context) {
    if (process.server) {
      await githubActions.nuxtServerInit(store, context)
    }
  },
}
