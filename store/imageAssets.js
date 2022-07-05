const NAMESPACE = 'imageAssets/'

const M_CLEAR_STATE = 'clearState'
const M_IMPORT_ALL_FROM_REQUIRE_FUNCS = 'importAllFromRequireFuncs'
const A_INIT_ASSETS = 'initAssets'
const G_GET_IMAGE_ASSET_OBJECT = 'getImageAssetObject'

export const IA_A_INIT_ASSETS = NAMESPACE + A_INIT_ASSETS
export const IA_G_GET_IMAGE_ASSET_OBJECT = NAMESPACE + G_GET_IMAGE_ASSET_OBJECT

export const state = () => ({
  responsiveImages: {},
  responsiveWebpImages: {},
  optimizedImages: {},
  optimizedWebpImages: {},
  placeholderImages: {},
})

export const mutations = {
  [M_CLEAR_STATE]: (state) => {
    state.responsiveImages = {}
    state.responsiveWebpImages = {}
    state.optimizedImages = {}
    state.optimizedWebpImages = {}
    state.placeholderImages = {}
  },

  [M_IMPORT_ALL_FROM_REQUIRE_FUNCS]: (state, { context }) => {
    const requireFuncMapping = {
      responsiveImages: '$getRequireResponsiveImagesFunc',
      responsiveWebpImages: '$getRequireResponsiveWebpImagesFunc',
      optimizedImages: '$getRequireOptimizedImagesFunc',
      optimizedWebpImages: '$getRequireOptimizedWebpImagesFunc',
      placeholderImages: '$getRequirePlaceholderFunc',
    }

    for (const [stateKey, funcName] of Object.entries(requireFuncMapping)) {
      const requireFunc = context[funcName]()
      requireFunc.keys().forEach((requirePath) => {
        const requireObj = requireFunc(requirePath)
        if (requireObj.toString) {
          delete requireObj.toString
        }
        state[stateKey][requirePath] = requireObj
      })
    }
  },
}

export const getters = {
  [G_GET_IMAGE_ASSET_OBJECT]: (state) => (imgPathArray) => {
    const requirePathArray = ['.', ...imgPathArray]
    const filename = requirePathArray[requirePathArray.length - 1]
    const requirePath = requirePathArray.join('/')
    const isSvgImage = filename.endsWith('.svg')
    const isFixedImage =
      filename.endsWith('[fixed].png') ||
      filename.endsWith('[fixed].jpg') ||
      filename.endsWith('[fixed].jpeg')

    return {
      filename,
      isSvgImage,
      responsiveImage: isSvgImage ? null : state.responsiveImages[requirePath],
      responsiveWebpImage: isSvgImage ? null : state.responsiveWebpImages[requirePath],
      optimizedImagePath: state.optimizedImages[requirePath],
      optimizedWebpImagePath: isSvgImage
        ? null
        : isFixedImage
        ? state.optimizedWebpImages[requirePath]
        : null,
      placeholderImagePath: isSvgImage ? null : state.placeholderImages[requirePath],
    }
  },
}

export const actions = {
  [A_INIT_ASSETS]: ({ commit }, context) => {
    console.log('Importing all image assets in all responsive variants...')
    commit(M_CLEAR_STATE)
    commit(M_IMPORT_ALL_FROM_REQUIRE_FUNCS, context)
  },

  async nuxtServerInit(store, context) {
    await store.dispatch(IA_A_INIT_ASSETS, {
      context,
    })
  },
}
