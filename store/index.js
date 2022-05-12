import githubActions from '~/store/github/actions'
import dataActions from '~/store/data/actions'

export const actions = {
  async nuxtServerInit(store, context) {
    if (process.server) {
      await githubActions.nuxtServerInit(store, context)
      await dataActions.nuxtServerInit(store, context)
    }
  },
}
