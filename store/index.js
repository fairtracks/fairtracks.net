import { install } from '@vuex-orm/core'
import githubActions from '~/store/github/actions'
import dataActions from '~/store/data/actions'
import database from '~/database'

export const actions = {
  async nuxtServerInit(store, context) {
    if (process.server) {
      await githubActions.nuxtServerInit(store, context)
      await dataActions.nuxtServerInit(store, context)
      await database.init(store, context)
    }
  },
}

export const plugins = [install(database.instance())]
