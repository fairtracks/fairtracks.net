import {
  G_GET_CONTENTS,
  G_GET_CONTENTS_BODY,
  G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS,
  G_GET_CONTENTS_BODY_ALL_HEADERS,
} from '~/store/data/constants'

function _getFileContentsFromState(state, baseFileName) {
  return state.contents[baseFileName]
}

function _decodeEscapedHtml(text) {
  return text.replace(/&#(\d+);/g, function (_match, charCode) {
    return String.fromCharCode(charCode)
  })
}

export default {
  [G_GET_CONTENTS]: (state) => (baseFileName) => {
    return _getFileContentsFromState(state, baseFileName)
  },

  [G_GET_CONTENTS_BODY]: (state) => (baseFileName) => {
    return _getFileContentsFromState(state, baseFileName).body.map((row) => {
      return Object.assign({}, row)
    })
  },

  [G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS]: (state) => (baseFileName, delimiter) => {
    return _getFileContentsFromState(state, baseFileName).body.map((row) => {
      const rowCopy = Object.assign({}, row)
      for (const [cellKey, cellVal] of Object.entries(rowCopy)) {
        if (delimiter && cellVal.includes(delimiter)) {
          rowCopy[cellKey] = cellVal.split(delimiter)
        }
      }
      return rowCopy
    })
  },

  [G_GET_CONTENTS_BODY_ALL_HEADERS]: (state) => (baseFileName) => {
    const headers = []
    _getFileContentsFromState(state, baseFileName).body.forEach((row) => {
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
