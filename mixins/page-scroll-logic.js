import { MD_REG_G_GET_LATE_RENDERER_COUNT_IN_PAGE } from '~/store/mdRegister'
import { WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION } from '~/store/windowState'
import { manualScrollTo } from '~/app/router.scrollBehavior'
import { LATE_RENDERER_EVENT_NAME } from '~/mixins/late-renderer'

export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from
      const reload = from.name === null
      if (reload) {
        const scrollPosition = vm.$store.state.windowState.reloadScrollPosition

        // Not opening a new page with a hash URL
        if (!(scrollPosition.y === 0 && to.hash)) {
          vm.scrollPosition = scrollPosition
        }
      } else {
        vm.scrollPosition = undefined
      }
    })
  },
  data() {
    return {
      allLateRenderersMounted: undefined,
      totalLateRenderers: undefined,
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
  created() {
    const getters = this.$nuxt.context.store.getters
    this.totalLateRenderers = getters[MD_REG_G_GET_LATE_RENDERER_COUNT_IN_PAGE](this.pageName)

    // console.log(`${this.page}: ${this.totalFetchComponents}`)

    if (this.totalLateRenderers > 0) {
      this.allLateRenderersMounted = new Promise((resolve) => {
        let mountedCount = 0
        this.$nuxt.$on(LATE_RENDERER_EVENT_NAME, () => {
          // console.log(`Received ${LATE_RENDERER_EVENT_NAME} event...`)
          mountedCount += 1
          if (mountedCount === this.totalLateRenderers) {
            // console.log(`Data fetched for ${mountedCount} components`)
            resolve(true)
          }
        })
      })
    } else {
      this.allLateRenderersMounted = true
    }
  },
  activated() {
    Promise.resolve(this.allLateRenderersMounted).then(() => {
      manualScrollTo(this.$route, this.prevRoute, this.scrollPosition)
      this.scrollPosition = undefined
    })
  },
  mounted() {
    Promise.resolve(this.allLateRenderersMounted).then(() => {
      if (process.env.NODE_ENV === 'development') {
        manualScrollTo(this.$route, this.prevRoute, this.scrollPosition)
        this.scrollPosition = undefined
      }
    })
  },
  methods: {
    leave() {
      const commit = this.$nuxt.context.store.commit
      const position = { x: window.scrollX, y: window.scrollY }
      commit(WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION, position)
    },
  },
}
