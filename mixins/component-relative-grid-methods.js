export default {
  methods: {
    selectByComponentWidthUnbound(
      selectObj,
      defaultVal,
      componentWidth,
      log = false
    ) {
      if (log) {
        console.log(componentWidth)
        console.log(selectObj)
      }
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
    calcComponentHeightAsStringUnbound(fraction, addition, componentHeight) {
      return `${componentHeight * fraction + addition}px`
    },
  },
}
