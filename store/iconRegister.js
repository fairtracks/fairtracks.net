const NAMESPACE = 'iconRegister/'

const M_CLEAR_STATE = 'clearState'
const M_SET_ICON_SVG_PATHS = 'setIconSvgPaths'
const A_LOAD_ALL_SVG_ICONS = 'loadAllSvgIcons'
const G_GET_SVG_ICON = 'getIcon'

export const IR_A_LOAD_ALL_SVG_ICONS = NAMESPACE + A_LOAD_ALL_SVG_ICONS
export const IR_G_GET_SVG_ICON = NAMESPACE + G_GET_SVG_ICON

const MDI_SVG_ICONS_REGISTER = new Set([
  'api',
  // 'arrow-top-right-bold-box',
  'book-alphabet',
  'book-open-page-variant-outline',
  'bullhorn-variant',
  // 'calendar',
  'calendar-check',
  'chart-bar',
  'chart-timeline',
  'chevron-down',
  'clock-time-three-outline',
  'close',
  'code-json',
  'compass',
  'database-search-outline',
  'dna',
  'door-sliding-open',
  'download',
  'email',
  'export',
  'file-compare',
  'file-tree',
  'format-list-text',
  'format-quote-close',
  'format-quote-open',
  'github',
  'identifier',
  'import',
  'information-variant',
  'label',
  'launch',
  'magnify',
  'magnify-expand',
  'marker',
  'open-in-new',
  'plus-circle-outline',
  'routes',
  'school',
  // 'screwdriver',
  'server',
  'server-network',
  'swap-horizontal',
  'table',
  'tag-search-outline',
  'tools',
  'twitter',
  'weather-night',
  'web',
  'white-balance-sunny',
])

export const state = () => ({
  iconFamilyPaths: {},
})

export const mutations = {
  [M_CLEAR_STATE]: (state) => {
    state.iconFamilyPaths = {}
  },

  [M_SET_ICON_SVG_PATHS]: (state, { family, namesToPaths }) => {
    state.iconFamilyPaths[family] = namesToPaths
  },
}

export const getters = {
  [G_GET_SVG_ICON]: (state) => (family, name) => {
    if (family in state.iconFamilyPaths) {
      if (name in state.iconFamilyPaths[family]) {
        return state.iconFamilyPaths[family][name]
      } else {
        console.log(`Icon ${name} was not found in icon family ${family}`)
        return undefined
      }
    } else {
      console.log(`Icon family name ${name} is not registered.`)
      return undefined
    }
  },
}

function fetchSvgPath(fs, MDI_SVG_ICONS_DIR_PATH, filename) {
  return fs
    .readFileSync(`${MDI_SVG_ICONS_DIR_PATH}/${filename}`, { encoding: 'utf8' })
    .match(/ d="([^"]+)"/)[1]
}

export const actions = {
  [A_LOAD_ALL_SVG_ICONS]: ({ commit }) => {
    const path = require('path')
    const fs = require('fs')

    console.log('Loading registered icons...')

    commit(M_CLEAR_STATE)

    const MDI_SVG_ICONS_DIR_PATH = './node_modules/@mdi/svg/svg/'
    const allMdiIcons = {}

    const files = fs.readdirSync(MDI_SVG_ICONS_DIR_PATH)

    files.forEach((filename) => {
      if (filename.endsWith('.svg')) {
        const name = path.parse(filename).name
        if (MDI_SVG_ICONS_REGISTER.has(name)) {
          allMdiIcons[name] = fetchSvgPath(fs, MDI_SVG_ICONS_DIR_PATH, filename)
        }
      }
    })

    commit(M_SET_ICON_SVG_PATHS, { family: 'mdiSvg', namesToPaths: allMdiIcons })
  },

  nuxtServerInit(store) {
    store.dispatch(IR_A_LOAD_ALL_SVG_ICONS)
  },
}
