import ComponentRelativeGridMethods from '~/mixins/component-relative-grid-methods'

export default {
  mixins: [ComponentRelativeGridMethods],
  data() {
    return {
      componentWidth: null,
      componentHeight: null,
      componentKey: 0,
      componentRef: undefined, // Must be overridden
    }
  },
  computed: {
    componentHorizontal() {
      return this.componentHeight < this.componentWidth
    },
    componentHorizontalAndVeryWide() {
      return 1.7 * this.componentHeight < this.componentWidth
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResizeWindow)
    this.componentKey += 1
    this.onResizeWindow()
  },
  destroyed() {
    window.removeEventListener('resize', this.onResizeWindow)
  },
  methods: {
    onResizeWindow(_e) {
      console.log(this.componentRef)
      if (this.$refs[this.componentRef] !== undefined) {
        this.componentWidth = this.$refs[this.componentRef].clientWidth
        this.componentHeight = this.$refs[this.componentRef].clientHeight
      }
    },
    selectByComponentWidth(selectObj, defaultVal, log = false) {
      return this.selectByComponentWidthUnbound(
        selectObj,
        defaultVal,
        this.componentWidth,
        log
      )
    },
    calcComponentHeightAsString(fraction, addition) {
      return this.calcComponentHeightAsStringUnbound(
        fraction,
        addition,
        this.componentHeight
      )
    },
  },
}
