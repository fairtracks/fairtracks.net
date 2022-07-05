export default {
  fetchKey(getCounter) {
    return [
      this.componentId,
      this.fetchKeyBase,
      getCounter([this.componentId, this.fetchKeyBase].join('.')),
    ].join('.')
  },
}
