function _getNonImageFilesFunc() {
  // Other file formats can be added with OR, e.g. "/\.(pdf|mpeg)$/"
  return require.context(`@/assets`, true, /\.(pdf)$/)
}

function _getNonImageAssetPath(category, page, filename) {
  const requirePath = `./${category}/${page}/${filename}`
  return _getNonImageFilesFunc()(requirePath)
}

export default ({ _app }, inject) => {
  inject('getNonImageAssetPath', _getNonImageAssetPath)
}
