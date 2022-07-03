import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  if (process.env.NODE_ENV === 'production') {
    createPersistedState({ storage: window.sessionStorage })(store)
  } else {
    createPersistedState({
      paths: ['windowState.reloadScrollPosition'],
      storage: window.sessionStorage,
    })(store)
  }
}
