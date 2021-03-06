// import { getPageIfProd } from '~/store/index'

const NAMESPACE = 'mdRegister/'

const M_CLEAR_STATE = 'clearState'

const M_ADD_COMPONENT = 'addComponent'
const M_ADD_CONTENTS_TO_DIR = 'addContentsToDir'
const A_ADD_ALL_LATE_RENDERERS = 'addAllLateRenderers'
const A_ADD_MARKDOWN_CONTENT = 'addMarkdownContent'
const G_GET_MARKDOWN_FILES_IN_DIR = 'getMarkdownFilesInDir'
const G_GET_ALL_MARKDOWN_FILES = 'getAllMarkdownFiles'
const G_GET_ALL_REGISTERED_DIRS = 'getAllRegisteredDirs'
const G_COUNT_LATE_RENDERERS_IN_PAGE = 'countLateRenderersInPage'

export const MD_REG_A_ADD_ALL_LATE_RENDERERS = NAMESPACE + A_ADD_ALL_LATE_RENDERERS
export const MD_REG_A_ADD_MARKDOWN_CONTENT = NAMESPACE + A_ADD_MARKDOWN_CONTENT
export const MD_REG_G_GET_MARKDOWN_FILES_FOR_DIR = NAMESPACE + G_GET_MARKDOWN_FILES_IN_DIR
export const MD_REG_G_GET_ALL_MARKDOWN_FILES = NAMESPACE + G_GET_ALL_MARKDOWN_FILES
export const MD_REG_G_COUNT_LATE_RENDERERS_IN_PAGE = NAMESPACE + G_COUNT_LATE_RENDERERS_IN_PAGE

// Currently, ther is only support for late render components that are imported through MarkDown
export const MD_REG_LATE_RENDERERS = new Set(['ui-markdown-table'])

export const state = () => ({
  markdownFilesInDir: {},
  lateRenderersPerPage: {},
})

export const mutations = {
  [M_CLEAR_STATE]: (state) => {
    state.markdownFilesInDir = {}
    state.lateRenderersPerPage = {}
  },

  [M_ADD_COMPONENT]: (state, { page, component }) => {
    if (state.lateRenderersPerPage[page] === undefined) {
      state.lateRenderersPerPage[page] = [component]
    } else {
      state.lateRenderersPerPage[page].push(component)
    }
  },

  [M_ADD_CONTENTS_TO_DIR]: (state, { dir, contents }) => {
    if (state.markdownFilesInDir[dir] === undefined) {
      state.markdownFilesInDir[dir] = [contents]
    } else {
      state.markdownFilesInDir[dir].push(contents)
    }
  },
}

export const getters = {
  [G_GET_ALL_REGISTERED_DIRS]: (state) => {
    return Object.keys(state.markdownFilesInDir)
  },

  [G_GET_MARKDOWN_FILES_IN_DIR]: (state) => (dir) => {
    if (dir in state.markdownFilesInDir) {
      return state.markdownFilesInDir[dir]
    } else {
      console.log(`Warning: Markdown files not found for dir ${dir}.`)
      return []
    }
  },

  [G_GET_ALL_MARKDOWN_FILES]: (state) => {
    const allMarkDownFiles = []
    for (const dir of Object.keys(state.markdownFilesInDir)) {
      Array.prototype.push.apply(allMarkDownFiles, state.markdownFilesInDir[dir])
    }
    return allMarkDownFiles
  },

  [G_COUNT_LATE_RENDERERS_IN_PAGE]: (state) => (page) => {
    if (page in state.lateRenderersPerPage) {
      return state.lateRenderersPerPage[page].length
    } else {
      return 0
    }
  },
}

export const actions = {
  [A_ADD_MARKDOWN_CONTENT]: async ({ commit }, { $content, page }) => {
    console.log('Adding all Markdown content...')

    commit(M_CLEAR_STATE)

    try {
      const allContents = await $content(page ? `/markdown/${page}` : '/markdown', { deep: true })
        .sortBy('slug', 'asc')
        .fetch()

      for (const markdownFile of allContents) {
        const dir = markdownFile.dir.split('/').slice(2).join('/')
        commit(M_ADD_CONTENTS_TO_DIR, { dir, contents: markdownFile })
      }
    } catch (e) {}
  },

  [A_ADD_ALL_LATE_RENDERERS]: ({ getters, commit }) => {
    console.log('Registering all Markdown subcomponents that are late renderers...')
    for (const dir of getters[G_GET_ALL_REGISTERED_DIRS]) {
      const page = dir.split('/')[0]

      for (const markdownFile of getters[G_GET_MARKDOWN_FILES_IN_DIR](dir)) {
        for (const child of markdownFile.body.children) {
          if (MD_REG_LATE_RENDERERS.has(child.tag)) {
            commit(M_ADD_COMPONENT, { page, component: child.tag })
          }
        }
      }
    }
  },

  async nuxtServerInit(store, { $content, _route }) {
    const page = null // getPageIfProd(route)
    return await store.dispatch(MD_REG_A_ADD_MARKDOWN_CONTENT, { $content, page }).then(() => {
      store.dispatch(MD_REG_A_ADD_ALL_LATE_RENDERERS)
    })
  },
}
