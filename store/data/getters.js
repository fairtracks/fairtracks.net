import {
  G_GET_CONTENTS,
  G_GET_CONTENTS_BODY,
  G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS,
  G_GET_CONTENTS_BODY_ALL_HEADERS,
} from '~/store/data/constants'

function _getFileContentsFromState(state, baseFilePath) {
  return state.contents[baseFilePath]
}

function _decodeEscapedHtml(text) {
  return text.replace(/&#(\d+);/g, function (_match, charCode) {
    return String.fromCharCode(charCode)
  })
}

export default {
  [G_GET_CONTENTS]: (state) => (baseFilePath) => {
    return _getFileContentsFromState(state, baseFilePath)
  },

  [G_GET_CONTENTS_BODY]: (state) => (baseFilePath) => {
    return _getFileContentsFromState(state, baseFilePath).body.map((row) => {
      return Object.assign({}, row)
    })
  },

  [G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS]: (state) => (baseFilePath, delimiter) => {
    return _getFileContentsFromState(state, baseFilePath).body.map((row) => {
      const rowCopy = Object.assign({}, row)
      for (const [cellKey, cellVal] of Object.entries(rowCopy)) {
        if (delimiter && cellVal.includes(delimiter)) {
          rowCopy[cellKey] = cellVal.split(delimiter)
        }
      }
      return rowCopy
    })
  },

  [G_GET_CONTENTS_BODY_ALL_HEADERS]: (state) => (baseFilePath) => {
    const headers = []
    _getFileContentsFromState(state, baseFilePath).body.forEach((row) => {
      for (const candidateHeader of Object.keys(row)) {
        // Fixing a bug in @nuxt/content when header contains period character
        const decodedCandHeader = _decodeEscapedHtml(candidateHeader)
        if (!headers.includes(decodedCandHeader)) {
          headers.push(decodedCandHeader)
        }
      }
    })
    return headers
  },
}
