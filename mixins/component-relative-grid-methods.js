export default {
  methods: {
    selectByComponentWidthUnbound(selectObj, defaultVal, componentWidth) {
      if (componentWidth >= 1888 && 'xl' in selectObj) {
        return selectObj.xl
      }
      if (componentWidth >= 1248 && 'lg' in selectObj) {
        return selectObj.lg
      }
      if (componentWidth >= 960 && 'md' in selectObj) {
        return selectObj.md
      }
      if (componentWidth >= 600 && 'sm' in selectObj) {
        return selectObj.sm
      }
      if ('xs' in selectObj) {
        return selectObj.xs
      }
      return defaultVal
    },
    calcComponentHeightAsStringUnbound(fraction = 1, addition = 0, componentHeight = 0) {
      return `${componentHeight * fraction + addition}px`
    },
  },
}
