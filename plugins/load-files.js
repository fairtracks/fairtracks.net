import { IA_G_GET_IMAGE_ASSET_OBJECT } from '~/store/imageAssets'
import { MD_REG_G_GET_MARKDOWN_FILES_FOR_DIR } from '~/store/mdRegister'

async function _loadDataFile(filename, $content) {
  return await $content('data', filename).fetch()
}

function _getNonImageFilesFunc() {
  // Other file formats can be added with OR, e.g. "/\.(pdf|mpeg)$/"
  return require.context(`@/assets`, true, /\.(pdf)$/)
}

function _getNonImageAssetPath(category, page, filename) {
  const requirePath = `./${category}/${page}/${filename}`
  return _getNonImageFilesFunc()(requirePath)
}

function _getRequireOptimizedImagesFunc() {
  return require.context(`@/assets`, true, /\.(png|jpe?g|svg)$/)
}

function _getRequireResponsiveImagesFunc() {
  return require.context(
    '@/assets?resize' +
      '&sizes[]=160' +
      '&sizes[]=320' +
      '&sizes[]=640' +
      '&sizes[]=800' +
      '&sizes[]=960' +
      '&sizes[]=1280' +
      '&sizes[]=1440' +
      '&sizes[]=1600' +
      '&sizes[]=1920' +
      '&sizes[]=2560',
    true,
    /\.(png|jpe?g)$/
  )
}

function _getRequireResponsiveWebpImagesFunc() {
  return require.context(
    '@/assets?resize' +
      '&sizes[]=160' +
      '&sizes[]=320' +
      '&sizes[]=640' +
      '&sizes[]=800' +
      '&sizes[]=960' +
      '&sizes[]=1280' +
      '&sizes[]=1440' +
      '&sizes[]=1600' +
      '&sizes[]=1920' +
      '&sizes[]=2560' +
      '&format=webp',
    true,
    /\.(png|jpe?g)$/
  )
}

export default ({ store, $config }, inject) => {
  function _getRequirePlaceholderFunc() {
    return $config.optimizeImages
      ? require.context('@/assets?sqip', true, /\.(png|jpe?g)$/)
      : require.context('@/assets', true, /\.(png|jpe?g)$/)
  }

  // function _logAllImageAssetPath() {
  //   console.log('_getRequireOptimizedImagesFunc:')
  //   console.log(_getRequireOptimizedImagesFunc().keys())
  //   console.log('_getRequireResponsiveImagesFunc:')
  //   console.log(_getRequireResponsiveImagesFunc().keys())
  //   console.log('_getRequireResponsiveWebpImagesFunc:')
  //   console.log(_getRequireResponsiveWebpImagesFunc().keys())
  //   console.log('_getRequirePlaceholderFunc:')
  //   console.log(_getRequirePlaceholderFunc().keys())
  // }

  function _getImageAssetObject(category, group, filename) {
    return _getImageAssetObjectFromPathArray([category, group, filename])
  }

  function _getImageAssetObjectFromPathArray(imgPathArray) {
    return store.getters[IA_G_GET_IMAGE_ASSET_OBJECT](imgPathArray)
  }

  function _loadMarkdownFilesInDir(dir) {
    return store.getters[MD_REG_G_GET_MARKDOWN_FILES_FOR_DIR](dir)
  }

  inject('loadDataFile', _loadDataFile)
  inject('getNonImageAssetPath', _getNonImageAssetPath)
  inject('getImageAssetObject', _getImageAssetObject)
  inject('getImageAssetObjectFromPathArray', _getImageAssetObjectFromPathArray)
  inject('getRequireResponsiveImagesFunc', _getRequireResponsiveImagesFunc)
  inject('getRequireResponsiveWebpImagesFunc', _getRequireResponsiveWebpImagesFunc)
  inject('getRequireOptimizedImagesFunc', _getRequireOptimizedImagesFunc)
  inject('getRequirePlaceholderFunc', _getRequirePlaceholderFunc)
  inject('loadMarkdownFilesInDir', _loadMarkdownFilesInDir)
}
