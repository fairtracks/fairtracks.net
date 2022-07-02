import {
  A_IMPORT_ALL_CONTENTS,
  DATA_A_IMPORT_ALL_CONTENTS,
  M_STORE_ALL_CONTENTS,
} from '~/store/data/constants'

export default {
  [A_IMPORT_ALL_CONTENTS]: async ({ commit }, $content) => {
    console.log('Importing (tab-separated) CSV files from "~/content/data"...')
    const allContent = await $content('data', { deep: true }).fetch()
    commit(M_STORE_ALL_CONTENTS, allContent)
  },

  async nuxtServerInit(store, { $content }) {
    await store.dispatch(DATA_A_IMPORT_ALL_CONTENTS, $content)
  },
}
