import { install } from '@vuex-orm/core'

import { actions as imageAssetActions } from '~/store/imageAssets'
import { actions as iconRegisterActions } from '~/store/iconRegister'
import { actions as mdRegisterActions } from '~/store/mdRegister'
import dataActions from '~/store/data/actions'
import database from '~/database'
import githubActions from '~/store/github/actions'

export function getPageIfProd(route) {
  if (process.env.NODE_ENV === 'production') {
    return route.name
  } else {
    return null
  }
}

export const actions = {
  async nuxtServerInit(store, context) {
    async function initAllStores(store, context) {
      await imageAssetActions.nuxtServerInit(store, context) // 19.4k
      iconRegisterActions.nuxtServerInit(store, context) // 12.7k
      await mdRegisterActions.nuxtServerInit(store, context) // 95.8k
      await dataActions.nuxtServerInit(store, context) // 25.9k
      await database.init(store, context) // 16.7k
      if (getPageIfProd(context.route) === 'code') {
        await githubActions.nuxtServerInit(store, context) // 1996k
      }
    }

    await initAllStores(store, context)
    console.log('Initialized all stores.\n') // Line ending needed for 'npm run waitforvuex'
  },
}

export const plugins = [install(database.instance())]
