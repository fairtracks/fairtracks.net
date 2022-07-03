import { install } from '@vuex-orm/core'
import githubActions from '~/store/github/actions'
import dataActions from '~/store/data/actions'
import { actions as imageAssetActions } from '~/store/imageAssets'
import { actions as mdRegisterActions } from '~/store/mdRegister'
import database from '~/database'

export const actions = {
  async nuxtServerInit(store, context) {
    if (process.server) {
      await githubActions.nuxtServerInit(store, context)
    }
    await Promise.all([
      await mdRegisterActions.nuxtServerInit(store, context).then(async () => {
        await Promise.all([
          await dataActions.nuxtServerInit(store, context).then(async () => {
            await database.init(store, context)
          }),
        ])
      }),
      await imageAssetActions.nuxtServerInit(store, context),
    ])
  },
}

export const plugins = [install(database.instance())]
