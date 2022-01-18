function _getNonImageAssetPath(category, page, filename) {
  return require(`@/assets/${category}/${page}/${filename}`)
}

export default ({ app }, inject) => {
  inject('getNonImageAssetPath', _getNonImageAssetPath)
}
