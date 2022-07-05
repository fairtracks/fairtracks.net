import { MD_REG_LATE_RENDERERS } from '~/store/mdRegister'

export const LATE_RENDERER_EVENT_NAME = 'lateRendererMounted'

export default {
  computed: {
    isLateRenderer() {
      return 'componentId' in this && MD_REG_LATE_RENDERERS.has(this.componentId)
    },
  },
  mounted() {
    if (this.isLateRenderer) {
      // Promise.all([
      //   this.fetchedDataItems.map((key) => {
      //     return this[key]
      //   }),
      // ]).then((_response) => {
      //   this.$nuxt.$emit(LATE_RENDERER_EVENT_NAME)
      // })
      this.$nuxt.$emit(LATE_RENDERER_EVENT_NAME)
    }
  },
}
