// import { MD_REG_G_COUNT_FETCH_COMPONENTS_IN_PAGE } from '~/store/mdRegister'
import { WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION } from '~/store/windowState'
import { manualScrollTo } from '~/app/router.scrollBehavior'

export default {
  beforeRouteEnter(_to, from, next) {
    next((vm) => {
      vm.prevRoute = from
      const reload = from.name === null
      if (reload) {
        vm.scrollPosition = vm.$store.state.windowState.reloadScrollPosition
      } else {
        vm.scrollPosition = undefined
      }
    })
  },
  data() {
    return {
      // dataFetchedForAllComponents: undefined,
      // totalFetchComponents: undefined,
      prevRoute: undefined,
      scrollPosition: undefined,
    }
  },
  beforeMount() {
    window.addEventListener('beforeunload', this.leave)
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.leave)
  },
  computed: {
    pageName() {
      return this.componentId
    },
  },
  // created() {
  //   const getters = this.$nuxt.context.store.getters
  //   this.totalFetchComponents = getters[MD_REG_G_COUNT_FETCH_COMPONENTS_IN_PAGE](this.pageName)
  //   if ('directFetchChildrenCount' in this) {
  //     this.totalFetchComponents += this.directFetchChildrenCount
  //   }
  //
  //   // console.log(`${this.page}: ${this.totalFetchComponents}`)
  //
  //   if (this.totalFetchComponents > 0) {
  //     this.dataFetchedForAllComponents = new Promise((resolve) => {
  //       let countOfComponentsWithDataFetched = 0
  //       this.$nuxt.$on('dataFetchedForComponent', () => {
  //         countOfComponentsWithDataFetched += 1
  //         if (countOfComponentsWithDataFetched === this.totalFetchComponents) {
  //           // console.log(`Data fetched for ${countOfComponentsWithDataFetched} components`)
  //           resolve(true)
  //         }
  //       })
  //     })
  //   } else {
  //     this.dataFetchedForAllComponents = true
  //   }
  // },
  activated() {
    // Promise.resolve(this.dataFetchedForAllComponents).then(() => {
    manualScrollTo(this.$route, this.prevRoute, this.scrollPosition)
    this.scrollPosition = undefined
    // })
  },
  mounted() {
    // Promise.resolve(this.dataFetchedForAllComponents).then(() => {
    if (process.env.NODE_ENV === 'development') {
      manualScrollTo(this.$route, this.prevRoute, this.scrollPosition)
      this.scrollPosition = undefined
    }
    // })
  },
  methods: {
    leave() {
      const commit = this.$nuxt.context.store.commit
      const position = { x: window.scrollX, y: window.scrollY }
      commit(WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION, position)
    },
  },
}
