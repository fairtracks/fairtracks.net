import { M_STORE_ALL_CONTENTS } from '~/store/data/constants'

export default {
  [M_STORE_ALL_CONTENTS]: (state, allContent) => {
    for (const fileContent of allContent) {
      state.contents[fileContent.slug] = fileContent
    }
  },
}
