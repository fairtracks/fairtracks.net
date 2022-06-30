// import { MD_REG_FETCH_COMPONENTS } from '~/store/mdRegister'

export default {
  fetchKey(getCounter) {
    const fetchKey = [
      this.componentId,
      this.fetchKeyBase,
      getCounter([this.componentId, this.fetchKeyBase].join('.')),
    ].join('.')
    return fetchKey
  },
  // created() {
  //   if (this.isEmitEventComponent && !this.isMarkDownFetchComponent) {
  //     Promise.resolve(this.$fetchState.pending).then(() => {
  //       this.$nuxt.$emit('dataFetchedForComponent')
  //     })
  //   }
  // },
  // computed: {
  //   isMarkDownFetchComponent() {
  //     return 'componentId' in this && MD_REG_FETCH_COMPONENTS.has(this.componentId)
  //   },
  //   isEmitEventComponent() {
  //     return 'componentId' in this
  //   },
  // },
  // mounted() {
  //   if (this.isMarkDownFetchComponent) {
  //     Promise.all([
  //       this.fetchedDataItems.map((key) => {
  //         return this[key]
  //       }),
  //     ]).then((_response) => {
  //       this.$nuxt.$emit('dataFetchedForComponent')
  //     })
  //   }
  // },
}
