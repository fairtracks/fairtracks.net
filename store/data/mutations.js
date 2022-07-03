import { M_CLEAR_STATE, M_STORE_ALL_CONTENTS } from '~/store/data/constants'

export default {
  [M_CLEAR_STATE]: (state) => {
    state.contents = {}
  },

  [M_STORE_ALL_CONTENTS]: (state, allContent) => {
    for (const fileContent of allContent) {
      state.contents[fileContent.path] = fileContent
    }
  },
}
