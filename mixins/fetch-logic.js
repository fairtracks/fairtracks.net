export default {
  fetchKey(getCounter) {
    const fetchKey = [
      this.componentId,
      this.fetchKeyBase,
      getCounter([this.componentId, this.fetchKeyBase].join('.')),
    ].join('.')
    return fetchKey
  },
}
