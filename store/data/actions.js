import {
  A_IMPORT_ALL_CONTENTS,
  DATA_A_IMPORT_ALL_CONTENTS,
  M_STORE_ALL_CONTENTS,
} from '~/store/data/constants'

export default {
  [A_IMPORT_ALL_CONTENTS]: async ({ commit }, $content) => {
    const allContent = await $content('data').fetch()
    commit(M_STORE_ALL_CONTENTS, allContent)
  },

  async nuxtServerInit(store, { $content }) {
    await store.dispatch(DATA_A_IMPORT_ALL_CONTENTS, $content)
  },
}
