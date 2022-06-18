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

export default ({ _app, $config }, inject) => {
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
    // _logAllImageAssetPaths()
    const requirePath = `./${category}/${group}/${filename}`
    const isSvgImage = filename.endsWith('.svg')
    return {
      filename,
      isSvgImage,
      responsiveImage: isSvgImage ? null : _getRequireResponsiveImagesFunc()(requirePath),
      responsiveWebpImage: isSvgImage ? null : _getRequireResponsiveWebpImagesFunc()(requirePath),
      optimizedImagePath: _getRequireOptimizedImagesFunc()(requirePath),
      placeholderImagePath: isSvgImage ? null : _getRequirePlaceholderFunc()(requirePath),
    }
  }

  async function _loadMarkdownFiles(page, $content, options = {}) {
    const markdownFiles = await $content(page, options).sortBy('slug', 'asc').fetch()

    // console.log(markdownFiles)
    const imageAssetObjects = {}
    for (const markdownFile of markdownFiles) {
      if (markdownFile.img) {
        if (Array.isArray(markdownFile.img)) {
          console.assert(
            markdownFile.img.length === 3,
            `img array length of markdown file "${markdownFile.slug}" ` +
              `is ${markdownFile.img.length}, expected 3`
          )
          imageAssetObjects[markdownFile.img] = _getImageAssetObject(
            markdownFile.img[0],
            markdownFile.img[1],
            markdownFile.img[2]
          )
        } else {
          imageAssetObjects[markdownFile.img] = _getImageAssetObject(
            'images',
            page,
            markdownFile.img
          )
        }
        delete imageAssetObjects[markdownFile.img].responsiveImage.toString
        delete imageAssetObjects[markdownFile.img].responsiveWebpImage.toString
        // console.log(markdownFile.img)
        // console.log(imageAssetObjects[markdownFile.img])
      }
    }
    return { markdownFiles, imageAssetObjects }
  }

  inject('loadDataFile', _loadDataFile)
  inject('getNonImageAssetPath', _getNonImageAssetPath)
  inject('getImageAssetObject', _getImageAssetObject)
  inject('loadMarkdownFiles', _loadMarkdownFiles)
}
