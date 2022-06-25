const NAMESPACE = 'mdRegister/'

export const M_ADD_COMPONENT = 'addComponent'
export const A_ADD_ALL_FETCH_COMPONENTS = 'addAllFetchComponents'
export const G_GET_ALL_REGISTERED_DIRS = 'getAllRegisteredDirs'
export const G_COUNT_FETCH_COMPONENTS_IN_PAGE = 'countFetchComponentsInPage'

export const MD_REG_A_ADD_ALL_FETCH_COMPONENTS = NAMESPACE + A_ADD_ALL_FETCH_COMPONENTS
export const MD_REG_G_COUNT_FETCH_COMPONENTS_IN_PAGE = NAMESPACE + G_COUNT_FETCH_COMPONENTS_IN_PAGE

export const MD_REG_FETCH_COMPONENTS = new Set(['ui-markdown-table'])

export const state = () => ({
  markdownFilesInDir: {},
  componentsPerPage: {},
})

export const mutations = {
  [M_ADD_COMPONENT]: (state, payload) => {
    if (state.componentsPerPage[payload.page] === undefined) {
      state.componentsPerPage[payload.page] = [payload.component]
    } else {
      state.componentsPerPage[payload.page].push(payload.component)
    }
  },
}

export const getters = {
  [G_GET_ALL_REGISTERED_DIRS]: (state) => {
    return Object.keys(state.markdownFilesInDir)
  },

  [G_COUNT_FETCH_COMPONENTS_IN_PAGE]: (state) => (page) => {
    if (page in state.componentsPerPage) {
      return state.componentsPerPage[page].length
    } else {
      return 0
    }
  },
}

export const actions = {
  [A_ADD_ALL_FETCH_COMPONENTS]: ({ getters, commit }) => {
    console.log('Registering all Markdown subcomponents with separate fetch mechanisms...')
    for (const dir of getters[G_GET_ALL_REGISTERED_DIRS]) {
      const page = dir.split('/')[0]

      for (const markdownFile of getters[G_GET_MARKDOWN_FILES_IN_DIR](dir)) {
        for (const child of markdownFile.body.children) {
          if (MD_REG_FETCH_COMPONENTS.has(child.tag)) {
            commit(M_ADD_COMPONENT, { page, component: child.tag })
          }
        }
      }
    }
  },

  async nuxtServerInit(store) {
    return await store.dispatch(MD_REG_A_ADD_ALL_FETCH_COMPONENTS)
  },
}
