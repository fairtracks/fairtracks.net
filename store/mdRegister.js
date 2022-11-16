// import { getPageIfProd } from '~/store/index'

const NAMESPACE = 'mdRegister/'

const M_CLEAR_STATE = 'clearState'

const M_ADD_CONTENTS_TO_DIR = 'addContentsToDir'
const M_INCREASE_LATE_RENDERER_COUNT = 'increaseLateRendererCount'
const A_COUNT_ALL_LATE_RENDERERS = 'countAllLateRenderers'
const A_ADD_MARKDOWN_CONTENT = 'addMarkdownContent'
const G_GET_MARKDOWN_FILES_IN_DIR = 'getMarkdownFilesInDir'
const G_GET_ALL_MARKDOWN_FILES = 'getAllMarkdownFiles'
const G_GET_ALL_REGISTERED_DIRS = 'getAllRegisteredDirs'
const G_GET_LATE_RENDERER_COUNT_IN_PAGE = 'getLateRendererCountInPage'

export const MD_REG_A_COUNT_ALL_LATE_RENDERERS = NAMESPACE + A_COUNT_ALL_LATE_RENDERERS
export const MD_REG_A_ADD_MARKDOWN_CONTENT = NAMESPACE + A_ADD_MARKDOWN_CONTENT
export const MD_REG_G_GET_MARKDOWN_FILES_FOR_DIR = NAMESPACE + G_GET_MARKDOWN_FILES_IN_DIR
export const MD_REG_G_GET_ALL_MARKDOWN_FILES = NAMESPACE + G_GET_ALL_MARKDOWN_FILES
export const MD_REG_G_GET_LATE_RENDERER_COUNT_IN_PAGE =
  NAMESPACE + G_GET_LATE_RENDERER_COUNT_IN_PAGE

// Currently, there is only support for late render components that are imported through MarkDown
export const MD_REG_LATE_RENDERERS = new Set([
  'ui-csv-table',
  'ui-fairtracks-content',
  'ui-numbered-figure',
  'ui-icon-link',
  'ui-quote-text',
])

export const state = () => ({
  markdownFilesInDir: {},
  lateRenderersPerPage: {},
})

export const mutations = {
  [M_CLEAR_STATE]: (state) => {
    state.markdownFilesInDir = {}
    state.lateRenderersPerPage = {}
  },

  [M_INCREASE_LATE_RENDERER_COUNT]: (state, { page, count }) => {
    if (state.lateRenderersPerPage[page] === undefined) {
      state.lateRenderersPerPage[page] = count
    } else {
      state.lateRenderersPerPage[page] += count
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

  [G_GET_LATE_RENDERER_COUNT_IN_PAGE]: (state) => (page) => {
    if (page in state.lateRenderersPerPage) {
      return state.lateRenderersPerPage[page]
    } else {
      return 0
    }
  },
}

function _countChildIfLateRenderer(commit, child, page, count) {
  if (MD_REG_LATE_RENDERERS.has(child.tag)) {
    // console.log(child.tag)
    commit(M_INCREASE_LATE_RENDERER_COUNT, { page, count })
  }
}

function _countLateRenderersInMdFile(commit, markdownFile, page, count) {
  for (const child of markdownFile.body.children) {
    _countChildIfLateRenderer(commit, child, page, count)
    if (child.children) {
      for (const grandChild of child.children) {
        _countChildIfLateRenderer(commit, grandChild, page, count)
      }
    }
  }
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

  [A_COUNT_ALL_LATE_RENDERERS]: ({ getters, commit }) => {
    console.log('Registering all Markdown subcomponents that are late renderers...')
    for (const dir of getters[G_GET_ALL_REGISTERED_DIRS]) {
      const page = dir.split('/')[0]

      for (const markdownFile of getters[G_GET_MARKDOWN_FILES_IN_DIR](dir)) {
        // console.log(markdownFile.slug)
        _countLateRenderersInMdFile(commit, markdownFile, page, 1)

        if (markdownFile.tables && MD_REG_LATE_RENDERERS.has('ui-csv-table')) {
          // console.log(`tables: ${markdownFile.tables.length}`)
          commit(M_INCREASE_LATE_RENDERER_COUNT, { page, count: markdownFile.tables.length })
        }
        if (markdownFile.figures && MD_REG_LATE_RENDERERS.has('ui-numbered-figure')) {
          // Counted twice as UiFigureList is added twice to SectionAlternatingSubSections
          // console.log(`figure: ${markdownFile.figures.length * 2}`)
          commit(M_INCREASE_LATE_RENDERER_COUNT, { page, count: markdownFile.figures.length * 2 })
          for (const figure of markdownFile.figures) {
            if (figure.note) {
              const noteMdFiles = getters[G_GET_MARKDOWN_FILES_IN_DIR]('notes')
              const noteMdFile = noteMdFiles.find((mdFile) => mdFile.slug === figure.note)
              _countLateRenderersInMdFile(commit, noteMdFile, page, 2)
            }
          }
        }
        if (markdownFile.links && MD_REG_LATE_RENDERERS.has('ui-icon-link')) {
          // console.log(`links: ${markdownFile.links.length}`)
          commit(M_INCREASE_LATE_RENDERER_COUNT, { page, count: markdownFile.links.length })
        }
      }
    }
  },

  async nuxtServerInit(store, { $content, _route }) {
    const page = null // getPageIfProd(route)
    return await store.dispatch(MD_REG_A_ADD_MARKDOWN_CONTENT, { $content, page }).then(() => {
      store.dispatch(MD_REG_A_COUNT_ALL_LATE_RENDERERS)
    })
  },
}
