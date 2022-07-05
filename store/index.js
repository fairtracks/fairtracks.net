import { install } from '@vuex-orm/core'

import { actions as imageAssetActions } from '~/store/imageAssets'
import { actions as iconRegisterActions } from '~/store/iconRegister'
import { actions as mdRegisterActions } from '~/store/mdRegister'
import dataActions from '~/store/data/actions'
import database from '~/database'
import githubActions from '~/store/github/actions'

export const actions = {
  async nuxtServerInit(store, context) {
    async function initAllStores(store, context) {
      await imageAssetActions.nuxtServerInit(store, context)
      iconRegisterActions.nuxtServerInit(store, context)
      await mdRegisterActions.nuxtServerInit(store, context)
      await dataActions.nuxtServerInit(store, context)
      await database.init(store, context)
      if (process.server) {
        await githubActions.nuxtServerInit(store, context)
      }
    }

    await initAllStores(store, context)
    console.log('Initialized all stores.\n') // Line ending needed for 'npm run waitforvuex'
  },
}

export const plugins = [install(database.instance())]
