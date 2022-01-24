function _getNonImageAssetPath(category, page, filename) {
  return require(`@/assets/${category}/${page}/${filename}`)
}

export default ({ _app }, inject) => {
  inject('getNonImageAssetPath', _getNonImageAssetPath)
}
